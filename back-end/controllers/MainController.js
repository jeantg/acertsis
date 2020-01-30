const client = require("../connection");
module.exports = {
  async index(req, res) {
    const { page } = req.params;
    //Obtêm a quantidade de elementos
    client.query(
      `SELECT valortotal,nome from clients.cliente2 
        INNER JOIN clients.itens2 
        ON codigocliente = cpf
        ORDER BY valortotal asc;`,
      (error, results) => {
        if (error) throw error;
        client.query(
          `SELECT valortotal,nome, to_char(data, 'DD-MM-YYYY')dat from clients.cliente2 
               INNER JOIN clients.itens2 
               ON codigocliente = cpf
               ORDER BY valortotal asc LIMIT 5 OFFSET ${page};`,
          (error, r) => {
            if (error) throw error;
            console.log(r.rows)
            res.json({ total: results.rows.length, clientes: r.rows });
          }
        );
      }
    );
  }
};