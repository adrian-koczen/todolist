import React from "react";
import styles from "./styles.module.scss";
import { useFormik } from "formik";
// Icons
import { ReactComponent as Check } from "icons/check2.svg";
// Context
import { useModalContext } from "ModalContext";
import { useTaskContext } from "StateContext";

const initialValues = {
  visibility: 0,
};

const TasksFilter = () => {
  const { closeModal } = useModalContext();
  const { list, setFilteredList, filteredList } = useTaskContext();

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {},
  });

  function setVisibility(e: any) {
    const filteredByPriority = list.filter(
      (el) => el.priority === e.target.value
    );
    //setFilteredList(filteredByPriority);
    console.log(filteredByPriority);
    closeModal();
  }

  return (
    <div className={styles.container}>
      <span className={styles.title}>Adjustments</span>
      <form onSubmit={formik.handleSubmit}>
        <label>Visibility</label>
        <select
          id="visibility"
          value={formik.values.visibility}
          onChange={setVisibility}
        >
          <option value={0}></option>
          <option value={0}>Only high priority</option>
          <option value={1}>Only medium priority</option>
          <option value={2}>Only low priority</option>
        </select>
        <label>Save</label>
        <button type="submit">
          <Check />
        </button>
      </form>
    </div>
  );
};

export default TasksFilter;
