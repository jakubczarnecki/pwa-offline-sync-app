import React, { useState } from "react";
import "./style.scss";
import Button from "../shared/Button/Button";
import TextInput from "../shared/TextInput/TextInput";
import Card from "../shared/Card/Card";
import TextArea from "../shared/TextArea/TextArea";

const AddNoteModal = ({ handleClose }) => {
   const [noteData, setNoteData] = useState({
      title: "",
      content: "",
      date: new Date(),
   });

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
                  onChange={(e) => setNoteData({ ...noteData, content: e.target.value })}
               />

               <Button onClick={handleClose}>Submit</Button>
            </div>
         </Card>
      </div>
   );
};

export default AddNoteModal;
