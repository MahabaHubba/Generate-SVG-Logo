const {generateSVG, Svg} = require('./lib/generateSVG');
const inquirer = require("inquirer");
const {Circle, Square, Triangle} = require("./lib/shape");

// Imports the generateSVG inquirer, Circle, Square, and Triangle modules.
// Defines a Svg class that has a constructor with three methods for rendering and setting the text and shape elements in the SVG string.


// Defines array of 'questions' using the 'inquirer' library with the following questions.
// Each question is an object that specifies the properties of TEXT, TEXT COLOR, SHAPE COLOR, and Pixel Image.
const questions = [
    {
        type: "input",
        name: "text",
        message: "TEXT: Enter up to (3) Characters:",
    },
    {
        type: "input",
        name: "textColor",
        message: "TEXT COLOR: Enter a color keyword (OR a hexadecimal number):",
    },
    {
        type: "input",
        name: "shapeColor",
        message: "SHAPE COLOR: Enter a color keyword (OR a hexadecimal number):",
    },
    {
        type: "list",
        name: "shape",
        message: "Choose which Pixel Image you would like?",
        choices: ["Circle", "Square", "Triangle"],
    },
];

// Function to write data to file


async function init() {
    console.log("Starting init");
	const { shape, text, textColor, shapeColor} = await inquirer.prompt(questions);

	let selectedShape;

	let finalShape = new Svg()
  // Instantiate the selected shape class based on user choice

  switch (shape) {
    case 'Circle':
      selectedShape = new Circle();
      break;
    case 'Triangle':
      selectedShape = new Triangle();
      break;
    case 'Square':
      selectedShape = new Square();
      break;
    default:
      throw new Error('Invalid shape selected');
  }

  selectedShape.setColor(shapeColor);

  console.log(shape);
  console.log(text);
  console.log(textColor);
  console.log(shapeColor)
  

  generateSVG(selectedShape.render(), text, textColor); 
}
init()