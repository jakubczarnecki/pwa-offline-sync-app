import React, { useEffect, useContext, useState } from "react";
import { getNotes } from "../../actions/dataActions";
import { dataContext } from "../../context/dataContext";
import "./style.scss";

export default function ColorTab({ prio, color }) {
   const [active, isActive] = useState(false);
   const { state, dispatch } = useContext(dataContext);

   useEffect(() => {
      if (prio !== state.prio) isActive(false);
   }, [state.prio]);

   // const note = {
   //    user: "WSAPSASDSDA",
   //    title: "EDAWWEDWADWDAWDWDA",
   //    description: "DasWADWDAWDAWDAWADWADWDWDdsa",
   //    deadline: "2022-12-12",
   //    prio: 4,
   // };

   const handleClick = () => {
      isActive(!active);
      const prioValue = !active ? prio : "";
      dispatch({
         type: "SET_PRIO",
         payload: { prio: prioValue },
      });
   };

   return (
      <button
         className={active ? `color-tab--clicked ${color}` : `color-tab ${color}`}
         onClick={handleClick}
      ></button>
   );
}
