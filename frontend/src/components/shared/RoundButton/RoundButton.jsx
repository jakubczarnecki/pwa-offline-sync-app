import React from "react";
import "./style.scss";

const RoundButton = ({ children, className, icon, onClick }) => {
   return (
      <div
         className={`round-button-wrapper ${className ? className : ""}`}
         onClick={(e) => onClick(e)}
         onKeyDown={(e) => onClick(e)}
         tabIndex={0}
         role="button"
      >
         <span className="material-icons">{icon}</span>
         <p>{children}</p>
      </div>
   );
};

export default RoundButton;
