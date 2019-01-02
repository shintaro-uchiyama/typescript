import React from "react";

export const themes = {
  dark: {
    background: "#222222",
    foreground: "#ffffff",
  },
  light: {
    background: "#eeeeee",
    foreground: "#000000",
  },
};

// Make sure the shape of the default value passed to
// createContext matches the shape that the consumers expect!
export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => { },
});
