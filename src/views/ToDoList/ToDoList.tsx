import React from "react";
// Components
import Box from "components/Box/Box";
import Title from "components/Title/Title";
import Icon from "components/Icon/Icon";
import ListElement from "components/ListElement/ListElement";
import Option from "components/Option/Option";
// Views
import TasksFilter from "views/TasksFilter/TasksFilter";
// Icons
import { ReactComponent as Menu } from "icons/menu.svg";
import { ReactComponent as Filter } from "icons/filter.svg";
// Context
import { useTaskContext } from "TaskContext";
import { useModalContext } from "ModalContext";
import { useFilterContext } from "FilterContext";

const ToDoList = () => {
  const { list, setList } = useTaskContext();
  const { filteredList, filters } = useFilterContext();
  const { openModal } = useModalContext();

  return (
    <Box>
      <Title
        icon={<Icon color="yellow" icon={<Menu />} />}
        options={[
          <Option
            icon={<Filter onClick={() => openModal(<TasksFilter />)} />}
          />,
        ]}
      >
        TO-DO LIST
      </Title>
      {filteredList
        ? filteredList.map((item) => {
            if (!item.completed) {
              return <ListElement key={item.id} listItem={item} />;
            } else {
              return null;
            }
          })
        : list &&
          list.map((item) => {
            if (!item.completed) {
              return <ListElement key={item.id} listItem={item} />;
            } else {
              return null;
            }
          })}
    </Box>
  );
};

export default ToDoList;
