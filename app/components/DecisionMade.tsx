import { ChevronRight } from "lucide-react";
import { Inter, JetBrains_Mono } from "next/font/google";

type DecisionResultProps = {
    choice: {
        id: string;
        title: string;
        description: string;
        effects: {
            cash: number;
            employee: number;
            morale: number;
            runway: number;
        }
    };
    onNext: () => void;
}
const inter = Inter({
    subsets: ['latin']
})
const jetBrainsMono = JetBrains_Mono({
    subsets: ['latin']
})
export default function DecisionMade({
    choice,
    onNext
}: DecisionResultProps) {
    return (
        <div className="fixed inset-0  flex-col bg-black/70 flex text-center justify-center items-center backdrop-blur-sm  z-50">
            <p className={`text-xs uppercase text-[#E5E2E3] ${jetBrainsMono.className} font-medium`}>Decision made</p>
            <h2 className={`mt-4 text-4xl font-bold ${inter.className} text-[#00E639]`}>{choice.title}</h2>
            <p className={`mt-4 font-light text-[#B3C5FF] ${inter.className} text-sm`}>{choice.description}</p>
            <div className={`mt-4 border-[#E5E2E3] border-t w-150`} />
            <div className={`flex  mt-4  uppercase text-sm ${jetBrainsMono.className} items-center text-center ${choice.effects.cash > 0  ? "text-[#00E639]" : "text-[#FFB4AB]"} `}>
             
                <p className="w-28 text-left">Cash</p>
                <p className="w-28 text-left">
                    {choice.effects.cash > 0 ? "+" : ""}
                    ${choice.effects.cash.toLocaleString()}
                </p>
            </div>
            <div className={`flex uppercase mt-2 text-sm ${jetBrainsMono.className} items-center text-center ${choice.effects.employee > 0  ? "text-[#00E639]" : "text-[#FFB4AB]"} `}>
                <p className="w-28 text-left">Employees</p>
                <p className="w-28 text-left">
                    {choice.effects.employee > 0 ? "+" : ""}
                    {choice.effects.employee}
                </p>
            </div>
            <div className={`flex uppercase mt-2  text-sm ${jetBrainsMono.className} items-center text-center ${choice.effects.morale > 0  ? "text-[#00E639]" : "text-[#FFB4AB]"} `}>
                <p className="w-28 text-left">Morale</p>
                <p className="w-28 text-left">
                    {choice.effects.morale > 0 ? "+" : ""}
                    {choice.effects.morale}
                </p>
            </div>
            <div className={`flex uppercase mt-2 text-sm ${jetBrainsMono.className} items-center text-center ${choice.effects.runway > 0  ? "text-[#00E639]" : "text-[#FFB4AB]"} `}>
                <p className="w-28 text-left">Runway</p>
                <p className="w-28 text-left">
                    {choice.effects.runway > 0 ? "+" : ""}
                    {choice.effects.runway} months
                </p>
            </div>
            <button className={` bottom-12 flex gap-1 text-center justify-center cursor-pointer hover:scale-[90%] transition-all duration-300 items-center text-xl absolute rounded-lg bg-[#B3C5FF] px-5 py-3  font-medium text-[#0a0a0a] ${jetBrainsMono.className}`} onClick={onNext}>Next
                <span>
                    <ChevronRight />
                </span>
            </button>
        </div>
    )
}