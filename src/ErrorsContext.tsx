import React, { createContext, useContext, useState } from "react";
import Errors from "views/Errors/Errors";

interface Props {
  children: React.ReactNode;
}

interface State {
  errors: StateObject[];
  addError: (message: string) => void;
  removeError: (id: number) => void;
}

interface StateObject {
  id: number;
  message: string;
}

const initialState = {
  errors: [],
  addError: () => [],
  removeError: (id: number) => {},
};

const Context = createContext<State>(initialState);

const ErrorsContext = ({ children }: Props) => {
  const [errors, setErrors] = useState<StateObject[]>([]);

  function addError(message: string) {
    const id = errors.length + 1;
    const error = { id, message };
    setErrors((prev) => [...prev, error]);
  }

  function removeError(id: number) {
    const newArray = errors.filter((el) => el.id !== id);
    setErrors(newArray);
  }

  return (
    <Context.Provider value={{ errors, addError, removeError }}>
      {children}
      <Errors />
    </Context.Provider>
  );
};

export const useErrorContext = () => useContext(Context);

export default ErrorsContext;
