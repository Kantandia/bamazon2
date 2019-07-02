DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
id INT NOT NULL AUTO_INCREMENT,
product VARCHAR(50) NOT NULL,
    department VARCHAR(50) NOT NULL,
    price DECIMAL(10,2) NULL,
    quanity INT NULL,
    PRIMARY KEY (id)

);


INSERT INTO products (product, department, price, quanity)
VALUES ("xFactor79", "Gaming", 750, 45);

INSERT INTO products (product, department, price, quanity)
VALUES ("Rick Dance Memorial Dildo", "Adult", 999, 3);

INSERT INTO products (product, department, price, quanity)
VALUES ("Metal Gear Solid 8 - The Nanomachine Wars", "gaming", 24, 75);

INSERT INTO products (product, department, price, quanity)
VALUES ("Samsung Quatro", "NAS", 325, 7);

INSERT INTO products (product, department, price, quanity)
VALUES ("Macbook Pro 2025)", "laptops", 9999, 25);

INSERT INTO products (product, department, price, quanity)
VALUES ("Sony Bravia 64'", "TV", 1500, 18);

INSERT INTO products (product, department, price, quanity)
VALUES ("Samsung Quatro", "phones", 899, 7);

INSERT INTO products (product, department, price, quanity)
VALUES ("BackDoor Sluts 9 - Unrated", "Adult", 399, 3);

INSERT INTO products (product, department, price, quanity)
VALUES ("Dell Inspirion 2017", "Laptops", 399, 15);

INSERT INTO products (product, department, price, quanity)
VALUES ("Jak and Daxter 4 - The Return of Praxis", "Dreams", 69, 12);

INSERT INTO products (product, department, price, quanity)
VALUES ("Alice Cooper's Left Testicle", "Memorabilia", 999999999, 1);