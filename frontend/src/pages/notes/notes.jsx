import React, { useState } from "react";
import AddNoteModal from "../../components/AddNoteModal/AddNoteModal";
import Button from "../../components/shared/Button/Button";
import Modal from "../../components/shared/Modal/Modal";
import "./style.scss";

const NotesPage = () => {
   const [modalOpen, setModalOpen] = useState(false);

   return (
      <div>
         <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
         {modalOpen ? (
            <Modal>
               <AddNoteModal handleClose={() => setModalOpen(false)} />
            </Modal>
         ) : null}
      </div>
   );
};

export default NotesPage;
