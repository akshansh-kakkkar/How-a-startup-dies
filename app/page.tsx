import { Inter } from "next/font/google"
import Beginning from "./components/Beginning"
import Choices from "./components/Choices"
const inter = Inter({
  subsets: ['latin'],
})
export default function Home() {
  return (
    <>
    <Beginning />
    <Choices />
    </>
  )
}
