function disableLoad(){var e=document.getElementById("page");document.getElementById("page-loading").classList.add("js-hidden"),e.classList.remove("js-hidden")}function isObject(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}window.addEventListener("load",function(){!function(){var n=document.getElementById("back-top"),o=new Pack(n);if(n){function e(){var e=window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop,t=n.classList.contains("back-top--hidden")&&n.classList.contains("js-hidden");(350<e&&t||e<350&&!t)&&o.toggle()}o.transfrom("back-top--hidden").base("js-hidden").lastStart(),e(),document.addEventListener("scroll",e),n.addEventListener("click",function(){(new Amt).from({top:window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop}).to({top:0}).transition(1e3).on("frame",function(e){window.scrollTo(0,e.top)}).start()})}}()}),window.addEventListener("load",function(){var t;(t=document.getElementById("page-header"))&&document.addEventListener("scroll",function(){var e=window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop;t.classList[30<e?"add":"remove"]("page__header--small")}),function(){var e=document.querySelector("button.page__menu-btn"),t=document.querySelector("nav.page__nav");if(e&&t){var n=new Pack(t);n.base("js-open").transfrom("page__nav--open"),e.addEventListener("click",function(){n.toggle()})}}(),function(){var e=document.getElementById("page-header");if(e){var t=e.querySelector(".info__title"),n=e.querySelector(".info__desc");t&&new Pack(t).animation("js-animation").end(function(){["js-animation"].forEach(function(e){t.classList.remove(e)})}).toggle(),n&&new Pack(n).base("js-ease-out-leave-active").base("js-ease-out-leave").transfrom("js-ease-out-enter-active").end(function(){["js-ease-out-enter","js-ease-out-enter-active","js-ease-out-leave","js-ease-out-leave-active"].forEach(function(e){n.classList.remove(e)})}).toggle()}}()}),document.onreadystatechange=function(){var e=document.getElementById("page");"interactive"==document.readyState&&window.setTimeout(function(){disableLoad()},4e3),"complete"==document.readyState&&e.classList.contains("js-hidden")&&disableLoad()},window.addEventListener("load",function(){window._skappPostAnimation=function(){document.querySelectorAll("article.page__mini-article").forEach(function(t){if(!t.parentElement.parentElement.classList.contains("js-hidden")){var n=getPosition(t),o=new Pack(t);o.base("js-ease-out-leave-active").base("js-ease-out-leave").transfrom("js-ease-out-enter-active").end(function(){["js-ease-out-enter","js-ease-out-enter-active","js-ease-out-leave","js-ease-out-leave-active"].forEach(function(e){t.classList.remove(e)})}),function(e){var t=null,n=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,o=window.cancelAnimationFrame||window.mozCancelAnimationFrame;function r(){o(t),t=n(e.bind(null,function(){document.removeEventListener("scroll",r)}))}document.addEventListener("scroll",r),r()}(function(e){n.y-window.scrollY-document.documentElement.clientHeight<50&&(e(),o.toggle())})}})},window._skappPostAnimation()}),function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.axios=t():e.axios=t()}(this,function(){return function(n){function o(e){if(r[e])return r[e].exports;var t=r[e]={exports:{},id:e,loaded:!1};return n[e].call(t.exports,t,t.exports,o),t.loaded=!0,t.exports}var r={};return o.m=n,o.c=r,o.p="",o(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";function o(e){var t=new s(e),n=i(s.prototype.request,t);return r.extend(n,s.prototype,t),r.extend(n,t),n}var r=n(2),i=n(3),s=n(5),a=n(6),u=o(a);u.Axios=s,u.create=function(e){return o(r.merge(a,e))},u.Cancel=n(23),u.CancelToken=n(24),u.isCancel=n(20),u.all=function(e){return Promise.all(e)},u.spread=n(25),e.exports=u,e.exports.default=u},function(e,t,n){"use strict";function i(e){return"[object Array]"===c.call(e)}function o(e){return null!==e&&"object"==typeof e}function r(e){return"[object Function]"===c.call(e)}function s(e,t){if(null!=e)if("object"==typeof e||i(e)||(e=[e]),i(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.call(null,e[r],r,e)}var a=n(3),u=n(4),c=Object.prototype.toString;e.exports={isArray:i,isArrayBuffer:function(e){return"[object ArrayBuffer]"===c.call(e)},isBuffer:u,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:o,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===c.call(e)},isFile:function(e){return"[object File]"===c.call(e)},isBlob:function(e){return"[object Blob]"===c.call(e)},isFunction:r,isStream:function(e){return o(e)&&r(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:s,merge:function n(){function e(e,t){"object"==typeof o[t]&&"object"==typeof e?o[t]=n(o[t],e):o[t]=e}for(var o={},t=0,r=arguments.length;t<r;t++)s(arguments[t],e);return o},extend:function(n,e,o){return s(e,function(e,t){n[t]=o&&"function"==typeof e?a(e,o):e}),n},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(e,t){"use strict";e.exports=function(n,o){return function(){for(var e=new Array(arguments.length),t=0;t<e.length;t++)e[t]=arguments[t];return n.apply(o,e)}}},function(e,t){function n(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}e.exports=function(e){return null!=e&&(n(e)||"function"==typeof(t=e).readFloatLE&&"function"==typeof t.slice&&n(t.slice(0,0))||!!e._isBuffer);var t}},function(e,t,n){"use strict";function r(e){this.defaults=e,this.interceptors={request:new s,response:new s}}var o=n(6),i=n(2),s=n(17),a=n(18),u=n(21),c=n(22);r.prototype.request=function(e){"string"==typeof e&&(e=i.merge({url:arguments[0]},arguments[1])),(e=i.merge(o,this.defaults,{method:"get"},e)).method=e.method.toLowerCase(),e.baseURL&&!u(e.url)&&(e.url=c(e.baseURL,e.url));var t=[a,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},i.forEach(["delete","get","head","options"],function(n){r.prototype[n]=function(e,t){return this.request(i.merge(t||{},{method:n,url:e}))}}),i.forEach(["post","put","patch"],function(o){r.prototype[o]=function(e,t,n){return this.request(i.merge(n||{},{method:o,url:e,data:t}))}}),e.exports=r},function(e,t,n){"use strict";function o(e,t){!i.isUndefined(e)&&i.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var r,i=n(2),s=n(7),a={"Content-Type":"application/x-www-form-urlencoded"},u={adapter:("undefined"!=typeof XMLHttpRequest?r=n(8):"undefined"!=typeof process&&(r=n(8)),r),transformRequest:[function(e,t){return s(t,"Content-Type"),i.isFormData(e)||i.isArrayBuffer(e)||i.isBuffer(e)||i.isStream(e)||i.isFile(e)||i.isBlob(e)?e:i.isArrayBufferView(e)?e.buffer:i.isURLSearchParams(e)?(o(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):i.isObject(e)?(o(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return 200<=e&&e<300}};u.headers={common:{Accept:"application/json, text/plain, */*"}},i.forEach(["delete","get","head"],function(e){u.headers[e]={}}),i.forEach(["post","put","patch"],function(e){u.headers[e]=i.merge(a)}),e.exports=u},function(e,t,n){"use strict";var r=n(2);e.exports=function(n,o){r.forEach(n,function(e,t){t!==o&&t.toUpperCase()===o.toUpperCase()&&(n[o]=e,delete n[t])})}},function(e,t,l){"use strict";var p=l(2),m=l(9),h=l(12),v=l(13),g=l(14),w=l(10),y="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||l(15);e.exports=function(d){return new Promise(function(n,o){var r=d.data,i=d.headers;p.isFormData(r)&&delete i["Content-Type"];var s=new XMLHttpRequest,e="onreadystatechange",a=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in s||g(d.url)||(s=new window.XDomainRequest,e="onload",a=!0,s.onprogress=function(){},s.ontimeout=function(){}),d.auth){var t=d.auth.username||"",u=d.auth.password||"";i.Authorization="Basic "+y(t+":"+u)}if(s.open(d.method.toUpperCase(),h(d.url,d.params,d.paramsSerializer),!0),s.timeout=d.timeout,s[e]=function(){if(s&&(4===s.readyState||a)&&(0!==s.status||s.responseURL&&0===s.responseURL.indexOf("file:"))){var e="getAllResponseHeaders"in s?v(s.getAllResponseHeaders()):null,t={data:d.responseType&&"text"!==d.responseType?s.response:s.responseText,status:1223===s.status?204:s.status,statusText:1223===s.status?"No Content":s.statusText,headers:e,config:d,request:s};m(n,o,t),s=null}},s.onerror=function(){o(w("Network Error",d,null,s)),s=null},s.ontimeout=function(){o(w("timeout of "+d.timeout+"ms exceeded",d,"ECONNABORTED",s)),s=null},p.isStandardBrowserEnv()){var c=l(16),f=(d.withCredentials||g(d.url))&&d.xsrfCookieName?c.read(d.xsrfCookieName):void 0;f&&(i[d.xsrfHeaderName]=f)}if("setRequestHeader"in s&&p.forEach(i,function(e,t){void 0===r&&"content-type"===t.toLowerCase()?delete i[t]:s.setRequestHeader(t,e)}),d.withCredentials&&(s.withCredentials=!0),d.responseType)try{s.responseType=d.responseType}catch(n){if("json"!==d.responseType)throw n}"function"==typeof d.onDownloadProgress&&s.addEventListener("progress",d.onDownloadProgress),"function"==typeof d.onUploadProgress&&s.upload&&s.upload.addEventListener("progress",d.onUploadProgress),d.cancelToken&&d.cancelToken.promise.then(function(e){s&&(s.abort(),o(e),s=null)}),void 0===r&&(r=null),s.send(r)})}},function(e,t,n){"use strict";var r=n(10);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},function(e,t,n){"use strict";var s=n(11);e.exports=function(e,t,n,o,r){var i=new Error(e);return s(i,t,n,o,r)}},function(e,t){"use strict";e.exports=function(e,t,n,o,r){return e.config=t,n&&(e.code=n),e.request=o,e.response=r,e}},function(e,t,n){"use strict";function i(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var s=n(2);e.exports=function(e,t,n){if(!t)return e;var o;if(n)o=n(t);else if(s.isURLSearchParams(t))o=t.toString();else{var r=[];s.forEach(t,function(e,t){null!=e&&(s.isArray(e)&&(t+="[]"),s.isArray(e)||(e=[e]),s.forEach(e,function(e){s.isDate(e)?e=e.toISOString():s.isObject(e)&&(e=JSON.stringify(e)),r.push(i(t)+"="+i(e))}))}),o=r.join("&")}return o&&(e+=(-1===e.indexOf("?")?"?":"&")+o),e}},function(e,t,n){"use strict";var i=n(2);e.exports=function(e){var t,n,o,r={};return e&&i.forEach(e.split("\n"),function(e){o=e.indexOf(":"),t=i.trim(e.substr(0,o)).toLowerCase(),n=i.trim(e.substr(o+1)),t&&(r[t]=r[t]?r[t]+", "+n:n)}),r}},function(e,t,n){"use strict";var s=n(2);e.exports=s.isStandardBrowserEnv()?function(){function n(e){var t=e;return r&&(i.setAttribute("href",t),t=i.href),i.setAttribute("href",t),{href:i.href,protocol:i.protocol?i.protocol.replace(/:$/,""):"",host:i.host,search:i.search?i.search.replace(/^\?/,""):"",hash:i.hash?i.hash.replace(/^#/,""):"",hostname:i.hostname,port:i.port,pathname:"/"===i.pathname.charAt(0)?i.pathname:"/"+i.pathname}}var o,r=/(msie|trident)/i.test(navigator.userAgent),i=document.createElement("a");return o=n(window.location.href),function(e){var t=s.isString(e)?n(e):e;return t.protocol===o.protocol&&t.host===o.host}}():function(){return!0}},function(e,t){"use strict";function a(){this.message="String contains an invalid character"}(a.prototype=new Error).code=5,a.prototype.name="InvalidCharacterError",e.exports=function(e){for(var t,n,o=String(e),r="",i=0,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";o.charAt(0|i)||(s="=",i%1);r+=s.charAt(63&t>>8-i%1*8)){if(255<(n=o.charCodeAt(i+=.75)))throw new a;t=t<<8|n}return r}},function(e,t,n){"use strict";var a=n(2);e.exports=a.isStandardBrowserEnv()?{write:function(e,t,n,o,r,i){var s=[];s.push(e+"="+encodeURIComponent(t)),a.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),a.isString(o)&&s.push("path="+o),a.isString(r)&&s.push("domain="+r),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,n){"use strict";function o(){this.handlers=[]}var r=n(2);o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(t){r.forEach(this.handlers,function(e){null!==e&&t(e)})},e.exports=o},function(e,t,n){"use strict";function o(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var r=n(2),i=n(19),s=n(20),a=n(6);e.exports=function(t){return o(t),t.headers=t.headers||{},t.data=i(t.data,t.headers,t.transformRequest),t.headers=r.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||a.adapter)(t).then(function(e){return o(t),e.data=i(e.data,e.headers,t.transformResponse),e},function(e){return s(e)||(o(t),e&&e.response&&(e.response.data=i(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},function(e,t,n){"use strict";var o=n(2);e.exports=function(t,n,e){return o.forEach(e,function(e){t=e(t,n)}),t}},function(e,t){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},function(e,t,n){"use strict";function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new r(e),t(n.reason))})}var r=n(23);o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var t;return{token:new o(function(e){t=e}),cancel:t}},e.exports=o},function(e,t){"use strict";e.exports=function(t){return function(e){return t.apply(null,e)}}}])});var _={debounce:function(o,r,e){var i,s,a,u,c,f,d=0,l=!1,p=!1,t=!0,n=!r&&0!==r&&"function"==typeof window.requestAnimationFrame;if("function"!=typeof o)throw new TypeError("Expected a function");function m(e){var t=i,n=s;return i=s=void 0,d=e,u=o.apply(n,t)}function h(e,t){return n?window.requestAnimationFrame(e):setTimeout(e,t)}function v(e){var t=e-f;return void 0===f||r<=t||t<0||p&&a<=e-d}function g(){var e,t,n,o=Date.now();if(v(o))return w(o);c=h(g,(t=(e=o)-d,n=r-(e-f),p?Math.min(n,a-t):n))}function w(e){return c=void 0,t&&i?m(e):(i=s=void 0,u)}function y(){var e,t=Date.now(),n=v(t);if(i=arguments,s=this,f=t,n){if(void 0===c)return d=e=f,c=h(g,r),l?m(e):u;if(p)return c=h(g,r),m(f)}return void 0===c&&(c=h(g,r)),u}return r=+r||0,isObject(e)&&(l=!!e.leading,a=(p="maxWait"in e)?Math.max(+e.maxWait||0,r):a,t="trailing"in e?!!e.trailing:t),y.cancel=function(){void 0!==c&&function(e){if(n)return window.cancelAnimationFrame(e);clearTimeout(e)}(c),i=f=s=c=void(d=0)},y.flush=function(){return void 0===c?u:w(Date.now())},y.pending=function(){return void 0!==c},y}};!function(e,t){"object"==typeof exports?module.exports=t(e):"function"==typeof define&&define.amd?define([],t(e)):e.LazyLoad=t(e)}("undefined"!=typeof global?global:this.window||this.global,function(e){"use strict";var n={src:"data-src",srcset:"data-srcset",selector:".lazyload"},i=function(){var n={},o=!1,e=0,t=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(o=arguments[0],e++);for(var r=function(e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(o&&"[object Object]"===Object.prototype.toString.call(e[t])?n[t]=i(!0,n[t],e[t]):n[t]=e[t])};e<t;e++){r(arguments[e])}return n};function o(e,t){this.settings=i(n,t||{}),this.images=e||document.querySelectorAll(this.settings.selector),this.observer=null,this.init()}if(o.prototype={init:function(){if(e.IntersectionObserver){var o=this;this.observer=new IntersectionObserver(function(e){e.forEach(function(e){if(0<e.intersectionRatio){o.observer.unobserve(e.target);var t=e.target.getAttribute(o.settings.src),n=e.target.getAttribute(o.settings.srcset);"img"===e.target.tagName.toLowerCase()?(t&&(e.target.src=t),n&&(e.target.srcset=n)):e.target.style.backgroundImage="url("+t+")"}})},{root:null,rootMargin:"0px",threshold:[0]}),this.images.forEach(function(e){o.observer.observe(e)})}else this.loadImages()},loadAndDestroy:function(){this.settings&&(this.loadImages(),this.destroy())},loadImages:function(){if(this.settings){var o=this;this.images.forEach(function(e){var t=e.getAttribute(o.settings.src),n=e.getAttribute(o.settings.srcset);"img"===e.tagName.toLowerCase()?(t&&(e.src=t),n&&(e.srcset=n)):e.style.backgroundImage="url("+t+")"})}},destroy:function(){this.settings&&(this.observer.disconnect(),this.settings=null)}},e.lazyload=function(e,t){return new o(e,t)},e.jQuery){var t=e.jQuery;t.fn.lazyload=function(e){return(e=e||{}).attribute=e.attribute||"data-src",new o(t.makeArray(this),e),this}}return o});var images=document.querySelectorAll(".lazyload");lazyload(images);