// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template.js');
// TODO: Create an array of questions for user input

const questions = [] 
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the title of your project? (required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your project name!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'contents',
            message: 'Would you like to include a table of contents?',
            when: ({ confirmContents }) => {
                if (confirmContents) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description of your project (required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Instructions',
            message: 'Provide some installation steps to installing your app:',
        },
        {
            type: 'input',
            name: 'Usage',
            Message: 'Provide your projects usage information:'
        },
        {
            type: 'input',
            name: 'Contribution',
            message: 'List your contributors here:'
        },
        {
            type: 'input',
            name: 'Test',
            message: 'Provide instructions for users to test your app:'
        },
        {
            type: 'checkbox',
            name: 'License',
            message: 'What license would you like for this project?',
            choices: ['Community', 'MIT License', 'GNU GPLv3']
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your githib link?'
        }
    ])
    .then(questionsData => {
        portfolioData.projects.push(projectData);
            return portfolioData;
        }
    );


// TODO: Create a function to write README file
const { resolve } = require('path');
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/readme.md', fileContent, err => {
            //if there is an error, reject the promise and send the error to the primises `.catch()` method
            if (err) {
                reject(err);
                // return out of the function here to make sure the promise doesnt accidentally execute the resolve()function as well
                return;
            }
            // if everything went well. resolve the promise and send out the successful data to the `then()` method
            resolve({
                ok: true,
                message: 'file created!'
            });
        });
    });
  };

  const copyFile = copyFile => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./dist/readme.mds', copyFile, err => {
            if (err) {
                reject(err);
                return; 
            }
            resolve( {
                ok:true, 
                message: 'file copied'
            });
        });
    });
  }

// TODO: Create a function to initialize app
//function init(questionData) {}

// Function call to initialize app
init()
    .then(questions)
    .then(portfolioData => {
      return generatePage(portfolioData);
    })
    .then(pageHTML => {
      return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
      console.log(writeFileResponse);
      return copyFile();
    })
    .then(copyFileResponse => {
      console.log(copyFileResponse);
    })
    .catch(err => {
      console.log(err);
    });
