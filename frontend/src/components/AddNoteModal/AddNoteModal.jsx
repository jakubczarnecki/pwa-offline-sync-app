import React, { useState, useContext } from "react";
import "./style.scss";
import Button from "../shared/Button/Button";
import TextInput from "../shared/TextInput/TextInput";
import Card from "../shared/Card/Card";
import TextArea from "../shared/TextArea/TextArea";
import { addNote } from "../../actions/dataActions";
import { dataContext } from "../../context/dataContext";
import { uiContext } from "../../context/uiConext";

const AddNoteModal = ({ handleClose }) => {
   const [noteData, setNoteData] = useState({
      title: "",
      description: "",
      date: new Date(),
   });

   const { state: stateData, dispatch: dispatchData } = useContext(dataContext);
   const { dispatch: dispatchUI } = useContext(uiContext);

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

               <Button
                  onClick={async () => { // async dodany specjalnie zeby sie ladowalo w modalu
                     await addNote(dispatchUI, dispatchData, {
                        user: stateData.username,
                        title: noteData.title,
                        description: noteData.description,
                        deadline: noteData.date,
                        prio: 6
                     });
                     handleClose();
                  }}
               >
                  Submit
               </Button>
            </div>
         </Card>
      </div>
   );
};

export default AddNoteModal;
