import React, { useState } from "react";
import styles from "styles/index.module.scss";
// Views
import AddItem from "views/AddItem/AddItem";
import ToDoList from "views/ToDoList/ToDoList";
import Completed from "views/Completed/Completed";
// Interfaces
import { ListItem } from "interfaces";
// Context
import StateContextProvider from "StateContext";

function App() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span>To-Do App</span>
      </header>
      <div className={styles.viewsWrapper}>
        <StateContextProvider>
          <AddItem />
          <ToDoList />
          <Completed />
        </StateContextProvider>
      </div>
      <footer />
    </div>
  );
}

export default App;
