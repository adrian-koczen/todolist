import React, { useState, useEffect } from "react";
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
// Interfaces
import { ListItem, Filters } from "interfaces";

const ToDoList = () => {
  const { list, setList } = useTaskContext();
  const { openModal } = useModalContext();
  const [filteredList, setFilteredList] = useState<ListItem[] | null>(null);
  const [filters, setFilters] = useState<Filters>({ visibility: -1 });

  useEffect(() => {
    // Visibility
    if (filters.visibility !== -1) {
      setFilteredList(list.filter((el) => el.priority === filters.visibility));
    } else {
      setFilteredList(null);
    }
  }, [filters, list]);

  return (
    <Box>
      <Title
        icon={<Icon color="yellow" icon={<Menu />} />}
        options={[
          <Option
            icon={
              <Filter
                onClick={() =>
                  openModal(
                    <TasksFilter filters={filters} setFilters={setFilters} />
                  )
                }
              />
            }
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
