const inquirer = require("inquirer");
const db = require("./db");
const connection = require("./db/connection");
const index = require("./db/index");
const cTable = require("console.table");
const logo = require("asciiart-logo");
const config = require("./package.json");
const { getEmployeesByManager } = require("./db");
console.log(logo(config).render());

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
        // "Remove Employee",
        // "Update Employee Role",
        // "Update Employee Manager",
        "View All Roles",
        "Add Role",
        // "Remove Role",
        "View All Departments",
        "Add Department",
        // "Remove Department",
        "Finish",
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
        // case "Remove Employee":
        //   removeEmployee();
        //   return;
        // case "Update Employee Role":
        //   updateEmployeeRole();
        //   return;
        // case "Update Employee Manager":
        //   updateEmployeeManager();
        //   return;
        case "View All Roles":
          viewAllRoles();
          return;
        case "Add Role":
          addRole();
          return;
        // case "Remove Role":
        //   removeRole();
        //   return;
        case "View All Departments":
          viewAllDepartments();
          return;
        case "Add Department":
          addDepartment();
          return;
        // case "Remove Department":
        //   removeDepartment();
        //   return;
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
  // db.selectRoles().then((role) => {
  //   const roleOptions = role.map((data) => ({
  //     value: data.role_id,
  //     name: data.title,
  //   }));

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
      // {
      //   message: "What role does your employee have?",
      //   type: "list",
      //   name: "role_id",
      //   choices: roleOptions,
      // },
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
      // console.log(results);
      db.addNewEmployee(results);
      askForAction();
    });
  // });
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

// function updateEmployeeRole() {
//   console.log("\n Lets update your employee's role!");
//   db.getEmployees().then((employee) => {
//     // const employeeUpdate = employee.map((data) => ({
//     //   value: data.id,
//     //   name: data.first_name + " " + data.last_name,
//     // }));

//     inquirer
//       .prompt([
//         {
//           name: "id",
//           type: "list",
//           message: "Which employee do you want to update?",
//           choices: employee.map((employee) => ({
//             value: employee.id,
//             name: employee.first_name + " " + employee.last_name,
//           })),
//         },
//       ])
//       .then((data1) => {
//         db.selectRoles().then((role) => {
//           inquirer
//             .prompt([
//               {
//                 name: "role_id",
//                 type: "list",
//                 message: "What is their updated role?",
//                 choices: role.map((role) => ({
//                   value: role.id,
//                   name: role.title,
//                 })),
//               },
//             ])
//             .then((data2, err) => {
//               let data = {
//                 ...data1,
//                 ...data2,
//               };
//               db.updateRole(data);
//               if (err) throw err;
//               console.log("Your employee's role has been updated");
//               askForAction();
//             });
//         });
//       });
//   });
// }

function viewAllDepartments() {
  db.getDepartments().then((results) => {
    console.table(results);
    askForAction();
  });
}

function addDepartment() {
  console.log("\n Lets add a new department to your company!");
  inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "What department would you like to add to your company?",
      },
    ])
    .then((res, err) => {
      db.addNewDepartment(res);
      if (err) throw err;
      console.log("You have added a new department to your company!");
      askForAction();
    });
}

function viewAllRoles() {
  db.viewRoles().then((results) => {
    console.table(results);
    askForAction();
  });
}

function addRole() {
  console.log("\n Lets add a new role to your team!");
  inquirer
    .prompt([
      {
        message: "What role would you like to add?",
        type: "input",
        name: "title",
      },
      {
        message: "What is the salary for this role?",
        type: "input",
        name: "salary",
      },
    ])
    .then((results) => {
      db.addNewRole(results);
      askForAction();
    });
}

//=====================
//To Dos

// function removeEmployee() {}

// function updateEmployeeManager() {}

// function removeRole();

// function removeDepartment();

askForAction();
