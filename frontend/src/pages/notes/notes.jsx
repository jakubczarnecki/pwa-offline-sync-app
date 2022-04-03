import React, { useContext } from "react";
import "./style.scss";
import { dataContext, DataProvider } from "../../context/dataContext";
import Button from "../../components/shared/Button/Button";

const NotesPage = () => {
   const { state, dispatch } = useContext(dataContext);

   const handleLogout = (e) => {
      e.preventDefault();

      dispatch({
         type: "LOGOUT",
      });
   };

   return (
      <section className="notes-page">
         <div className="top-bar">
            <p className="greeter">
               Hello, <b>{state.username}!</b>
            </p>
            <Button icon="logout" className="log-out" onClick={handleLogout}>
               Wyloguj
            </Button>
         </div>
      </section>
   );
};

export default NotesPage;
