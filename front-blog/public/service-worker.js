const APP_SHELL_CACHE = "app-shell";
const POST_CACHE = "post-cache";

const ROOT_URL = "http://127.0.0.1:3000";

const API_URL = "http://127.0.0.1:3001";

const APP_SHELL_FILES = [
  "/",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css",
  "/static/js/592.bcfbfc73.chunk.js",
  "/static/js/592.bcfbfc73.chunk.js.map",
  "/static/js/main.1accf93b.js",
  "/static/js/main.1accf93b.js.map",
  "/static/css/main.e6c13ad2.css",
  "/static/favicon.ico",
  "/static/manifest.json",
];

self.addEventListener("install", function (event) {
  console.log("Installing...");
  event.waitUntil(
    caches.open(APP_SHELL_CACHE).then(function (cache) {
      cache.addAll(APP_SHELL_FILES);
    })
  );
});

self.addEventListener("activate", function (event) {
  console.log("Activation...");
});

function getFromCache(cache, request) {
  return caches.open(cache).then(function (cache) {
    return cache.match(request).then(function (cachedResult) {
      if (cachedResult) {
        return cachedResult;
      } else {
        console.log("Couldn't find " + request.url + " in cache.");
      }
    });
  });
}

function getFromCacheOrNetwork(cache, request, onError = null) {
  return caches.open(cache).then(function (cache) {
    return cache.match(request).then(function (cachedResult) {
      if (cachedResult) {
        return cachedResult;
      } else {
        console.log("Couldn't find " + request.url + " in cache.");
        return fetch(request)
          .then(function (response) {
            cache.put(request, response.clone());
            return response;
          })
          .catch(function (error) {
            console.log("Error while fetching " + request.url + ": " + error);
            onError();
          });
      }
    });
  });
}

self.addEventListener("fetch", function (event) {
  if (APP_SHELL_FILES.includes(event.request.url.replace(ROOT_URL, ""))) {
    event.respondWith(getFromCache(POST_CACHE, event.request));
  } else if (event.request.url.startsWith(API_URL)) {
    event.respondWith(getFromCacheOrNetwork(POST_CACHE, event.request));
  } else {
    event.respondWith(fetch(event.request));
  }
});
