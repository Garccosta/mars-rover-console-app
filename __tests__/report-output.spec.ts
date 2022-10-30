import { RoverData } from './../interfaces/roverData';
import { describe, expect } from '@jest/globals';
import { formatCoordinates } from '../src/modules/input_output';
import { calculateFinalPosition } from '../src/utils/move_calculations'

import { validRoverInputs, correctOutputs } from '../test-sample';

const { Instructions1,
    Instructions2,
    landingPosition1,
    landingPosition2
} = validRoverInputs;

describe.only('Rovers report', () => {

    it('should calculate correct final position for the rovers report', () => {
        const formatedPlateauDimensions = ['9', '8'];

        let landingPosition = landingPosition1;
        let formatedLandingPosition = formatCoordinates(landingPosition);
        let instructions = Instructions1;
        let formatedInstructions = formatCoordinates(instructions);

        let roverData: RoverData = {
            initialPosition: formatedLandingPosition,
            moveInstructions: formatedInstructions
        }

        let finalPosition = calculateFinalPosition(roverData, formatedPlateauDimensions);
        expect(finalPosition).toBe(correctOutputs.finalPosition1);

        landingPosition = landingPosition2;
        formatedLandingPosition = formatCoordinates(landingPosition);
        instructions = Instructions2;
        formatedInstructions = formatCoordinates(instructions);

        roverData = {
            initialPosition: formatedLandingPosition,
            moveInstructions: formatedInstructions
        }

        finalPosition = calculateFinalPosition(roverData, formatedPlateauDimensions);
        expect(finalPosition).toBe(correctOutputs.finalPosition2);
    })
});