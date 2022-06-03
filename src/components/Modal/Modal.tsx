import React, { useState } from "react";
import styles from "./styles.module.scss";

interface Props {
  children: React.ReactElement | React.ReactElement[];
  visible: Boolean;
  handleVisible: (state: Boolean) => void;
  closeAllModals: () => void;
}

const Modal = ({ children, visible, handleVisible, closeAllModals }: Props) => {
  if (!visible) return <></>;

  const closeModal = (e: any) => {
    if (e.target.className === styles.container) {
      closeAllModals();
      handleVisible(false);
    }
  };

  return (
    <div className={styles.container} onClick={(e) => closeModal(e)}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Modal;
