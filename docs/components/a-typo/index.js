var StyleGuideWebComponent=function(){"use strict";var o=1,a=3,r=8;function n(e,t){var n=e.nodeType,i=e.nodeName;n===o&&function(e,t){for(var n=t.attributes,i=e.attributes,o=null,a=null,r=null,l=null,s=i.length-1;0<=s;--s)if(l=i[s],r=l.name,o=l.namespaceURI,a=l.value,o){var c=l.localName;t.getAttributeNS(o,c||r)!==a&&t.setAttributeNS(o,r,a)}else t.hasAttribute(r)?t.getAttribute(r)!==a&&("null"===a||"undefined"===a?t.removeAttribute(r):t.setAttribute(r,a)):t.setAttribute(r,a);for(var p=n.length-1;0<=p;--p)!1!==(l=n[p]).specified&&(r=l.name,(o=l.namespaceURI)?(r=l.localName||r,e.hasAttributeNS(o,r)||t.removeAttributeNS(o,r)):e.hasAttributeNS(null,r)||t.removeAttribute(r))}(e,t),n!==a&&n!==r||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===i?function(e,t){var n=e.value,i=t.value;l(e,t,"checked"),l(e,t,"disabled"),n!==i&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===i?l(e,t,"selected"):"TEXTAREA"===i&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function l(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},i=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}(),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},d=function e(t,n,i){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,n,i)}if("value"in o)return o.value;var r=o.get;return void 0!==r?r.call(i):void 0},u=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},f=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},h=function e(t,n,i,o){var a=Object.getOwnPropertyDescriptor(t,n);if(void 0===a){var r=Object.getPrototypeOf(t);null!==r&&e(r,n,i,o)}else if("value"in a&&a.writable)a.value=i;else{var l=a.set;void 0!==l&&l.call(o,i)}return i},c=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],i=!0,o=!1,a=void 0;try{for(var r,l=e[Symbol.iterator]();!(i=(r=l.next()).done)&&(n.push(r.value),!t||n.length!==t);i=!0);}catch(e){o=!0,a=e}finally{try{!i&&l.return&&l.return()}finally{if(o)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},x=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},m=3;function _(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(n(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,i=void 0,o=void 0,a=void 0,r=0,l=0;n=t.childNodes[l],i=e.childNodes[l-r],n||i;l++)if(i)if(n)if(y(i,n))(o=_(i,n))!==n&&(t.replaceChild(o,n),r++);else{a=null;for(var s=l;s<t.childNodes.length;s++)if(y(t.childNodes[s],i)){a=t.childNodes[s];break}a?((o=_(i,a))!==a&&r++,t.insertBefore(o,n)):i.id||n.id?(t.insertBefore(i,n),r++):(o=_(i,n))!==n&&(t.replaceChild(o,n),r++)}else t.appendChild(i),r++;else t.removeChild(n),l--}(e,t),t):null:e}function y(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===m&&e.nodeValue===t.nodeValue)}var v=[];var b=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function w(t,n){var e=t;if(t&&n!==t){if(b.test(t))try{e=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else e=!0;return e}var C=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,i=void 0!==n&&n,o=t.cancelable,a=void 0!==o&&o,r=t.detail,l=void 0===r?void 0:r,s=document.createEvent("CustomEvent");s.initCustomEvent(e,i,a,l);var c=s.preventDefault;return s.preventDefault=function(){c.call(s);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},s}}();function z(e,t,n){var i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},o=new C(t,s({},i,{detail:n}));return e.dispatchEvent(o)}var E=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function A(e){for(var o=e.className,a=!1,r=!0,t=arguments.length,n=Array(1<t?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];var l=n.map(function(e){var t=(n=e,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",i)).test(o);var n,i;t?a=!0:r=!1;return{className:e,hasClass:t}});return!(!r&&!a)&&l}var O=/\s+/,T={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),i=n.length,o=void 0,a=0;a<i;++a)if(void 0!==e[o=n[a]])return t[o];return""}()};function k(n,e,i,o){var t=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},a=t.capture,r=void 0!==a&&a,l=t.passive,s=void 0===l||l;if(T[e]&&(e=T[e]),!n||!e)return null;var c=void 0===i?"undefined":g(i),p=i&&"string"===c;if("function"===c){if(o){var d=o;r=d.capture,s=d.passive}o=i}for(var u=E?{capture:r,passive:s}:r,f=p?function(e){var t=e.target;for(;!A(t,i)&&t!==n;)t=t.parentNode;if(t!==n)return o(e,t)}:o,h=e.split(O),m=h.length,_=0;_<m;++_)n.addEventListener(h[_],f,u);return function e(){for(var t=0;t<m;++t)n.removeEventListener(h[t],f,u);!function(e,t){if(!e)return;for(var n=Object.keys(e),i=n.length,o=0;o<i;++o){var a=n[o];if(e[a]===t)return delete e[a]}}(this,e)}}function N(i){var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=e.leading,a=void 0!==t&&t,n=e.trailing,r=void 0===n||n,l=e.maxWait,s=void 0!==l&&l,c=void 0,p=void 0,d=void 0,u=void 0,f=!1,h=o!==s,m=!1!==s;function _(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return c=t,h&&(p&&clearTimeout(p),p=setTimeout(g,o)),m&&!d&&(d=setTimeout(y,s)),a&&!f&&(f=!0,u=i.apply(void 0,x(c))),u}return _.flush=function(){(p||d)&&(u=i.apply(void 0,x(c)));return b(),u},_.cancel=b,_;function g(){d&&clearTimeout(d),v()}function y(){p&&clearTimeout(p),v()}function v(){r&&(u=i.apply(void 0,x(c))),d=p=null,f=!1}function b(){p&&(clearTimeout(p),p=null),d&&(clearTimeout(d),d=null),c=void 0,f=!1}}var S={};function P(e,t){var n=k(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,e,t);S[e]||(S[e]={count:0});var i,o=S[e];return o.count++,o.onsubscribe||(o.onsubscribe=N((i=e,function(){z(document,"pubsub/onsubscribe",i),z(document,"pubsub/onsubscribe/"+i,i),S[i]&&delete S[i].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete S[e]}}k(document,"pubsub/onsubscribe",function(e){var t=e.detail;S[t]||(S[t]={count:0});var n=S[t],i=n.queue;Array.isArray(i)&&(i.forEach(function(e){var t=c(e,3),n=t[0],i=t[1],o=t[2];z(o,n,i)}),delete n.queue)});var t=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,j=/[-_]+/g;function R(e){return e.replace(t,L)}function L(e,t){return 0==+e||j.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}var M=/[A-Z]/g;function V(e,t,n){var i=e.toLowerCase(),o=n.charAt(t+1);return 0===t||o.toUpperCase()===o?i:"-"+i}var e=function(e,t){return e===t},D=function(e){function s(e,t){var n;p(this,s);for(var i="Property >>>"+e+"<<< exists at "+t.nodeName+"#"+t._id+" and evaluates to -> "+t[e],o=arguments.length,a=Array(2<o?o-2:0),r=2;r<o;r++)a[r-2]=arguments[r];var l=f(this,(n=s.__proto__||Object.getPrototypeOf(s)).call.apply(n,[this,i].concat(a)));return Error.captureStackTrace&&Error.captureStackTrace(l,s),l.name="PropertyExistsException",l}return u(s,e),s}(Error);function U(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(U.prototype,HTMLElement.prototype),Object.setPrototypeOf(U,HTMLElement);var H,F,I,G,W="throwed",q=["title","checked","disabled"],B={},$=function(e){return e in B||(B[e]=0),++B[e]},K=((H=function(){var e;return(e=console).log.apply(e,arguments)},function(){var o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:e;return function(){for(var e=arguments.length,i=Array(e),t=0;t<e;t++)i[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return o.apply(void 0,[].concat(i,t))?H.apply(void 0,arguments):void 0}}}})()(!0),function(e){function c(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];p(this,c);var s=f(this,(c.__proto__||Object.getPrototypeOf(c)).call(this));s._reduceProps=function(e,t){var n=e.props,i=e.shouldUpdate,o=s._hasKeys[t];if(-1===q.indexOf(t)&&o)throw new D(t,s);var a="_"+t,r=n[t],l=s[a];return i||s.shouldUpdateCallback(r,l)?(s[a]=r,s._props[t]=r,o&&h(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),t,r,s),{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},s._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;s.contextNode&&(clearTimeout(s.timeoutId),s.timeoutId=setTimeout(function(){s.contextCallback(s.contextNode,e)},10)),s.unContextEnabled&&s.unContextEnabled(),s.unContextEnabled=P("context/enabled",s._makeContextReady)},s._initialise(e,t),s._id=$(s.nodeName),s._props={},s._hasKeys={},s.reRender=N(function(){return s.render()},50);var n=s.constructor.observedAttributes;return Array.isArray(n)&&n.forEach(function(e){var n,i=R(e),o=i in s;if(-1===q.indexOf(i)&&o)throw new D(i,s);s._hasKeys[i]=o,Object.defineProperty(s,i,n={get:function(){return this["_"+i]},set:function(e){var t="_"+i;this.shouldUpdateCallback(this[t],e)&&(this[t]=e,this._props[i]=e,o&&h(n.__proto__||Object.getPrototypeOf(n),i,e,this),this._isConnected&&this._hasRendered&&this.reRender())}})}),s}return u(c,U),i(c,[{key:"_initialise",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;this._styles=e,this._template=t,this._hasTemplate=!!t,this._hasRendered=!1,this._isConnected=!1}},{key:"connectedCallback",value:function(){var o=this;if(!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(e)&&e.forEach(function(e){var t=R(e);if(o.hasAttribute(e)){var n=function(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;return t?n=e.getAttribute(t):t=e.name,n=w(n,t)}(o,e),i=o._hasKeys[t];o["_"+t]=n,o._props[t]=n,i&&h(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),t,n,o)}})}this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"attributeChangedCallback",value:function(e,t,n){this.shouldUpdateCallback(n,t)&&(this[R(e)]=w(n))}},{key:"batchProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t;Object.keys(e).filter(function(e){return-1<n.indexOf(e.replace(M,V))}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.render()}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled(),this._isConnected=!1}},{key:"_appendStyles",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var n=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var i=document.createDocumentFragment(),o=[];this.firstChild;)o.push(this.firstChild),i.appendChild(this.firstChild);this._lightDOMRefs=o,this.childrenFragment=i}else this._lightDOMRefs.forEach(function(e){var t=e.cloneNode(!0);n.childrenFragment.appendChild(t)});var a=t(this._props,this.childrenFragment),r=document.createDocumentFragment();if(Array.isArray(a))a.forEach(function(e){r.appendChild(e)});else if(a){if("string"==typeof a){var l=new Error(W);throw console.error("\n%cWeb Component %c"+this.nodeName+"%c#"+this._id+" does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+l.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),l}r.appendChild(a)}if(e)d(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"appendChild",this).call(this,r);else{var s=this.cloneNode(!1);s._isMorphing=!0,s.appendChild(r),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":g(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":g(t)))throw new Error("componentMorph: newTree should be an object");_(t,e)}(this,s),function(){for(var e=void 0;e=v.pop();)delete e.isSameNode;v=[]}(),this._isMorphing=!1}}catch(l){l.message!==W&&console.error("\n%cWeb Component %c"+this.nodeName+"%c#"+this._id+" has an error while loading its template:\n"+l+"\n\nStack Trace: "+l.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}},{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):d(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"appendChild",this).call(this,e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;S[e]||(S[e]={count:0,queue:[]});var i=S[e].queue;Array.isArray(i)?i.push([e,t,n]):z(n,e,t)}("context/enabled",this.__contextName=e)}},{key:"selectContext",value:function(e){this.__selectedContext=e&&e.toLowerCase()}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else h(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else h(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else h(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"innerHTML",e,this)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),c}()),Z={},J=function(e){function t(){return p(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,K),i(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:K.uuidv4();if(e&&!Z[e]){var n=document.createElement("style"),i=document.createTextNode(e);n.appendChild(i),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),Z[e]=!0}}}]),t}(),X='.a-typo {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: auto;\n  display: block; }\n  @media (min-width: 576px) {\n    .a-typo {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .a-typo {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .a-typo {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .a-typo {\n      max-width: 1140px; } }\n\n.a-typo__main-title--publico {\n  font-size: 46px;\n  font-weight: 700;\n  line-height: 1.13;\n  letter-spacing: 0.015em;\n  font-family: "Publico Headline", Georgia, serif; }\n  @media (min-width: 576px) {\n    .a-typo__main-title--publico {\n      font-size: 60px;\n      line-height: 1.05; } }\n  @media (min-width: 992px) {\n    .a-typo__main-title--publico {\n      font-size: 78px; } }\n  .a-typo__main-title--publico::after {\n    margin-left: 0.5em;\n    content: "[typo-78]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__page-title--publico {\n  font-size: 30px;\n  font-weight: 700;\n  line-height: 1.13;\n  letter-spacing: 0.015em;\n  font-family: "Publico Headline", Georgia, serif; }\n  @media (min-width: 576px) {\n    .a-typo__page-title--publico {\n      font-size: 50px;\n      line-height: 1.16; } }\n  @media (min-width: 992px) {\n    .a-typo__page-title--publico {\n      font-size: 62px; } }\n  .a-typo__page-title--publico::after {\n    margin-left: 0.5em;\n    content: "[typo-62]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__slice-title--publico {\n  font-size: 24px;\n  font-weight: 700;\n  line-height: 1.17;\n  letter-spacing: 0.015em;\n  font-family: "Publico Headline", Georgia, serif; }\n  @media (min-width: 576px) {\n    .a-typo__slice-title--publico {\n      font-size: 36px;\n      line-height: 1.13; } }\n  @media (min-width: 992px) {\n    .a-typo__slice-title--publico {\n      font-size: 48px; } }\n  .a-typo__slice-title--publico::after {\n    margin-left: 0.5em;\n    content: "[typo-48]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__small-module-title--publico {\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.015em;\n  font-family: "Publico Headline", Georgia, serif; }\n  @media (min-width: 576px) {\n    .a-typo__small-module-title--publico {\n      font-size: 30px;\n      line-height: 1.17; } }\n  @media (min-width: 992px) {\n    .a-typo__small-module-title--publico {\n      font-size: 36px; } }\n  .a-typo__small-module-title--publico::after {\n    margin-left: 0.5em;\n    content: "[typo-36]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__main-title {\n  font-size: 46px;\n  font-weight: 700;\n  line-height: 1.13;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__main-title {\n      font-size: 60px;\n      line-height: 1.05; } }\n  @media (min-width: 992px) {\n    .a-typo__main-title {\n      font-size: 78px; } }\n  .a-typo__main-title::after {\n    margin-left: 0.5em;\n    content: "[typo-78]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__page-title {\n  font-size: 30px;\n  font-weight: 700;\n  line-height: 1.13;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__page-title {\n      font-size: 50px;\n      line-height: 1.16; } }\n  @media (min-width: 992px) {\n    .a-typo__page-title {\n      font-size: 62px; } }\n  .a-typo__page-title::after {\n    margin-left: 0.5em;\n    content: "[typo-62]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__slice-title {\n  font-size: 24px;\n  font-weight: 700;\n  line-height: 1.17;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__slice-title {\n      font-size: 36px;\n      line-height: 1.13; } }\n  @media (min-width: 992px) {\n    .a-typo__slice-title {\n      font-size: 48px; } }\n  .a-typo__slice-title::after {\n    margin-left: 0.5em;\n    content: "[typo-48]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__small-module-title {\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__small-module-title {\n      font-size: 30px;\n      line-height: 1.17; } }\n  @media (min-width: 992px) {\n    .a-typo__small-module-title {\n      font-size: 36px; } }\n  .a-typo__small-module-title::after {\n    margin-left: 0.5em;\n    content: "[typo-36]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__title {\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__title {\n      font-size: 28px;\n      line-height: 1.14; } }\n  .a-typo__title::after {\n    margin-left: 0.5em;\n    content: "[typo-28]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__title--semibold {\n  font-size: 20px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__title--semibold {\n      font-size: 28px;\n      line-height: 1.14; } }\n  .a-typo__title--semibold::after {\n    margin-left: 0.5em;\n    content: "[typo-28]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__item-highlight {\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0; }\n  @media (min-width: 576px) {\n    .a-typo__item-highlight {\n      font-size: 24px;\n      line-height: 1.2; } }\n  .a-typo__item-highlight::after {\n    margin-left: 0.5em;\n    content: "[typo-24]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__item-highlight--semibold {\n  font-size: 20px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0; }\n  @media (min-width: 576px) {\n    .a-typo__item-highlight--semibold {\n      font-size: 24px;\n      line-height: 1.2; } }\n  .a-typo__item-highlight--semibold::after {\n    margin-left: 0.5em;\n    content: "[typo-24]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__item-highlight--regular {\n  font-size: 20px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0; }\n  @media (min-width: 576px) {\n    .a-typo__item-highlight--regular {\n      font-size: 24px;\n      line-height: 1.2; } }\n  .a-typo__item-highlight--regular::after {\n    margin-left: 0.5em;\n    content: "[typo-24]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__text {\n  font-size: 18px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__text {\n      font-size: 20px; } }\n  .a-typo__text::after {\n    margin-left: 0.5em;\n    content: "[typo-20]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__text--semibold {\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__text--semibold {\n      font-size: 20px; } }\n  .a-typo__text--semibold::after {\n    margin-left: 0.5em;\n    content: "[typo-20]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__text--bold {\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__text--bold {\n      font-size: 20px; } }\n  .a-typo__text--bold::after {\n    margin-left: 0.5em;\n    content: "[typo-20]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__text-longer {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__text-longer {\n      font-size: 18px; } }\n  .a-typo__text-longer::after {\n    margin-left: 0.5em;\n    content: "[typo-18]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__text-longer--bold {\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__text-longer--bold {\n      font-size: 18px; } }\n  .a-typo__text-longer--bold::after {\n    margin-left: 0.5em;\n    content: "[typo-18]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__secondary-text {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em; }\n  @media (min-width: 576px) {\n    .a-typo__secondary-text {\n      font-size: 16px; } }\n  .a-typo__secondary-text::after {\n    margin-left: 0.5em;\n    content: "[typo-16]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__secondary-text--semibold {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em; }\n  @media (min-width: 576px) {\n    .a-typo__secondary-text--semibold {\n      font-size: 16px; } }\n  .a-typo__secondary-text--semibold::after {\n    margin-left: 0.5em;\n    content: "[typo-16]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__secondary-text--bold {\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.02em; }\n  @media (min-width: 576px) {\n    .a-typo__secondary-text--bold {\n      font-size: 16px; } }\n  .a-typo__secondary-text--bold::after {\n    margin-left: 0.5em;\n    content: "[typo-16]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__tag {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em; }\n  @media (min-width: 576px) {\n    .a-typo__tag {\n      font-size: 14px;\n      line-height: 1.21; } }\n  .a-typo__tag::after {\n    margin-left: 0.5em;\n    content: "[typo-14]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__tag--semibold {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em; }\n  @media (min-width: 576px) {\n    .a-typo__tag--semibold {\n      font-size: 14px;\n      line-height: 1.21; } }\n  .a-typo__tag--semibold::after {\n    margin-left: 0.5em;\n    content: "[typo-14]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__tag--bold {\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.02em; }\n  @media (min-width: 576px) {\n    .a-typo__tag--bold {\n      font-size: 14px;\n      line-height: 1.21; } }\n  .a-typo__tag--bold::after {\n    margin-left: 0.5em;\n    content: "[typo-14]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__legals {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em; }\n  @media (min-width: 576px) {\n    .a-typo__legals {\n      font-size: 13px;\n      line-height: 1.38; } }\n  .a-typo__legals::after {\n    margin-left: 0.5em;\n    content: "[typo-13]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__legals--semibold {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em; }\n  @media (min-width: 576px) {\n    .a-typo__legals--semibold {\n      font-size: 13px;\n      line-height: 1.38; } }\n  .a-typo__legals--semibold::after {\n    margin-left: 0.5em;\n    content: "[typo-13]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n',Q=/\n[\s]+$/,Y=/^\n[\s]+/,ee=/[\s]+$/,te=/^[\s]+/,ne=/[\n\s]+/g,ie=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],oe=["code","pre","textarea"],ae=function e(t,n){if(Array.isArray(n))for(var i,o,a=t.nodeName.toLowerCase(),r=!1,l=0,s=n.length;l<s;l++){var c=n[l];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var p=t.childNodes[t.childNodes.length-1];if("string"==typeof c)r=!0,p&&"#text"===p.nodeName?p.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),p=c),l===s-1&&(r=!1,-1===ie.indexOf(a)&&-1===oe.indexOf(a)?""===(i=p.nodeValue.replace(Y,"").replace(ee,"").replace(Q,"").replace(ne," "))?t.removeChild(p):p.nodeValue=i:-1===oe.indexOf(a)&&(o=0===l?"":" ",i=p.nodeValue.replace(Y,o).replace(te," ").replace(ee,"").replace(Q,"").replace(ne," "),p.nodeValue=i));else if(c&&c.nodeType){r&&(r=!1,-1===ie.indexOf(a)&&-1===oe.indexOf(a)?""===(i=p.nodeValue.replace(Y,"").replace(Q,"").replace(ne," "))?t.removeChild(p):p.nodeValue=i:-1===oe.indexOf(a)&&(i=p.nodeValue.replace(te," ").replace(Y,"").replace(Q,"").replace(ne," "),p.nodeValue=i));var d=c.nodeName;d&&(a=d.toLowerCase()),t.appendChild(c)}}}},re=function(){var e,t,n,i,o,a,r,l,s,c,p,d,u,f,h,m,_,g,y,v,b,x,w,C,z,E,A,O,T,k,N,S,P,j,R;return R=document.createElement("article"),ae(R,["\n    ",(e=document.createElement("h1"),e.setAttribute("class","a-typo__main-title--publico"),ae(e,["Main Title"]),e),"\n    ",(t=document.createElement("h2"),t.setAttribute("class","a-typo__page-title--publico"),ae(t,["Page Title"]),t),"\n    ",(n=document.createElement("h3"),n.setAttribute("class","a-typo__slice-title--publico"),ae(n,["Slice Title"]),n),"\n    ",(i=document.createElement("h4"),i.setAttribute("class","a-typo__small-module-title--publico"),ae(i,["Small Module Title"]),i),"\n\n    ",(o=document.createElement("h1"),o.setAttribute("class","a-typo__main-title"),ae(o,["Main Title"]),o),"\n    ",(a=document.createElement("h2"),a.setAttribute("class","a-typo__page-title"),ae(a,["Page Title"]),a),"\n    ",(r=document.createElement("h3"),r.setAttribute("class","a-typo__slice-title"),ae(r,["Slice Title"]),r),"\n    ",(l=document.createElement("h4"),l.setAttribute("class","a-typo__small-module-title"),ae(l,["Small Module Title"]),l),"\n    ",(s=document.createElement("h5"),s.setAttribute("class","a-typo__title"),ae(s,["Title"]),s),"\n    ",(c=document.createElement("h5"),c.setAttribute("class","a-typo__title--semibold"),ae(c,["Title (Semibold)"]),c),"\n\n    ",(m=document.createElement("p"),ae(m,["\n      ",(p=document.createElement("span"),p.setAttribute("class","a-typo__item-highlight"),ae(p,["Item Highlight"]),p),"\n      ",(d=document.createElement("br"),d),"\n      ",(u=document.createElement("span"),u.setAttribute("class","a-typo__item-highlight--semibold"),ae(u,["Item Highlight (Semibold)"]),u),"\n      ",(f=document.createElement("br"),f),"\n      ",(h=document.createElement("span"),h.setAttribute("class","a-typo__item-highlight--regular"),ae(h,["Item Highlight (Regular)"]),h),"\n    "]),m),"\n\n    ",(_=document.createElement("p"),_.setAttribute("class","a-typo__text"),ae(_,["Text"]),_),"\n    ",(g=document.createElement("p"),g.setAttribute("class","a-typo__text--semibold"),ae(g,["Text (Semibold)"]),g),"\n    ",(y=document.createElement("p"),y.setAttribute("class","a-typo__text--bold"),ae(y,["Text (Bold)"]),y),"\n    ",(v=document.createElement("p"),v.setAttribute("class","a-typo__text-longer"),ae(v,["Text Longer"]),v),"\n    ",(b=document.createElement("p"),b.setAttribute("class","a-typo__text-longer--bold"),ae(b,["Text Longer (Bold)"]),b),"\n    ",(x=document.createElement("p"),x.setAttribute("class","a-typo__secondary-text"),ae(x,["Secondary Text"]),x),"\n    ",(w=document.createElement("p"),w.setAttribute("class","a-typo__secondary-text--semibold"),ae(w,["Secondary Text (Semibold)"]),w),"\n    ",(C=document.createElement("p"),C.setAttribute("class","a-typo__secondary-text--bold"),ae(C,["Secondary Text (Bold)"]),C),"\n\n    ",(k=document.createElement("p"),ae(k,["\n      ",(z=document.createElement("span"),z.setAttribute("class","a-typo__tag"),ae(z,["Tag"]),z),"\n      ",(E=document.createElement("br"),E),"\n      ",(A=document.createElement("span"),A.setAttribute("class","a-typo__tag--semibold"),ae(A,["Tag (Semibold)"]),A),"\n      ",(O=document.createElement("br"),O),"\n      ",(T=document.createElement("span"),T.setAttribute("class","a-typo__tag--bold"),ae(T,["Tag (Bold)"]),T),"\n    "]),k),"\n\n    ",(j=document.createElement("p"),ae(j,["\n      ",(N=document.createElement("span"),N.setAttribute("class","a-typo__legals"),ae(N,["Legals"]),N),"\n      ",(S=document.createElement("br"),S),"\n      ",(P=document.createElement("span"),P.setAttribute("class","a-typo__legals--semibold"),ae(P,["Legals (Semibold)"]),P),"\n    "]),j),"\n  "]),R},le=function(e){function t(){return p(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,X,re))}return u(t,J),i(t,[{key:"connectedCallback",value:function(){d(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" a-typo"}}]),t}();return F=function(){window.customElements.define("axa-typo",le)},I=0,G=function(){if(0===I)try{F.apply(void 0,arguments),I+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",G,!1),document.addEventListener("WebComponentsReady",G,!1),le}();
