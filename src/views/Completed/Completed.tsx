import React, { useEffect, useState } from "react";
// Components
import Box from "components/Box/Box";
import Icon from "components/Icon/Icon";
import Title from "components/Title/Title";
import ListElement from "components/ListElement/ListElement";
import Option from "components/Option/Option";
import Modal from "components/Modal/Modal";
//Views
import TasksFilter from "views/TasksFilter/TasksFilter";
import Search from "views/Search/Search";
// Icons
import { ReactComponent as Check } from "icons/check.svg";
import { ReactComponent as Filter } from "icons/filter.svg";
import { ReactComponent as SearchIcon } from "icons/search.svg";
// Context
import { useTaskContext } from "contexts/TaskContext";
// Interfaces
import { Filters, ListItem, SortOption, Visibility } from "interfaces";
// Functions
import {
  sortByTask,
  higherToLowerPriority,
  sortByStartDate,
  sortByEndDate,
  convertVisibility,
} from "functions";

const Completed = () => {
  const { list } = useTaskContext();
  const [filteredList, setFilteredList] = useState<ListItem[] | null>(null);
  const [filters, setFilters] = useState<Filters>({
    visibility: Visibility.all,
    sort: SortOption.priority,
    searchText: null,
  });

  // Modal states
  const [isModal, setIsModal] = useState<Boolean>(false);
  const [isSearchModal, setIsSearchModal] = useState<Boolean>(false);
  const [isFilterModal, setIsFilterModal] = useState<Boolean>(false);

  // Handle modals
  const closeAllModals = () => {
    setIsSearchModal(false);
    setIsFilterModal(false);
  };
  const handleModalVisible = (state: Boolean) => {
    setIsModal(state);
  };
  const handleIsSearchModal = (state: Boolean) => {
    handleModalVisible(state);
    setIsSearchModal(state);
  };
  const handleIsFilterModal = (state: Boolean) => {
    handleModalVisible(state);
    setIsFilterModal(state);
  };

  function updateFilters(filters: Filters) {
    setFilters(filters);
  }

  useEffect(() => {
    // Priority sort
    if (filters.sort === SortOption.priority) {
      setFilteredList(list.slice().sort(higherToLowerPriority));
    }

    // Task name sort
    if (filters.sort === SortOption.task) {
      setFilteredList(list.slice().sort(sortByTask));
    }

    // Create date sort
    if (filters.sort === SortOption.createDate) {
      setFilteredList(list.slice().sort(sortByStartDate));
    }

    // End date sort
    if (filters.sort === "endDate") {
      setFilteredList(list.slice().sort(sortByEndDate));
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
      <Modal
        visible={isModal}
        handleVisible={handleModalVisible}
        onClose={closeAllModals}
      >
        {isSearchModal && (
          <Search
            filters={filters}
            updateFilters={updateFilters}
            handleVisible={handleIsSearchModal}
          />
        )}
        {isFilterModal && (
          <TasksFilter
            filters={filters}
            updateFilters={updateFilters}
            tab="todo"
            handleVisible={handleIsFilterModal}
          />
        )}
      </Modal>
      <Title
        icon={<Icon icon={<Check />} color="green" />}
        options={[
          <Option
            icon={<SearchIcon onClick={() => handleIsSearchModal(true)} />}
          />,
          <Option
            icon={<Filter onClick={() => handleIsFilterModal(true)} />}
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
