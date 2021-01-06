use employeesdb;

INSERT INTO department
  (name)
VALUES
  ("Sales"),
  ("Engineering"),
  ("Finance"),
  ("Legal");
  
INSERT INTO role
    (title, salary, role_id)
VALUES
    ("Sales Lead", 100000, 1),
    ("Salesperson", 80000, 2),
    ("Lead Engineer", 150000, 3),
    ("Account Manager", 120000, 4),
    ("Accountant", 160000, 5),
    ("Accountant", 125000, 6),
    ("Legal Team Lead", 250000, 7),
    ("Lawyer", 190000, 8);

INSERT INTO employee
  (first_name, last_name, role_id, role, department, manager_id, manager_name)
VALUES
  ("John", "Doe", 1, "Sales Lead", "Sales", NULL, NULL),
  ("Mike", "Chan", 2, "Salesperson", "Engineering", 1, "James"),
  ("Ashley", "Rodriguez", 3, "Lead Engineer", "Finance", NULL, NULL),
  ("Kevin", "Tupik", 4, "Account Manager", "Finance", 3, "Lisa"),
  ("Kunal", "Singh", 5, "Accountant", "Engineering", NULL, NULL),
  ("Malia", "Brown", 6, "Accountant", "Sales", 5, "Jack"),
  ("Sarah", "Lord", 7, "Legal Team Lead", "Legal",  NULL, NULL),
  ("Tom", "Allen", 8, "Lawyer", "Legal", 7, "Rita")