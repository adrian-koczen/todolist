import React from "react";
import styles from "./styles.module.scss";

interface Props {
  icon: React.ReactNode;
  options?: React.ReactNode[];
  children: string;
}

const Title = ({ icon, options, ...props }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.content}>
        <span className={styles.title}>{props.children}</span>
        <div className={styles.options}>
          {options &&
            options.map((option, i) => {
              return <div key={i}>{option}</div>;
            })}
        </div>
      </div>
    </div>
  );
};

export default Title;
