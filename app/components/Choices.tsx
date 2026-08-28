'use client'
import { Inter, JetBrains_Mono } from "next/font/google";
import { scenarios } from "../game/scenario"
import { useState } from "react";
import { useGameStore } from '../store/GameStore';
const inter = Inter({
    subsets: ['latin']
})
const jetBrainsMono = JetBrains_Mono({
    subsets: ['latin']
})
export default function Choices() {
    const scenario = scenarios[0];
    const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
    const GameState = useGameStore((state) => state.gameState);
    const applyEffects = useGameStore((state) => state.applyEffects);
    return (
        <div className="mt-12 mx-24 w-full flex gap-12 items-center text-center justify-center max-w-3xl">
            <div className=" w-full flex flex-col gap-5">
                {scenario.choices.map((choice) => (
                    <button
                        disabled={selectedChoice !== null}
                        key={choice.id}
                        onClick={() => {
                            if (selectedChoice) return;
                            setSelectedChoice(choice.id);
                            applyEffects(choice.effects)
                        }} className={`${inter.className} rounded-xl  border  cursor-pointer disabled:cursor-not-allowed disabled:border-[#B9CCB2] hover:border-[#B3C5FF] p-6 text-left transition-all flex justify-between items-center text-center ${selectedChoice === choice.id ? "border-[#B3C5FF] bg-[#B3C5FF]/5" : "border-[#B9CCB2] hover:border-[#92ca7e]"}`}>
                        <div>
                            <h3 className={`text-xl font-bold text-[#FFB4AB] capitalize`}>
                                {choice.title}
                            </h3>
                            <p className={`${jetBrainsMono.className} mt-2 text-sm leading-6 text-[#B9CCB2]`}>{choice.description}</p>
                        </div>
                        <div className={`text-xs flex gap-6 uppercase ${jetBrainsMono.className}`}>
                            <div className="border-r border-[#E5E2E3] pr-5 flex flex-col gap-2 ">
                                <p className="text-[#FFB4AB]">Burn ${choice.effects.cash}</p>
                                <p className="text-[#B3C5FF]">Employees {choice.effects.employee}</p>
                            </div>
                            <div className="border-r flex flex-col gap-2 ">
                               <p className="text-[#00E639]">Morale {choice.effects.morale}</p>
                                <p className="text-[#B3C5FF]">Runway {choice.effects.runway}</p>
                            </div>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    )
}