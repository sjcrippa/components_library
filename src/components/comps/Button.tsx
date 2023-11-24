'use client'

import { useTheme } from "@/context/ThemeContext"

export default function ButtonComp() {
  const { theme, toggleTheme } = useTheme()
  console.log('Tema actual:', theme)
  
  return (
    <>
      <div className="w-full h-full">
        <button onClick={toggleTheme}>
          <span>Style: {theme}</span>
        </button>
        <div className="flex justify-center mt-36">
          <button
            className={`theme ${theme === 'smooth' ? 'smooth' : 'future'} p-3 border border-primary rounded transition-all`}
          >
            Button
          </button>
        </div>
      </div>
    </>
  )
}