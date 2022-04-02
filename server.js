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

