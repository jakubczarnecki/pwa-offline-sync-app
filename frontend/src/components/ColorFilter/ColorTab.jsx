import React, { useEffect, useContext, useState } from "react";
import { getNotes } from "../../actions/dataActions";
import { dataContext } from "../../context/dataContext";
import "./style.scss";

export default function ColorTab({ color }) {
   const [clicked, isClicked] = useState(false);
   const { state, dispatch } = useContext(dataContext);

   useEffect(() => {
      if (color !== state.color) isClicked(false);
   }, [state.color]);

   const note = {
      user: "WSAPSASDSDA",
      title: "EDAWWEDWADWDAWDWDA",
      description: "DasWADWDAWDAWDAWADWADWDWDdsa",
      deadline: "2022-12-12",
      prio: 4,
   };

   return (
      <button
         className={clicked ? "colorTab--clicked" : "colorTab"}
         onClick={() => {
            getNotes(dispatch);
            isClicked(!clicked);
            dispatch({
               type: "SET_COLOR",
               payload: { color: color },
            });
            // addNote(note);
         }}
      ></button>
   );
}
