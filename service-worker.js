if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise((async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},r=(r,i)=>{Promise.all(r.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(r)};self.define=(r,s,t)=>{i[r]||(i[r]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+r.slice(1)};return Promise.all(s.map((r=>{switch(r){case"exports":return i;case"module":return n;default:return e(r)}}))).then((e=>{const r=t(...e);return i.default||(i.default=r),i}))})))}}define("./service-worker.js",["./workbox-4681948c"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"everything.html",revision:"c2608cc7469315ff30828db23dec8129"},{url:"everything.js",revision:"778102329fbbd65c8c1d33dd369b2f64"},{url:"everything.js.LICENSE.txt",revision:"04255e125f745f2c4a600194628e9883"},{url:"vendor/react/react.min.js",revision:"e84d22b64b37320b267c043c52d034de"},{url:"vendor/requirejs/require.js",revision:"bf8fde178dbe26a7835834b9650ce371"},{url:"vendor/requirejs/require.js.LICENSE.txt",revision:"a3a8390f523ac3dd2f26e9aa544d607e"}],{})}));
//# sourceMappingURL=service-worker.js.map
