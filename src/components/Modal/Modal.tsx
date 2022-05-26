import React from "react";
import styles from "./styles.module.scss";
// Contexts
import { useModalContext } from "ModalContext";

interface Props {
  children?: React.ReactNode;
}

const Modal = ({ children }: Props) => {
  const { closeModal } = useModalContext();

  function close(e: any) {
    if (e.target.className === styles.container) {
      closeModal();
    }
  }

  return (
    <div className={styles.container} onClick={(e) => close(e)}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Modal;
