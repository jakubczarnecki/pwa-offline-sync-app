import React, { useContext, useRef } from "react";
import Button from "../shared/Button/Button";
import IconButton from "../shared/IconButton/IconButton";
import "./style.scss";
import { dataContext, DataProvider } from "../../context/dataContext";

const SideBar = ({ className, username, modal }) => {
   const { state, dispatch } = useContext(dataContext);

   const drawer = useRef(null);

   const toggleDrawer = () => {
      let currentClass = drawer.current.className;
      drawer.current.className =
         currentClass === "options-container hidden"
            ? " options-container open"
            : "options-container hidden";
   };

   const handleLogout = (e) => {
      e.preventDefault();

      dispatch({
         type: "LOGOUT",
      });
   };

   return (
      <div className="side-bar">
         <div className="greeter-container">
            <div className="greeter-message category-title ">Hello, {username}!</div>
            <Button icon="menu" className="drawer-button" onClick={toggleDrawer}></Button>
         </div>

         <div ref={drawer} className="options-container hidden">
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
