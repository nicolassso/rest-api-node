let mysql = require('mysql');
let config = require('./config.js')

//connect mysql db
let connection = mysql.createConnection(config);

//connect function
const connectDB = () => {
    connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });
}
connectDB();

//disconnect function
const endConnect = () => {
    connection.end(function(err) {
        if (err) {
          return console.log('error:' + err.message);
        }
        console.log('Closed database connection.');
      });
}

