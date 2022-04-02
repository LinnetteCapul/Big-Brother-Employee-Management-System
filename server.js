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
    const sql = `SELECT id AS id, name AS department ORDER BY department.name`;

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
    const sql = `SELECT * FROM roles JOIN department ON role.department_id = department.id`;

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
    const sql = `SELECT * FROM employee JOIN roles ON employee.roles_id = roles.id`;

    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        console.table(rows);
        mainMenu();
    })
}

function addDept() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "addDept",
                message: "What is the name of the new department?",
            },
        ])
        .then(answers => {
            const sql = `INSERT INTO department(name) VALUES(?)`;
            const params = answers.addDept;
            
        db.query(sql, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(`Successfully added new department to the employee database!`);
            mainMenu();
        });
    });
}

function addRole() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "addRole",
                message: "What is the name of the new role?"
            },
            {
                type: "input",
                name: "roleSalary",
                message: "What the salary of the new role?",
            },
            {
                type: "list",
                name: "roleDept",
                message: "Which department does the new role belong to?",
                choices: department,
            },
        ])
        .then((answers) => {
            const sql = ` INSERT INTO roles (title, salary, department_id) VALUES(?, ?, ?)`;
            const params = [
                answers.addRole,
                answers.roleSalary,
                answers.roleDept,
            ];
        db.query(sql, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(`Successfully added new role to the employee database!`);
            mainMenu();
        });
    });
}

function addEmployee() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "firstName",
                message: "What is the new employee's first name?",
            },
            {
                type: "input",
                name: "lastName",
                message: "What is the new employee's last name?",
            },
            {
                type: "list",
                name: "employeeRole",
                message: "What is the new employee's role?",
                choices: roles,
            },
            {
                type: "list",
                name: "employeeManager",
                message: "Who is the new employee's manager?",
                choices: manager
            }
        ])
        .then(answers => {
            const sql = ` INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES(?, ?, ?, ?)`;
            const params = [
                answers.firstName,
                answers.lastName,
                answers.employeeRole,
                answers.employeeManager
            ];
        db.query(sql, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(`Successfully added new employee to the employee database!`);
            mainMenu();
        });
    });
}