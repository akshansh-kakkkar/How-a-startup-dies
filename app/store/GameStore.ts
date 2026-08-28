import { getDynamicDataPostponedState } from "next/dist/server/app-render/postponed-state"
import { create } from "zustand"
import { scenarios } from "../game/scenario";

type GameState = {
    cash : number,
    employees : number,
    morale : number,
    runway : number,
}

type GameStore = {
    gameState : GameState;
    currentScenario : number;
    applyEffects : (effects : Partial<GameState>) => void;
    nextScenario : ()=>void;
}
export const useGameStore = create<GameStore>((set)=>({
    gameState : {
        cash : 2_400_000,
        employees : 3,
        morale : 82,
        runway : 18,
    },
    currentScenario : 0,
    applyEffects : (effects)=>
    set((state)=>({
        gameState : {
            cash : state.gameState.cash + (effects.cash ?? 0),
            employees : state.gameState.employees + (effects.employees ?? 0),
            morale : state.gameState.morale + (effects.morale ?? 0),
            runway : state.gameState.runway + (effects.runway ?? 0),
        }
    })),
    nextScenario : ()=>
        set((state)=>({
            currentScenario: state.currentScenario + 1,
        })),
    getCurrentScenarios : ()=>(state : GameStore)=> scenarios[state.currentScenario]
}))