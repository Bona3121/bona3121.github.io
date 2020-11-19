importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

if (workbox)
  console.log(`Workbox berhasil dimuat`);
else
  console.log(`Workbox gagal dimuat`);

workbox.precaching.precacheAndRoute(
     [
	 { url: '/', revision: '1' },
     { url: '/index.html', revision: '1' },
	 { url: '/teambola.html', revision: '1' },
	 { url: '/nav.html', revision: '1' },
	 { url: '/push.js', revision: '1' },
	 { url: '/manifest.json', revision: '1' },
	 { url: '/service-worker.js', revision: '1' },
	 { url: '/pages/home.html', revision: '1' },
	 { url: '/pages/area.html', revision: '1' },
	 { url: '/pages/standing.html', revision: '1' },
	 { url: '/pages/saved.html', revision: '1' },
	 { url: '/img/icon.png', revision: '1' },
	 { url: '/img/icon2.png', revision: '1' },
	 { url: '/img/kosong.png', revision: '1' },
	 { url: '/img/logo2.png', revision: '1' },
	 { url: '/img/tes.png', revision: '1' },
	 { url: '/css/materialize.min.css', revision: '1' },
	 { url: '/js/api.js', revision: '1' },
	 { url: '/js/db.js', revision: '1' },
	 { url: '/js/idb.js', revision: '1' },
	 { url: '/js/materialize.min.js', revision: '1' },
	 { url: '/js/nav.js', revision: '1' },
	 { url: '/js/register-sw.js', revision: '1' },
	 { url: '/js/template.js', revision: '1' },
	 ],
	 {

      ignoreURLParametersMatching: [/.*/],

     }
     );
	 
workbox.routing.registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'cotephio'
    })
);

   workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  workbox.strategies.cacheFirst({
    cacheName: 'gambar',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 hari
      }),
    ],
  }),
);


    workbox.routing.registerRoute(
        new RegExp('https://api.football-data.org/'),
        workbox.strategies.staleWhileRevalidate()
        )
		

workbox.routing.registerRoute(
  new RegExp('/pages/'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'pages'
    })
);


self.addEventListener('push', function (event) {
  var body;
  if (event.data) {
    body = event.data.text();
  } else {
    body = 'Push message !';
  }
  var options = {
    body: body,
    icon: 'img/tes.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };
  event.waitUntil(
    self.registration.showNotification('Push Notification', options)
  );
});
