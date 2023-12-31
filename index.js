// *** Include packages needed for this application  ee
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

//*** Create an array of questions for user input ***
// * Create sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// * enter a:  * repo name
// THEN this is displayed as the title of the README
// * enter a:  * project title, 
            // * project description 
            // * installation instructions 
            // * usage information, 
            // * contribution guidelines, 
            // * and test instructions
// Add this information to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// Create a question that uses a LIST type so that user can choose a license from a list of options
// A badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under.
// enter my GitHub username 
//THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// enter my email address 
//THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// I click on the links in the Table of Contents
//THEN I am taken to the corresponding section of the README

const questions = [
  {
    type: 'input',
    message: 'What is the name of your GitHub repository?',
    name: 'repo',
    validate: (answer) => answer.lenght <1 ? console.log('A valid GitHub repository name is required for a badge'): true,
  },{
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
    validate: (answer) => answer.lenght <1 ? console.log('Please enter a valid project title.'): true,
  },{
    type: 'input',
    message: 'Write a description of your project:',
    name: 'description',
    validate: (answer) => answer.lenght <1 ? console.log('Please enter a valid project description.'): true,
  },{
    type:'input' ,
    message: 'Installation - What are the installation instructions of you project?',
    name: 'install',
  },{
    type: 'input',
    message: 'Usage - Do you have any example usages or aditional usage instructions for your project?',
    name: 'usage',
  },{
    type: 'input',
    message: 'Contributing - If you want other developers to contribute, provide clear guidelines:',
    name: 'contributing' ,
  },{
    type: 'input',
    message:'Tests - Provide any tests written for your application:' ,
    name: 'test',
  },{
    type: 'list',
    message: 'License - Choose a license for yout project.',
    choices: ['Apache','GNU','MIT', 'Mozilla' ],
    name: 'license',
  },{
    type: 'input',
    message: 'What is your GitHub Username?',
    name: 'username',
    validate: (answer) => answer.lenght <1 ? console.log('Please enter a valid GitHub username.'): true,
  },{
    type: 'input',
    message: 'What is your e-mail address?',
    name: 'email',
    validate: (answer) => answer.lenght <1 ? console.log('Please enter an email address.'): true,
  },
];

// Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), error => {
    if(error) {
      return console.log(error);
    } else{
      console.log('README creation was successful!')
    }
  });
};

// Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(function(answers){
    // const fileName =
    //     answers.title
    //     .split('')
    //     .join('') + '.md'

    const fileName ='README-inq.md'

      writeToFile(fileName, answers);
  });
};

// Function call to initialize app
init();
