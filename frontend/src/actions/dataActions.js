import axios from "axios";

const getNotesByUser = async (dispatch, username) => {
   dispatch({ type: "CLEAR_ERRORS" });
   dispatch({ type: "SET_LOADING" });

   try {
      const response = await axios.get(`/notes/user/${username}`);
      dispatch({ type: "SET_NOTES", payload: { notes: response.data } });
   } catch (err) {
      dispatch({ type: "ADD_ERROR", payload: { errors: err.message } });
   }
};

const getNotesById = async (dispatch, noteID) => {
   dispatch({ type: "CLEAR_ERRORS" });
   dispatch({ type: "SET_LOADING" });

   try {
      const response = await axios.get(`/notes?id=${noteID}`);
      dispatch({ type: "SET_NOTES", payload: { notes: response.data } });
   } catch (err) {
      dispatch({ type: "ADD_ERROR", payload: { errors: err.message } });
   }
};

const addNote = async (dispatch, note) => {
   dispatch({ type: "CLEAR_ERRORS" });
   dispatch({ type: "SET_LOADING" });
   try {
      const response = await axios.post("/notes", note);
      dispatch({ type: "ADD_NOTE", payload: { note: response.data } });
   } catch (err) {
      dispatch({ type: "ADD_ERROR", payload: { errors: err.message } });
   }
};

const updateNote = async (dispatch, id, note) => {
   dispatch({ type: "CLEAR_ERRORS" });
   dispatch({ type: "SET_LOADING" });
   try {
      await axios.put(`/notes/${id}`, note);
      dispatch({ type: "UPDATE_NOTE", payload: { note } });
   } catch (err) {
      dispatch({ type: "ADD_ERROR", payload: { errors: err.message } });
   }
};

const deleteNote = async (dispatch, id) => {
   dispatch({ type: "CLEAR_ERRORS" });
   dispatch({ type: "SET_LOADING" });

   try {
      await axios.delete(`/notes/${id}`);
      dispatch({ type: "DELETE_NOTE", payload: { noteID: id } });
   } catch (err) {
      dispatch({ type: "ADD_ERROR", payload: { errors: err.message } });
   }
};

export { addNote, getNotesByUser, getNotesById, updateNote, deleteNote };
