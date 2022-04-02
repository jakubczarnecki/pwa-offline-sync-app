import React, { createContext, useReducer } from "react";

const uiContext = createContext();

const uiReducer = (state, action) => {
   switch (action.type) {
      case "SET_LOADING": {
         return {
            ...state,
            loading: action.payload,
         };
      }
      case "SET_ERRORS": {
         return {
            ...state,
            errors: action.payload,
            loading: false,
         };
      }
      case "CLEAR_ERRORS": {
         return {
            ...state,
            errors: [],
         };
      }
      default: {
         return { loading: false, errors: [] };
      }
   }
};

const UIContextProvider = ({ children }) => {
   const [state, dispatch] = useReducer(uiReducer, { loading: false, errors: [] });
   const value = {state, dispatch}
   return <uiContext.Provider value={value}>{children}</uiContext.Provider>;
};

export { uiContext, UIContextProvider };
