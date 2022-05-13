self.addEventListener("install", (e) => {
   console.log("install");
   e.waitUntil(
      caches.open("todoList").then((cache) => {
         return cache
            .addAll([`images`, `static/js/bundle.js`])
            .then(() => self.skipWaiting());
      })
   );

   Notification.requestPermission();
});

self.addEventListener("activate", (event) => {
   console.log("activate");
   event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
   event.respondWith(
      (async function () {
         var cache = await caches.open("todoRequests");
         var cachedFiles = await cache.match(event.request);

         try {
            var response = await fetch(event.request);
            await cache.put(event.request, response.clone());
            return response;
         } catch {
            if (cachedFiles) {
               return cachedFiles;
            }
         }
      })()
   );
});
