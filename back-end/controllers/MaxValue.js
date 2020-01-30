const array = require("./array");
const array2 = require("./array2");
require("dotenv/config");
const client = require("../connection");
module.exports = {
  async index(req, res) {
    //Busca os cliente que mais realizou compras em 2019
    //Faz a busca no banco de dados, com uma data estática, mas pode ser dinâmica
    client.query(
      `SELECT codigocliente
        FROM clients.itens2
        GROUP BY codigocliente,valortotal
        HAVING valortotal = (SELECT MAX(valortotal) FROM clients.itens2 WHERE 
        data >= '01-01-2019'::date and data <= '31-12-2019'::date and qtd = '1')`,
      (error, results) => {
        if (error) throw error;
        client.query(
          `SELECT nome FROM clients.cliente2 WHERE cpf = '${results.rows[0].codigocliente}'`,
          (error, r) => {
            if (error) throw error;
            res.status(200).json({ clientes: r.rows });
          }
        );
      }
    );
  },
  async store2(req, res) {
    array.map((value, index) => {
      client.query(
        `INSERT INTO clients.itens2(codigoproduto, data, valortotal, codigocliente, qtd)
          VALUES ('${value.codigo}', '${value.data}', '${value.valorTotal}', '${value.cliente}', ${value.itens.length});`,
        (error, results) => {
          if (error) throw error;
          setTimeout(() => {
            res.json("Ok");
          }, 10000);
        }
      );
    });
  },
  async store3(req, res) {
    array2.map((value, index) => {
      client.query(
        `INSERT INTO clients.cliente2(
	            nome, cpf, id)
	            VALUES ('${value.nome}', '${value.cpf}', ${value.id});`,
        (error, results) => {
          if (error) {
            throw error;
          }
          setTimeout(() => {
            res.json("Ok");
          }, 10000);
        }
      );
    });
  },
  async store4(req, res) {
    array.map((value, index) => {
      value.itens.map((i, index2) => {
        client.query(
          `INSERT INTO clients.produtos2(
        produto, tamanho, marca, preco, codigo)
        VALUES ('${i.produto}', '${i.tamanho}', '${i.marca}', '${i.preco}','${value.codigo}');`,
          (error, results) => {
            if (error) {
              throw error;
            }
            setTimeout(() => {
              res.json("Ok");
            }, 10000);
          }
        );
      });
    });
  }
};