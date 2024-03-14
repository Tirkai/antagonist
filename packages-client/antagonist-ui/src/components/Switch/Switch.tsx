import { FC, useState } from "react";
import { styles } from "./Switch.css";

interface ISwitchProps {}

export const Switch: FC<ISwitchProps> = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={styles.root}
      data-is-active={isActive}
      onClick={() => setIsActive((value) => !value)}
    >
      <div className={styles.container}>
        <div className={styles.trackContainer}>
          <div className={styles.track} data-is-active={isActive}></div>
        </div>
      </div>
    </div>
  );
};
