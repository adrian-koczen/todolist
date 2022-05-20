import React from "react";
import styles from "./styles.module.scss";
// Components
import Box from "components/Box/Box";
import Title from "components/Title/Title";
import Icon from "components/Icon/Icon";
// Icons
import { ReactComponent as List } from "icons/list.svg";

const ToDoList = () => {
  return (
    <Box>
      <Title icon={<Icon color="yellow" icon={<List />} />}>TO-DO LIST</Title>
    </Box>
  );
};

export default ToDoList;
