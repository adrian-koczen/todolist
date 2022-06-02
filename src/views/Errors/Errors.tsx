import React from "react";
import styles from "./styles.module.scss";
// Icons
import { ReactComponent as Xcircle } from "icons/xCircle.svg";
// Interfaces
import { Error } from "interfaces";

interface Props {
  errors: Error[];
  removeError: (id: number) => void;
}

export const Errors = ({ errors, removeError }: Props) => {
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
