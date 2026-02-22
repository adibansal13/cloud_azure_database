const sql = require("mssql");

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  options: {
    encrypt: true,
  },
};

const pool = new sql.ConnectionPool(config).connect().then(pool => {
  console.log("Azure SQL Connected");
  return pool;
});

module.exports = { sql, pool };
