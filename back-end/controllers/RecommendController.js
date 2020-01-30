const client = require('../connection')
module.exports = {
    async index(req, res) {
        const { id } = req.headers;  
        client.query(`SELECT DISTINCT(produto)
        FROM  clients.itens WHERE itens.codigocliente = '${id}';`, (error, results) => { 
          client.query(`SELECT produto,marca,preco, tamanho
            FROM  clients.produtos WHERE produto = '${results.rows[0].produto}';`, (error, r) => { 
                if (error) 
                     throw error
                     res.json(r.rows[0])
      }) 
            if (error) 
                 throw error
  }) 
 
    },
}
