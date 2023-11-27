'use client'

import { useTheme } from "@/context/ThemeContext"
import styles from './Button.module.css'

export default function ButtonComp() {
  const { theme, toggleTheme } = useTheme()
  console.log('Tema actual:', theme)

  /* const getButtonStyles = (selectedTheme: string) => {
    let buttonStyle = {
      padding: '0.75rem',
      border: '1px solid #000',
      borderRadius: '0.25rem',
      transition: 'all 1s ease',
    } as React.CSSProperties;

    if (selectedTheme === 'smooth') {
      buttonStyle.backgroundColor = 'yellow';
      buttonStyle.color = 'red'
      
    } else if (selectedTheme === 'future') {
      buttonStyle.backgroundColor = 'blue';
    }

    return buttonStyle;
  };

  const buttonStyles = getButtonStyles(theme); */

  return (
    <>
      <div className="w-full h-full">
        <button onClick={toggleTheme}>
          <span>Style: {theme}</span>
        </button>
        <div className="flex justify-center mt-36">
          <button className={`${styles.button} ${theme === 'smooth' ? styles.smooth : styles.future}`}>
            Button
          </button>
        </div>
      </div>
    </>
  )
}