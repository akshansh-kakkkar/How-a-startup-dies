'use client'
import { Inter, JetBrains_Mono } from "next/font/google";
import { scenarios } from '../game/scenario';
import { useState } from "react";
import { useGameStore } from '../store/GameStore';
import { AnimatePresence, motion } from "framer-motion"
import DecisionMade from "./DecisionMade";
import GameOver from "./GameOver";
const inter = Inter({
    subsets: ['latin']
})
const jetBrainsMono = JetBrains_Mono({
    subsets: ['latin']
})
export default function Choices() {
    const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
    const currentScenario = useGameStore((state) => state.currentScenario);
    const nextScenario = useGameStore((state) => state.nextScenario);
    const scenario = scenarios[currentScenario];
    const gameState = useGameStore((state) => state.gameState);
    const applyEffects = useGameStore((state) => state.applyEffects);
    const restartGame = useGameStore((state) => state.restartGame)
    if (!scenario) {
        return <GameOver onRestart={restartGame} />
    }
    const selectedChoiceData = scenario.choices.find(
        (choice) => choice.id === selectedChoice
    )


    return (
        <>
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentScenario}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35 }}
                    className="mt-12 mx-24 flex gap-12 items-center text-center justify-center">
                    <div className="w-full flex flex-col -center gap-5">
                        <AnimatePresence>
                            {scenario.choices.map((choice, index) => (
                                <motion.button
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.4,
                                        delay: 0.08 * index
                                    }}
                                    disabled={selectedChoice !== null}
                                    key={choice.id}
                                    onClick={() => {
                                        if (selectedChoice) return;
                                        setSelectedChoice(choice.id);
                                        applyEffects(choice.effects)
                                    }} className={`${inter.className} rounded-xl  border  cursor-pointer disabled:cursor-not-allowed  hover:border-[#B3C5FF] p-6 text-left transition-all flex justify-between items-center text-center ${selectedChoice === choice.id ? "border-[#B3C5FF] hover:border-[#B3C5FF] bg-[#B3C5FF]/5" : "border-[#B9CCB2] hover:border-[#92ca7e]"}`}>
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
                                </motion.button>
                            ))}
                        </AnimatePresence>
                    </div>
                </motion.div>
                {
                    selectedChoiceData && (
                        <DecisionMade choice={selectedChoiceData} onNext={() => {
                            setSelectedChoice(null);
                            if (currentScenario === scenarios.length - 1) {
                                nextScenario();
                                return;
                            }
                            nextScenario();
                        }} />
                    )
                }
            </AnimatePresence>
        </>
    )
}