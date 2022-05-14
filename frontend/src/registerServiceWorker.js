import axios from "axios";

export const registerServiceWorker = () => {
   const publicVapidKey =
      "BI4yCndWx2BXIhix5BnKpeEsmxfQ-urbILicch3-79xrvwoKURHbqsjnB0L1YMXh1YEs_p1ehludseAkrFPxUzw";

   if ("serviceWorker" in navigator) {
      // Register service worker
      navigator.serviceWorker.register("sw.js").then(async (reg) => {
         // Request notification permissions
         const permission = await Notification.requestPermission();
         if (permission !== "granted") {
            throw new Error("Permission not granted for Notification");
         }

         // Subscribe to push
         const subscription = await reg.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: publicVapidKey,
         });

         await axios.post("http://localhost:8800/api/notes/subscribe", subscription);
      });
   }
};
