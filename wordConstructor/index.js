var word = require("./word.js");
var inquirer = require("inquirer");
//Divider to help clean up displayed and written code
var divider = ("\n\n------------------------\n");

function userInput() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "title",
                message: "What letter would you like to guess?"
            }
        ])
        .then(answers => {

        });
}