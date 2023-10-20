// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown.js'); 

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a short description of your project."
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use."
    },
    {
        type: "input",
        name: "credits",
        message: "List your collaborators and their GitHub usernames."
    },
    {
        type: "checkbox",
        name: "license",
        message: "Please choose a licesnse",
        choices: ['MIT', 'GPL', 'WTFPL', 'Apache-2.0']
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(prcoess.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((inquireAnswers) => {
        console.log("Success! Generating README!");
        writeToFile("./utils/generatedREADME.md", generateMarkdown({...inquireAnswers}));
    })
}

// Function call to initialize app
init();
