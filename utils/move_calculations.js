const cardinalPointsSequenceList = ['N', 'E', 'S', 'W'];
const cardinalPointsMap = {
	'N': 0,
	'E': 1,
	'S': 2,
	'W': 3
};

const calculateFinalPosition = (rover, plateauDimensions) => {
	const { initialPosition, moveInstructions } = rover;
	const moves = moveInstructions.split('');
	let [x , y, initialDir] = initialPosition.split(' ');
	let currentDir = initialDir;
	const xMove = ['W', 'E'];
  
	moves.forEach(move => {
		switch (move) {
		case 'R':
			currentDir = calculateCurrentDirection('R', currentDir);
			break;

		case 'L':
			currentDir = calculateCurrentDirection('L', currentDir);
			break;

		case 'M':
			if(xMove.includes(currentDir)){
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

const calculateCurrentDirection = (move, currentDir) => {
	const maxIndex = cardinalPointsSequenceList.length - 1;
	const minIndex = 0;
	let cardinalIndex = cardinalPointsMap[currentDir];

	move === 'R' 
		? cardinalIndex++
		: cardinalIndex--;

	if(cardinalIndex >= minIndex && cardinalIndex <= maxIndex){
		currentDir = cardinalPointsSequenceList[cardinalIndex];
		return currentDir;
	}

	currentDir = cardinalIndex > maxIndex 
		? cardinalPointsSequenceList[0]
		: cardinalPointsSequenceList[maxIndex];  

	return currentDir;
};

module.exports = {
	calculateFinalPosition,
	calculateCurrentDirection
};