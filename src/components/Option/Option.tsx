import React from "react";
import styles from "./styles.module.scss";

interface Props {
  icon: React.ReactNode;
}

const Option = ({ icon }: Props) => {
  return <div className={styles.container}>{icon}</div>;
};

export default Option;
