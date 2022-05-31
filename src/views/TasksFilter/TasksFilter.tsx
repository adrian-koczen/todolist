import React from "react";
import styles from "./styles.module.scss";
import { useFormik } from "formik";
// Icons
import { ReactComponent as Check } from "icons/check2.svg";
// Context
import { useModalContext } from "ModalContext";
// Interfaces
import { Filters } from "interfaces";

interface Props {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

const TasksFilter = ({ filters, setFilters }: Props) => {
  const { closeModal } = useModalContext();
  //const { setFilters, filters } = useFilterContext();

  const initialValues = filters;

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      //setFilters({ visibility: Number(values.visibility), searchText: "null" });
      setFilters({ ...filters, visibility: Number(values.visibility) });
      closeModal();
    },
  });

  return (
    <div className={styles.container}>
      <span className={styles.title}>Adjustments</span>
      <form onSubmit={formik.handleSubmit}>
        <label>Visibility</label>
        <select
          id="visibility"
          value={formik.values.visibility}
          onChange={formik.handleChange}
        >
          <option value={-1}>All</option>
          <option value={0}>Only high priority</option>
          <option value={1}>Only medium priority</option>
          <option value={2}>Only low priority</option>
        </select>
        <label>Save</label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default TasksFilter;
