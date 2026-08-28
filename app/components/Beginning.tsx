import { Inter, JetBrains_Mono } from "next/font/google"

const inter = Inter({
    subsets : ['latin']
})
const jetBrainsMono = JetBrains_Mono({
    subsets : ['latin']
})
export default function Beginning(){
    return(
        <div className="mt-20 max-w-3xl  mx-24">
            <p className={`text-sm uppercase tracking-widest text-[#E5E2E3] ${inter.className}`}>The Beginning</p>
            <h2 className={`mt-4 text-5xl font-semibold tracking-tight text-[#B3C5FF] ${inter.className}`}>You Just Raised $2.4m</h2>
            <p className={`${jetBrainsMono.className} mt-6 text-lg leading-8 text-[#B9CCB2]`}>Your startup has three employees, eighteen months of runway, and absolutely no idea what it's doing.</p>
        </div>
    )
}