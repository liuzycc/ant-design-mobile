webpackJsonp([51],{3:function(n,a,t){"use strict";t(7),t(6);var s=Math.floor(window.devicePixelRatio||1);s>=2&&document.querySelector("html").classList.add("pixel-ratio-"+s)},6:function(n,a){},7:function(n,a){},21:function(n,a){"use strict";function t(n,a){var t={},s={};return Object.keys(n).forEach(function(e){a.indexOf(e)!==-1?t[e]=n[e]:s[e]=n[e]}),[t,s]}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=t,n.exports=a["default"]},27:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t]);return a["default"]=n,a}function p(n,a){for(var t=Object.getOwnPropertyNames(a),s=0;s<t.length;s++){var e=t[s],p=Object.getOwnPropertyDescriptor(a,e);p&&p.configurable&&void 0===n[e]&&Object.defineProperty(n,e,p)}return n}function o(n,a,t){return a in n?Object.defineProperty(n,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[a]=t,n}function l(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function c(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function u(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):p(n,a))}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var r=t(1),i=e(r),k=t(2),f=s(k),d=function(n){function a(){return l(this,a),c(this,n.apply(this,arguments))}return u(a,n),a.prototype.render=function(){var n,a=this.props,t=a.prefixCls,s=a.size,e=a.className,p=a.style,l=a.onClick,c=(0,f["default"])((n={},o(n,""+t,!0),o(n,e,!!e),o(n,t+"-ws"+s,!0),n));return i.createElement("div",{className:c,style:p,onClick:l})},a}(i.Component);a["default"]=d,d.defaultProps={prefixCls:"am-whitespace",size:8},n.exports=a["default"]},28:function(n,a,t){"use strict";t(3),t(29)},29:function(n,a){},48:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t]);return a["default"]=n,a}function p(n,a){for(var t=Object.getOwnPropertyNames(a),s=0;s<t.length;s++){var e=t[s],p=Object.getOwnPropertyDescriptor(a,e);p&&p.configurable&&void 0===n[e]&&Object.defineProperty(n,e,p)}return n}function o(n,a,t){return a in n?Object.defineProperty(n,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[a]=t,n}function l(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function c(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function u(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):p(n,a))}function r(n){return"string"==typeof n}function i(n){return r(n.type)&&x(n.props.children)?g.cloneElement(n,{},n.props.children.split("").join(" ")):r(n)?(x(n)&&(n=n.split("").join(" ")),g.createElement("span",null,n)):n}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var k=Object.assign||function(n){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(n[s]=t[s])}return n},f=function(){function n(n,a){var t=[],s=!0,e=!1,p=void 0;try{for(var o,l=n[Symbol.iterator]();!(s=(o=l.next()).done)&&(t.push(o.value),!a||t.length!==a);s=!0);}catch(c){e=!0,p=c}finally{try{!s&&l["return"]&&l["return"]()}finally{if(e)throw p}}return t}return function(a,t){if(Array.isArray(a))return a;if(Symbol.iterator in Object(a))return n(a,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),d=t(1),g=e(d),m=t(2),y=s(m),b=t(37),h=s(b),v=t(21),w=s(v),O=/^[\u4e00-\u9fa5]{2}$/,x=O.test.bind(O),E=function(n){function a(){l(this,a);for(var t=arguments.length,s=Array(t),e=0;e<t;e++)s[e]=arguments[e];var p=c(this,n.call.apply(n,[this].concat(s)));return p.onClick=function(){p.props.onClick(p)},p}return u(a,n),a.prototype.render=function(){var n,a=(0,w["default"])(this.props,["children","className","prefixCls","type","size","ghost","inline","disabled","htmlType","icon","loading"]),t=f(a,2),s=t[0],e=s.children,p=s.className,l=s.prefixCls,c=s.type,u=s.size,r=s.ghost,d=s.inline,m=s.disabled,b=s.htmlType,v=s.icon,O=s.loading,x=t[1],E=(0,y["default"])((n={},o(n,p,p),o(n,l,!0),o(n,l+"-primary","primary"===c),o(n,l+"-ghost",r),o(n,l+"-warning","warning"===c),o(n,l+"-small","small"===u&&d),o(n,l+"-loading",O),o(n,l+"-inline",d),o(n,l+"-disabled",m),n)),j=O?"loading":v,P=g.Children.map(e,i);return g.createElement("button",k({},x,{type:b||"button",className:E,disabled:m,onClick:this.onClick}),j?g.createElement(h["default"],{type:j}):null,P)},a}(g.Component);a["default"]=E,E.propTypes={prefixCls:d.PropTypes.string,type:d.PropTypes.string,size:d.PropTypes.oneOf(["large","small"]),htmlType:d.PropTypes.oneOf(["submit","button","reset"]),ghost:d.PropTypes.bool,inline:d.PropTypes.bool,disabled:d.PropTypes.bool,loading:d.PropTypes.bool,icon:d.PropTypes.bool,onClick:d.PropTypes.func},E.defaultProps={prefixCls:"am-button",size:"large",ghost:!1,inline:!1,disabled:!1,loading:!1,onClick:function(){}},n.exports=a["default"]},55:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t]);return a["default"]=n,a}function p(n,a){for(var t=Object.getOwnPropertyNames(a),s=0;s<t.length;s++){var e=t[s],p=Object.getOwnPropertyDescriptor(a,e);p&&p.configurable&&void 0===n[e]&&Object.defineProperty(n,e,p)}return n}function o(n,a,t){return a in n?Object.defineProperty(n,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[a]=t,n}function l(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function c(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function u(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):p(n,a))}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var r=t(1),i=e(r),k=t(2),f=s(k),d=function(n){function a(){return l(this,a),c(this,n.apply(this,arguments))}return u(a,n),a.prototype.render=function(){var n,a=this.props,t=a.prefixCls,s=a.size,e=a.className,p=a.children,l=a.style,c=(0,f["default"])((n={},o(n,""+t,!0),o(n,e,!!e),o(n,t+"-wb"+s,!0),n));return i.createElement("div",{className:c,style:l},p)},a}(i.Component);a["default"]=d,d.defaultProps={prefixCls:"am-wingblank",size:8},n.exports=a["default"]},56:function(n,a,t){"use strict";t(3),t(57)},57:function(n,a){},59:function(n,a,t){"use strict";t(3),t(61),t(60)},60:function(n,a){},74:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t]);return a["default"]=n,a}function p(n,a){for(var t=Object.getOwnPropertyNames(a),s=0;s<t.length;s++){var e=t[s],p=Object.getOwnPropertyDescriptor(a,e);p&&p.configurable&&void 0===n[e]&&Object.defineProperty(n,e,p)}return n}function o(n,a,t){return a in n?Object.defineProperty(n,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[a]=t,n}function l(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function c(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function u(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):p(n,a))}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var r=t(1),i=e(r),k=t(2),f=s(k),d=function(n){function a(){return l(this,a),c(this,n.apply(this,arguments))}return u(a,n),a.prototype.render=function(){var n,a=this.props,t=a.direction,s=a.wrap,e=a.justify,p=a.align,l=a.alignContent,c=a.className,u=a.children,r=a.prefixCls,k=a.style,d=a.onClick,g=(0,f["default"])((n={},o(n,r,!0),o(n,r+"-dir-row","row"===t),o(n,r+"-dir-row-reverse","row-reverse"===t),o(n,r+"-dir-column","column"===t),o(n,r+"-dir-column-reverse","column-reverse"===t),o(n,r+"-nowrap","nowrap"===s),o(n,r+"-wrap","wrap"===s),o(n,r+"-wrap-reverse","wrap-reverse"===s),o(n,r+"-justify-start","start"===e),o(n,r+"-justify-end","end"===e),o(n,r+"-justify-center","center"===e),o(n,r+"-justify-between","between"===e),o(n,r+"-justify-around","around"===e),o(n,r+"-align-top","top"===p||"start"===p),o(n,r+"-align-middle","middle"===p||"center"===p),o(n,r+"-align-bottom","bottom"===p||"end"===p),o(n,r+"-align-baseline","baseline"===p),o(n,r+"-align-stretch","stretch"===p),o(n,r+"-align-content-start","start"===l),o(n,r+"-align-content-end","end"===l),o(n,r+"-align-content-center","center"===l),o(n,r+"-align-content-between","between"===l),o(n,r+"-align-content-around","around"===l),o(n,r+"-align-content-stretch","stretch"===l),o(n,c,c),n));return i.createElement("div",{className:g,style:k,onClick:d},u)},a}(i.Component);a["default"]=d,d.propTypes={direction:r.PropTypes.oneOf(["row","row-reverse","column","column-reverse"]),wrap:r.PropTypes.oneOf(["nowrap","wrap","wrap-reverse"]),justify:r.PropTypes.oneOf(["start","end","center","between","around"]),align:r.PropTypes.oneOf(["start","end","center","top","middle","bottom","baseline","stretch"]),alignContent:r.PropTypes.oneOf(["start","end","center","between","around","stretch"])},d.defaultProps={prefixCls:"am-flexbox",align:"center",onClick:function(){}},n.exports=a["default"]},75:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t]);return a["default"]=n,a}function p(n,a){for(var t=Object.getOwnPropertyNames(a),s=0;s<t.length;s++){var e=t[s],p=Object.getOwnPropertyDescriptor(a,e);p&&p.configurable&&void 0===n[e]&&Object.defineProperty(n,e,p)}return n}function o(n,a,t){return a in n?Object.defineProperty(n,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[a]=t,n}function l(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function c(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function u(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):p(n,a))}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var r=t(1),i=e(r),k=t(2),f=s(k),d=function(n){function a(){return l(this,a),c(this,n.apply(this,arguments))}return u(a,n),a.prototype.render=function(){var n,a=this.props,t=a.children,s=a.className,e=a.prefixCls,p=a.style,l=a.onClick,c=(0,f["default"])((n={},o(n,e+"-item",!0),o(n,s,s),n));return i.createElement("div",{className:c,style:p,onClick:l},t)},a}(i.Component);a["default"]=d,d.defaultProps={prefixCls:"am-flexbox"},n.exports=a["default"]},76:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=t(74),p=s(e),o=t(75),l=s(o);p["default"].Item=l["default"],a["default"]=p["default"],n.exports=a["default"]},79:function(n,a,t){"use strict";t(3),t(80)},80:function(n,a){},754:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}var e=(t(56),t(55)),p=s(e),o=(t(79),t(76)),l=s(o),c=(t(59),t(48)),u=s(c),r=(t(28),t(27)),i=s(r),k=t(1),f=s(k),d=t(4);s(d);n.exports={content:[["p","\u57fa\u672c,\u5b50\u5143\u7d20FLex.Item,\u8bbe\u7f6eflex=1"]],meta:{order:0,title:"\u57fa\u672c",filename:"components/flex/demo/basic.md",id:"components-flex-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Flex<span class="token punctuation" >,</span> Button<span class="token punctuation" >,</span> WingBlank<span class="token punctuation" >,</span> WhiteSpace <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n\n<span class="token keyword" >let</span> FlexExample <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>button-container<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Flex</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Flex.Item</span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span><span class="token punctuation" >></span></span><span class="token number" >2</span>\u5217<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Flex.Item</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Flex.Item</span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token number" >2</span>\u5217<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Flex.Item</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Flex</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Flex</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Flex.Item</span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>small<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token number" >3</span>\u5217<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Flex.Item</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Flex.Item</span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>small<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token number" >3</span>\u5217<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Flex.Item</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Flex.Item</span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>small<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token number" >3</span>\u5217<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Flex.Item</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Flex</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Flex</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Flex.Item</span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span><span class="token punctuation" >></span></span><span class="token number" >4</span>\u5217<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Flex.Item</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Flex.Item</span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token number" >4</span>\u5217<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Flex.Item</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Flex.Item</span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span><span class="token punctuation" >></span></span><span class="token number" >4</span>\u5217<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Flex.Item</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Flex.Item</span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token number" >4</span>\u5217<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Flex.Item</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Flex</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Flex</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Flex.Item</span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>small<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token number" >5</span>\u5217<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Flex.Item</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Flex.Item</span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token number" >5</span>\u5217<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Flex.Item</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Flex.Item</span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>small<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token number" >5</span>\u5217<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Flex.Item</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Flex.Item</span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token number" >5</span>\u5217<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Flex.Item</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Flex.Item</span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token number" >5</span>\u5217<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Flex.Item</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Flex</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>FlexExample</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=f["default"].createClass({displayName:"FlexExample",render:function(){return f["default"].createElement("div",{className:"button-container"},f["default"].createElement(i["default"],null),f["default"].createElement(p["default"],null,f["default"].createElement(l["default"],null,f["default"].createElement(l["default"].Item,null,f["default"].createElement(u["default"],null,"2\u5217")),f["default"].createElement(l["default"].Item,null,f["default"].createElement(u["default"],{type:"primary"},"2\u5217")))),f["default"].createElement(i["default"],null),f["default"].createElement(p["default"],null,f["default"].createElement(l["default"],null,f["default"].createElement(l["default"].Item,null,f["default"].createElement(u["default"],{
size:"small"},"3\u5217")),f["default"].createElement(l["default"].Item,null,f["default"].createElement(u["default"],{type:"primary",size:"small"},"3\u5217")),f["default"].createElement(l["default"].Item,null,f["default"].createElement(u["default"],{size:"small"},"3\u5217")))),f["default"].createElement(i["default"],null),f["default"].createElement(p["default"],null,f["default"].createElement(l["default"],null,f["default"].createElement(l["default"].Item,null,f["default"].createElement(u["default"],null,"4\u5217")),f["default"].createElement(l["default"].Item,null,f["default"].createElement(u["default"],{type:"primary"},"4\u5217")),f["default"].createElement(l["default"].Item,null,f["default"].createElement(u["default"],null,"4\u5217")),f["default"].createElement(l["default"].Item,null,f["default"].createElement(u["default"],{type:"primary"},"4\u5217")))),f["default"].createElement(i["default"],null),f["default"].createElement(p["default"],null,f["default"].createElement(l["default"],null,f["default"].createElement(l["default"].Item,null,f["default"].createElement(u["default"],{size:"small"},"5\u5217")),f["default"].createElement(l["default"].Item,null,f["default"].createElement(u["default"],{type:"primary"},"5\u5217")),f["default"].createElement(l["default"].Item,null,f["default"].createElement(u["default"],{size:"small"},"5\u5217")),f["default"].createElement(l["default"].Item,null,f["default"].createElement(u["default"],{type:"primary"},"5\u5217")),f["default"].createElement(l["default"].Item,null,f["default"].createElement(u["default"],{type:"primary"},"5\u5217")))),f["default"].createElement(i["default"],null))}});return f["default"].createElement(n,null)}}}});