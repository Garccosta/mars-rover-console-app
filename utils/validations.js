const isValidCoordinates = (dimensions) => {
	const x = dimensions[0];
	const y = dimensions[1];

	return x > 0 && y > 0;
};

const isValidMove = (x, y, plateauDimensions) => {
	const {x : xPlateau, y: yPlateau} = plateauDimensions;
	return x <= xPlateau && y <= yPlateau;
};

module.exports = {
	isValidCoordinates,
	isValidMove
};