!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";var e,g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},n=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},r=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},f=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},p=function e(t,n,r,o){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,r,o)}else if("value"in i&&i.writable)i.value=r;else{var s=i.set;void 0!==s&&s.call(o,r)}return r},a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},x=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},h=(function(e){!function(){var i={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=void 0===n?"undefined":g(n);if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n))e.push(a.apply(null,n));else if("object"===r)for(var o in n)i.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?e.exports=a:window.classNames=a}()}(e={exports:{}},e.exports),e.exports),o=1,s=3,l=8;function u(e,t){var n=e.nodeType,r=e.nodeName;n===o&&function(e,t){for(var n=t.attributes,r=e.attributes,o=null,i=null,a=null,s=null,l=r.length-1;0<=l;--l)if(s=r[l],a=s.name,o=s.namespaceURI,i=s.value,o){var u=s.localName;t.getAttributeNS(o,u||a)!==i&&t.setAttributeNS(o,a,i)}else t.hasAttribute(a)?t.getAttribute(a)!==i&&("null"===i||"undefined"===i?t.removeAttribute(a):t.setAttribute(a,i)):t.setAttribute(a,i);for(var c=n.length-1;0<=c;--c)!1!==(s=n[c]).specified&&(a=s.name,(o=s.namespaceURI)?(a=s.localName||a,e.hasAttributeNS(o,a)||t.removeAttributeNS(o,a)):e.hasAttributeNS(null,a)||t.removeAttribute(a))}(e,t),n!==s&&n!==l||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===r?function(e,t){var n=e.value,r=t.value;v(e,t,"checked"),v(e,t,"disabled"),n!==r&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===r?v(e,t,"selected"):"TEXTAREA"===r&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function v(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var m=3;function b(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(u(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,r=void 0,o=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],r=e.childNodes[s-a],n||r;s++)if(r)if(n)if(y(r,n))(o=b(r,n))!==n&&(t.replaceChild(o,n),a++);else{i=null;for(var l=s;l<t.childNodes.length;l++)if(y(t.childNodes[l],r)){i=t.childNodes[l];break}i?((o=b(r,i))!==i&&a++,t.insertBefore(o,n)):r.id||n.id?(t.insertBefore(r,n),a++):(o=b(r,n))!==n&&(t.replaceChild(o,n),a++)}else t.appendChild(r),a++;else t.removeChild(n),s--}(e,t),t):null:e}function y(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===m&&e.nodeValue===t.nodeValue)}var _=[];var w=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function C(t,n){var e=t;if(t&&n!==t){if(w.test(t))try{e=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else e=!0;return e}var k=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,r,i,s);var u=l.preventDefault;return l.preventDefault=function(){u.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}();function O(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},o=new k(t,i({},r,{detail:n}));return e.dispatchEvent(o)}var A=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function E(e){for(var o=e.className,i=!1,a=!0,t=arguments.length,n=Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var s=n.map(function(e){var t=(n=e,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",r)).test(o);var n,r;t?i=!0:a=!1;return{className:e,hasClass:t}});return!(!a&&!i)&&s}var N=/\s+/,T={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==e[o=n[i]])return t[o];return""}()};function j(n,e,r,o){var t=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},i=t.capture,a=void 0!==i&&i,s=t.passive,l=void 0===s||s;if(T[e]&&(e=T[e]),!n||!e)return null;var u=void 0===r?"undefined":g(r),c=r&&"string"===u;if("function"===u){if(o){var d=o;a=d.capture,l=d.passive}o=r}for(var f=A?{capture:a,passive:l}:a,p=c?function(e){var t=e.target;for(;!E(t,r)&&t!==n;)t=t.parentNode;if(t!==n)return o(e,t)}:o,h=e.split(N),v=h.length,m=0;m<v;++m)n.addEventListener(h[m],p,f);return function e(){for(var t=0;t<v;++t)n.removeEventListener(h[t],p,f);!function(e,t){if(!e)return;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}}(this,e)}}function P(r){var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=e.leading,i=void 0!==t&&t,n=e.trailing,a=void 0===n||n,s=e.maxWait,l=void 0!==s&&s,u=void 0,c=void 0,d=void 0,f=void 0,p=!1,h=o!==l,v=!1!==l;function m(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return u=t,h&&(c&&clearTimeout(c),c=setTimeout(g,o)),v&&!d&&(d=setTimeout(b,l)),i&&!p&&(p=!0,f=r.apply(void 0,x(u))),f}return m.flush=function(){(c||d)&&(f=r.apply(void 0,x(u)));return _(),f},m.cancel=_,m;function g(){d&&clearTimeout(d),y()}function b(){c&&clearTimeout(c),y()}function y(){a&&(f=r.apply(void 0,x(u))),d=c=null,p=!1}function _(){c&&(clearTimeout(c),c=null),d&&(clearTimeout(d),d=null),u=void 0,p=!1}}var S={};function R(e,t){var n=j(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,e,t);S[e]||(S[e]={count:0});var r,o=S[e];return o.count++,o.onsubscribe||(o.onsubscribe=P((r=e,function(){O(document,"pubsub/onsubscribe",r),O(document,"pubsub/onsubscribe/"+r,r),S[r]&&delete S[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete S[e]}}j(document,"pubsub/onsubscribe",function(e){var t=e.detail;S[t]||(S[t]={count:0});var n=S[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=a(e,3),n=t[0],r=t[1],o=t[2];O(o,n,r)}),delete n.queue)});var t=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,L=/[-_]+/g;function M(e){return e.replace(t,V)}function V(e,t){return 0==+e||L.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}var D=/[A-Z]/g;function z(e,t,n){var r=e.toLowerCase(),o=n.charAt(t+1);return 0===t||o.toUpperCase()===o?r:"-"+r}var U=function(e,t){return e===t},F=function(e){function l(e,t){var n;c(this,l);for(var r="Property >>>"+e+"<<< exists at "+t.nodeName+"#"+t._id+" and evaluates to -> "+t[e],o=arguments.length,i=Array(2<o?o-2:0),a=2;a<o;a++)i[a-2]=arguments[a];var s=f(this,(n=l.__proto__||Object.getPrototypeOf(l)).call.apply(n,[this,r].concat(i)));return Error.captureStackTrace&&Error.captureStackTrace(s,l),s.name="PropertyExistsException",s}return r(l,e),l}(Error);function I(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(I.prototype,HTMLElement.prototype),Object.setPrototypeOf(I,HTMLElement);var W,q="throwed",H=["title","checked","disabled"],$={},K=function(e){return e in $||($[e]=0),++$[e]},B=((W=function(){var e;return(e=console).log.apply(e,arguments)},function(){var o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:U;return function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return o.apply(void 0,[].concat(r,t))?W.apply(void 0,arguments):void 0}}}})()(!0),function(e){function u(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];c(this,u);var l=f(this,(u.__proto__||Object.getPrototypeOf(u)).call(this));l._reduceProps=function(e,t){var n=e.props,r=e.shouldUpdate,o=l._hasKeys[t];if(-1===H.indexOf(t)&&o)throw new F(t,l);var i="_"+t,a=n[t],s=l[i];return r||l.shouldUpdateCallback(a,s)?(l[i]=a,l._props[t]=a,o&&p(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),t,a,l),{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},l._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;l.contextNode&&(clearTimeout(l.timeoutId),l.timeoutId=setTimeout(function(){l.contextCallback(l.contextNode,e)},10)),l.unContextEnabled&&l.unContextEnabled(),l.unContextEnabled=R("context/enabled",l._makeContextReady)},l._initialise(e,t),l._id=K(l.nodeName),l._props={},l._hasKeys={},l.reRender=P(function(){return l.render()},50);var n=l.constructor.observedAttributes;return Array.isArray(n)&&n.forEach(function(e){var n,r=M(e),o=r in l;if(-1===H.indexOf(r)&&o)throw new F(r,l);l._hasKeys[r]=o,Object.defineProperty(l,r,n={get:function(){return this["_"+r]},set:function(e){var t="_"+r;this.shouldUpdateCallback(this[t],e)&&(this[t]=e,this._props[r]=e,o&&p(n.__proto__||Object.getPrototypeOf(n),r,e,this),this._isConnected&&this._hasRendered&&this.reRender())}})}),l}return r(u,I),n(u,[{key:"_initialise",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;this._styles=e,this._template=t,this._hasTemplate=!!t,this._hasRendered=!1,this._isConnected=!1}},{key:"connectedCallback",value:function(){var o=this;if(!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(e)&&e.forEach(function(e){var t=M(e);if(o.hasAttribute(e)){var n=function(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;return t?n=e.getAttribute(t):t=e.name,n=C(n,t)}(o,e),r=o._hasKeys[t];o["_"+t]=n,o._props[t]=n,r&&p(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),t,n,o)}})}this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"attributeChangedCallback",value:function(e,t,n){this.shouldUpdateCallback(n,t)&&(this[M(e)]=C(n))}},{key:"batchProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t;Object.keys(e).filter(function(e){return-1<n.indexOf(e.replace(D,z))}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.render()}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled(),this._isConnected=!1}},{key:"_appendStyles",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var n=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var r=document.createDocumentFragment(),o=[];this.firstChild;)o.push(this.firstChild),r.appendChild(this.firstChild);this._lightDOMRefs=o,this.childrenFragment=r}else this._lightDOMRefs.forEach(function(e){var t=e.cloneNode(!0);n.childrenFragment.appendChild(t)});var i=t(this._props,this.childrenFragment),a=document.createDocumentFragment();if(Array.isArray(i))i.forEach(function(e){a.appendChild(e)});else if(i){if("string"==typeof i){var s=new Error(q);throw console.error("\n%cWeb Component %c"+this.nodeName+"%c#"+this._id+" does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+s.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),s}a.appendChild(i)}if(e)d(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"appendChild",this).call(this,a);else{var l=this.cloneNode(!1);l._isMorphing=!0,l.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":g(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":g(t)))throw new Error("componentMorph: newTree should be an object");b(t,e)}(this,l),function(){for(var e=void 0;e=_.pop();)delete e.isSameNode;_=[]}(),this._isMorphing=!1}}catch(s){s.message!==q&&console.error("\n%cWeb Component %c"+this.nodeName+"%c#"+this._id+" has an error while loading its template:\n"+s+"\n\nStack Trace: "+s.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}},{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):d(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"appendChild",this).call(this,e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;S[e]||(S[e]={count:0,queue:[]});var r=S[e].queue;Array.isArray(r)?r.push([e,t,n]):O(n,e,t)}("context/enabled",this.__contextName=e)}},{key:"selectContext",value:function(e){this.__selectedContext=e&&e.toLowerCase()}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else p(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else p(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else p(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"innerHTML",e,this)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),u}()),G={},Z=function(e){function t(){return c(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,B),n(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:B.uuidv4();if(e&&!G[e]){var n=document.createElement("style"),r=document.createTextNode(e);n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),G[e]=!0}}}]),t}(),J=".m-footer-languages {\n  padding-right: 15px;\n  padding-left: 15px;\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  max-width: 33.33333%;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 33.33333%;\n          flex: 0 0 33.33333%;\n  display: block; }\n  @media (max-width: 991px) {\n    .m-footer-languages {\n      position: static;\n      width: auto;\n      max-width: none;\n      -webkit-box-flex: 1;\n          -ms-flex: auto;\n              flex: auto; } }\n\n.m-footer-languages__title {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  color: #fff;\n  text-transform: uppercase; }\n  @media (min-width: 576px) {\n    .m-footer-languages__title {\n      font-size: 16px; } }\n  @media (max-width: 991px) {\n    .m-footer-languages__title {\n      display: none !important; } }\n\n.m-footer-languages__list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  *zoom: 1;\n  margin-right: -10px;\n  margin-left: -10px; }\n  .m-footer-languages__list::before, .m-footer-languages__list::after {\n    display: table;\n    content: \" \"; }\n  .m-footer-languages__list::after {\n    clear: both; }\n\n.m-footer-languages__list-item {\n  position: relative;\n  display: block;\n  float: left; }\n  .m-footer-languages__list-item::after {\n    position: absolute;\n    left: 0;\n    top: 50%;\n    display: block;\n    width: 1px;\n    height: 14px;\n    margin-top: -7px;\n    content: '';\n    background: rgba(255, 255, 255, 0.65); }\n  .m-footer-languages__list-item:first-child::after {\n    display: none; }\n\n.m-footer-languages__link {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  display: block;\n  padding: 16px 10px 17px;\n  color: rgba(255, 255, 255, 0.65);\n  text-transform: uppercase; }\n  @media (min-width: 576px) {\n    .m-footer-languages__link {\n      font-size: 14px;\n      line-height: 1.21; } }\n  .m-footer-languages__link:hover, .m-footer-languages__link:active, .m-footer-languages__link.is-footer-languages-active {\n    color: #fff;\n    text-decoration: none; }\n\n.m-footer-languages--inline {\n  position: static;\n  width: auto;\n  max-width: none;\n  -webkit-box-flex: 1;\n      -ms-flex: auto;\n          flex: auto; }\n  .m-footer-languages--inline .m-footer-languages__box {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .m-footer-languages--inline .m-footer-languages__title {\n    font-size: 12px;\n    font-weight: 700;\n    line-height: 1.5;\n    letter-spacing: 0.02em;\n    display: block;\n    margin-right: 20px; }\n    @media (min-width: 576px) {\n      .m-footer-languages--inline .m-footer-languages__title {\n        font-size: 14px;\n        line-height: 1.21; } }\n    .m-footer-languages--inline .m-footer-languages__title::after {\n      content: ':'; }\n",X=/\n[\s]+$/,Q=/^\n[\s]+/,Y=/[\s]+$/,ee=/^[\s]+/,te=/[\n\s]+/g,ne=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],re=["code","pre","textarea"],oe=function e(t,n){if(Array.isArray(n))for(var r,o,i=t.nodeName.toLowerCase(),a=!1,s=0,l=n.length;s<l;s++){var u=n[s];if(Array.isArray(u))e(t,u);else{("number"==typeof u||"boolean"==typeof u||"function"==typeof u||u instanceof Date||u instanceof RegExp)&&(u=u.toString());var c=t.childNodes[t.childNodes.length-1];if("string"==typeof u)a=!0,c&&"#text"===c.nodeName?c.nodeValue+=u:(u=document.createTextNode(u),t.appendChild(u),c=u),s===l-1&&(a=!1,-1===ne.indexOf(i)&&-1===re.indexOf(i)?""===(r=c.nodeValue.replace(Q,"").replace(Y,"").replace(X,"").replace(te," "))?t.removeChild(c):c.nodeValue=r:-1===re.indexOf(i)&&(o=0===s?"":" ",r=c.nodeValue.replace(Q,o).replace(ee," ").replace(Y,"").replace(X,"").replace(te," "),c.nodeValue=r));else if(u&&u.nodeType){a&&(a=!1,-1===ne.indexOf(i)&&-1===re.indexOf(i)?""===(r=c.nodeValue.replace(Q,"").replace(X,"").replace(te," "))?t.removeChild(c):c.nodeValue=r:-1===re.indexOf(i)&&(r=c.nodeValue.replace(ee," ").replace(Q,"").replace(X,"").replace(te," "),c.nodeValue=r));var d=u.nodeName;d&&(i=d.toLowerCase()),t.appendChild(u)}}}};function ie(e){var t,n,r,o=e.title,i=e.items,u=e.short;return(n=document.createElement("aside")).setAttribute("class","m-footer-languages__box"),oe(n,["\n    ",o&&(r=document.createElement("strong"),r.setAttribute("class","m-footer-languages__title"),oe(r,[o]),r),"\n\n    ",(t=document.createElement("ul"),t.setAttribute("class","m-footer-languages__list"),oe(t,["\n      ",Array.isArray(i)&&i.map(function(e){var t,n,r=e.name,o=e.code,i=void 0===o?"en":o,a=e.url,s=void 0===a?"":a,l=e.isActive;return(n=document.createElement("li")).setAttribute("class","m-footer-languages__list-item"),oe(n,["\n          ",(t=document.createElement("a"),t.setAttribute("href",""+String(s)),t.setAttribute("lang",""+String(i)),t.setAttribute("class",""+String(h("m-footer-languages__link",{"is-footer-languages-active":l}))),oe(t,[u?i:r]),t),"\n        "]),n}),"\n    "]),t),"\n  "]),n}var ae,se,le,ue=function(e){function t(){return c(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,J,ie))}return r(t,Z),n(t,null,[{key:"observedAttributes",get:function(){return["inline","items","short","title"]}}]),n(t,[{key:"willRenderCallback",value:function(){var e=this.inline;this.className=h(this.initialClassName,"m-footer-languages",{"m-footer-languages--inline":e})}}]),t}();return ae=function(){window.customElements.define("axa-footer-languages",ue)},se=0,le=function(){if(0===se)try{ae.apply(void 0,arguments),se+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",le,!1),document.addEventListener("WebComponentsReady",le,!1),ue});
