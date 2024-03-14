import { FC, ReactNode } from "react";
import { styles } from "./Button.css";

interface IButtonProps {
  children: ReactNode;
}

export const Button: FC<IButtonProps> = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};
