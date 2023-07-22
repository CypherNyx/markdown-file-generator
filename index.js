// *** Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

//*** Create an array of questions for user input:

// * What is the title of your project? 
// ToDo: Create sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// * enter a:  * project title
// THEN this is displayed as the title of the README
// * enter a:  * description, 
            // * installation 
            // * instructions,
            // * usage information, 
            // * contribution guidelines, 
            // * and test instructions

// ToDo: Add this information to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
//* Create a question that uses a LIST type so that user can choose a license from a list of options
// !: HOW???  a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under.
//* enter my GitHub username 
//THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
//* enter my email address 
//THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
//* I click on the links in the Table of Contents
//THEN I am taken to the corresponding section of the README



const questions = [
  {
    type: ,
    message: ,
    name: ,

  },{
    type: ,
    message: ,
    name: ,

  },{
    type: ,
    message: ,
    name: ,

  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
