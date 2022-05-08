import React, { useContext, useRef } from "react";
import Button from "../shared/Button/Button";
import IconButton from "../shared/IconButton/IconButton";
import "./style.scss";
import { dataContext, DataProvider } from "../../context/dataContext";
import InstallButton from "../InstallButon/InstallButton";

const TopBar = ({ className, username, modal }) => {
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

   const handleModal = (e) => {
      e.preventDefault();

      modal(e);
      drawer.current.className = "options-container hidden";
      document.body.style.overflow = "hidden";
   };

   return (
      <div className="top-bar">
         <h4>Hello, {username}!</h4>
         <div className="buttons-wrapper">
            <Button icon="add_circle" onClick={handleModal}>
               Add note
            </Button>
            <Button icon="logout" onClick={handleLogout}>
               Logout
            </Button>
         </div>
      </div>
   );
};

export default TopBar;
