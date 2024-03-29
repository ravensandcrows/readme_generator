//Neccessary packages for app
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// Array for questionnaire
const questions = [
    {
        type: 'input',
        name: 'project_title',
        message: 'What is your project name?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project - the what, why and how.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
        default: 'npm i',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, any third party assets that require attribution, and links to tutorials',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Pick your license',
        choices: ['MIT', 'APACHE2.0', 'GPL3.0', 'BSD3', 'None'],
    },
    {
        type: 'input',
        name: 'features',
        message: 'What are you features if any?',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'How can people contribute to your project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Write down your tests for your application here',
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
];


// Writes README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// initializes app
function init() {
    inquirer
        .prompt(questions)
        .then((answers)=>{
            // catches errors
            try{
                console.log('Creating ReadMe...');
                writeToFile('dist/README.md', generateMarkdown({...answers}));
                console.log("Success! Find your file in the Dist directory");
            }
            catch(error){
                console.log(error.message);
            } 
        });
}

init();
