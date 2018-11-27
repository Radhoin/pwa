// Files to cache
var cacheName = 'Adi-app-v1';
var appShellFiles = [
  '/pwa/index.html',
  '/pwa/static/css/main.dc4f9fba.css',
  '/pwa/static/js/main.2ca4883c.js'
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
