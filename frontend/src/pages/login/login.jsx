import React, { useState, useContext, useEffect } from "react";
import "./style.scss";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/shared/Button/Button";
import Card from "../../components/shared/Card/Card";
import TextInput from "../../components/shared/TextInput/TextInput";
import { dataContext } from "../../context/dataContext";
import { loginUser } from "../../actions/userActions";

const LoginPage = () => {
   const [username, setUsername] = useState("");
   const { state, dispatch } = useContext(dataContext);
   const navigate = useNavigate();
   const location = useLocation();

   // If already logged in redirect to notes page
   useEffect(() => {
      if (state.username) {
         const from = location.state?.from?.pathname || "/";
         navigate(from, { replace: true });
      }
   }, [state]);

   useEffect(() => {
      const lsUsername = localStorage.getItem("username");
      if (lsUsername) {
         loginUser(lsUsername);
      }
   }, []);

   const handleLogin = (e) => {
      e.preventDefault();
      loginUser(dispatch, username);
   };

   return (
      <section className="login-page">
         <div className="login-wrapper">
            <div className="header">
               <img src={"images/logo_nobg.png"} alt="tick" />
               <h2>
                  Start planning <br /> today!
               </h2>
               <p className="section-title">{"It's totally free!"}</p>
            </div>
            <Card className="login-box-wrapper">
               <p className="section-title">
                  Enter your username <br /> <strong>to plan your day</strong>
               </p>
               <form onSubmit={handleLogin}>
                  <TextInput
                     label="Username"
                     placeholder="Username"
                     value={username}
                     onChange={(e) => setUsername(e.target.value)}
                  />

                  <Button icon="login" onClick={handleLogin}>
                     Let&apos;s go!
                  </Button>
               </form>
            </Card>
         </div>
      </section>
   );
};

export default LoginPage;
