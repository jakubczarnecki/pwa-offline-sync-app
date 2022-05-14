import React, { useState, useEffect } from "react";

const useInstall = () => {
   const [prompt, setPrompt] = useState(null);

   const promptToInstall = () => {
      if (prompt) {
         return prompt.prompt();
      }
      alert(
         "To install the app look for Add to Homescreen or Install in your browser's menu"
      );
   };

   useEffect(() => {
      const ready = (e) => {
         e.preventDefault();
         setPrompt(e);
      };

      window.addEventListener("beforeinstallprompt", ready);

      return () => {
         window.removeEventListener("beforeinstallprompt", ready);
      };
   }, []);

   return [prompt, promptToInstall];
};

export default useInstall;
