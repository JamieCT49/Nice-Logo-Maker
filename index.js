const inquirer = require("inquirer");
const {circle, square, triangle} = require("./lib/shapes");
const filefolder = require("graceful-fs");
// user questions

const questions = [
    {
        type: "input",
        name: "text",
        message: "Please enter shape text up to 3 Characters"
    },
    {
        type: "input",
        name: "text-colour",
        message: "Please enter and colour keyword (OR a hexadecimal number) for Text colour"
    },
    {
        type: "list",
        name: "shape-shape",
        message: "Please choose the shape you want",
        choices: ["Circle", "Square", "Triangle"]
    },
    {
        type: "input",
        name: "shapeColour",
        message: "Please enter a colour keyword (OR a hexadecimal number) for Shape colour"
    },
];

class Svg {
    constructor() {
        this.textElement = ''
        this.shapeElement = ''
    }

    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" hieght="200">${this.shapeElement}${this.textElement}</svg>`
    }
    setTextelement(text, colour) {
        this.textElement = `<text x="125" y="100" font-size="50 text-anchor="middle" fill="${colour}">${text}</text>` 
    }
    setShapeelement(shape){
        this.shapeElement = shape.render()
    }
}

async function init() {

    var svgString = "";
    var svgFile = "logo.svg";
    const answers = await inquirer.prompt(questions);

    const user_input = answers["text"];
    const user_text_colour = answers["text-colour"];
    const user_shape = answers["shape-shape"];
    const user_shape_colour = answers["shapeColour"];

    let userShape;

    
    if (user_shape === "square") {
        userShape = new square();
    } else if (user_shape === "circle") {
        userShape = new circle();
    } else if (user_shape === "triangle") {
        userShape = new triangle();
    } else {
        console.log("Not a SHAPE!");
    }

    userShape.setColour(user_shape_colour);
    
    var svg = new Svg();
    svg.setTextelement(user_input, user_text_colour);
    svg.setShapeelement(userShape);
    svgString = svg.render();
    writeToFile(svgFile, svgString);
    
}

function writeToFile(fileName, data) {
    filefolder.writeFile(fileName, data)};

init();