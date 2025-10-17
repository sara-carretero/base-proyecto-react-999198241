//Importo hooks de react que vamos a utilizar
import { createContext, useEffect, useContext, useState } from "react"

//Creo el contexto
const ThemeContext = createContext()

//key de storage 
const THEME_STORAGE_KEY = "app_theme";


//Obtengo estado original => defino parametros y los inicializo
export function getInitialTheme(storageKey = THEME_STORAGE_KEY, fallback = "light") {
  if (typeof window === "undefined") return fallback;
  try {
    const saved = window.localStorage.getItem(storageKey);
    if (saved === "dark" || saved === "light") return saved;
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  } catch {
    return fallback;
  }
}



//Armo el proveedor del theme
const ThemeProvider = ({ children }) => {

  const [theme, setTheme] = useState(() => getInitialTheme());//--> Este es el estado que almacena que theme asignamos


  const toggleTheme = () => setTheme(t => (t === 'light' ? 'dark' : 'light'));


  //funcion que alterna el state theme entre light y dark
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);

    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch { }

  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

const useTheme = () => useContext(ThemeContext)

export { useTheme, ThemeProvider }