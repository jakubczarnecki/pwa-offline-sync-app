import React from "react";
import Button from "../shared/Button/Button";
import "./style.scss";

const BottomBar = ({ className }) => {
   return (
      <div className="bottom-bar">
         <h4>You can install our application on your device</h4>
         <div className="buttons-wrapper">
            <Button icon="download" onClick={() => {}}>
               Install on device
            </Button>
         </div>
      </div>
   );
};

export default BottomBar;
