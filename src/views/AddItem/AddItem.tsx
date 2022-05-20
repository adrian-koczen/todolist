import React from "react";
import styles from "./styles.module.scss";
// Icons
import { ReactComponent as List } from "icons/list.svg";
// Components
import Box from "components/Box/Box";
import Icon from "components/Icon/Icon";
import Title from "components/Title/Title";

const AddItem = () => {
  return (
    <Box>
      <Title icon={<Icon color="blue" icon={<List />} />}>ADD ITEM</Title>
    </Box>
  );
};

export default AddItem;
