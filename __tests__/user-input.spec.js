const { describe, expect } = require('@jest/globals');
const { formatDimensions } = require('../utils/input_output.js');
const { isValidCoordinates } = require('../utils/validations');

const { invalidPlateauInputs } = require('../test-sample');
const { emptyInput, zeroInputs, negativeInputs} = invalidPlateauInputs;

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

	it('should format correctly the rover input data', () => {
		let input = emptyInput;
		let formatedPlateauDimensions = formatDimensions(input);
		let isValidPlateauDimensions = isValidCoordinates(formatedPlateauDimensions);

		expect(isValidPlateauDimensions).toBe(false);
	});
});