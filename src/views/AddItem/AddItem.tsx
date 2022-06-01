import React from "react";
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
import { FormItem, ListItem, Priority } from "interfaces";
// Functions
import {
  higherToLowerPriority,
  convertPriority,
  isTaskInArray,
} from "functions";
// Context
import { useTaskContext } from "TaskContext";
import { useErrorContext } from "ErrorsContext";

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
  const { list, setList } = useTaskContext();
  const { addError } = useErrorContext();

  const formik = useFormik<FormItem>({
    initialValues: initialValues,
    validationSchema: ItemValidationSchema,
    onSubmit: (values) => {
      let priority = convertPriority(values.priority);
      addItemToList({
        task: values.task,
        priority: priority,
        createDate: new Date(),
        completed: false,
      });
      formik.setFieldValue("task", "");
    },
  });

  function addItemToList(listItem: Omit<ListItem, "id">) {
    if (!isTaskInArray(list, listItem)) {
      setList((prev) =>
        [...prev, { id: uuidv4(), ...listItem }].sort(higherToLowerPriority)
      );
    } else {
      addError("Element is already in array.");
    }
  }

  return (
    <Box>
      <Title icon={<Icon color="blue" icon={<List />} />}>ADD ITEM</Title>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <div className={styles.border}></div>
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
        <div className={styles.buttonWrapper}>
          <button type="submit" className={styles.addButton}>
            +
          </button>
        </div>
      </form>
    </Box>
  );
};

export default AddItem;
