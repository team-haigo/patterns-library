!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";var e={},t=function(t){return t in e||(e[t]=0),++e[t]},n=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,c=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,r,i,c);var s=l.preventDefault;return l.preventDefault=function(){s.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}(),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},l=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},s=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},u=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},d=function e(t,n,r,o){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,r,o)}else if("value"in i&&i.writable)i.value=r;else{var c=i.set;void 0!==c&&c.call(o,r)}return r},p=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&c.return&&c.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),f=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function h(e,t,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=new n(t,a({},o,{detail:r}));return e.dispatchEvent(i)}var v=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function y(e){for(var t=e.className,n=!1,r=!0,o=arguments.length,i=Array(o>1?o-1:0),a=1;a<o;a++)i[a-1]=arguments[a];var c=i.map(function(e){var o=(i=e,new RegExp("^"+i+"$|^"+i+"\\s|\\s"+i+"\\s|\\s"+i+"$",a)).test(t);var i,a;o?n=!0:r=!1;return{className:e,hasClass:o}});return!(!r&&!n)&&c}var _=/\s+/,b={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==e[o=n[i]])return t[o];return""}()};function m(e,t,n,o){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=i.capture,c=void 0!==a&&a,l=i.passive,s=void 0===l||l;if(b[t]&&(t=b[t]),!e||!t)return null;var u=void 0===n?"undefined":r(n),d=n&&"string"===u;if("function"===u){if(o){var p=o;c=p.capture,s=p.passive}o=n}for(var f=v?{capture:c,passive:s}:c,h=d?function(t){var r=t.target;for(;!y(r,n)&&r!==e;)r=r.parentNode;if(r!==e)return o(t,r)}:o,m=t.split(_),g=m.length,x=0;x<g;++x)e.addEventListener(m[x],h,f);return function t(){for(var n=0;n<g;++n)e.removeEventListener(m[n],h,f);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}}(this,t)}}function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.leading,o=void 0!==r&&r,i=n.trailing,a=void 0===i||i,c=n.maxWait,l=void 0!==c&&c,s=void 0,u=void 0,d=void 0,p=void 0,h=!1,v=t!==l,y=!1!==l;function _(){for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return s=r,v&&(u&&clearTimeout(u),u=setTimeout(b,t)),y&&!d&&(d=setTimeout(m,l)),o&&!h&&(h=!0,p=e.apply(void 0,f(s))),p}return _.flush=function(){(u||d)&&(p=e.apply(void 0,f(s)));return x(),p},_.cancel=x,_;function b(){d&&clearTimeout(d),g()}function m(){u&&clearTimeout(u),g()}function g(){a&&(p=e.apply(void 0,f(s))),u=null,d=null,h=!1}function x(){u&&(clearTimeout(u),u=null),d&&(clearTimeout(d),d=null),s=void 0,h=!1}}window.__subscriptions=window.__subscriptions||{};var x=window.__subscriptions;function k(e,t){var n=m(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);x[e]||(x[e]={count:0});var r,o=x[e];return o.count++,o.onsubscribe||(o.onsubscribe=g((r=e,function(){h(document,"pubsub/onsubscribe",r),h(document,"pubsub/onsubscribe/"+r,r),x[r]&&delete x[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete x[e]}}m(document,"pubsub/onsubscribe",function(e){var t=e.detail;x[t]||(x[t]={count:0});var n=x[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=p(e,3),n=t[0],r=t[1],o=t[2];h(o,n,r)}),delete n.queue)});var O,C=function(e,t){return e===t},w=((O=function(){var e;return(e=console).log.apply(e,arguments)},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C;return function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];return function(){return e.apply(void 0,[].concat(n,r))?O.apply(void 0,arguments):void 0}}}})()(!0),function(e){function t(e,n){var r;o(this,t);for(var i="\n    Native Property >>>"+e+"<<< exists already at "+n.nodeName+"#"+n._id+" and evaluates to -> "+n[e]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",a=arguments.length,c=Array(a>2?a-2:0),l=2;l<a;l++)c[l-2]=arguments[l];var s=u(this,(r=t.__proto__||Object.getPrototypeOf(t)).call.apply(r,[this,i].concat(c)));return Error.captureStackTrace&&Error.captureStackTrace(s,t),s.name="PropertyExistsException",s}return l(t,e),t}(Error)),A=/[A-Z]/g;function N(e,t,n){var r=e.toLowerCase(),o=n.charAt(t+1);return 0===t||o.toUpperCase()===o?r:"-"+r}var E=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function j(e,t){var n=e;if(e&&t!==e){if(E.test(e))try{n=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}else n=!0;return n}var P=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,T=/[-_]+/g;function S(e){return e.replace(P,R)}function R(e,t){return 0==+e||T.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}var M=["title","checked","disabled"],D=[];var L=1,V=3,U=8;function H(e,t){var n=e.nodeType,r=e.nodeName;n===L&&function(e,t){for(var n=t.attributes,r=e.attributes,o=null,i=null,a=null,c=null,l=r.length-1;l>=0;--l)if(c=r[l],a=c.name,o=c.namespaceURI,i=c.value,o){var s=c.localName;t.getAttributeNS(o,s||a)!==i&&t.setAttributeNS(o,a,i)}else t.hasAttribute(a)?t.getAttribute(a)!==i&&("null"===i||"undefined"===i?t.removeAttribute(a):t.setAttribute(a,i)):t.setAttribute(a,i);for(var u=n.length-1;u>=0;--u)!1!==(c=n[u]).specified&&(a=c.name,(o=c.namespaceURI)?(a=c.localName||a,e.hasAttributeNS(o,a)||t.removeAttributeNS(o,a)):e.hasAttributeNS(null,a)||t.removeAttribute(a))}(e,t),n!==V&&n!==U||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===r?function(e,t){var n=e.value,r=t.value;I(e,t,"checked"),I(e,t,"disabled"),n!==r&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===r?I(e,t,"selected"):"TEXTAREA"===r&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function I(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var F=3;function W(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(H(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,r=void 0,o=void 0,i=void 0,a=0,c=0;n=t.childNodes[c],r=e.childNodes[c-a],n||r;c++)if(r)if(n)if(q(r,n))(o=W(r,n))!==n&&(t.replaceChild(o,n),a++);else{i=null;for(var l=c;l<t.childNodes.length;l++)if(q(t.childNodes[l],r)){i=t.childNodes[l];break}i?((o=W(r,i))!==i&&a++,t.insertBefore(o,n)):r.id||n.id?(t.insertBefore(r,n),a++):(o=W(r,n))!==n&&(t.replaceChild(o,n),a++)}else t.appendChild(r),a++;else t.removeChild(n),c--}(e,t),t):null:e}function q(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===F&&e.nodeValue===t.nodeValue)}var z=function(e){function t(e){var n;o(this,t);for(var r="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",i=arguments.length,a=Array(i>1?i-1:0),c=1;c<i;c++)a[c-1]=arguments[c];var l=u(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this,r].concat(a)));return Error.captureStackTrace&&Error.captureStackTrace(l,t),l.name="TemplateNoStringReturnException",l}return l(t,e),t}(Error),$=!!document.createDocumentFragment().children;function K(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(K.prototype,HTMLElement.prototype),Object.setPrototypeOf(K,HTMLElement);var G=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(e){return function(t){function n(){var e,t,r;o(this,n);for(var i=arguments.length,a=Array(i),c=0;c<i;c++)a[c]=arguments[c];return t=r=u(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(a))),r._makeContextReady=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;r.contextNode&&(clearTimeout(r.timeoutId),r.timeoutId=setTimeout(function(){r.contextCallback(r.contextNode,e)},10)),r.unContextEnabled&&r.unContextEnabled(),r.unContextEnabled=k("context/available",r._makeContextReady)},u(r,t)}return l(n,e),i(n,[{key:"connectedCallback",value:function(){c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this)&&c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;x[e]||(x[e]={count:0,queue:[]});var r=x[e].queue;Array.isArray(r)?r.push([e,t,n]):h(n,e,t)}("context/available",e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),n}()},function(e){return function(t){function n(){return o(this,n),u(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return l(n,e),i(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(e){return function(t){function n(e){o(this,n);var t=u(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));t._reduceProps=function(e,r){var o=e.props,i=e.shouldUpdate,a=t._hasKeys[r];if(-1===M.indexOf(r)&&a)throw new w(r,t);var c="_"+r,l=o[r],s=t[c];return i||t.shouldUpdateCallback(l,s)?(t[c]=l,t._props[r]=l,a&&d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),r,l,t),{props:o,shouldUpdate:!0}):{props:o,shouldUpdate:!1}},t._isConnected=!1,t._props={},t._hasKeys={},t.updatedDebounced=g(function(){return t.updated&&t.updated()},50);var r=t.constructor.observedAttributes;return Array.isArray(r)&&r.forEach(function(e){var n,r=S(e),o=r in t;if(-1===M.indexOf(r)&&o)throw new w(r,t);t._hasKeys[r]=o,Object.defineProperty(t,r,n={get:function(){return this._props[r]},set:function(e){this.shouldUpdateCallback(this._props[r],e)&&(this._props[r]=e,o&&d(n.__proto__||Object.getPrototypeOf(n),r,e,this),this._isConnected&&this._hasRendered&&this.updatedDebounced())}})}),t}return l(n,e),i(n,[{key:"connectedCallback",value:function(){var e=this;if(c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(t)&&t.forEach(function(t){var r=S(t);if(e.hasAttribute(t)){var o=function(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;return t?n=e.getAttribute(t):t=e.name,n=j(n,t)}(e,t),i=e._hasKeys[r];e._props[r]=o,i&&d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),r,o,e)}})}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(this.shouldUpdateCallback(n,t)){var r=S(e);this.hasAttribute(e)?this[r]=j(n):this[r]=null}}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t;Object.keys(e).filter(function(e){return n.indexOf(e.replace(A,N))>-1}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.updated&&this.updated()}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),n}()},function(e){return function(t){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.template,r=s(e,["template"]);o(this,n);var i=u(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,r));return i._template=t,i._hasTemplate=!!t,i._hasRendered=!1,i.updated=i.render,i}return l(n,e),i(n,[{key:"render",value:function(){var e=this,t=!this._hasRendered;if(this.willRenderCallback(t),this._hasTemplate){var o=this._template;try{if(t){for(var i=document.createDocumentFragment(),a=[];this.firstChild;)a.push(this.firstChild),i.appendChild(this.firstChild);this._lightDOMRefs=a,this.childrenFragment=i}else this._lightDOMRefs.forEach(function(t){var n=t.cloneNode(!0);e.childrenFragment.appendChild(n)});$||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var l=o(this._props,this.childrenFragment),s=document.createDocumentFragment();if(Array.isArray(l))l.forEach(function(e){s.appendChild(e)});else if(l){if("string"==typeof l)throw new z(this);s.appendChild(l)}if(t)c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,s);else{var u=this.cloneNode(!1);u._isMorphing=!0,u.appendChild(s),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":r(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":r(t)))throw new Error("componentMorph: newTree should be an object");W(t,e)}(this,u),function(){for(var e=void 0;e=D.pop();)delete e.isSameNode;D=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(t)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),n}()},function(e){return function(t){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,r=void 0===t?"":t,i=s(e,["styles"]);o(this,n);var a=u(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,i));return a._styles=r,a}return l(n,e),i(n,[{key:"connectedCallback",value:function(){c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),n}()})(function(e){function n(e){o(this,n);var r=u(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return r._id=t(r.nodeName),r}return l(n,K),i(n,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),n}()),B={},Z=function(e){function t(){var e,n,r;o(this,t);for(var i=arguments.length,a=Array(i),c=0;c<i;c++)a[c]=arguments[c];return n=r=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r._appendStyles=function(){t.appendGlobalStyles(r._styles,r.nodeName)},u(r,n)}return l(t,G),i(t,null,[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:G.uuidv4();if(e&&!B[t]){var n=document.createElement("style"),r=document.createTextNode(e);B[t]=!0,n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),t}();var J,X,Q=".o-cookie-disclaimer {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  background-color: #5f5f5f;\n  color: #fff; }\n  .o-cookie-disclaimer p {\n    margin-top: 0; }\n  @media (min-width: 768px) {\n    .o-cookie-disclaimer .u-container {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: end;\n          -ms-flex-pack: end;\n              justify-content: flex-end; } }\n\n.o-cookie-disclaimer--fixed {\n  z-index: 2000;\n  position: fixed;\n  bottom: 0;\n  width: 100%; }\n\n.o-cookie-disclaimer__title {\n  text-transform: uppercase;\n  font-size: 16px; }\n\n.o-cookie-disclaimer__container {\n  width: 100%; }\n\n@media (min-width: 768px) {\n  .o-cookie-disclaimer__container--lx {\n    width: 70%; } }\n\n.o-cookie-disclaimer__container--rx {\n  margin-top: 16px;\n  text-align: center; }\n  @media (min-width: 768px) {\n    .o-cookie-disclaimer__container--rx {\n      width: calc(30% - 30px);\n      margin-top: 0;\n      margin-left: 30px;\n      text-align: left; } }\n",Y=/\n[\s]+$/,ee=/^\n[\s]+/,te=/[\s]+$/,ne=/^[\s]+/,re=/[\n\s]+/g,oe=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],ie=["code","pre","textarea"],ae=function e(t,n){if(Array.isArray(n))for(var r,o,i=t.nodeName.toLowerCase(),a=!1,c=0,l=n.length;c<l;c++){var s=n[c];if(Array.isArray(s))e(t,s);else{("number"==typeof s||"boolean"==typeof s||"function"==typeof s||s instanceof Date||s instanceof RegExp)&&(s=s.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof s)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=s:(s=document.createTextNode(s),t.appendChild(s),u=s),c===l-1&&(a=!1,-1===oe.indexOf(i)&&-1===ie.indexOf(i)?""===(r=u.nodeValue.replace(ee,"").replace(te,"").replace(Y,"").replace(re," "))?t.removeChild(u):u.nodeValue=r:-1===ie.indexOf(i)&&(o=0===c?"":" ",r=u.nodeValue.replace(ee,o).replace(ne," ").replace(te,"").replace(Y,"").replace(re," "),u.nodeValue=r));else if(s&&s.nodeType){a&&(a=!1,-1===oe.indexOf(i)&&-1===ie.indexOf(i)?""===(r=u.nodeValue.replace(ee,"").replace(Y,"").replace(re," "))?t.removeChild(u):u.nodeValue=r:-1===ie.indexOf(i)&&(r=u.nodeValue.replace(ne," ").replace(ee,"").replace(Y,"").replace(re," "),u.nodeValue=r));var d=s.nodeName;d&&(i=d.toLowerCase()),t.appendChild(s)}}}},ce=function(e,t){var n,r,o,i,a,c,l=e.classes,s=e.buttonName,u=e.title,d=e.fixed,p=void 0!==d&&d;return(c=document.createElement("article")).setAttribute("class",String(l)+" "+String(p?"o-cookie-disclaimer--fixed":"")),ae(c,["\n    ",(a=document.createElement("axa-container"),ae(a,["\n      ",(r=document.createElement("div"),r.setAttribute("class","o-cookie-disclaimer__container o-cookie-disclaimer__container--lx"),ae(r,["\n        ",(n=document.createElement("h1"),n.setAttribute("class","o-cookie-disclaimer__title"),ae(n,[u]),n),"\n        ",t,"\n      "]),r),"\n      ",(i=document.createElement("div"),i.setAttribute("class","o-cookie-disclaimer__container o-cookie-disclaimer__container--rx"),ae(i,["\n        ",(o=document.createElement("axa-button"),o.setAttribute("ghost","ghost"),o.setAttribute("classes","js-cookie-disclaimer__button"),o.setAttribute("color","white"),o.setAttribute("tag","button"),ae(o,[s]),o),"\n      "]),i),"\n    "]),a),"\n  "]),c},le=window||global,se=function(){function e(t){o(this,e),this.wcNode=t,this._off=null}return i(e,[{key:"init",value:function(){var e=this;this._off=m(this.wcNode.querySelector(".js-cookie-disclaimer__button"),"click",function(){e.cleanupWcNode();var t=le.localStorage;t&&t.setItem("axa-ch-cookie-disclaimer-accepted",(new Date).getTime())})}},{key:"cleanupWcNode",value:function(){this.wcNode.parentNode.removeChild(this.wcNode)}},{key:"hasAccepted",value:function(){return!!le.localStorage.getItem("axa-ch-cookie-disclaimer-accepted")}},{key:"destroy",value:function(){"function"==typeof this._off&&this._off(),delete this.wcNode}},{key:"off",get:function(){return this._off}}]),e}(),ue=function(e){function t(){o(this,t);var e=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{styles:Q,template:ce}));return e.disclaimerHandler=new se(e),e}return l(t,Z),i(t,null,[{key:"observedAttributes",get:function(){return["classes","button-name","title","fixed"]}}]),i(t,[{key:"connectedCallback",value:function(){c(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" o-cookie-disclaimer"}},{key:"disconnectedCallback",value:function(){c(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"disconnectedCallback",this).call(this),this.disclaimerHandler.destroy(),delete this.disclaimerHandler}},{key:"render",value:function(){this.disclaimerHandler.hasAccepted()?this.disclaimerHandler.cleanupWcNode():c(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"render",this).call(this)}},{key:"didRenderCallback",value:function(){this.disclaimerHandler.init()}}]),t}();return ue.tagName="axa-cookie-disclaimer",J=ue.tagName,X=ue,customElements.get(J)||customElements.define(J,X),ue});
