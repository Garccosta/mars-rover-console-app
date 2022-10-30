import { RoverData } from "../interfaces/roverData";

const cardinalPointsSequenceList = ['N', 'E', 'S', 'W'];
const cardinalPointsMap = new Map<string, number>([
	['N', 0],
	['E', 1],
	['S', 2],
	['W', 3],
]);

const calculateFinalPosition = (rover: RoverData, plateauDimensions: string[]) => {
	const { initialPosition, moveInstructions } = rover;
	let [firstCoord, secondCoord, initialDir] = initialPosition;
	let [x, y] = [Number(firstCoord), Number(secondCoord)]
	let currentDir = initialDir;
	const xMove = ['W', 'E'];

	moveInstructions.forEach(move => {
		switch (move) {
			case 'R':
				currentDir = calculateCurrentDirection('R', currentDir);
				break;

			case 'L':
				currentDir = calculateCurrentDirection('L', currentDir);
				break;

			case 'M':
				if (xMove.includes(currentDir)) {
					currentDir === 'E' ? x++ : x--;
					break;
				}
				currentDir === 'N' ? y++ : y--;
				break;
		}
	});

	const finalPosition = `${x} ${y} ${currentDir}`;

	return finalPosition;
};

const calculateCurrentDirection = (move: string, currentDir: string) => {
	const maxIndex = cardinalPointsSequenceList.length - 1;
	const minIndex = 0;
	let cardinalIndex: number = cardinalPointsMap.get(currentDir)!;

	move === 'R'
		? cardinalIndex++
		: cardinalIndex--;

	if (cardinalIndex >= minIndex && cardinalIndex <= maxIndex) {
		currentDir = cardinalPointsSequenceList[cardinalIndex];
		return currentDir;
	}

	currentDir = cardinalIndex > maxIndex
		? cardinalPointsSequenceList[0]
		: cardinalPointsSequenceList[maxIndex];

	return currentDir;
};

export {
	calculateFinalPosition,
	calculateCurrentDirection
};