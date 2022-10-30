const { calculateFinalPosition } = require('./move_calculations');
const { isValidCoordinates } = require('./validations');
const prompt = require('prompt-sync')();
const fs = require('fs');

const formatPlateauDimensions = (plateauDimensions) => {
	const MultipleWhiteSpacesRegex = /\s+/g;
    const formatedInput = plateauDimensions.replace(',', ' ').trim();
	const [x, y] = formatedInput.split(MultipleWhiteSpacesRegex);

	return {x, y};
};

const readUserInput = () => {
	let plateauDimensions = prompt('Please, provide the plateau upper-right coordinates: ');
	let formatedPlateauDimensions = formatPlateauDimensions(plateauDimensions);
	
	let isValidPlateauDimensions = isValidCoordinates(formatedPlateauDimensions);
	
	while(!isValidPlateauDimensions)  {
		plateauDimensions = prompt('Invalid plateau dimensions. Please provide positive non-zero coordinates(x,y): ');

		formatedPlateauDimensions = formatPlateauDimensions(plateauDimensions);
		isValidPlateauDimensions = isValidCoordinates(formatedPlateauDimensions);
	}

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

	roversData.push(formatedPlateauDimensions);
	return roversData;
};

const displayDataOutput = (roversData) => {
	const plateauDimensions = roversData.pop();
	let fullRoversReport = '';

	roversData.forEach( (rover, index) => {
		const finalPosition = calculateFinalPosition(rover, plateauDimensions);

		const roverReportData = `Rover #${index}` + '\n'
		+ `Landing Position: ${rover.initialPosition}` + '\n'
		+ `Instruction: ${rover.moveInstructions}` + '\n'
		+ `Final Position: ${finalPosition}` + '\n' 
		+ '---------------------------' + '\n';

		fullRoversReport += roverReportData;
	});

	fs.writeFile('report.txt', fullRoversReport, (err) => {
		if (err) throw err;
		console.log('All Rovers finished their survey and their reports were sucessfully created!');
	});
}; 

module.exports = {
	readUserInput,
	displayDataOutput
};
