import { createContext } from "react";

export type ThemeContextType = {
  dark: boolean;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);
