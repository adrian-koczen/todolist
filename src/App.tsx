import React from "react";
import styles from "styles/index.module.scss";
// Views
import AddItem from "views/AddItem/AddItem";
import ToDoList from "views/ToDoList/ToDoList";
import Completed from "views/Completed/Completed";
// Context
import TaskContext from "contexts/TaskContext";

function App() {
  return (
    <div className={styles.container}>
      <header>
        <span>To-Do App</span>
      </header>
      <TaskContext>
        <div className={styles.viewsWrapper}>
          <AddItem />
          <ToDoList />
          <Completed />
        </div>
      </TaskContext>
      <footer />
    </div>
  );
}

export default App;
