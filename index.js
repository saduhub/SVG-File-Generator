// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// Import constructor classes
const Circle = require('./lib/Circle');
const Square = require('./lib/Square');
const Triangle = require('./lib/Triangle');
// Array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'text',
      message: 'Please enter logo text',
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
    fs.writeFile('examples/itactuallyworked.svg', info, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log('SVG file generated successfully!');
        }
    });
}

//Function to initialize app (wil bacome necessary as code becomes more complex/I want to re-initilize at any moment)
function init() {
    console.log('Hi, welcome to SVG Logo Generator');
    inquirer.prompt(questions).then((answers) => {

    if (answers.shape == 'circle') {
      const newCircle = new Circle(answers.shape, answers.fill, answers.textColor, answers.text);
      const svgCircle = newCircle.generate()
      writeToFile(svgCircle);
    } else if (answers.shape == 'square') {
      const newSquare = new Square(answers.shape, answers.fill, answers.textColor, answers.text);
      const svgSquare = newSquare.generate()
      writeToFile(svgSquare);
    } else if (answers.shape == 'triangle') {
      const newTriangle = new Triangle(answers.shape, answers.fill, answers.textColor, answers.text);
      const svgTriangle = newTriangle.generate()
      writeToFile(svgTriangle);
    }
});
}
// Function call to initialize app
init();
