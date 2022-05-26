import React, { useState } from "react";
import styles from "styles/index.module.scss";
// Views
import AddItem from "views/AddItem/AddItem";
import ToDoList from "views/ToDoList/ToDoList";
import Completed from "views/Completed/Completed";
// Interfaces
import { ListItem } from "interfaces";

function App() {
  const [list, setList] = useState<ListItem[]>([]);
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span>To-Do App</span>
      </header>
      <div className={styles.viewsWrapper}>
        <AddItem list={list} setList={setList} />
        <ToDoList list={list} setList={setList} />
        <Completed list={list} setList={setList} />
      </div>
      <footer />
    </div>
  );
}

export default App;
