import { Inter } from "next/font/google"
import Beginning from "./components/Beginning"
import Choices from "./components/Choices"
import ProgressIndicator from "./components/progressIndicator"
const inter = Inter({
  subsets: ['latin'],
})
export default function Home() {
  return (
    <>
    <Beginning />
    <Choices />
    <ProgressIndicator />
    </>
  )
}
