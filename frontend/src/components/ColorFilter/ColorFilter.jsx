import React, { useContext } from "react";
import { dataContext } from "../../context/dataContext";
import ColorOptionButton from "../shared/ColorOptionButton/ColorOptionButton";
import "./style.scss";

export default function ColorFilter() {
   const {
      state: { color },
      dispatch,
   } = useContext(dataContext);

   const handleChangeColor = (newColor) => {
      if (newColor == color) {
         newColor = 0;
      }

      dispatch({
         type: "SET_COLOR",
         payload: { color: newColor },
      });
   };

   return (
      <div className="color-filter-wrapper">
         {[...Array(6)].map((_, index) => (
            <ColorOptionButton
               color={index + 1}
               active={index + 1 == color}
               onClick={() => handleChangeColor(index + 1)}
               key={index}
            />
         ))}
      </div>
   );
}
