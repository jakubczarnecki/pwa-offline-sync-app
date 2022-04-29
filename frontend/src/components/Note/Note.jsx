import React, { useContext } from "react";
import moment from "moment";
import IconButton from "../shared/IconButton/IconButton";
import "./style.scss";
import { deleteNote } from "../../actions/dataActions";
import { dataContext } from "../../context/dataContext";

const Note = ({ id, className, content, variant, date }) => {
   const variantClass = `note-variant-${variant}`;
   const { dispatch } = useContext(dataContext);

   return (
      <div className={`note-wrapper ${variantClass} ${className}`}>
         <textarea value={content} disabled />
         <div className="note-footer">
            <p className="date">{moment(date).format("MMM DD, YYYY")}</p>
            <div className="buttons">
               <IconButton icon="edit" />
               <IconButton
                  icon="delete"
                  onClick={() => {
                     deleteNote(dispatch, id);
                  }}
               />
            </div>
         </div>
      </div>
   );
};

export default Note;
