import React, { useContext, createContext, useState, useEffect } from "react";
// Interfaces
import { ListItem } from "interfaces";
// Context
import { useTaskContext } from "TaskContext";

interface Props {
  children: React.ReactNode;
}

interface Filters {
  visibility: number;
}

interface Context {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  filteredList: ListItem[] | null;
}

const initialValues = {
  filters: { visibility: -1 },
  setFilters: () => {},
  filteredList: null,
};

const Context = createContext<Context>(initialValues);

const FilterContext = ({ children }: Props) => {
  const { list } = useTaskContext();
  const [filters, setFilters] = useState<Filters>({ visibility: -1 });
  const [filteredList, setFilteredList] = useState<ListItem[] | null>(null);

  useEffect(() => {
    // Visibility
    if (filters.visibility !== -1) {
      setFilteredList(list.filter((el) => el.priority === filters.visibility));
    } else {
      setFilteredList(null);
    }
  }, [filters, list]);

  return (
    <Context.Provider value={{ filters, setFilters, filteredList }}>
      {children}
    </Context.Provider>
  );
};

export const useFilterContext = () => useContext(Context);

export default FilterContext;
