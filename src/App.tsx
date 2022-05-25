import React, { useState } from "react";
import styles from "styles/index.module.scss";
// Views
import AddItem from "views/AddItem/AddItem";
import ToDoList from "views/ToDoList/ToDoList";
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
        <AddItem setList={setList} />
        <ToDoList list={list} setList={setList} />
      </div>
    </div>
  );
}

export default App;
