import React from "react";
import { useState } from "react";
import Button from "../shared/Button/Button";
import "./style.scss";

const BottomBar = ({ className }) => {
   const [barOpen, setBarOpen] = useState(true);

   const handleClose = () => {
      setBarOpen(false);
      document.body.style.overflow = "visible";
   };

   // if (barOpen)
   return (
      <div className="bottom-bar">
         <div className="container">
            <h4>You can install our application on your device</h4>
            <div className="buttons-wrapper">
               <Button icon="download" onClick={() => {}}>
                  Install on device
               </Button>
               <Button icon="close" onClick={handleClose}>
                  Close
               </Button>
            </div>
         </div>
      </div>
   );
};

export default BottomBar;
