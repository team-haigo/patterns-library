var StyleGuideWebComponent=function(){"use strict";var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}})()&&Object.assign;var s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},l=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},r=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},a=function(e,t){var n={};for(var r in e)0<=t.indexOf(r)||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},d=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},o=function e(t,n,r,o){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,r,o)}else if("value"in i&&i.writable)i.value=r;else{var s=i.set;void 0!==s&&s.call(o,r)}return r},c=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},O=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function f(){}var h,v=(function(e){e.exports=function(){function e(e,t,n,r,o,i){if(i!==s){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}var n={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=f,n.PropTypes=n}()}(h={exports:{}},h.exports),h.exports),y=0;function b(e,t){var n=e[t];return"function"==typeof n&&(e[t]=function(t){function n(){return t.apply(void 0,arguments)}return 0===y&&(y++,Object.keys(t).map(function(e){return n[e]=t[e],e}).reduce(b,n),y--),n}(n)),e}var m=v;Object.keys(m).reduce(b,m);var g=m.oneOf(["left","center","right"]),C=m.oneOf(["left","right"]);function k(r){function e(e,t,n){return null==e[t]?null:r(e,t,n)}return e.isRequired=r,e}var x=/^[a-z]{2,4}(-([A-Z][a-z]{3}|[0-9]{3}))?(-([A-Z]{2}|[0-9]{3}))?$/;k(function(e,t,n){if(!x.test(e[t]))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`, expected a valid locale.")});m.oneOf(["top","bottom"]);var T=m.oneOf(["up","down"]),w=m.oneOf(["ok","pending","error","unknown"]),A=m.oneOf(["row","col","rowgroup","colgroup","auto"]),E=m.oneOfType([m.string,m.number]),N={text:E,value:m.any,rowspan:E,colspan:E,scope:A,align:g,dense:m.bool},j={float:C,strong:m.bool,bold:m.bool},P=m.oneOfType([m.string,m.number]),S=m.oneOfType([P,m.shape(i({},N,{sort:T,sortActive:m.bool}))]),R=m.oneOfType([P,m.shape(i({},N,j,{action:m.bool,state:w}))]),D=m.oneOfType([P,m.shape(i({},N,j))]),L=m.oneOfType([m.arrayOf(S),m.shape({cells:m.arrayOf(S)})]),U=m.oneOfType([m.arrayOf(R),m.shape({cells:m.arrayOf(R),action:m.bool})]),I=m.oneOfType([m.arrayOf(D),m.shape({cells:m.arrayOf(D)})]);m.oneOfType([L,m.arrayOf(L)]),m.oneOfType([U,m.arrayOf(U)]),m.oneOfType([I,m.arrayOf(I)]);var M,V,q,F,H=k(function(e,t,n){try{new window.URL(e[t],function(){if(document.baseURI)return document.baseURI;var e=document.getElementsByName("base");return e.length&&e[0].href?e[0].href:window.location.href}())}catch(e){return new Error("Invalid prop `"+t+"` supplied to `"+n+"`, expected a valid URL. "+e.message)}return null}),K=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}},$={},W=(M=Object,V=M.getPrototypeOf||function(e){return e.__proto__},q=M.setPrototypeOf||function(e,t){return e.__proto__=t,e},F="object"===("undefined"==typeof Reflect?"undefined":_(Reflect))?Reflect.construct:function(e,t,n){var r,o=[null];return o.push.apply(o,t),r=e.bind.apply(e,o),q(new r,n.prototype)},function(e){var t=V(e);return q(e,q(function(){return F(t,arguments,V(this).constructor)},t))}),z=function(n){return W(function(e){function t(){return u(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,n),l(t,[{key:"init",value:function(){var e;this._id=((e=this.nodeName)in $||($[e]=0),++$[e]),this._initialised=!0}},{key:"connectedCallback",value:function(){this._initialised||this.init()}},{key:"attributeChangedCallback",value:function(){this._initialised||this.init()}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}())},B={},G=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,s=void 0===a?void 0:a,c=document.createEvent("CustomEvent");c.initCustomEvent(e,r,i,s);var u=c.preventDefault;return c.preventDefault=function(){u.call(c);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},c}}();function Z(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},o=new G(t,i({},r,{detail:n}));return e.dispatchEvent(o)}var J=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function Y(e){for(var o=e.className,i=!1,a=!0,t=arguments.length,n=Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var s=n.map(function(e){var t=(n=e,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",r)).test(o);var n,r;t?i=!0:a=!1;return{className:e,hasClass:t}});return!(!a&&!i)&&s}var X=/\s+/,Q={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==e[o=n[i]])return t[o];return""}()};function ee(n,e,r,o){var t=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},i=t.capture,a=void 0!==i&&i,s=t.passive,c=void 0===s||s;if(Q[e]&&(e=Q[e]),!n||!e)return null;var u=void 0===r?"undefined":_(r),l=r&&"string"===u;if("function"===u){if(o){var p=o;a=p.capture,c=p.passive}o=r}for(var d=J?{capture:a,passive:c}:a,f=l?function(e){var t=e.target;for(;!Y(t,r)&&t!==n;)t=t.parentNode;if(t!==n)return o(e,t)}:o,h=e.split(X),v=h.length,y=0;y<v;++y)n.addEventListener(h[y],f,d);return function e(){for(var t=0;t<v;++t)n.removeEventListener(h[t],f,d);!function(e,t){if(!e)return;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}}(this,e)}}function te(r){var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=e.leading,i=void 0!==t&&t,n=e.trailing,a=void 0===n||n,s=e.maxWait,c=void 0!==s&&s,u=void 0,l=void 0,p=void 0,d=void 0,f=!1,h=o!==c,v=!1!==c;function y(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return u=t,h&&(l&&clearTimeout(l),l=setTimeout(_,o)),v&&!p&&(p=setTimeout(b,c)),i&&!f&&(f=!0,d=r.apply(void 0,O(u))),d}return y.flush=function(){(l||p)&&(d=r.apply(void 0,O(u)));return g(),d},y.cancel=g,y;function _(){p&&clearTimeout(p),m()}function b(){l&&clearTimeout(l),m()}function m(){a&&(d=r.apply(void 0,O(u))),p=l=null,f=!1}function g(){l&&(clearTimeout(l),l=null),p&&(clearTimeout(p),p=null),u=void 0,f=!1}}window.__subscriptions=window.__subscriptions||{};var ne=window.__subscriptions;function re(e,t){var n=ee(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,e,t);ne[e]||(ne[e]={count:0});var r,o=ne[e];return o.count++,o.onsubscribe||(o.onsubscribe=te((r=e,function(){Z(document,"pubsub/onsubscribe",r),Z(document,"pubsub/onsubscribe/"+r,r),ne[r]&&delete ne[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete ne[e]}}ee(document,"pubsub/onsubscribe",function(e){var t=e.detail;ne[t]||(ne[t]={count:0});var n=ne[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=c(e,3),n=t[0],r=t[1],o=t[2];Z(o,n,r)}),delete n.queue)});var oe,ie=function(e,t){return e===t},ae=((oe=function(){var e;return(e=console).log.apply(e,arguments)},function(){var o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:ie;return function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return o.apply(void 0,[].concat(r,t))?oe.apply(void 0,arguments):void 0}}}})()(!0),[]);var se=1,ce=3,ue=8;function le(e,t){var n=e.nodeType,r=e.nodeName;n===se&&function(e,t){for(var n=t.skipChildren&&t.skipChildren(),r=t.constructor.observedAttributes,o=r&&Array.isArray(r)&&r.length,i=function(e){return n&&o&&-1===r.indexOf(e)},a=t.attributes,s=e.attributes,c=null,u=null,l=null,p=null,d=s.length-1;0<=d;--d)if(p=s[d],l=p.name,c=p.namespaceURI,u=p.value,!i(l))if(c){var f=p.localName;t.getAttributeNS(c,f||l)!==u&&t.setAttributeNS(c,l,u)}else t.hasAttribute(l)?t.getAttribute(l)!==u&&("null"===u||"undefined"===u?t.removeAttribute(l):t.setAttribute(l,u)):t.setAttribute(l,u);for(var h=a.length-1;0<=h;--h)if(!1!==(p=a[h]).specified){if(l=p.name,c=p.namespaceURI,i(l))continue;c?(l=p.localName||l,e.hasAttributeNS(c,l)||t.removeAttributeNS(c,l)):e.hasAttributeNS(null,l)||t.removeAttribute(l)}}(e,t),n!==ce&&n!==ue||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===r?function(e,t){var n=e.value,r=t.value;pe(e,t,"checked"),pe(e,t,"disabled"),n!==r&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===r?pe(e,t,"selected"):"TEXTAREA"===r&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function pe(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var de=3;function fe(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(le(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,r=void 0,o=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],r=e.childNodes[s-a],n||r;s++)if(r)if(n)if(he(r,n))(o=fe(r,n))!==n&&(t.replaceChild(o,n),a++);else{i=null;for(var c=s;c<t.childNodes.length;c++)if(he(t.childNodes[c],r)){i=t.childNodes[c];break}i?((o=fe(r,i))!==i&&a++,t.insertBefore(o,n)):r.id||n.id?(t.insertBefore(r,n),a++):(o=fe(r,n))!==n&&(t.replaceChild(o,n),a++)}else t.appendChild(r),a++;else t.removeChild(n),s--}(e,t),t):null:e}function he(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===de&&e.nodeValue===t.nodeValue)}var ve,ye,_e,be,me=(ve=Object,ye=ve.getPrototypeOf||function(e){return e.__proto__},_e=ve.setPrototypeOf||function(e,t){return e.__proto__=t,e},be="object"===("undefined"==typeof Reflect?"undefined":_(Reflect))?Reflect.construct:function(e,t,n){var r,o=[null];return o.push.apply(o,t),r=e.bind.apply(e,o),_e(new r,n.prototype)},function(e){var t=ye(e);return _e(e,_e(function(){return be(t,arguments,ye(this).constructor)},t))})(function(e){function s(e){var t;u(this,s);for(var n="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",r=arguments.length,o=Array(1<r?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];var a=d(this,(t=s.__proto__||Object.getPrototypeOf(s)).call.apply(t,[this,n].concat(o)));return Error.captureStackTrace&&Error.captureStackTrace(a,s),a.name="TemplateNoStringReturnException",a}return r(s,e),s}(Error)),ge=!!document.createDocumentFragment().children,Oe=/[A-Z]/g;function Ce(e){return e.replace(Oe,ke)}function ke(e,t,n){var r=e.toLowerCase(),o=n.charAt(t+1);return 0===t||o.toUpperCase()===o?r:"-"+r}var xe=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function Te(t,n,e){var r=t;if(e)return function(t,n,e){var r=t;switch(e){case m.string:case m.string.isRequired:return t;case m.bool:case m.bool.isRequired:if(!t||n===t)return!0;case m.number:case m.number.isRequired:case m.object:case m.object.isRequired:case m.array:case m.array.isRequired:default:if(xe.test(t))try{r=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}return r}(t,n,e);if(t&&n!==t){if(xe.test(t))try{r=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else r=!0;return r}var we=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,Ae=/[-_]+/g;function Ee(e){return e.replace(we,Ne)}function Ne(e,t){return 0==+e||Ae.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function je(e,t,n){var r=1===e.nodeType,o=e.constructor.propTypes,i=n;!n&&r&&(i=(void 0===o?{}:o)[Ee(t)]);if(r&&!e.hasAttribute(t))return i!==m.bool&&i!==m.bool.isRequired&&void 0;var a=e.value;return t?a=e.getAttribute(t):t=e.name,a=Te(a,t,i)}var Pe=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function Se(n,e,r){var t,o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},i=o.capture,a=void 0===i||i,s=o.passive,c=void 0===s||s,u=n.ownerDocument.documentElement,l=ee(u,e,function(e){var t=e.target;if(!n.contains(t)&&n!==t)return r(e)},{capture:a,passive:c});return t=u,Pe&&(t.style.cursor="pointer"),l}var Re=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r=t.length,o={},i=0;i<r;++i){var a=t[i];o[a.toUpperCase()]=a}return o}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize"),De="axa-change",Le="data-prevent-default";(function(){function r(e){var i=this,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};u(this,r),this._handleClick=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var n=!i._lastToggleNode,r=t!==i._lastToggleNode,o=!n&&!r;n?(i._notify(Re.ENTER,t),i._onInteractive()):r&&i._notify(Re.MOVE,t,i._lastToggleNode),i._lastToggleNode=t,o&&i._options.sameClickClose&&i._close()},this._handleClose=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),i._close()},this._handleKeyUp=function(e){(e.key===Re.ESCAPE||e.key===Re.ESC||27===e.keyCode)&&(e.preventDefault(),i._close())},this._init(e,t)}return l(r,[{key:"_init",value:function(e,t){e&&(this._wcNode=e),t&&(this._options=i({},r.DEFAULTS,t));var n=this._options.containerClass;this._container=n?this._wcNode.querySelector(n):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=ee(this._container,Re.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=ee(this._container,Re.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=Se(this._container,Re.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=ee(this._container.ownerDocument,Re.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(Le)?je(e,Le):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(Re.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),r}()).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var Ue=K(function(n){var e,t;return t=e=function(e){function t(){return u(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,n),t}(),e.version="2.0.1-beta.226",t},function(t){return function(e){function a(){var e,t,n;u(this,a);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=n=d(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(o))))._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;n.contextNode&&(clearTimeout(n.timeoutId),n.timeoutId=setTimeout(function(){n.contextCallback(n.contextNode,e)},10)),n.unContextEnabled&&n.unContextEnabled(),n.unContextEnabled=re("context/available",n._makeContextReady)},d(n,t)}return r(a,t),l(a,[{key:"connectedCallback",value:function(){p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this)&&p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this)&&p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;ne[e]||(ne[e]={count:0,queue:[]});var r=ne[e].queue;Array.isArray(r)?r.push([e,t,n]):Z(n,e,t)}("context/available",this.__contextName=e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),a}()},function(t){return function(e){function n(){return u(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return r(n,t),l(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):p(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else o(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else o(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else o(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(t){return function(e){function i(){var e,t,s;u(this,i);for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=s=d(this,(e=i.__proto__||Object.getPrototypeOf(i)).call.apply(e,[this].concat(r))))._reduceProps=function(e,t){var n=e.props,r=e.shouldUpdate,o="_"+t,i=n[t],a=s[o];return r||s.shouldUpdateCallback(i,a)?(s.props[t]=i,{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},d(s,t)}return r(i,t),l(i,[{key:"init",value:function(e){var t=this;p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"init",this).call(this,e),this._isConnected=!1,this.props={},this.updatedDebounced=te(function(){return t.updated&&t.updated()},50);var n=this.constructor.observedAttributes;Array.isArray(n)&&n.forEach(function(e){Ee(e)})}},{key:"connectedCallback",value:function(){var r=this;if(p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(e)){var o=this.constructor.propTypes;e.forEach(function(e){var t=Ee(e);if(r.hasAttribute(e)){var n=je(r,e,o[t]);r.props[t]=n}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this)&&p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this).call(this,e,t,n),this.shouldUpdateCallback(n,t)){var r=Ee(e);if(this.hasAttribute(e)){var o=this.constructor.propTypes;this.props[r]=Te(n,e,o[r])}else this.props[r]=null;this.checkPropTypes(),"value"===e&&null!==n&&Z(this,De,n,{bubbles:!0,cancelable:!0,composed:!0}),this.updatedDebounced()}}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t,r=Object.keys(e).filter(function(e){return-1<n.indexOf(Ce(e))}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),r&&this._isConnected&&this.updated&&this.updated()}},{key:"checkPropTypes",value:function(){var e=this.constructor,t=e.propTypes,n=e.tagName;t&&m.checkPropTypes(t,this.props,"prop",n)}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}],[{key:"observedAttributes",get:function(){var e=this.propTypes;return e&&Object.keys(e).map(Ce)}}]),i}()},function(t){return function(e){function c(){return u(this,c),d(this,(c.__proto__||Object.getPrototypeOf(c)).apply(this,arguments))}return r(c,t),l(c,[{key:"init",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.template,n=a(e,["template"]);p(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"init",this).call(this,n),this._template=t,this._hasTemplate=!!t,this._hasRendered=!1,this.updated=this.render}},{key:"render",value:function(){var n=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var r=document.createDocumentFragment(),o=[];this.firstChild;)o.push(this.firstChild),r.appendChild(this.firstChild);this._lightDOMRefs=o,this.childrenFragment=r}else this._lightDOMRefs.forEach(function(e){var t=e.cloneNode(!0);n.childrenFragment.appendChild(t)});ge||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var i=t(this.props,this.childrenFragment,this),a=document.createDocumentFragment();if(Array.isArray(i))i.forEach(function(e){a.appendChild(e)});else if(i){if("string"==typeof i)throw new me(this);a.appendChild(i)}if(e)p(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"appendChild",this).call(this,a);else{var s=this.cloneNode(!1);s._isMorphing=!0,s.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":_(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":_(t)))throw new Error("componentMorph: newTree should be an object");fe(t,e)}(this,s),function(){for(var e=void 0;e=ae.pop();)delete e.isSameNode;ae=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),c}()},function(t){return function(e){function o(){return u(this,o),d(this,(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments))}return r(o,t),l(o,[{key:"init",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,n=void 0===t?"":t,r=a(e,["styles"]);p(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"init",this).call(this,r),this._styles=n}},{key:"connectedCallback",value:function(){p(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this)&&p(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),o}()}),Ie=(K(Ue,z),K(Ue,function(o){return function(e){function a(){var e,t,n;u(this,a);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=n=d(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(o))))._appendStyles=function(){a.appendGlobalStyles(n._styles,n.nodeName)},d(n,t)}return r(a,o),l(a,null,[{key:"appendGlobalStyles",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:o.uuidv4();if(e&&!B[t]){var n=document.createElement("style"),r=document.createTextNode(e);B[t]=!0,n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),a}()},z)(HTMLElement));var Me=/\n[\s]+$/,Ve=/^\n[\s]+/,qe=/[\s]+$/,Fe=/^[\s]+/,He=/[\n\s]+/g,Ke=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],$e=["code","pre","textarea"],We=function e(t,n){if(Array.isArray(n))for(var r,o,i=t.nodeName.toLowerCase(),a=!1,s=0,c=n.length;s<c;s++){var u=n[s];if(Array.isArray(u))e(t,u);else{("number"==typeof u||"boolean"==typeof u||"function"==typeof u||u instanceof Date||u instanceof RegExp)&&(u=u.toString());var l=t.childNodes[t.childNodes.length-1];if("string"==typeof u)a=!0,l&&"#text"===l.nodeName?l.nodeValue+=u:(u=document.createTextNode(u),t.appendChild(u),l=u),s===c-1&&(a=!1,-1===Ke.indexOf(i)&&-1===$e.indexOf(i)?""===(r=l.nodeValue.replace(Ve,"").replace(qe,"").replace(Me,"").replace(He," "))?t.removeChild(l):l.nodeValue=r:-1===$e.indexOf(i)&&(o=0===s?"":" ",r=l.nodeValue.replace(Ve,o).replace(Fe," ").replace(qe,"").replace(Me,"").replace(He," "),l.nodeValue=r));else if(u&&u.nodeType){a&&(a=!1,-1===Ke.indexOf(i)&&-1===$e.indexOf(i)?""===(r=l.nodeValue.replace(Ve,"").replace(Me,"").replace(He," "))?t.removeChild(l):l.nodeValue=r:-1===$e.indexOf(i)&&(r=l.nodeValue.replace(Fe," ").replace(Ve,"").replace(Me,"").replace(He," "),l.nodeValue=r));var p=u.nodeName;p&&(i=p.toLowerCase()),t.appendChild(u)}}}};var ze,Be,Ge,Ze=function(e){var t,n=document.createElement("div");return n.innerHTML=e,t=n.childNodes,Array.isArray(t)?t:[].slice.call(t)},Je=function(){var e,t,n,r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},o=r.action,i=r.href,a=r.method,s=void 0===a?"POST":a;return(n=document.createElement("form")).setAttribute("action",""+String(o)),n.setAttribute("method",""+String(s)),n.setAttribute("class","m-header-search__form"),We(n,["\n    ",(e=document.createElement("a"),e.setAttribute("href",""+String(i)),e.setAttribute("class","m-header-search__page-link"),We(e,["\n      ",Ze('<axa-icon icon="search-left" classes="m-header-search__icon"></axa-icon>'),"\n    "]),e),"\n\n    ",(t=document.createElement("input"),t.setAttribute("type","text"),t.setAttribute("placeholder","search..."),t.setAttribute("class","m-header-search__input"),t),"\n  "]),n},Ye=function(e){function t(){return u(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,Ie),l(t,[{key:"init",value:function(){p(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"init",this).call(this,{styles:".m-header-search {\n  display: block; }\n  @media (max-width: 991px) {\n    .m-header-search {\n      margin-left: auto; } }\n\n.m-header-search__form {\n  display: block;\n  padding: 6px 0 6px 20px;\n  margin-left: 20px;\n  border-left: 1px solid #ccc; }\n  @media (max-width: 991px) {\n    .m-header-search__form {\n      padding-left: 0;\n      padding-right: 20px;\n      border-left: none;\n      border-right: 1px solid #ccc; } }\n\n.m-header-search__input {\n  display: none; }\n\n.m-header-search__icon {\n  width: 25px;\n  height: 25px;\n  display: block;\n  fill: currentColor;\n  color: #7f7f7f; }\n",template:Je})}},{key:"connectedCallback",value:function(){p(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" m-header-search"}}],[{key:"observedAttributes",get:function(){return["action","href","method"]}}]),t}();return Ye.tagName="axa-header-search",Ye.propTypes={action:m.string,href:H,method:m.oneOf(["GET","POST"])},ze=Ye.tagName,Be=Ye,customElements.get(ze)||customElements.define(ze,Be,Ge),Ye}();
