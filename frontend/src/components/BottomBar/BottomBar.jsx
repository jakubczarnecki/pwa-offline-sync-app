import React from "react";
import InstallButton from "../InstallButon/InstallButton";
import Button from "../shared/Button/Button";
import "./style.scss";

const BottomBar = ({ handleClose }) => {
   return (
      <div className="bottom-bar">
         <div className="container">
            <h4>You can install our application on your device</h4>
            <div className="buttons-wrapper">
               <InstallButton />
               <Button icon="close" onClick={handleClose}>
                  Close
               </Button>
            </div>
         </div>
      </div>
   );
};

export default BottomBar;
