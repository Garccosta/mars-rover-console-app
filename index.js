const {readUserInput, displayDataOutput} = require('./utils/input_output.js');

console.log('Welcome to Mars hover deploy program!');
const userInput = readUserInput();
displayDataOutput(userInput);
