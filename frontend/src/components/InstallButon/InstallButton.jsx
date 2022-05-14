import React, { useEffect, useState } from "react";
import useInstall from "../../util/useInstall";
import Button from "../shared/Button/Button";

const InstallButton = () => {
   const [prompt, promptToInstall] = useInstall();

   return (
      <Button
         onClick={() => {
            promptToInstall();
         }}
         icon="install_desktop"
         className="fullwidth-button"
      >
         Install App
      </Button>
   );
};

export default InstallButton;
