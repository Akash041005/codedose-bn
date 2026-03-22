const CACHE_NAME = 'codedose-v1';
const OFFLINE_URL = '/offline.html';
const NOTIFICATION_INTERVAL = 2 * 60 * 60 * 1000;

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/offline.html',
  '/favicon.svg',
  '/icon-192.svg',
  '/icon-512.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match(OFFLINE_URL);
      })
    );
  }
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'ENABLE_NOTIFICATIONS') {
    startNotificationScheduler();
  }
});

let notificationScheduler = null;

function startNotificationScheduler() {
  if (notificationScheduler) {
    clearInterval(notificationScheduler);
  }
  
  showNotification('Your 2 DSA questions are waiting!');
  
  notificationScheduler = setInterval(() => {
    showNotification('Your 2 DSA questions are waiting!');
  }, NOTIFICATION_INTERVAL);
}

async function showNotification(message) {
  if (Notification.permission === 'granted') {
    await self.registration.showNotification('CodeDose', {
      body: message,
      icon: '/icon-192.svg',
      badge: '/icon-192.svg',
      tag: 'codedose-reminder',
      requireInteraction: false,
      vibrate: [200, 100, 200],
      data: {
        url: '/'
      }
    });
  }
}

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if (client.url === '/' && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow('/');
      }
    })
  );
});
