import React from "react";
import DatePicker from "react-date-picker";
import "./style.scss";

const DateTimePicker = (props, ref) => {
   const { label, value, onChange, hidden, className, ...rest } = props;

   return (
      <div className={`date-time-picker-wrapper ${hidden && "hidden"}  ${className}`}>
         <p>{label}</p>
         <DatePicker
            value={value}
            onChange={onChange}
            format="dd/MM/yyyy"
            openCalendarOnFocus={true}
            locale="eng"
            ref={ref}
            {...rest}
         />
      </div>
   );
};

export default React.forwardRef(DateTimePicker);
