import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

/**
 * A custom React hook that provides access to the current theme context.
 *
 * This hook must be used within a ThemeProvider.
 *
 * @returns {ThemeContextType} The current theme state and toggle function.
 * @throws {Error} If the hook is used outside of a ThemeProvider.
 */

export function useTheme() {
  const theme = useContext(ThemeContext);

  if (!theme) {
    // If theme is undefined, it means the hook was called outside the provider
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return theme;
}
