var mysql = require("mysql");
var inquirer = require("inquirer");
var inStock = 0;
var totalPrice = 0;


// Create the Connection //

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "root",
    password: "kaykay@49thieves",
    database: "bamazon_DB"
});

// Connect to SQL server and SQL DB
connection.connect(function (err) {
    if (err) throw err;

    // run start function after connection is made to prompt user
    showProducts();
});




//function to display items for sale

function showProducts() {
    connection.query('SELECT * FROM products', function (err, res) {
        if (err) throw err;

        console.log('');
        console.log('_______________Take it or leave it______________');
        console.log('');


        for (var i = 0; i < res.length; i++) {
            console.log('Item ID: ' + res[i].id + '      Product: ' + res[i].product + '      Department: ' + res[i].department);
            console.log('Price: ' + res[i].price + '      Quanity Left: ' + res[i].quanity);
            console.log(' ');

        }
        start();
    });
}







// function to prompt user  

function start() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw console.log("connection error:" + err);
    inquirer
        .prompt([
                {
                    name: 'selectId',
                    type: 'input',
                    message: 'Enter ITEM ID for product you wish to purchase:',
                    validate: function (value) {
                        if (isNaN(value) === false) {
                            return true;
                        }
                        return false;
                    }

        },

                {
                    name: 'amountBought',
                    type: 'input',
                    message: 'How many would you like?',
                    validate: function (value) {
                        if (isNaN(value) === false) {
                            return true;
                        }
                        return false;
                    }
                   
                }
            ]).then (function (answers) {
            var query = "SELECT * FROM products WHERE ?";
            connection.query(query, {
                id: answers.selectId
            }, function (err, res) {


                // get the information of the chosen item, set input to variables, pass variables as Parameters

                var inStock = res[0].quanity;
                var itemBought = answers.amountBought;

                if (inStock >= itemBought) {
                    var leftInStock = inStock - itemBought;
                   
                    
                    var totalPrice = res[0].price * itemBought;
                    var itemPurchased = res[0].product;
                    
                    console.log(totalPrice + "  total price of items bought");
                    
                    connection.query(
                        "UPDATE products SET ? WHERE ?", [
                            {
                                quanity: leftInStock
                                
                        },
                            {
                                id: answers.selectId
                        }

                    ],
                        function (error) {
//                            console.log(price, amountBought);
                            if (error) throw err;
                            console.log("___________________-----------------_____________________");
                            console.log("\n\r");
                            console.log("Order details:");
                            console.log("Item(s) purchased: " + itemPurchased);
                            console.log("Quanity purchased: " + itemBought + " @ $" + res[0].price);
                            console.log("Total Cost: $" + totalPrice);
                            console.log("\n\r");
                            console.log("Thank you and remember shop SMART shop S-Mart");
                            console.log("___________________-----------------_____________________");
                            showProducts();

                        }
                    );
                } else {
                    console.log("___________________-----------------_____________________");
                    console.log("\n\r");
                    console.log("Not enough available, try buying less you cur")
                    console.log("___________________-----------------_____________________");
                   showProducts();

                }

            });
        
        });// inquier.prompt
        });
    }// conection.query