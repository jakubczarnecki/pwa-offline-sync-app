import React from "react";
import "./style.scss";

const TextArea = ({ className, label, value, onChange, ...rest }) => {
   return (
      <div className={`text-area-wrapper ${className}`}>
         <div className={`text-input-wrapper ${className ? className : ""}`}>
            <p>{label}</p>
            <textarea value={value} onChange={onChange} {...rest} />
         </div>
      </div>
   );
};

export default TextArea;
