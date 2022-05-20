import React from "react";
import styles from "styles/index.module.scss";
// Views
import AddItem from "views/AddItem/AddItem";

function App() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span>To-Do App</span>
      </header>
      <AddItem />
    </div>
  );
}

export default App;
