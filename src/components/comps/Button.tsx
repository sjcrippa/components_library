'use client'

import { useTheme } from "@/context/ThemeContext"

export default function ButtonComp() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <div className="flex justify-center">
        <button
          onClick={toggleTheme}
          className="p-3 border border-primary rounded transition-all">
            {theme === 'smooth' ? 'future' : 'smooth'}
          Click me
        </button>
      </div>
    </>
  )
}