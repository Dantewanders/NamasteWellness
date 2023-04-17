// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  client:process.env.db_client || 'mysql2',
  connection: {
    host : process.env.db_host || 'localhost',
    port : process.env.db_port ||  3306,
    user : process.env.db_user || 'root',
    password : process.env.db_password || 'mypassword',
    database : process.env.db_database || 'namaste'
  }
}