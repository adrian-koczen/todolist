import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
// Icons
import { ReactComponent as List } from "icons/list.svg";
// Components
import Box from "components/Box/Box";
import Icon from "components/Icon/Icon";
import Title from "components/Title/Title";
// Interfaces
import { FormItem, ListItem, Priority } from "./interfaces";

const initialValues: FormItem = {
  task: "",
  priority: Priority.low,
};

const ItemValidationSchema = Yup.object().shape({
  task: Yup.string()
    .min(10, "Wprowadź więcej znaków")
    .max(60, "Za duża liczba znaków")
    .required(),
});

const AddItem = () => {
  const [list, setList] = useState<ListItem[]>([]);

  const formik = useFormik<FormItem>({
    initialValues: initialValues,
    validationSchema: ItemValidationSchema,
    onSubmit: (values) => {
      addItemToList({
        task: values.task,
        priority: values.priority,
        createTime: new Date(),
      });
    },
  });

  function addItemToList(listItem: Omit<ListItem, "id">) {
    setList([...list, { id: uuidv4(), ...listItem }]);
  }

  useEffect(() => {
    console.log(list);
  }, [list]);

  return (
    <Box>
      <Title icon={<Icon color="blue" icon={<List />} />}>ADD ITEM</Title>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <div className={styles.formElement}>
          <label>What do you want to do?</label>
          <input
            id="task"
            type="text"
            placeholder="I want to do something good"
            value={formik.values.task}
            onChange={formik.handleChange}
          ></input>
          <label>Priority</label>
          <select
            id="priority"
            value={formik.values.priority}
            onChange={formik.handleChange}
          >
            <option value={Priority.low}>Low</option>
            <option value={Priority.medium}>Medium</option>
            <option value={Priority.high}>High</option>
          </select>
        </div>
        <button type="submit" className={styles.addButton}>
          +
        </button>
      </form>
    </Box>
  );
};

export default AddItem;
