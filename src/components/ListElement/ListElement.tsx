import React, { useState } from "react";
import styles from "./styles.module.scss";
// Interfaces
import { ListItem } from "interfaces";
// Icons
import { ReactComponent as Pencil } from "icons/pencil.svg";
import { ReactComponent as Bin } from "icons/bin.svg";
import { ReactComponent as Check } from "icons/check2.svg";
import { ReactComponent as Menu } from "icons/menu.svg";
// Functions
import { showPriority } from "functions";
// Contexts
import { useTaskContext } from "contexts/TaskContext";
// Components
import Modal from "components/Modal/Modal";
import ModifyElement from "views/ModifyElement/ModifyTask";
import FullViewTask from "views/FullViewTask/FullViewTask";

interface Props {
  listItem: ListItem;
}

const ListElement = ({ listItem }: Props) => {
  let { list, updateList } = useTaskContext();
  const { task, completed, priority } = listItem;

  // Modal states
  const [isModifyElementModal, setIsModifyElementModal] =
    useState<Boolean>(false);
  const [isFullViewElementModal, setIsFullViewElementModal] =
    useState<Boolean>(false);

  // Handle modals
  const handleModifyElementModal = (state: Boolean) => {
    setIsModifyElementModal(state);
  };
  const handleFullViewElementModal = (state: Boolean) => {
    setIsFullViewElementModal(state);
  };

  function setCompleted() {
    const index = list.indexOf(listItem);
    if (index !== undefined) {
      let element = list[index];
      element.completed = true;
      element.endDate = new Date();
      const newList = list.slice();
      newList[index] = element;
      updateList(newList);
    }
  }

  function remove() {
    const index = list.indexOf(listItem);
    if (index !== undefined) {
      list = list.filter((el) => el !== list[index]);
      updateList(list);
    }
  }

  function setNotCompleted() {
    const index = list.indexOf(listItem);
    let tempArr = list.slice();
    if (index !== undefined) {
      tempArr[index].completed = false;
      delete tempArr[index].endDate;
      updateList(tempArr);
    }
  }

  return (
    <div className={styles.container}>
      <Modal
        visible={isModifyElementModal}
        handleVisivle={handleModifyElementModal}
      >
        <ModifyElement
          id={listItem.id}
          handleVisivle={handleModifyElementModal}
        />
      </Modal>
      <Modal
        visible={isFullViewElementModal}
        handleVisivle={handleFullViewElementModal}
      >
        <FullViewTask>{task}</FullViewTask>
      </Modal>
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
        <span
          onClick={() => handleFullViewElementModal(true)}
          className={styles.task}
        >
          {task}
        </span>
      </div>
      <div className={styles.functionsContainer}>
        {!completed && (
          <Pencil
            className={`${styles.functionIcon} ${styles.green}`}
            onClick={() => handleModifyElementModal(true)}
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
