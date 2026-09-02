import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

function useLocalStorage(clave: string, valorInicial: boolean) {
  const [valor, setValor] = useState(() => {
    try {
      const guardado = localStorage.getItem(clave);
      return guardado ? JSON.parse(guardado) : valorInicial;
    } catch (error) {
      console.error("Error leyendo localStorage:", error);
      return valorInicial;
    }
  });

  useEffect(() => {
    localStorage.setItem(clave, JSON.stringify(valor));
  }, [clave, valor]);

  return [valor, setValor];
}

interface ThemeProps {
  Theme: boolean;
  changeTheme: () => void;
}

export const ThemeContext = createContext<ThemeProps | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [Theme, setTheme] = useLocalStorage("theme", false)

  const changeTheme = () => setTheme((prevTheme: any) => !prevTheme);

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