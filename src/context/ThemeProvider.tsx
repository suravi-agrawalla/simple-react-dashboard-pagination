import { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [dark, setDark] = useState(false);
  const toggleTheme = () => {
    setDark(!dark);
  };

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  return context;
};
