import React, { useEffect, useState } from "react";
import Button from "../shared/Button/Button";

const InstallButton = () => {
   const [event, setEvent] = useState(null);

   useEffect(() => {
      window.addEventListener("beforeinstallprompt", (e) => {
         e.preventDefault();
         setEvent(e);
      });
   }, []);

   return (
      <Button
         onClick={() => {
            if (event) {
               event.prompt();
            } else {
               alert(
                  "To install the app look for Add to Homescreen or Install in your browser's menu"
               );
            }
         }}
         icon="install_desktop"
         className="fullwidth-button"
      >
         Install on device
      </Button>
   );
};

export default InstallButton;
