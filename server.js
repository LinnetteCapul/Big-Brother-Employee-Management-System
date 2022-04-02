const mysql = require("mysql2");
const inquirer = require("inquirer");
require("console.table");

const db = mysql.createConnection(
    {
      host: "localhost",
      user: "root",
      password: "appa247",
      database: "employee_db",
    },
    console.log(`Connected to the employee database.`)
  );

function mainMenu() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "menuChoices",
                message: "What would you like to do?",
                choices: [
                    "View all departments",
                    "View all roles",
                    "View all employees",
                    "Add a department",
                    "Add a role",
                    "Add an employee",
                    "Update an employee role",
                    "Quit"
                ],
            },
        ])
        .then((choice) => {
            switch (choice.menuChoices) {
                case "View all departments": 
                    return viewAllDepts();
                case "View all roles":
                    return viewAllRoles();
                case "View all employees":
                    return viewAllEmployees();
                case "Add a department":
                    return addDept();
                case "Add a role":
                    return addRole();
                case "Add an employee":
                    return addEmployee();
                case "Update an employee role":
                    return updateEmployRole();
                default:
                    process.exit()
            }
        });
}