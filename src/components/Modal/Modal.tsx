import React, { useState } from "react";
import styles from "./styles.module.scss";

interface Props {
  children?: React.ReactElement<any>;
  visible: Boolean;
  handleVisivle: (state: Boolean) => void;
}

const Modal = ({ children, visible, handleVisivle }: Props) => {
  if (!visible) return <></>;

  const closeModal = (e: any) => {
    if (e.target.className === styles.container) {
      handleVisivle(false);
    }
  };

  return (
    <div className={styles.container} onClick={(e) => closeModal(e)}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Modal;
