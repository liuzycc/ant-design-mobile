webpackJsonp([87],{3:function(n,a,s){"use strict";s(7),s(6);var t=Math.floor(window.devicePixelRatio||1);t>=2&&document.querySelector("html").classList.add("pixel-ratio-"+t)},6:function(n,a){},7:function(n,a){},30:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(a[s]=n[s]);return a["default"]=n,a}function p(n,a){for(var s=Object.getOwnPropertyNames(a),t=0;t<s.length;t++){var e=s[t],p=Object.getOwnPropertyDescriptor(a,e);p&&p.configurable&&void 0===n[e]&&Object.defineProperty(n,e,p)}return n}function o(n,a,s){return a in n?Object.defineProperty(n,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[a]=s,n}function c(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function l(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function u(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):p(n,a))}Object.defineProperty(a,"__esModule",{value:!0});var i=s(1),r=e(i),k=s(46),f=t(k),m=s(44),d=t(m),g=s(45),v=t(g),h=s(47),b=t(h),y=s(2),w=t(y),E=function(n){function a(){return c(this,a),l(this,n.apply(this,arguments))}return u(a,n),a.prototype.render=function(){var n,a=this.props,s=a.prefixCls,t=a.children,e=a.className,p=a.style,c=(0,w["default"])((n={},o(n,s,!0),o(n,e,e),n));return r.createElement("div",{className:c,style:p},t)},a}(r.Component);E.defaultProps={prefixCls:"am-list"},E.Header=f["default"],E.Body=d["default"],E.Footer=v["default"],E.Item=b["default"],a["default"]=E,n.exports=a["default"]},36:function(n,a,s){"use strict";s(3),s(49)},44:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(a[s]=n[s]);return a["default"]=n,a}function p(n,a){for(var s=Object.getOwnPropertyNames(a),t=0;t<s.length;t++){var e=s[t],p=Object.getOwnPropertyDescriptor(a,e);p&&p.configurable&&void 0===n[e]&&Object.defineProperty(n,e,p)}return n}function o(n,a,s){return a in n?Object.defineProperty(n,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[a]=s,n}function c(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function l(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function u(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):p(n,a))}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var i=s(1),r=e(i),k=s(2),f=t(k),m=function(n){function a(){return c(this,a),l(this,n.apply(this,arguments))}return u(a,n),a.prototype.render=function(){var n,a=this.props,s=a.prefixCls,t=a.children,e=a.className,p=a.style,c=(0,f["default"])((n={},o(n,s+"-body",!0),o(n,e,e),n));return r.createElement("div",{className:c,style:p},t)},a}(r.Component);a["default"]=m,m.defaultProps={prefixCls:"am-list"},n.exports=a["default"]},45:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(a[s]=n[s]);return a["default"]=n,a}function p(n,a){for(var s=Object.getOwnPropertyNames(a),t=0;t<s.length;t++){var e=s[t],p=Object.getOwnPropertyDescriptor(a,e);p&&p.configurable&&void 0===n[e]&&Object.defineProperty(n,e,p)}return n}function o(n,a,s){return a in n?Object.defineProperty(n,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[a]=s,n}function c(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function l(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function u(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):p(n,a))}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var i=s(1),r=e(i),k=s(2),f=t(k),m=function(n){function a(){return c(this,a),l(this,n.apply(this,arguments))}return u(a,n),a.prototype.render=function(){var n,a=this.props,s=a.prefixCls,t=a.children,e=a.className,p=a.style,c=a.onClick,l=(0,f["default"])((n={},o(n,s+"-footer",!0),o(n,e,e),n));return r.createElement("div",{className:l,style:p,onClick:c},t)},a}(r.Component);a["default"]=m,m.propTypes={prefixCls:i.PropTypes.string},m.defaultProps={prefixCls:"am-list"},n.exports=a["default"]},46:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(a[s]=n[s]);return a["default"]=n,a}function p(n,a){for(var s=Object.getOwnPropertyNames(a),t=0;t<s.length;t++){var e=s[t],p=Object.getOwnPropertyDescriptor(a,e);p&&p.configurable&&void 0===n[e]&&Object.defineProperty(n,e,p)}return n}function o(n,a,s){return a in n?Object.defineProperty(n,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[a]=s,n}function c(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function l(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function u(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):p(n,a))}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var i=s(1),r=e(i),k=s(2),f=t(k),m=function(n){function a(){return c(this,a),l(this,n.apply(this,arguments))}return u(a,n),a.prototype.render=function(){var n,a=this.props,s=a.prefixCls,t=a.children,e=a.className,p=a.style,c=a.onClick,l=(0,f["default"])((n={},o(n,s+"-header",!0),o(n,e,e),n));return r.createElement("div",{className:l,style:p,onClick:c},t)},a}(r.Component);a["default"]=m,m.defaultProps={prefixCls:"am-list"},n.exports=a["default"]},47:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(a[s]=n[s]);return a["default"]=n,a}function p(n,a){for(var s=Object.getOwnPropertyNames(a),t=0;t<s.length;t++){var e=s[t],p=Object.getOwnPropertyDescriptor(a,e);p&&p.configurable&&void 0===n[e]&&Object.defineProperty(n,e,p)}return n}function o(n,a,s){return a in n?Object.defineProperty(n,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[a]=s,n}function c(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function l(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function u(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):p(n,a))}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var i=s(1),r=e(i),k=s(2),f=t(k),m=function(n){function a(s){c(this,a);var t=l(this,n.call(this,s));return t.onClick=function(n){t.props.onClick&&(t.setState({hover:!0}),setTimeout(function(){t.setState({hover:!1})},200),t.props.onClick(n))},t.onTouchStart=function(){t.props.onClick&&t.setState({hover:!0})},t.onTouchEnd=function(){t.props.onClick&&t.setState({hover:!1})},t.state={hover:!1},t}return u(a,n),a.prototype.render=function(){var n,a,s=this.props,t=s.prefixCls,e=s.thumb,p=s.arrow,c=s.error,l=s.children,u=s.extra,i=s.className,k=s.align,m=s.style,d=this.state.hover,g=void 0,v=void 0,h=(0,f["default"])((n={},o(n,t+"-item",!0),o(n,t+"-item-error",c),o(n,t+"-item-top","top"===k),o(n,t+"-item-middle","middle"===k),o(n,t+"-item-bottom","bottom"===k),o(n,t+"-item-hover",d),o(n,i,i),n)),b=(0,f["default"])((a={},o(a,t+"-arrow-horizontal","horizontal"===p),o(a,t+"-arrow-vertical","down"===p||"up"===p),o(a,t+"-arrow-vertical-up","up"===p),a));return e&&(g="string"==typeof e?r.createElement("div",{className:t+"-thumb"},r.createElement("img",{src:e})):r.createElement("div",{className:t+"-thumb"},e)),v=""!==p?"empty"===p?r.createElement("div",{className:t+"-arrow"}):r.createElement("div",{className:t+"-arrow"},r.createElement("span",{className:b})):null,r.createElement("div",{className:h,onClick:this.onClick,onTouchStart:this.onTouchStart,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchEnd,style:m},g,r.createElement("div",{className:t+"-line"},""!==l?r.createElement("div",{className:t+"-content"},l):null,""!==u?r.createElement("div",{className:t+"-extra"},u):null,v))},a}(r.Component);a["default"]=m,m.defaultProps={prefixCls:"am-list",thumb:"",arrow:"",children:"",extra:"",error:!1,align:"middle"},n.exports=a["default"]},49:function(n,a){},780:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(s(36),s(30)),p=t(e),o=s(1),c=t(o),l=s(4);t(l);n.exports={content:[["p","\u4e00\u4e2a\u4e1a\u52a1\u4e0a\u4f7f\u7528\u7684\u793a\u4f8b\u3002"]],meta:{order:3,title:"\u4e1a\u52a1\u793a\u4f8b",filename:"components/list/demo/memberdetail.md",id:"components-list-demo-memberdetail"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> List <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Body</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Item</span>\n          <span class="token attr-name" >extra</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u9e7f\u6e2f\u5c0f\u9547<span class="token punctuation" >"</span></span>\n          <span class="token attr-name" >arrow</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>horizontal<span class="token punctuation" >"</span></span>\n          <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n        <span class="token punctuation" >></span></span>\u6240\u5c5e\u95e8\u5e97<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Item</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Item</span>\n          <span class="token attr-name" >extra</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u5f20\u4e09<span class="token punctuation" >"</span></span>\n          <span class="token attr-name" >arrow</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>empty<span class="token punctuation" >"</span></span>\n          <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n        <span class="token punctuation" >></span></span>\u5458\u5de5\u59d3\u540d<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Item</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Item</span>\n          <span class="token attr-name" >extra</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6536\u94f6\u5458<span class="token punctuation" >"</span></span>\n          <span class="token attr-name" >arrow</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>empty<span class="token punctuation" >"</span></span>\n          <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n        <span class="token punctuation" >></span></span>\u5458\u5de5\u89d2\u8272<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Item</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Item</span>\n          <span class="token attr-name" >extra</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>13838383756<span class="token punctuation" >"</span></span>\n          <span class="token attr-name" >arrow</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>empty<span class="token punctuation" >"</span></span>\n          <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n        <span class="token punctuation" >></span></span>\u5458\u5de5\u624b\u673a<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Item</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Item</span>\n          <span class="token attr-name" >extra</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u53ea\u53ef\u9000\u81ea\u5df1\u7684<span class="token punctuation" >"</span></span>\n          <span class="token attr-name" >arrow</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>empty<span class="token punctuation" >"</span></span>\n          <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n        <span class="token punctuation" >></span></span>\u9000\u6b3e\u6743\u9650<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Item</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Item</span>\n          <span class="token attr-name" >extra</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u5176\u4ed6\u6743\u9650<span class="token punctuation" >"</span></span>\n          <span class="token attr-name" >arrow</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>horizontal<span class="token punctuation" >"</span></span>\n          <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n        <span class="token punctuation" >></span></span>\u6587\u672c\u4fe1\u606f<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Item</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Item</span>\n          <span class="token attr-name" >extra={&lt;img</span> <span class="token attr-name" >src</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAm0lEQVR4Ae2Whw0DMQwD5Q24gfbfRTslaPlGCGb6vyAe2tdzty1uArAlyz2RMgJLoggsSTUBfUwCSkD49jKCFnhgYegCaZgSIAGlokCHBDk1BR6YspMteHIfRqWbhMc714Y/aMF/Bdgw5mJh5HgmU2u2qITatEAQCEvCe53cp+v3T9ct0E92HH01bcGlBIEVRfDWMGUBU0aQ04I7BEwkp1QhR1sAAAAASUVORK5CYII<span class="token punctuation" >=</span><span class="token punctuation" >"</span></span> <span class="token attr-name" >width</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>29<span class="token punctuation" >"</span></span> <span class="token attr-name" >height</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>29<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >}</span>\n          arrow<span class="token operator" >=</span><span class="token string" >"horizontal"</span>\n          onClick<span class="token operator" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >}</span>\n        <span class="token operator" >></span>\u5458\u5de5\u4e8c\u7ef4\u7801<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Item</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Item</span>\n          <span class="token attr-name" >extra={&lt;div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>am-list-title<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>zhifubao@alipay<span class="token punctuation" >.</span>com#<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>am-list-brief<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token number" >001</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >}</span>\n          arrow<span class="token operator" >=</span><span class="token string" >"horizontal"</span>\n          onClick<span class="token operator" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >}</span>\n        <span class="token operator" >></span>\u5782\u76f4\u5c45\u4e2d\u5bf9\u9f50<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Item</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Item</span>\n          <span class="token attr-name" >extra={&lt;div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>am-list-title<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>zhifubao@alipay<span class="token punctuation" >.</span>com#<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>am-list-brief<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token number" >001</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >}</span>\n          arrow<span class="token operator" >=</span><span class="token string" >"horizontal"</span>\n          align<span class="token operator" >=</span><span class="token string" >"top"</span>\n          onClick<span class="token operator" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >}</span>\n        <span class="token operator" >></span>\u9876\u90e8\u5bf9\u9f50<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Item</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Item</span>\n          <span class="token attr-name" >extra={&lt;div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>am-list-title<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>zhifubao@alipay<span class="token punctuation" >.</span>com#<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>am-list-brief<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token number" >001</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >}</span>\n          arrow<span class="token operator" >=</span><span class="token string" >"horizontal"</span>\n          align<span class="token operator" >=</span><span class="token string" >"bottom"</span>\n          onClick<span class="token operator" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >}</span>\n        <span class="token operator" >></span>\u5e95\u90e8\u5bf9\u9f50<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Item</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Item</span>\n          <span class="token attr-name" >extra={&lt;div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>am-list-title<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>zhifubao@alipay<span class="token punctuation" >.</span>com#<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>am-list-brief<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token number" >001</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >}</span>\n          arrow<span class="token operator" >=</span><span class="token string" >"horizontal"</span>\n          align<span class="token operator" >=</span><span class="token string" >"top"</span>\n          onClick<span class="token operator" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >}</span>\n        <span class="token operator" >></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>am-list-title</span> <span class="token attr-name" >am-list-multiline"</span><span class="token punctuation" >></span></span>zhifubao@alipay<span class="token punctuation" >.</span>com#zh#<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Item</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Body</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return c["default"].createElement("div",null,c["default"].createElement(p["default"],null,c["default"].createElement(p["default"].Body,null,c["default"].createElement(p["default"].Item,{extra:"\u9e7f\u6e2f\u5c0f\u9547",arrow:"horizontal",onClick:function(){}},"\u6240\u5c5e\u95e8\u5e97"),c["default"].createElement(p["default"].Item,{extra:"\u5f20\u4e09",
arrow:"empty",onClick:function(){}},"\u5458\u5de5\u59d3\u540d"),c["default"].createElement(p["default"].Item,{extra:"\u6536\u94f6\u5458",arrow:"empty",onClick:function(){}},"\u5458\u5de5\u89d2\u8272"),c["default"].createElement(p["default"].Item,{extra:"13838383756",arrow:"empty",onClick:function(){}},"\u5458\u5de5\u624b\u673a"),c["default"].createElement(p["default"].Item,{extra:"\u53ea\u53ef\u9000\u81ea\u5df1\u7684",arrow:"empty",onClick:function(){}},"\u9000\u6b3e\u6743\u9650"),c["default"].createElement(p["default"].Item,{extra:"\u5176\u4ed6\u6743\u9650",arrow:"horizontal",onClick:function(){}},"\u6587\u672c\u4fe1\u606f"),c["default"].createElement(p["default"].Item,{extra:c["default"].createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAm0lEQVR4Ae2Whw0DMQwD5Q24gfbfRTslaPlGCGb6vyAe2tdzty1uArAlyz2RMgJLoggsSTUBfUwCSkD49jKCFnhgYegCaZgSIAGlokCHBDk1BR6YspMteHIfRqWbhMc714Y/aMF/Bdgw5mJh5HgmU2u2qITatEAQCEvCe53cp+v3T9ct0E92HH01bcGlBIEVRfDWMGUBU0aQ04I7BEwkp1QhR1sAAAAASUVORK5CYII=",width:"29",height:"29"}),arrow:"horizontal",onClick:function(){}},"\u5458\u5de5\u4e8c\u7ef4\u7801"),c["default"].createElement(p["default"].Item,{extra:c["default"].createElement("div",null,c["default"].createElement("div",{className:"am-list-title"},"zhifubao@alipay.com#"),c["default"].createElement("div",{className:"am-list-brief"},"001")),arrow:"horizontal",onClick:function(){}},"\u5782\u76f4\u5c45\u4e2d\u5bf9\u9f50"),c["default"].createElement(p["default"].Item,{extra:c["default"].createElement("div",null,c["default"].createElement("div",{className:"am-list-title"},"zhifubao@alipay.com#"),c["default"].createElement("div",{className:"am-list-brief"},"001")),arrow:"horizontal",align:"top",onClick:function(){}},"\u9876\u90e8\u5bf9\u9f50"),c["default"].createElement(p["default"].Item,{extra:c["default"].createElement("div",null,c["default"].createElement("div",{className:"am-list-title"},"zhifubao@alipay.com#"),c["default"].createElement("div",{className:"am-list-brief"},"001")),arrow:"horizontal",align:"bottom",onClick:function(){}},"\u5e95\u90e8\u5bf9\u9f50"),c["default"].createElement(p["default"].Item,{extra:c["default"].createElement("div",null,c["default"].createElement("div",{className:"am-list-title"},"zhifubao@alipay.com#"),c["default"].createElement("div",{className:"am-list-brief"},"001")),arrow:"horizontal",align:"top",onClick:function(){}},c["default"].createElement("div",{className:"am-list-title am-list-multiline"},"zhifubao@alipay.com#zh#")))))}}}});