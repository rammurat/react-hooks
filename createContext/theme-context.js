import React from "react";
export const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
    color: "#000"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
    color: "#fff"
  }
};

export const ThemeContext = React.createContext(
  themes.dark // default value
);
