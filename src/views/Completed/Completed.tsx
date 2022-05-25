import React from "react";
import styles from "./styles.module.scss";
// Components
import Box from "components/Box/Box";
import Icon from "components/Icon/Icon";
import Title from "components/Title/Title";
// Icons
import { ReactComponent as Check } from "icons/check.svg";

const Completed = () => {
  return (
    <Box>
      <Title icon={<Icon icon={<Check />} color="green" />}>COMPLETED</Title>
    </Box>
  );
};

export default Completed;
