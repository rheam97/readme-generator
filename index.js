// Include packages needed for this application
const inquirer = require('inquirer');
const fuzzy =require('inquirer-fuzzy-path')
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');



// Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your application?",
        validate: titleInput => {
            if(!titleInput){
                console.log("Please enter a project title.")
                return false
            }
            else {
                return true
            }
        }
    },
    {
        type: "input",
        name: "desc",
        message: "What is the description of your application?",
        validate: descInput => {
            if(!descInput){
                console.log("Please enter a project description.")
                return false
            }
            else {
                return true
            }
        }
    },
    {
        type: "input",
        name: "install",
        message: "What are the installation instructions for your application?",
        validate: installInput => {
            if(!installInput){
                console.log("Please enter installation instructions.")
                return false
            }
            else {
                return true
            }
        }
    },
    {
        type: "input",
        name: "usage",
        message: "How would you describe how to use this application?",
        validate: usageInput => {
            if(!usageInput){
                console.log("Please enter usage guidelines.")
                return false
            }
            else {
                return true
            }
        }
    },
    {
        type: "input",
        name: "contrib",
        message: "What are the contribution guidelines for your application?",
    },
    {
        type: "input",
        name: "test",
        message: "What are the testing instructions for this application?"
    },
    {
        type: "list",
        name: "license",
        message: "Which license would you like to use for this application?",
        choices: ['MIT', , 'Apache', 'GPL']
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
        validate: userInput => {
            if(!userInput){
                console.log("Please enter your GitHub username.")
                return false
            }
            else {
                return true
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
        validate: emailInput => {
            if(!emailInput){
                console.log("Please enter your email address.")
                return false
            }
            else {
                return true
            }
        }
    }
];


// Create a function to write README file
function writeToFile(fileName, data) {
    console.log(data)
    fs.writeFile(`./${fileName}`, data, err => {
        if (err) {
            console.error(err)
            return
        }
        else {
            console.log('File created.')
        }
    })
}

// Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile(`${data.title}.md`, generateMarkdown(data))
    })
}

// Function call to initialize app
init();

