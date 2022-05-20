import { useState } from "react";

export const useCounter = (initialState: number) => {
  const [count, setCount] = useState(initialState);

  return { count, setCount };
};
