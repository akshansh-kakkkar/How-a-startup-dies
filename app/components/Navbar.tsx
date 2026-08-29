"use client"
import { Inter, JetBrains_Mono } from "next/font/google"
import { useGameStore } from "../store/GameStore"
import { scenarios } from "../game/scenario"

const inter = Inter({
    subsets: ['latin']
})
const jetBrainsMono = JetBrains_Mono({
    subsets: ['latin']
})
export default function Navbar() {
    const gameState = useGameStore((state) => state.gameState)
    const currentScenario = useGameStore((state) => state.currentScenario);
    const day = scenarios[currentScenario]?.day;
    return (
        <div className="flex items-center justify-between px-24">
            <div className={`${inter.className} text-2xl font-bold text-[#B3C5FF] uppercase`}>
                How a startup dies
            </div>
            <div className="flex gap-4 items-baseline">
                <h1 className={`${inter.className} text-[#E5E2E3] text-2xl font-bold`}>Venture 01</h1>
                <p className={`${jetBrainsMono.className} text-xs text-[#B9CCB2]`}>DAY {day}</p>
            </div>
            <div className="flex gap-4">
                <div className={`flex w-full items-center text-sm gap-4 font-light border-r border-[#E5E2E3] px-4`}>
                    <p className={`${inter.className} text-[#E5E2E3]`}>CASH</p>
                    <p className={`${jetBrainsMono.className} text-[#FFB4AB]`}>{gameState.cash.toLocaleString()}</p>
                </div>
                <div className={`flex w-full items-center text-sm gap-4 font-light border-r border-[#E5E2E3] px-4`}>
                    <p className={`${inter.className} text-[#E5E2E3]`}>EMPLOYEES</p>
                    <p className={`${jetBrainsMono.className} text-[#00E639]`}>{gameState.employee}</p>
                </div>
                <div className={`flex w-full items-center text-sm gap-4 font-light border-r border-[#E5E2E3] px-4`}>
                    <p className={`${inter.className} text-[#E5E2E3]`}>Morale</p>
                    <p className={`${jetBrainsMono.className} text-[#B3C5FF]`}>{gameState.morale}</p>
                </div>
                <div className={`flex w-full items-center text-sm gap-4 font-light`}>
                    <p className={`${inter.className} text-[#E5E2E3]`}>RUNWAY</p>
                    <p className={`${jetBrainsMono.className} text-[#00E639]`}>{gameState.runway}</p>
                </div>
            </div>
        </div>
    )
}