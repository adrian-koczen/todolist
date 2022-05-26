import React from "react";
import styles from "./styles.module.scss";
// Context
import { useErrorContext } from "ErrorsContext";
// Icons
import { ReactComponent as Xcircle } from "icons/xCircle.svg";

export const Errors = () => {
  const { errors, removeError } = useErrorContext();
  return (
    <div className={styles.container}>
      {errors.map((error, i) => {
        return (
          <div key={i} className={styles.error}>
            <span>{error.message}</span>
            <Xcircle
              className={styles.icon}
              onClick={() => removeError(error.id)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Errors;
