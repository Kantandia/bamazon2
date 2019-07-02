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




connection.connect(function (err) {
    if (err) throw err;

    // start function 
    showProducts();
});


function showProducts() {
    connection.query('SELECT * FROM products', function (err, res) {
        if (err) throw err;

        console.log('');
        console.log('_____________PLEASE BUY SOMETHING THEY HAVE MY CHILDREN_____________');
        console.log('');


        for (var i = 0; i < res.length; i++) {
            console.log('Item ID: ' + res[i].id + '      Product: ' + res[i].product + '      Department: ' + res[i].department);
            console.log('Price: ' + res[i].price + '      Quanity Left: ' + res[i].quanity);
            console.log(' ');

        }
     //call function
        start();
    });
}