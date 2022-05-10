import React from "react";
import Button from "../shared/Button/Button";
import "./style.scss";
import UseViewport from "../shared/UseViewport/UseViewport";
import RoundButton from "../shared/RoundButton/RoundButton";

const BottomBar = ({ className }) => {
   const { width } = UseViewport();
   const breakpoint = 900;

   return (
      <div className="bottom-bar">
         <h4>You can install our application on your device</h4>
         {width > breakpoint ? (
            <div className="buttons-wrapper">
               <Button icon="download" onClick={() => {}}>
                  Install on device
               </Button>
               <Button icon="close" onClick={() => {}}>
                  Close
               </Button>
            </div>
         ) : (
            <div className="buttons-wrapper">
               <RoundButton icon="download" onClick={() => {}} />
               <RoundButton icon="close" onClick={() => {}} />
            </div>
         )}
      </div>
   );
};

export default BottomBar;
