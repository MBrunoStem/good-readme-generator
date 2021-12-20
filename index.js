// Included packages used in this application
const fs = require('fs');
const inquirer = require('inquirer');

// An array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?"
    },
    {
        type: "input",
        name: "description",
        message: "Give a brief description of your project:"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the installaton instructions?"
    },
    {
        type: "input",
        name: "usage",
        message: "Relevant usage information?"
    },
    {
        type: "list",
        name: "license",
        message: "Select a license:",
        choices: ["MIT", "GPLv3", "AGPL", "None"]
    },
    {
        type: "input",
        name: "contributing",
        message: "Guidelines for contributions?"
    },
    {
        type: "input",
        name: "tests",
        message: "Test instructions?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    {
        type: "list",
        name: "contact",
        message: "What is your preferred method of contact?",
        choices: ['GitHub', 'Email']
    },
];

// Function to render licensing information
function renderLicenseSection(license) {
    switch (license) {
      case "MIT":
        text = `The MIT License is a permissive free software license originating at the Massachusetts Institute of Technology (MIT) in the late 1980s. As a permissive license, it puts only very limited restriction on reuse and has, therefore, high license compatibility.`
        return text;
      case "GPLv3":
        text = `You may copy, distribute and modify the software as long as you track changes/dates in source files. Any modifications to or software including (via compiler) GPL-licensed code must also be made available under the GPL along with build & install instructions.`
        return text;
      case "AGPL":
         text = `As its name implies, the GNU Affero General Public License (AGPL) is part of the GNU GPL family, which also includes the LGPL License, GPL v2, and GPL v3. All of these open source licenses are part of Richard Stallman’s GNU Project, a free and open source operating system and accompanying philosophy regarding the sharing and modification of software.`
        return text;
        case "None":
        text = `No license for this application`
        return text;
      }
  }

// Function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            let readMeString =
`# Project Title: ${data.title} ![License](../assets/License${data.license}.png)

## Description
${data.description}
        
## Table of Contents
* [Installation](#Installation)

* [Usage](#Usage)

* [Licensing](#Licensing)

* [Contribution](#Contribution)

* [Test](#Test)

* [Questions](#Questions)

## Installation
${data.installation}
        
## Usage
${data.usage}
        
## Licensing
${renderLicenseSection(data.license)}

## Contribution Guidelines
${data.contributing}

## Test Instructions
${data.tests}

## Questions
* GitHub Profile: [${data.github}](https://github.com/${data.github})
* Email: ${data.email}
* Preferred method of contact: ${data.contact}`
            fs.writeFileSync('./output/README.md', readMeString);
            return text;
        })

}

// Function call to initialize app
init();