var StyleGuideWebComponent=function(){"use strict";function e(e,n){return n={exports:{}},e(n,n.exports),n.exports}function n(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function t(e){var n=e.name,t=e.url,o=e.isActive,a=e.items,r=o?"is-header-mobile-navigation-active":"";return W(X,!!a?[W(H,r,n),i(a,e)]:W(U,r,t,n))}function i(e,n){return W(J,!n&&"js-header-mobile-navigation__nav",n&&W(Z,n.name),n&&t(I({},n,{name:"index page",items:null})),e.map(t))}function o(e,n){if("function"==typeof e.hasAttribute&&!e.hasAttribute(n))return!1;var t=e.value;if(n?t=e.getAttribute(n):n=e.name,t&&n!==t){if(Q.test(t))try{t=JSON.parse(t)}catch(n){console.error("Attribute "+e+" has an error:\n"+n+"\n",t)}}else t=!0;return t}function a(e,n,t){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=new Y(n,ee({},i,{detail:t}));e.dispatchEvent(o)}function r(e,n){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",n)}function l(e,n){return r(n).test(e.className)}function s(e,n){if(l(e,n)){var t=r(n,"g");e.className=e.className.replace(t," ").replace(ne," ")}}function c(e,n,t,i){function o(){for(var n=0;n<u;++n)e.removeEventListener(c[n],s,a);!function(e,n){if(!e)return!1;for(var t=Object.keys(e),i=t.length,o=0;o<i;++o){var a=t[o];if(e[a]===n)return delete e[a]}}(this,o)}var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(oe[n]&&(n=oe[n]),!e||!n)return null;var r=void 0===t?"undefined":te(t);"function"===r&&(a=!!i,i=t);for(var s=t&&"string"===r?function(n){for(var o=n.target;!l(o,t)&&o!==e;)o=o.parentNode;if(o!==e)return i(n,o)}:i,c=n.split(ie),u=c.length,h=0;h<u;++h)e.addEventListener(c[h],s,a);return o}function u(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}function h(e,n){var t=c(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,n);re[e]||(re[e]={count:0});var i=re[e];return i.count++,i.onsubscribe||(i.onsubscribe=function(e){function n(){for(var n=arguments.length,i=Array(n),a=0;a<n;a++)i[a]=arguments[a];return d=i,g&&(p&&clearTimeout(p),p=setTimeout(function(){m&&clearTimeout(m),t()},o)),y&&!m&&(m=setTimeout(function(){p&&clearTimeout(p),t()},f)),l&&!v&&(v=!0,b=e.apply(void 0,u(d))),b}function t(){c&&(b=e.apply(void 0,u(d))),p=null,m=null,v=!1}function i(){p&&(clearTimeout(p),p=null),m&&(clearTimeout(m),m=null),d=void 0,v=!1}var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=a.leading,l=void 0!==r&&r,s=a.trailing,c=void 0===s||s,h=a.maxWait,f=void 0!==h&&h,d=void 0,p=void 0,m=void 0,b=void 0,v=!1,g=o!==f,y=!1!==f;return n.flush=function(){return(p||m)&&(b=e.apply(void 0,u(d))),i(),b},n.cancel=i,n}(function(e){return function(){a(document,"pubsub/onsubscribe",e),a(document,"pubsub/onsubscribe/"+e,e),re[e]&&delete re[e].unsubscribe}}(e),100)),i.onsubscribe(),function(){i.count--,t.call(this),i.count<=0&&delete re[e]}}function f(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function d(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function p(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function m(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}var b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v=e(function(e){!function(){function n(){for(var e=[],i=0;i<arguments.length;i++){var o=arguments[i];if(o){var a=void 0===o?"undefined":b(o);if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o))e.push(n.apply(null,o));else if("object"===a)for(var r in o)t.call(o,r)&&o[r]&&e.push(r)}}return e.join(" ")}var t={}.hasOwnProperty;e.exports?e.exports=n:window.classNames=n}()}),g=".m-header-mobile-navigation {\n  display: block; }\n  .m-header-mobile-navigation:first-child {\n    margin-top: -20px; }\n\n.m-header-mobile-navigation--relative {\n  position: relative; }\n\n.m-header-mobile-navigation__nav {\n  display: block;\n  background: #fff; }\n  .m-header-mobile-navigation__nav .m-header-mobile-navigation__nav {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    z-index: 1050;\n    min-height: 100%;\n    -webkit-transform: translateX(110%);\n            transform: translateX(110%);\n    -webkit-transition: -webkit-transform 0.2s ease;\n    transition: -webkit-transform 0.2s ease;\n    transition: transform 0.2s ease;\n    transition: transform 0.2s ease, -webkit-transform 0.2s ease; }\n    @media (min-width: 576px) {\n      .m-header-mobile-navigation__nav .m-header-mobile-navigation__nav {\n        left: 10px;\n        -webkit-box-shadow: -5px 0 10px -5px rgba(0, 0, 0, 0.3);\n                box-shadow: -5px 0 10px -5px rgba(0, 0, 0, 0.3); } }\n  .is-header-mobile-navigation-nav-open > .m-header-mobile-navigation__nav {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n\n.m-header-mobile-navigation__list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none; }\n\n.m-header-mobile-navigation__list-item {\n  display: block;\n  border-bottom: 1px solid #ccc; }\n  .m-header-mobile-navigation__list-item:first-child {\n    border-top: 1px solid #ccc; }\n\n.m-header-mobile-navigation__category,\n.m-header-mobile-navigation__back,\n.m-header-mobile-navigation__list-link {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  color: #00008f;\n  position: relative;\n  display: block;\n  padding-left: 60px;\n  padding-right: 40px;\n  text-transform: uppercase; }\n  .m-header-mobile-navigation__category.is-header-mobile-navigation-active, .m-header-mobile-navigation__category:hover, .m-header-mobile-navigation__category:active, .m-header-mobile-navigation__category:focus,\n  .m-header-mobile-navigation__back.is-header-mobile-navigation-active,\n  .m-header-mobile-navigation__back:hover,\n  .m-header-mobile-navigation__back:active,\n  .m-header-mobile-navigation__back:focus,\n  .m-header-mobile-navigation__list-link.is-header-mobile-navigation-active,\n  .m-header-mobile-navigation__list-link:hover,\n  .m-header-mobile-navigation__list-link:active,\n  .m-header-mobile-navigation__list-link:focus {\n    color: #00005b; }\n\n.m-header-mobile-navigation__category,\n.m-header-mobile-navigation__back {\n  background: transparent;\n  border: none;\n  background: transparent;\n  text-align: left; }\n  .m-header-mobile-navigation__category:hover, .m-header-mobile-navigation__category:active, .m-header-mobile-navigation__category:focus,\n  .m-header-mobile-navigation__back:hover,\n  .m-header-mobile-navigation__back:active,\n  .m-header-mobile-navigation__back:focus {\n    outline: none;\n    cursor: pointer; }\n\n.m-header-mobile-navigation__category,\n.m-header-mobile-navigation__list-link {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  padding-top: 20px;\n  padding-bottom: 20px; }\n  @media (min-width: 576px) {\n    .m-header-mobile-navigation__category,\n    .m-header-mobile-navigation__list-link {\n      font-size: 16px;\n      font-weight: 600;\n      line-height: 1.5;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 768px) {\n    .m-header-mobile-navigation__category,\n    .m-header-mobile-navigation__list-link {\n      font-size: 16px;\n      font-weight: 600;\n      line-height: 1.5;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 992px) {\n    .m-header-mobile-navigation__category,\n    .m-header-mobile-navigation__list-link {\n      font-size: 16px;\n      font-weight: 600;\n      line-height: 1.5;\n      letter-spacing: 0.02em; } }\n\n.m-header-mobile-navigation__category {\n  padding-right: 70px; }\n\n.m-header-mobile-navigation__back {\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0;\n  padding-top: 30px;\n  padding-bottom: 30px;\n  padding-left: 105px; }\n  @media (min-width: 576px) {\n    .m-header-mobile-navigation__back {\n      font-size: 24px;\n      font-weight: 700;\n      line-height: 1.2;\n      letter-spacing: 0; } }\n  @media (min-width: 768px) {\n    .m-header-mobile-navigation__back {\n      font-size: 24px;\n      font-weight: 700;\n      line-height: 1.2;\n      letter-spacing: 0; } }\n  @media (min-width: 992px) {\n    .m-header-mobile-navigation__back {\n      font-size: 24px;\n      font-weight: 700;\n      line-height: 1.2;\n      letter-spacing: 0; } }\n\n.m-header-mobile-navigation__icon-next,\n.m-header-mobile-navigation__icon-back {\n  position: absolute;\n  top: 50%;\n  height: 15px;\n  width: 15px;\n  margin-top: -7.5px;\n  pointer-events: none;\n  fill: currentColor; }\n\n.m-header-mobile-navigation__icon-next {\n  right: 40px;\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg); }\n\n.m-header-mobile-navigation__icon-back {\n  left: 60px;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg); }\n",y=function(e){return function(n,t,i){for(var o in t)o in _&&(t[_[o]]=t[o],delete t[o]);return e(n,t,i)}},_={class:"className",for:"htmlFor","http-equiv":"httpEquiv"},x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k=1,w=2,C=3,O=4,N=5,S=6,E=7,j=8,T=9,A=10,P=11,L=12,F=13,M=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$"),z=/\n[\s]+$/,D=/^\n[\s]+/,R=/[\s]+$/,B=/^[\s]+/,G=/[\n\s]+/g,$=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],q=["code","pre"],V=function e(n,t){if(Array.isArray(t))for(var i,o,a=n.nodeName.toLowerCase(),r=!1,l=0,s=t.length;l<s;l++){var c=t[l];if(Array.isArray(c))e(n,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var u=n.childNodes[n.childNodes.length-1];if("string"==typeof c)r=!0,u&&"#text"===u.nodeName?u.nodeValue+=c:(c=document.createTextNode(c),n.appendChild(c),u=c),l===s-1&&(r=!1,-1===$.indexOf(a)&&-1===q.indexOf(a)?""===(i=u.nodeValue.replace(D,"").replace(R,"").replace(z,"").replace(G," "))?n.removeChild(u):u.nodeValue=i:-1===q.indexOf(a)&&(o=0===l?"":" ",i=u.nodeValue.replace(D,o).replace(B," ").replace(R,"").replace(z,"").replace(G," "),u.nodeValue=i));else if(c&&c.nodeType){r&&(r=!1,-1===$.indexOf(a)&&-1===q.indexOf(a)?""===(i=u.nodeValue.replace(D,"").replace(z,"").replace(G," "))?n.removeChild(u):u.nodeValue=i:-1===q.indexOf(a)&&(i=u.nodeValue.replace(B," ").replace(D,"").replace(z,"").replace(G," "),u.nodeValue=i));var h=c.nodeName;h&&(a=h.toLowerCase()),n.appendChild(c)}}}},W=e(function(e){function n(e,n,l){var s;-1!==r.indexOf(e)&&(n.namespace=t);var c=!1;if(n.namespace&&(c=n.namespace,delete n.namespace),c)s=document.createElementNS(c,e);else{if(e===a)return document.createComment(n.comment);s=document.createElement(e)}for(var u in n)if(n.hasOwnProperty(u)){var h=u.toLowerCase(),f=n[u];if("classname"===h&&(h="class",u="class"),"htmlFor"===u&&(u="for"),-1!==o.indexOf(h))if("true"===f)f=h;else if("false"===f)continue;"on"===h.slice(0,2)?s[u]=f:c?"xlink:href"===u?s.setAttributeNS(i,u,f):/^xmlns($|:)/i.test(u)||s.setAttributeNS(null,u,f):s.setAttribute(u,f)}return V(s,l),s}var t="http://www.w3.org/2000/svg",i="http://www.w3.org/1999/xlink",o=["autofocus","checked","defaultchecked","disabled","formnovalidate","indeterminate","readonly","required","selected","willvalidate"],a="!--",r=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];e.exports=function(e,n){function t(e){return"function"==typeof e?e:"string"==typeof e?e:e&&"object"===(void 0===e?"undefined":x(e))?e:i("",e)}n||(n={});var i=n.concat||function(e,n){return String(e)+String(n)};return!1!==n.attrToProp&&(e=y(e)),function(o){function a(e){var t=[];r===E&&(r=O);for(var i=0;i<e.length;i++){var o=e.charAt(i);r===k&&"<"===o?(l.length&&t.push([k,l]),l="",r=w):">"!==o||function(e){return e===T||e===A}(r)||r===F?r===F&&/-$/.test(l)&&"-"===o?(n.comments&&t.push([j,l.substr(0,l.length-1)],[C]),l="",r=k):r===w&&/^!--$/.test(l)?(n.comments&&t.push([w,l],[N,"comment"],[P]),l=o,r=F):r===k||r===F?l+=o:r===w&&/\s/.test(o)?(t.push([w,l]),l="",r=O):r===w?l+=o:r===O&&/[^\s"'=/]/.test(o)?(r=N,l=o):r===O&&/\s/.test(o)?(l.length&&t.push([N,l]),t.push([L])):r===N&&/\s/.test(o)?(t.push([N,l]),l="",r=S):r===N&&"="===o?(t.push([N,l],[P]),l="",r=E):r===N?l+=o:r!==S&&r!==O||"="!==o?r!==S&&r!==O||/\s/.test(o)?r===E&&'"'===o?r=A:r===E&&"'"===o?r=T:r===A&&'"'===o?(t.push([j,l],[L]),l="",r=O):r===T&&"'"===o?(t.push([j,l],[L]),l="",r=O):r!==E||/\s/.test(o)?r===j&&/\s/.test(o)?(t.push([j,l],[L]),l="",r=O):r!==j&&r!==T&&r!==A||(l+=o):(r=j,i--):(t.push([L]),/[\w-]/.test(o)?(l+=o,r=N):r=O):(t.push([P]),r=E):(r===w?t.push([w,l]):r===N?t.push([N,l]):r===j&&l.length&&t.push([j,l]),t.push([C]),l="",r=k)}return r===k&&l.length?(t.push([k,l]),l=""):r===j&&l.length?(t.push([j,l]),l=""):r===A&&l.length?(t.push([j,l]),l=""):r===T&&l.length?(t.push([j,l]),l=""):r===N&&(t.push([N,l]),l=""),t}for(var r=k,l="",s=arguments.length,c=[],u=0;u<o.length;u++)if(u<s-1){var h=arguments[u+1],f=a(o[u]),d=r;d===A&&(d=j),d===T&&(d=j),d===E&&(d=j),d===O&&(d=N),f.push([0,d,h]),c.push.apply(c,f)}else c.push.apply(c,a(o[u]));for(var p=[null,{},[]],m=[[p,-1]],u=0;u<c.length;u++){var b=m[m.length-1][0],v=(f=c[u])[0];if(v===w&&/^\//.test(f[1]))D=m[m.length-1][1],m.length>1&&(m.pop(),m[m.length-1][0][2][D]=e(b[0],b[1],b[2].length?b[2]:void 0));else if(v===w){var g=[f[1],{},[]];b[2].push(g),m.push([g,b[2].length-1])}else if(v===N||0===v&&f[1]===N){for(var y,_="";u<c.length;u++)if(c[u][0]===N)_=i(_,c[u][1]);else{if(0!==c[u][0]||c[u][1]!==N)break;if("object"!==x(c[u][2])||_)_=i(_,c[u][2]);else for(y in c[u][2])c[u][2].hasOwnProperty(y)&&!b[1][y]&&(b[1][y]=c[u][2][y])}c[u][0]===P&&u++;for(var z=u;u<c.length;u++)if(c[u][0]===j||c[u][0]===N)b[1][_]?""===c[u][1]||(b[1][_]=i(b[1][_],c[u][1])):b[1][_]=t(c[u][1]);else{if(0!==c[u][0]||c[u][1]!==j&&c[u][1]!==N){!_.length||b[1][_]||u!==z||c[u][0]!==C&&c[u][0]!==L||(b[1][_]=_.toLowerCase()),c[u][0]===C&&u--;break}b[1][_]?""===c[u][2]||(b[1][_]=i(b[1][_],c[u][2])):b[1][_]=t(c[u][2])}}else if(v===N)b[1][f[1]]=!0;else if(0===v&&f[1]===N)b[1][f[2]]=!0;else if(v===C){if(function(e){return M.test(e)}(b[0])&&m.length){var D=m[m.length-1][1];m.pop(),m[m.length-1][0][2][D]=e(b[0],b[1],b[2].length?b[2]:void 0)}}else if(0===v&&f[1]===k)void 0===f[2]||null===f[2]?f[2]="":f[2]||(f[2]=i("",f[2])),Array.isArray(f[2][0])?b[2].push.apply(b[2],f[2]):b[2].push(f[2]);else if(v===k)b[2].push(f[1]);else if(v!==P&&v!==L)throw new Error("unhandled: "+v)}if(p[2].length>1&&/^\s*$/.test(p[2][0])&&p[2].shift(),p[2].length>2||2===p[2].length&&/\S/.test(p[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(p[2][0])&&"string"==typeof p[2][0][0]&&Array.isArray(p[2][0][2])&&(p[2][0]=e(p[2][0][0],p[2][0][1],p[2][0][2])),p[2][0]}}(n,{comments:!0}),e.exports.default=e.exports,e.exports.createElement=n}),I=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},X=n(['\n    <li class="m-header-mobile-navigation__list-item">\n      ',"\n    </li>\n  "],['\n    <li class="m-header-mobile-navigation__list-item">\n      ',"\n    </li>\n  "]),H=n(['<button type="button" class="m-header-mobile-navigation__category js-header-mobile-navigation__category ','">\n          ','\n          <axa-icon id="angle-bracket-down" classes="m-header-mobile-navigation__icon-next"></axa-icon>\n        </button>\n        '],['<button type="button" class="m-header-mobile-navigation__category js-header-mobile-navigation__category ','">\n          ','\n          <axa-icon id="angle-bracket-down" classes="m-header-mobile-navigation__icon-next"></axa-icon>\n        </button>\n        ']),U=n(['\n        <a class="m-header-mobile-navigation__list-link js-header-mobile-navigation__list-link ','"\n           href="','">',"</a>\n      "],['\n        <a class="m-header-mobile-navigation__list-link js-header-mobile-navigation__list-link ','"\n           href="','">',"</a>\n      "]),J=n(['\n    <div class="m-header-mobile-navigation__nav ','">\n      ','\n      <ul class="m-header-mobile-navigation__list">\n        ',"\n        ","\n      </ul>\n    </div>\n  "],['\n    <div class="m-header-mobile-navigation__nav ','">\n      ','\n      <ul class="m-header-mobile-navigation__list">\n        ',"\n        ","\n      </ul>\n    </div>\n  "]),Z=n(['\n        <button type="button" class="m-header-mobile-navigation__back js-header-mobile-navigation__back">\n          <axa-icon id="angle-bracket-down" classes="m-header-mobile-navigation__icon-back"></axa-icon>\n          ',"\n        </button>\n      "],['\n        <button type="button" class="m-header-mobile-navigation__back js-header-mobile-navigation__back">\n          <axa-icon id="angle-bracket-down" classes="m-header-mobile-navigation__icon-back"></axa-icon>\n          ',"\n        </button>\n      "]),K=function(e){return i(e.items)},Q=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/,Y=function(){function e(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.bubbles,i=void 0!==t&&t,o=n.cancelable,a=void 0!==o&&o,r=n.detail,l=void 0===r?void 0:r,s=document.createEvent("CustomEvent");s.initCustomEvent(e,i,a,l);var c=s.preventDefault;return s.preventDefault=function(){c.call(s);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},s}try{var n=new window.CustomEvent("test");if(n.preventDefault(),!0!==n.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return e}(),ee=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},ne=/^\s+|\s{2,}|\s+$/g,te="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ie=/\s+/,oe={transitionend:function(){for(var e=document.createElement("div").style,n={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},t=Object.keys(n),i=t.length,o=void 0,a=0;a<i;++a)if(o=t[a],void 0!==e[o])return n[o];return null}()},ae=function(){return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,n){var t=[],i=!0,o=!1,a=void 0;try{for(var r,l=e[Symbol.iterator]();!(i=(r=l.next()).done)&&(t.push(r.value),!n||t.length!==n);i=!0);}catch(e){o=!0,a=e}finally{try{!i&&l.return&&l.return()}finally{if(o)throw a}}return t}(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),re={};c(document,"pubsub/onsubscribe",function(e){var n=e.detail;re[n]||(re[n]={count:0});var t=re[n],i=t.queue;Array.isArray(i)&&(i.forEach(function(e){var n=ae(e,3),t=n[0],i=n[1];a(n[2],t,i)}),delete t.queue)});var le=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}();Object.setPrototypeOf(m.prototype,HTMLElement.prototype),Object.setPrototypeOf(m,HTMLElement);var se={},ce=function(e){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];f(this,n);var i=d(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return i._makeContextReady=i._makeContextReady.bind(i),i._initialise(e,t),i}return p(n,m),le(n,[{key:"_initialise",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=e,this._template=n}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var n=document.createElement("style"),t=document.createTextNode(this._styles);n.appendChild(t),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",n):e.appendChild(n)}}},{key:"render",value:function(){var e=this;if(!this._hasRendered){var n=this._template;if(n)try{for(var t=document.createDocumentFragment();this.firstChild;)t.appendChild(this.firstChild);var i=n(function(e){if(!e.hasAttributes)return null;for(var n={},t=e.attributes,i=t.length,a=0;a<i;++a){var r=t[a];n[r.name]=o(r)}return n}(this),t);if(Array.isArray(i))i.forEach(function(n){e.appendChild(n)});else if(i){if("string"==typeof i){var a=new Error("throwed");throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+a.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),a}this.appendChild(i)}this._hasRendered=!0}catch(a){"throwed"!==a.message&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+a+"\n\nStack Trace: "+a.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;re[e]||(re[e]={count:0,queue:[]});var i=re[e].queue;Array.isArray(i)?i.push([e,n,t]):a(t,e,n)}("context/enabled",e)}},{key:"selectContext",value:function(e){this.__selectedContext=e.toLowerCase()}},{key:"_makeContextReady",value:function(){var e=this,n=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;this.contextNode&&(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){e.contextCallback(e.contextNode,n)},10)),this.unContextEnabled&&this.unContextEnabled(),this.unContextEnabled=h("context/enabled",this._makeContextReady)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,n=this.parentNode;n&&(!n.__isContext||e&&e!==n.__contextName);)n=n.parentNode;return!(!n||!n.__isContext)&&n}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var n=16*Math.random()|0;return("x"==e?n:3&n|8).toString(16)})}}]),n}(),ue=(function(e){function n(){return f(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}p(n,ce),le(n,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",n=this.attachShadow({mode:e});this._appendStyles(n),this.render()}}])}(),function(e){function n(){return f(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,ce),le(n,[{key:"_appendStyles",value:function(){n.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ce.uuidv4();if(e&&!se[e]){var t=document.createElement("style"),i=document.createTextNode(e);t.appendChild(i),t.setAttribute("data-c-name",n.toLowerCase()),document.querySelector("head").appendChild(t),se[e]=!0}}}]),n}()),he=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},fe=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}(),de=function(){function e(n,t){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.rootNode=n,this.options=he({},e.DEFAULTS,t),this.isOpen=!1,this.opened=[],this.handleCategoryClick=this.handleCategoryClick.bind(this),this.handleBackClick=this.handleBackClick.bind(this),this.open=this.open.bind(this),this.close=this.close.bind(this),this.fadeFinish=this.fadeFinish.bind(this),this.init()}return fe(e,[{key:"init",value:function(){this.nav=this.rootNode.querySelector(this.options.nav),this.on()}},{key:"on",value:function(){this.off(),this.unCategoryClick=c(this.nav,"click",this.options.category,this.handleCategoryClick),this.unBackClick=c(this.nav,"click",this.options.back,this.handleBackClick)}},{key:"off",value:function(){this.unCategoryClick&&this.unCategoryClick(),this.unBackClick&&this.unBackClick(),this.offContextEnabled()}},{key:"onContextEnabled",value:function(){this._contextNode&&(this.offContextEnabled(),this.unSubscribeOpen=h("header-mobile/open",this.open,this._contextNode),this.unSubscribeClose=h("header-mobile/close",this.close,this._contextNode),this.unSubscribeFadeFinish=h("header-mobile/fade-finish",this.fadeFinish,this._contextNode))}},{key:"offContextEnabled",value:function(){this.unSubscribeOpen&&this.unSubscribeOpen(),this.unSubscribeClose&&this.unSubscribeClose()}},{key:"open",value:function(){this.isOpen=!0}},{key:"close",value:function(){this.isOpen=!1}},{key:"fadeFinish",value:function(){if(!this.isOpen)for(var e=this.opened.pop();e;){s(e.parentNode,this.options.isSubMenuOpenClass),e=this.opened.pop()}}},{key:"handleCategoryClick",value:function(e,n){e.preventDefault();var t=n.parentNode;if(t.lastChild!==n){var i=this.rootNode.parentNode.parentNode,o=i.scrollTop;!function(e,n){l(e,n)||(e.className+=" "+n)}(t,this.options.isSubMenuOpenClass),i.scrollTop=0,this.opened.push({parentNode:t,scrollTop:o})}}},{key:"handleBackClick",value:function(e){e.preventDefault();var n=this.opened.pop(),t=n.parentNode,i=n.scrollTop,o=this.rootNode.parentNode.parentNode;s(t,this.options.isSubMenuOpenClass),o.scrollTop=i}},{key:"destroy",value:function(){this.off(),delete this.rootNode,delete this.nav,delete this._contextNode,delete this.opened}},{key:"contextNode",set:function(e){this._contextNode=e,this.onContextEnabled()}}]),e}();de.DEFAULTS={nav:".js-header-mobile-navigation__nav",category:"js-header-mobile-navigation__category",back:"js-header-mobile-navigation__back",isSubMenuOpenClass:"is-header-mobile-navigation-nav-open"};var pe=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}(),me=function e(n,t,i){null===n&&(n=Function.prototype);var o=Object.getOwnPropertyDescriptor(n,t);if(void 0===o){var a=Object.getPrototypeOf(n);return null===a?void 0:e(a,t,i)}if("value"in o)return o.value;var r=o.get;if(void 0!==r)return r.call(i)},be=function(e){function n(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var e=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,g,K));return e.selectContext("axa-header"),e}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,ue),pe(n,[{key:"connectedCallback",value:function(){me(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this);var e=o(this,"relative");this.className=v(this.initialClassName,"m-header-mobile-navigation",{"m-header-mobile-navigation--relative":e}),this.interaction=new de(this)}},{key:"contextCallback",value:function(e){this.interaction.contextNode=e}},{key:"disconnectedCallback",value:function(){me(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this).call(this),this.interaction.destroy(),delete this.interaction}}]),n}();return function(e){var n=0,t=function(){if(0===n)try{e.apply(void 0,arguments),n+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}};document.addEventListener("DOMContentLoaded",t,!1),document.addEventListener("WebComponentsReady",t,!1)}(function(){window.customElements.define("axa-header-mobile-navigation",be)}),be}();
