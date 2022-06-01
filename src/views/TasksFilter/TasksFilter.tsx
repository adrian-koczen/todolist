import React from "react";
import styles from "./styles.module.scss";
import { useFormik } from "formik";
// Context
import { useModalContext } from "ModalContext";
// Interfaces
import { Filters, SortOption, Visibility } from "interfaces";

interface Props {
  tab: "todo" | "completed";
  filters: Filters;
  updateFilters: (filters: Filters) => void;
}

const TasksFilter = ({ filters, updateFilters, tab }: Props) => {
  const { closeModal } = useModalContext();

  const initialValues = filters;

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      updateFilters({
        ...filters,
        visibility: values.visibility,
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
          <option value={Visibility.all}>All</option>
          <option value={Visibility.high}>Only high priority</option>
          <option value={Visibility.medium}>Only medium priority</option>
          <option value={Visibility.low}>Only low priority</option>
        </select>
        <label>Sort by</label>
        <select
          id="sort"
          value={formik.values.sort}
          onChange={formik.handleChange}
        >
          <option value={SortOption.priority}>Priority</option>
          <option value={SortOption.task}>Task name</option>
          <option value={SortOption.createDate}>Create date</option>
          {tab === "completed" && (
            <option value={SortOption.endDate}>End date</option>
          )}
        </select>
        <label>Save</label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default TasksFilter;
