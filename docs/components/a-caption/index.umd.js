!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.StyleGuideWebComponent=e()}(this,function(){"use strict";function t(t,e){return t(e={exports:{}},e.exports),e.exports}var e=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(t){i[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(t){return!1}})()&&Object.assign;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},l=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),s=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},c=function t(e,n,i){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,n);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:t(o,n,i)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(i):void 0},p=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},d=function(t,e){var n={};for(var i in t)e.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return n},f=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},h=function t(e,n,i,r){var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var a=Object.getPrototypeOf(e);null!==a&&t(a,n,i,r)}else if("value"in o&&o.writable)o.value=i;else{var l=o.set;void 0!==l&&l.call(r,i)}return i},g=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],i=!0,r=!1,o=void 0;try{for(var a,l=t[Symbol.iterator]();!(i=(a=l.next()).done)&&(n.push(a.value),!e||n.length!==e);i=!0);}catch(t){r=!0,o=t}finally{try{!i&&l.return&&l.return()}finally{if(r)throw o}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),v=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)};function y(){}var _,b,m,x,O=t(function(t){t.exports=function(){function t(t,e,n,i,o,a){if(a!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e};return n.checkPropTypes=y,n.PropTypes=n,n}()}),C=t(function(t){!function(){var e={}.hasOwnProperty;function n(){for(var t=[],i=0;i<arguments.length;i++){var r=arguments[i];if(r){var a=void 0===r?"undefined":o(r);if("string"===a||"number"===a)t.push(r);else if(Array.isArray(r))t.push(n.apply(null,r));else if("object"===a)for(var l in r)e.call(r,l)&&r[l]&&t.push(l)}}return t.join(" ")}t.exports?t.exports=n:window.classNames=n}()}),k=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.reduceRight(function(t,e){return e(t)},t)}},w={},T=(_=Object,b=_.getPrototypeOf||function(t){return t.__proto__},m=_.setPrototypeOf||function(t,e){return t.__proto__=e,t},x="object"===("undefined"==typeof Reflect?"undefined":o(Reflect))?Reflect.construct:function(t,e,n){var i,r=[null];return r.push.apply(r,e),i=t.bind.apply(t,r),m(new i,n.prototype)},function(t){var e=b(t);return m(t,m(function(){return x(e,arguments,b(this).constructor)},e))}),j=function(t){return T(function(e){function n(){return a(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,t),l(n,[{key:"init",value:function(){var t;this._id=((t=this.nodeName)in w||(w[t]=0),++w[t]),this._initialised=!0}},{key:"connectedCallback",value:function(){this._initialised||this.init()}},{key:"attributeChangedCallback",value:function(){this._initialised||this.init()}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)})}}]),n}())},P={},N=function(){try{var t=new window.CustomEvent("test",{cancelable:!0});if(t.preventDefault(),!0!==t.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(t){}return e;function e(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.bubbles,i=void 0!==n&&n,r=e.cancelable,o=void 0!==r&&r,a=e.detail,l=void 0===a?void 0:a,s=document.createEvent("CustomEvent");s.initCustomEvent(t,i,o,l);var u=s.preventDefault;return s.preventDefault=function(){u.call(s);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(t){this.defaultPrevented=!0}},s}}();function E(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=new N(e,u({},i,{detail:n}));return t.dispatchEvent(r)}var A=function(){var t=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var e=Object.defineProperty({},"passive",{get:function(){t=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,e),window.removeEventListener("testPassiveEventSupport",n,e)}return t}();function R(t){for(var e=t.className,n=!1,i=!0,r=arguments.length,o=Array(r>1?r-1:0),a=1;a<r;a++)o[a-1]=arguments[a];var l=o.map(function(t){var r=(o=t,new RegExp("^"+o+"$|^"+o+"\\s|\\s"+o+"\\s|\\s"+o+"$",a)).test(e);var o,a;r?n=!0:i=!1;return{className:t,hasClass:r}});return!(!i&&!n)&&l}var S=/\s+/,D={transitionend:function(){for(var t=document.createElement("div").style,e={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(e),i=n.length,r=void 0,o=0;o<i;++o)if(void 0!==t[r=n[o]])return e[r];return""}()};function L(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=r.capture,l=void 0!==a&&a,s=r.passive,u=void 0===s||s;if(D[e]&&(e=D[e]),!t||!e)return null;var c=void 0===n?"undefined":o(n),p=n&&"string"===c;if("function"===c){if(i){var d=i;l=d.capture,u=d.passive}i=n}for(var f=A?{capture:l,passive:u}:l,h=p?function(e){var r=e.target;for(;!R(r,n)&&r!==t;)r=r.parentNode;if(r!==t)return i(e,r)}:i,g=e.split(S),v=g.length,y=0;y<v;++y)t.addEventListener(g[y],h,f);return function e(){for(var n=0;n<v;++n)t.removeEventListener(g[n],h,f);!function(t,e){if(!t)return!1;for(var n=Object.keys(t),i=n.length,r=0;r<i;++r){var o=n[r];if(t[o]===e)return delete t[o]}}(this,e)}}function I(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=n.leading,r=void 0!==i&&i,o=n.trailing,a=void 0===o||o,l=n.maxWait,s=void 0!==l&&l,u=void 0,c=void 0,p=void 0,d=void 0,f=!1,h=e!==s,g=!1!==s;function y(){for(var n=arguments.length,i=Array(n),o=0;o<n;o++)i[o]=arguments[o];return u=i,h&&(c&&clearTimeout(c),c=setTimeout(_,e)),g&&!p&&(p=setTimeout(b,s)),r&&!f&&(f=!0,d=t.apply(void 0,v(u))),d}return y.flush=function(){(c||p)&&(d=t.apply(void 0,v(u)));return x(),d},y.cancel=x,y;function _(){p&&clearTimeout(p),m()}function b(){c&&clearTimeout(c),m()}function m(){a&&(d=t.apply(void 0,v(u))),c=null,p=null,f=!1}function x(){c&&(clearTimeout(c),c=null),p&&(clearTimeout(p),p=null),u=void 0,f=!1}}window.__subscriptions=window.__subscriptions||{};var U=window.__subscriptions;function M(t,e){var n=L(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,t,e);U[t]||(U[t]={count:0});var i,r=U[t];return r.count++,r.onsubscribe||(r.onsubscribe=I((i=t,function(){E(document,"pubsub/onsubscribe",i),E(document,"pubsub/onsubscribe/"+i,i),U[i]&&delete U[i].unsubscribe}),100)),r.onsubscribe(),function(){r.count--,n.call(this),r.count<=0&&delete U[t]}}L(document,"pubsub/onsubscribe",function(t){var e=t.detail;U[e]||(U[e]={count:0});var n=U[e],i=n.queue;Array.isArray(i)&&(i.forEach(function(t){var e=g(t,3),n=e[0],i=e[1],r=e[2];E(r,n,i)}),delete n.queue)});var q,F=function(t,e){return t===e},V=((q=function(){var t;return(t=console).log.apply(t,arguments)},function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F;return function(){for(var e=arguments.length,n=Array(e),i=0;i<e;i++)n[i]=arguments[i];return function(){for(var e=arguments.length,i=Array(e),r=0;r<e;r++)i[r]=arguments[r];return function(){return t.apply(void 0,[].concat(n,i))?q.apply(void 0,arguments):void 0}}}})()(!0),[]);var K=1,H=3,W=8;function z(t,e){var n=t.nodeType,i=t.nodeName;n===K&&function(t,e){for(var n=e.skipChildren&&e.skipChildren(),i=e.constructor.observedAttributes,r=i&&Array.isArray(i)&&i.length,o=function(t){return n&&r&&-1===i.indexOf(t)},a=e.attributes,l=t.attributes,s=null,u=null,c=null,p=null,d=l.length-1;d>=0;--d)if(p=l[d],c=p.name,s=p.namespaceURI,u=p.value,!o(c))if(s){var f=p.localName;e.getAttributeNS(s,f||c)!==u&&e.setAttributeNS(s,c,u)}else e.hasAttribute(c)?e.getAttribute(c)!==u&&("null"===u||"undefined"===u?e.removeAttribute(c):e.setAttribute(c,u)):e.setAttribute(c,u);for(var h=a.length-1;h>=0;--h)if(!1!==(p=a[h]).specified){if(c=p.name,s=p.namespaceURI,o(c))continue;s?(c=p.localName||c,t.hasAttributeNS(s,c)||e.removeAttributeNS(s,c)):t.hasAttributeNS(null,c)||e.removeAttribute(c)}}(t,e),n!==H&&n!==W||e.nodeValue===t.nodeValue||(e.nodeValue=t.nodeValue),"INPUT"===i?function(t,e){var n=t.value,i=e.value;B(t,e,"checked"),B(t,e,"disabled"),n!==i&&(e.setAttribute("value",n),e.value=n);"null"===n&&(e.value="",e.removeAttribute("value"));t.hasAttributeNS(null,"value")?"range"===e.type&&(e.value=n):e.removeAttribute("value")}(t,e):"OPTION"===i?B(t,e,"selected"):"TEXTAREA"===i&&function(t,e){var n=t.value;n!==e.value&&(e.value=n);if(e.firstChild&&e.firstChild.nodeValue!==n){if(""===n&&e.firstChild.nodeValue===e.placeholder)return;e.firstChild.nodeValue=n}}(t,e)}function B(t,e,n){t[n]!==e[n]&&(e[n]=t[n],t[n]?e.setAttribute(n,""):e.removeAttribute(n))}var G=3;function $(t,e){return e?t?t.isSameNode&&t.isSameNode(e)?e:t.tagName!==e.tagName?t:(z(t,e),e.skipChildren&&e.skipChildren()||function(t,e){for(var n=void 0,i=void 0,r=void 0,o=void 0,a=0,l=0;n=e.childNodes[l],i=t.childNodes[l-a],n||i;l++)if(i)if(n)if(J(i,n))(r=$(i,n))!==n&&(e.replaceChild(r,n),a++);else{o=null;for(var s=l;s<e.childNodes.length;s++)if(J(e.childNodes[s],i)){o=e.childNodes[s];break}o?((r=$(i,o))!==o&&a++,e.insertBefore(r,n)):i.id||n.id?(e.insertBefore(i,n),a++):(r=$(i,n))!==n&&(e.replaceChild(r,n),a++)}else e.appendChild(i),a++;else e.removeChild(n),l--}(t,e),e):null:t}function J(t,e){return t.id?t.id===e.id:t.isSameNode?t.isSameNode(e):t.tagName===e.tagName&&(t.type===G&&t.nodeValue===e.nodeValue)}var Y,Z,X,Q,tt=(Y=Object,Z=Y.getPrototypeOf||function(t){return t.__proto__},X=Y.setPrototypeOf||function(t,e){return t.__proto__=e,t},Q="object"===("undefined"==typeof Reflect?"undefined":o(Reflect))?Reflect.construct:function(t,e,n){var i,r=[null];return r.push.apply(r,e),i=t.bind.apply(t,r),X(new i,n.prototype)},function(t){var e=Z(t);return X(t,X(function(){return Q(e,arguments,Z(this).constructor)},e))})(function(t){function e(t){var n;a(this,e);for(var i="\n    Web Component "+t.nodeName+"%c#"+t._id+" does not accept string as a return from a template. Maybe use bel?}",r=arguments.length,o=Array(r>1?r-1:0),l=1;l<r;l++)o[l-1]=arguments[l];var s=f(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this,i].concat(o)));return Error.captureStackTrace&&Error.captureStackTrace(s,e),s.name="TemplateNoStringReturnException",s}return p(e,t),e}(Error)),et=!!document.createDocumentFragment().children,nt=0;function it(t,e){var n=t[e];return"function"==typeof n&&(t[e]=function(t){function e(){return t.apply(void 0,arguments)}return 0===nt&&(nt++,Object.keys(t).map(function(n){return e[n]=t[n],n}).reduce(it,e),nt--),e}(n)),t}var rt=O;Object.keys(rt).reduce(it,rt);var ot=rt.oneOf(["left","center","right"]),at=rt.oneOf(["left","right"]),lt=rt.oneOf(["top","bottom"]),st=rt.oneOf(["up","down"]),ut=rt.oneOf(["ok","pending","error","unknown"]),ct=rt.oneOf(["row","col","rowgroup","colgroup","auto"]),pt=rt.oneOfType([rt.string,rt.number]),dt={text:pt,value:rt.any,rowspan:pt,colspan:pt,scope:ct,align:ot,dense:rt.bool},ft={float:at,strong:rt.bool,bold:rt.bool},ht=rt.oneOfType([rt.string,rt.number]),gt=rt.oneOfType([ht,rt.shape(u({},dt,{sort:st,sortActive:rt.bool}))]),vt=rt.oneOfType([ht,rt.shape(u({},dt,ft,{action:rt.bool,state:ut}))]),yt=rt.oneOfType([ht,rt.shape(u({},dt,ft))]),_t=rt.oneOfType([rt.arrayOf(gt),rt.shape({cells:rt.arrayOf(gt)})]),bt=rt.oneOfType([rt.arrayOf(vt),rt.shape({cells:rt.arrayOf(vt),action:rt.bool})]),mt=rt.oneOfType([rt.arrayOf(yt),rt.shape({cells:rt.arrayOf(yt)})]),xt=(rt.oneOfType([_t,rt.arrayOf(_t)]),rt.oneOfType([bt,rt.arrayOf(bt)]),rt.oneOfType([mt,rt.arrayOf(mt)]),/[A-Z]/g);function Ot(t){return t.replace(xt,Ct)}function Ct(t,e,n){var i=t.toLowerCase(),r=n.charAt(e+1);return 0===e||r.toUpperCase()===r?i:"-"+i}var kt=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function wt(t,e,n){var i=t;if(n)return function(t,e,n){var i=t;switch(n){case rt.string:case rt.string.isRequired:return t;case rt.bool:case rt.bool.isRequired:if(!t||e===t)return!0;case rt.number:case rt.number.isRequired:case rt.object:case rt.object.isRequired:case rt.array:case rt.array.isRequired:default:if(kt.test(t))try{i=JSON.parse(t)}catch(n){console.error("Attribute "+e+" has an error:\n"+n+"\n",t)}}return i}(t,e,n);if(t&&e!==t){if(kt.test(t))try{i=JSON.parse(t)}catch(n){console.error("Attribute "+e+" has an error:\n"+n+"\n",t)}}else i=!0;return i}var Tt=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,jt=/[-_]+/g;function Pt(t){return t.replace(Tt,Nt)}function Nt(t,e){return 0==+t||jt.test(t)?"":0===e?t.toLowerCase():t.toUpperCase()}function Et(t,e,n){var i=1===t.nodeType,r=t.constructor.propTypes,o=n;!n&&i&&(o=(void 0===r?{}:r)[Pt(e)]);if(i&&!t.hasAttribute(e))return o!==rt.bool&&o!==rt.bool.isRequired&&void 0;var a=t.value;return e?a=t.getAttribute(e):e=t.name,a=wt(a,e,o)}var At=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function Rt(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=i.capture,o=void 0===r||r,a=i.passive,l=void 0===a||a,s=t.ownerDocument.documentElement,u=L(s,e,function(e){var i=e.target;if(!t.contains(i)&&t!==i)return n(e)},{capture:o,passive:l});return At&&(s.style.cursor="pointer"),u}var St=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];for(var i=e.length,r={},o=0;o<i;++o){var a=e[o];r[a.toUpperCase()]=a}return r}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize"),Dt="axa-change",Lt="data-prevent-default";((function(){function t(e){var n=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};a(this,t),this._handleClick=function(t,e){n.shouldPreventDefault(e||t.currentTarget)&&t.preventDefault();var i=!n._lastToggleNode,r=e!==n._lastToggleNode,o=!i&&!r;i?(n._notify(St.ENTER,e),n._onInteractive()):r&&n._notify(St.MOVE,e,n._lastToggleNode),n._lastToggleNode=e,o&&n._options.sameClickClose&&n._close()},this._handleClose=function(t,e){n.shouldPreventDefault(e||t.currentTarget)&&t.preventDefault(),n._close()},this._handleKeyUp=function(t){(t.key===St.ESCAPE||t.key===St.ESC||27===t.keyCode)&&(t.preventDefault(),n._close())},this._init(e,i)}return l(t,[{key:"_init",value:function(e,n){e&&(this._wcNode=e),n&&(this._options=u({},t.DEFAULTS,n));var i=this._options.containerClass;this._container=i?this._wcNode.querySelector(i):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=L(this._container,St.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive();var t=this._container,e=this._options,n=e.closeClass,i=e.outerClose,r=e.escapeClose,o=e.preventDefault;n&&(this._unCloseClick=L(t,St.CLICK,n,this._handleClose,{passive:!o})),i&&(this._unOuterClick=Rt(t,St.CLICK,this._handleClose,{passive:!o})),r&&(this._unCloseEscape=L(t.ownerDocument,St.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(t){return t.hasAttribute(Lt)?Et(t,Lt):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(St.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(t,e,n){t in this&&"function"==typeof this[t]&&this[t](e,n)}},{key:"enter",value:function(t){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(t,e){}},{key:"leave",value:function(t){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),t})()).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var It=k(function(t){var e,n;return n=e=function(e){function n(){return a(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,t),n}(),e.version="2.0.1-beta.238",n},function(t){return function(e){function n(){return a(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,t),l(n,[{key:"init",value:function(t){c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,t),this._makeContextReady=this._makeContextReady.bind()}},{key:"connectedCallback",value:function(){c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this)&&c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var t=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=t,function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;U[t]||(U[t]={count:0,queue:[]});var i=U[t].queue;Array.isArray(i)?i.push([t,e,n]):E(n,t,e)}("context/available",t)}},{key:"consumeContext",value:function(t){this.__consumedContext=t&&t.toLowerCase()}},{key:"_makeContextReady",value:function(){var t=this,e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;this.contextNode&&(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){t.contextCallback(t.contextNode,e)},10)),this.unContextEnabled&&this.unContextEnabled(),this.unContextEnabled=M("context/available",this._makeContextReady)}},{key:"contextNode",get:function(){for(var t=this.__consumedContext,e=this.parentNode;e&&(!e.__isContext||t&&t!==e.__contextName);)e=e.parentNode;return!(!e||!e.__isContext)&&e}}]),n}()},function(t){return function(e){function n(){return a(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,t),l(n,[{key:"appendChild",value:function(t){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(t),this.render()):c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,t)}},{key:"innerText",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createTextNode(t);this._lightDOMRefs=[e],this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",t,this)}},{key:"textContent",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createTextNode(t);this._lightDOMRefs=[e],this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",t,this)}},{key:"innerHTML",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createElement("div");e.innerHTML=t,this._lightDOMRefs=Array.from(e.children),this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",t,this)}}]),n}()},function(t){return function(e){function n(){return a(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,t),l(n,[{key:"init",value:function(t){var e=this;c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,t),this._isConnected=!1,this.props={},this.updatedDebounced=I(function(){return e.updated&&e.updated()},50);var i=this.constructor.observedAttributes;Array.isArray(i)&&i.forEach(function(t){Pt(t)})}},{key:"connectedCallback",value:function(){var t=this;if(c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(e)){var i=this.constructor.propTypes;e.forEach(function(e){var n=Pt(e);if(t.hasAttribute(e)){var r=Et(t,e,i[n]);t.props[n]=r}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(t,e,i){if(c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"attributeChangedCallback",this)&&c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"attributeChangedCallback",this).call(this,t,e,i),this.shouldUpdateCallback(i,e)){var r=Pt(t);if(this.hasAttribute(t)){var o=this.constructor.propTypes;this.props[r]=wt(i,t,o[r])}else this.props[r]=null;this.checkPropTypes(),"value"===t&&null!==i&&E(this,Dt,i,{bubbles:!0,cancelable:!0,composed:!0}),this.updatedDebounced()}}},{key:"setProps",value:function(t){var e=this;c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"attributeChangedCallback",this)&&c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"attributeChangedCallback",this).call(this);var i=this.constructor.observedAttributes,r=void 0===i?[]:i,o=Object.keys(t).filter(function(t){return r.indexOf(Ot(t))>-1}).reduce(function(t,n){var i=t.props,r=t.shouldUpdate,o=i[n],a=e.props&&e.props[n]?e.props[n]:void 0;return r||e.shouldUpdateCallback(o,a)?(e.props[n]=o,{props:i,shouldUpdate:!0}):{props:i,shouldUpdate:!1}},{props:t,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),o&&this._isConnected&&this.updated&&this.updated()}},{key:"checkPropTypes",value:function(){var t=this.constructor,e=t.propTypes,n=t.tagName,i=this.props;e&&rt.checkPropTypes(e,i,"prop",n)}},{key:"shouldUpdateCallback",value:function(t,e){return t!==e}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}],[{key:"observedAttributes",get:function(){var t=this.propTypes;return t&&Object.keys(t).map(Ot)}}]),n}()},function(t){return function(e){function n(){return a(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,t),l(n,[{key:"init",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.template,i=d(t,["template"]);c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,i),this._template=e,this._hasTemplate=!!e,this._hasRendered=!1,this.updated=this.render}},{key:"render",value:function(){var t=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var i=this._template;try{if(e){for(var r=document.createDocumentFragment(),a=[];this.firstChild;)a.push(this.firstChild),r.appendChild(this.firstChild);this._lightDOMRefs=a,this.childrenFragment=r}else this._lightDOMRefs.forEach(function(e){var n=e.cloneNode(!0);t.childrenFragment.appendChild(n)});et||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(t){return 1===t.nodeType}));var l=i(this.props,this.childrenFragment,this),s=document.createDocumentFragment();if(Array.isArray(l))l.forEach(function(t){s.appendChild(t)});else if(l){if("string"==typeof l)throw new tt(this);s.appendChild(l)}if(e)c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,s);else{var u=this.cloneNode(!1);u._isMorphing=!0,u.appendChild(s),this._isMorphing=!0,function(t,e){if("object"!==(void 0===t?"undefined":o(t)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===e?"undefined":o(e)))throw new Error("componentMorph: newTree should be an object");$(e,t)}(this,u),function(){for(var t=void 0;t=V.pop();)delete t.isSameNode;V=[]}(),this._isMorphing=!1}}catch(t){console.error(t)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(t){}},{key:"didRenderCallback",value:function(t){}}]),n}()},function(t){return function(e){function n(){return a(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,t),l(n,[{key:"init",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.styles,i=void 0===e?"":e,r=d(t,["styles"]);c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,r),this._styles=i}},{key:"connectedCallback",value:function(){c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var e=document.createElement("style"),n=document.createTextNode(this._styles);e.appendChild(n),t.insertAdjacentElement?t.insertAdjacentElement("afterbegin",e):t.appendChild(e)}}}]),n}()});k(It,j);var Ut,Mt,qt,Ft=k(It,function(t){return function(e){function n(){return a(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,t),l(n,[{key:"init",value:function(t){var e=this;c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,t),this._appendStyles=function(){n.appendGlobalStyles(e._styles,e.nodeName)}}}],[{key:"appendGlobalStyles",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.uuidv4();if(e&&!P[n]){var i=document.createElement("style"),r=document.createTextNode(e);P[n]=!0,i.appendChild(r),i.setAttribute("data-c-name",n.toLowerCase()),document.head.appendChild(i)}}}]),n}()},j)(HTMLTableCaptionElement),Vt=function(t){function e(){return a(this,e),f(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return p(e,Ft),l(e,[{key:"init",value:function(){c(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"init",this).call(this,{styles:".a-caption {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  padding: 10px 10px;\n  color: #7f7f7f; }\n  @media (min-width: 576px) {\n    .a-caption {\n      font-size: 14px;\n      line-height: 1.21; } }\n  @media (max-width: 767px) {\n    .a-caption {\n      padding-left: 10px;\n      padding-right: 10px; } }\n\n.a-caption--top {\n  caption-side: top; }\n\n.a-caption--bottom {\n  caption-side: bottom; }\n\n.u-align-left {\n  text-align: left; }\n\n.u-align-center {\n  text-align: center; }\n\n.u-align-right {\n  text-align: right; }\n\n@media (max-width: 575px) {\n  .u-align-left-xs-down {\n    text-align: left; }\n  .u-align-center-xs-down {\n    text-align: center; }\n  .u-align-right-xs-down {\n    text-align: right; } }\n\n.u-align-left-xs-up {\n  text-align: left; }\n\n.u-align-center-xs-up {\n  text-align: center; }\n\n.u-align-right-xs-up {\n  text-align: right; }\n\n@media (max-width: 575px) {\n  .u-align-left-xs {\n    text-align: left; }\n  .u-align-center-xs {\n    text-align: center; }\n  .u-align-right-xs {\n    text-align: right; } }\n\n@media (max-width: 767px) {\n  .u-align-left-sm-down {\n    text-align: left; }\n  .u-align-center-sm-down {\n    text-align: center; }\n  .u-align-right-sm-down {\n    text-align: right; } }\n\n@media (min-width: 576px) {\n  .u-align-left-sm-up {\n    text-align: left; }\n  .u-align-center-sm-up {\n    text-align: center; }\n  .u-align-right-sm-up {\n    text-align: right; } }\n\n@media (min-width: 576px) and (max-width: 767px) {\n  .u-align-left-sm {\n    text-align: left; }\n  .u-align-center-sm {\n    text-align: center; }\n  .u-align-right-sm {\n    text-align: right; } }\n\n@media (max-width: 991px) {\n  .u-align-left-md-down {\n    text-align: left; }\n  .u-align-center-md-down {\n    text-align: center; }\n  .u-align-right-md-down {\n    text-align: right; } }\n\n@media (min-width: 768px) {\n  .u-align-left-md-up {\n    text-align: left; }\n  .u-align-center-md-up {\n    text-align: center; }\n  .u-align-right-md-up {\n    text-align: right; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .u-align-left-md {\n    text-align: left; }\n  .u-align-center-md {\n    text-align: center; }\n  .u-align-right-md {\n    text-align: right; } }\n\n@media (max-width: 1199px) {\n  .u-align-left-lg-down {\n    text-align: left; }\n  .u-align-center-lg-down {\n    text-align: center; }\n  .u-align-right-lg-down {\n    text-align: right; } }\n\n@media (min-width: 992px) {\n  .u-align-left-lg-up {\n    text-align: left; }\n  .u-align-center-lg-up {\n    text-align: center; }\n  .u-align-right-lg-up {\n    text-align: right; } }\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .u-align-left-lg {\n    text-align: left; }\n  .u-align-center-lg {\n    text-align: center; }\n  .u-align-right-lg {\n    text-align: right; } }\n\n@media (max-width: 1439px) {\n  .u-align-left-xl-down {\n    text-align: left; }\n  .u-align-center-xl-down {\n    text-align: center; }\n  .u-align-right-xl-down {\n    text-align: right; } }\n\n@media (min-width: 1200px) {\n  .u-align-left-xl-up {\n    text-align: left; }\n  .u-align-center-xl-up {\n    text-align: center; }\n  .u-align-right-xl-up {\n    text-align: right; } }\n\n@media (min-width: 1200px) and (max-width: 1439px) {\n  .u-align-left-xl {\n    text-align: left; }\n  .u-align-center-xl {\n    text-align: center; }\n  .u-align-right-xl {\n    text-align: right; } }\n\n.u-align-left-xxl-down {\n  text-align: left; }\n\n.u-align-center-xxl-down {\n  text-align: center; }\n\n.u-align-right-xxl-down {\n  text-align: right; }\n\n@media (min-width: 1440px) {\n  .u-align-left-xxl-up {\n    text-align: left; }\n  .u-align-center-xxl-up {\n    text-align: center; }\n  .u-align-right-xxl-up {\n    text-align: right; } }\n\n@media (min-width: 1440px) {\n  .u-align-left-xxl {\n    text-align: left; }\n  .u-align-center-xxl {\n    text-align: center; }\n  .u-align-right-xxl {\n    text-align: right; } }\n"})}},{key:"willRenderCallback",value:function(){var t,e=this.props,n=e.classes,i=e.align,r=e.side;this.className=C("a-caption",n,(s(t={},"u-align-"+i,i),s(t,"a-caption--"+r,r),t))}}]),e}();return Vt.tagName="axa-caption",Vt.builtInTagName="caption",Vt.propTypes={classes:O.string,align:ot,side:lt},Ut=Vt.tagName,Mt=Vt,qt={extends:Vt.builtInTagName},customElements.get(Ut)||customElements.define(Ut,Mt,qt),Vt});
