import React from "react";
import styles from "./styles.module.scss";

interface Props {
  icon: React.ReactNode;
  children: string;
}

const Title = ({ icon, ...props }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {icon}
        <span className={styles.title}>{props.children}</span>
      </div>
      <div className={styles.border}></div>
    </div>
  );
};

export default Title;
