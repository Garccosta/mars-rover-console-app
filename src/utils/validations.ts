const isValidCoordinates = (dimensions: string[]) => {
	const x = Number(dimensions[0]);
	const y = Number(dimensions[1]);

	return x > 0 && y > 0;
};

// const isValidMove = (x: number, y: number, plateauDimensions: string) => {
// 	const { x: xPlateau, y: yPlateau } = plateauDimensions;
// 	return x <= xPlateau && y <= yPlateau;
// };

export {
	isValidCoordinates,
	// isValidMove
};