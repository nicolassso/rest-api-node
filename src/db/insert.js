let mysql  = require('mysql');
let config = require('./config.js');
let connection = mysql.createConnection(config);

// insert statment
//table cuadros_db
let sql = `INSERT INTO cuadros_db(name, collection, author, price, description)
           VALUES('miel en la cara', 'mascarillas', 'José Marchá', '700', 'Mujer realista con chorros de miel')`;

// execute the insert statment
connection.query(sql);

connection.end();