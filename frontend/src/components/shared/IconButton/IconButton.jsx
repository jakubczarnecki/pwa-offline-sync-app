import React from "react";
import "./style.scss";

const IconButton = ({ className, icon, onClick }) => {
   return (
      <div
         className={`icon-button-wrapper ${className}`}
         onClick={onClick}
         onKeyDown={onClick}
         role="button"
         tabIndex={0}
      >
         <span className="material-icons">{icon}</span>
      </div>
   );
};

export default IconButton;
