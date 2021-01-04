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

// function addEmployee() {
//   db.getDepartments().then((departments) => {
//     console.log(departments);

//     const departmentChoices = departments.map((departments) => ({
//       value: departments.id,
//       label: departments.name,
//     }));
//     // console.log(departments.map((department) => ({
//     //   value: department.id,
//     //   label: department.name
//     // }))

//     inquirer
//       .prompt([
//         {
//           message: "What department is this role for?",
//           type: "list",
//           name: department_id,
//           choices: departmentChoices,
//         },
//       ])
//       .then((res) => {
//         console.log(res);
//       });
//   });
// }

// function removeEmployee() {}

// function updateEmployeeRole() {}

// function updateEmployeeManager() {}

// function addRole();

// function removeRole();

// function addDepartment();

// function removeDepartment();

askForAction();
