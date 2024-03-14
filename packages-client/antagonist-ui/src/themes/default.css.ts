import { createTheme } from "@vanilla-extract/css";
import { tokens } from "../config/tokens";

export const [defaultThemeClass, defaultThemeVars] = createTheme({
  ...tokens
});
