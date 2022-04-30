import React, { useState } from "react";
import moment from "moment";
import IconButton from "../shared/IconButton/IconButton";
import "./style.scss";
import ConfirmDeleteNoteModal from "../ConfirmDeleteNoteModal/ConfirmDeleteNoteModal";
import Modal from "../shared/Modal/Modal";

const Note = ({ id, className, content, color, date }) => {
   const [modalOpen, setModalOpen] = useState(false);

   const handleModal = (isOpen, overflow) => {
      setModalOpen(isOpen);
      document.body.style.overflow = overflow;
   };

   return (
      <>
         <div className={`note-wrapper note-variant-${color} ${className}`}>
            <textarea value={content} disabled />
            <div className="note-footer">
               <p className="date">{moment(date).format("MMM DD, YYYY HH:mm")}</p>
               <div className="buttons">
                  <IconButton icon="edit" />
                  <IconButton
                     icon="delete"
                     onClick={() => {
                        handleModal(true, "hidden");
                     }}
                  />
               </div>
            </div>
         </div>
         {modalOpen && (
            <Modal>
               <ConfirmDeleteNoteModal
                  noteID={id}
                  handleClose={() => {
                     handleModal(false, "visible");
                  }}
               />
            </Modal>
         )}
      </>
   );
};

export default Note;
