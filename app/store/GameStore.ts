import { create } from "zustand"
import { scenarios } from '../game/scenario';
import { GameState } from "../game/types";

type GameStore = {
    gameState : GameState;
    currentScenario : number;
    applyEffects : (effects : Partial<GameState>) => void;
    nextScenario : (scenario: number)=>void;
}
export const useGameStore = create<GameStore>((set)=>({
    gameState : {
        cash : 2_400_000,
        employee : 3,
        morale : 82,
        runway : 18,
    },
    currentScenario : 0,
    applyEffects : (effects)=>
    set((state)=>({
        gameState : {
            cash : state.gameState.cash + (effects.cash ?? 0),
            employee : state.gameState.employee + (effects.employee ?? 0),
            morale : state.gameState.morale + (effects.morale ?? 0),
            runway : state.gameState.runway + (effects.runway ?? 0),
        }
    })),
    nextScenario : (scenario)=>{
        set({
            currentScenario : scenario
        })
    },
    getCurrentScenarios : ()=>(state : GameStore)=> scenarios[state.currentScenario]
}))