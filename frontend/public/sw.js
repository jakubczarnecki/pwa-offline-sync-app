self.addEventListener("install", (e) => {
   e.waitUntil(
      caches.open("todoList").then(async (cache) => {
         await cache.addAll([`images`, `static/js/bundle.js`]);
         return self.skipWaiting();
      })
   );
});

self.addEventListener("activate", (event) => {
   event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
   event.respondWith(
      (async function () {
         const cache = await caches.open("todoRequests");
         const cachedFiles = await cache.match(event.request);

         let response = null;
         try {
            response = await fetch(event.request);
            await cache.put(event.request, response.clone());
            return response;
         } catch {
            if (response) {
               return response;
            }
            if (cachedFiles) {
               return cachedFiles;
            }
         }
      })()
   );
});

self.addEventListener("push", (e) => {
   const data = e.data.json();
   self.registration.showNotification(data.title, {
      body: data.body,
      image: "./images/logo192.png",
   });
});
