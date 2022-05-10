import React, { useContext, useRef, useState } from "react";
import moment from "moment";
import Button from "../shared/Button/Button";
import IconButton from "../shared/IconButton/IconButton";
import "./style.scss";
import ConfirmDeleteNoteModal from "../ConfirmDeleteNoteModal/ConfirmDeleteNoteModal";
import Modal from "../shared/Modal/Modal";
import { dataContext } from "../../context/dataContext";
import { updateNote } from "../../actions/dataActions";
import DateTimePicker from "../shared/DateTimePicker/DateTimePicker";

const Note = ({ id, className, description, color, deadline }) => {
   const [modalOpen, setModalOpen] = useState(false);
   const [editing, setEditing] = useState(false);
   const [data, setData] = useState({
      _id: id,
      description,
      deadline,
      color,
   });

   const dateInputRef = useRef(null);
   const { dispatch } = useContext(dataContext);

   const handleEdit = () => {
      if (!editing) {
         return setEditing(true);
      }

      updateNote(dispatch, id, data);
      setEditing(false);
   };

   return (
      <>
         <div
            className={`note-wrapper note-variant-${color} ${
               editing && "editing"
            } ${className}`}
         >
            {editing ? (
               <textarea
                  value={data.description}
                  onChange={(e) => setData({ ...data, description: e.target.value })}
               />
            ) : (
               <textarea value={data.description} disabled />
            )}

            <div className="note-footer">
               <Button
                  className="date"
                  onClick={() => {
                     editing && dateInputRef.current.openCalendar();
                  }}
               >
                  {moment(data.deadline).format("MMM DD, YYYY")}
               </Button>
               <DateTimePicker
                  value={new Date(data.deadline)}
                  onChange={(value) => setData({ ...data, deadline: value })}
                  disableCalendar={!editing}
                  ref={dateInputRef}
                  hidden
               />

               <div className="buttons">
                  <IconButton className="edit" icon="edit" onClick={handleEdit} />
                  <IconButton
                     icon="delete"
                     onClick={() => {
                        setModalOpen(true);
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
                     setModalOpen(false);
                  }}
               />
            </Modal>
         )}
      </>
   );
};

export default Note;
