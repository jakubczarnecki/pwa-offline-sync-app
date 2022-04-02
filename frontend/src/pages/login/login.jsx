import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import TextInput from "../../components/TextInput/TextInput";
import "./style.scss";

const LoginPage = () => {
   const [username, setUsername] = useState("");

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

            <Button icon="send">Lets go!</Button>
         </Card>
      </section>
   );
};

export default LoginPage;
