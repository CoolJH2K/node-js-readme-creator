// TODO: Include generateMarkdown, fs, and inquirer@8.2.4
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        question: "What will the name of your project be?"
    },
    {
        question: "Would you like to make a table of contents for your README?"
    },
    {
        question: "Why did you do this project?"
    },
    {
        question: "What problem does this solve?"
    },
    {
        question: "What did you learn while working on this project?"
    },
    {
        question: "Can this application be installed? If so, what are the steps needed for installation? (If your project isn't something people need to install, just type 'N/A.')"
    },
    {
        question: "How will this application be used?"
    },
    {
        question: "Were there any third-party assets or tutorials used, or did any other programmers help you with your project? If not, just type 'N/A.'"
    },
    {
        question: "Which open-source license will your application use?"
    },
    {
        question: "How did you test your application?"
    },
    {
        question: "Finally, what are some frequently asked questions (FAQ) regarding your project?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // Return the writeFile method using fileName and data being passed in
}

// TODO: Create a function to initialize app
function init() {
    // Inquirer goes in here; then, call back the funciton to use generateMarkdown as a data source; pass data from Inquirer into this! How is the spread operator (...) to be used in this?
}

// Function call to initialize app
init();
