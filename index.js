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
        "View All Minions",
        "View All Minions by Departments",
        "View All Minions by Overlord",
        "Add Minion",
        "Remove Minion",
        "Update Minion Role",
        "Update Minion Overlord",
        "QUIT",
      ],
    })
    .then(() => {
      switch (res.action) {
        case "View All Minions":
          viewDepartment();
          return;
        case "View All Minions by Departments":
          viewMinionsbyDepartment();
          return;
        case "View All Minions by Overlord":
          viewMionionsbyOverlord();
          return;
        case "Add Minion":
          addMinion();
          return;
        case "Remove Minion":
          removeMinion();
          return;
        case "Update Minion Role":
          updateMinionRole();
          return;
        case "Update Minion Overlord":
          updateMinionOverlord();
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

function addMinion() {
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

askForAction();
