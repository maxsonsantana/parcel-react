const STATIC_FILES = ['/', '/index.html'];
const urlListForNetworkFirst = []; //external url e/or apis
const urlListForCacheFirst = ['https://localhost:5050']; //localhost e/or hosted domain

const STATIC_CACHE = 'static-v1';
const DINAMYC_CACHE = 'dynamic-v2';

self.addEventListener('install', event => {
  console.log('[Service Worker] Installing Service Worker ...', {event});

  event.waitUntil(
    caches.open(STATIC_CACHE).then(cache => {
      console.log('[Service Worker] Precaching App Shell');
      cache.addAll(STATIC_FILES);
    }),
  );
});

self.addEventListener('activate', event => {
  console.log('[Service Worker] Activating Service Worker ....', {event});

  event.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(
        keyList.map(key => {
          if (key !== STATIC_CACHE && key !== DINAMYC_CACHE) {
            console.log('[Service Worker] Removing old cache.', key);
            return caches.delete(key);
          }
        }),
      );
    }),
  );

  return self.clients.claim();
});

self.addEventListener('fetch', event => {
  trimCache(DINAMYC_CACHE, 50);
  const requestUrl = event.request.url;

  if (urlListForNetworkFirst.find(url => requestUrl.includes(url))) 
    return event.respondWith(NetworkFirst(event, DINAMYC_CACHE));

  if (urlListForCacheFirst.find(url => requestUrl.includes(url)))
    return event.respondWith(CacheFirst(event, STATIC_CACHE));

  return event.respondWith(CacheFirst(event, DINAMYC_CACHE));
});

const trimCache = (cacheName, maxItems) => {
  caches.open(cacheName).then(cache =>
    cache.keys().then(keys => {
      if (keys.length > maxItems)
        cache.delete(keys[0]).then(trimCache(cacheName, maxItems));
    }),
  );
};

const NetworkFirst = (event, storage) => {
  return fetch(event.request)
    .then(res =>
      caches.open(storage).then(cache => {
        cache.put(event.request.url, res.clone());
        return res;
      }),
    )
    .catch(err =>
      caches
        .match(event.request)
        .catch(() =>
          caches.open(STATIC_CACHE).then(cache => cache.match('/index.html')),
        ),
    );
};

const CacheFirst = (event, storage) => {
  return caches.match(event.request).then(response => {
    if (response) return response;

    return fetch(event.request)
      .then(res => {
        return caches.open(storage).then(cache => {
          cache.put(event.request.url, res.clone());
          return res;
        });
      })
      .catch(err => {
        if (event.request.headers.get('accept').includes('text/html')) {
          return caches
            .open(STATIC_CACHE)
            .then(cache => cache.match('/index.html'));
        }
      });
  });
};
