import { RotateCcw } from "lucide-react";
import { Inter, JetBrains_Mono } from "next/font/google"
import { motion } from 'framer-motion';
import { useGameStore } from "../store/GameStore";

const inter = Inter({
    subsets: ['latin']
})

const jetBrainsMono = JetBrains_Mono({
    subsets: ['latin']
})
type GameOverProps = {
    onRestart: () => void;
}
export default function GameOver({ onRestart }: GameOverProps) {
    const gameState = useGameStore((state) => state.gameState);
    let cause = "Nobody really knows what happened";

    if (gameState.cash <= 0) {
        cause = "You ran out of money.";
    } else if (gameState.employee <= 0) {
        cause = "Everyone in your team quit. Money follows my brother. money follows!";
    } else if (gameState.morale <= 20) {
        cause = "Nobody wanted to work here anymore."
    } else if (gameState.runway <= 2) {
        cause = "The runway ended. Unfortunately, there was no plane.";
    }
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-50 gap-8 flex flex-col items-center justify-center text-center bg-black/70 backdrop-blur-sm">
            <p className={`${jetBrainsMono.className} text-[#00E639] text-2xl font-bold`}>Day 180</p>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className={`text-2xl ${inter.className} text-[#00E639] font-bold`}>Your Startup Died</motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className={`text-md text-[#00E639] ${jetBrainsMono.className} `}>Congratulations. You successfully turned $2.4M into a very expensive learning experience.</motion.p>
            <div className="mt-6">
                <p className={`${jetBrainsMono.className} text-xs uppercase tracking-widest text-[#E5E2E3]`}>Cause of death</p>
                <p className={`${inter.className} mt-2 text-lg text-[#FFB4AB]`}>{cause}</p>
            </div>
            <div className="z-500">
                <motion.video
                    src={'/Explosion.mp4'}
                    autoPlay
                    loop
                    muted
                    width={500}
                    height={500}
                    className="rounded-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        delay: 1.1,
                        duration: 0.6,
                        ease: "easeOut"
                    }}
                />
            </div>
            <motion.button
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute bottom-4 bg-[#B3C5FF] p-2 text-black rounded-full cursor-pointer hover:scale-[115%] transition-all duration-300" onClick={onRestart}>
                <RotateCcw />
            </motion.button>
        </motion.div>
    )
}