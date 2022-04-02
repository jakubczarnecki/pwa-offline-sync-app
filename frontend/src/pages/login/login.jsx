import React, { useState, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import TextInput from "../../components/TextInput/TextInput";
import { dataContext } from "../../context/dataContext";
import "./style.scss";

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

   const handleLogin = () => {
      dispatch({
         type: "LOGIN",
         payload: {
            username,
         },
      });
   };

   return (
      <section className="login-page">
         <div className="header">
            <h2>
               Start planning <br /> today!
            </h2>
            <p className="section-title">{"It's totally free!"}</p>
         </div>
         <Card className="login-box-wrapper">
            <p className="section-title">
               Enter your username <br /> <strong>to plan your day</strong>
            </p>

            <TextInput
               label="Username"
               placeholder="Username"
               value={username}
               onChange={(e) => setUsername(e.target.value)}
            />

            <Button icon="send" onClick={handleLogin}>
               Lets go!
            </Button>
         </Card>
      </section>
   );
};

export default LoginPage;
