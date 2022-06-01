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
// Functions
import {
  sortByTask,
  higherToLowerPriority,
  sortByStartDate,
  sortByEndDate,
} from "functions";

const Completed = () => {
  const { list, setList } = useTaskContext();
  const { openModal } = useModalContext();
  const [filteredList, setFilteredList] = useState<ListItem[] | null>(null);
  const [filters, setFilters] = useState<Filters>({
    visibility: -1,
    sort: "priority",
    searchText: null,
  });

  useEffect(() => {
    // Priority sort
    if (filters.sort === "priority") {
      setFilteredList(list.slice().sort(higherToLowerPriority));
    }

    // Task name sort
    if (filters.sort === "task") {
      setFilteredList(list.slice().sort(sortByTask));
    }

    // Create date sort
    if (filters.sort === "createDate") {
      setFilteredList(list.slice().sort(sortByStartDate));
    }

    // End date sort
    if (filters.sort === "endDate") {
      setFilteredList(list.slice().sort(sortByEndDate));
    }

    // Visibility
    if (filters.visibility !== -1) {
      setFilteredList(list.filter((el) => el.priority === filters.visibility));
    }

    // Search Text
    if (filters.searchText !== null) {
      let searchTerm = filters.searchText;
      setFilteredList(
        list.filter((el) => el.task.toLowerCase().includes(searchTerm))
      );
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
                    <TasksFilter
                      filters={filters}
                      setFilters={setFilters}
                      tab={"completed"}
                    />
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
