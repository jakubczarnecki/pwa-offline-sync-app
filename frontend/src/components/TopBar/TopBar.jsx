import React, { useContext } from "react";
import Button from "../shared/Button/Button";
import "./style.scss";
import { dataContext } from "../../context/dataContext";

const TopBar = ({ username, setModalOpen }) => {
   const { dispatch } = useContext(dataContext);

   const handleLogout = (e) => {
      e.preventDefault();

      dispatch({
         type: "LOGOUT",
      });
   };

   return (
      <div className="top-bar">
         <div className="container">
            <h4>Hello, {username}!</h4>
            <div className="buttons-wrapper">
               <Button icon="add_circle" onClick={() => setModalOpen(true)}>
                  Add note
               </Button>
               <Button icon="logout" onClick={handleLogout}>
                  Logout
               </Button>
            </div>
         </div>
      </div>
   );
};

export default TopBar;
