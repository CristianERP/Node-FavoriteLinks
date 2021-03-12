
// const mariadb = require('mariadb');
// const { promisify }= require('util');

// const { database } = require('./keys');

// const pool = mariadb.createPool(database);

// pool.getConnection()
//     .then(conn => {
//       console.log("Connected");
//       conn.release(); //releas to pool
//     })
//     .catch(err => {
//       console.log("not connected due to error: " + err);
//     });
// // Promisify Pool Querys
// pool.query = promisify(pool.query);

// module.exports = pool;

const mysql = require('mysql');
const { promisify }= require('util');

const { database } = require('./keys');

const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('Database connection was closed.');
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
      console.error('Database has to many connections');
    }
    if (err.code === 'ECONNREFUSED') {
      console.error('Database connection was refused');
    }
  }

  if (connection) connection.release();
  console.log('DB is Connected');

  return;
});

// Promisify Pool Querys
pool.query = promisify(pool.query);

module.exports = pool;