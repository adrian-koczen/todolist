import React from "react";
import styles from "./styles.module.scss";
// Interfaces
import { ListItem } from "views/AddItem/interfaces";

interface Element {
  task: string;
  list: ListItem;
}

const ListElement = ({ ...props }) => {
  return (
    <div className={styles.container}>
      <div className={styles.priority}></div>
      <span className={styles.task}></span>
      <div className={styles.functionsContainer}></div>
    </div>
  );
};

export default ListElement;
