import React from "react";
import "./style.scss";
import ColorOptionButton from "../shared/ColorOptionButton/ColorOptionButton";

const ColorPicker = ({ label, value, setValue }) => {
   return (
      <div className="color-picker-wrapper">
         <p>{label}</p>
         <div className="values">
            {[...Array(6)].map((_, index) => (
               <ColorOptionButton
                  prio={index + 1}
                  active={index + 1 == value}
                  onClick={() => setValue(index + 1)}
                  key={index}
               />
            ))}
         </div>
      </div>
   );
};

export default ColorPicker;
