import { createTheme } from "@vanilla-extract/css";
import { defaultThemeVars } from "./default.css";
import { tokens } from "../config/tokens";

export const defaultDarkClass = createTheme(defaultThemeVars, {
  ...tokens,
  colors: {
    primary: "rgb(200,50,50)",
    secondary: "blue",
    text: "#c4c4c4",
  },
});
