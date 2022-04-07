import React, { useContext, useState, useEffect } from "react";
import AddNoteModal from "../../components/AddNoteModal/AddNoteModal";
import Button from "../../components/shared/Button/Button";
import Modal from "../../components/shared/Modal/Modal";
import Note from "../../components/Note/Note";
import "./style.scss";
import { dataContext, DataProvider } from "../../context/dataContext";
import SideBar from "../../components/SideBar/SideBar";
import { getNotes, getNotesByUser } from "../../actions/dataActions";
import { uiContext } from "../../context/uiConext";

const NotesPage = () => {
   const { state: stateData, dispatch: dispatchData } = useContext(dataContext);
   const { state: stateUI, dispatch: dispatchUI } = useContext(uiContext);
   const [modalOpen, setModalOpen] = useState(false);

   const handleLogout = (e) => {
      e.preventDefault();

      dispatchData({
         type: "LOGOUT",
      });
   };

   useEffect(() => {
      getNotesByUser(dispatchUI, dispatchData, { user: stateData.username });
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
         <SideBar username={stateData.username} modal={setModalOpen} />
         <div className="notes-layout">
            <h2 className="notes-header">These are your notes: </h2>
            <div className="notes-container">
               {stateData.notes.length !== 0 ? (
                  stateData.notes?.map((note) => (
                     /* {staticNotes.map((note) => ( */
                     <Note
                        key={note.id}
                        id={note.id}
                        variant={note.prio}
                        content={note.description}
                        date={note.date}
                     />
                  ))
               ) : (
                  <p>Notes has not been found :C</p>
               )}
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
