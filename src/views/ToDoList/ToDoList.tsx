import React from "react";
// Components
import Box from "components/Box/Box";
import Title from "components/Title/Title";
import Icon from "components/Icon/Icon";
// Icons
import { ReactComponent as List } from "icons/list.svg";
// Interfaces
import { ListItem } from "interfaces";
import ListElement from "components/ListElement/ListElement";

interface Props {
  list: ListItem[];
  setList: React.Dispatch<React.SetStateAction<ListItem[]>>;
}

const ToDoList = ({ list, setList }: Props) => {
  return (
    <Box>
      <Title icon={<Icon color="yellow" icon={<List />} />}>TO-DO LIST</Title>
      {list &&
        list.map((item) => {
          return <ListElement key={item.id} listItem={item} />;
        })}
    </Box>
  );
};

export default ToDoList;
