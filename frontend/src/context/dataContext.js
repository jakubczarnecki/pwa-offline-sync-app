import React, { createContext, useReducer } from "react";

const dataContext = createContext();

const initialState = {
   username: "",
   prio: 0, // when prio eq 0 then all notes are visible
   notes: [],
   currentRoute: {},

   loading: false,
   errors: [],
};

const dataReducer = (state, action) => {
   switch (action.type) {
      case "LOGIN": {
         return {
            ...state,
            loading: false,
            username: action.payload.username,
         };
      }

      case "LOGOUT": {
         return initialState;
      }

      case "SET_PRIO": {
         return {
            ...state,
            loading: false,
            prio: action.payload.prio,
         };
      }

      case "SET_NOTES": {
         return {
            ...state,
            loading: false,
            notes: action.payload.notes,
         };
      }

      case "DELETE_NOTE": {
         const newNotes = state.notes.filter((note) => note.id !== action.payload.noteID);

         return {
            ...state,
            loading: false,
            notes: newNotes,
         };
      }

      case "UPDATE_NOTE": {
         const newNotes = [...state.notes];
         const updatedNoteIndex = newNotes.findIndex(
            (note) => note.id === action.payload.note.id
         );
         newNotes[updatedNoteIndex] = action.payload.note;

         return {
            ...state,
            loading: false,
            notes: newNotes,
         };
      }

      case "ADD_NOTE": {
         return {
            ...state,
            loading: false,
            notes: [action.payload.note, ...state.notes],
         };
      }

      case "SET_LOADING": {
         return {
            ...state,
            loading: true,
         };
      }

      case "ADD_ERROR": {
         return {
            ...state,
            loading: false,
            errors: [
               ...state.errors,
               ...(Array.isArray(action.payload.errors)
                  ? action.payload.errors
                  : [action.payload.errors]),
            ],
         };
      }

      case "CLEAR_ERRORS": {
         return {
            ...state,
            loading: false,
            errors: [],
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
