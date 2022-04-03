import React from "react";
import Button from "../shared/Button/Button";
import IconButton from "../shared/IconButton/IconButton";
import "./style.scss";

const SideBar = ({ className, username }) => {
   return (
      <div className="side-bar">
         <div className="greeter-container">
            <div className="greeter-message section-title ">Hello, {username}!</div>
         </div>
         <div className="options-container">
            <div className="options-container-top">
               <Button icon="add_circle" className="fullwidth-button">
                  Add note
               </Button>
            </div>
            <div className="options-container-bottom">
               <Button icon="install_desktop" className="fullwidth-button">
                  Install on device
               </Button>
               <Button icon="logout" className="fullwidth-button">
                  Logout
               </Button>
            </div>
         </div>
      </div>
   );
};

export default SideBar;
