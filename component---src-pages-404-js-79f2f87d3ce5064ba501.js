(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{691:function(e,t,r){"use strict";r.r(t);r(732);var n=r(733),o=r.n(n),a=r(734),i=r(0),l=r.n(i);t.default=function(){return l.a.createElement(o.a,null,l.a.createElement(a.a,{title:"404: Not found"}),l.a.createElement("h1",null,"NOT FOUND"),l.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},732:function(e,t,r){"use strict";r(36),r(673)},733:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r(757)),o=a(r(758));function a(e){return e&&e.__esModule?e:{default:e}}n.default.Sider=o.default;var i=n.default;t.default=i},734:function(e,t,r){"use strict";r(46);var n=r(735),o=r(0),a=r.n(o),i=r(2),l=r.n(i),s=r(746),c=r.n(s),u=r(34);function p(e){var t=e.description,r=e.lang,o=e.meta,i=e.keywords,l=e.title;return a.a.createElement(u.b,{query:f,render:function(e){return"string"==typeof i&&(i=i.split(",").map(function(e){return e.trim()})),t=t||e.site.siteMetadata.description,a.a.createElement(c.a,{htmlAttributes:{lang:r},title:l,titleTemplate:"%s | "+e.site.siteMetadata.project,meta:[{name:"description",content:t},{property:"og:title",content:l},{property:"og:description",content:t},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:t}].concat(i?{name:"keywords",content:i.join(", ")}:[]).concat(o)})},data:n})}p.defaultProps={lang:"en",meta:[],keywords:null},p.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.oneOfType([l.a.string,l.a.arrayOf(l.a.string)]),title:l.a.string.isRequired},t.a=p;var f="304502870"},735:function(e){e.exports={data:{site:{siteMetadata:{project:"ACT blog",description:"React, Ant Design, Gatsby, GraphQl, and other web technologies",author:"Act Labs"}}}}},757:function(e,t,r){"use strict";r(16),r(6),r(54),r(103),r(28),r(8),r(12),r(17),r(10),Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.LayoutContext=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),o=l(r(9)),a=l(r(179)),i=r(24);function l(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t,r){return t&&f(e.prototype,t),r&&f(e,r),e}function y(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},g=(0,a.default)({siderHook:{addSider:function(){return null},removeSider:function(){return null}}});function w(e){var t=e.suffixCls,r=e.tagName;return function(e){return function(o){function a(){var o;return p(this,a),(o=y(this,m(a).apply(this,arguments))).renderComponent=function(a){var i=a.getPrefixCls,l=o.props.prefixCls,s=i(t,l);return n.createElement(e,u({prefixCls:s,tagName:r},o.props))},o}return h(a,n.Component),d(a,[{key:"render",value:function(){return n.createElement(i.ConfigConsumer,null,this.renderComponent)}}]),a}()}}t.LayoutContext=g;var O=function(e){function t(){return p(this,t),y(this,m(t).apply(this,arguments))}return h(t,n.Component),d(t,[{key:"render",value:function(){var e=this.props,t=e.prefixCls,r=e.className,a=e.children,i=e.tagName,l=v(e,["prefixCls","className","children","tagName"]),s=(0,o.default)(r,t);return n.createElement(i,u({className:s},l),a)}}]),t}(),j=function(e){function t(){var e;return p(this,t),(e=y(this,m(t).apply(this,arguments))).state={siders:[]},e}return h(t,n.Component),d(t,[{key:"getSiderHook",value:function(){var e=this;return{addSider:function(t){e.setState(function(e){return{siders:[].concat(c(e.siders),[t])}})},removeSider:function(t){e.setState(function(e){return{siders:e.siders.filter(function(e){return e!==t})}})}}}},{key:"render",value:function(){var e,t,r,a=this.props,i=a.prefixCls,l=a.className,s=a.children,c=a.hasSider,p=a.tagName,f=v(a,["prefixCls","className","children","hasSider","tagName"]),d=(0,o.default)(l,i,(e={},t="".concat(i,"-has-sider"),r="boolean"==typeof c?c:this.state.siders.length>0,t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e));return n.createElement(g.Provider,{value:{siderHook:this.getSiderHook()}},n.createElement(p,u({className:d},f),s))}}]),t}(),C=w({suffixCls:"layout",tagName:"section"})(j),x=w({suffixCls:"layout-header",tagName:"header"})(O),S=w({suffixCls:"layout-footer",tagName:"footer"})(O),P=w({suffixCls:"layout-content",tagName:"main"})(O);C.Header=x,C.Footer=S,C.Content=P;var k=C;t.default=k},758:function(e,t,r){"use strict";r(16),r(6),r(17),r(10),Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.SiderContext=void 0;var n=f(r(179)),o=r(24),a=r(757),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),l=r(44),s=f(r(9)),c=f(r(78)),u=f(r(31)),p=f(r(759));function f(e){return e&&e.__esModule?e:{default:e}}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t,r){return t&&b(e.prototype,t),r&&b(e,r),e}function g(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var C=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};if("undefined"!=typeof window){window.matchMedia=window.matchMedia||function(e){return{media:e,matches:!1,addListener:function(){},removeListener:function(){}}}}var x={xs:"480px",sm:"576px",md:"768px",lg:"992px",xl:"1200px",xxl:"1600px"},S=(0,n.default)({});t.SiderContext=S;var P,k=(P=0,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return P+=1,"".concat(e).concat(P)}),_=function(e){function t(e){var r,n,o;return h(this,t),(r=g(this,w(t).call(this,e))).responsiveHandler=function(e){r.setState({below:e.matches});var t=r.props.onBreakpoint;t&&t(e.matches),r.state.collapsed!==e.matches&&r.setCollapsed(e.matches,"responsive")},r.setCollapsed=function(e,t){"collapsed"in r.props||r.setState({collapsed:e});var n=r.props.onCollapse;n&&n(e,t)},r.toggle=function(){var e=!r.state.collapsed;r.setCollapsed(e,"clickTrigger")},r.belowShowChange=function(){r.setState({belowShow:!r.state.belowShow})},r.renderSider=function(e){var t,n=e.getPrefixCls,o=r.props,a=o.prefixCls,l=o.className,f=o.theme,d=o.collapsible,h=o.reverseArrow,b=o.trigger,v=o.style,g=o.width,w=o.collapsedWidth,O=C(o,["prefixCls","className","theme","collapsible","reverseArrow","trigger","style","width","collapsedWidth"]),j=n("layout-sider",a),x=(0,c.default)(O,["collapsed","defaultCollapsed","onCollapse","breakpoint","onBreakpoint","siderHook"]),S=r.state.collapsed?w:g,P=(0,p.default)(S)?"".concat(S,"px"):String(S),k=0===parseFloat(String(w||0))?i.createElement("span",{onClick:r.toggle,className:"".concat(j,"-zero-width-trigger ").concat(j,"-zero-width-trigger-").concat(h?"right":"left")},i.createElement(u.default,{type:"bars"})):null,_={expanded:h?i.createElement(u.default,{type:"right"}):i.createElement(u.default,{type:"left"}),collapsed:h?i.createElement(u.default,{type:"left"}):i.createElement(u.default,{type:"right"})}[r.state.collapsed?"collapsed":"expanded"],E=null!==b?k||i.createElement("div",{className:"".concat(j,"-trigger"),onClick:r.toggle,style:{width:P}},b||_):null,N=m({},v,{flex:"0 0 ".concat(P),maxWidth:P,minWidth:P,width:P}),M=(0,s.default)(l,j,"".concat(j,"-").concat(f),(y(t={},"".concat(j,"-collapsed"),!!r.state.collapsed),y(t,"".concat(j,"-has-trigger"),d&&null!==b&&!k),y(t,"".concat(j,"-below"),!!r.state.below),y(t,"".concat(j,"-zero-width"),0===parseFloat(P)),t));return i.createElement("aside",m({className:M},x,{style:N}),i.createElement("div",{className:"".concat(j,"-children")},r.props.children),d||r.state.below&&k?E:null)},r.uniqueId=k("ant-sider-"),"undefined"!=typeof window&&(n=window.matchMedia),n&&e.breakpoint&&e.breakpoint in x&&(r.mql=n("(max-width: ".concat(x[e.breakpoint],")"))),o="collapsed"in e?e.collapsed:e.defaultCollapsed,r.state={collapsed:o,below:!1},r}return O(t,i.Component),v(t,[{key:"componentDidMount",value:function(){this.mql&&(this.mql.addListener(this.responsiveHandler),this.responsiveHandler(this.mql)),this.props.siderHook&&this.props.siderHook.addSider(this.uniqueId)}},{key:"componentWillUnmount",value:function(){this.mql&&this.mql.removeListener(this.responsiveHandler),this.props.siderHook&&this.props.siderHook.removeSider(this.uniqueId)}},{key:"render",value:function(){var e=this.state.collapsed,t=this.props.collapsedWidth;return i.createElement(S.Provider,{value:{siderCollapsed:e,collapsedWidth:t}},i.createElement(o.ConfigConsumer,null,this.renderSider))}}],[{key:"getDerivedStateFromProps",value:function(e){return"collapsed"in e?{collapsed:e.collapsed}:null}}]),t}();_.defaultProps={collapsible:!1,defaultCollapsed:!1,reverseArrow:!1,width:200,collapsedWidth:80,style:{},theme:"dark"},(0,l.polyfill)(_);var E=function(e){function t(){return h(this,t),g(this,w(t).apply(this,arguments))}return O(t,i.Component),v(t,[{key:"render",value:function(){var e=this;return i.createElement(a.LayoutContext.Consumer,null,function(t){return i.createElement(_,m({},t,e.props))})}}]),t}();t.default=E},759:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){return!isNaN(parseFloat(e))&&isFinite(e)};t.default=n}}]);
//# sourceMappingURL=component---src-pages-404-js-79f2f87d3ce5064ba501.js.map