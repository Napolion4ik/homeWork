import { createContext, useMemo, useState } from "react";

export const ThemeContext = createContext({ isDark: false });

export const ThemeProvider = ({ children }) => {
  const [isDark, setDark] = useState(false);
  const value = useMemo(
    () => ({
      isDark,
      setDark,
    }),
    [isDark]
  );
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
