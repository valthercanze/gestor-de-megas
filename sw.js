var C="megas-v2";
self.addEventListener("install",function(e){e.waitUntil(caches.open(C).then(function(c){return c.addAll(["./","index.html","manifest.json","icon-192.png","icon-512.png"])}));self.skipWaiting()});
self.addEventListener("activate",function(e){e.waitUntil(clients.claim())});
self.addEventListener("fetch",function(e){if(e.request.method!=="GET")return;e.respondWith(fetch(e.request).then(function(r){var c=r.clone();caches.open(C).then(function(k){k.put(e.request,c)});return r}).catch(function(){return caches.match(e.request)}))});
