const inquirer = require("inquirer");
const db = require("./db");
const connection = require("./db/connection");
const index = require("./db/index");
const cTable = require("console.table");

function askForAction() {
  inquirer
    .prompt({
      message: "Choose something to do",
      name: "action",
      type: "list",
      choices: [
        "View All Employees",
        "View All Employees by Departments",
        "View All Employees by Manager",
        "Add Employee",
        "Remove Employee",
        "Update Employee Role",
        "Update Employee Manager",
        "View All Roles",
        "Add Role",
        "Remove Role",
        "View All Departments",
        "Add Department",
        "Remove Department",
      ],
    })
    .then((response) => {
      switch (response.action) {
        case "View All Employees":
          viewAllEmployees();
          return;
        case "View All Employees by Departments":
          viewEmployeesbyDepartment();
          return;
        case "View All Employees by Manager":
          viewEmployeesbyManager();
          return;
        case "Add Employee":
          addEmployee();
          return;
        case "Remove Employee":
          removeEmployee();
          return;
        case "Update Employee Role":
          updateEmployeeRole();
          return;
        case "Update Employee Manager":
          updateEmployeeManager();
          return;
        case "View All Roles":
          viewAllRoles();
        case "Add Role":
          addRole();
        case "Remove Role":
          removeRole();
        case "View All Departments":
          viewAllDepartments();
        case "Add Department":
          addDepartment();
        case "Remove Department":
          removeDepartment();
        default:
          connection.end();
      }
    });
}

function viewAllEmployees() {
  db.getEmployees().then((results) => {
    console.table(results);
    askForAction();
  });
}

function viewEmployeesbyDepartment() {
  db.getEmployeesByDepartment().then((results) => {
    console.table(results);
    askForAction();
  });
}

function viewEmployeesbyManager() {
  db.getEmployeesByManager().then((results) => {
    console.table(results);
    askForAction();
  });
}

function addEmployee() {
  console.log("\n Lets add a new employee to your team!");
  db.getRoles().then((role) => {
    const roleOptions = role.map((roles) => ({
      value: roles.role_id,
      name: roles.title,
    }));

    //need to add roles, not just role_id
    inquirer
      .prompt([
        {
          message: "What is your employee's first name?",
          type: "input",
          name: "first_name",
        },
        {
          message: "What is your employee's last name?",
          type: "input",
          name: "last_name",
        },
        // {
        //   message: "What is your employee's role ID?",
        //   type: "input",
        //   name: "roleID",
        // },
        {
          message: "What role does your employee have?",
          type: "list",
          name: "role_id",
          choices: roleOptions,
        },
        // {
        //   message: "Who is your employee's manager?",
        //   type: "list",
        //   name: "manager",
        //   choices: ["James", "Lisa", "Jack", "Rita"],
        // },
        // {
        //   message: "What is that manager's ID?",
        //   type: "list",
        //   name: "managerID",
        //   choices: ["1", "2", "3", "4"],
        // },
      ])
      .then((results) => {
        console.log(results);
        db.addNewEmployee(results);
        askForAction();
      });
  });
}
// finishedResults = {
//   first_name: results.first,
//   last_name: results.last,
//   role_id: results.roleID,
//   department: results.department,
//   manager_id: results.managerID,
//   manager_name: results.manager,
// };
// db.addNewEmploye(finishedResults);
// console.log(
//   `${results.first} ${results.last} has been added to the ${results.department} department. \n`
// );
//       askForAction();
//     });
// });

//pseudo code from demo.
// const departmentChoices = departments.map((departments) => ({
//   value: departments.id,
//   label: departments.name,
// }));
// console.log(departments.map((department) => ({
//   value: department.id,
//   label: department.name
// }))

// name: department_id,
// choices: departmentChoices

// function updateEmployeeRole() {}

function viewAllDepartments() {
  db.getDepartments().then((results) => {
    console.table(results);
    askForAction();
  });
}

function viewAllRoles() {
  db.getRoles().then((results) => {
    console.table(results);
    askForAction();
  });
}

//=====================
//To Dos

// function removeEmployee() {}

// function updateEmployeeManager() {}

// function addRole();

// function removeRole();

// function addDepartment();

// function removeDepartment();

askForAction();
