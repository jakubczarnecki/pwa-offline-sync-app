import React from "react";
import "./style.scss";

const TextInput = ({ value, onChange, type, label, className, ...rest }) => {
   return (
      <div className={`text-input-wrapper ${className ? className : ""}`}>
         <p>{label}</p>
         <input type={type ? type : "text"} value={value} onChange={onChange} {...rest} />
      </div>
   );
};

export default TextInput;
