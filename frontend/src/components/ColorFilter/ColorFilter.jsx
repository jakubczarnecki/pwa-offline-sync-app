import React, { useContext } from "react";
import { dataContext } from "../../context/dataContext";
import ColorOptionButton from "../shared/ColorOptionButton/ColorOptionButton";
import "./style.scss";

export default function ColorFilter() {
   const {
      state: { prio },
      dispatch,
   } = useContext(dataContext);

   const handleChangePrio = (newPrio) => {
      if (newPrio == prio) {
         newPrio = 0;
      }

      dispatch({
         type: "SET_PRIO",
         payload: { prio: newPrio },
      });
   };

   return (
      <div className="color-filter-wrapper">
         {[...Array(6)].map((_, index) => (
            <ColorOptionButton
               prio={index + 1}
               active={index + 1 == prio}
               onClick={() => handleChangePrio(index + 1)}
               key={index}
            />
         ))}
      </div>
   );
}
