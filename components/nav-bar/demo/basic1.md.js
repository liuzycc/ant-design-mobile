webpackJsonp([101],{3:function(n,a,s){"use strict";s(7),s(6);var t=Math.floor(window.devicePixelRatio||1);t>=2&&document.querySelector("html").classList.add("pixel-ratio-"+t)},6:function(n,a){},7:function(n,a){},21:function(n,a){"use strict";function s(n,a){var s={},t={};return Object.keys(n).forEach(function(e){a.indexOf(e)!==-1?s[e]=n[e]:t[e]=n[e]}),[s,t]}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=s,n.exports=a["default"]},137:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(a[s]=n[s]);return a["default"]=n,a}function p(n,a){for(var s=Object.getOwnPropertyNames(a),t=0;t<s.length;t++){var e=s[t],p=Object.getOwnPropertyDescriptor(a,e);p&&p.configurable&&void 0===n[e]&&Object.defineProperty(n,e,p)}return n}function o(n,a,s){return a in n?Object.defineProperty(n,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[a]=s,n}function c(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function l(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function u(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):p(n,a))}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var i=Object.assign||function(n){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}return n},r=function(){function n(n,a){var s=[],t=!0,e=!1,p=void 0;try{for(var o,c=n[Symbol.iterator]();!(t=(o=c.next()).done)&&(s.push(o.value),!a||s.length!==a);t=!0);}catch(l){e=!0,p=l}finally{try{!t&&c["return"]&&c["return"]()}finally{if(e)throw p}}return s}return function(a,s){if(Array.isArray(a))return a;if(Symbol.iterator in Object(a))return n(a,s);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),k=s(1),f=e(k),d=s(2),m=t(d),g=s(37),v=t(g),y=s(21),h=t(y),b=function(n){function a(){return c(this,a),l(this,n.apply(this,arguments))}return u(a,n),a.prototype.render=function(){var n,a=(0,h["default"])(this.props,["prefixCls","children","mode","className","iconName","leftContent","rightContent","onLeftClick"]),s=r(a,2),t=s[0],e=t.prefixCls,p=t.children,c=t.mode,l=t.className,u=t.iconName,k=t.leftContent,d=t.rightContent,g=t.onLeftClick,y=s[1],b=(0,m["default"])((n={},o(n,l,l),o(n,e,!0),o(n,e+"-"+c,!0),n));return f.createElement("div",i({},y,{className:b}),f.createElement("div",{className:e+"-left",onClick:g},u?f.createElement("span",{className:e+"-left-icon"},f.createElement(v["default"],{type:u})):null,f.createElement("span",{className:e+"-left-content"},k)),f.createElement("div",{className:e+"-title"},p),f.createElement("div",{className:e+"-right"},d))},a}(f.Component);a["default"]=b,b.defaultProps={prefixCls:"am-navbar",mode:"dark",iconName:"left",onLeftClick:function(){}},n.exports=a["default"]},138:function(n,a,s){"use strict";s(3),s(141)},141:function(n,a){},792:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(s(138),s(137)),p=t(e),o=(s(61),s(37)),c=t(o),l=s(1),u=t(l),i=s(4);t(i);n.exports={content:[["p","\u5de6\u4fa7\u6216\u53f3\u4fa7\u65e0\u5185\u5bb9"]],meta:{order:1,title:"other",filename:"components/nav-bar/demo/basic1.md",id:"components-nav-bar-demo-basic1"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> NavBar<span class="token punctuation" >,</span> Icon <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> padding<span class="token punctuation" >:</span> <span class="token number" >8</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>NavBar</span> <span class="token attr-name" >iconName</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token boolean" >false</span><span class="token punctuation" >}</span></span>\n      <span class="token attr-name" >rightContent={[&lt;Icon</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>0<span class="token punctuation" >"</span></span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>user<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>1<span class="token punctuation" >"</span></span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>search<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>2<span class="token punctuation" >"</span></span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>plus<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >]</span><span class="token punctuation" >}</span>\n    <span class="token operator" >></span>NavBar<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>NavBar</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> height<span class="token punctuation" >:</span> <span class="token number" >8</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>NavBar</span> <span class="token attr-name" >leftContent</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8fd4\u56de<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>NavBar<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>NavBar</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> height<span class="token punctuation" >:</span> <span class="token number" >8</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>NavBar</span> <span class="token attr-name" >iconName</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token boolean" >false</span><span class="token punctuation" >}</span></span>\n      <span class="token attr-name" >rightContent={&lt;Icon</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ellipsis<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >}</span>\n    <span class="token operator" >></span>NavBar<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>NavBar</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> height<span class="token punctuation" >:</span> <span class="token number" >8</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>NavBar</span> <span class="token attr-name" >iconName</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token boolean" >false</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >leftContent</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u53d6\u6d88<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >rightContent</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u5b8c\u6210<span class="token punctuation" >"</span></span>\n    <span class="token punctuation" >></span></span>NavBar<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>NavBar</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return u["default"].createElement("div",{style:{padding:8}},u["default"].createElement(p["default"],{iconName:!1,rightContent:[u["default"].createElement(c["default"],{key:"0",type:"user"}),u["default"].createElement(c["default"],{key:"1",type:"search"}),u["default"].createElement(c["default"],{key:"2",type:"plus"})]},"NavBar"),u["default"].createElement("div",{style:{height:8}}),u["default"].createElement(p["default"],{leftContent:"\u8fd4\u56de"},"NavBar"),u["default"].createElement("div",{style:{height:8}}),u["default"].createElement(p["default"],{iconName:!1,rightContent:u["default"].createElement(c["default"],{type:"ellipsis"})},"NavBar"),u["default"].createElement("div",{style:{height:8}}),u["default"].createElement(p["default"],{iconName:!1,leftContent:"\u53d6\u6d88",rightContent:"\u5b8c\u6210"},"NavBar"))}}}});