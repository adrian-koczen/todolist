import React, { createContext, useContext, useState } from "react";
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
  setList: () => [],
};

const Context = createContext<State>(initialState);

const StateContextProvider = ({ children }: Props) => {
  const [list, setList] = useState<ListItem[]>([]);

  return (
    <Context.Provider value={{ list, setList }}>{children}</Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);

export default StateContextProvider;
