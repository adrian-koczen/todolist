import React, { createContext, useContext, useEffect, useState } from "react";
// Components
import Errors from "views/Errors/Errors";
// Interfaces
import { ListItem, Error } from "interfaces";

interface Props {
  children: React.ReactNode;
}

interface Context {
  list: ListItem[];
  updateList: (list: ListItem[]) => void;
  addError: (message: string) => void;
}

const initialState = {
  list: [],
  updateList: () => {},
  addError: () => {},
};

const Context = createContext<Context>(initialState);

const TaskContext = ({ children }: Props) => {
  const [list, setList] = useState<ListItem[]>([]);
  const [errors, setErrors] = useState<Error[]>([]);

  function updateList(list: ListItem[]) {
    return setList(list);
  }

  function addError(message: string) {
    const id = errors.length + 1;
    const error = { id, message };
    setErrors((prev) => [...prev, error]);
  }

  function removeError(id: number) {
    const newArray = errors.filter((el) => el.id !== id);
    setErrors(newArray);
  }

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
    <Context.Provider value={{ list, updateList, addError }}>
      <Errors errors={errors} removeError={removeError} />
      {children}
    </Context.Provider>
  );
};

export const useTaskContext = () => useContext(Context);

export default TaskContext;
