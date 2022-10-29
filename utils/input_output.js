const { calculateFinalPosition } = require('./move_calculations');
const prompt = require('prompt-sync')();
const fs = require('fs');

const readUserInput = () => {
	const plateauDimensions = prompt('Please, provide the plateau upper-right coordinates: ');

	let shouldRepeat = true;
	const roversData = [];

	while (shouldRepeat) {
		const initialPosition = prompt('Please provide the rover´s landing position(x, y, N|S|E|W): ');
		const moveInstructions = prompt('Please provide the rover´s instructions: ');
		const repeatDecision = prompt('The rover is all set! Do you want to deploy more rovers?(y|N)');

		shouldRepeat = repeatDecision.toUpperCase() === 'Y';
		roversData.push({
			initialPosition,
			moveInstructions,
		});
	}

	roversData.push(plateauDimensions);
	return roversData;
};

const displayDataOutput = (roversData) => {
	const plateauDimensions = roversData.pop();

	roversData.forEach( rover => {
		const finalPosition = calculateFinalPosition(rover, plateauDimensions);

		const roverReportData = `Landing Position: ${rover.initialPosition}` 
    + '\n'
    + `Instruction: ${rover.moveInstructions}` + '\n'
    + `Final Position: ${finalPosition}`;

		fs.appendFile('report.txt', roverReportData, (err) => {
			if (err) throw err;
			console.log('Rover report was sucessfully created!');
		});
	});
}; 

module.exports = {
	readUserInput,
	displayDataOutput
};
