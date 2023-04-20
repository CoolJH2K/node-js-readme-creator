// Link used for reference: https://www.tutorialkart.com/nodejs/create-file-in-nodejs-using-node-fs-module/
// Include fs, inquirer@8.2.4, and generateMarkdown
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown.js");

// Create an array of questions for user input
inquirer 
    .prompt([
        {
            name: "github_username",
            message: "What is your GitHub user name?",
            type: "input",
        },
        {
            name: "project_name",
            message: "What will the name of your project be?",
            type: "input",
        },
        {
            name: "table_of_contents",
            message: "Would you like to make a table of contents for your README?",
            type: "list",
            choices: ["Yes", "No"],
        },
        {
            name: "project_motivation",
            message: "Why did you do this project?",
            type: "input",
        },
        {
            name: "problem_solved",
            message: "What problem does this solve?",
            type: "input",
        },
        {
            name: "lessons_learned",
            message: "What did you learn while working on this project?",
            type: "input",
        },
        {
            name: "installation",
            message: "Can this application be installed? If so, what are the steps needed for installation? (If your project isn't something people need to install, just type 'N/A.')",
            type: "input",
        },
        {
            name: "app_use",
            question: "How will this application be used?",
            type: "input",
        },
        {
            name: "credits",
            question: "Were there any third-party assets or tutorials used, or did any other programmers help you with your project? If not, just type 'N/A.'",
            type: "input",
        },
        {
            name: "license",
            question: "Which open-source license will your application use?",
            type: "rawlist",
            choices: ["Unlicense", "Boost Software License 1.0", "MIT License", "Apache License 2.0", "Mozilla Public License 2.0", "GNU LGPLv3", "GNU GPLv3", "GNU AGPLv3"],
        },
        {
            name: "testing",
            question: "How did you test your application?",
            type: "input",
        },
        {
            name: "frequently_asked_questions",
            question: "Finally, what are some frequently asked questions (FAQ) regarding your project?",
            type: "input",
        }
    ])
    .then((answers) => {
        return console.log(answers);
    })

// This function will write the README file
function writeToFile(fileName, data) {
    // Return the writeFile method using fileName and data being passed in
    return(data);
}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
