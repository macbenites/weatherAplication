(()=>{"use strict";var e,n,r,t={7175:(e,n,r)=>{r.d(n,{_:()=>l,Z:()=>d});var t=r(2982),o=r(885),i=r(7294),a=r(5893),l=(0,i.createContext)();const d={Provider:function(e){var n=e.children,r=(0,i.useState)([]),d=(0,o.Z)(r,2),s=d[0],c=d[1],u={cities:s,handleClose:function(e){c(s.filter((function(n){return n.id!==e})))},handleCities:function(e){!s.find((function(n){return n.id===parseInt(e.id)}))&&s.length<4&&c([].concat((0,t.Z)(s),[e]))}};return(0,a.jsx)(l.Provider,{value:u,children:n})},Consumer:l.Consumer}},8059:(e,n,r)=>{var t,o,i=r(3935),a=r(168),l=r(7294),d=r(7175),s=r(9711),c=r(6974),u=r(8279),f=r(9163),h=r(5893);const p=function(){var e=l.lazy((function(){return Promise.all([r.e(216),r.e(433)]).then(r.bind(r,433))})),n=l.lazy((function(){return Promise.all([r.e(216),r.e(114)]).then(r.bind(r,5114))})),t=l.lazy((function(){return r.e(698).then(r.bind(r,6698))})),o=l.lazy((function(){return Promise.all([r.e(216),r.e(610)]).then(r.bind(r,5610))})),i=l.lazy((function(){return Promise.all([r.e(216),r.e(386)]).then(r.bind(r,5386))}));return(0,h.jsx)(l.Suspense,{fallback:"<h1>Cargando</h1>",children:(0,h.jsxs)(v,{children:[(0,h.jsx)(b,{children:(0,h.jsx)(d.Z.Provider,{children:(0,h.jsx)(s.VK,{children:(0,h.jsxs)(e,{children:[(0,h.jsxs)(c.Z5,{children:[(0,h.jsx)(c.AW,{exact:!0,path:"/about",element:(0,h.jsx)(n,{})}),(0,h.jsx)(c.AW,{exact:!0,path:"/",element:(0,h.jsx)(t,{})}),(0,h.jsx)(c.AW,{exact:!0,path:"/ciudad/:ciudadId",element:(0,h.jsx)(o,{})}),(0,h.jsx)(c.AW,{path:"*",element:(0,h.jsx)("h2",{children:"Not Found"})})]}),(0,h.jsx)(u.x7,{})]})})})}),(0,h.jsx)(i,{})]})})};var v=f.ZP.div(t||(t=(0,a.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  min-height: 100vh;\n"]))),b=f.ZP.div(o||(o=(0,a.Z)(["\n  flex: 1;\n"])));const m=r.p+"ab2fa57ecf86c8eb6ec91a750e351c8a.svg";var g,x=(0,f.vJ)(g||(g=(0,a.Z)(["\n\nhtml, body{\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    background: url(",") ;\n    background-repeat: no-repeat;\n    background-position: center center;\n    background-size: cover;\n    background-attachment: fixed;\n    font-family: 'Montserrat', sans-serif;\n\n\n    \n}\n"])),m);i.render((0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(x,{}),(0,h.jsx)(p,{})]}),document.getElementById("app"))}},o={};function i(e){var n=o[e];if(void 0!==n)return n.exports;var r=o[e]={exports:{}};return t[e](r,r.exports,i),r.exports}i.m=t,e=[],i.O=(n,r,t,o)=>{if(!r){var a=1/0;for(c=0;c<e.length;c++){for(var[r,t,o]=e[c],l=!0,d=0;d<r.length;d++)(!1&o||a>=o)&&Object.keys(i.O).every((e=>i.O[e](r[d])))?r.splice(d--,1):(l=!1,o<a&&(a=o));if(l){e.splice(c--,1);var s=t();void 0!==s&&(n=s)}}return n}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[r,t,o]},i.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return i.d(n,{a:n}),n},i.d=(e,n)=>{for(var r in n)i.o(n,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((n,r)=>(i.f[r](e,n),n)),[])),i.u=e=>e+".bundle.js",i.miniCssF=e=>{},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),n={},r="react:",i.l=(e,t,o,a)=>{if(n[e])n[e].push(t);else{var l,d;if(void 0!==o)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var u=s[c];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+o){l=u;break}}l||(d=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.setAttribute("data-webpack",r+o),l.src=e),n[e]=[t];var f=(r,t)=>{l.onerror=l.onload=null,clearTimeout(h);var o=n[e];if(delete n[e],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((e=>e(t))),r)return r(t)},h=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),d&&document.head.appendChild(l)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="/",(()=>{var e={179:0};i.f.j=(n,r)=>{var t=i.o(e,n)?e[n]:void 0;if(0!==t)if(t)r.push(t[2]);else{var o=new Promise(((r,o)=>t=e[n]=[r,o]));r.push(t[2]=o);var a=i.p+i.u(n),l=new Error;i.l(a,(r=>{if(i.o(e,n)&&(0!==(t=e[n])&&(e[n]=void 0),t)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;l.message="Loading chunk "+n+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,t[1](l)}}),"chunk-"+n,n)}},i.O.j=n=>0===e[n];var n=(n,r)=>{var t,o,[a,l,d]=r,s=0;if(a.some((n=>0!==e[n]))){for(t in l)i.o(l,t)&&(i.m[t]=l[t]);if(d)var c=d(i)}for(n&&n(r);s<a.length;s++)o=a[s],i.o(e,o)&&e[o]&&e[o][0](),e[a[s]]=0;return i.O(c)},r=self.webpackChunkreact=self.webpackChunkreact||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))})();var a=i.O(void 0,[351,216],(()=>i(8059)));a=i.O(a)})();