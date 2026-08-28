'use client'
import { Inter, JetBrains_Mono } from "next/font/google";
import { scenarios } from "../game/scenario"
import { useState } from "react";
const inter = Inter({
    subsets: ['latin']
})
const jetBrainsMono = JetBrains_Mono({
    subsets: ['latin']
})
export default function Choices() {
    const scenario = scenarios[0];
    const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
    const [gameState, setGameState] = useState({
        cash: 2400000,
        employee: 3,
        morale: 82,
        runway: 18,
    })
    return (
        <div className="mt-12 mx-24 w-full flex gap-12 items-center text-center justify-center max-w-3xl">
            <div className=" w-full flex flex-col gap-5">
                {scenario.choices.map((choice) => (
                    <button key={choice.id} onClick={() => {
                        setSelectedChoice(choice.id);
                        setGameState((current) => ({
                            cash: current.cash + (choice.effects.cash ?? 0),
                            employee: current.employee + (choice.effects.employee ?? 0),
                            morale: current.morale + (choice.effects.morale ?? 0),
                            runway: current.runway + (choice.effects.runway ?? 0)
                        }))
                    }} className={`${inter.className} rounded-xl  border  cursor-pointer hover:border-[#B3C5FF] p-6 text-left transition-all ${selectedChoice === choice.id ? "border-[#B3C5FF] bg-[#B3C5FF]/5" : "border-[#B9CCB2] hover:border-[#92ca7e]"}`}>
                        <h3 className={`text-xl font-bold text-[#E5E2E3] capitalize`}>
                            {choice.title}
                        </h3>
                        <p className={`${jetBrainsMono.className} mt-2 text-sm leading-6 text-[#B9CCB2]`}>{choice.description}</p>
                    </button>
                ))}
            </div>
        </div>
    )
}