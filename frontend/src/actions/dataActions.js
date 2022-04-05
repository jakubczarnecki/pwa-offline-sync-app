/**
 *
 * TODO - na razie nie dodalem uicontext temu nie mam jak ustawic error
 */

const getNotes = async (dispatch) => {
   fetch("/api/notes")
      .then((res) => {
         return res.json();
      })
      .then((data) => {
         data = data.map((note) => {
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
         dispatch({ type: "SET_NOTES", payload: { notes: data } });
      })
      .catch((err) => console.error(err.message));
};

const getNotesByUser = async (dispatch, user) => {
   fetch("/api/notes/byUser", {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   })
      .then((res) => {
         if (!res.ok) throw new Error(res.statusText);
         return res.json();
      })
      .then((data) => {
         console.log(data);
         data = data.map((note) => {
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
         dispatch({ type: "SET_NOTES", payload: { notes: data } });
      })
      .catch((err) => console.error(err.message));
};

const getNotesById = (dispatch, id) => {
   fetch(`/api/notes?id=${id}`)
      .then((res) => {
         if (!res.ok) throw new Error(res.statusText);
         return res.json();
      })
      .then((data) => {
         data = data.map((note) => {
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
         dispatch({ type: "SET_NOTES", payload: { notes: data } });
      })
      .catch((err) => console.error(err.message));
};

const addNote = async (note) => {
   fetch("/api/notes", {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
   })
      .then((res) => {
         if (!res.ok) throw new Error(res.statusText);
      })
      .catch((err) => console.error(err.message));
};

const updateNote = async (id, note) => {
   fetch(`/api/notes/${id}`, {
      method: "PUT",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
   })
      .then((res) => {
         if (!res.ok) throw new Error(res.statusText);
      })
      .catch((err) => console.error(err.message));
};

const deleteNote = async (id) => {
   fetch(`/api/notes/${id}`, {
      method: "DELETE",
   })
      .then((res) => {
         if (!res.ok) throw new Error(res.statusText);
      })
      .catch((err) => console.error(err.message));
};

export { getNotes, addNote, getNotesByUser, getNotesById, updateNote, deleteNote };
