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

  useEffect(() => {
    const data = localStorage.getItem("data");
    if (data !== null) {
      setList(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    if (list.length > 0) {
      localStorage.setItem("data", JSON.stringify(list));
    }
  }, [list]);

  return (
    <Context.Provider value={{ list, setList }}>{children}</Context.Provider>
  );
};

export const useTaskContext = () => useContext(Context);

export default TaskContext;
