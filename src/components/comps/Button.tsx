'use client'

import { useTheme } from "@/context/ThemeContext"
import ThemeBtn from "../buttons/ThemeBtn"

export default function ButtonComp() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <div className="w-full h-full">
        <ThemeBtn />
        <div className="flex justify-center mt-36">
          <button
            onClick={toggleTheme}
            className={`p-3 border border-primary rounded transition-all ${theme === 'smooth' ? 'smooth' : 'future'}`}
          >
            Click me
          </button>
        </div>
      </div>
    </>
  )
}