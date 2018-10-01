/*
*************MySQL Connection stuff******************
*/

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'liset',
  password: 'Lvaldes988@',
  database: 'todolist'
});

connection.connect();

module.exports = connection;

// connection.end();