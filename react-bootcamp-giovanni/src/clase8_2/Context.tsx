import { createContext, useContext, useState, type ReactNode } from 'react'

interface ThemeProps {
  Theme: boolean;
  changeTheme: () => void;
}

export const ThemeContext = createContext<ThemeProps | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [Theme, setTheme] = useState(false);
  const changeTheme = () => setTheme((!Theme));

  return (
    <ThemeContext.Provider value={{ Theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const contexto = useContext(ThemeContext)
  if (!contexto) {
    throw new Error('useTheme debe usarse dentro de un ThemeContext.Provider')
  }
  return contexto
}