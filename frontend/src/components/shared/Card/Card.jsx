import React from "react";
import "./style.scss";

const Card = ({ children, className }) => {
   return <div className={`card-wrapper ${className ? className : ""}`}>{children}</div>;
};

export default Card;
