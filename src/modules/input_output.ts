import { RoverData } from '../interfaces/roverData';
import { calculateFinalPosition } from '../utils/move_calculations';
import { isValidCoordinates } from '../utils/validations';
import prsync from 'prompt-sync';
import fs from 'fs';
const prompt = prsync();

type InputData = {
	roversData: RoverData[];
	formatedPlateauDimensions: string[];
}

const formatCoordinates = (dimensions: string) => {
	const MultipleWhiteSpacesRegex = /\s+/g;
	const notNumberOrValidLettersRegex = /[^1-9|LlRrMmNnSsEeWw-]/g;
	const parcialFormatedInput = dimensions
		.replace(notNumberOrValidLettersRegex, ' ')
		.replace(MultipleWhiteSpacesRegex, '')
		.trim();
	const formatedInput = parcialFormatedInput.split('');

	return formatedInput;
};

const readUserInput = (): InputData => {
	let plateauDimensions: string = prompt('Please, provide the plateau upper-right coordinates: ');
	let formatedPlateauDimensions = formatCoordinates(plateauDimensions);

	let isValidPlateauDimensions = isValidCoordinates(formatedPlateauDimensions);

	while (!isValidPlateauDimensions) {
		plateauDimensions = prompt('Invalid plateau dimensions. Please provide positive non-zero coordinates(x,y): ');

		formatedPlateauDimensions = formatCoordinates(plateauDimensions);
		isValidPlateauDimensions = isValidCoordinates(formatedPlateauDimensions);
	}

	let shouldRepeat = true;
	const roversData: RoverData[] = [];

	while (shouldRepeat) {
		const initialPosition = prompt('Please provide the rover´s landing position(x, y, N|S|E|W): ');
		const moveInstructions = prompt('Please provide the rover´s instructions: ');
		const repeatDecision = prompt('The rover is all set! Do you want to deploy more rovers?(y|N)');

		shouldRepeat = repeatDecision.toUpperCase() === 'Y';
		roversData.push({
			initialPosition: formatCoordinates(initialPosition),
			moveInstructions: formatCoordinates(moveInstructions)
		});
	}

	return {
		roversData,
		formatedPlateauDimensions
	};
};

const displayDataOutput = (inputData: InputData) => {
	const { roversData, formatedPlateauDimensions } = inputData;
	let fullRoversReport = '';

	roversData.forEach((rover, index: number) => {
		const finalPosition = calculateFinalPosition(rover, formatedPlateauDimensions);

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

export {
	readUserInput,
	displayDataOutput,
	formatCoordinates
};
