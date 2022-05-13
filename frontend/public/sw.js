self.addEventListener("install", (e) => {
   console.log("install");
   e.waitUntil(
      caches.open("todoList").then((cache) => {
         return cache
            .addAll([`images`, `static/js/bundle.js`])
            .then(() => self.skipWaiting());
      })
   );
});

self.addEventListener("activate", (event) => {
   console.log("activate");
   event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
   console.log("fetch");
   event.respondWith(
      caches.match(event.request, { ignoreSearch: true }).then((response) => {
         return response || fetch(event.request);
      })
   );
});
