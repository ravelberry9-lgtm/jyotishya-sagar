/* Minimal service worker — required for PWA installability.
   Uses network-first with no offline cache. Update version
   string to invalidate any future caches. */
const VERSION = 'jyotishya-sagar-v1';

self.addEventListener('install', function(event){
  self.skipWaiting();
});

self.addEventListener('activate', function(event){
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event){
  // Network-first; fall through to whatever the browser does on failure.
  // Required so the browser treats the page as PWA-installable.
  event.respondWith(
    fetch(event.request).catch(function(){
      return new Response('', {status: 504, statusText: 'offline'});
    })
  );
});
