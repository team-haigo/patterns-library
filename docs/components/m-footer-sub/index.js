var StyleGuideWebComponent=function(){"use strict";var o=1,i=3,a=8;function n(e,t){var n=e.nodeType,r=e.nodeName;n===o&&function(e,t){for(var n=t.attributes,r=e.attributes,o=null,i=null,a=null,s=null,l=r.length-1;0<=l;--l)if(s=r[l],a=s.name,o=s.namespaceURI,i=s.value,o){var u=s.localName;t.getAttributeNS(o,u||a)!==i&&t.setAttributeNS(o,a,i)}else t.hasAttribute(a)?t.getAttribute(a)!==i&&("null"===i||"undefined"===i?t.removeAttribute(a):t.setAttribute(a,i)):t.setAttribute(a,i);for(var c=n.length-1;0<=c;--c)!1!==(s=n[c]).specified&&(a=s.name,(o=s.namespaceURI)?(a=s.localName||a,e.hasAttributeNS(o,a)||t.removeAttributeNS(o,a)):e.hasAttributeNS(null,a)||t.removeAttribute(a))}(e,t),n!==i&&n!==a||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===r?function(e,t){var n=e.value,r=t.value;s(e,t,"checked"),s(e,t,"disabled"),n!==r&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===r?s(e,t,"selected"):"TEXTAREA"===r&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function s(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},r=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},p=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},f=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},h=function e(t,n,r,o){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,r,o)}else if("value"in i&&i.writable)i.value=r;else{var s=i.set;void 0!==s&&s.call(o,r)}return r},u=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},g=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},v=3;function b(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(n(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,r=void 0,o=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],r=e.childNodes[s-a],n||r;s++)if(r)if(n)if(y(r,n))(o=b(r,n))!==n&&(t.replaceChild(o,n),a++);else{i=null;for(var l=s;l<t.childNodes.length;l++)if(y(t.childNodes[l],r)){i=t.childNodes[l];break}i?((o=b(r,i))!==i&&a++,t.insertBefore(o,n)):r.id||n.id?(t.insertBefore(r,n),a++):(o=b(r,n))!==n&&(t.replaceChild(o,n),a++)}else t.appendChild(r),a++;else t.removeChild(n),s--}(e,t),t):null:e}function y(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===v&&e.nodeValue===t.nodeValue)}var _=[];var x=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function C(t,n){var e=t;if(t&&n!==t){if(x.test(t))try{e=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else e=!0;return e}var w=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,r,i,s);var u=l.preventDefault;return l.preventDefault=function(){u.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}();function O(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},o=new w(t,l({},r,{detail:n}));return e.dispatchEvent(o)}var k=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function A(e){for(var o=e.className,i=!1,a=!0,t=arguments.length,n=Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var s=n.map(function(e){var t=(n=e,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",r)).test(o);var n,r;t?i=!0:a=!1;return{className:e,hasClass:t}});return!(!a&&!i)&&s}var E=/\s+/,N={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==e[o=n[i]])return t[o];return""}()};function T(n,e,r,o){var t=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},i=t.capture,a=void 0!==i&&i,s=t.passive,l=void 0===s||s;if(N[e]&&(e=N[e]),!n||!e)return null;var u=void 0===r?"undefined":m(r),c=r&&"string"===u;if("function"===u){if(o){var d=o;a=d.capture,l=d.passive}o=r}for(var p=k?{capture:a,passive:l}:a,f=c?function(e){var t=e.target;for(;!A(t,r)&&t!==n;)t=t.parentNode;if(t!==n)return o(e,t)}:o,h=e.split(E),v=h.length,b=0;b<v;++b)n.addEventListener(h[b],f,p);return function e(){for(var t=0;t<v;++t)n.removeEventListener(h[t],f,p);!function(e,t){if(!e)return;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}}(this,e)}}function j(r){var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=e.leading,i=void 0!==t&&t,n=e.trailing,a=void 0===n||n,s=e.maxWait,l=void 0!==s&&s,u=void 0,c=void 0,d=void 0,p=void 0,f=!1,h=o!==l,v=!1!==l;function b(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return u=t,h&&(c&&clearTimeout(c),c=setTimeout(m,o)),v&&!d&&(d=setTimeout(y,l)),i&&!f&&(f=!0,p=r.apply(void 0,g(u))),p}return b.flush=function(){(c||d)&&(p=r.apply(void 0,g(u)));return x(),p},b.cancel=x,b;function m(){d&&clearTimeout(d),_()}function y(){c&&clearTimeout(c),_()}function _(){a&&(p=r.apply(void 0,g(u))),d=c=null,f=!1}function x(){c&&(clearTimeout(c),c=null),d&&(clearTimeout(d),d=null),u=void 0,f=!1}}var P={};function S(e,t){var n=T(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,e,t);P[e]||(P[e]={count:0});var r,o=P[e];return o.count++,o.onsubscribe||(o.onsubscribe=j((r=e,function(){O(document,"pubsub/onsubscribe",r),O(document,"pubsub/onsubscribe/"+r,r),P[r]&&delete P[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete P[e]}}T(document,"pubsub/onsubscribe",function(e){var t=e.detail;P[t]||(P[t]={count:0});var n=P[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=u(e,3),n=t[0],r=t[1],o=t[2];O(o,n,r)}),delete n.queue)});var t=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,R=/[-_]+/g;function L(e){return e.replace(t,M)}function M(e,t){return 0==+e||R.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}var V=/[A-Z]/g;function D(e,t,n){var r=e.toLowerCase(),o=n.charAt(t+1);return 0===t||o.toUpperCase()===o?r:"-"+r}var e=function(e,t){return e===t},U=function(e){function l(e,t){var n;c(this,l);for(var r="Property >>>"+e+"<<< exists at "+t.nodeName+"#"+t._id+" and evaluates to -> "+t[e],o=arguments.length,i=Array(2<o?o-2:0),a=2;a<o;a++)i[a-2]=arguments[a];var s=f(this,(n=l.__proto__||Object.getPrototypeOf(l)).call.apply(n,[this,r].concat(i)));return Error.captureStackTrace&&Error.captureStackTrace(s,l),s.name="PropertyExistsException",s}return p(l,e),l}(Error);function F(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(F.prototype,HTMLElement.prototype),Object.setPrototypeOf(F,HTMLElement);var z,I="throwed",W=["title","checked","disabled"],q={},H=function(e){return e in q||(q[e]=0),++q[e]},$=((z=function(){var e;return(e=console).log.apply(e,arguments)},function(){var o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:e;return function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return o.apply(void 0,[].concat(r,t))?z.apply(void 0,arguments):void 0}}}})()(!0),function(e){function u(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];c(this,u);var l=f(this,(u.__proto__||Object.getPrototypeOf(u)).call(this));l._reduceProps=function(e,t){var n=e.props,r=e.shouldUpdate,o=l._hasKeys[t];if(-1===W.indexOf(t)&&o)throw new U(t,l);var i="_"+t,a=n[t],s=l[i];return r||l.shouldUpdateCallback(a,s)?(l[i]=a,l._props[t]=a,o&&h(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),t,a,l),{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},l._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;l.contextNode&&(clearTimeout(l.timeoutId),l.timeoutId=setTimeout(function(){l.contextCallback(l.contextNode,e)},10)),l.unContextEnabled&&l.unContextEnabled(),l.unContextEnabled=S("context/enabled",l._makeContextReady)},l._initialise(e,t),l._id=H(l.nodeName),l._props={},l._hasKeys={},l.reRender=j(function(){return l.render()},50);var n=l.constructor.observedAttributes;return Array.isArray(n)&&n.forEach(function(e){var n,r=L(e),o=r in l;if(-1===W.indexOf(r)&&o)throw new U(r,l);l._hasKeys[r]=o,Object.defineProperty(l,r,n={get:function(){return this["_"+r]},set:function(e){var t="_"+r;this.shouldUpdateCallback(this[t],e)&&(this[t]=e,this._props[r]=e,o&&h(n.__proto__||Object.getPrototypeOf(n),r,e,this),this._isConnected&&this._hasRendered&&this.reRender())}})}),l}return p(u,F),r(u,[{key:"_initialise",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;this._styles=e,this._template=t,this._hasTemplate=!!t,this._hasRendered=!1,this._isConnected=!1}},{key:"connectedCallback",value:function(){var o=this;if(!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(e)&&e.forEach(function(e){var t=L(e);if(o.hasAttribute(e)){var n=function(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;return t?n=e.getAttribute(t):t=e.name,n=C(n,t)}(o,e),r=o._hasKeys[t];o["_"+t]=n,o._props[t]=n,r&&h(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),t,n,o)}})}this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"attributeChangedCallback",value:function(e,t,n){this.shouldUpdateCallback(n,t)&&(this[L(e)]=C(n))}},{key:"batchProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t;Object.keys(e).filter(function(e){return-1<n.indexOf(e.replace(V,D))}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.render()}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled(),this._isConnected=!1}},{key:"_appendStyles",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var n=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var r=document.createDocumentFragment(),o=[];this.firstChild;)o.push(this.firstChild),r.appendChild(this.firstChild);this._lightDOMRefs=o,this.childrenFragment=r}else this._lightDOMRefs.forEach(function(e){var t=e.cloneNode(!0);n.childrenFragment.appendChild(t)});var i=t(this._props,this.childrenFragment),a=document.createDocumentFragment();if(Array.isArray(i))i.forEach(function(e){a.appendChild(e)});else if(i){if("string"==typeof i){var s=new Error(I);throw console.error("\n%cWeb Component %c"+this.nodeName+"%c#"+this._id+" does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+s.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),s}a.appendChild(i)}if(e)d(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"appendChild",this).call(this,a);else{var l=this.cloneNode(!1);l._isMorphing=!0,l.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":m(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":m(t)))throw new Error("componentMorph: newTree should be an object");b(t,e)}(this,l),function(){for(var e=void 0;e=_.pop();)delete e.isSameNode;_=[]}(),this._isMorphing=!1}}catch(s){s.message!==I&&console.error("\n%cWeb Component %c"+this.nodeName+"%c#"+this._id+" has an error while loading its template:\n"+s+"\n\nStack Trace: "+s.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}},{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):d(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"appendChild",this).call(this,e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;P[e]||(P[e]={count:0,queue:[]});var r=P[e].queue;Array.isArray(r)?r.push([e,t,n]):O(n,e,t)}("context/enabled",this.__contextName=e)}},{key:"selectContext",value:function(e){this.__selectedContext=e&&e.toLowerCase()}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else h(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else h(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else h(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"innerHTML",e,this)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),u}()),K={},G=function(e){function t(){return c(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p(t,$),r(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:$.uuidv4();if(e&&!K[e]){var n=document.createElement("style"),r=document.createTextNode(e);n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),K[e]=!0}}}]),t}(),B=".m-footer-sub {\n  display: block;\n  background: #3032c1;\n  border-top: 1px solid rgba(255, 255, 255, 0.25); }\n\n.m-footer-sub__box {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: auto; }\n  @media (min-width: 576px) {\n    .m-footer-sub__box {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .m-footer-sub__box {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .m-footer-sub__box {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .m-footer-sub__box {\n      max-width: 1140px; } }\n\n.m-footer-sub__row {\n  margin-right: -15px;\n  margin-left: -15px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  @media (max-width: 991px) {\n    .m-footer-sub__row {\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; } }\n",Z=/\n[\s]+$/,J=/^\n[\s]+/,X=/[\s]+$/,Q=/^[\s]+/,Y=/[\n\s]+/g,ee=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],te=["code","pre","textarea"],ne=function e(t,n){if(Array.isArray(n))for(var r,o,i=t.nodeName.toLowerCase(),a=!1,s=0,l=n.length;s<l;s++){var u=n[s];if(Array.isArray(u))e(t,u);else{("number"==typeof u||"boolean"==typeof u||"function"==typeof u||u instanceof Date||u instanceof RegExp)&&(u=u.toString());var c=t.childNodes[t.childNodes.length-1];if("string"==typeof u)a=!0,c&&"#text"===c.nodeName?c.nodeValue+=u:(u=document.createTextNode(u),t.appendChild(u),c=u),s===l-1&&(a=!1,-1===ee.indexOf(i)&&-1===te.indexOf(i)?""===(r=c.nodeValue.replace(J,"").replace(X,"").replace(Z,"").replace(Y," "))?t.removeChild(c):c.nodeValue=r:-1===te.indexOf(i)&&(o=0===s?"":" ",r=c.nodeValue.replace(J,o).replace(Q," ").replace(X,"").replace(Z,"").replace(Y," "),c.nodeValue=r));else if(u&&u.nodeType){a&&(a=!1,-1===ee.indexOf(i)&&-1===te.indexOf(i)?""===(r=c.nodeValue.replace(J,"").replace(Z,"").replace(Y," "))?t.removeChild(c):c.nodeValue=r:-1===te.indexOf(i)&&(r=c.nodeValue.replace(Q," ").replace(J,"").replace(Z,"").replace(Y," "),c.nodeValue=r));var d=u.nodeName;d&&(i=d.toLowerCase()),t.appendChild(u)}}}};function re(e,t){var n,r;return(r=document.createElement("div")).setAttribute("class","m-footer-sub__box"),ne(r,["\n    ",(n=document.createElement("div"),n.setAttribute("class","m-footer-sub__row"),ne(n,[t]),n),"\n  "]),r}var oe,ie,ae,se=function(e){function t(){return c(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,B,re))}return p(t,G),r(t,[{key:"connectedCallback",value:function(){d(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" m-footer-sub"}}]),t}();return oe=function(){window.customElements.define("axa-footer-sub",se)},ie=0,ae=function(){if(0===ie)try{oe.apply(void 0,arguments),ie+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",ae,!1),document.addEventListener("WebComponentsReady",ae,!1),se}();
