import React from "react";
import "./style.scss";

const NotFoundPage = () => {
   return (
      <section className="not-found">
         <h2>
            <h1>404</h1> <br /> not found!
         </h2>
         <img src={"/cat.png"} alt="sad cat" />
      </section>
   );
};

export default NotFoundPage;
