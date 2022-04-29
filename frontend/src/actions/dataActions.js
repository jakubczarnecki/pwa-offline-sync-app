import axios from "axios";

const getNotesByUser = async (dispatch, username) => {
   dispatch({ type: "CLEAR_ERRORS" });
   dispatch({ type: "SET_LOADING" });

   try {
      const response = await axios.get(`/notes/user/${username}`);
      const notes = response.data.map((note) => {
         const { _id, user, title, description, deadline, prio } = note;
         return {
            id: _id,
            user: user,
            title: title,
            description: description,
            deadline: deadline,
            prio: prio,
         };
      });
      dispatch({ type: "SET_NOTES", payload: { notes: notes } });
      return notes;
   } catch (err) {
      dispatch({ type: "ADD_ERROR", payload: { errors: err.message } });
   }
};

const getNotesById = async (dispatch, noteID) => {
   dispatch({ type: "CLEAR_ERRORS" });
   dispatch({ type: "SET_LOADING" });

   try {
      const response = await axios.get(`/notes?id=${noteID}`);
      const notes = response.data.map((note) => {
         const { _id, user, title, description, deadline, prio } = note;
         return {
            id: _id,
            user: user,
            title: title,
            description: description,
            deadline: deadline,
            prio: prio,
         };
      });
      dispatch({ type: "SET_NOTES", payload: { notes: notes } });
   } catch (err) {
      dispatch({ type: "ADD_ERROR", payload: { errors: err.message } });
   }
};

const addNote = async (dispatch, note) => {
   dispatch({ type: "CLEAR_ERRORS" });
   dispatch({ type: "SET_LOADING" });
   try {
      await axios.post("/notes", note);
      const { username } = note;
      await getNotesByUser(dispatch, username);
      //TODO: addnote dispatch action
   } catch (err) {
      dispatch({ type: "ADD_ERROR", payload: { errors: err.message } });
   }
};

const updateNote = async (dispatch, id, note, username) => {
   dispatch({ type: "CLEAR_ERRORS" });
   dispatch({ type: "SET_LOADING" });
   try {
      await axios.put(`/notes/${id}`, note);

      //TODO: updatenote dispatch action
      await getNotesByUser(dispatch, username);
   } catch (err) {
      dispatch({ type: "ADD_ERROR", payload: { errors: err.message } });
   }
};

const deleteNote = async (dispatch, id, username) => {
   dispatch({ type: "CLEAR_ERRORS" });
   dispatch({ type: "SET_LOADING" });

   try {
      await axios.delete(`/notes/${id}`);
      //TODO: deletenote dispatch action
      await getNotesByUser(dispatch, username);
   } catch (err) {
      dispatch({ type: "ADD_ERROR", payload: { errors: err.message } });
   }
};

export { addNote, getNotesByUser, getNotesById, updateNote, deleteNote };
