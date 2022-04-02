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
    console.log(`Connected to the employee database. Remember, Big Brother is watching.`)
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
        .then((answers) => {
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

function viewAllDepts() {
    const sql = "SELECT id AS id, name AS department ORDER BY department.name";

    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        console.table(rows);
        mainMenu();
    })
}

function viewAllRoles() {
    const sql = "SELECT * FROM roles JOIN department ON role.department_id = department.id";

    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        console.table(rows);
        mainMenu();
    })
}

function viewAllEmployees() {
    const sql = "SELECT * FROM employee JOIN roles ON employee.roles_id = roles.id"

    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        console.table(rows);
        mainMenu();
    })
}