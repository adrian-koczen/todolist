import React from "react";
// Components
import Box from "components/Box/Box";
import Icon from "components/Icon/Icon";
import Title from "components/Title/Title";
import ListElement from "components/ListElement/ListElement";
// Icons
import { ReactComponent as Check } from "icons/check.svg";
// Context
import { useTaskContext } from "TaskContext";

const Completed = () => {
  const { list, setList } = useTaskContext();

  return (
    <Box>
      <Title icon={<Icon icon={<Check />} color="green" />}>COMPLETED</Title>
      {list &&
        list.map((item) => {
          if (item.completed) {
            return <ListElement key={item.id} listItem={item} />;
          } else {
            return null;
          }
        })}
    </Box>
  );
};

export default Completed;
