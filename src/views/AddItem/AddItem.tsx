import React from "react";
import styles from "./styles.module.scss";
import { useFormik } from "formik";
// Icons
import { ReactComponent as List } from "icons/list.svg";
// Components
import Box from "components/Box/Box";
import Icon from "components/Icon/Icon";
import Title from "components/Title/Title";

interface Item {
  item: string;
}

const AddItem = () => {
  const initialValues: Item = {
    item: "",
  };
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values: Item) => {
      console.log(values);
    },
  });
  return (
    <Box>
      <Title icon={<Icon color="blue" icon={<List />} />}>ADD ITEM</Title>
      <form className={styles.form}>
        <div className={styles.formElement}>
          <label>What do you want to do?</label>
          <input
            id="item"
            placeholder="I want to do something good"
            value={formik.values.item}
            onChange={formik.handleChange}
          ></input>
        </div>
        <div className={styles.addButton}>+</div>
      </form>
    </Box>
  );
};

export default AddItem;
