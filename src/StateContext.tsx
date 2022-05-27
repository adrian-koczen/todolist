import React, { createContext, useContext, useEffect, useState } from "react";
// Interfaces
import { ListItem } from "interfaces";

interface Props {
  children: React.ReactNode;
}

interface State {
  list: ListItem[];
  setList: React.Dispatch<React.SetStateAction<ListItem[]>>;
}

const initialState = {
  list: [],
  setList: () => {},
};

const Context = createContext<State>(initialState);

const TaskContext = ({ children }: Props) => {
  const [list, setList] = useState<ListItem[]>([]);

  return (
    <Context.Provider value={{ list, setList }}>{children}</Context.Provider>
  );
};

export const useTaskContext = () => useContext(Context);

export default TaskContext;
