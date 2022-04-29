import React, { useContext } from "react";
import "./style.scss";
import Card from "../shared/Card/Card";
import Button from "../shared/Button/Button";
import { deleteNote } from "../../actions/dataActions";
import { dataContext } from "../../context/dataContext";

const ConfirmDeleteNoteModal = ({ handleClose, noteID }) => {
   const { dispatch } = useContext(dataContext);

   const handleDelete = async () => {
      await deleteNote(dispatch, noteID);
      handleClose();
   };

   return (
      <div className="confirm-delete-note-modal">
         <div
            className="backdrop"
            role="button"
            onClick={handleClose}
            onKeyDown={handleClose}
            tabIndex={0}
         />
         <Card>
            <div className="header">
               <p className="section-title">Remove note</p>
               <span
                  className="material-icons close-button"
                  onClick={handleClose}
                  onKeyDown={handleClose}
                  role="button"
                  tabIndex={0}
               >
                  close
               </span>
            </div>
            <div className="content">
               <p>Are you sure you want to delete this note?</p>
            </div>
            <div className="footer">
               <Button className="cancel" onClick={handleClose}>
                  Cancel
               </Button>
               <Button className="submit" onClick={handleDelete}>
                  Delete
               </Button>
            </div>
         </Card>
      </div>
   );
};

export default ConfirmDeleteNoteModal;
