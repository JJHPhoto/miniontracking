const connection = require("./connection");

module.exports = {
  getEmployees() {
    return connection.query(
      "SELECT employee.first_name AS 'First Name', employee.last_name AS 'Last Name', employee.role_id AS 'Role ID', employee.role AS 'Role', employee.department AS 'Department', employee.manager_id AS 'Manager ID', employee.manager_name AS 'Manager Name' FROM employee ORDER BY last_name"
    );
  },
  getEmployeesByDepartment() {
    return connection.query(
      "SELECT employee.first_name AS 'First Name', employee.last_name AS 'Last Name', employee.department AS 'Department' FROM employee LEFT JOIN role ON employee.role_id = role.role_id ORDER BY department desc"
    );
  },
  getEmployeesByManager() {
    return connection.query(
      "SELECT employee.first_name AS 'First Name', employee.last_name AS 'Last Name', employee.role_id AS 'Role ID', employee.role AS 'Role', employee.manager_id AS 'Manager ID', employee.manager_name AS 'Manager Name' FROM employee ORDER BY manager_name desc"
    );
  },
  addNewEmployee(data) {
    return connection.query("INSERT INTO employee SET ?", data);
  },
  updateRole(data) {
    return connection.query("UPDATE employee SET ? WHERE ?", [
      {
        role_id: data.role_id,
      },
      {
        id: data.id,
      },
    ]);
  },
  getDepartments() {
    return connection.query(
      "SELECT department.department_id AS 'Department ID', department.name AS 'Name' FROM department"
    );
  },
  addNewDepartment(res) {
    return connection.query("INSERT INTO department SET ?", {
      name: res.name,
    });
  },
  getRoles() {
    return connection.query(
      "SELECT employee.first_name AS 'First Name', employee.last_name, role.title, role.salary FROM employee LEFT JOIN role ON employee.role_id = role.role_id;"
    );
  },
};

//trying something here that couldnt' figure out.
// addNewEmployee(id, first, last, role, department, managerID, manager) {
//   return connection.query("INSERT INTO employee SET?", {
//     id: id,
//     first_name: first,
//     last_name: last,
//     role_id: role,
//     department: department,
//     manager_id: managerID,
//     manager_name: manager,
//   });
// },
