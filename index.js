const package1 = require('./package.json');
const package2 = require('./package-lock.json');
const jest = require('jest');
var inquirer = require('inquirer');
var inquirer = require('inquirer');
const fs = require('fs')
const shapes = require('./lib/shapes.js');
const __class = require('./lib/shapes.js');
const { text } = require('node:stream/consumers');
var svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`

const questions = [
    {
        type: 'input',
        name: "text",
        message: "Enter up to 3 Characters for your logo"
    },
    {
        type: 'input',
        name: "textColor",
        message: "Enter a color of your choice or a hexidecimal number for your text"
    },
    {
        type: 'list',
        name: "shape",
        message: "Choose a shape for your logo",
        choices: ["circle", "Square", "Rectangle"]
    },
    {
        type: 'input',
        name: "shapeColor",
        message: "Enter a color of your choice or a hexidecimal number for your shape",
        
    }
]


async function getAnswers(){
    return inquirer.prompt(questions).then((answers) => {
        if (answers.shapeColor){
            return answers;
        }
        else{
            return getAnswers();
        }
    }); 
};

async function test(){
let answers = await getAnswers();
console.log(answers);
};

function createFile(){  
    fs.writeFileSync("logo.svg", svg, (err) => {
        if (err) throw err;
    });
}

async function addText(){
    let information = await getAnswers();

    let textType =  text(information.textColor);


    console.log(textType);
}



addText()

console.log(text);