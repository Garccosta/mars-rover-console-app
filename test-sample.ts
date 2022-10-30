const validRoverInputs = {
	landingPosition1: '1 2 N',
	Instructions1: 'LMLMLMLMM',
	landingPosition2: '3 3 E',
	Instructions2: 'MRRMMRMRRM'
};

const correctOutputs = {
	finalPosition1: '1 3 N',
	finalPosition2: '2 3 S'
};

const invalidRoverInputs = {
	landingPositionWithCommasAndSpaces: {
		original: ' 1,2, N ',
		formatted: ['1', '2', 'N']
	},
	InstructionsWithWrongLetters: {
		original: 'LGLMFRLMK',
		formatted: ['L', 'L', 'M', 'R', 'L', 'M']
	},
	InstructionsWithCommasAndSpaces: {
		original: ' M, R R,M,M,R,  M,R,R,M ',
		formatted: ['M', 'R', 'R', 'M', 'M', 'R', 'M', 'R', 'R', 'M']
	}
};

const invalidPlateauInputs = {
	emptyInput: '',
	inputWithCommas: '1, 0',
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


export {
	validRoverInputs,
	invalidPlateauInputs,
	invalidRoverInputs,
	correctOutputs
};