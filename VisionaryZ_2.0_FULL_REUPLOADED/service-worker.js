self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('visionaryz').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/style/global.css',
        '/style/animations.css'
      ]);
    })
  );
});
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
