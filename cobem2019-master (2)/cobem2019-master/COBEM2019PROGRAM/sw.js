const version = "0.6.18";
const cacheName = `cobem2019-${version}`;
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(cacheName).then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/.travis.yml',
                '/gulpfile.js',
                '/manifest.json',
                '/sw.js',
                '/css/bootstrap.css',
                '/css/font-awesome.min.css',
                '/css/main.css',
                '/fonts/fontawesome-webfont.eot',
                '/fonts/fontawesome-webfont.svg',
                '/fonts/fontawesome-webfont.ttf',
                '/fonts/fontawesome-webfont.woff',
                '/fonts/fontawesome-webfont.woff2',
                '/fonts/FontAwesome.otf',
                '/img/icone.png',
                '/js/jquery-3.4.1.js'

            ])
                .then(() => self.skipWaiting());
        })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.open(cacheName)
            .then(cache => cache.match(event.request, { ignoreSearch: true }))
            .then(response => {
                return response || fetch(event.request);
            })
    );
});