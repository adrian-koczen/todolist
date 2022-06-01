import React from "react";
import styles from "./styles.module.scss";

interface Props {
  children: string;
}

const FullViewTask = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <span>{children}</span>
    </div>
  );
};

export default FullViewTask;
