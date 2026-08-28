import { scenarios } from './scenario';
import { GameState } from './types';
export default function getNextScenario(
    currentScenario: number,
    gameState: GameState) {
    for (
        let index = currentScenario + 1;
        index <scenarios.length;
        index++
        ) {
        if (scenarios[index].condition(gameState)) {

            return index;
        }
    }
    return null;
}