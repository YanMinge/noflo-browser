if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,i,t)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const n={uri:location.origin+r.slice(1)};return Promise.all(i.map((r=>{switch(r){case"exports":return s;case"module":return n;default:return e(r)}}))).then((e=>{const r=t(...e);return s.default||(s.default=r),s}))})))}}define("./service-worker.js",["./workbox-e1834b40"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"everything.js",revision:"43adbd3160fe6b06f32b5687e2b932a5"},{url:"everything.js.LICENSE.txt",revision:"53f3bb72c1473d82eaef35eb758a8a36"},{url:"vendor/react/react.min.js",revision:"e84d22b64b37320b267c043c52d034de"},{url:"vendor/requirejs/require.js",revision:"bf8fde178dbe26a7835834b9650ce371"},{url:"vendor/requirejs/require.js.LICENSE.txt",revision:"a3a8390f523ac3dd2f26e9aa544d607e"}],{})}));
//# sourceMappingURL=service-worker.js.map
