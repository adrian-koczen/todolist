import React, { useState } from "react";
import styles from "styles/index.module.scss";
// Views
import AddItem from "views/AddItem/AddItem";
import { useCounter } from "views/AddItem/Counter";

function App() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span>To-Do App</span>
      </header>
      <div className={styles.viewsWrapper}>
        <AddItem />
      </div>
    </div>
  );
}

export default App;
