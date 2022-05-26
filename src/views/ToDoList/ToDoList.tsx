import React from "react";
// Components
import Box from "components/Box/Box";
import Title from "components/Title/Title";
import Icon from "components/Icon/Icon";
import ListElement from "components/ListElement/ListElement";
// Icons
import { ReactComponent as Menu } from "icons/menu.svg";
// Interfaces
import { ListItem } from "interfaces";
// Context
import { useStateContext } from "StateContext";

interface Props {
  list: ListItem[];
  setList: React.Dispatch<React.SetStateAction<ListItem[]>>;
}

const ToDoList = () => {
  const { list, setList } = useStateContext();

  return (
    <Box>
      <Title icon={<Icon color="yellow" icon={<Menu />} />}>TO-DO LIST</Title>
      {list &&
        list.map((item) => {
          if (!item.completed) {
            return (
              <ListElement
                key={item.id}
                listItem={item}
                setList={setList}
                list={list}
              />
            );
          } else {
            return null;
          }
        })}
    </Box>
  );
};

export default ToDoList;
