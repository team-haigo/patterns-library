!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";var e=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function t(t,n){if("function"==typeof t.hasAttribute&&!t.hasAttribute(n))return!1;var o=t.value;return n?o=t.getAttribute(n):n=t.name,o=function(t,n){var o=t;if(t&&n!==t){if(e.test(t))try{o=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else o=!0;return o}(o,n)}var n=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,o=/[-_]+/g;function r(e,t){return 0==+e||o.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}var i=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t};function f(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(f.prototype,HTMLElement.prototype),Object.setPrototypeOf(f,HTMLElement);var s,l,p,d={},y=function(e){function o(){return i(this,o),c(this,(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(o,f),a(o,[{key:"connectedCallback",value:function(){var e=function(e){if(!e.hasAttributes)return null;for(var o,i={},a=e.attributes,u=a.length,c=0;c<u;++c){var f=a[c],s=f.name;i[(o=s,o.replace(n,r))]=t(f)}return i}(this),o={};if(e){var i=e.iconsPath,a=e.onlyLoad;if(i){var c=new XMLHttpRequest;a||(o.iconsPath=i),c.open("GET",i,!0),c.send(),c.onload=function(){var e=document.createElement("div");e.innerHTML=c.responseText,e.style.display="none",document.body.insertBefore(e,document.body.childNodes[0])}}}window.__axaPLibConfig=u({},d,window.__axaPLibConfig||{},o)}}]),o}();return y.tagName="axa-core",s=function(){window.customElements.define(y.tagName,y)},l=0,p=function(){if(0===l)try{s.apply(void 0,arguments),l+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",p,!1),document.addEventListener("WebComponentsReady",p,!1),y});
