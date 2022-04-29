import React, { useState, useContext } from "react";
import "./style.scss";
import Button from "../shared/Button/Button";
import TextInput from "../shared/TextInput/TextInput";
import Card from "../shared/Card/Card";
import TextArea from "../shared/TextArea/TextArea";
import { addNote } from "../../actions/dataActions";
import { dataContext } from "../../context/dataContext";
import ColorPicker from "../ColorPicker/ColorPicker";

const AddNoteModal = ({ handleClose }) => {
   const [noteData, setNoteData] = useState({
      title: "",
      description: "",
      deadline: new Date(),
      prio: 1,
   });

   const { state, dispatch } = useContext(dataContext);

   const handleAddNote = async () => {
      await addNote(dispatch, { username: state.username, ...noteData });
      handleClose();
   };

   return (
      <div className="add-note-modal">
         <div
            className="backdrop"
            role="button"
            onClick={handleClose}
            onKeyDown={handleClose}
            tabIndex={0}
         />
         <Card>
            <span
               className="material-icons close-button"
               onClick={handleClose}
               onKeyDown={handleClose}
               role="button"
               tabIndex={0}
            >
               close
            </span>
            <div className="content">
               <p className="section-title">Add new note</p>
               <TextInput
                  label="Title"
                  placeholder="Title"
                  value={noteData.title}
                  onChange={(e) => setNoteData({ ...noteData, title: e.target.value })}
               />
               <TextArea
                  label="Content"
                  placeholder="Content"
                  value={noteData.content}
                  onChange={(e) =>
                     setNoteData({ ...noteData, description: e.target.value })
                  }
               />
               <ColorPicker
                  label="Color"
                  value={noteData.prio}
                  setValue={(prio) => setNoteData({ ...noteData, prio })}
               />
               <Button onClick={handleAddNote}>Submit</Button>
            </div>
         </Card>
      </div>
   );
};

export default AddNoteModal;
