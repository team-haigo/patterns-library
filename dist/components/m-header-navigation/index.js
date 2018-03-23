var StyleGuideWebComponent=function(){"use strict";var e,t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a=function e(t,n,i){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,n,i)}if("value"in o)return o.value;var s=o.get;return void 0!==s?s.call(i):void 0},s=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},l=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],i=!0,o=!1,a=void 0;try{for(var s,r=e[Symbol.iterator]();!(i=(s=r.next()).done)&&(n.push(s.value),!t||n.length!==t);i=!0);}catch(e){o=!0,a=e}finally{try{!i&&r.return&&r.return()}finally{if(o)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},u=(function(e){!function(){var n={}.hasOwnProperty;function i(){for(var e=[],o=0;o<arguments.length;o++){var a=arguments[o];if(a){var s=void 0===a?"undefined":t(a);if("string"===s||"number"===s)e.push(a);else if(Array.isArray(a))e.push(i.apply(null,a));else if("object"===s)for(var r in a)n.call(a,r)&&a[r]&&e.push(r)}}return e.join(" ")}e.exports?e.exports=i:window.classNames=i}()}(e={exports:{}},e.exports),e.exports),d="@-webkit-keyframes fadeOutRightInLeft {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n@keyframes fadeOutRightInLeft {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n.a-stroke,\n.m-header-navigation__list-link.is-header-navigation-active::after {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 1px;\n  display: block;\n  width: 0;\n  height: 0;\n  background: #f07662;\n  -webkit-transition: height 0.2s ease;\n  transition: height 0.2s ease; }\n\n.a-stroke.is-stroke-enter {\n  height: 4px; }\n\n.a-stroke.is-stroke-move {\n  -webkit-transition: left 0.2s ease, width 0.2s ease;\n  transition: left 0.2s ease, width 0.2s ease; }\n\n.a-stroke.is-stroke-static {\n  left: 0 !important;\n  bottom: 1px; }\n\n.a-stroke.is-stroke-transition-off {\n  -webkit-transition-property: none !important;\n  transition-property: none !important;\n  -webkit-transition-duration: 0s !important;\n          transition-duration: 0s !important; }\n\n.m-header-navigation__list-link.is-header-navigation-active::after {\n  bottom: 1px;\n  width: 100%;\n  height: 4px;\n  content: ''; }\n  .is-stroke-interactive .m-header-navigation__list-link.is-header-navigation-active::after {\n    height: 0; }\n\n.m-header-navigation__list-link.is-header-navigation-active.is-stroke-active-open::after {\n  -webkit-transition-property: none;\n  transition-property: none;\n  -webkit-transition-duration: 0s;\n          transition-duration: 0s; }\n\n.m-header-navigation__list-link.is-header-navigation-active.is-stroke-active-move::after {\n  height: 4px; }\n\n.m-header-navigation {\n  display: block;\n  margin-left: auto; }\n  @media (max-width: 991px) {\n    .m-header-navigation {\n      display: none; } }\n\n.m-header-navigation__list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.m-header-navigation__list-item {\n  display: block;\n  float: left;\n  margin: 0 8px; }\n\n.m-header-navigation__list-link {\n  color: #00008f;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 75px;\n  padding: 0 10px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-align: center;\n  text-transform: uppercase;\n  vertical-align: middle;\n  /* stylelint-disable indentation */\n  /* stylelint-enable indentation */ }\n  @media (min-width: 576px) {\n    .m-header-navigation__list-link {\n      font-size: 13px;\n      line-height: 1.38; } }\n  .m-header-navigation__list-link.is-header-navigation-active, .m-header-navigation__list-link:hover, .m-header-navigation__list-link:active, .m-header-navigation__list-link:focus {\n    color: #00005b;\n    text-decoration: none; }\n  .m-header-navigation__list-link--hyphenate,\n  .m-header-navigation--hyphenate .m-header-navigation__list-link {\n    /* Adds a hyphen where the word breaks, if supported (No Blink) */\n    -webkit-hyphens: auto;\n        -ms-hyphens: auto;\n            hyphens: auto;\n    /* These are technically the same, but use both */\n    overflow-wrap: break-word;\n    word-wrap: break-word; }\n",h=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function p(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;if(t?n=e.getAttribute(t):t=e.name,n&&t!==n){if(h.test(n))try{n=JSON.parse(n)}catch(t){console.error("Attribute "+e+" has an error:\n"+t+"\n",n)}}else n=!0;return n}var f=/\n[\s]+$/,v=/^\n[\s]+/,_=/[\s]+$/,m=/^[\s]+/,y=/[\n\s]+/g,g=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],b=["code","pre","textarea"],k=function e(t,n){if(Array.isArray(n))for(var i,o,a=t.nodeName.toLowerCase(),s=!1,r=0,l=n.length;r<l;r++){var c=n[r];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof c)s=!0,u&&"#text"===u.nodeName?u.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),u=c),r===l-1&&(s=!1,-1===g.indexOf(a)&&-1===b.indexOf(a)?""===(i=u.nodeValue.replace(v,"").replace(_,"").replace(f,"").replace(y," "))?t.removeChild(u):u.nodeValue=i:-1===b.indexOf(a)&&(o=0===r?"":" ",i=u.nodeValue.replace(v,o).replace(m," ").replace(_,"").replace(f,"").replace(y," "),u.nodeValue=i));else if(c&&c.nodeType){s&&(s=!1,-1===g.indexOf(a)&&-1===b.indexOf(a)?""===(i=u.nodeValue.replace(v,"").replace(f,"").replace(y," "))?t.removeChild(u):u.nodeValue=i:-1===b.indexOf(a)&&(i=u.nodeValue.replace(m," ").replace(v,"").replace(f,"").replace(y," "),u.nodeValue=i));var d=c.nodeName;d&&(a=d.toLowerCase()),t.appendChild(c)}}}};var C="undefined"!=typeof window?function(e){var t,n=document.createElement("div");return n.innerHTML=e,t=n.childNodes,Array.isArray(t)?t:[].slice.call(t)}:function(e){var t=new String(e);return t.__encoded=!0,t},x=function(e){var t,n=e.items,i=e.simplemenu;return(t=document.createElement("ul")).setAttribute("class","m-header-navigation__list js-header-navigation__list"),k(t,["\n    ",n&&n.map(function(e){return t=o({},e,{simplemenu:i}),l=t.url,c=t.name,u=t.items,d=t.classes,h=t.isActive,p=t.simplemenu,f=t.hyphenate,v=void 0!==f&&f,(a=document.createElement("li")).setAttribute("class","m-header-navigation__list-item"),k(a,["\n      ",(n=document.createElement("a"),n.setAttribute("data-prevent-default","data-prevent-default"),n.setAttribute("href",""+String(l)),n.setAttribute("class","m-header-navigation__list-link "+String(u||p?"js-header-navigation__list-link":"")+" "+String(h?"is-header-navigation-active":"")+" "+String(v?"m-header-navigation__list-link--hyphenate":"")+" "+String((r=d,r?" "+r:""))),k(n,[C(c)]),n),"\n\n      ",u?(s=document.createElement("axa-header-sub-navigation"),s.setAttribute("indextitle",""+String(c)),s.setAttribute("indexurl",""+String(l)),s.setAttribute("items",""+String(JSON.stringify(u))),s.setAttribute("flyout","flyout"),k(s,["\n        "]),s):"","\n    "]),a;var t,n,a,s,r,l,c,u,d,h,p,f,v}),"\n  "]),t};function w(e,t){for(var n=[],i=Object.keys(t),o=i.length,a=0;a<o;++a){var s=i[a];n.push(s+":"+t[s]+";")}e.style.cssText=n.join("")}var E=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}(),N=/^\s+|\s{2,}|\s+$/g;function O(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}function S(e,t){A(e,t)||(e.className+=" "+t)}function A(e,t){return O(t).test(e.className)}function T(e,t){if(A(e,t)){var n=O(t,"g");e.className=e.className.replace(n," ").replace(N," ")}}var j=/\s+/,L={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),i=n.length,o=void 0,a=0;a<i;++a)if(void 0!==e[o=n[a]])return t[o];return""}()};function D(e,n,i,o){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},s=a.capture,r=void 0!==s&&s,l=a.passive,c=void 0===l||l;if(L[n]&&(n=L[n]),!e||!n)return null;var u=void 0===i?"undefined":t(i),d=i&&"string"===u;if("function"===u){if(o){var h=o;r=h.capture,c=h.passive}o=i}for(var p=E?{capture:r,passive:c}:r,f=d?function(t){var n=t.target;for(;!A(n,i)&&n!==e;)n=n.parentNode;if(n!==e)return o(t,n)}:o,v=n.split(j),_=v.length,m=0;m<_;++m)e.addEventListener(v[m],f,p);return function t(){for(var n=0;n<_;++n)e.removeEventListener(v[n],f,p);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),i=n.length,o=0;o<i;++o){var a=n[o];if(e[a]===t)return delete e[a]}}(this,t)}}var M,P=function(){if(!window.getComputedStyle)return null;var e=window.getComputedStyle(document.documentElement,""),t=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1];return{dom:"WebKit|Moz|MS|O".match(new RegExp("("+t+")","i"))[1],lowercase:t,css:"-"+t+"-",js:t[0].toUpperCase()+t.slice(1)}}().lowercase,R=function(){var e=window.requestAnimationFrame||window[P+"RequestAnimationFrame"];if(e)e=e.bind(window);else{var t=0;e=function(e){var n=Date.now(),i=Math.max(0,16-(n-t)),o=setTimeout(function(){e(n+i)},i);return t=n+i,o}}return e}(),z=M=(M=window.cancelAnimationFrame||window[P+"CancelAnimationFrame"]||window[P+"CancelRequestAnimationFrame"])?M.bind(window):function(e){clearTimeout(e)};var F=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function U(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=i.capture,a=void 0===o||o,s=i.passive,r=void 0===s||s,l=e.ownerDocument.documentElement,c=D(l,t,function(t){var i=t.target;if(!e.contains(i)&&e!==i)return n(t)},{capture:a,passive:r});return F&&(l.style.cursor="pointer"),c}var q=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var i=t.length,o={},a=0;a<i;++a){var s=t[a];o[s.toUpperCase()]=s}return o}("click","keyup","enter","move","leave","Escape","Esc"),I="data-prevent-default",V=function(){function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n(this,e),this._handleClick=this._handleClick.bind(this),this._handleClose=this._handleClose.bind(this),this._handleKeyUp=this._handleKeyUp.bind(this),this._init(t,i)}return i(e,[{key:"_init",value:function(t,n){t&&(this._wcNode=t),n&&(this._options=o({},e.DEFAULTS,n));var i=this._options.containerClass;this._container=i?this._wcNode.querySelector(i):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=D(this._container,q.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=D(this._container,q.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=U(this._container,q.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=D(this._container.ownerDocument,q.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(I)?p(e,I):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),delete this._lastToggleNode}},{key:"_handleClick",value:function(e,t){this.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var n=!this._lastToggleNode,i=t!==this._lastToggleNode,o=!n&&!i;n?(this._notify(q.ENTER,t),this._onInteractive()):i&&this._notify(q.MOVE,t,this._lastToggleNode),this._lastToggleNode=t,o&&this._options.sameClickClose&&this._close()}},{key:"_handleClose",value:function(e,t){this.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),this._close()}},{key:"_handleKeyUp",value:function(e){(e.key===q.ESCAPE||e.key===q.ESC||27===e.keyCode)&&(e.preventDefault(),this._close())}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(q.LEAVE,this._lastToggleNode),this._offInteractive(),delete this._lastToggleNode)}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}}]),e}();V.DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var W=function(e){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,{containerClass:".js-header-navigation__list",toggleClass:t.DEFAULTS.toggleClass,closeClass:"js-header-navigation-close",sameClickClose:!i.simpleMenu,preventDefault:!i.simpleMenu,outerClose:!i.simpleMenu,escapeClose:!i.simpleMenu}));return a.wcNode=e,a.options=o({},t.DEFAULTS,i),a._isStatic=!1,a._handleResize=a._handleResize.bind(a),a._handleTransitionEnd=a._handleTransitionEnd.bind(a),a}return s(t,V),i(t,[{key:"init",value:function(){this._contextNode.style.position="relative",this._list=this._contextNode.querySelector(this.options.list),this._stroke=document.createElement("div"),this._stroke.className=this.options.strokeClass,this._list.appendChild(this._stroke)}},{key:"onContextEnabled",value:function(){if(this._contextNode){var e=this.options;this._init(this._contextNode,{containerClass:".js-header-navigation__list",toggleClass:t.DEFAULTS.toggleClass,closeClass:"js-header-navigation-close",sameClickClose:!e.simpleMenu,preventDefault:!e.simpleMenu,outerClose:!e.simpleMenu,escapeClose:!e.simpleMenu}),this.init()}}},{key:"enter",value:function(e){var t=this,n=e.parentNode;this._node=e,this._parentNode=n,A(e,this.options.activeClass)&&(this._activeNode=e,S(e,this.options.activeOpenClass),S(e,this.options.activeMoveClass)),R(function(){t._handleStaticState(!0,!0),S(t._list,t.options.interactiveClass),R(function(){S(t._stroke,t.options.enterClass),w(t._stroke,{width:n.offsetWidth+"px",left:n.offsetLeft+"px"})})})}},{key:"move",value:function(e){var t=this,n=e.parentNode;this._node=e,this._parentNode=n,this._activeNode&&T(this._activeNode,this.options.activeMoveClass),R(function(){t._handleStaticState(!1),R(function(){S(t._stroke,t.options.moveClass),w(t._stroke,{width:n.offsetWidth+"px",left:n.offsetLeft+"px"}),t._onMoving()})})}},{key:"leave",value:function(){var e=this,t=this._node;this._offMoving(),this._activeNode&&(T(this._activeNode,this.options.activeMoveClass),T(this._activeNode,this.options.activeOpenClass),this._activeNode=null),A(t,this.options.activeClass)&&S(t,this.options.activeOpenClass),R(function(){e._handleStaticState(!0),T(e._list,e.options.interactiveClass),R(function(){T(e._stroke,e.options.moveClass),T(e._stroke,e.options.enterClass),T(t,e.options.activeOpenClass)}),e._parentNode=null,e._node=null})}},{key:"_onMoving",value:function(){var e,t;this._offMoving(),this._unResize=D((e=this.wcNode,(t=e.ownerDocument).defaultView||t.parentWindow),"resize",this._handleResize),this._unTransitionEnd=D(this._stroke,"transitionend",this._handleTransitionEnd)}},{key:"_offMoving",value:function(){this._unResize&&this._unResize(),this._unTransitionEnd&&this._unTransitionEnd()}},{key:"_handleStaticState",value:function(e,t){var n=this;(t||e!==this._isStatic)&&(this._isStatic=e,S(this._stroke,this.options.transitionOffClass),e?(this._node.appendChild(this._stroke),S(this._stroke,this.options.staticClass)):(this._list.appendChild(this._stroke),T(this._stroke,this.options.staticClass)),R(function(){T(n._stroke,n.options.transitionOffClass)}))}},{key:"_handleResize",value:function(){var e=this;this.resizeTimeout&&(z(this.resizeTimeout),this.resizeTimeout=null),this.resizeTimeout=R(function(){var t=e._parentNode,n=t.offsetWidth,i=t.offsetLeft;n&&i&&w(e._stroke,{width:n+"px",left:i+"px"})})}},{key:"_handleTransitionEnd",value:function(e){"left"===e.propertyName&&(this._offMoving(),this._handleStaticState(!0))}},{key:"destroy",value:function(){a(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this),this._stroke&&(this._stroke.parentNode.removeChild(this._stroke),delete this._stroke),delete this._contextNode,delete this.wcNode,delete this.options}},{key:"contextNode",set:function(e){this._contextNode=e,this.onContextEnabled()}}]),t}();function K(e){e&&(e.style.display="none",e.offsetHeight,e.style.display="")}W.DEFAULTS={strokeClass:"a-stroke",list:".js-header-navigation__list",toggleClass:"js-header-navigation__list-link",enterClass:"is-stroke-enter",moveClass:"is-stroke-move",staticClass:"is-stroke-static",interactiveClass:"is-stroke-interactive",activeClass:"is-header-navigation-active",activeOpenClass:"is-stroke-active-open",activeMoveClass:"is-stroke-active-move",transitionOffClass:"is-stroke-transition-off"};var $=function(e){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,{containerClass:".js-header-navigation__list",toggleClass:t.DEFAULTS.toggleClass,closeClass:"js-header-navigation-close",preventDefault:i.preventDefault||!i.simpleMenu,outerClose:!i.simpleMenu,escapeClose:!i.simpleMenu}));return a.wcNode=e,a.options=o({},t.DEFAULTS,{useDefaultEvent:!!i.useDefaultEvent||!!i.simpleMenu},i),a.init(),a}return s(t,V),i(t,[{key:"init",value:function(){this.list=this.wcNode.querySelector(this.options.list)}},{key:"enter",value:function(e){var t=this,n=e.parentNode;S(n,this.options.openClass),R(function(){K(n.querySelector(t.options.subNavi))})}},{key:"move",value:function(e,t){var n=e.parentNode;T(t.parentNode,this.options.openClass),S(n,this.options.openClass),K(n.querySelector(this.options.subNavi))}},{key:"leave",value:function(e){T(e.parentNode,this.options.openClass)}},{key:"destroy",value:function(){a(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this),delete this.wcNode,delete this.options}}]),t}();$.DEFAULTS={list:".js-header-navigation__list",toggleClass:"js-header-navigation__list-link",subNavi:".js-header-sub-navigation",openClass:"is-header-sub-navigation-open"};var H=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,G=/[-_]+/g;function J(e,t){return 0==+e||G.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}var B=function(){try{var e=new window.CustomEvent("test");if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,i=void 0!==n&&n,o=t.cancelable,a=void 0!==o&&o,s=t.detail,r=void 0===s?void 0:s,l=document.createEvent("CustomEvent");l.initCustomEvent(e,i,a,r);var c=l.preventDefault;return l.preventDefault=function(){c.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}();function Y(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=new B(t,o({},i,{detail:n}));e.dispatchEvent(a)}var Z={};function Q(e,t){var n=D(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);Z[e]||(Z[e]={count:0});var i,o=Z[e];return o.count++,o.onsubscribe||(o.onsubscribe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=n.leading,o=void 0!==i&&i,a=n.trailing,s=void 0===a||a,r=n.maxWait,l=void 0!==r&&r,u=void 0,d=void 0,h=void 0,p=void 0,f=!1,v=t!==l,_=!1!==l;function m(){for(var n=arguments.length,i=Array(n),a=0;a<n;a++)i[a]=arguments[a];return u=i,v&&(d&&clearTimeout(d),d=setTimeout(y,t)),_&&!h&&(h=setTimeout(g,l)),o&&!f&&(f=!0,p=e.apply(void 0,c(u))),p}return m.flush=function(){return(d||h)&&(p=e.apply(void 0,c(u))),k(),p},m.cancel=k,m;function y(){h&&clearTimeout(h),b()}function g(){d&&clearTimeout(d),b()}function b(){s&&(p=e.apply(void 0,c(u))),d=null,h=null,f=!1}function k(){d&&(clearTimeout(d),d=null),h&&(clearTimeout(h),h=null),u=void 0,f=!1}}((i=e,function(){Y(document,"pubsub/onsubscribe",i),Y(document,"pubsub/onsubscribe/"+i,i),Z[i]&&delete Z[i].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete Z[e]}}function X(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}D(document,"pubsub/onsubscribe",function(e){var t=e.detail;Z[t]||(Z[t]={count:0});var n=Z[t],i=n.queue;Array.isArray(i)&&(i.forEach(function(e){var t=l(e,3),n=t[0],i=t[1],o=t[2];Y(o,n,i)}),delete n.queue)}),Object.setPrototypeOf(X.prototype,HTMLElement.prototype),Object.setPrototypeOf(X,HTMLElement);var ee,te,ne,ie={},oe="throwed",ae=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=arguments[1];n(this,t);var o=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return o._makeContextReady=o._makeContextReady.bind(o),o._initialise(e,i),o}return s(t,X),i(t,[{key:"_initialise",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=e,this._template=t}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var e=this;if(!this._hasRendered){var t=this._template;if(t)try{for(var n=document.createDocumentFragment();this.firstChild;)n.appendChild(this.firstChild);var i=t(function(e){if(!e.hasAttributes)return null;for(var t,n={},i=e.attributes,o=i.length,a=0;a<o;++a){var s=i[a],r=s.name;n[(t=r,t.replace(H,J))]=p(s)}return n}(this),n);if(Array.isArray(i))i.forEach(function(t){e.appendChild(t)});else if(i){if("string"==typeof i){var o=new Error(oe);throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+o.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),o}this.appendChild(i)}this._hasRendered=!0}catch(o){o.message!==oe&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+o+"\n\nStack Trace: "+o.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;Z[e]||(Z[e]={count:0,queue:[]});var i=Z[e].queue;Array.isArray(i)?i.push([e,t,n]):Y(n,e,t)}("context/enabled",e)}},{key:"selectContext",value:function(e){this.__selectedContext=e&&e.toLowerCase()}},{key:"_makeContextReady",value:function(){var e=this,t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;this.contextNode&&(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){e.contextCallback(e.contextNode,t)},10)),this.unContextEnabled&&this.unContextEnabled(),this.unContextEnabled=Q("context/enabled",this._makeContextReady)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}(),se=(function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}s(t,ae),i(t,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",t=this.attachShadow({mode:e});this._appendStyles(t),this.render()}}])}(),function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,ae),i(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ae.uuidv4();if(e&&!ie[e]){var n=document.createElement("style"),i=document.createTextNode(e);n.appendChild(i),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),ie[e]=!0}}}]),t}()),re=function(e){function t(){n(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,d,x));return e.selectContext("axa-header-main"),e}return s(t,se),i(t,[{key:"connectedCallback",value:function(){a(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this);var e=this.hasAttribute("hyphenate"),n=p(this,"simplemenu"),i=u(this.initialClassName,"m-header-navigation",{"m-header-navigation--hyphenate":e});this.className=i,this.stroke=new W(this,{simpleMenu:n}),this.subNavigation=new $(this,{simpleMenu:n})}},{key:"contextCallback",value:function(e){this.stroke.contextNode=e}},{key:"disconnectedCallback",value:function(){this.stroke.destroy(),delete this.stroke,this.subNavigation.destroy(),delete this.subNavigation}}]),t}();return ee=function(){window.customElements.define("axa-header-navigation",re)},te=0,ne=function(){if(0===te)try{ee.apply(void 0,arguments),te+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",ne,!1),document.addEventListener("WebComponentsReady",ne,!1),re}();
