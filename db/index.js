const connection = require("./connection");

module.exports = {
  getEmployees() {
    return connection.query("SELECT * FROM employee");
  },
  getEmployeesByDepartment() {
    return connection.query(
      "SELECT employee.first_name AS 'First Name', employee.last_name, role.title, role.salary FROM employee LEFT JOIN role ON employee.role_id = role.role_id;"
    );
  },
  getEmployeesByManager() {
    return connection.query("SELECT * FROM employee ORDER BY manager_name;");
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
    return connection.query("SELECT * FROM department");
  },
  getRoles() {
    return connection.query("SELECT * FROM role");
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
