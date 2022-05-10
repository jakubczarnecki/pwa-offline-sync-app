import React, { useContext, useState, useEffect } from "react";
import AddNoteModal from "../../components/AddNoteModal/AddNoteModal";
import Modal from "../../components/shared/Modal/Modal";
import Note from "../../components/Note/Note";
import "./style.scss";
import { dataContext } from "../../context/dataContext";
import { getNotesByUser } from "../../actions/dataActions";
import ColorFilter from "../../components/ColorFilter/ColorFilter";
import TopBar from "../../components/TopBar/TopBar";
import BottomBar from "../../components/BottomBar/BottomBar";
import ReactLoading from "react-loading";

const NotesPage = () => {
   const {
      state: { username, color, loading, notes },
      dispatch,
   } = useContext(dataContext);
   const [modalOpen, setModalOpen] = useState(false);

   useEffect(() => {
      getNotesByUser(dispatch, username);
   }, []);

   const handleClose = () => {
      setModalOpen(false);
      document.body.style.overflow = "visible";
   };

   return (
      <section className="notes-page">
         <TopBar username={username} modal={setModalOpen} />
         <div className="notes-layout">
            <div className="notes-header">
               <h2>These are your notes: </h2>
            </div>
            <div className="filter-bar">
               <ColorFilter />
               {loading && (
                  <ReactLoading className="loading" type="bubbles" color="#4d6b6b" />
               )}
            </div>
            <div className="notes-container">
               {notes
                  .filter((note) => color == 0 || note.color == color)
                  .map((note) => (
                     <Note
                        key={note._id}
                        id={note._id}
                        color={note.color}
                        description={note.description}
                        deadline={note.deadline}
                     />
                  ))}
               {modalOpen && (
                  <Modal>
                     <AddNoteModal handleClose={handleClose} />
                  </Modal>
               )}
               {notes.length === 0 && <p>No notes have been found :c</p>}
            </div>
         </div>
         <BottomBar />
      </section>
   );
};

export default NotesPage;
