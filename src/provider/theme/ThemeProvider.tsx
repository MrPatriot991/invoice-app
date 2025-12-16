import { useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";

import type { Theme } from "./ThemeContext";

/**
 * Props expected by the ThemeProvider component.
 */
interface ThemeProviderProps {
  children: React.ReactNode;
}

/**
 * ThemeProvider component.
 *
 * Provides the theme context to the application and manages
 * the dark/light mode state, including saving the preference
 * to localStorage and syncing with the system preference.
 *
 * @param {ThemeProviderProps} props - The component props.
 * @returns {JSX.Element} The provider wrapping its children.
 */

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // Initialize theme state using a function for lazy initialization
  const [theme, setTheme] = useState<Theme>(() => {
    // 1. Try to get the theme from localStorage
    const saved = localStorage.getItem("theme");

    // 2. If a saved preference exists, use it
    if (saved) return saved as Theme;

    // 3. Otherwise, check the user's system preference using matchMedia
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  // Use an effect to synchronize the theme with the DOM and localStorage
  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // Save the current theme preference to localStorage every time it changes
    localStorage.setItem("theme", theme);
  }, [theme]);

  /**
   * Toggles the theme between 'dark' and 'light'.
   */
  const themeToggle = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // The value object provided to consuming components through the context.
  const contextValue = {
    theme,
    themeToggle,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
