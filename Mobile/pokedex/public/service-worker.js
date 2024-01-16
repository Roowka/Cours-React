const PRECACHE_NAME = "app-shell";
const POKE_CACHE = "poke-cache";

self.addEventListener("install", function (event) {
  console.log("Installing...");
  caches.open(PRECACHE_NAME).then(function (cache) {
    cache.addAll([
      "/",
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css",
      "/static/js/main.1accf93b.js",
      "/static/js/main.1accf93b.js.map",
      "/static/css/main.e6c13ad2.css",
      "/static/css/main.e6c13ad2.css.map",
      "/static/favicon.ico",
      "/manifest.json",
    ]);
  });
});

self.addEventListener("activate", function (event) {
  console.log("Activation...");
});

self.addEventListener("fetch", function (event) {
  event.preventDefault();
  console.log("fetched", event.request.url);
  event.respondWith(
    caches.match(event.request.url).then(function (response) {
      if (response) {
        return response;
      } else {
        return fetch(event.request).then(function (fetchedResponse) {
          caches.open(POKE_CACHE).then(function (cache) {
            cache.put(event.request.url, fetchedResponse);
          });
        });
      }
    })
  );
});
