// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// Data needed for this application
const svgColors = require('./lib/seed data/svgColors');
// Import constructor classes
const Circle = require('./lib/Circle');
const Square = require('./lib/Square');
const Triangle = require('./lib/Triangle');
// Inquirer Validation
function validateText(input) {
  if (input.length <= 3) {
    return true;
  } else {
    return 'Please enter up to three characters.';
  } 
}
// Array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'text',
      message: 'Please enter logo text',
      validate: validateText,
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Please enter text color (hex or color keyword)',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'What shape?',
      choices: ['circle', 'triangle', 'square'],
      filter(val) {
      return val;
      },
    },
    {
      type: 'input',
      name: 'fill',
      message: 'Please enter shape fill color (hex or color keyword)',
    },
  ];

// Function to write README file
function writeToFile (info) {
    fs.writeFile('examples/logo.svg', info, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log('Generated logo.svg');
          console.log(svgColors[3]);
        }
    });
}

//Function to initialize app (wil bacome necessary as code becomes more complex/I want to re-initilize at any moment)
function init() {
    console.log('Hi, welcome to SVG Logo Generator');
    inquirer.prompt(questions).then((answers) => {

    if (answers.shape == 'circle') {
      const newCircle = new Circle(answers.shape, answers.fill, answers.textColor, answers.text);
      const svgCircle = newCircle.render()
      writeToFile(svgCircle);
    } else if (answers.shape == 'square') {
      const newSquare = new Square(answers.shape, answers.fill, answers.textColor, answers.text);
      const svgSquare = newSquare.render()
      writeToFile(svgSquare);
    } else if (answers.shape == 'triangle') {
      const newTriangle = new Triangle(answers.shape, answers.fill, answers.textColor, answers.text);
      const svgTriangle = newTriangle.render()
      writeToFile(svgTriangle);
    }
});
}
// Function call to initialize app
init();
