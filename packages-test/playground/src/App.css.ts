import { style, globalStyle } from "@vanilla-extract/css";

globalStyle("body", {
  margin: 0,
  background: "#333",
});

export const app = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100dvh",
  gap: "24px",
  color: "white",
  fontFamily: "Roboto, sans-serif",
});

export const styles = { app };
