import React from "react";
import styles from "./styles.module.scss";

interface Props {
  children: React.ReactNode;
}

const Box = ({ children, ...props }: Props) => {
  return (
    <div className={styles.container} {...props}>
      {children}
    </div>
  );
};

export default Box;
