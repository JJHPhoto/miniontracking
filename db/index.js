const connection = require("./connection");

module.exports = {
  getDepartments() {
    return connection.queary("SELECT * FROM departments");
  },
  getRoles() {
    return connection.queary("SELECT * FROM role");
  },
  getEmployees() {
    return connection.queary("SELECT * FROM employee");
  },
};
