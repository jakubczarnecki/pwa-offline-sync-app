import React, { useContext, useState, useEffect } from "react";
import AddNoteModal from "../../components/AddNoteModal/AddNoteModal";
import Modal from "../../components/shared/Modal/Modal";
import Note from "../../components/Note/Note";
import "./style.scss";
import { dataContext } from "../../context/dataContext";
import SideBar from "../../components/SideBar/SideBar";
import { getNotesByUser } from "../../actions/dataActions";
import { uiContext } from "../../context/uiConext";
import ColorFilter from "../../components/ColorFilter/ColorFilter";

const NotesPage = () => {
   const {
      state: { username, prio },
      dispatch: dispatchData,
   } = useContext(dataContext);
   const {
      state: { loading },
      dispatch: dispatchUI,
   } = useContext(uiContext);
   const [modalOpen, setModalOpen] = useState(false);

   const [fetchedNotes, setFetchedNotes] = useState([]);
   const [localNotes, setLocalNotes] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         const data = await getNotesByUser(dispatchUI, dispatchData, { user: username });
         setFetchedNotes(data);
         setLocalNotes(data);
      };

      fetchData();
   }, []);

   useEffect(() => {
      if (prio === "") {
         setLocalNotes(fetchedNotes);
         return;
      }
      setLocalNotes(fetchedNotes?.filter((note) => note.prio === prio));
   }, [prio]);

   return (
      <section className="notes-page">
         <SideBar username={username} modal={setModalOpen} />
         <div className="notes-layout">
            <h2 className="notes-header">These are your notes: </h2>
            <ColorFilter />
            <div className="notes-container">
               {loading ? (
                  <p>Loading...</p>
               ) : (
                  localNotes?.map((note) => (
                     /* {staticNotes.map((note) => ( */
                     <Note
                        key={note.id}
                        id={note.id}
                        variant={note.prio}
                        content={note.description}
                        date={note.date}
                     />
                  ))
               )}
               {modalOpen ? (
                  <Modal>
                     <AddNoteModal handleClose={() => setModalOpen(false)} />
                  </Modal>
               ) : null}
               {(fetchedNotes?.length === 0 || localNotes?.length === 0) && (
                  <p>Notes has not been found :C</p>
               )}
            </div>
         </div>
      </section>
   );
};

export default NotesPage;
