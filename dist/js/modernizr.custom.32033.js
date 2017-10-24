window.Modernizr=function(e,t,n){function r(e){g.cssText=e}function o(e,t){return r(E.join(e+";")+(t||""))}function i(e,t){return typeof e===t}function a(e,t){return!!~(""+e).indexOf(t)}function c(e,t){for(var r in e){var o=e[r];if(!a(o,"-")&&g[o]!==n)return"pfx"!=t||o}return!1}function s(e,t,r){for(var o in e){var a=t[e[o]];if(a!==n)return!1===r?e[o]:i(a,"function")?a.bind(r||t):a}return!1}function l(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+w.join(r+" ")+r).split(" ");return i(t,"string")||i(t,"undefined")?c(o,t):(o=(e+" "+x.join(r+" ")+r).split(" "),s(o,t,n))}var u,f,d={},p=t.documentElement,m="modernizr",h=t.createElement(m),g=h.style,v=t.createElement("input"),y=":)",b={}.toString,E=" -webkit- -moz- -o- -ms- ".split(" "),w="Webkit Moz O ms".split(" "),x="Webkit Moz O ms".toLowerCase().split(" "),S={svg:"http://www.w3.org/2000/svg"},C={},k={},T={},j=[],N=j.slice,P=function(e,n,r,o){var i,a,c,s,l=t.createElement("div"),u=t.body,f=u||t.createElement("body");if(parseInt(r,10))for(;r--;)(c=t.createElement("div")).id=o?o[r]:m+(r+1),l.appendChild(c);return i=["&#173;",'<style id="s',m,'">',e,"</style>"].join(""),l.id=m,(u?l:f).innerHTML+=i,f.appendChild(l),u||(f.style.background="",f.style.overflow="hidden",s=p.style.overflow,p.style.overflow="hidden",p.appendChild(f)),a=n(l,e),u?l.parentNode.removeChild(l):(f.parentNode.removeChild(f),p.style.overflow=s),!!a},M=function(){var e={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return function(r,o){o=o||t.createElement(e[r]||"div");var a=(r="on"+r)in o;return a||(o.setAttribute||(o=t.createElement("div")),o.setAttribute&&o.removeAttribute&&(o.setAttribute(r,""),a=i(o[r],"function"),i(o[r],"undefined")||(o[r]=n),o.removeAttribute(r))),o=null,a}}(),A={}.hasOwnProperty;f=i(A,"undefined")||i(A.call,"undefined")?function(e,t){return t in e&&i(e.constructor.prototype[t],"undefined")}:function(e,t){return A.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=N.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var i=new o,a=t.apply(i,n.concat(N.call(arguments)));return Object(a)===a?a:i}return t.apply(e,n.concat(N.call(arguments)))};return r}),C.flexbox=function(){return l("flexWrap")},C.canvas=function(){var e=t.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},C.canvastext=function(){return!(!d.canvas||!i(t.createElement("canvas").getContext("2d").fillText,"function"))},C.webgl=function(){return!!e.WebGLRenderingContext},C.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:P(["@media (",E.join("touch-enabled),("),m,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},C.geolocation=function(){return"geolocation"in navigator},C.postmessage=function(){return!!e.postMessage},C.websqldatabase=function(){return!!e.openDatabase},C.indexedDB=function(){return!!l("indexedDB",e)},C.hashchange=function(){return M("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},C.history=function(){return!(!e.history||!history.pushState)},C.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},C.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},C.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),a(g.backgroundColor,"rgba")},C.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),a(g.backgroundColor,"rgba")||a(g.backgroundColor,"hsla")},C.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(g.background)},C.backgroundsize=function(){return l("backgroundSize")},C.borderimage=function(){return l("borderImage")},C.borderradius=function(){return l("borderRadius")},C.boxshadow=function(){return l("boxShadow")},C.textshadow=function(){return""===t.createElement("div").style.textShadow},C.opacity=function(){return o("opacity:.55"),/^0.55$/.test(g.opacity)},C.cssanimations=function(){return l("animationName")},C.csscolumns=function(){return l("columnCount")},C.cssgradients=function(){var e="background-image:";return r((e+"-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));"+e)+E.join("linear-gradient(left top,#9f9, white);"+e)).slice(0,-e.length)),a(g.backgroundImage,"gradient")},C.cssreflections=function(){return l("boxReflect")},C.csstransforms=function(){return!!l("transform")},C.csstransforms3d=function(){var e=!!l("perspective");return e&&"webkitPerspective"in p.style&&P("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t,n){e=9===t.offsetLeft&&3===t.offsetHeight}),e},C.csstransitions=function(){return l("transition")},C.fontface=function(){var e;return P('@font-face {font-family:"font";src:url("https://")}',function(n,r){var o=t.getElementById("smodernizr"),i=o.sheet||o.styleSheet,a=i?i.cssRules&&i.cssRules[0]?i.cssRules[0].cssText:i.cssText||"":"";e=/src/i.test(a)&&0===a.indexOf(r.split(" ")[0])}),e},C.generatedcontent=function(){var e;return P(["#",m,"{font:0/0 a}#",m,':after{content:"',y,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},C.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&((n=new Boolean(n)).ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(e){}return n},C.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&((n=new Boolean(n)).ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(e){}return n},C.localstorage=function(){try{return localStorage.setItem(m,m),localStorage.removeItem(m),!0}catch(e){return!1}},C.sessionstorage=function(){try{return sessionStorage.setItem(m,m),sessionStorage.removeItem(m),!0}catch(e){return!1}},C.webworkers=function(){return!!e.Worker},C.applicationcache=function(){return!!e.applicationCache},C.svg=function(){return!!t.createElementNS&&!!t.createElementNS(S.svg,"svg").createSVGRect},C.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==S.svg},C.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(b.call(t.createElementNS(S.svg,"animate")))},C.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(b.call(t.createElementNS(S.svg,"clipPath")))};for(var z in C)f(C,z)&&(u=z.toLowerCase(),d[u]=C[z](),j.push((d[u]?"":"no-")+u));return d.input||(d.input=function(n){for(var r=0,o=n.length;r<o;r++)T[n[r]]=!!(n[r]in v);return T.list&&(T.list=!(!t.createElement("datalist")||!e.HTMLDataListElement)),T}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),d.inputtypes=function(e){for(var r,o,i,a=0,c=e.length;a<c;a++)v.setAttribute("type",o=e[a]),(r="text"!==v.type)&&(v.value=y,v.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(o)&&v.style.WebkitAppearance!==n?(p.appendChild(v),r=(i=t.defaultView).getComputedStyle&&"textfield"!==i.getComputedStyle(v,null).WebkitAppearance&&0!==v.offsetHeight,p.removeChild(v)):/^(search|tel)$/.test(o)||(r=/^(url|email)$/.test(o)?v.checkValidity&&!1===v.checkValidity():v.value!=y)),k[e[a]]=!!r;return k}("search tel url email datetime date month week time datetime-local number range color".split(" "))),d.addTest=function(e,t){if("object"==typeof e)for(var r in e)f(e,r)&&d.addTest(r,e[r]);else{if(e=e.toLowerCase(),d[e]!==n)return d;t="function"==typeof t?t():t,p.className+=" "+(t?"":"no-")+e,d[e]=t}return d},r(""),h=v=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=g.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=h[e[p]];return t||(t={},m++,e[p]=m,h[m]=t),t}function i(e,n,r){if(n||(n=t),l)return n.createElement(e);r||(r=o(n));var i;return(i=r.cache[e]?r.cache[e].cloneNode():d.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e)).canHaveChildren&&!f.test(e)?r.frag.appendChild(i):i}function a(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return g.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/\w+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(g,t.frag)}function c(e){e||(e=t);var r=o(e);return!g.shivCSS||s||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),l||a(e,r),e}var s,l,u=e.html5||{},f=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,d=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,p="_html5shiv",m=0,h={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",s="hidden"in e,l=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return void 0===e.cloneNode||void 0===e.createDocumentFragment||void 0===e.createElement}()}catch(e){s=!0,l=!0}}();var g={elements:u.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:!1!==u.shivCSS,supportsUnknownElements:l,shivMethods:!1!==u.shivMethods,type:"default",shivDocument:c,createElement:i,createDocumentFragment:function(e,n){if(e||(e=t),l)return e.createDocumentFragment();for(var i=(n=n||o(e)).frag.cloneNode(),a=0,c=r(),s=c.length;a<s;a++)i.createElement(c[a]);return i}};e.html5=g,c(t)}(this,t),d._version="2.6.2",d._prefixes=E,d._domPrefixes=x,d._cssomPrefixes=w,d.hasEvent=M,d.testProp=function(e){return c([e])},d.testAllProps=l,d.testStyles=P,d.prefixed=function(e,t,n){return t?l(e,t,n):l(e,"pfx")},p.className=p.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+" js "+j.join(" "),d}(this,this.document),function(e,t,n){function r(e){return"[object Function]"==g.call(e)}function o(e){return"string"==typeof e}function i(){}function a(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function c(){var e=v.shift();y=1,e?e.t?m(function(){("c"==e.t?d.injectCss:d.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),c()):y=0}function s(e,n,r,o,i,s,l){function u(t){if(!p&&a(f.readyState)&&(b.r=p=1,!y&&c(),f.onload=f.onreadystatechange=null,t)){"img"!=e&&m(function(){w.removeChild(f)},50);for(var r in T[n])T[n].hasOwnProperty(r)&&T[n][r].onload()}}var l=l||d.errorTimeout,f=t.createElement(e),p=0,g=0,b={t:r,s:n,e:i,a:s,x:l};1===T[n]&&(g=1,T[n]=[]),"object"==e?f.data=n:(f.src=n,f.type=e),f.width=f.height="0",f.onerror=f.onload=f.onreadystatechange=function(){u.call(this,g)},v.splice(o,0,b),"img"!=e&&(g||2===T[n]?(w.insertBefore(f,E?null:h),m(u,l)):T[n].push(f))}function l(e,t,n,r,i){return y=0,t=t||"j",o(e)?s("c"==t?S:x,e,t,this.i++,n,r,i):(v.splice(this.i++,0,e),1==v.length&&c()),this}function u(){var e=d;return e.loader={load:l,i:0},e}var f,d,p=t.documentElement,m=e.setTimeout,h=t.getElementsByTagName("script")[0],g={}.toString,v=[],y=0,b="MozAppearance"in p.style,E=b&&!!t.createRange().compareNode,w=E?p:h.parentNode,p=e.opera&&"[object Opera]"==g.call(e.opera),p=!!t.attachEvent&&!p,x=b?"object":p?"script":"img",S=p?"script":x,C=Array.isArray||function(e){return"[object Array]"==g.call(e)},k=[],T={},j={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};(d=function(e){function t(e){var t,n,r,e=e.split("!"),o=k.length,i=e.pop(),a=e.length,i={url:i,origUrl:i,prefixes:e};for(n=0;n<a;n++)r=e[n].split("="),(t=j[r.shift()])&&(i=t(i,r));for(n=0;n<o;n++)i=k[n](i);return i}function a(e,o,i,a,c){var s=t(e),l=s.autoCallback;s.url.split(".").pop().split("?").shift(),s.bypass||(o&&(o=r(o)?o:o[e]||o[a]||o[e.split("/").pop().split("?")[0]]),s.instead?s.instead(e,o,i,a,c):(T[s.url]?s.noexec=!0:T[s.url]=1,i.load(s.url,s.forceCSS||!s.forceJS&&"css"==s.url.split(".").pop().split("?").shift()?"c":n,s.noexec,s.attrs,s.timeout),(r(o)||r(l))&&i.load(function(){u(),o&&o(s.origUrl,c,a),l&&l(s.origUrl,c,a),T[s.url]=2})))}function c(e,t){function n(e,n){if(e){if(o(e))n||(f=function(){var e=[].slice.call(arguments);d.apply(this,e),p()}),a(e,f,t,0,l);else if(Object(e)===e)for(s in c=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(s)&&(!n&&!--c&&(r(f)?f=function(){var e=[].slice.call(arguments);d.apply(this,e),p()}:f[s]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),p()}}(d[s])),a(e[s],f,t,s,l))}else!n&&p()}var c,s,l=!!e.test,u=e.load||e.both,f=e.callback||i,d=f,p=e.complete||i;n(l?e.yep:e.nope,!!u),u&&n(u)}var s,l,f=this.yepnope.loader;if(o(e))a(e,0,f,0);else if(C(e))for(s=0;s<e.length;s++)l=e[s],o(l)?a(l,0,f,0):C(l)?d(l):Object(l)===l&&c(l,f);else Object(e)===e&&c(e,f)}).addPrefix=function(e,t){j[e]=t},d.addFilter=function(e){k.push(e)},d.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",f=function(){t.removeEventListener("DOMContentLoaded",f,0),t.readyState="complete"},0)),e.yepnope=u(),e.yepnope.executeStack=c,e.yepnope.injectJs=function(e,n,r,o,s,l){var u,f,p=t.createElement("script"),o=o||d.errorTimeout;p.src=e;for(f in r)p.setAttribute(f,r[f]);n=l?c:n||i,p.onreadystatechange=p.onload=function(){!u&&a(p.readyState)&&(u=1,n(),p.onload=p.onreadystatechange=null)},m(function(){u||(u=1,n(1))},o),s?p.onload():h.parentNode.insertBefore(p,h)},e.yepnope.injectCss=function(e,n,r,o,a,s){var l,o=t.createElement("link"),n=s?c:n||i;o.href=e,o.rel="stylesheet",o.type="text/css";for(l in r)o.setAttribute(l,r[l]);a||(h.parentNode.insertBefore(o,h),m(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};