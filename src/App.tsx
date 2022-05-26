import React from "react";
import styles from "styles/index.module.scss";
// Views
import AddItem from "views/AddItem/AddItem";
import ToDoList from "views/ToDoList/ToDoList";
import Completed from "views/Completed/Completed";
// Context
import StateContextProvider from "StateContext";
import ErrorsContext from "ErrorsContext";
import ModalContext from "ModalContext";

function App() {
  return (
    <div className={styles.container}>
      <ModalContext>
        <header>
          <span>To-Do App</span>
        </header>
        <ErrorsContext>
          <div className={styles.viewsWrapper}>
            <StateContextProvider>
              <AddItem />
              <ToDoList />
              <Completed />
            </StateContextProvider>
          </div>
        </ErrorsContext>
      </ModalContext>
      <footer />
    </div>
  );
}

export default App;
