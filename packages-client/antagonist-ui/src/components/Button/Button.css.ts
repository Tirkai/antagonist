import { style } from "@vanilla-extract/css";
import { defaultThemeVars } from "../../themes/default.css";

const button = style({
  background: defaultThemeVars.colors.primary,
  height: defaultThemeVars.controlHeight.medium,
  color: defaultThemeVars.colors.text,
  borderRadius: defaultThemeVars.borderRadius.medium,
  border: "0",
  outline: "none",
});

export const styles = { button };
