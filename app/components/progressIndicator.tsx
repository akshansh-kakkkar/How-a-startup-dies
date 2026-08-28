"use client"
import { JetBrains_Mono } from "next/font/google"
import { useGameStore } from "../store/GameStore"
import { scenarios } from '../game/scenario';

const jetBrainsMono = JetBrains_Mono({
    subsets : ['latin']
})
export default function ProgressIndicator(){
    const currentScenario = useGameStore((state)=>state.currentScenario);
    return(
        <p className={`${jetBrainsMono.className} text-[#B3C5FF] text-xs uppercase tracking-widest w-full flex justify-center items-center mt-4 `}>
           Scenario {currentScenario + 1}/{scenarios.length}
        </p>
    )
}