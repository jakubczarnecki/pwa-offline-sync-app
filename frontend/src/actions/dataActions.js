/**
 *
 * TODO - na razie nie dodalem uicontext temu nie mam jak ustawic error
 */

const getNotes = async (dispatchUI, dispatchData) => {
   dispatchUI({ type: "CLEAR_ERRORS", payload: { errors: [] } });
   dispatchUI({ type: "SET_LOADING", payload: { loading: true } });

   try {
      const response = await fetch("/api/notes");
      if (!response.ok) throw new Error(response.statusText);
      let notes = await response.json();
      notes = notes.map((note) => {
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
      dispatchData({ type: "SET_NOTES", payload: { notes: notes } });
      dispatchUI({ type: "SET_LOADING", payload: { loading: false } });
   } catch (err) {
      dispatchUI({ type: "SET_ERRORS", payload: [err.message] });
      dispatchUI({ type: "SET_LOADING", payload: { loading: false } });
   }
};

const getNotesByUser = async (dispatchUI, dispatchData, user) => {
   dispatchUI({ type: "CLEAR_ERRORS", payload: { errors: [] } });
   dispatchUI({ type: "SET_LOADING", payload: { loading: true } });

   try {
      const response = await fetch("/api/notes/byUser", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(user),
      });
      if (!response.ok) throw new Error(response.statusText);
      let notes = await response.json();
      notes = notes.map((note) => {
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
      dispatchData({ type: "SET_NOTES", payload: { notes: notes } });
      dispatchUI({ type: "SET_LOADING", payload: { loading: false } });
   } catch (err) {
      dispatchUI({ type: "SET_ERRORS", payload: [err.message] });
      dispatchUI({ type: "SET_LOADING", payload: { loading: false } });
   }
};

const getNotesById = async (dispatchUI, dispatchData, id) => {
   dispatchUI({ type: "CLEAR_ERRORS", payload: { errors: [] } });
   dispatchUI({ type: "SET_LOADING", payload: { loading: true } });

   try {
      const response = await fetch(`/api/notes?id=${id}`);
      if (!response.ok) throw new Error(response.statusText);
      let notes = await response.json();
      notes = notes.map((note) => {
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
      dispatchData({ type: "SET_NOTES", payload: { notes: notes } });
      dispatchUI({ type: "SET_LOADING", payload: { loading: false } });
   } catch (err) {
      dispatchUI({ type: "SET_ERRORS", payload: [err.message] });
      dispatchUI({ type: "SET_LOADING", payload: { loading: false } });
   }
};

const addNote = async (dispatchUI, dispatchData, note) => {
   dispatchUI({ type: "CLEAR_ERRORS", payload: { errors: [] } });
   dispatchUI({ type: "SET_LOADING", payload: { loading: true } });
   try {
      const response = await fetch("/api/notes", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(note),
      });
      if (!response.ok) throw new Error(response.statusText);
      const { user } = note;
      await getNotesByUser(dispatchUI, dispatchData, {user: user}); // oj cos czuje ze tego nie powinno tu byc
   } catch (err) {
      dispatchUI({ type: "SET_ERRORS", payload: [err.message] });
      dispatchUI({ type: "SET_LOADING", payload: { loading: false } });
   }
};

const updateNote = async (dispatchUI, id, note) => {
   dispatchUI({ type: "CLEAR_ERRORS", payload: { errors: [] } });
   dispatchUI({ type: "SET_LOADING", payload: { loading: true } });
   try {
      const response = await fetch(`/api/notes/${id}`, {
         method: "PUT",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(note),
      });
      if (!response.ok) throw new Error(response.statusText);
      dispatchUI({ type: "SET_LOADING", payload: { loading: false } });
   } catch (err) {
      dispatchUI({ type: "SET_ERRORS", payload: [err.message] });
      dispatchUI({ type: "SET_LOADING", payload: { loading: false } });
   }
};

const deleteNote = async (dispatchUI, id) => {
   dispatchUI({ type: "CLEAR_ERRORS", payload: { errors: [] } });
   dispatchUI({ type: "SET_LOADING", payload: { loading: true } });

   try {
      const response = await fetch(`/api/notes/${id}`, {
         method: "DELETE",
      });
      if (!response.ok) throw new Error(response.statusText);
      dispatchUI({ type: "SET_LOADING", payload: { loading: false } });
   } catch (err) {
      dispatchUI({ type: "SET_ERRORS", payload: [err.message] });
      dispatchUI({ type: "SET_LOADING", payload: { loading: false } });
   }
};

export { getNotes, addNote, getNotesByUser, getNotesById, updateNote, deleteNote };
