import React, { useContext } from "react";
import moment from "moment";
import IconButton from "../shared/IconButton/IconButton";
import "./style.scss";
import { deleteNote, getNotes } from "../../actions/dataActions";
import { dataContext } from "../../context/dataContext";

const Note = ({ id, className, content, variant, date }) => {
   const variantClass =
      Number.isInteger(variant) && variant > 0 && variant <= 6
         ? `note-variant-${variant}`
         : "note-variant-1";

   return (
      <div className={`note-wrapper ${variantClass} ${className}`}>
         <textarea value={content} />
         <div className="note-footer">
            <p className="date">{moment(date).format("MMM DD, YYYY")}</p>
            <div className="buttons">
               <IconButton icon="edit" />
               <IconButton
                  icon="delete"
                  onClick={() => {
                     deleteNote(id);
                  }}
               />
            </div>
         </div>
      </div>
   );
};

export default Note;
