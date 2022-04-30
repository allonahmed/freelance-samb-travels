const mysql = require("mysql");

const db = mysql.createConnection({
  host: "us-cdbr-east-05.cleardb.net",
  user: "ba65f2d258d106",
  password: "306e281d",
  database: "heroku_03639dc988b6688",
  multipleStatements: true
});

module.exports = db;

// mysql://ba65f2d258d106:306e281d@us-cdbr-east-05.cleardb.net/heroku_03639dc988b6688?reconnect=true
