var StyleGuideWebComponent=function(){"use strict";var e=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function t(t,n){if("function"==typeof t.hasAttribute&&!t.hasAttribute(n))return!1;var i=t.value;if(n?i=t.getAttribute(n):n=t.name,i&&n!==i){if(e.test(i))try{i=JSON.parse(i)}catch(e){console.error("Attribute "+t+" has an error:\n"+e+"\n",i)}}else i=!0;return i}var n=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,i=/[-_]+/g;function o(e,t){return 0==+e||i.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}var a=function(){try{var e=new window.CustomEvent("test");if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,i=void 0!==n&&n,o=t.cancelable,a=void 0!==o&&o,l=t.detail,r=void 0===l?void 0:l,s=document.createEvent("CustomEvent");s.initCustomEvent(e,i,a,r);var c=s.preventDefault;return s.preventDefault=function(){c.call(s);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},s}}(),l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},p=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},f=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},m=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],i=!0,o=!1,a=void 0;try{for(var l,r=e[Symbol.iterator]();!(i=(l=r.next()).done)&&(n.push(l.value),!t||n.length!==t);i=!0);}catch(e){o=!0,a=e}finally{try{!i&&r.return&&r.return()}finally{if(o)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),d=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function u(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=new a(t,c({},i,{detail:n}));e.dispatchEvent(o)}var h=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function g(e,t){var n,i;return(n=t,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",i)).test(e.className)}var y=/\s+/,_={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),i=n.length,o=void 0,a=0;a<i;++a)if(void 0!==e[o=n[a]])return t[o];return""}()};function x(e,t,n,i){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=o.capture,r=void 0!==a&&a,s=o.passive,c=void 0===s||s;if(_[t]&&(t=_[t]),!e||!t)return null;var p=void 0===n?"undefined":l(n),f=n&&"string"===p;if("function"===p){if(i){var m=i;r=m.capture,c=m.passive}i=n}for(var d=h?{capture:r,passive:c}:r,u=f?function(t){var o=t.target;for(;!g(o,n)&&o!==e;)o=o.parentNode;if(o!==e)return i(t,o)}:i,x=t.split(y),b=x.length,v=0;v<b;++v)e.addEventListener(x[v],u,d);return function t(){for(var n=0;n<b;++n)e.removeEventListener(x[n],u,d);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),i=n.length,o=0;o<i;++o){var a=n[o];if(e[a]===t)return delete e[a]}}(this,t)}}var b={};function v(e,t){var n=x(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);b[e]||(b[e]={count:0});var i,o=b[e];return o.count++,o.onsubscribe||(o.onsubscribe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=n.leading,o=void 0!==i&&i,a=n.trailing,l=void 0===a||a,r=n.maxWait,s=void 0!==r&&r,c=void 0,p=void 0,f=void 0,m=void 0,u=!1,h=t!==s,g=!1!==s;function y(){for(var n=arguments.length,i=Array(n),a=0;a<n;a++)i[a]=arguments[a];return c=i,h&&(p&&clearTimeout(p),p=setTimeout(_,t)),g&&!f&&(f=setTimeout(x,s)),o&&!u&&(u=!0,m=e.apply(void 0,d(c))),m}return y.flush=function(){return(p||f)&&(m=e.apply(void 0,d(c))),v(),m},y.cancel=v,y;function _(){f&&clearTimeout(f),b()}function x(){p&&clearTimeout(p),b()}function b(){l&&(m=e.apply(void 0,d(c))),p=null,f=null,u=!1}function v(){p&&(clearTimeout(p),p=null),f&&(clearTimeout(f),f=null),c=void 0,u=!1}}((i=e,function(){u(document,"pubsub/onsubscribe",i),u(document,"pubsub/onsubscribe/"+i,i),b[i]&&delete b[i].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete b[e]}}function w(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}x(document,"pubsub/onsubscribe",function(e){var t=e.detail;b[t]||(b[t]={count:0});var n=b[t],i=n.queue;Array.isArray(i)&&(i.forEach(function(e){var t=m(e,3),n=t[0],i=t[1],o=t[2];u(o,n,i)}),delete n.queue)}),Object.setPrototypeOf(w.prototype,HTMLElement.prototype),Object.setPrototypeOf(w,HTMLElement);var z,E,C,A={},T="throwed",O=function(e){function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];r(this,i);var n=f(this,(i.__proto__||Object.getPrototypeOf(i)).call(this));return n._makeContextReady=n._makeContextReady.bind(n),n._initialise(e,t),n}return p(i,w),s(i,[{key:"_initialise",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=e,this._template=t}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var e=this;if(!this._hasRendered){var i=this._template;if(i)try{for(var a=document.createDocumentFragment();this.firstChild;)a.appendChild(this.firstChild);var l=i(function(e){if(!e.hasAttributes)return null;for(var i,a={},l=e.attributes,r=l.length,s=0;s<r;++s){var c=l[s],p=c.name;a[(i=p,i.replace(n,o))]=t(c)}return a}(this),a);if(Array.isArray(l))l.forEach(function(t){e.appendChild(t)});else if(l){if("string"==typeof l){var r=new Error(T);throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+r.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),r}this.appendChild(l)}this._hasRendered=!0}catch(r){r.message!==T&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+r+"\n\nStack Trace: "+r.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;b[e]||(b[e]={count:0,queue:[]});var i=b[e].queue;Array.isArray(i)?i.push([e,t,n]):u(n,e,t)}("context/enabled",e)}},{key:"selectContext",value:function(e){this.__selectedContext=e&&e.toLowerCase()}},{key:"_makeContextReady",value:function(){var e=this,t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;this.contextNode&&(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){e.contextCallback(e.contextNode,t)},10)),this.unContextEnabled&&this.unContextEnabled(),this.unContextEnabled=v("context/enabled",this._makeContextReady)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),i}(),k=(function(e){function t(){return r(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}p(t,O),s(t,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",t=this.attachShadow({mode:e});this._appendStyles(t),this.render()}}])}(),function(e){function t(){return r(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p(t,O),s(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:O.uuidv4();if(e&&!A[e]){var n=document.createElement("style"),i=document.createTextNode(e);n.appendChild(i),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),A[e]=!0}}}]),t}()),S='.a-typo {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: auto;\n  display: block; }\n  @media (min-width: 576px) {\n    .a-typo {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .a-typo {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .a-typo {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .a-typo {\n      max-width: 1140px; } }\n\n.a-typo__main-title--publico {\n  font-size: 46px;\n  font-weight: 700;\n  line-height: 1.13;\n  letter-spacing: 0.015em;\n  font-family: "Publico Headline", Georgia, serif; }\n  @media (min-width: 576px) {\n    .a-typo__main-title--publico {\n      font-size: 60px;\n      line-height: 1.05; } }\n  @media (min-width: 992px) {\n    .a-typo__main-title--publico {\n      font-size: 78px; } }\n  .a-typo__main-title--publico::after {\n    margin-left: 0.5em;\n    content: "[typo-78]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__page-title--publico {\n  font-size: 30px;\n  font-weight: 700;\n  line-height: 1.13;\n  letter-spacing: 0.015em;\n  font-family: "Publico Headline", Georgia, serif; }\n  @media (min-width: 576px) {\n    .a-typo__page-title--publico {\n      font-size: 50px;\n      line-height: 1.16; } }\n  @media (min-width: 992px) {\n    .a-typo__page-title--publico {\n      font-size: 62px; } }\n  .a-typo__page-title--publico::after {\n    margin-left: 0.5em;\n    content: "[typo-62]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__slice-title--publico {\n  font-size: 24px;\n  font-weight: 700;\n  line-height: 1.17;\n  letter-spacing: 0.015em;\n  font-family: "Publico Headline", Georgia, serif; }\n  @media (min-width: 576px) {\n    .a-typo__slice-title--publico {\n      font-size: 36px;\n      line-height: 1.13; } }\n  @media (min-width: 992px) {\n    .a-typo__slice-title--publico {\n      font-size: 48px; } }\n  .a-typo__slice-title--publico::after {\n    margin-left: 0.5em;\n    content: "[typo-48]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__small-module-title--publico {\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.015em;\n  font-family: "Publico Headline", Georgia, serif; }\n  @media (min-width: 576px) {\n    .a-typo__small-module-title--publico {\n      font-size: 30px;\n      line-height: 1.17; } }\n  @media (min-width: 992px) {\n    .a-typo__small-module-title--publico {\n      font-size: 36px; } }\n  .a-typo__small-module-title--publico::after {\n    margin-left: 0.5em;\n    content: "[typo-36]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__main-title {\n  font-size: 46px;\n  font-weight: 700;\n  line-height: 1.13;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__main-title {\n      font-size: 60px;\n      line-height: 1.05; } }\n  @media (min-width: 992px) {\n    .a-typo__main-title {\n      font-size: 78px; } }\n  .a-typo__main-title::after {\n    margin-left: 0.5em;\n    content: "[typo-78]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__page-title {\n  font-size: 30px;\n  font-weight: 700;\n  line-height: 1.13;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__page-title {\n      font-size: 50px;\n      line-height: 1.16; } }\n  @media (min-width: 992px) {\n    .a-typo__page-title {\n      font-size: 62px; } }\n  .a-typo__page-title::after {\n    margin-left: 0.5em;\n    content: "[typo-62]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__slice-title {\n  font-size: 24px;\n  font-weight: 700;\n  line-height: 1.17;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__slice-title {\n      font-size: 36px;\n      line-height: 1.13; } }\n  @media (min-width: 992px) {\n    .a-typo__slice-title {\n      font-size: 48px; } }\n  .a-typo__slice-title::after {\n    margin-left: 0.5em;\n    content: "[typo-48]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__small-module-title {\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__small-module-title {\n      font-size: 30px;\n      line-height: 1.17; } }\n  @media (min-width: 992px) {\n    .a-typo__small-module-title {\n      font-size: 36px; } }\n  .a-typo__small-module-title::after {\n    margin-left: 0.5em;\n    content: "[typo-36]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__title {\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__title {\n      font-size: 28px;\n      line-height: 1.14; } }\n  .a-typo__title::after {\n    margin-left: 0.5em;\n    content: "[typo-28]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__title--semibold {\n  font-size: 20px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__title--semibold {\n      font-size: 28px;\n      line-height: 1.14; } }\n  .a-typo__title--semibold::after {\n    margin-left: 0.5em;\n    content: "[typo-28]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__item-highlight {\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0; }\n  @media (min-width: 576px) {\n    .a-typo__item-highlight {\n      font-size: 24px;\n      line-height: 1.2; } }\n  .a-typo__item-highlight::after {\n    margin-left: 0.5em;\n    content: "[typo-24]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__item-highlight--semibold {\n  font-size: 20px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0; }\n  @media (min-width: 576px) {\n    .a-typo__item-highlight--semibold {\n      font-size: 24px;\n      line-height: 1.2; } }\n  .a-typo__item-highlight--semibold::after {\n    margin-left: 0.5em;\n    content: "[typo-24]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__item-highlight--regular {\n  font-size: 20px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0; }\n  @media (min-width: 576px) {\n    .a-typo__item-highlight--regular {\n      font-size: 24px;\n      line-height: 1.2; } }\n  .a-typo__item-highlight--regular::after {\n    margin-left: 0.5em;\n    content: "[typo-24]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__text {\n  font-size: 18px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__text {\n      font-size: 20px; } }\n  .a-typo__text::after {\n    margin-left: 0.5em;\n    content: "[typo-20]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__text--semibold {\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__text--semibold {\n      font-size: 20px; } }\n  .a-typo__text--semibold::after {\n    margin-left: 0.5em;\n    content: "[typo-20]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__text--bold {\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__text--bold {\n      font-size: 20px; } }\n  .a-typo__text--bold::after {\n    margin-left: 0.5em;\n    content: "[typo-20]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__text-longer {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__text-longer {\n      font-size: 18px; } }\n  .a-typo__text-longer::after {\n    margin-left: 0.5em;\n    content: "[typo-18]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__text-longer--bold {\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__text-longer--bold {\n      font-size: 18px; } }\n  .a-typo__text-longer--bold::after {\n    margin-left: 0.5em;\n    content: "[typo-18]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__secondary-text {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em; }\n  @media (min-width: 576px) {\n    .a-typo__secondary-text {\n      font-size: 16px; } }\n  .a-typo__secondary-text::after {\n    margin-left: 0.5em;\n    content: "[typo-16]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__secondary-text--semibold {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em; }\n  @media (min-width: 576px) {\n    .a-typo__secondary-text--semibold {\n      font-size: 16px; } }\n  .a-typo__secondary-text--semibold::after {\n    margin-left: 0.5em;\n    content: "[typo-16]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__secondary-text--bold {\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.02em; }\n  @media (min-width: 576px) {\n    .a-typo__secondary-text--bold {\n      font-size: 16px; } }\n  .a-typo__secondary-text--bold::after {\n    margin-left: 0.5em;\n    content: "[typo-16]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__tag {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em; }\n  @media (min-width: 576px) {\n    .a-typo__tag {\n      font-size: 14px;\n      line-height: 1.21; } }\n  .a-typo__tag::after {\n    margin-left: 0.5em;\n    content: "[typo-14]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__tag--semibold {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em; }\n  @media (min-width: 576px) {\n    .a-typo__tag--semibold {\n      font-size: 14px;\n      line-height: 1.21; } }\n  .a-typo__tag--semibold::after {\n    margin-left: 0.5em;\n    content: "[typo-14]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__tag--bold {\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.02em; }\n  @media (min-width: 576px) {\n    .a-typo__tag--bold {\n      font-size: 14px;\n      line-height: 1.21; } }\n  .a-typo__tag--bold::after {\n    margin-left: 0.5em;\n    content: "[typo-14]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__legals {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em; }\n  @media (min-width: 576px) {\n    .a-typo__legals {\n      font-size: 13px;\n      line-height: 1.38; } }\n  .a-typo__legals::after {\n    margin-left: 0.5em;\n    content: "[typo-13]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__legals--semibold {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em; }\n  @media (min-width: 576px) {\n    .a-typo__legals--semibold {\n      font-size: 13px;\n      line-height: 1.38; } }\n  .a-typo__legals--semibold::after {\n    margin-left: 0.5em;\n    content: "[typo-13]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n',N=/\n[\s]+$/,P=/^\n[\s]+/,L=/[\s]+$/,j=/^[\s]+/,R=/[\n\s]+/g,M=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],H=["code","pre","textarea"],V=function e(t,n){if(Array.isArray(n))for(var i,o,a=t.nodeName.toLowerCase(),l=!1,r=0,s=n.length;r<s;r++){var c=n[r];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var p=t.childNodes[t.childNodes.length-1];if("string"==typeof c)l=!0,p&&"#text"===p.nodeName?p.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),p=c),r===s-1&&(l=!1,-1===M.indexOf(a)&&-1===H.indexOf(a)?""===(i=p.nodeValue.replace(P,"").replace(L,"").replace(N,"").replace(R," "))?t.removeChild(p):p.nodeValue=i:-1===H.indexOf(a)&&(o=0===r?"":" ",i=p.nodeValue.replace(P,o).replace(j," ").replace(L,"").replace(N,"").replace(R," "),p.nodeValue=i));else if(c&&c.nodeType){l&&(l=!1,-1===M.indexOf(a)&&-1===H.indexOf(a)?""===(i=p.nodeValue.replace(P,"").replace(N,"").replace(R," "))?t.removeChild(p):p.nodeValue=i:-1===H.indexOf(a)&&(i=p.nodeValue.replace(j," ").replace(P,"").replace(N,"").replace(R," "),p.nodeValue=i));var f=c.nodeName;f&&(a=f.toLowerCase()),t.appendChild(c)}}}},D=function(){var e,t,n,i,o,a,l,r,s,c,p,f,m,d,u,h,g,y,_,x,b,v,w,z,E,C,A,T,O,k,S,N,P,L,j;return j=document.createElement("article"),V(j,["\n    ",(e=document.createElement("h1"),e.setAttribute("class","a-typo__main-title--publico"),V(e,["Main Title"]),e),"\n    ",(t=document.createElement("h2"),t.setAttribute("class","a-typo__page-title--publico"),V(t,["Page Title"]),t),"\n    ",(n=document.createElement("h3"),n.setAttribute("class","a-typo__slice-title--publico"),V(n,["Slice Title"]),n),"\n    ",(i=document.createElement("h4"),i.setAttribute("class","a-typo__small-module-title--publico"),V(i,["Small Module Title"]),i),"\n\n    ",(o=document.createElement("h1"),o.setAttribute("class","a-typo__main-title"),V(o,["Main Title"]),o),"\n    ",(a=document.createElement("h2"),a.setAttribute("class","a-typo__page-title"),V(a,["Page Title"]),a),"\n    ",(l=document.createElement("h3"),l.setAttribute("class","a-typo__slice-title"),V(l,["Slice Title"]),l),"\n    ",(r=document.createElement("h4"),r.setAttribute("class","a-typo__small-module-title"),V(r,["Small Module Title"]),r),"\n    ",(s=document.createElement("h5"),s.setAttribute("class","a-typo__title"),V(s,["Title"]),s),"\n    ",(c=document.createElement("h5"),c.setAttribute("class","a-typo__title--semibold"),V(c,["Title (Semibold)"]),c),"\n\n    ",(h=document.createElement("p"),V(h,["\n      ",(p=document.createElement("span"),p.setAttribute("class","a-typo__item-highlight"),V(p,["Item Highlight"]),p),"\n      ",(f=document.createElement("br"),f),"\n      ",(m=document.createElement("span"),m.setAttribute("class","a-typo__item-highlight--semibold"),V(m,["Item Highlight (Semibold)"]),m),"\n      ",(d=document.createElement("br"),d),"\n      ",(u=document.createElement("span"),u.setAttribute("class","a-typo__item-highlight--regular"),V(u,["Item Highlight (Regular)"]),u),"\n    "]),h),"\n\n    ",(g=document.createElement("p"),g.setAttribute("class","a-typo__text"),V(g,["Text"]),g),"\n    ",(y=document.createElement("p"),y.setAttribute("class","a-typo__text--semibold"),V(y,["Text (Semibold)"]),y),"\n    ",(_=document.createElement("p"),_.setAttribute("class","a-typo__text--bold"),V(_,["Text (Bold)"]),_),"\n    ",(x=document.createElement("p"),x.setAttribute("class","a-typo__text-longer"),V(x,["Text Longer"]),x),"\n    ",(b=document.createElement("p"),b.setAttribute("class","a-typo__text-longer--bold"),V(b,["Text Longer (Bold)"]),b),"\n    ",(v=document.createElement("p"),v.setAttribute("class","a-typo__secondary-text"),V(v,["Secondary Text"]),v),"\n    ",(w=document.createElement("p"),w.setAttribute("class","a-typo__secondary-text--semibold"),V(w,["Secondary Text (Semibold)"]),w),"\n    ",(z=document.createElement("p"),z.setAttribute("class","a-typo__secondary-text--bold"),V(z,["Secondary Text (Bold)"]),z),"\n\n    ",(k=document.createElement("p"),V(k,["\n      ",(E=document.createElement("span"),E.setAttribute("class","a-typo__tag"),V(E,["Tag"]),E),"\n      ",(C=document.createElement("br"),C),"\n      ",(A=document.createElement("span"),A.setAttribute("class","a-typo__tag--semibold"),V(A,["Tag (Semibold)"]),A),"\n      ",(T=document.createElement("br"),T),"\n      ",(O=document.createElement("span"),O.setAttribute("class","a-typo__tag--bold"),V(O,["Tag (Bold)"]),O),"\n    "]),k),"\n\n    ",(L=document.createElement("p"),V(L,["\n      ",(S=document.createElement("span"),S.setAttribute("class","a-typo__legals"),V(S,["Legals"]),S),"\n      ",(N=document.createElement("br"),N),"\n      ",(P=document.createElement("span"),P.setAttribute("class","a-typo__legals--semibold"),V(P,["Legals (Semibold)"]),P),"\n    "]),L),"\n  "]),j},F=function(e){function t(){return r(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,S,D))}return p(t,k),s(t,[{key:"connectedCallback",value:function(){(function e(t,n,i){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,n,i)}if("value"in o)return o.value;var l=o.get;return void 0!==l?l.call(i):void 0})(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" a-typo"}}]),t}();return z=function(){window.customElements.define("axa-typo",F)},E=0,C=function(){if(0===E)try{z.apply(void 0,arguments),E+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",C,!1),document.addEventListener("WebComponentsReady",C,!1),F}();
