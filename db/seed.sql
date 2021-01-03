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
  (first_name, last_name, role_id, department, manager_id, manager_name)
VALUES
  ("John", "Doe", 1, "Sales", NULL, NULL),
  ("Mike", "Chan", 2, "Engineering", 1, "James"),
  ("Ashley", "Rodriguez", 3, "Finance", NULL, NULL),
  ("Kevin", "Tupik", 4, "Finance", 3, "Lisa"),
  ("Kunal", "Singh", 5, "Engineering", NULL, NULL),
  ("Malia", "Brown", 6, "Sales", 5, "Jack"),
  ("Sarah", "Lourd", 7, "Legal",  NULL, NULL),
  ("Tom", "Allen", 8, "Legal", 7, "Rita")