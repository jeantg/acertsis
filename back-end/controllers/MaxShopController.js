const client = require("../connection");
module.exports = {
  async index(req, res) {
    console.log("Max clientes");
    client.query(
      `SELECT codigocliente,valortotal,to_char(data, 'DD-MM-YYYY')dat
      FROM clients.itens2
      GROUP BY codigocliente,valortotal,data
      HAVING valortotal = (SELECT MAX(valortotal) FROM clients.itens2 WHERE 
      data >= '01-01-2019'::date and data <= '31-12-2019'::date and qtd = '1')`,
      (error, results) => {
        if (error) throw error;
        client.query(
          `SELECT nome,data FROM clients.cliente2,clients.itens2 WHERE cpf='${results.rows[0].codigocliente}'`,
          (error, r) => {
            if (error) throw error;
            res
              .status(200)
              .json([
                { cliente: r.rows[0], valortotal: results.rows[0].valortotal, dat: results.rows[0].dat}
              ]);
          }
        );
      }
    );
  }
};