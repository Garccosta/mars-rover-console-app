const { describe, expect } = require('@jest/globals');
const { formatPlateauDimensions } = require('../utils/input_output.js');
const { isValidCoordinates } = require('../utils/validations');

const { invalidPlateauInputs } = require('../test-sample');
const { emptyInput, zeroInputs, negativeInputs} = invalidPlateauInputs;

describe('User input', () => {
	it('should return false for validation on empty plateau inputs', () => {
		let input = emptyInput;
		let formatedPlateauDimensions = formatPlateauDimensions(input);
		let isValidPlateauDimensions = isValidCoordinates(formatedPlateauDimensions);

		expect(isValidPlateauDimensions).toBe(false);
	});

	it('should return false for validation on zero plateau inputs', () => {
		const { zeroXInput } = zeroInputs;
		let formatedPlateauDimensions = formatPlateauDimensions(zeroXInput);
		let isValidPlateauDimensions = isValidCoordinates(formatedPlateauDimensions);
		expect(isValidPlateauDimensions).toBe(false);

		const { zeroYInput } = zeroInputs;
		formatedPlateauDimensions = formatPlateauDimensions(zeroYInput);
		isValidPlateauDimensions = isValidCoordinates(formatedPlateauDimensions);
		expect(isValidPlateauDimensions).toBe(false);

		const { zeroXYInput } = zeroInputs;
		formatedPlateauDimensions = formatPlateauDimensions(zeroXYInput);
		isValidPlateauDimensions = isValidCoordinates(formatedPlateauDimensions);
		expect(isValidPlateauDimensions).toBe(false);
	});

	it('should return false for validation on negative plateau inputs', () => {
		const { negativeXInput } = negativeInputs;
		let formatedPlateauDimensions = formatPlateauDimensions(negativeXInput);
		let isValidPlateauDimensions = isValidCoordinates(formatedPlateauDimensions);
		expect(isValidPlateauDimensions).toBe(false);

		const { negativeYInput } = negativeInputs;
		formatedPlateauDimensions = formatPlateauDimensions(negativeYInput);
		isValidPlateauDimensions = isValidCoordinates(formatedPlateauDimensions);
		expect(isValidPlateauDimensions).toBe(false);

		const { negativeXYInput } = negativeInputs;
		formatedPlateauDimensions = formatPlateauDimensions(negativeXYInput);
		isValidPlateauDimensions = isValidCoordinates(formatedPlateauDimensions);
		expect(isValidPlateauDimensions).toBe(false);
	});

	it('should format correctly the rover input data', () => {
		let input = emptyInput;
		let formatedPlateauDimensions = formatPlateauDimensions(input);
		let isValidPlateauDimensions = isValidCoordinates(formatedPlateauDimensions);

		expect(isValidPlateauDimensions).toBe(false);
	});
});