'use client'

import { useTheme } from "@/context/ThemeContext"

export default function ThemeBtn() {
  const {theme} = useTheme()

  return (
    <>
      <button>
        Style: {theme}
      </button>
    </>
  )
}