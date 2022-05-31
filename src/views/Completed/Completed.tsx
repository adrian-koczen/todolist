import React, { useEffect, useState } from "react";
// Components
import Box from "components/Box/Box";
import Icon from "components/Icon/Icon";
import Title from "components/Title/Title";
import ListElement from "components/ListElement/ListElement";
import Option from "components/Option/Option";
//Views
import TasksFilter from "views/TasksFilter/TasksFilter";
// Icons
import { ReactComponent as Check } from "icons/check.svg";
import { ReactComponent as Filter } from "icons/filter.svg";
// Context
import { useTaskContext } from "TaskContext";
import { useModalContext } from "ModalContext";
// Interfaces
import { Filters, ListItem } from "interfaces";

const Completed = () => {
  const { list, setList } = useTaskContext();
  const { openModal } = useModalContext();
  const [filteredList, setFilteredList] = useState<ListItem[] | null>(null);
  const [filters, setFilters] = useState<Filters>({
    visibility: -1,
    searchText: null,
  });

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
        icon={<Icon icon={<Check />} color="green" />}
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
        COMPLETED
      </Title>
      {filteredList
        ? filteredList.map((item) => {
            if (item.completed) {
              return <ListElement key={item.id} listItem={item} />;
            } else {
              return null;
            }
          })
        : list &&
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
