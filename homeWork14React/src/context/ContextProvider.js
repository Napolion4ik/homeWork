import { useEffect, useState, useMemo } from "react";
import ThemeContext from "./ThemeContext";

const THEMES = {
  LIGHT: "light",
  DARK: "dark",
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(THEMES.LIGHT);

  useEffect(() => {
    window.document.body.classList.add("theme-" + theme);

    return () => {
      window.document.body.classList.remove("theme-" + theme);
    };
  }, [theme]);
  const value = useMemo(() => ({ theme, setTheme, THEMES }), [theme, setTheme]);
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
export default ThemeProvider;
