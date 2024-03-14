import { FC, ReactNode } from "react";
import { defaultThemeClass } from "../themes/default.css";

interface IThemeProviderProps {
  theme?: string;
  children: ReactNode;
}

export const ThemeProvider: FC<IThemeProviderProps> = ({ theme, children }) => {
  return <div className={theme ?? defaultThemeClass} data-type="ThemeProvider">{children}</div>;
};
