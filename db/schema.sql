DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;
USE employees;

create table department (
id int auto_increment,
name varchar(30),
primary key (id)
);

create table role (
id int auto_increment,
title varchar(30),
salary decimal(8, 2),
department_id int,
primary key (id),
foreign key (id) references department(id)
);

CREATE TABLE employee (
id INT auto_increment,
first_name varchar(30),
last_name varchar(30),
role_id int,
manager_id int,
primary key (id),
foreign key (id) references role(id)
);
