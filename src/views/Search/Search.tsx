import React from "react";
import styles from "./styles.module.scss";
import { useFormik } from "formik";
// Interfaces
import { Filters } from "interfaces";
import { useModalContext } from "ModalContext";
// Icons
import { ReactComponent as Remove } from "icons/remove.svg";

interface Props {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

const Search = ({ filters, setFilters }: Props) => {
  const { closeModal } = useModalContext();

  const initialValues = {
    searchText: filters.searchText ? filters.searchText : "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      setFilters({ ...filters, searchText: values.searchText });
      closeModal();
    },
  });

  function clearSearchTerm() {
    formik.setFieldValue("searchText", "");
    setFilters({ ...filters, searchText: null });
    closeModal();
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>Search</div>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.searchContainer}>
          <div className={styles.searchInput}>
            <label>What do you want to find?</label>
            <input
              id="searchText"
              onChange={formik.handleChange}
              value={formik.values.searchText}
            ></input>
          </div>
          <Remove
            className={styles.removeSearchText}
            onClick={() => clearSearchTerm()}
          />
        </div>
        <label>Save</label>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
