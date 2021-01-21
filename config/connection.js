// Set up MySQL connection.
var mysql = require("mysql2");

var connection;

if (process.env.JAWSDB_URL) { // connect to either a local or the jawsDB heroku database
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: "burgers_db",
  });
};

// Make connection.
connection.connect();

// Export connection for our ORM to use.
module.exports = connection;
