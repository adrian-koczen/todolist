import React, { createContext, useContext, useEffect, useState } from "react";
// Interfaces
import { ListItem } from "interfaces";

interface Props {
  children: React.ReactNode;
}

interface State {
  list: ListItem[];
  filteredList: ListItem[];
  setList: React.Dispatch<React.SetStateAction<ListItem[]>>;
  setFilteredList: React.Dispatch<React.SetStateAction<ListItem[]>>;
}

const initialState = {
  list: [],
  filteredList: [],
  setFilteredList: () => {},
  setList: () => {},
};

const Context = createContext<State>(initialState);

const TaskContext = ({ children }: Props) => {
  const [list, setList] = useState<ListItem[]>([]);
  const [filteredList, setFilteredList] = useState<ListItem[]>([]);

  return (
    <Context.Provider value={{ list, setList, filteredList, setFilteredList }}>
      {children}
    </Context.Provider>
  );
};

export const useTaskContext = () => useContext(Context);

export default TaskContext;
