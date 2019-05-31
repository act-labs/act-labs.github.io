(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{359:function(e,t,n){"use strict";n.r(t);n(105);var a=n(0),r=n.n(a),i=n(4),s=n.n(i),o=n(3),l=n.n(o),c=n(1),p=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=null,n}return l()(t,e),t.prototype.render=function(){var e=this.props,t=e.components;s()(e,["components"]);return r.a.createElement(c.MDXTag,{name:"wrapper",components:t},r.a.createElement(c.MDXTag,{name:"p",components:t},r.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/snippets/main/graphql-main-config/",title:"GraphQL, main configuration"}},"A snippet")," with GraphQL to request the main configuration file (",r.a.createElement(c.MDXTag,{name:"em",components:t,parentName:"p"},"src/content/config/main.yaml"),")."),r.a.createElement(c.MDXTag,{name:"pre",components:t},r.a.createElement(c.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-javascript"}},'query MainConfiguration {\n    allConfigYaml (\n        filter:{\n            fields:{slug: {eq:"/config/main/"}}\n        }\n    )\n    {\n        edges {\n            node {\n                fields{\n                    slug\n                }\n\n                nav{\n                    text\n                    slug\n                }\n            }\n        }\n    }\n}\n')))},t}(r.a.Component),u=n(381),g=n(382);function m(e){var t=Object.assign({},e,{pageContext:Object.assign({},e.pageContext,u)});return r.a.createElement(g.a,t,r.a.createElement(p,t))}n.d(t,"default",function(){return m})},363:function(e,t,n){"use strict";n.d(t,"b",function(){return p});var a=n(0),r=n.n(a),i=n(2),s=n.n(i),o=n(70),l=n.n(o);n.d(t,"a",function(){return l.a});n(365);var c=r.a.createContext({}),p=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};p.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},364:function(e,t,n){"use strict";n(105);var a=n(4),r=n.n(a),i=n(0),s=n.n(i),o=n(363);t.a=function(e){var t=e.children,n=e.to,a=e.activeClassName,i=e.href,l=r()(e,["children","to","activeClassName","href"]);return i&&(n=i),/^\/(?!\/)/.test(n)?s.a.createElement(o.a,Object.assign({to:n,activeClassName:a},l),t):s.a.createElement("a",Object.assign({href:n},l),t)}},365:function(e,t,n){var a;e.exports=(a=n(368))&&a.default||a},368:function(e,t,n){"use strict";n.r(t);var a=n(24),r=n.n(a),i=n(0),s=n.n(i),o=n(2),l=n.n(o),c=n(106),p=n(7),u=function(e){var t=e.location,n=p.default.getResourcesForPathnameSync(t.pathname);return n?s.a.createElement(c.a,r()({location:t,pageResources:n},n.json)):null};u.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=u},369:function(e,t,n){"use strict";n(163);var a=n(372),r=n(0),i=n.n(r),s=n(2),o=n.n(s),l=n(386),c=n.n(l),p=n(363);function u(e){var t=e.description,n=e.lang,r=e.meta,s=e.keywords,o=e.title;return i.a.createElement(p.b,{query:g,render:function(e){return"string"==typeof s&&(s=s.split(",").map(function(e){return e.trim()})),t=t||e.site.siteMetadata.description,i.a.createElement(c.a,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s | "+e.site.siteMetadata.project,meta:[{name:"description",content:t},{property:"og:title",content:o},{property:"og:description",content:t},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:t}].concat(s?{name:"keywords",content:s.join(", ")}:[]).concat(r)})},data:a})}u.defaultProps={lang:"en",meta:[],keywords:null},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.oneOfType([o.a.string,o.a.arrayOf(o.a.string)]),title:o.a.string.isRequired},t.a=u;var g="304502870"},370:function(e,t,n){"use strict";n.d(t,"a",function(){return c});n(384);var a=n(371),r=n(0),i=n.n(r),s=n(363),o=n(385),l=n.n(o);function c(){return i.a.createElement(s.b,{query:"2369744027",render:function(e){return i.a.createElement(l.a,{fixed:e.logo.childImageSharp.fixed,style:{float:"left"}})},data:a})}},371:function(e){e.exports={data:{logo:{childImageSharp:{fixed:{base64:"data:image/png;base64,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",width:50,height:60,src:"/static/24243787906a1f19048f79ada574a876/ae665/logo.png",srcSet:"/static/24243787906a1f19048f79ada574a876/ae665/logo.png 1x,\n/static/24243787906a1f19048f79ada574a876/0fd90/logo.png 1.5x,\n/static/24243787906a1f19048f79ada574a876/456a3/logo.png 2x,\n/static/24243787906a1f19048f79ada574a876/f920b/logo.png 3x"}}}}}},372:function(e){e.exports={data:{site:{siteMetadata:{project:"ACT blog",description:"React, Ant Design, Gatsby, GraphQl, and other web technologies",author:"Act Labs"}}}}},373:function(e){e.exports={data:{config:{copyright:"Copyright © Act Labs",social:[{icon:"facebook",link:"https://www.facebook.com/ACT7LAB"},{icon:"github",link:"https://github.com/act-labs/gatsby-starter-act-blog"}]}}}},374:function(e){e.exports={data:{config:{nav:[{text:"home",slug:null},{text:"posts",slug:"/posts/"},{text:"snippets",slug:"/snippets/main/intro/"}]}}}},375:function(e,t,n){"use strict";n(105);var a=n(364),r=(n(380),n(71)),i=n.n(r),s=(n(383),n(366),n(367)),o=n.n(s),l=n(373),c=n(0),p=n.n(c),u=n(363),g=o.a.Footer;function m(e){var t=e.social,n=e.copyright,r=t.map(function(e){var t=e.link,n=e.icon;return p.a.createElement(a.a,{key:n,to:t},p.a.createElement(i.a,{type:n,style:{fontSize:"24px",marginLeft:10,color:"rgba(0, 0, 0, 0.65)"}}))});return p.a.createElement(g,{style:{textAlign:"center"}},p.a.createElement("div",null,n,p.a.createElement("div",{style:{float:"right"}},r)))}function d(e){return e.social?p.a.createElement(m,e):p.a.createElement(u.b,{query:"2743462859",render:function(t){var n=t.config,a=n.social,r=n.copyright;return p.a.createElement(m,Object.assign({social:a,copyright:r},e))},data:l})}n(379);var f=n(378),b=n.n(f),y=n(370),h=n(374),E=o.a.Header;function v(e){var t=e.nav;return p.a.createElement(E,{className:"navigation-bar"},p.a.createElement(y.a,null),p.a.createElement(b.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:t.filter(function(e){return e.selected}).map(function(e){return e.text}),style:{lineHeight:"64px"}},t.map(function(e,t){var n=e.slug,r=e.text;return p.a.createElement(b.a.Item,{key:t},p.a.createElement(a.a,{to:n||"/"},r))})))}function x(e){return e.nav?p.a.createElement(v,e):p.a.createElement(u.b,{query:"1250442554",render:function(t){var n=t.config.nav;return p.a.createElement(v,Object.assign({nav:n},e))},data:h})}var q=n(369);n(316);n.d(t,"a",function(){return C});var A=o.a.Content,k=o.a.Sider;function w(e){var t=e.style,n=e.children;return p.a.createElement(A,{style:Object.assign({padding:"5px 24px"},t)},n)}function C(e){var t=e.children,n=e.title,a=e.description,r=e.keywords,i=e.style,s=e.layout,l=Object.assign({},N,s),c=l.footer,u=l.fullHeight,g=Object.assign({},u?{height:"100%"}:null,i);return p.a.createElement(o.a,{className:"main-page-layout",style:g},p.a.createElement(q.a,{title:n,keywords:r,description:a}),p.a.createElement(x,null),t,c?p.a.createElement(d,null):null)}var N={footer:!0};C.Panel=w,C.SideMenuPanel=function(e){var t=e.children,n=e.menu;return p.a.createElement(o.a,{style:{padding:"1em 0",background:"#fff",minHeight:1e3}},p.a.createElement(k,{width:200},n),p.a.createElement(w,null,t))}},377:function(e,t,n){"use strict";n(105);var a=n(364),r=(n(163),n(0)),i=n.n(r),s=n(562),o=n(387),l=n(388),c=n(389),p=n(390),u=n(391);s.a.registerLanguage("javascript",o.a),s.a.registerLanguage("sh",l.a),s.a.registerLanguage("markdown",c.a),s.a.registerLanguage("yaml",p.a);var g=n(1);n.d(t,"a",function(){return d});var m={components:{code:function(e){var t="bash";if(e.className){var n=e.className.split("-");n.length>1&&(t=n[1])}return i.a.createElement(s.a,{language:t,style:u.github},e.children)},a:a.a}};function d(e){var t=Object.assign({},m,e),n=t.components,a=t.children;return i.a.createElement(g.MDXProvider,{components:n},a)}},381:function(e){e.exports={menu:[{text:"mdx",icon:"file-text",order:0,submenu:[{slug:"/snippets/main/mdx-import/",parent:"mdx",title:"import",order:15},{slug:"/snippets/main/mdx-tabs/",parent:"mdx",title:"tabs",order:16},{slug:"/snippets/main/mdx-redefine/",parent:"mdx",title:"tags",order:17}]},{text:"gatsby",icon:"block",order:1,submenu:[{slug:"/snippets/main/gatsby-babel/",parent:"gatsby",title:".babelrc",order:7},{slug:"/snippets/main/gatsby-files-sourcing/",parent:"gatsby",title:"files sourcing",order:8},{slug:"/snippets/main/gatsby-usage/",parent:"gatsby",title:"usage",order:9},{slug:"/snippets/main/gatsby-webpack/",parent:"gatsby",title:"webpack",order:10}]},{text:"graphql",icon:"deployment-unit",order:2,submenu:[{slug:"/snippets/main/graphql-all-pages/",parent:"graphql",title:"all pages",order:11},{slug:"/snippets/main/graphql-mdx-posts/",parent:"graphql",title:"all posts",order:12},{slug:"/snippets/main/graphql-main-config/",parent:"graphql",title:"config",order:13},{slug:"/snippets/main/graphql-all-files/",parent:"graphql",title:"files",order:14}]},{text:"act blog",icon:"read",order:3,submenu:[{slug:"/snippets/main/act-github/",parent:"act blog",title:"deploy github",order:1},{slug:"/snippets/main/act-helper/",parent:"act blog",title:"helper",order:2},{slug:"/snippets/main/act-install/",parent:"act blog",title:"install",order:3},{slug:"/snippets/main/act-posts/",parent:"act blog",title:"posts",order:4},{slug:"/snippets/main/act-snippets/",parent:"act blog",title:"snippets",order:5},{slug:"/snippets/main/act-structure/",parent:"act blog",title:"structure",order:6}]}],items:[{slug:"/snippets/main/intro/",parent:"$",order:0},{slug:"/snippets/main/act-github/",parent:"act blog",title:"deploy github",order:1},{slug:"/snippets/main/act-helper/",parent:"act blog",title:"helper",order:2},{slug:"/snippets/main/act-install/",parent:"act blog",title:"install",order:3},{slug:"/snippets/main/act-posts/",parent:"act blog",title:"posts",order:4},{slug:"/snippets/main/act-snippets/",parent:"act blog",title:"snippets",order:5},{slug:"/snippets/main/act-structure/",parent:"act blog",title:"structure",order:6},{slug:"/snippets/main/gatsby-babel/",parent:"gatsby",title:".babelrc",order:7},{slug:"/snippets/main/gatsby-files-sourcing/",parent:"gatsby",title:"files sourcing",order:8},{slug:"/snippets/main/gatsby-usage/",parent:"gatsby",title:"usage",order:9},{slug:"/snippets/main/gatsby-webpack/",parent:"gatsby",title:"webpack",order:10},{slug:"/snippets/main/graphql-all-pages/",parent:"graphql",title:"all pages",order:11},{slug:"/snippets/main/graphql-mdx-posts/",parent:"graphql",title:"all posts",order:12},{slug:"/snippets/main/graphql-main-config/",parent:"graphql",title:"config",order:13},{slug:"/snippets/main/graphql-all-files/",parent:"graphql",title:"files",order:14},{slug:"/snippets/main/mdx-import/",parent:"mdx",title:"import",order:15},{slug:"/snippets/main/mdx-tabs/",parent:"mdx",title:"tabs",order:16},{slug:"/snippets/main/mdx-redefine/",parent:"mdx",title:"tags",order:17}]}},382:function(e,t,n){"use strict";var a=n(377),r=(n(380),n(71)),i=n.n(r),s=n(364),o=(n(379),n(378)),l=n.n(o),c=n(0),p=n.n(c),u=l.a.SubMenu;function g(e){var t=e.menu,n=e.items,a=e.location,r=a.pathname;n.forEach(function(e){e.current=e.slug===r});var o=Object(c.useState)(function(){return function(e){var t=e.menu,n=e.location,a=e.path;if(n.state&&n.state.openKeys){var r=t.filter(function(e){return e.submenu.some(function(e){return e.slug===a})}).map(function(e){return String(e.order)});return[].concat(n.state.openKeys,r.filter(function(e){return-1===n.state.openKeys.indexOf(e)}))}return t.map(function(e){return String(e.order)})}({menu:t,location:a,path:r})}),g=o[0],m=o[1];var d=n.filter(function(e){return e.current}).map(function(e){return String(e.order)});return p.a.createElement(l.a,{mode:"inline",defaultSelectedKeys:d,defaultOpenKeys:g,style:{height:"100%"},onOpenChange:function(e){m(e)}},t.map(function(e){return p.a.createElement(u,{key:e.order,title:p.a.createElement("span",null,p.a.createElement(i.a,{type:e.icon}),e.text)},e.submenu.map(function(e){return function(e){var t=e.item,n=t.title,a=t.order,r=e.items,i=e.openKeys,o=r[parseInt(a)].slug;return p.a.createElement(l.a.Item,{key:a},p.a.createElement(s.a,{to:o,state:{openKeys:i}},n))}({item:e,items:n,openKeys:g})}))}))}n(105);var m=n(375);n.d(t,"a",function(){return f});var d=m.a.SideMenuPanel;function f(e){var t=e.pageContext,n=e.children,r=e.location,i=Object.assign({frontmatter:{}},t),s=i.menu,o=i.items,l=Object.assign({},{layout:i.layout},i.frontmatter);return p.a.createElement(m.a,l,p.a.createElement(d,{menu:p.a.createElement(g,{menu:s,items:o,location:r})},p.a.createElement(a.a,null,n)))}}}]);
//# sourceMappingURL=component---src-generated-snippets-main-graphql-main-config-js-08e9a17fb81fa585ccdd.js.map