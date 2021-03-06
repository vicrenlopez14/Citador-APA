'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "913b2cd2f9d4d1f18c0decf0b61e6644",
"index.html": "f2e6600d0e59d2624761e8878a9f1214",
"/": "f2e6600d0e59d2624761e8878a9f1214",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"favicon.png": "843f2faf11b6a5f727d64af05b1f1a3a",
"main.dart.js": "59d4582a055fe7f81b8a3be13046cdf6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/objects/ce/56a0af292e32d7306c52dce711afed43f9b38f": "d91d8d44bf71e4c6601df10eee8069e8",
".git/objects/3a/62c509a6711e9ab1d2406eed23009da38a13c1": "e596b822b61730a6dd653f4563f35eac",
".git/objects/ba/a6e68a66e6e5c7d7a05ad088ba0d6c05431e41": "cd98507e12a296381311aa63352fe9d1",
".git/objects/ba/73fabb291d165761f090b96b4fb671e7de0a9a": "e5dfd9afeb8e6beca9b9d4ec9a891198",
".git/objects/64/66beb8ca75c3cf2ec890ba7f2ee7c62d41b1e6": "e6a6491dd81ae0b6db8a1b16d2f4e44f",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/4d/b8bf10337173bc19c81d429a066f6cb3a600e9": "495487b6419a1728276dc9227592fb49",
".git/objects/ea/9b0bc6bace39b1fda7cc59bfc047be64fd6468": "ea99e745a32eea33fad3fe622a08d688",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/5e/ba9e20ab1fd44819a69a1304d136930d691a1f": "8514f477853b9aa218471a28797fd7df",
".git/objects/2c/f617b3ebde0dde5cd56bc8780bee906415476d": "ac897b2e5b21fc8dac3b169bc9183928",
".git/objects/5f/9cd183fc956eabc1dc3d1157a4a9336ff52f00": "5ee2b4d533a567b721c488fcd1afa07b",
".git/objects/a5/9b08c46798dfa087962fa886e14720898bbf13": "5061a129c4563b2872f203d304ebe7b4",
".git/objects/a5/5c4b88999de6faeb871d942141bc8d71787599": "18953656672bb18af7ca511b8d4b3e77",
".git/objects/a5/09e35281ad4b9830d5b7f3942a8f96499f5764": "f99aa97b1abff05fae2742a0e580ecb3",
".git/objects/6b/4f2ac1390247e021dea097dfd9fbf0bf23eb75": "2101ebeae4fcd95c7373e3654413750b",
".git/objects/04/11030300893c5e52d7a1307140fa3d2e764c7c": "2f5e173f4749f08a02a0d822e65b078a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/39/403a1fd798a6ada1bff1520446cfa21bd05788": "cd819f76e7f28873261e64498ac98b61",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/25/e05e0eaa2d5f14dfaadd114dc6f8b37dff9d64": "8e2bb05900f0bbda61ef4d05a0e72b35",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/d5/afbfbedd7b8cf590bc9427308c8c0f1d4d4a48": "d930c27e6925f63d9097b0d1d37aee8d",
".git/objects/66/af1df2717006998566386877a1eb809ed32a3e": "959c5d10f2dff4c9392ece80656ad452",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/f8/bb006bbfc8ca84991b2cde349f1d044148f3da": "863eeb6b52a144e60abc32f6aa2e92d3",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/32/1e633efb40d20f367d95d531ce83b5410cd795": "3e2f01261a382aac459a39ed4f18a476",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/b6/4a6616066fff0832ade5711507b7f08aff7645": "3e5ba2d6496ef0ae305926ad1744bb63",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/e1/500a56f435a02eb9e4641f161574b8e23e8d54": "4646c32f9db70d12df3443ccba2a20ea",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/be/02f40f77ce16eb6a23f4814abcce38bcac4d78": "16f5818f9f02ccc258b1a9d1c1a8a839",
".git/objects/2d/34c4d70e3f24cf5c064c2754fc65defabb67b2": "96ab1a9a4342b307d279efb220c425a2",
".git/logs/HEAD": "1d16a1257384f746d1f4023f6052c792",
".git/logs/refs/remotes/origin/main": "c2df1de99a59e86161966d51fc7487fb",
".git/logs/refs/heads/main": "42d8cfd358457ff59ab5eada86a29d99",
".git/index": "3a31894fc8d5085ce896f074c0480954",
".git/config": "33fcf95de9e71acf5eb2f13171e8d38e",
".git/COMMIT_EDITMSG": "f0bb9b00f3f186cca773e014514ac757",
".git/refs/remotes/origin/main": "fe0598023e3bdcf7bffb61ce08d16267",
".git/refs/heads/main": "fe0598023e3bdcf7bffb61ce08d16267",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"manifest.json": "2241c7694f99c0e6c17f2e74cdb42efa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "80ab21a900a771717cd04dd581453799",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
