import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.scss";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
   <React.StrictMode>
      <App />
   </React.StrictMode>
);

// serviceWorkerRegistration.unregister();
if ("serviceWorker" in navigator) {
   const requestNotificationPermission = async () => {
      const permission = await window.Notification.requestPermission();
      if (permission !== "granted") {
         throw new Error("Permission not granted for Notification");
      }
   };

   navigator.serviceWorker.register("sw.js").then(() => {
      requestNotificationPermission()
         .then(() => {
            console.log("Notifications allowed");
         })
         .catch((e) => {
            console.log("Notifications not allowed", e);
         });
   });
}

reportWebVitals();
