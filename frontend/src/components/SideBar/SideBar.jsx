import React from "react";
import IconButton from "../shared/IconButton/IconButton";
import "./style.scss";

const SideBar = ({ className, username }) => {
   return (
      <div className="side-bar">
         <div className="greeter-container">Hello, {username}!</div>
      </div>
   );
};

export default SideBar;
