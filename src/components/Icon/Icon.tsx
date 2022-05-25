import React from "react";
import styles from "./styles.module.scss";

interface Props {
  color: "blue" | "yellow" | "green" | "red";
  icon: React.ReactNode;
}

const Icon = ({ ...props }: Props) => {
  return (
    <div className={`${styles.container} ${styles[props.color]}`}>
      <div className={styles.icon}>{props.icon}</div>
    </div>
  );
};

export default Icon;
