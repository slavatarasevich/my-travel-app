import { createContext, useState } from "react";

export const MyContext = createContext();

export function MyConextProvider({ children }) {
  const [context, setContext] = useState();
  const values = { context, setContext };

  return <MyContext.Provider value={values}>{children}</MyContext.Provider>;
}

export default MyContext;
