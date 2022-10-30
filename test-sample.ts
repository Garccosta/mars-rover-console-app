const singleValidInput = {
	landingPosition1: '1 2 N',
	Instructions1: 'LMLMLMLMM',
	repeatDecision: 'n'
};

const multipleValidInputs = {
	landingPosition1: '1 2 N',
	Instructions1: 'LMLMLMLMM',
	repeatDecision: 'y',
	landingPosition2: '3 3 E',
	Instructions2: 'MRRMMRMRRM'
};

const invalidPlateauInputs = {
	emptyInput: '',
	zeroInputs: {
		zeroXInput: '1 0',
		zeroYInput: '0 1',
		zeroXYInput: '0 0'
	},
	negativeInputs: {
		negativeXInput: '-1 1',
		negativeYInput: '1 -1',
		negativeXYInput: '-1 -1'
	}
};

const correctOutputs = {
	finalPosition1: '1 3 N',
	finalPosition2: '2 3 S'
};

export {
	singleValidInput,
	multipleValidInputs,
	invalidPlateauInputs,
	correctOutputs
};