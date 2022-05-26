import React from "react";
import styles from "./styles.module.scss";
// Interfaces
import { ListItem } from "interfaces";
// Icons
import { ReactComponent as Pencil } from "icons/pencil.svg";
import { ReactComponent as Bin } from "icons/bin.svg";
import { ReactComponent as Check } from "icons/check2.svg";
// Functions
import { getElementIndex } from "functions";

interface Props {
  listItem: ListItem;
  setList: React.Dispatch<React.SetStateAction<ListItem[]>>;
  key: string;
  list: ListItem[];
}

const ListElement = ({ list, listItem, setList }: Props) => {
  const { task } = listItem;

  function setCompleted() {
    const index = getElementIndex(list, listItem);
    if (index !== undefined) {
      let element = list[index];
      element.completed = true;
      const newList = list.slice();
      newList[index] = element;
      setList(newList);
    }
  }

  function remove() {
    const index = getElementIndex(list, listItem);
    if (index !== undefined) {
      list = list.filter((el) => el !== list[index]);
      setList(list);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        {!listItem.completed && (
          <div className={styles.priority} onClick={() => setCompleted()}>
            <Check />
          </div>
        )}
        <span className={styles.task}>{task}</span>
      </div>
      <div className={styles.functionsContainer}>
        <Pencil className={`${styles.functionIcon} ${styles.green}`} />
        <Bin
          className={`${styles.functionIcon} ${styles.red}`}
          onClick={() => remove()}
        />
      </div>
    </div>
  );
};

export default ListElement;
