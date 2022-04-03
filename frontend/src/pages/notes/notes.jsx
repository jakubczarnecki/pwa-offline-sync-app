import React, { useContext, useState } from "react";
import AddNoteModal from "../../components/AddNoteModal/AddNoteModal";
import Button from "../../components/shared/Button/Button";
import Modal from "../../components/shared/Modal/Modal";
import "./style.scss";
import { dataContext, DataProvider } from "../../context/dataContext";

const NotesPage = () => {
   const { state, dispatch } = useContext(dataContext);
   const [modalOpen, setModalOpen] = useState(false);

   const handleLogout = (e) => {
      e.preventDefault();

      dispatch({
         type: "LOGOUT",
      });
   };

   return (
      <section className="notes-page">
         <div className="top-bar">
            <p className="greeter">
               Hello, <b>{state.username}!</b>
            </p>
            <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
            <Button icon="logout" className="log-out" onClick={handleLogout}>
               Wyloguj
            </Button>
         </div>
         {modalOpen ? (
            <Modal>
               <AddNoteModal handleClose={() => setModalOpen(false)} />
            </Modal>
         ) : null}
      </section>
   );
};

export default NotesPage;
