import React from "react";
import "./style.scss";

const NotFoundPage = () => {
   return (
      <section className="not-found">
         <div>
            <span className="huge-title">404</span>
            <h2>not found!</h2>
         </div>
         <img src={"images/cat.png"} alt="sad cat" />
      </section>
   );
};

export default NotFoundPage;
