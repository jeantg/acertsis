const client = require("../connection");
module.exports = {
  async index(req, res) {
    const { page } = req.params;
    //Consulta para paginação
    client.query(
      `SELECT DISTINCT(nome),valortotal,to_char(data, 'DD-MM-YYYY')dat FROM clients.cliente2, clients.itens2 WHERE data >= '01-01-2018'::date and data <= '31-12-2018'::date ORDER BY nome desc LIMIT 5 OFFSET ${page};`,
      (error, results) => {
        if (error) throw error;
        //Obter o tamanho dos dados
        //Está não é uma abordagem eficiente, tendo em vista o volume dos dados isso pode demorar muito
        client.query(
          `SELECT nome,valortotal,data FROM clients.cliente2, clients.itens2 WHERE data >= '01-01-2018'::date and data <= '31-12-2018'::date ORDER BY nome desc`,
          (error, r) => {
            res.json({ clientes: results.rows, total: r.rows.length });
          }
        );
      }
    );
  }
};
