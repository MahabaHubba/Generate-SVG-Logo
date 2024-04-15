# Generate-SVG-Logo

## Description
A SVG Logo generator generates a SVG file which takes in a string of 3 letters foloowed by the color of the text, shape and shape color to customize your own logo.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Usage](#usage)


## Technology Used
- Javascript
- Node.js
- Jest

### User Story

```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## Usage
By retrieving the repository data, open up the integrated terminal and run the commmand 'npm i'. After running this command, run the command node index.js. You will be prompted with questions in regards to your SVG Logo. By completing the prompt, you will have a SVG logo file generated.