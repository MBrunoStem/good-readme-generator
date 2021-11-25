// TODO: Include packages needed for this application
const util = require('util');
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {type: "input",
    name: "title",
    message:"What is your project title?"},
    {type: "input",
    name: "description",
    message:"Give a brief description of your project:"},
    {name: "contents",
    message:"Table of contents?",
    default: ["Installation", " Usage", " License", " Contribution Guidelines", " Questions"]},
    {type: "input",
    name: "installation",
    message:"What are the installaton instructions?"},
    {type: "input",
    name: "usage",
    message:"Relevant usage information?"},
    {type: "list",
    name: "license",
    message:"Select a license:",
    choices: ["Test", "Testing", "Tester", "Nimbus"]},
    // Add a badge to the top of README
    // Add a section "License" explaining which license is being used
    {type: "input",
    name: "contributing",
    message:"Guidelines for contributions?"},
    {type: "input",
    name: "tests",
    message:"Test instructions?"},
    {type: "input",
    name: "github",
    message:"What is your GitHub username?"},
    // Add link to GitHub profile at the bottom under "Questions"
    // Also add instructions on how to contact with further questions
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        let readMeString = 
        `# Project Title: ${data.title}

        ## Description
        ${data.description}
        
        ## Table of Contents
        ${data.contents}
        
        ## Installation
        ${data.installation}
        
        ## Usage Information
        ${data.usage}
        
        ## Licensing
        ${data.license}

        ## Contribution Guidelines
        ${data.contributing}

        ## Test Instructions
        ${data.tests}

        ## Questions
        https://github.com/${data.github}
        `
        
        console.log(readMeString)
        // finish creating the readme and inserting the answers
        // write the string to a file with fs writefile
    })
}

// Function call to initialize app
init();