const fs = require('fs');
//1, Define the Shape class wiht color
class Shape {
    constructor () {
        this.color = ''
    }
    setColor(color) {
        this.color = color;
    }
};

//a. define circle, which renders the circle dimensions and the color chosen by individual

class Circle extends Shape {
    render() {
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"/>`
    }
};
//b. Similarly creating teh square shape using the dimensions provided by svg and fill color in by user choice.
class Square extends Shape {
    render() {
        return `<rect x="50" height="200" width="200" fill="${this.color}"/>`
    }
}
//c. define triangle and as above. There is no specific triangle property, however can use polygon attribute
class Triangle extends Shape {
    render () {
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}"/>`
    }
}

//export clases

module.exports = {Circle, Square, Triangle}