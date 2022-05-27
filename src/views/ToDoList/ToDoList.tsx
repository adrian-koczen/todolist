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
import { useTaskContext } from "StateContext";
import { useModalContext } from "ModalContext";

const ToDoList = () => {
  const { list, setList, filteredList } = useTaskContext();
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
      {filteredList.length ? (
        <div>Filtered list</div>
      ) : (
        list &&
        list.map((item) => {
          if (!item.completed) {
            return <ListElement key={item.id} listItem={item} />;
          } else {
            return null;
          }
        })
      )}
    </Box>
  );
};

export default ToDoList;
