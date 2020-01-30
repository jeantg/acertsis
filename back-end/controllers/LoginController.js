const client = require('../connection')
module.exports = {
    async index(req, res) {
        const { id } = req.headers;
        client.query(`SELECT * FROM clients.cliente WHERE cpf = '${id}'`, (error, results) => { 
            if (error) 
                 throw error
            res.json(results.rows)
  }) 
 
    },
}