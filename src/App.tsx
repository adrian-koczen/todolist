import React from "react";
import styles from "styles/index.module.scss";
// Views
import AddItem from "views/AddItem/AddItem";
import ToDoList from "views/ToDoList/ToDoList";
import Completed from "views/Completed/Completed";
// Components
import Errors from "components/Errors/Errors";
// Context
import StateContextProvider from "StateContext";
import ErrorsContext from "ErrorsContext";

function App() {
  return (
    <div className={styles.container}>
      <header>
        <span>To-Do App</span>
      </header>
      <ErrorsContext>
        <Errors />
        <div className={styles.viewsWrapper}>
          <StateContextProvider>
            <AddItem />
            <ToDoList />
            <Completed />
          </StateContextProvider>
        </div>
      </ErrorsContext>
      <footer />
    </div>
  );
}

export default App;
