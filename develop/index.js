// TODO: Include packages needed for this application
const inquirerNPM = require("inquirer");
const fsNPM = require ("fs");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
// referenced this SOF page: https://stackoverflow.com/questions/57321266/how-to-test-inquirer-validation, very close to actual solution
const questions = [

    {
        name: 'username',
        message: 'Please enter your GitHub username, exactly how it reads on Github',
        type: 'input',
        validate: function (answer) {
            if (answer.length <= 1) {
              return console.log ("I'm sorry, but we need you to enter your Github username in order to proceed.");
            }
            return true;
        }
    },

    {
        name: 'project title',
        message: 'Please enter your project title, exactly how it reads on Github ',
        type: 'input',
        validate: function (answer) {
            if (answer.length <= 1) {
              return console.log ("I'm sorry, but we need you to enter your project title in order to proceed.");
            }
            return true;
        }
    },

    {
        name: 'description',
        message: 'Please enter a description of the product. Make sure the reader can understand what the application is doing!',
        type: 'input',
        validate: function (answer) {
            if (answer.length <= 1) {
              return console.log ("I'm sorry, but we need you to enter a project description in order to proceed.");
            }
            return true;
        }
    },

    {
        name: 'email',
        message: 'Please enter your email address, preferably one you can be easily contacted at',
        type: 'input',
        validate: function (answer) {
            if (answer.length <= 1) {
              return console.log ("I'm sorry, but we need you to enter your email address in order to proceed.");
            }
            return true;
        }
    },

    {
        name: 'repo',
        message: 'Please enter your GitHub repo name, exactly how it reads on Github',
        type: 'input',
        validate: function (answer) {
            if (answer.length <= 1) {
              return console.log ("I'm sorry, but we need you to enter your Github repo in order to proceed.");
            }
            return true;
        }
    },

    {
        name: 'installation',
        message: 'Explain how you would install?',
        type: 'input',
    },

    {
        name: 'usage',
        message: 'Enter some information about how to use the project',
        type: 'input',
    },

    {
        name: 'license',
        message: 'Choose your license for the project!',
        type: 'input',
        choices: ['apache-2.0', 'BSD 3-Clause "New" or "Revised"' ,'GNU General Public License v3.0', 'MIT'],
    },

    {
        name: 'contributions',
        message: 'Let us know how users can contribute to this project in the future',
        input: 'type',
    },

    {
        name: 'tests',
        message: 'Let us know what tests you used for the project, and please provide them as well!',
        type: 'input',
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
