import { RotateCcw } from "lucide-react";
import { Inter, JetBrains_Mono } from "next/font/google"

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
    return (
        <div className="fixed inset-0 z-50 gap-8 flex flex-col items-center justify-center text-center bg-black/70 backdrop-blur-sm">
            <p className={`${jetBrainsMono.className} text-[#00E639] text-2xl font-bold`}>Day 180</p>
            <h1 className={`text-2xl ${inter.className} text-[#00E639] font-bold`}>Your Startup Died</h1>
            <p className={`text-mdA text-[#00E639] ${jetBrainsMono.className} `}>Congratulations. You successfully turned $2.4M into a very expensive learning experience.</p>
            <div className="z-500">
                <video src={'/Explosion.mp4'} autoPlay loop muted width={500} height={500} className="rounded-lg" />
            </div>
            <button className="absolute bottom-12 bg-[#B3C5FF] p-2 text-black rounded-full cursor-pointer hover:scale-[115%] transition-all duration-300" onClick={onRestart}>
                <RotateCcw />
            </button>
        </div>
    )
}