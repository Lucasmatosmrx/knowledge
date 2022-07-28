//quando coloco {} que é destructor consigo pegar o atributo db de dentro do arquivo .env
const { db } = require("./.env");

module.exports = {
  client: "postgresql",
  connection: db,
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
  },
};
