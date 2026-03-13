// ADRIAN Master Trainer Service Worker v1.9
const CACHE = 'adrian-trainer-v1.9';

const APP_SHELL = [
  './',
  './index.html',
  './guide.html',
  './manifest.json',
  './mt-icon-192.png',
  './mt-icon-512.png',
  'https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&family=JetBrains+Mono:wght@400;600&display=swap'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE).then(function(cache) {
      return cache.addAll(APP_SHELL).catch(function() {
        return cache.addAll(['./index.html', './manifest.json']);
      });
    }).then(function() { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)));
    }).then(function() { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function(e) {
  if (e.request.method !== 'GET') return;
  var isOwn = new URL(e.request.url).origin === self.location.origin;
  e.respondWith(
    isOwn
      ? caches.match(e.request).then(function(cached) {
          return cached || fetch(e.request).then(function(res) {
            if (res && res.status === 200) {
              caches.open(CACHE).then(c => c.put(e.request, res.clone()));
            }
            return res;
          }).catch(function() { return caches.match('./index.html'); });
        })
      : fetch(e.request).then(function(res) {
          if (res && res.status === 200)
            caches.open(CACHE).then(c => c.put(e.request, res.clone()));
          return res;
        }).catch(function() { return caches.match(e.request); })
  );
});
