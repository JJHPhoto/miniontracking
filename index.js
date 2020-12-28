const inquirer = require("inquirer");
const db = require("./db");
const connection = require("./db/connection");

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
      ],
    })
    .then((res) => {
      switch (res.action) {
        case "View All Employees":
          viewDepartment();
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
        default:
          connection.end();
      }
    });
}

function viewDepartment() {
  db.getDepartments().then((results) => {
    console.table(results);
    askForAction();
  });
}

function viewEmployeesbyDepartment() {}

function viewEmployeesbyManager() {}

function addEmployee() {
  db.getDepartments().then((departments) => {
    console.log(departments);

    const departmentChoices = departments.map((departments) => ({
      value: departments.id,
      label: departments.name,
    }));
    // console.log(departments.map((department) => ({
    //   value: department.id,
    //   label: department.name
    // }))

    inquirer
      .prompt([
        {
          message: "What department is this role for?",
          type: "list",
          name: department_id,
          choices: departmentChoices,
        },
      ])
      .then((res) => {
        console.log(res);
      });
  });
}

function removeEmployee() {}

function updateEmployeeRole() {}

function updateEmployeeManager() {}

askForAction();
