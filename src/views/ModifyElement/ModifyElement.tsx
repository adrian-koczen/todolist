import React from "react";
import styles from "./styles.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
// Interfaces
import { ListItem, Priority } from "interfaces";
// Icons
import { ReactComponent as Check } from "icons/check2.svg";
// Functions
import { compare, convertPriority, convertPriorityBack } from "functions";
// Context
import { useModalContext } from "ModalContext";
import { useTaskContext } from "StateContext";

interface Props {
  id: string;
}

interface Element {
  task: string;
  priority: Priority;
}

const ValidationSchema = Yup.object().shape({
  task: Yup.string()
    .min(10, "Wprowadź więcej znaków")
    .max(60, "Za duża liczba znaków")
    .required(),
});

const ModifyElement = ({ id }: Props) => {
  const { list, setList } = useTaskContext();
  const { closeModal } = useModalContext();

  function getElement(id: string) {
    const element = list.find((el) => el.id === id);
    if (element !== undefined) {
      return {
        task: element.task,
        priority: convertPriorityBack(element.priority),
      };
    } else {
      return {
        task: "Error",
        priority: Priority.low,
      };
    }
  }

  function modify(modifiedValues: Element) {
    const { priority, task } = modifiedValues;
    const element = list.find((el) => el.id === id);
    if (element) {
      const index = list.indexOf(element);
      let newElement = list[index];
      newElement.task = task;
      newElement.priority = convertPriority(priority);
      list[index] = newElement;
      let newList = list.sort(compare);
      setList(newList);
      closeModal();
    }
  }

  const formik = useFormik({
    initialValues: getElement(id),
    validationSchema: ValidationSchema,
    onSubmit: (values) => {
      modify(values);
    },
  });

  return (
    <div className={styles.container}>
      <span className={styles.task}>Task</span>
      <form onSubmit={formik.handleSubmit}>
        <label>Change task</label>
        <input
          id="task"
          value={formik.values.task}
          onChange={formik.handleChange}
        ></input>
        <label>Change priority</label>
        <select
          id="priority"
          value={formik.values.priority}
          onChange={formik.handleChange}
        >
          <option value={Priority.low}>Low</option>
          <option value={Priority.medium}>Medium</option>
          <option value={Priority.high}>High</option>
        </select>
        <label>Save</label>
        <button type="submit">
          <Check />
        </button>
      </form>
    </div>
  );
};

export default ModifyElement;
