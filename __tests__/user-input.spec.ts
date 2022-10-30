import { describe, expect } from '@jest/globals';
import { formatCoordinates } from '../src/modules/input_output';
import { isValidCoordinates } from '../src/utils/validations';

import { invalidPlateauInputs, invalidRoverInputs } from '../test-sample';
const { emptyInput, zeroInputs, negativeInputs } = invalidPlateauInputs;

describe('User input', () => {
	it('should return false for validation on empty plateau inputs', () => {
		let input = emptyInput;
		let formatedPlateauDimensions = formatCoordinates(input);
		let isValidPlateauDimensions = isValidCoordinates(formatedPlateauDimensions);

		expect(isValidPlateauDimensions).toBe(false);
	});

	it('should return false for validation on zero plateau inputs', () => {
		const { zeroXInput } = zeroInputs;
		let formatedPlateauDimensions = formatCoordinates(zeroXInput);
		let isValidPlateauDimensions = isValidCoordinates(formatedPlateauDimensions);
		expect(isValidPlateauDimensions).toBe(false);

		const { zeroYInput } = zeroInputs;
		formatedPlateauDimensions = formatCoordinates(zeroYInput);
		isValidPlateauDimensions = isValidCoordinates(formatedPlateauDimensions);
		expect(isValidPlateauDimensions).toBe(false);

		const { zeroXYInput } = zeroInputs;
		formatedPlateauDimensions = formatCoordinates(zeroXYInput);
		isValidPlateauDimensions = isValidCoordinates(formatedPlateauDimensions);
		expect(isValidPlateauDimensions).toBe(false);
	});

	it('should return false for validation on negative plateau inputs', () => {
		const { negativeXInput } = negativeInputs;
		let formatedPlateauDimensions = formatCoordinates(negativeXInput);
		let isValidPlateauDimensions = isValidCoordinates(formatedPlateauDimensions);
		expect(isValidPlateauDimensions).toBe(false);

		const { negativeYInput } = negativeInputs;
		formatedPlateauDimensions = formatCoordinates(negativeYInput);
		isValidPlateauDimensions = isValidCoordinates(formatedPlateauDimensions);
		expect(isValidPlateauDimensions).toBe(false);

		const { negativeXYInput } = negativeInputs;
		formatedPlateauDimensions = formatCoordinates(negativeXYInput);
		isValidPlateauDimensions = isValidCoordinates(formatedPlateauDimensions);
		expect(isValidPlateauDimensions).toBe(false);
	});

	it('should format correctly the rover coordinates input data', () => {

		const {
			InstructionsWithWrongLetters,
			InstructionsWithCommasAndSpaces,
			landingPositionWithCommasAndSpaces,
		} = invalidRoverInputs;

		let formatedRoverCoordinates = formatCoordinates(InstructionsWithWrongLetters.original);
		expect(formatedRoverCoordinates).toEqual(InstructionsWithWrongLetters.formatted);

		formatedRoverCoordinates = formatCoordinates(InstructionsWithCommasAndSpaces.original);
		expect(formatedRoverCoordinates).toEqual(InstructionsWithCommasAndSpaces.formatted);

		formatedRoverCoordinates = formatCoordinates(landingPositionWithCommasAndSpaces.original);
		expect(formatedRoverCoordinates).toEqual(landingPositionWithCommasAndSpaces.formatted);

	});
});