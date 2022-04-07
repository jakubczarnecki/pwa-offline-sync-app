import React, { createContext, useReducer } from "react";

const uiContext = createContext();

const initialState = { loading: false, errors: [] };

const uiReducer = (state, action) => {
   switch (action.type) {
      case "SET_LOADING": {
         return {
            ...state,
            loading: action.payload.loading,
         };
      }
      case "SET_ERRORS": {
         return {
            ...state,
            errors: action.payload.errors,
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
         return initialState;
      }
   }
};

const UIProvider = ({ children }) => {
   const [state, dispatch] = useReducer(uiReducer, initialState);
   const value = { state, dispatch };
   return <uiContext.Provider value={value}>{children}</uiContext.Provider>;
};

export { uiContext, UIProvider };
