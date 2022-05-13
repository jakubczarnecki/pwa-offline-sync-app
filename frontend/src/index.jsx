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

serviceWorkerRegistration.unregister();
// if ("serviceWorker" in navigator) {
//    navigator.serviceWorker.register("sw.js").then((registration) => {
//       console.log("ServiceWorker registration successful with scope: ", registration);
//    });
// }

reportWebVitals();
