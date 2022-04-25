import React, { useContext } from "react";
import Button from "../shared/Button/Button";
import "./style.scss";
import { dataContext } from "../../context/dataContext";

const SideBar = ({ className, username, modal }) => {
   const { dispatch } = useContext(dataContext);

   const handleLogout = (e) => {
      e.preventDefault();

      dispatch({
         type: "LOGOUT",
      });
   };

   return (
      <div className={`side-bar ${className}`}>
         <div className="greeter-container">
            <div className="greeter-message section-title ">Hello, {username}!</div>
         </div>
         <div className="options-container">
            <div className="options-container-top">
               <Button icon="add_circle" className="fullwidth-button" onClick={modal}>
                  Add note
               </Button>
            </div>
            <div className="options-container-bottom">
               <Button icon="install_desktop" className="fullwidth-button">
                  Install on device
               </Button>
               <Button onClick={handleLogout} icon="logout" className="fullwidth-button">
                  Logout
               </Button>
            </div>
         </div>
      </div>
   );
};

export default SideBar;
