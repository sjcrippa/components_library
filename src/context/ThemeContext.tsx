'use client'

import { createContext, useContext, useEffect, useState } from 'react'

import { ThemeTypes } from '@/types/themeTypes'

interface ThemeContextProps {
  theme: ThemeTypes;
  toggleTheme: () => void;
  setTheme: any;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)

// Hook personalizado para acceder al contexto
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe ser usado dentro de un ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState<ThemeTypes>('smooth')

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'smooth' ? 'future' : 'smooth'))
  }

  // guardando el tema en el storage:
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && (savedTheme === 'smooth' || savedTheme === 'future')) {
      setTheme(savedTheme);
    }
  }, []);

  const contextValue: ThemeContextProps = {
    theme,
    toggleTheme,
    setTheme
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}