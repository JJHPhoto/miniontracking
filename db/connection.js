const util = require("util");
const mysql = require("mysql");
// const inquirer = require("inquirer");
// const ascii_art = require("asciiart-logo");
// const config = require("./package.json");
// console.log(ascii_art(config).render());

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "employeesdb",
});

connection.connect();

connection.query = util.promisify(connection.query);

// connection.query("", function (err, res) {});

// connection
//   .query("")
//   .then((res) => {})
//   .catch(() => {});

module.exports = connection;
