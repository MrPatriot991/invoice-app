import { createContext } from "react";

/**
 * Defines a union type for available theme options.
 */
export type Theme = "dark" | "light";

/**
 * Defines the structure of the data stored within the theme context.
 * @property theme The current theme ('light' or 'dark').
 * @property toggleTheme A function to switch the theme.
 */

export interface ThemeContextType {
  theme: Theme;
  themeToggle: () => void;
}

/**
 * Creates the React theme context object.
 * Defaults to undefined. If used outside of the ThemeProvider,
 * the useTheme hook will throw an error, which handles this case safely.
 */
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);
