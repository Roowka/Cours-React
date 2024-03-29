const APP_SHELL_CACHE = "app-shell";
const POKE_CACHE = "poke-cache";
const POKE_DATA_SPRITE = "poke-sprite";

const ROOT_URL = "http://127.0.0.1:3000";

const APP_SHELL_FILES = [
  "/",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css",
  "/static/js/main.1accf93b.js",
  "/static/js/main.1accf93b.js.map",
  "/static/css/main.e6c13ad2.css",
  "/static/css/main.e6c13ad2.css.map",
  "/static/favicon.ico",
  "/manifest.json",
  "/icons/psyco.png",
];

// Mise en cache des services indispensables
// Install la première fois, lié au navigateur
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

function getPlaceHolder() {
  return caches.open(APP_SHELL_CACHE).then(function (cache) {
    return cache.match("/sprite/psyco.png");
  });
}

self.addEventListener("fetch", function (event) {
  if (APP_SHELL_FILES.includes(event.request.url.replace(ROOT_URL, ""))) {
    event.respondWith(getFromCache(APP_SHELL_CACHE, event.request));
  } else if (event.request.url.startWith("https://pokeapi.co/api/")) {
    event.respondWith(getFromCacheOrNetwork(POKE_CACHE, event.request));
  } else if (event.request.url.startWith("")) {
    event.respondWith(
      getFromCacheOrNetwork(POKE_DATA_SPRITE, event.request, getPlaceHolder)
    );
  } else {
    event.respondWith(fetch(event.request));
  }
});
