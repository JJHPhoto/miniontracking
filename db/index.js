const connection = require("./connection");

module.exports = {
  getEmployees() {
    return connection.query("SELECT * FROM employee");
  },
  getEmployeesByDepartment() {
    return connection.query("SELECT * FROM employee ORDER BY department;");
  },
  getEmployeesByManager() {
    return connection.query("SELECT * FROM employee ORDER BY manager_name;");
  },
  getDepartments() {
    return connection.query("SELECT * FROM department");
  },
  getRoles() {
    return connection.query("SELECT * FROM role");
  },
};
