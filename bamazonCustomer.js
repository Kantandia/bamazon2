var mysql = require("mysql");
var inquirer = require("inquirer");
var inStock = 0;
var totalPrice = 0;



var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "root",
    password: "kaykay@49thieves",
    database: "bamazon_db"
});
