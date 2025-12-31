const CACHE_NAME = 'sincro-v1';
const assets = [
  'index.html',
  'avaliacao.html',
  'personalizar.html',
  'liberacao.html',
  'certificado.html',
  'style.css', // se você tiver um arquivo de estilo separado
  'logo-192.png',
  'logo-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
