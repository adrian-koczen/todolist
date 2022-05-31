import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
// Interfaces
import { ListItem } from "interfaces";
// Icons
import { ReactComponent as Pencil } from "icons/pencil.svg";
import { ReactComponent as Bin } from "icons/bin.svg";
import { ReactComponent as Check } from "icons/check2.svg";
import { ReactComponent as Menu } from "icons/menu.svg";
// Functions
import { getElementIndex, showPriority } from "functions";
// Views
import ModifyElement from "views/ModifyElement/ModifyElement";
// Contexts
import { useTaskContext } from "TaskContext";
import { useModalContext } from "ModalContext";

interface Props {
  listItem: ListItem;
}

const ListElement = ({ listItem }: Props) => {
  let { list, setList } = useTaskContext();
  const { openModal } = useModalContext();
  const { task, completed, priority } = listItem;

  function setCompleted() {
    const index = getElementIndex(list, listItem);
    if (index !== undefined) {
      let element = list[index];
      element.completed = true;
      element.endDate = new Date();
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

  function setNotCompleted() {
    const index = getElementIndex(list, listItem);
    let tempArr = list.slice();
    if (index !== undefined) {
      tempArr[index].completed = false;
      delete tempArr[index].endDate;
      setList(tempArr);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        {!completed ? (
          <div className={styles.completeButton} onClick={() => setCompleted()}>
            <Check />
          </div>
        ) : (
          <div
            className={styles.notCompletedButton}
            onClick={() => setNotCompleted()}
          >
            <Menu />
          </div>
        )}
        <span
          className={`${styles.priority} ${
            priority === 0
              ? styles.priorityHigh
              : priority === 1
              ? styles.priorityMedium
              : priority === 2
              ? styles.priorityLow
              : null
          }`}
        >
          {showPriority(priority)}
        </span>
        <span className={styles.task}>{task}</span>
      </div>
      <div className={styles.functionsContainer}>
        {!completed && (
          <Pencil
            className={`${styles.functionIcon} ${styles.green}`}
            onClick={() => openModal(<ModifyElement id={listItem.id} />)}
          />
        )}
        <Bin
          className={`${styles.functionIcon} ${styles.red}`}
          onClick={() => remove()}
        />
      </div>
    </div>
  );
};

export default ListElement;
