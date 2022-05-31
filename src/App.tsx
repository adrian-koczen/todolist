import React from "react";
import styles from "styles/index.module.scss";
// Views
import AddItem from "views/AddItem/AddItem";
import ToDoList from "views/ToDoList/ToDoList";
import Completed from "views/Completed/Completed";
// Context
import TaskContext from "TaskContext";
import ErrorsContext from "ErrorsContext";
import ModalContext from "ModalContext";
import FilterContext from "FilterContext";

function App() {
  return (
    <div className={styles.container}>
      <header>
        <span>To-Do App</span>
      </header>
      <ErrorsContext>
        <TaskContext>
          <FilterContext>
            <ModalContext>
              <div className={styles.viewsWrapper}>
                <AddItem />
                <ToDoList />
                <Completed />
              </div>
            </ModalContext>
          </FilterContext>
        </TaskContext>
      </ErrorsContext>
      <footer />
    </div>
  );
}

export default App;
