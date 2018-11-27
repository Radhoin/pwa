// Files to cache
var cacheName = 'rti-application';
var appShellFiles = [
  '/pwa/index.html',
  '/pwa/static/css/main.dc4f9fba.css',
  '/pwa/static/js/main.64dbd5b7.js'
];

// Installing Service Worker
self.addEventListener('install', function(e) {
  console.log('[Service Worker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[Service Worker] Caching all: app shell and content');
      return cache.addAll(appShellFiles);
    })
  );
});

// Fetching content using Service Worker
self.addEventListener('fetch', function(e) {
          console.log('[Service Worker] Caching new resource:');
});
