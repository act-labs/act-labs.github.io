(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{682:function(e,t,n){"use strict";n.r(t);n(713);var r=n(714),o=n.n(r),a=(n(119),n(57)),i=n.n(a),l=n(715),s=n(0),c=n.n(s),u=n(52);t.default=function(){return c.a.createElement(o.a,null,c.a.createElement(l.a,{title:"Home",keywords:["gatsby","application","react"]}),c.a.createElement("h1",null,"Hello Antd"),c.a.createElement("p",null,"This is a pure JSX page with a SEO component, navigation bar and Ant Design buttons/links to simple example pages."),c.a.createElement("div",{className:"buttons"},c.a.createElement(i.a,null,c.a.createElement(u.a,{to:"/examples/simple/"},"Simple")),c.a.createElement(i.a,null,c.a.createElement(u.a,{to:"/examples/mdx-page-1/"},"MDX 1")),c.a.createElement(i.a,null,c.a.createElement(u.a,{to:"/examples/mdx-page-2/"},"MDX 2")),c.a.createElement(i.a,{type:"primary"},c.a.createElement(u.a,{to:"/examples/navigation-sidebar/"},"Sidebar"))),c.a.createElement("style",null,"\n    .buttons .ant-btn {\n      margin-right: 8px;\n      margin-bottom: 12px;\n    }      \n    "))}},713:function(e,t,n){"use strict";n(35),n(663)},714:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(738)),o=a(n(739));function a(e){return e&&e.__esModule?e:{default:e}}r.default.Sider=o.default;var i=r.default;t.default=i},715:function(e,t,n){"use strict";n(44);var r=n(716),o=n(0),a=n.n(o),i=n(2),l=n.n(i),s=n(727),c=n.n(s),u=n(52);function p(e){var t=e.description,n=e.lang,o=e.meta,i=e.keywords,l=e.title;return a.a.createElement(u.b,{query:f,render:function(e){return"string"==typeof i&&(i=i.split(",").map(function(e){return e.trim()})),t=t||e.site.siteMetadata.description,a.a.createElement(c.a,{htmlAttributes:{lang:n},title:l,titleTemplate:"%s | "+e.site.siteMetadata.project,meta:[{name:"description",content:t},{property:"og:title",content:l},{property:"og:description",content:t},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:t}].concat(i?{name:"keywords",content:i.join(", ")}:[]).concat(o)})},data:r})}p.defaultProps={lang:"en",meta:[],keywords:null},p.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.oneOfType([l.a.string,l.a.arrayOf(l.a.string)]),title:l.a.string.isRequired},t.a=p;var f="304502870"},716:function(e){e.exports={data:{site:{siteMetadata:{project:"ACT blog",description:"React, Ant Design, Gatsby, GraphQl, and other web technologies",author:"Act Labs"}}}}},738:function(e,t,n){"use strict";n(16),n(6),n(53),n(103),n(28),n(8),n(12),n(17),n(10),Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.LayoutContext=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),o=l(n(9)),a=l(n(179)),i=n(24);function l(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t,n){return t&&f(e.prototype,t),n&&f(e,n),e}function m(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},v=(0,a.default)({siderHook:{addSider:function(){return null},removeSider:function(){return null}}});function w(e){var t=e.suffixCls,n=e.tagName;return function(e){return function(o){function a(){var o;return p(this,a),(o=m(this,y(a).apply(this,arguments))).renderComponent=function(a){var i=a.getPrefixCls,l=o.props.prefixCls,s=i(t,l);return r.createElement(e,u({prefixCls:s,tagName:n},o.props))},o}return h(a,r.Component),d(a,[{key:"render",value:function(){return r.createElement(i.ConfigConsumer,null,this.renderComponent)}}]),a}()}}t.LayoutContext=v;var O=function(e){function t(){return p(this,t),m(this,y(t).apply(this,arguments))}return h(t,r.Component),d(t,[{key:"render",value:function(){var e=this.props,t=e.prefixCls,n=e.className,a=e.children,i=e.tagName,l=g(e,["prefixCls","className","children","tagName"]),s=(0,o.default)(n,t);return r.createElement(i,u({className:s},l),a)}}]),t}(),x=function(e){function t(){var e;return p(this,t),(e=m(this,y(t).apply(this,arguments))).state={siders:[]},e}return h(t,r.Component),d(t,[{key:"getSiderHook",value:function(){var e=this;return{addSider:function(t){e.setState(function(e){return{siders:[].concat(c(e.siders),[t])}})},removeSider:function(t){e.setState(function(e){return{siders:e.siders.filter(function(e){return e!==t})}})}}}},{key:"render",value:function(){var e,t,n,a=this.props,i=a.prefixCls,l=a.className,s=a.children,c=a.hasSider,p=a.tagName,f=g(a,["prefixCls","className","children","hasSider","tagName"]),d=(0,o.default)(l,i,(e={},t="".concat(i,"-has-sider"),n="boolean"==typeof c?c:this.state.siders.length>0,t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e));return r.createElement(v.Provider,{value:{siderHook:this.getSiderHook()}},r.createElement(p,u({className:d},f),s))}}]),t}(),j=w({suffixCls:"layout",tagName:"section"})(x),C=w({suffixCls:"layout-header",tagName:"header"})(O),S=w({suffixCls:"layout-footer",tagName:"footer"})(O),E=w({suffixCls:"layout-content",tagName:"main"})(O);j.Header=C,j.Footer=S,j.Content=E;var P=j;t.default=P},739:function(e,t,n){"use strict";n(16),n(6),n(17),n(10),Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.SiderContext=void 0;var r=f(n(179)),o=n(24),a=n(738),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),l=n(42),s=f(n(9)),c=f(n(78)),u=f(n(31)),p=f(n(740));function f(e){return e&&e.__esModule?e:{default:e}}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t,n){return t&&b(e.prototype,t),n&&b(e,n),e}function v(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var j=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};if("undefined"!=typeof window){window.matchMedia=window.matchMedia||function(e){return{media:e,matches:!1,addListener:function(){},removeListener:function(){}}}}var C={xs:"480px",sm:"576px",md:"768px",lg:"992px",xl:"1200px",xxl:"1600px"},S=(0,r.default)({});t.SiderContext=S;var E,P=(E=0,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return E+=1,"".concat(e).concat(E)}),k=function(e){function t(e){var n,r,o;return h(this,t),(n=v(this,w(t).call(this,e))).responsiveHandler=function(e){n.setState({below:e.matches});var t=n.props.onBreakpoint;t&&t(e.matches),n.state.collapsed!==e.matches&&n.setCollapsed(e.matches,"responsive")},n.setCollapsed=function(e,t){"collapsed"in n.props||n.setState({collapsed:e});var r=n.props.onCollapse;r&&r(e,t)},n.toggle=function(){var e=!n.state.collapsed;n.setCollapsed(e,"clickTrigger")},n.belowShowChange=function(){n.setState({belowShow:!n.state.belowShow})},n.renderSider=function(e){var t,r=e.getPrefixCls,o=n.props,a=o.prefixCls,l=o.className,f=o.theme,d=o.collapsible,h=o.reverseArrow,b=o.trigger,g=o.style,v=o.width,w=o.collapsedWidth,O=j(o,["prefixCls","className","theme","collapsible","reverseArrow","trigger","style","width","collapsedWidth"]),x=r("layout-sider",a),C=(0,c.default)(O,["collapsed","defaultCollapsed","onCollapse","breakpoint","onBreakpoint","siderHook"]),S=n.state.collapsed?w:v,E=(0,p.default)(S)?"".concat(S,"px"):String(S),P=0===parseFloat(String(w||0))?i.createElement("span",{onClick:n.toggle,className:"".concat(x,"-zero-width-trigger ").concat(x,"-zero-width-trigger-").concat(h?"right":"left")},i.createElement(u.default,{type:"bars"})):null,k={expanded:h?i.createElement(u.default,{type:"right"}):i.createElement(u.default,{type:"left"}),collapsed:h?i.createElement(u.default,{type:"left"}):i.createElement(u.default,{type:"right"})}[n.state.collapsed?"collapsed":"expanded"],_=null!==b?P||i.createElement("div",{className:"".concat(x,"-trigger"),onClick:n.toggle,style:{width:E}},b||k):null,N=y({},g,{flex:"0 0 ".concat(E),maxWidth:E,minWidth:E,width:E}),M=(0,s.default)(l,x,"".concat(x,"-").concat(f),(m(t={},"".concat(x,"-collapsed"),!!n.state.collapsed),m(t,"".concat(x,"-has-trigger"),d&&null!==b&&!P),m(t,"".concat(x,"-below"),!!n.state.below),m(t,"".concat(x,"-zero-width"),0===parseFloat(E)),t));return i.createElement("aside",y({className:M},C,{style:N}),i.createElement("div",{className:"".concat(x,"-children")},n.props.children),d||n.state.below&&P?_:null)},n.uniqueId=P("ant-sider-"),"undefined"!=typeof window&&(r=window.matchMedia),r&&e.breakpoint&&e.breakpoint in C&&(n.mql=r("(max-width: ".concat(C[e.breakpoint],")"))),o="collapsed"in e?e.collapsed:e.defaultCollapsed,n.state={collapsed:o,below:!1},n}return O(t,i.Component),g(t,[{key:"componentDidMount",value:function(){this.mql&&(this.mql.addListener(this.responsiveHandler),this.responsiveHandler(this.mql)),this.props.siderHook&&this.props.siderHook.addSider(this.uniqueId)}},{key:"componentWillUnmount",value:function(){this.mql&&this.mql.removeListener(this.responsiveHandler),this.props.siderHook&&this.props.siderHook.removeSider(this.uniqueId)}},{key:"render",value:function(){var e=this.state.collapsed,t=this.props.collapsedWidth;return i.createElement(S.Provider,{value:{siderCollapsed:e,collapsedWidth:t}},i.createElement(o.ConfigConsumer,null,this.renderSider))}}],[{key:"getDerivedStateFromProps",value:function(e){return"collapsed"in e?{collapsed:e.collapsed}:null}}]),t}();k.defaultProps={collapsible:!1,defaultCollapsed:!1,reverseArrow:!1,width:200,collapsedWidth:80,style:{},theme:"dark"},(0,l.polyfill)(k);var _=function(e){function t(){return h(this,t),v(this,w(t).apply(this,arguments))}return O(t,i.Component),g(t,[{key:"render",value:function(){var e=this;return i.createElement(a.LayoutContext.Consumer,null,function(t){return i.createElement(k,y({},t,e.props))})}}]),t}();t.default=_},740:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){return!isNaN(parseFloat(e))&&isFinite(e)};t.default=r}}]);
//# sourceMappingURL=component---src-pages-examples-hello-antd-js-102f47a00ff3ed1e563c.js.map