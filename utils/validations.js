const isValidCoordinates = (dimensions) => {
	const {x, y} = dimensions;

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