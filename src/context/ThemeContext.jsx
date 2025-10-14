import { createContext, useEffect, useContext, useState } from "react"

const ThemeContext = createContext()

const THEME_STORAGE_KEY = "app_theme";

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


const ThemeProvider = ({ children }) => {

  const [theme, setTheme] = useState(() => getInitialTheme());


  const toggleTheme = () => setTheme(t => (t === 'light' ? 'dark' : 'light'));

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