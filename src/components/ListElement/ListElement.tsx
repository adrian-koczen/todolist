import React from "react";
import styles from "./styles.module.scss";
// Interfaces
import { ListItem } from "interfaces";
// Icons
import { ReactComponent as Pencil } from "icons/pencil.svg";
import { ReactComponent as Bin } from "icons/bin.svg";
import { ReactComponent as Check } from "icons/check2.svg";

interface Props {
  listItem: ListItem;
  key: string;
}

const ListElement = ({ listItem }: Props) => {
  const { task } = listItem;
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <div className={styles.priority}>
          <Check />
        </div>
        <span className={styles.task}>{task}</span>
      </div>
      <div className={styles.functionsContainer}>
        <Pencil className={`${styles.functionIcon} ${styles.green}`} />
        <Bin className={`${styles.functionIcon} ${styles.red}`} />
      </div>
    </div>
  );
};

export default ListElement;
