import React, { useContext, useState } from "react";
import AddNoteModal from "../../components/AddNoteModal/AddNoteModal";
import Button from "../../components/shared/Button/Button";
import Modal from "../../components/shared/Modal/Modal";
import Note from "../../components/Note/Note";
import "./style.scss";
import { dataContext, DataProvider } from "../../context/dataContext";
import SideBar from "../../components/SideBar/SideBar";

const NotesPage = () => {
   const { state, dispatch } = useContext(dataContext);
   const [modalOpen, setModalOpen] = useState(false);

   const handleLogout = (e) => {
      e.preventDefault();

      dispatch({
         type: "LOGOUT",
      });
   };

   const staticNotes = [
      {
         id: 0,
         content: "Learn lyrics of all Nothing but Thieves songs",
         date: new Date("04-06-2022"),
         variant: 1,
      },
      {
         id: 1,
         content: "Eat pizza",
         date: new Date("04-03-2022"),
         variant: 2,
      },
   ];

   return (
      <section className="notes-page">
         <SideBar username={state.username}></SideBar>
         <div className="notes-layout">
            <h2 className="notes-header">These are your notes:</h2>
            <div className="notes-container">
               {staticNotes.map((note) => (
                  <Note
                     key={note.id}
                     variant={note.variant}
                     content={note.content}
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
