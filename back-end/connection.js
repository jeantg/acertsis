const Pool = require("pg").Pool;
require("dotenv/config");
const { Client } = require("pg");
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});
client.connect();
module.exports = client;
