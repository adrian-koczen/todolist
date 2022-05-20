import React from "react";
import styles from "./styles.module.scss";

interface Props {
  icon: React.ReactNode;
  children: string;
}

const Title = ({ icon, ...props }: Props) => {
  return (
    <div className={styles.container}>
      {icon}
      <span className={styles.title}>{props.children}</span>
    </div>
  );
};

export default Title;
