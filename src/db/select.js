let mysql = require('mysql');
let config = require('./config.js');

let connection = mysql.createConnection(config);

let sql = `SELECT * FROM cuadros_db`;


const querySql = () => {
    connection.query(sql, (error, results, fields) => {
        if (error) {
          return console.error(error.message);
        }
        console.log(results);
      });
      
    connection.end();

}

module.exports = querySql

