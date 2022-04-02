INSERT INTO department (name)
VALUES ("Operations"),
        ("Marketing"),
        ("Human Resources"),
        ("Customer Service"),
        ("Accounting");

INSERT INTO roles (title, salary, department_id)
VALUES ("Operations Manager", 120000, 1), 
        ("Director of Sales", 180000, 2),
        ("Marketing Coordinator", 70000, 2),
        ("HR Personnel", 75000, 3),
        ("Customer Sales Representative", 45000, 4),
        ("Accountant", 65000, 5),
        ("Operations Specialist", 77000, 1),
        ("Call Center Supervisor", 60000, 4),


INSERT INTO employee (first_name, last_name, roles_id, manager_id)
VALUES ("Albus", "Dumbledore", 1, 1), 
        ("Lord", "Voldemort", 2, 2), 
        ("Harry", "Potter", 3, NULL),
        ("Hermione", "Granger", 4, NULL),
        ("Ron", "Weasley", 5, NULL),
        ("Luna", "Lovegood", 6, NULL),
        ("Draco", "Malfoy", 7, NULL),
        ("Severus", "Snape", 8, 3);
