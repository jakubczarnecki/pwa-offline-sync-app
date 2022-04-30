import React from "react";
import "./style.scss";

const DateTimePicker = ({ label, value, onChange, className }) => {
   return (
      <div className={`date-time-picker-wrapper ${className}`}>
         <p>{label}</p>
         <input
            type="datetime-local"
            value={value}
            onChange={(e) => {
               onChange(e.target.value);
            }}
         />
      </div>
   );
};

export default DateTimePicker;
