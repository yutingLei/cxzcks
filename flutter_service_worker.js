'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "acfd8953dd60c0f5aad18252bc412123",
"index.html": "dadfeb54bb7087423cbb60e1bb77737a",
"/": "dadfeb54bb7087423cbb60e1bb77737a",
"main.dart.js": "9bd67bf7e515db616ff6ebfc1f1985f1",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8bd887dbd697411267944158f3a83220",
"assets/AssetManifest.json": "4205a1ed9feaab681f01f961bc5f7e45",
"assets/NOTICES": "d10eacce13357a657e3b164da7617cfe",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "b3472243d25e65ec63aa2a99c3672a0d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "391ff5f9f24097f4f6e4406690a06243",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "52ce20cb7c1fac5faf218d921146ce7b",
"assets/fonts/MaterialIcons-Regular.otf": "70ceed30574d244354b928bd6335a9b5",
"assets/assets/%25E7%259B%25B8%25E5%2585%25B3%25E7%259F%25A5%25E8%25AF%2586-%25E7%25AC%25AC%25E5%2585%25AD%25E7%25AB%25A0%25EF%25BC%259A%25E5%259F%258E%25E5%25B8%2582%25E5%259C%25B0%25E7%2590%2586%25E5%25AD%25A6.json": "064e2ee8e543ca7796b122fe41cae079",
"assets/assets/%25E7%259B%25B8%25E5%2585%25B3%25E7%259F%25A5%25E8%25AF%2586-%25E7%25AC%25AC%25E4%25BA%258C%25E7%25AB%25A0%25EF%25BC%259A%25E5%259F%258E%25E5%25B8%2582%25E9%2581%2593%25E8%25B7%25AF%25E4%25BA%25A4%25E9%2580%259A%25E5%25B7%25A5%25E7%25A8%258B.json": "21775bf85f766c4886d6d210357cd746",
"assets/assets/%25E5%259F%258E%25E4%25B9%25A1%25E8%25A7%2584%25E5%2588%2592%25E5%258E%259F%25E7%2590%2586-%25E7%25AC%25AC%25E4%25BA%2594%25E7%25AB%25A0%25EF%25BC%259A%25E5%259B%25BD%25E5%259C%259F%25E7%25A9%25BA%25E9%2597%25B4%25E6%2580%25BB%25E4%25BD%2593%25E8%25A7%2584%25E5%2588%2592.json": "ed504147baa741fe6ff503113350a2ac",
"assets/assets/%25E5%259F%258E%25E4%25B9%25A1%25E8%25A7%2584%25E5%2588%2592%25E5%258E%259F%25E7%2590%2586-%25E7%25AC%25AC%25E5%2585%25AB%25E7%25AB%25A0%25EF%25BC%259A%25E9%2595%2587%25E3%2580%2581%25E4%25B9%25A1%25E5%2592%258C%25E6%259D%2591%25E5%25BA%2584%25E8%25A7%2584%25E5%2588%2592.json": "6f529b7f308aebff70d1a5c5f553b437",
"assets/assets/%25E7%259B%25B8%25E5%2585%25B3%25E7%259F%25A5%25E8%25AF%2586-%25E7%25AC%25AC%25E4%25BA%2594%25E7%25AB%25A0%25EF%25BC%259A%25E5%259F%258E%25E5%25B8%2582%25E7%25BB%258F%25E6%25B5%258E%25E5%25AD%25A6.json": "9ba58c2216d15dab2e556da2cc39e998",
"assets/assets/%25E7%259B%25B8%25E5%2585%25B3%25E7%259F%25A5%25E8%25AF%2586-%25E7%25AC%25AC%25E4%25B8%2580%25E7%25AB%25A0%25EF%25BC%259A%25E5%25BB%25BA%25E7%25AD%2591%25E5%25AD%25A6.json": "aeeaad2e10a35a499ec680ab4d7452da",
"assets/assets/%25E7%25AE%25A1%25E7%2590%2586%25E4%25B8%258E%25E6%25B3%2595%25E8%25A7%2584-%25E8%25A1%258C%25E6%2594%25BF%25E6%25B3%2595%25E5%25AD%25A6%25E5%259F%25BA%25E7%25A1%2580.json": "a78e1391b85750bf077898664eb8a4eb",
"assets/assets/%25E7%259B%25B8%25E5%2585%25B3%25E7%259F%25A5%25E8%25AF%2586-%25E7%25AC%25AC%25E5%259B%259B%25E7%25AB%25A0%25EF%25BC%259A%25E4%25BF%25A1%25E6%2581%25AF%25E6%258A%2580%25E6%259C%25AF%25E5%259C%25A8%25E5%259F%258E%25E5%25B8%2582%25E8%25A7%2584%25E5%2588%2592%25E4%25B8%25AD%25E7%259A%2584%25E5%25BA%2594%25E7%2594%25A8.json": "9e5a6cf8ce6be1f6dd6ebfad56b951c7",
"assets/assets/%25E7%259B%25B8%25E5%2585%25B3%25E7%259F%25A5%25E8%25AF%2586-%25E7%25AC%25AC%25E4%25B8%2589%25E7%25AB%25A0%25EF%25BC%259A%25E5%259F%258E%25E5%25B8%2582%25E5%25B8%2582%25E6%2594%25BF%25E5%2585%25AC%25E7%2594%25A8%25E8%25AE%25BE%25E6%2596%25BD.json": "1a49b4691391b5e0f9c8f9acc1d43225",
"assets/assets/%25E7%259B%25B8%25E5%2585%25B3%25E7%259F%25A5%25E8%25AF%2586-%25E7%25AC%25AC%25E5%2585%25AB%25E7%25AB%25A0%25EF%25BC%259A%25E5%259F%258E%25E5%25B8%2582%25E7%2594%259F%25E6%2580%2581%25E4%25B8%258E%25E5%259F%258E%25E5%25B8%2582%25E7%258E%25AF%25E5%25A2%2583.json": "5c04aece65bad8ac95dfbc8bf421fde3",
"assets/assets/%25E7%25AE%25A1%25E7%2590%2586%25E4%25B8%258E%25E6%25B3%2595%25E8%25A7%2584-%25E5%259B%25BD%25E5%259C%259F%25E7%25A9%25BA%25E9%2597%25B4%25E8%25A7%2584%25E5%2588%2592%25E8%25A7%2584%25E8%258C%2583.json": "148652ffcea2e7556a346d811577658c",
"assets/assets/%25E5%259F%258E%25E4%25B9%25A1%25E8%25A7%2584%25E5%2588%2592%25E5%258E%259F%25E7%2590%2586-%25E7%25AC%25AC%25E4%25B8%2583%25E7%25AB%25A0%25EF%25BC%259A%25E5%259F%258E%25E5%25B8%2582%25E8%25AF%25A6%25E7%25BB%2586%25E8%25A7%2584%25E5%2588%2592.json": "1939fcdeaafb7505a5e93b4de4c73f8a",
"assets/assets/%25E7%259B%25B8%25E5%2585%25B3%25E7%259F%25A5%25E8%25AF%2586-%25E7%25AC%25AC%25E4%25B8%2583%25E7%25AB%25A0%25EF%25BC%259A%25E5%259F%258E%25E5%25B8%2582%25E7%25A4%25BE%25E4%25BC%259A%25E5%25AD%25A6.json": "68402eda981fc63c156f476414aaac89",
"assets/assets/%25E7%25AE%25A1%25E7%2590%2586%25E4%25B8%258E%25E6%25B3%2595%25E8%25A7%2584-%25E5%259B%25BD%25E5%259C%259F%25E7%25A9%25BA%25E9%2597%25B4%25E8%25A7%2584%25E5%2588%2592%25E6%2594%25BF%25E7%25AD%2596%25E6%2596%2587%25E4%25BB%25B6.json": "ceb189db64926665415be70263246177",
"assets/assets/%25E5%259F%258E%25E4%25B9%25A1%25E8%25A7%2584%25E5%2588%2592%25E5%258E%259F%25E7%2590%2586-%25E7%25AC%25AC%25E5%258D%2581%25E7%25AB%25A0%25EF%25BC%259A%25E5%259F%258E%25E5%25B8%2582%25E8%25A7%2584%25E5%2588%2592%25E5%25AE%259E%25E6%2596%25BD.json": "e9a2d8da25f70ce79e6fa4f4a0efcdee",
"assets/assets/%25E5%259F%258E%25E4%25B9%25A1%25E8%25A7%2584%25E5%2588%2592%25E5%258E%259F%25E7%2590%2586-%25E7%25AC%25AC%25E4%25B8%2580%25E7%25AB%25A0%25EF%25BC%259A%25E5%259F%258E%25E5%25B8%2582%25E4%25B8%258E%25E5%259F%258E%25E5%25B8%2582%25E5%258F%2591%25E5%25B1%2595.json": "758c2b976a1061618c878abb5d0deaa3",
"assets/assets/%25E7%25AE%25A1%25E7%2590%2586%25E4%25B8%258E%25E6%25B3%2595%25E8%25A7%2584-%25E5%259B%25BD%25E5%259C%259F%25E7%25A9%25BA%25E9%2597%25B4%25E6%25B3%2595%25E5%25BE%258B%25E6%25B3%2595%25E8%25A7%2584.json": "667f896f2454fc32a2a08d21d3bc5798",
"assets/assets/%25E5%259F%258E%25E4%25B9%25A1%25E8%25A7%2584%25E5%2588%2592%25E5%258E%259F%25E7%2590%2586.json": "f8b60af9becec9fe6baf8a16a21cd4fb",
"assets/assets/%25E5%259F%258E%25E4%25B9%25A1%25E8%25A7%2584%25E5%2588%2592%25E5%258E%259F%25E7%2590%2586-%25E7%25AC%25AC%25E5%2585%25AD%25E7%25AB%25A0%25EF%25BC%259A%25E5%259F%258E%25E5%25B8%2582%25E8%25BF%2591%25E6%259C%259F%25E5%25BB%25BA%25E8%25AE%25BE%25E8%25A7%2584%25E5%2588%2592.json": "b5dddff44ae06453596e7bec0f1fcdf3",
"assets/assets/%25E5%259F%258E%25E4%25B9%25A1%25E8%25A7%2584%25E5%2588%2592%25E5%258E%259F%25E7%2590%2586-%25E7%25AC%25AC%25E4%25B8%2589%25E7%25AB%25A0%25EF%25BC%259A%25E5%259B%25BD%25E5%259C%259F%25E7%25A9%25BA%25E9%2597%25B4%25E8%25A7%2584%25E5%2588%2592%25E4%25BD%2593%25E7%25B3%25BB.json": "e5ad41b1fed9219c0b5394a97a198607",
"assets/assets/%25E5%259F%258E%25E4%25B9%25A1%25E8%25A7%2584%25E5%2588%2592%25E5%258E%259F%25E7%2590%2586-%25E7%25AC%25AC%25E4%25B9%259D%25E7%25AB%25A0%25EF%25BC%259A%25E5%2585%25B6%25E4%25BB%2596%25E4%25B8%25BB%25E8%25A6%2581%25E8%25A7%2584%25E5%2588%2592%25E7%25B1%25BB%25E5%259E%258B.json": "b93efd9f086de30208bde373d7121a78",
"assets/assets/%25E7%259B%25B8%25E5%2585%25B3%25E7%259F%25A5%25E8%25AF%2586.json": "bb7a2793399bb72687489c44f4698811",
"assets/assets/%25E5%259F%258E%25E4%25B9%25A1%25E8%25A7%2584%25E5%2588%2592%25E5%258E%259F%25E7%2590%2586-%25E7%25AC%25AC%25E4%25BA%258C%25E7%25AB%25A0%25EF%25BC%259A%25E5%259F%258E%25E5%25B8%2582%25E8%25A7%2584%25E5%2588%2592%25E7%259A%2584%25E5%258F%2591%25E5%25B1%2595%25E5%258F%258A%25E4%25B8%25BB%25E8%25A6%2581%25E7%2590%2586%25E8%25AE%25BA%25E4%25B8%258E%25E5%25AE%259E%25E8%25B7%25B5.json": "d232b1b771b48cfe5cc70a9a91bff679",
"assets/assets/%25E5%259F%258E%25E4%25B9%25A1%25E8%25A7%2584%25E5%2588%2592%25E5%258E%259F%25E7%2590%2586-%25E7%25AC%25AC%25E5%259B%259B%25E7%25AB%25A0%25EF%25BC%259A%25E5%259F%258E%25E9%2595%2587%25E4%25BD%2593%25E7%25B3%25BB%25E8%25A7%2584%25E5%2588%2592.json": "e813efd213c338d41e9824c6c876bd43",
"assets/assets/%25E7%25AE%25A1%25E7%2590%2586%25E4%25B8%258E%25E6%25B3%2595%25E8%25A7%2584.json": "4fa84c217c8cf1a89b19fa04bb351ee6",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
