import { describe, expect } from '@jest/globals';
import { formatDimensions } from '../utils/input_output';
import { isValidCoordinates } from '../utils/validations';

import { invalidPlateauInputs, validRoverInputs, invalidRoverInputs, correctOutputs } from '../test-sample';
const { emptyInput, zeroInputs, negativeInputs } = invalidPlateauInputs;
const { Instructions1,
	Instructions2,
	landingPosition1,
	landingPosition2
} = validRoverInputs;

describe('User input', () => {
	it('should return false for validation on empty plateau inputs', () => {
		let input = emptyInput;
		let formatedPlateauDimensions = formatDimensions(input);
		let isValidPlateauDimensions = isValidCoordinates(formatedPlateauDimensions);

		expect(isValidPlateauDimensions).toBe(false);
	});

	it('should return false for validation on zero plateau inputs', () => {
		const { zeroXInput } = zeroInputs;
		let formatedPlateauDimensions = formatDimensions(zeroXInput);
		let isValidPlateauDimensions = isValidCoordinates(formatedPlateauDimensions);
		expect(isValidPlateauDimensions).toBe(false);

		const { zeroYInput } = zeroInputs;
		formatedPlateauDimensions = formatDimensions(zeroYInput);
		isValidPlateauDimensions = isValidCoordinates(formatedPlateauDimensions);
		expect(isValidPlateauDimensions).toBe(false);

		const { zeroXYInput } = zeroInputs;
		formatedPlateauDimensions = formatDimensions(zeroXYInput);
		isValidPlateauDimensions = isValidCoordinates(formatedPlateauDimensions);
		expect(isValidPlateauDimensions).toBe(false);
	});

	it('should return false for validation on negative plateau inputs', () => {
		const { negativeXInput } = negativeInputs;
		let formatedPlateauDimensions = formatDimensions(negativeXInput);
		let isValidPlateauDimensions = isValidCoordinates(formatedPlateauDimensions);
		expect(isValidPlateauDimensions).toBe(false);

		const { negativeYInput } = negativeInputs;
		formatedPlateauDimensions = formatDimensions(negativeYInput);
		isValidPlateauDimensions = isValidCoordinates(formatedPlateauDimensions);
		expect(isValidPlateauDimensions).toBe(false);

		const { negativeXYInput } = negativeInputs;
		formatedPlateauDimensions = formatDimensions(negativeXYInput);
		isValidPlateauDimensions = isValidCoordinates(formatedPlateauDimensions);
		expect(isValidPlateauDimensions).toBe(false);
	});

	it('should format correctly the rover coordinates input data', () => {

		const {
			InstructionsWithWrongLetters,
			InstructionsWithCommasAndSpaces,
			landingPositionWithCommasAndSpaces,
		} = invalidRoverInputs;

		let formatedRoverCoordinates = formatDimensions(InstructionsWithWrongLetters.original);
		expect(formatedRoverCoordinates).toEqual(InstructionsWithWrongLetters.formatted);

		formatedRoverCoordinates = formatDimensions(InstructionsWithCommasAndSpaces);
		expect(formatedRoverCoordinates).toEqual(['1', '2', 'N']);

		formatedRoverCoordinates = formatDimensions(landingPositionWithCommasAndSpaces);
		expect(formatedRoverCoordinates).toEqual(['1', '2', 'N']);

	});
});