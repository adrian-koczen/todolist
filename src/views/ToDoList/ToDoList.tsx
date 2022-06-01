import React, { useState, useEffect } from "react";
// Components
import Box from "components/Box/Box";
import Title from "components/Title/Title";
import Icon from "components/Icon/Icon";
import ListElement from "components/ListElement/ListElement";
import Option from "components/Option/Option";
// Views
import TasksFilter from "views/TasksFilter/TasksFilter";
import Search from "views/Search/Search";
// Icons
import { ReactComponent as Menu } from "icons/menu.svg";
import { ReactComponent as Filter } from "icons/filter.svg";
import { ReactComponent as SearchIcon } from "icons/search.svg";
// Context
import { useTaskContext } from "TaskContext";
import { useModalContext } from "ModalContext";
// Interfaces
import { ListItem, Filters, SortOption, Visibility } from "interfaces";
// Functions
import {
  sortByTask,
  higherToLowerPriority,
  sortByStartDate,
  convertVisibility,
} from "functions";

const ToDoList = () => {
  const { list, setList } = useTaskContext();
  const { openModal } = useModalContext();
  const [filteredList, setFilteredList] = useState<ListItem[]>([]);
  const [filters, setFilters] = useState<Filters>({
    visibility: Visibility.all,
    sort: SortOption.priority,
    searchText: null,
  });

  function updateFilters(filters: Filters) {
    setFilters(filters);
  }

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

    // Visibility
    if (filters.visibility !== Visibility.all) {
      setFilteredList(
        list.filter(
          (el) => el.priority === convertVisibility(filters.visibility)
        )
      );
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
        icon={<Icon color="yellow" icon={<Menu />} />}
        options={[
          <Option
            icon={
              <SearchIcon
                onClick={() =>
                  openModal(
                    <Search filters={filters} setFilters={setFilters} />
                  )
                }
              />
            }
          />,
          <Option
            icon={
              <Filter
                onClick={() =>
                  openModal(
                    <TasksFilter
                      filters={filters}
                      setFilters={setFilters}
                      tab={"todo"}
                    />
                  )
                }
              />
            }
          />,
        ]}
      >
        TO-DO LIST
      </Title>
      {filteredList.length > 0
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
