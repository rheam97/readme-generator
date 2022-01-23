// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs')


// TODO: Create an array of questions for user input
const questions = [
    {type: "input",
    name: "title",
    message: "What is the title of your application?"},
    {type: "input",
    name: "desc",
    message: "What is the description of your application?"},
    {type: "install",
    name: "title",
    message: "What are the installation instructions for your application?"},
    {type: "input",
    name: "usage",
    message: "How would you describe how to use this application?"},
    {type: "input",
    name: "contrib",
    message: "What are the contribution guidelines for your application?"},
    {type: "input",
    name: "test",
    message: "What are the testing instructions for this application?"},
    {type: "checkbox",
    name: "license",
    message: "Which license would you like to use for this application?",
    choices: ['MIT',, 'Apache', 'GPL']},
    {type: "input",
    name: "username",
    message: "What is your Github username?"},
    {type: "input",
    name: "email",
    message: "What is your email address?"}
];
// optional, or put questions into this

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(data)
    //fs 
}// potentially put this in generate markdown and export it here

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile(`${data.title}.md`, generateMarkdown(data))
    })
// inquirer prompts
}

// Function call to initialize app
init();

