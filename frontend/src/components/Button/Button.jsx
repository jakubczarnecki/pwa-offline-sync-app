import React from "react";
import "./style.scss";

const Button = ({ children, className, icon, onClick }) => {
   return (
      <div
         className={`button-wrapper ${className ? className : ""}`}
         onClick={(e) => onClick(e)}
         onKeyDown={(e) => onClick(e)}
         tabIndex={0}
         role="button"
      >
         {icon ? <span className="material-icons">{icon}</span> : null}
         <p>{children}</p>
      </div>
   );
};

export default Button;
