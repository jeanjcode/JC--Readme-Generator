// const fs = require("fs");
// const path = require('path');
// const inquirer = require("inquirer");
// const generateMarkdown = require("./utils/generateMarkdown");

// // array of questions for user
// const questions = [

// ];

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();

const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
let  readTemplate = require("./readmeTemplate");


const questions = () => {
    return inquirer.prompt([    
    {
        type: "input",
        name: "email",
        message: "Enter your email address.",
    },
    {
        type: "input",
        name: "github",
        message: "Enter your Github username.", 
    },     
    { 
        type: "input",
        name: "title",
        message: "Enter your project title?",          
    },
    {
        type: "input",
        name: "description",
        message: "Enter a description for your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "Enter the installation instructions for your project.",
    },
    {
        type: "input",
        name: "usage",
        message: "Enter your usage information.",
    },
    {
        type: "input",
        name: "contribution",
        message: "Enter your project contribution guidelines.",
    },
    {
        type: "input",
        name: "tests",
        message: "Enter your test instructions.",  
    },
    {  
     // Add license  
        type: "list",
        message: "Choose a license.",
        name: "license",
        choices: [
        "Apache2.0",
        "GNU Public v3.0",
        "MIT",        
        "No license",
      ], 
      },       
    ]);
  };

    // Save to file
const writeFile = (fileName, data) => {
    try {
      fs.writeFileSync(path.join(process.cwd(), fileName), data);
    } catch (error) {
      console.log(error.message);
    }
  };

