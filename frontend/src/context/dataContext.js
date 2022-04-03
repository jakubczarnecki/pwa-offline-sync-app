import React, { createContext, useReducer } from "react";

const dataContext = createContext();

const initialState = {
   username: "",
   color: "color",
   notes: []
};

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
      case "SET_COLOR": {
         return {
            ...state,
            color: action.payload.color,
         };
      }
      case "SET_NOTES": {
         return {
            ...state,
            notes: action.payload.notes,
         };
      }
   }
};

const DataProvider = ({ children }) => {
   const [state, dispatch] = useReducer(dataReducer, initialState);

   const value = { state, dispatch };
   return <dataContext.Provider value={value}>{children}</dataContext.Provider>;
};

export { dataContext, DataProvider };
