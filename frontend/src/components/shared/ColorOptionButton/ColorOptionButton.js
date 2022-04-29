import React from "react";
import "./style.scss";

export default function ColorOptionButton({ prio, active, onClick }) {
   return (
      <button
         className={`color-tab ${active && `active`} tab-color-${prio}`}
         onClick={onClick}
      />
   );
}
