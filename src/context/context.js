import React from "react";
import Reducer from "./reducer";
import InitialState from "./initialState";

const AppContext = React.createContext(InitialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(Reducer, InitialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
