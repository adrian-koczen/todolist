import React, { useState } from "react";
import styles from "./styles.module.scss";

interface Props {
  children: React.ReactElement | React.ReactElement[];
  visible: Boolean;
  handleVisible: (state: Boolean) => void;
  onClose: () => void;
}

const Modal = ({ children, visible, handleVisible, onClose }: Props) => {
  if (!visible) return <></>;

  const closeModal = (e: any) => {
    if (e.target.className === styles.container) {
      onClose();
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
