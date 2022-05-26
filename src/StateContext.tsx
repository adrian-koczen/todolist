import React, { createContext, useContext, useEffect, useState } from "react";
// Interfaces
import { ListItem } from "interfaces";

interface Props {
  children: React.ReactNode;
}

interface State {
  list: ListItem[];
  setList: React.Dispatch<React.SetStateAction<ListItem[]>>;
  //setList: (setList: ListItem[]) => void;
}

const initialState = {
  list: [],
  setList: () => {},
};

const Context = createContext<State>(initialState);

const StateContextProvider = ({ children }: Props) => {
  const [list, setList] = useState<ListItem[]>([]);

  useEffect(() => () => console.log("asdasd"), []);

  return (
    <Context.Provider value={{ list, setList }}>{children}</Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);

export default StateContextProvider;
