"use strict";var precacheConfig=[["/now-ui-dashboard-react/index.html","b39207d6bc71509ea9b286be680e9bc4"],["/now-ui-dashboard-react/static/css/main.9faf6350.css","6a88d0a53e78bc1690c880cd6af804fd"],["/now-ui-dashboard-react/static/js/main.24973fa8.js","8576f3aadfa18df5ef289d734b8f7196"],["/now-ui-dashboard-react/static/media/Rank1.2c618eb0.png","2c618eb0d4980d7ad80cb278ed9f24a3"],["/now-ui-dashboard-react/static/media/Rank2.65a6fafb.png","65a6fafbfe3021a42ef89e22b0c50334"],["/now-ui-dashboard-react/static/media/Rank3.248c5a17.png","248c5a171837f6683114e9e297fb0e1f"],["/now-ui-dashboard-react/static/media/badge.b74f0006.jpg","b74f00067bda4d9c0020a6a43bb2cda0"],["/now-ui-dashboard-react/static/media/bg3.f807b37b.jpg","f807b37b1736e7709918ea35ef80ca7d"],["/now-ui-dashboard-react/static/media/bg4.4bff5d45.jpg","4bff5d45104e2e6c59b1825b54864d58"],["/now-ui-dashboard-react/static/media/bg5.056eb058.jpg","056eb0586182a8d28273ad11c028e912"],["/now-ui-dashboard-react/static/media/bg6.d7d1aaf7.jpg","d7d1aaf71d275992031bd75cdb6ec65c"],["/now-ui-dashboard-react/static/media/fa-brands-400.2248542e.woff","2248542e1bbbd548a157e3e6ced054fc"],["/now-ui-dashboard-react/static/media/fa-brands-400.3654744d.woff2","3654744dc6d6c37c9b3582b57622df5e"],["/now-ui-dashboard-react/static/media/fa-brands-400.748ab466.eot","748ab466bee11e0b2132916def799916"],["/now-ui-dashboard-react/static/media/fa-brands-400.7febe26e.ttf","7febe26eeb4dd8e3a3c614a144d399fb"],["/now-ui-dashboard-react/static/media/fa-brands-400.b032e14e.svg","b032e14eac87e3001396ff597e4ec15f"],["/now-ui-dashboard-react/static/media/fa-regular-400.33f727cc.woff2","33f727ccde4b05c0ed143c5cd78cda0c"],["/now-ui-dashboard-react/static/media/fa-regular-400.3929b3ef.svg","3929b3ef871fa90bbb4e77e005851e74"],["/now-ui-dashboard-react/static/media/fa-regular-400.54f142e0.ttf","54f142e03adc6da499c2af4f54ab76fd"],["/now-ui-dashboard-react/static/media/fa-regular-400.b58f468f.eot","b58f468f84168d61e0ebc1e1f423587c"],["/now-ui-dashboard-react/static/media/fa-regular-400.f3dd4f39.woff","f3dd4f397fbc5aaf831b6b0ba112d75c"],["/now-ui-dashboard-react/static/media/fa-solid-900.035a137a.eot","035a137af03db6f1af76a589da5bb865"],["/now-ui-dashboard-react/static/media/fa-solid-900.6661d6b3.woff","6661d6b3521b4c480ba759e4b9e480c1"],["/now-ui-dashboard-react/static/media/fa-solid-900.8a8c0474.woff2","8a8c0474283e0d9ef41743e5e486bf05"],["/now-ui-dashboard-react/static/media/fa-solid-900.9bbbee00.svg","9bbbee00f65769a64927764ef51af6d0"],["/now-ui-dashboard-react/static/media/fa-solid-900.b6a14bb8.ttf","b6a14bb88dbc580e45034af297c8f605"],["/now-ui-dashboard-react/static/media/happiness.88e6aeb3.PNG","88e6aeb391c417bcc65a24c8fc6902d0"],["/now-ui-dashboard-react/static/media/health.3d4b5509.PNG","3d4b5509e5bf685f8f98f14796d08459"],["/now-ui-dashboard-react/static/media/heart.9211201f.gif","9211201f916089b09a80c4f5f6c810b0"],["/now-ui-dashboard-react/static/media/logo-white.eec7c7f6.svg","eec7c7f60134e712ef7174c96ca7ee5a"],["/now-ui-dashboard-react/static/media/mike.aab414f7.jpg","aab414f7b69d0d4ad897e75e735f240a"],["/now-ui-dashboard-react/static/media/nucleo-outline.22a0bffe.ttf","22a0bffe789c286a9d78eb52670996a7"],["/now-ui-dashboard-react/static/media/nucleo-outline.24e2d6b4.woff","24e2d6b43b1b0f84fdfaa06a4032f154"],["/now-ui-dashboard-react/static/media/nucleo-outline.53a1bed7.eot","53a1bed7a3ec86d010fe100873828a89"],["/now-ui-dashboard-react/static/media/nucleo-outline.8ebec31f.woff2","8ebec31f5ce59f908db84d86aed5947f"],["/now-ui-dashboard-react/static/media/trophy.1b47cf19.jpg","1b47cf1906742df1c7e5e77bcec21be6"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,r){var c=new URL(e);return r&&c.pathname.match(r)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],r=new URL(a,self.location),c=createCacheKey(r,hashParamName,t,/\.\w{8}\./);return[r.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,r),e=urlsToCacheKeys.has(t));var c="/now-ui-dashboard-react/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});