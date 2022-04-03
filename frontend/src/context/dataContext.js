import React, { createContext, useReducer } from "react";

const dataContext = createContext();

const dataReducer = (state, action) => {
   switch (action.type) {
      case "LOGIN": {
         return {
            ...state,
            username: action.payload.username,
         };
      }
      case "LOGOUT": {
         return {
            username: "",
            currentRoute: {},
         };
      }
   }
};

const DataProvider = ({ children }) => {
   const [state, dispatch] = useReducer(dataReducer, {
      username: "", todos: []
   });

   const value = { state, dispatch };
   return <dataContext.Provider value={value}>{children}</dataContext.Provider>;
};

export { dataContext, DataProvider };
