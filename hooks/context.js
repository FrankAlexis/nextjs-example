import React, { createContext, useReducer } from "react";

import initialState from './initialState';
import reducer from "./reducer";

const ExampleContext = createContext();

const { Provider } = ExampleContext;

const ExampleContextProvider = ({ children }) => {
  const [globalState, dispatch] = useReducer(reducer, initialState);
  const store = [
    globalState,
    dispatch,
  ];

  return <Provider value={store}>{children}</Provider>;
};

export { ExampleContextProvider, ExampleContext };
