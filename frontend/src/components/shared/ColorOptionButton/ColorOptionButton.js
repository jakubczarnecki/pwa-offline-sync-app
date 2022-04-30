import React from "react";
import "./style.scss";

export default function ColorOptionButton({ color, active, onClick }) {
   return (
      <button
         className={`color-tab ${active && `active`} tab-color-${color}`}
         onClick={onClick}
      />
   );
}
