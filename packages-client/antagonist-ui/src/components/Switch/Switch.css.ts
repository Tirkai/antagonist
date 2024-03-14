import { style } from "@vanilla-extract/css";
import { defaultThemeVars } from "../../themes/default.css";

export const root = style({
  height: defaultThemeVars.controlHeight.small,
  width: "60px",
  background: "#222",
  borderRadius: defaultThemeVars.borderRadius.rounded,
  transition: "ease 0.3s",
  selectors: {
    [`&[data-is-active="true"]`]: {
        background: defaultThemeVars.colors.primary
    }
  }
});

export const container = style({
  display: "flex",
  alignItems: "center",
  height: "100%",
  padding: "0 8px",
  boxSizing: "border-box",
  width: "100%"
});

export const trackContainer = style({
  display: "flex",
  alignItems: "center",
  height: "100%",
  width: "100%",
  position: "relative",
});

export const track = style({
  width: "20px",
  height: "20px",
  background: "white",
  borderRadius: "50%",
  position: "absolute",
  left: 0,
  transition: "ease 0.3s",
  selectors: {
    [`&[data-is-active="true"]`]: {
        left: "calc(100% - 20px)"
    }
  }
});

export const styles = { root, container, trackContainer, track };
