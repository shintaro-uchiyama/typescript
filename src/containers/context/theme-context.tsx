import React from "react";
import { themes } from "./themes";

// Make sure the shape of the default value passed to
// createContext matches the shape that the consumers expect!
const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => { },
});

export default ThemeContext;
