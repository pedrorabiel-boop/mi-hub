// Service worker: permite abrir la app sin conexión.
// Usa "red primero": con internet siempre ves la última versión; sin internet, la copia guardada.
// Si agregas archivos nuevos, súmalos a ASSETS y sube el número de versión.
const CACHE = 'mi-hub-v4';
const ASSETS = [
  './',
  'index.html',
  'ejercicio.html',
  'skincare.html',
  'entrenar.html',
  'routines.js',
  'manifest.webmanifest',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/apple-touch-icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Red primero (para ver siempre lo último), caché como respaldo sin conexión.
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request, { cache: 'no-cache' })
      .then(res => {
        if (res.ok && new URL(event.request.url).origin === self.location.origin) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(event.request, copy));
        }
        return res;
      })
      .catch(() => caches.match(event.request, { ignoreSearch: true }))
  );
});
