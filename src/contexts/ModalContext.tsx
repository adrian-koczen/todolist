import React, { createContext, useContext, useState } from "react";
// Components
import Modal from "components/Modal/Modal";

interface Props {
  children: React.ReactNode;
}

interface ModalState {
  openModal: (component: React.ReactNode) => void;
  closeModal: () => void;
}

const initialState = {
  openModal: (component: React.ReactNode) => {},
  closeModal: () => {},
};

const Context = createContext<ModalState>(initialState);

const ModalContext = ({ children }: Props) => {
  const [active, setAtive] = useState<Boolean>(false);
  const [content, setContent] = useState<React.ReactNode>(null);

  function openModal(component: React.ReactNode) {
    if (!active) {
      setAtive(true);
      setContent(component);
    }
  }

  function closeModal() {
    if (active) {
      setAtive(false);
    }
  }

  return (
    <Context.Provider value={{ openModal, closeModal }}>
      {children}
      {active && <Modal>{content}</Modal>}
    </Context.Provider>
  );
};

export const useModalContext = () => useContext(Context);

export default ModalContext;
