import React, { useContext, useState, useEffect } from "react";
import AddNoteModal from "../../components/AddNoteModal/AddNoteModal";
import Modal from "../../components/shared/Modal/Modal";
import Note from "../../components/Note/Note";
import "./style.scss";
import { dataContext } from "../../context/dataContext";
import SideBar from "../../components/SideBar/SideBar";
import { getNotesByUser } from "../../actions/dataActions";
import ColorFilter from "../../components/ColorFilter/ColorFilter";

const NotesPage = () => {
   const {
      state: { username, prio, loading, notes },
      dispatch,
   } = useContext(dataContext);
   const [modalOpen, setModalOpen] = useState(false);

   useEffect(() => {
      getNotesByUser(dispatch, username);
   }, []);

   return (
      <section className="notes-page">
         <SideBar username={username} modal={setModalOpen} />
         <div className="notes-layout">
            <h2 className="notes-header">These are your notes: </h2>
            <ColorFilter />
            <div className="notes-container">
               {loading && <p>Loading...</p>}
               {notes
                  .filter((note) => prio == 0 || note.prio == prio)
                  .map((note) => (
                     <Note
                        key={note._id}
                        id={note._id}
                        variant={note.prio}
                        content={note.description}
                        date={note.deadline}
                     />
                  ))}
               {modalOpen && (
                  <Modal>
                     <AddNoteModal handleClose={() => setModalOpen(false)} />
                  </Modal>
               )}
               {notes.length === 0 && <p>Notes has not been found :C</p>}
            </div>
         </div>
      </section>
   );
};

export default NotesPage;
