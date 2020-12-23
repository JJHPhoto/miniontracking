const util = require("util");
const mysql = require("mysql");
const inquirer = require("inquirer");
const ascii_art = require("ascii-art");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "employees",
});

connection.connect();

connection.query = util.promisify(connection.query);

connection.query("", function (err, res) {});

connection
  .query("")
  .then((res) => {})
  .catch(() => {});

module.exports = connection;
