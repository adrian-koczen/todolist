import React from "react";
import styles from "./styles.module.scss";
import { useFormik } from "formik";
// Context
import { useModalContext } from "ModalContext";
// Interfaces
import { Filters } from "interfaces";

interface Props {
  tab: "todo" | "completed";
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

const TasksFilter = ({ filters, setFilters, tab }: Props) => {
  const { closeModal } = useModalContext();

  const initialValues = filters;

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log(values);
      setFilters({
        ...filters,
        visibility: Number(values.visibility),
        sort: values.sort,
      });
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
        <label>Sort by</label>
        <select
          id="sort"
          value={formik.values.sort}
          onChange={formik.handleChange}
        >
          <option value={"priority"}>Priority</option>
          <option value={"task"}>Task name</option>
          <option value={"createDate"}>Create date</option>
          {tab === "completed" && <option value={"endDate"}>End date</option>}
        </select>
        <label>Save</label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default TasksFilter;
