import React from "react";

export const themes = {
    light: {
      foregroundText: "text-grey-700",
      background: "bg-white"
    },
    dark: {
      foregroundText: "text-white",
      background: "bg-gray-900"
    }
  };

export const ThemeContext = React.createContext(themes.light)