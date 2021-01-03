const connection = require("./connection");

module.exports = {
  getEmployees() {
    return connection.query("SELECT * FROM employee");
  },
  getEmployeesByDepartment() {
    return connection.query(
      "SELECT first_name, last_name, department from employee;"
    );
  },
  getEmployeesByManager() {
    return connection.query(
      "SELECT first_name, last_name, manager_name from employee;"
    );
  },
  getDepartments() {
    return connection.query("SELECT * FROM department");
  },
  getRoles() {
    return connection.query("SELECT * FROM role");
  },
};
