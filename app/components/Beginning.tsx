'use client'
import { Inter, JetBrains_Mono } from "next/font/google"
import { scenarios } from '../game/scenario';
import { useGameStore } from "../store/GameStore";

const inter = Inter({
    subsets : ['latin']
})
const jetBrainsMono = JetBrains_Mono({
    subsets : ['latin']
})
export default function Beginning(){
    const currentScenario = useGameStore((state)=>state.currentScenario);
    const nextScenario = useGameStore((state)=>state.nextScenario);
    const scenario = scenarios[currentScenario]
    return(
        <div className="mt-20 max-w-3xl  lg:mx-24">
            <p className={`text-sm uppercase tracking-widest text-[#E5E2E3] ${inter.className}`}>{scenario?.id}</p>
            <h2 className={`mt-4 text-5xl font-semibold tracking-tight text-[#B3C5FF] ${inter.className}`}>{scenario?.title}</h2>
            <p className={`${jetBrainsMono.className} mt-6 text-lg leading-8 text-[#B9CCB2]`}>{scenario?.description}</p>
        </div>
    )
}