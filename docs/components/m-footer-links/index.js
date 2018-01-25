var StyleGuideWebComponent=function(){"use strict";function e(e,t){return t={exports:{}},e(t,t.exports),t.exports}function t(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;if(t?n=e.getAttribute(t):t=e.name,n&&t!==n){if(y.test(n))try{n=JSON.parse(n)}catch(t){console.error("Attribute "+e+" has an error:\n"+t+"\n",n)}}else n=!0;return n}function n(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=new v(t,g({},o,{detail:n}));e.dispatchEvent(i)}function o(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}function i(e,t){return o(t).test(e.className)}function r(e,t){if(!e)return!1;for(var n=Object.keys(e),o=n.length,i=0;i<o;++i){var r=n[i];if(e[r]===t)return delete e[r]}return!1}function a(e,t,n,o){function a(){for(var t=0;t<f;++t)e.removeEventListener(u[t],c,s);r(this,a)}var s=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(x[t]&&(t=x[t]),!e||!t)return null;var l=void 0===n?"undefined":_(n);"function"===l&&(s=!!o,o=n);for(var c=n&&"string"===l?function(t){for(var r=t.target;!i(r,n)&&r!==e;)r=r.parentNode;if(r!==e)return o(t,r)}:o,u=t.split(w),f=u.length,p=0;p<f;++p)e.addEventListener(u[p],c,s);return a}function s(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function l(e,t){var o=a(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);C[e]||(C[e]={count:0});var i=C[e];return i.count++,i.onsubscribe||(i.onsubscribe=function(e){function t(){for(var t=arguments.length,o=Array(t),r=0;r<t;r++)o[r]=arguments[r];return h=o,g&&(d&&clearTimeout(d),d=setTimeout(function(){m&&clearTimeout(m),n()},i)),b&&!m&&(m=setTimeout(function(){d&&clearTimeout(d),n()},p)),l&&!v&&(v=!0,y=e.apply(void 0,s(h))),y}function n(){u&&(y=e.apply(void 0,s(h))),d=null,m=null,v=!1}function o(){d&&(clearTimeout(d),d=null),m&&(clearTimeout(m),m=null),h=void 0,v=!1}var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=r.leading,l=void 0!==a&&a,c=r.trailing,u=void 0===c||c,f=r.maxWait,p=void 0!==f&&f,h=void 0,d=void 0,m=void 0,y=void 0,v=!1,g=i!==p,b=!1!==p;return t.flush=function(){return(d||m)&&(y=e.apply(void 0,s(h))),o(),y},t.cancel=o,t}(function(e){return function(){n(document,"pubsub/onsubscribe",e),n(document,"pubsub/onsubscribe/"+e,e),C[e]&&delete C[e].unsubscribe}}(e),100)),i.onsubscribe(),function(){i.count--,o.call(this),i.count<=0&&delete C[e]}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function f(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function p(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}function h(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m=e(function(e){!function(){function t(){for(var e=[],o=0;o<arguments.length;o++){var i=arguments[o];if(i){var r=void 0===i?"undefined":d(i);if("string"===r||"number"===r)e.push(i);else if(Array.isArray(i))e.push(t.apply(null,i));else if("object"===r)for(var a in i)n.call(i,a)&&i[a]&&e.push(a)}}return e.join(" ")}var n={}.hasOwnProperty;e.exports?e.exports=t:window.classNames=t}()}),y=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/,v=function(){function e(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,i=t.cancelable,r=void 0!==i&&i,a=t.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,o,r,s);var c=l.preventDefault;return l.preventDefault=function(){c.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}try{var t=new window.CustomEvent("test");if(t.preventDefault(),!0!==t.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return e}(),g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},b=/^\s+|\s{2,}|\s+$/g,_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w=/\s+/,x={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,i=void 0,r=0;r<o;++r)if(i=n[r],void 0!==e[i])return t[i];return null}()},k=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,i=!1,r=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){i=!0,r=e}finally{try{!o&&s.return&&s.return()}finally{if(i)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),C={};a(document,"pubsub/onsubscribe",function(e){var t=e.detail;C[t]||(C[t]={count:0});var o=C[t],i=o.queue;Array.isArray(i)&&(i.forEach(function(e){var t=k(e,3),o=t[0],i=t[1];n(t[2],o,i)}),delete o.queue)});var E=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();Object.setPrototypeOf(p.prototype,HTMLElement.prototype),Object.setPrototypeOf(p,HTMLElement);var O={},T=function(e){function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];c(this,o);var n=u(this,(o.__proto__||Object.getPrototypeOf(o)).call(this));return n._makeContextReady=n._makeContextReady.bind(n),n._initialise(e,t),n}return f(o,p),E(o,[{key:"_initialise",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=e,this._template=t}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var e=this;if(!this._hasRendered){var n=this._template;if(n)try{for(var o=document.createDocumentFragment();this.firstChild;)o.appendChild(this.firstChild);var i=n(function(e){if(!e.hasAttributes)return null;for(var n={},o=e.attributes,i=o.length,r=0;r<i;++r){var a=o[r];n[a.name]=t(a)}return n}(this),o);if(Array.isArray(i))i.forEach(function(t){e.appendChild(t)});else if(i){if("string"==typeof i){var r=new Error("throwed");throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+r.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),r}this.appendChild(i)}this._hasRendered=!0}catch(r){"throwed"!==r.message&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+r+"\n\nStack Trace: "+r.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;C[e]||(C[e]={count:0,queue:[]});var i=C[e].queue;Array.isArray(i)?i.push([e,t,o]):n(o,e,t)}("context/enabled",e)}},{key:"selectContext",value:function(e){this.__selectedContext=e.toLowerCase()}},{key:"_makeContextReady",value:function(){var e=this,t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;this.contextNode&&(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){e.contextCallback(e.contextNode,t)},10)),this.unContextEnabled&&this.unContextEnabled(),this.unContextEnabled=l("context/enabled",this._makeContextReady)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),o}(),j=(function(e){function t(){return c(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}f(t,T),E(t,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",t=this.attachShadow({mode:e});this._appendStyles(t),this.render()}}])}(),function(e){function t(){return c(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return f(t,T),E(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:T.uuidv4();if(e&&!O[e]){var n=document.createElement("style"),o=document.createTextNode(e);n.appendChild(o),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),O[e]=!0}}}]),t}()),N=".m-footer-links {\n  padding-right: 15px;\n  padding-left: 15px;\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  max-width: 25%;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 25%;\n          flex: 0 0 25%;\n  display: block;\n  margin-left: 0 !important; }\n  @media (max-width: 991px) {\n    .m-footer-links {\n      max-width: 33.33333%;\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 33.33333%;\n              flex: 0 0 33.33333%; } }\n  @media (max-width: 575px) {\n    .m-footer-links {\n      position: static;\n      width: auto;\n      max-width: none;\n      -webkit-box-flex: 1;\n          -ms-flex: auto;\n              flex: auto;\n      padding: 0; } }\n\n.m-footer-links__row {\n  margin-right: -15px;\n  margin-left: -15px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.m-footer-links__block {\n  margin-left: 60px; }\n  .m-footer-links__block:first-child {\n    margin-left: 0; }\n  @media (max-width: 575px) {\n    .m-footer-links__block {\n      position: relative; } }\n\n.m-footer-links__category {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  display: block;\n  color: #fff;\n  text-transform: uppercase; }\n  @media (min-width: 576px) {\n    .m-footer-links__category {\n      font-size: 16px;\n      font-weight: 700;\n      line-height: 1.5;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 768px) {\n    .m-footer-links__category {\n      font-size: 16px;\n      font-weight: 700;\n      line-height: 1.5;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 992px) {\n    .m-footer-links__category {\n      font-size: 16px;\n      font-weight: 700;\n      line-height: 1.5;\n      letter-spacing: 0.02em; } }\n  @media (max-width: 575px) {\n    .m-footer-links__category {\n      font-size: 14px;\n      font-weight: 600;\n      line-height: 1.5;\n      letter-spacing: 0.02em;\n      position: relative;\n      padding: 20px 60px 20px 30px;\n      border-bottom: 1px solid #2425aa;\n      background: #3b3fd8; } }\n  @media (max-width: 575px) and (min-width: 576px) {\n    .m-footer-links__category {\n      font-size: 16px;\n      font-weight: 600;\n      line-height: 1.5;\n      letter-spacing: 0.02em; } }\n  @media (max-width: 575px) and (min-width: 768px) {\n    .m-footer-links__category {\n      font-size: 16px;\n      font-weight: 600;\n      line-height: 1.5;\n      letter-spacing: 0.02em; } }\n  @media (max-width: 575px) and (min-width: 992px) {\n    .m-footer-links__category {\n      font-size: 16px;\n      font-weight: 600;\n      line-height: 1.5;\n      letter-spacing: 0.02em; } }\n  @media (max-width: 575px) {\n      .m-footer-links__category:hover, .m-footer-links__category:active, .m-footer-links__category:focus {\n        cursor: pointer; } }\n\n.m-footer-links__category__icon {\n  position: absolute;\n  top: 50%;\n  right: 30px;\n  display: block;\n  width: 10px;\n  height: 10px;\n  margin-top: -5px;\n  color: #999;\n  -webkit-transition: -webkit-transform 0.3s ease;\n  transition: -webkit-transform 0.3s ease;\n  transition: transform 0.3s ease;\n  transition: transform 0.3s ease, -webkit-transform 0.3s ease;\n  display: none; }\n  .is-dropdown-open .m-footer-links__category__icon {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg); }\n  @media (max-width: 575px) {\n    .m-footer-links__category__icon {\n      display: block; } }\n\n.m-footer-links__list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  display: block;\n  padding-top: 15px; }\n  @media (max-width: 991px) {\n    .m-footer-links__list {\n      padding-top: 10px; } }\n  @media (max-width: 575px) {\n    .m-footer-links__list {\n      position: absolute;\n      top: 100%;\n      z-index: 1000;\n      height: 0;\n      min-width: 100%;\n      overflow: hidden;\n      -webkit-transition: height 0.3s ease;\n      transition: height 0.3s ease;\n      position: static;\n      display: block;\n      margin: 0;\n      padding: 0;\n      background: #3032c1; }\n      .is-dropdown-open > .m-footer-links__list {\n        height: auto; } }\n  @media (min-width: 576px) {\n    .m-footer-links__list {\n      height: auto !important; } }\n\n.m-footer-links__list-item {\n  display: block;\n  width: 100%;\n  margin-top: 10px; }\n  @media (max-width: 991px) {\n    .m-footer-links__list-item {\n      margin-top: 8px; } }\n  @media (max-width: 575px) {\n    .m-footer-links__list-item {\n      margin-top: 0;\n      border-bottom: 1px solid #3b3fd8; }\n      .m-footer-links__list-item:last-child {\n        border-bottom: none; } }\n\n.m-footer-links__link {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  display: block;\n  padding: 5px 0;\n  color: #fff; }\n  @media (min-width: 576px) {\n    .m-footer-links__link {\n      font-size: 14px;\n      font-weight: 400;\n      line-height: 1.21;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 768px) {\n    .m-footer-links__link {\n      font-size: 14px;\n      font-weight: 400;\n      line-height: 1.21;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 992px) {\n    .m-footer-links__link {\n      font-size: 14px;\n      font-weight: 400;\n      line-height: 1.21;\n      letter-spacing: 0.02em; } }\n  .m-footer-links__link:hover, .m-footer-links__link:active, .m-footer-links__link:focus {\n    color: rgba(255, 255, 255, 0.65);\n    text-decoration: none; }\n  @media (max-width: 575px) {\n    .m-footer-links__link {\n      padding: 20px 30px; } }\n\n.m-footer-links--cols-2 {\n  max-width: 41.66667%;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 41.66667%;\n          flex: 0 0 41.66667%; }\n  @media (min-width: 576px) {\n    .m-footer-links--cols-2 .m-footer-links__list {\n      -webkit-column-count: 2;\n              column-count: 2; } }\n  @media (min-width: 576px) {\n    .m-footer-links--cols-2 .m-footer-links__list-item {\n      display: inline-block; } }\n  @media (max-width: 991px) {\n    .m-footer-links--cols-2 {\n      max-width: 66.66667%;\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 66.66667%;\n              flex: 0 0 66.66667%; } }\n  @media (max-width: 575px) {\n    .m-footer-links--cols-2 {\n      position: static;\n      width: auto;\n      max-width: none;\n      -webkit-box-flex: 1;\n          -ms-flex: auto;\n              flex: auto; } }\n",A=function(e){return function(t,n,o){for(var i in n)i in S&&(n[S[i]]=n[i],delete n[i]);return e(t,n,o)}},S={class:"className",for:"htmlFor","http-equiv":"httpEquiv"},L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P=1,D=2,F=3,z=4,M=5,R=6,I=7,q=8,U=9,G=10,V=11,$=12,K=13,B=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$"),W=/\n[\s]+$/,H=/^\n[\s]+/,J=/[\s]+$/,Y=/^[\s]+/,Z=/[\n\s]+/g,Q=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],X=["code","pre"],ee=function e(t,n){if(Array.isArray(n))for(var o,i,r=t.nodeName.toLowerCase(),a=!1,s=0,l=n.length;s<l;s++){var c=n[s];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof c)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),u=c),s===l-1&&(a=!1,-1===Q.indexOf(r)&&-1===X.indexOf(r)?""===(o=u.nodeValue.replace(H,"").replace(J,"").replace(W,"").replace(Z," "))?t.removeChild(u):u.nodeValue=o:-1===X.indexOf(r)&&(i=0===s?"":" ",o=u.nodeValue.replace(H,i).replace(Y," ").replace(J,"").replace(W,"").replace(Z," "),u.nodeValue=o));else if(c&&c.nodeType){a&&(a=!1,-1===Q.indexOf(r)&&-1===X.indexOf(r)?""===(o=u.nodeValue.replace(H,"").replace(W,"").replace(Z," "))?t.removeChild(u):u.nodeValue=o:-1===X.indexOf(r)&&(o=u.nodeValue.replace(Y," ").replace(H,"").replace(W,"").replace(Z," "),u.nodeValue=o));var f=c.nodeName;f&&(r=f.toLowerCase()),t.appendChild(c)}}}},te=e(function(e){function t(e,t,s){var l;-1!==a.indexOf(e)&&(t.namespace=n);var c=!1;if(t.namespace&&(c=t.namespace,delete t.namespace),c)l=document.createElementNS(c,e);else{if(e===r)return document.createComment(t.comment);l=document.createElement(e)}for(var u in t)if(t.hasOwnProperty(u)){var f=u.toLowerCase(),p=t[u];if("classname"===f&&(f="class",u="class"),"htmlFor"===u&&(u="for"),-1!==i.indexOf(f))if("true"===p)p=f;else if("false"===p)continue;"on"===f.slice(0,2)?l[u]=p:c?"xlink:href"===u?l.setAttributeNS(o,u,p):/^xmlns($|:)/i.test(u)||l.setAttributeNS(null,u,p):l.setAttribute(u,p)}return ee(l,s),l}var n="http://www.w3.org/2000/svg",o="http://www.w3.org/1999/xlink",i=["autofocus","checked","defaultchecked","disabled","formnovalidate","indeterminate","readonly","required","selected","willvalidate"],r="!--",a=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];e.exports=function(e,t){function n(e){return"function"==typeof e?e:"string"==typeof e?e:e&&"object"===(void 0===e?"undefined":L(e))?e:o("",e)}t||(t={});var o=t.concat||function(e,t){return String(e)+String(t)};return!1!==t.attrToProp&&(e=A(e)),function(i){function r(e){var n=[];a===I&&(a=z);for(var o=0;o<e.length;o++){var i=e.charAt(o);a===P&&"<"===i?(s.length&&n.push([P,s]),s="",a=D):">"!==i||function(e){return e===U||e===G}(a)||a===K?a===K&&/-$/.test(s)&&"-"===i?(t.comments&&n.push([q,s.substr(0,s.length-1)],[F]),s="",a=P):a===D&&/^!--$/.test(s)?(t.comments&&n.push([D,s],[M,"comment"],[V]),s=i,a=K):a===P||a===K?s+=i:a===D&&/\s/.test(i)?(n.push([D,s]),s="",a=z):a===D?s+=i:a===z&&/[^\s"'=/]/.test(i)?(a=M,s=i):a===z&&/\s/.test(i)?(s.length&&n.push([M,s]),n.push([$])):a===M&&/\s/.test(i)?(n.push([M,s]),s="",a=R):a===M&&"="===i?(n.push([M,s],[V]),s="",a=I):a===M?s+=i:a!==R&&a!==z||"="!==i?a!==R&&a!==z||/\s/.test(i)?a===I&&'"'===i?a=G:a===I&&"'"===i?a=U:a===G&&'"'===i?(n.push([q,s],[$]),s="",a=z):a===U&&"'"===i?(n.push([q,s],[$]),s="",a=z):a!==I||/\s/.test(i)?a===q&&/\s/.test(i)?(n.push([q,s],[$]),s="",a=z):a!==q&&a!==U&&a!==G||(s+=i):(a=q,o--):(n.push([$]),/[\w-]/.test(i)?(s+=i,a=M):a=z):(n.push([V]),a=I):(a===D?n.push([D,s]):a===M?n.push([M,s]):a===q&&s.length&&n.push([q,s]),n.push([F]),s="",a=P)}return a===P&&s.length?(n.push([P,s]),s=""):a===q&&s.length?(n.push([q,s]),s=""):a===G&&s.length?(n.push([q,s]),s=""):a===U&&s.length?(n.push([q,s]),s=""):a===M&&(n.push([M,s]),s=""),n}for(var a=P,s="",l=arguments.length,c=[],u=0;u<i.length;u++)if(u<l-1){var f=arguments[u+1],p=r(i[u]),h=a;h===G&&(h=q),h===U&&(h=q),h===I&&(h=q),h===z&&(h=M),p.push([0,h,f]),c.push.apply(c,p)}else c.push.apply(c,r(i[u]));for(var d=[null,{},[]],m=[[d,-1]],u=0;u<c.length;u++){var y=m[m.length-1][0],v=(p=c[u])[0];if(v===D&&/^\//.test(p[1]))x=m[m.length-1][1],m.length>1&&(m.pop(),m[m.length-1][0][2][x]=e(y[0],y[1],y[2].length?y[2]:void 0));else if(v===D){var g=[p[1],{},[]];y[2].push(g),m.push([g,y[2].length-1])}else if(v===M||0===v&&p[1]===M){for(var b,_="";u<c.length;u++)if(c[u][0]===M)_=o(_,c[u][1]);else{if(0!==c[u][0]||c[u][1]!==M)break;if("object"!==L(c[u][2])||_)_=o(_,c[u][2]);else for(b in c[u][2])c[u][2].hasOwnProperty(b)&&!y[1][b]&&(y[1][b]=c[u][2][b])}c[u][0]===V&&u++;for(var w=u;u<c.length;u++)if(c[u][0]===q||c[u][0]===M)y[1][_]?""===c[u][1]||(y[1][_]=o(y[1][_],c[u][1])):y[1][_]=n(c[u][1]);else{if(0!==c[u][0]||c[u][1]!==q&&c[u][1]!==M){!_.length||y[1][_]||u!==w||c[u][0]!==F&&c[u][0]!==$||(y[1][_]=_.toLowerCase()),c[u][0]===F&&u--;break}y[1][_]?""===c[u][2]||(y[1][_]=o(y[1][_],c[u][2])):y[1][_]=n(c[u][2])}}else if(v===M)y[1][p[1]]=!0;else if(0===v&&p[1]===M)y[1][p[2]]=!0;else if(v===F){if(function(e){return B.test(e)}(y[0])&&m.length){var x=m[m.length-1][1];m.pop(),m[m.length-1][0][2][x]=e(y[0],y[1],y[2].length?y[2]:void 0)}}else if(0===v&&p[1]===P)void 0===p[2]||null===p[2]?p[2]="":p[2]||(p[2]=o("",p[2])),Array.isArray(p[2][0])?y[2].push.apply(y[2],p[2]):y[2].push(p[2]);else if(v===P)y[2].push(p[1]);else if(v!==V&&v!==$)throw new Error("unhandled: "+v)}if(d[2].length>1&&/^\s*$/.test(d[2][0])&&d[2].shift(),d[2].length>2||2===d[2].length&&/\S/.test(d[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(d[2][0])&&"string"==typeof d[2][0][0]&&Array.isArray(d[2][0][2])&&(d[2][0]=e(d[2][0][0],d[2][0][1],d[2][0][2])),d[2][0]}}(t,{comments:!0}),e.exports.default=e.exports,e.exports.createElement=t}),ne=function(e){return"undefined"!=typeof window?function(){var t=document.createElement("div");return t.innerHTML=e,function(e){return Array.isArray(e)?e:[].slice.call(e)}(t.childNodes)}():function(){var t=new String(e);return t.__encoded=!0,t}()},oe=h(['<div class="m-footer-links__block js-dropdown">\n    <strong class="m-footer-links__category js-dropdown__toggle">',"",'</strong>\n\n    <ul class="m-footer-links__list">\n      ',"\n    </ul>\n  </div>"],['<div class="m-footer-links__block js-dropdown">\n    <strong class="m-footer-links__category js-dropdown__toggle">',"",'</strong>\n\n    <ul class="m-footer-links__list">\n      ',"\n    </ul>\n  </div>"]),ie=h(['\n        <li class="m-footer-links__list-item">\n          <a class="m-footer-links__link" href="','">',"</a>\n        </li>\n      "],['\n        <li class="m-footer-links__list-item">\n          <a class="m-footer-links__link" href="','">',"</a>\n        </li>\n      "]),re=function(e){var t=e.title,n=e.items;return te(oe,t,ne('<axa-icon id="angle-bracket-down" classes="m-footer-links__category__icon"></axa-icon>'),n.map(function(e){var t=e.name,n=e.url;return te(ie,n,t)}))},ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},se=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),le=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var o=t.length,i={},r=0;r<o;++r){var a=t[r];i[a.toUpperCase()]=a}return i}("click","keyup","enter","move","leave","Escape","Esc"),ce=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._rootNode=t,this._options=ae({},e.DEFAULTS,n),this._handleClick=this._handleClick.bind(this),this._handleClose=this._handleClose.bind(this),this._handleKeyUp=this._handleKeyUp.bind(this),this._init()}return se(e,[{key:"_init",value:function(){var e=this._options.containerClass;this._container=e?this._rootNode.querySelector(e):this._rootNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=a(this._container,le.CLICK,this._options.toggleClass,this._handleClick)}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=a(this._container,le.CLICK,this._options.closeClass,this._handleClose)),this._options.outerClose&&(this._unOuterClick=function(e,t,n){function o(){s.removeEventListener(t,i,a),r(this,o)}function i(t){var o=t.target;if(!e.contains(o)&&e!==o)return n(t)}var a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],s=e.ownerDocument.documentElement;return s.addEventListener(t,i,a),o}(this._container,le.CLICK,this._handleClose)),this._options.escapeClose&&(this._unCloseEscape=a(this._container.ownerDocument,le.KEYUP,this._handleKeyUp))}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),delete this._lastToggleNode}},{key:"_handleClick",value:function(e,t){this._options.useDefaultEvent||e.preventDefault();var n=!this._lastToggleNode,o=t!==this._lastToggleNode,i=!n&&!o;n?(this._notify(le.ENTER,t),this._onInteractive()):o&&this._notify(le.MOVE,t,this._lastToggleNode),this._lastToggleNode=t,i&&this._options.sameClickClose&&this._close()}},{key:"_handleClose",value:function(e){this._options.useDefaultEvent||e.preventDefault(),this._close()}},{key:"_handleKeyUp",value:function(e){(e.key===le.ESCAPE||e.key===le.ESC||27===e.keyCode)&&(e.preventDefault(),this._close())}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(le.LEAVE,this._lastToggleNode),this._offInteractive(),delete this._lastToggleNode)}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._rootNode,delete this._options}}]),e}();ce.DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,useDefaultEvent:!1};var ue=function(){if(!window.getComputedStyle)return null;var e=window.getComputedStyle(document.documentElement,""),t=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1];return{dom:"WebKit|Moz|MS|O".match(new RegExp("("+t+")","i"))[1],lowercase:t,css:"-"+t+"-",js:t[0].toUpperCase()+t.slice(1)}}().lowercase,fe=function(){var e=window.requestAnimationFrame||window[ue+"RequestAnimationFrame"];if(e)e=e.bind(window);else{var t=0;e=function(e){var n=Date.now(),o=Math.max(0,16-(n-t)),i=setTimeout(function(){e(n+o)},o);return t=n+o,i}}return e}(),pe=(function(){var e=window.cancelAnimationFrame||window[ue+"CancelAnimationFrame"]||window[ue+"CancelRequestAnimationFrame"];e=e?e.bind(window):function(e){clearTimeout(e)}}(),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}),he=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),de=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=pe({},t.DEFAULTS,n);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return o.options=n,o.rootNode=e,o.handleTransitionEnd=o.handleTransitionEnd.bind(o),o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,ce),he(t,[{key:"onInteractive",value:function(){this.offInteractive(),this.unTransitionEnd=a(this.rootNode,"transitionend",this.handleTransitionEnd)}},{key:"offInteractive",value:function(){this.unTransitionEnd&&this.unTransitionEnd()}},{key:"enter",value:function(e){var t=e.parentNode,n=t.lastElementChild;n.style.overflow="scroll";var o=n.scrollHeight;n.style.overflow="",this.onInteractive(),n.style.height=o+"px",function(e,t){i(e,t)||(e.className+=" "+t)}(t,this.options.isOpenClass)}},{key:"leave",value:function(e){var t=this,n=e.parentNode,r=n.lastElementChild,a=r.scrollHeight;this.offInteractive(),fe(function(){r.style.height=a+"px",fe(function(){!function(e,t){if(i(e,t)){var n=o(t,"g");e.className=e.className.replace(n," ").replace(b," ")}}(n,t.options.isOpenClass),r.style.height=0})})}},{key:"handleTransitionEnd",value:function(e){"height"===e.propertyName&&(e.target.style.height="",this.offInteractive())}},{key:"destroy",value:function(){(function e(t,n,o){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,o)}if("value"in i)return i.value;var a=i.get;if(void 0!==a)return a.call(o)})(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this),delete this.rootNode,delete this.options}}]),t}();de.DEFAULTS={containerClass:".js-dropdown",toggleClass:"js-dropdown__toggle",isOpenClass:"is-dropdown-open"};var me=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),ye=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.rootNode=t,this.on()}return me(e,[{key:"on",value:function(){var e=this;this.off(),this.unsubscribe=l("device-state/change",function(t){var n=t.detail.breakpoint,o="xs".indexOf(n)>-1;o&&!e.dropDown?e.dropDown=new de(e.rootNode):!o&&e.dropDown&&(e.dropDown.destroy(),delete e.dropDown)})}},{key:"off",value:function(){this.unsubscribe&&this.unsubscribe()}},{key:"destroy",value:function(){this.off(),this.dropDown&&(this.dropDown.destroy(),delete this.dropDown),delete this.rootNode}}]),e}(),ve=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),ge=function(e){function n(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,N,re))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,j),ve(n,[{key:"connectedCallback",value:function(){(function e(t,n,o){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,o)}if("value"in i)return i.value;var a=i.get;if(void 0!==a)return a.call(o)})(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this);var e=t(this,"cols");this.className=m(this.initialClassName,"m-footer-links",function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({"m-footer-links--cols":e},"m-footer-links--cols-"+e,e)),this.footerLinks=new ye(this)}},{key:"disconnectedCallback",value:function(){this.footerLinks&&(this.footerLinks.destroy(),delete this.footerLinks)}}]),n}();return function(e){var t=0,n=function(){if(0===t)try{e.apply(void 0,arguments),t+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}};document.addEventListener("DOMContentLoaded",n,!1),document.addEventListener("WebComponentsReady",n,!1)}(function(){window.customElements.define("axa-footer-links",ge)}),ge}();
