const fs = require('fs');

class Svg {
    constructor() {
        this.textElement
        this.shapeElement 
        this.shapeColorElement 
    }

    setTextElement(text, textColor) {
    
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textElement}</text>`;
        return this.textElement;
    }
    setShapeElement(shape) {
        this.shapeElement = this.generate();
    }
    setShapeColorElement(shapeColor) {
        this.shapeColorElement = this.shapeColor
    }

    generate() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200"> ${this.shapeElement}${this.setTextElement()}</svg>`;
    }
}
// function generateSVG(shape, text, textColor, shapeColor) {
function generateSVG(shape, text, textColor) {
    const svg = new Svg();
    // svg.setShapeElement(shape);
    // svg.setTextElement(text, textColor);
    // svg.setShapeColorElement(shapeColor);
    
    svg.shapeElement = shape
    svg.textColor=textColor;
    svg.textElement = text;

    // svg.setTextElement(text, textColor);

    const svgContent = svg.generate();
    

    fs.writeFileSync('logo.svg', svgContent);
    console.log('Genereate logo.svg');
}

module.exports = { generateSVG , Svg}