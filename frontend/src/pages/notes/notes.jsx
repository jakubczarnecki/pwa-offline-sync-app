import React, { useContext, useState, useEffect } from "react";
import AddNoteModal from "../../components/AddNoteModal/AddNoteModal";
import Button from "../../components/shared/Button/Button";
import Modal from "../../components/shared/Modal/Modal";
import Note from "../../components/Note/Note";
import "./style.scss";
import { dataContext, DataProvider } from "../../context/dataContext";
import SideBar from "../../components/SideBar/SideBar";
import { getNotes, getNotesByUser } from "../../actions/dataActions";

const NotesPage = () => {
   const { state, dispatch } = useContext(dataContext);
   const [modalOpen, setModalOpen] = useState(false);

   const handleLogout = (e) => {
      e.preventDefault();

      dispatch({
         type: "LOGOUT",
      });
   };

   useEffect(() => {
      getNotesByUser(dispatch, {user: state.username});
   }, []);

   const staticNotes = [
      {
         id: 0,
         description: "Learn lyrics of all Nothing but Thieves songs",
         date: new Date("04-06-2022"),
         prio: 1,
      },
      {
         id: 1,
         description: "Eat pizza",
         date: new Date("04-03-2022"),
         prio: 2,
      },
   ];

   return (
      <section className="notes-page">
         <SideBar username={state.username} modal={setModalOpen} />
         <div className="notes-layout">
            <h2 className="notes-header">These are your notes: </h2>
            <div className="notes-container">
               {state.notes?.map((note) => (
                  // {staticNotes.map((note) => (
                  <Note
                     key={note.id}
                     id={note.id}
                     variant={note.prio}
                     content={note.description}
                     date={note.date}
                  />
               ))}

               {modalOpen ? (
                  <Modal>
                     <AddNoteModal handleClose={() => setModalOpen(false)} />
                  </Modal>
               ) : null}
            </div>
         </div>
      </section>
   );
};

export default NotesPage;
