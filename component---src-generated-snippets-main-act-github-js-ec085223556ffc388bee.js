(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{323:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return o});a(105);var n=a(0),r=a.n(n),i=a(123),s=a(381),l=a(382);function o(e){var t=Object.assign({},e,{pageContext:Object.assign({},e.pageContext,s)});return r.a.createElement(l.a,t,r.a.createElement(i.a,t))}},363:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(2),s=a.n(i),l=a(70),o=a.n(l);a.d(t,"a",function(){return o.a});a(365);var c=r.a.createContext({}),u=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},364:function(e,t,a){"use strict";a(105);var n=a(4),r=a.n(n),i=a(0),s=a.n(i),l=a(363);t.a=function(e){var t=e.children,a=e.to,n=e.activeClassName,i=e.href,o=r()(e,["children","to","activeClassName","href"]);return i&&(a=i),/^\/(?!\/)/.test(a)?s.a.createElement(l.a,Object.assign({to:a,activeClassName:n},o),t):s.a.createElement("a",Object.assign({href:a},o),t)}},365:function(e,t,a){var n;e.exports=(n=a(368))&&n.default||n},368:function(e,t,a){"use strict";a.r(t);var n=a(24),r=a.n(n),i=a(0),s=a.n(i),l=a(2),o=a.n(l),c=a(106),u=a(7),p=function(e){var t=e.location,a=u.default.getResourcesForPathnameSync(t.pathname);return a?s.a.createElement(c.a,r()({location:t,pageResources:a},a.json)):null};p.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=p},369:function(e,t,a){"use strict";a(163);var n=a(372),r=a(0),i=a.n(r),s=a(2),l=a.n(s),o=a(386),c=a.n(o),u=a(363);function p(e){var t=e.description,a=e.lang,r=e.meta,s=e.keywords,l=e.title;return i.a.createElement(u.b,{query:g,render:function(e){return"string"==typeof s&&(s=s.split(",").map(function(e){return e.trim()})),t=t||e.site.siteMetadata.description,i.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+e.site.siteMetadata.project,meta:[{name:"description",content:t},{property:"og:title",content:l},{property:"og:description",content:t},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:t}].concat(s?{name:"keywords",content:s.join(", ")}:[]).concat(r)})},data:n})}p.defaultProps={lang:"en",meta:[],keywords:null},p.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.oneOfType([l.a.string,l.a.arrayOf(l.a.string)]),title:l.a.string.isRequired},t.a=p;var g="304502870"},370:function(e,t,a){"use strict";a.d(t,"a",function(){return c});a(384);var n=a(371),r=a(0),i=a.n(r),s=a(363),l=a(385),o=a.n(l);function c(){return i.a.createElement(s.b,{query:"2369744027",render:function(e){return i.a.createElement(o.a,{fixed:e.logo.childImageSharp.fixed,style:{float:"left"}})},data:n})}},371:function(e){e.exports={data:{logo:{childImageSharp:{fixed:{base64:"data:image/png;base64,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",width:50,height:60,src:"/static/24243787906a1f19048f79ada574a876/ae665/logo.png",srcSet:"/static/24243787906a1f19048f79ada574a876/ae665/logo.png 1x,\n/static/24243787906a1f19048f79ada574a876/0fd90/logo.png 1.5x,\n/static/24243787906a1f19048f79ada574a876/456a3/logo.png 2x,\n/static/24243787906a1f19048f79ada574a876/f920b/logo.png 3x"}}}}}},372:function(e){e.exports={data:{site:{siteMetadata:{project:"ACT blog",description:"React, Ant Design, Gatsby, GraphQl, and other web technologies",author:"Act Labs"}}}}},373:function(e){e.exports={data:{config:{copyright:"Copyright © Act Labs",social:[{icon:"facebook",link:"https://www.facebook.com/ACT7LAB"},{icon:"github",link:"https://github.com/act-labs/gatsby-starter-act-blog"}]}}}},374:function(e){e.exports={data:{config:{nav:[{text:"home",slug:null},{text:"posts",slug:"/posts/"},{text:"snippets",slug:"/snippets/main/intro/"}]}}}},375:function(e,t,a){"use strict";a(105);var n=a(364),r=(a(380),a(71)),i=a.n(r),s=(a(383),a(366),a(367)),l=a.n(s),o=a(373),c=a(0),u=a.n(c),p=a(363),g=l.a.Footer;function m(e){var t=e.social,a=e.copyright,r=t.map(function(e){var t=e.link,a=e.icon;return u.a.createElement(n.a,{key:a,to:t},u.a.createElement(i.a,{type:a,style:{fontSize:"24px",marginLeft:10,color:"rgba(0, 0, 0, 0.65)"}}))});return u.a.createElement(g,{style:{textAlign:"center"}},u.a.createElement("div",null,a,u.a.createElement("div",{style:{float:"right"}},r)))}function d(e){return e.social?u.a.createElement(m,e):u.a.createElement(p.b,{query:"2743462859",render:function(t){var a=t.config,n=a.social,r=a.copyright;return u.a.createElement(m,Object.assign({social:n,copyright:r},e))},data:o})}a(379);var f=a(378),b=a.n(f),y=a(370),h=a(374),E=l.a.Header;function v(e){var t=e.nav;return u.a.createElement(E,{className:"navigation-bar"},u.a.createElement(y.a,null),u.a.createElement(b.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:t.filter(function(e){return e.selected}).map(function(e){return e.text}),style:{lineHeight:"64px"}},t.map(function(e,t){var a=e.slug,r=e.text;return u.a.createElement(b.a.Item,{key:t},u.a.createElement(n.a,{to:a||"/"},r))})))}function x(e){return e.nav?u.a.createElement(v,e):u.a.createElement(p.b,{query:"1250442554",render:function(t){var a=t.config.nav;return u.a.createElement(v,Object.assign({nav:a},e))},data:h})}var q=a(369);a(316);a.d(t,"a",function(){return C});var k=l.a.Content,A=l.a.Sider;function w(e){var t=e.style,a=e.children;return u.a.createElement(k,{style:Object.assign({padding:"5px 24px"},t)},a)}function C(e){var t=e.children,a=e.title,n=e.description,r=e.keywords,i=e.style,s=e.layout,o=Object.assign({},S,s),c=o.footer,p=o.fullHeight,g=Object.assign({},p?{height:"100%"}:null,i);return u.a.createElement(l.a,{className:"main-page-layout",style:g},u.a.createElement(q.a,{title:a,keywords:r,description:n}),u.a.createElement(x,null),t,c?u.a.createElement(d,null):null)}var S={footer:!0};C.Panel=w,C.SideMenuPanel=function(e){var t=e.children,a=e.menu;return u.a.createElement(l.a,{style:{padding:"1em 0",background:"#fff",minHeight:1e3}},u.a.createElement(A,{width:200},a),u.a.createElement(w,null,t))}},377:function(e,t,a){"use strict";a(105);var n=a(364),r=(a(163),a(0)),i=a.n(r),s=a(562),l=a(387),o=a(388),c=a(389),u=a(390),p=a(391);s.a.registerLanguage("javascript",l.a),s.a.registerLanguage("sh",o.a),s.a.registerLanguage("markdown",c.a),s.a.registerLanguage("yaml",u.a);var g=a(1);a.d(t,"a",function(){return d});var m={components:{code:function(e){var t="bash";if(e.className){var a=e.className.split("-");a.length>1&&(t=a[1])}return i.a.createElement(s.a,{language:t,style:p.github},e.children)},a:n.a}};function d(e){var t=Object.assign({},m,e),a=t.components,n=t.children;return i.a.createElement(g.MDXProvider,{components:a},n)}},381:function(e){e.exports={menu:[{text:"mdx",icon:"file-text",order:0,submenu:[{slug:"/snippets/main/mdx-import/",parent:"mdx",title:"import",order:15},{slug:"/snippets/main/mdx-tabs/",parent:"mdx",title:"tabs",order:16},{slug:"/snippets/main/mdx-redefine/",parent:"mdx",title:"tags",order:17}]},{text:"gatsby",icon:"block",order:1,submenu:[{slug:"/snippets/main/gatsby-babel/",parent:"gatsby",title:".babelrc",order:7},{slug:"/snippets/main/gatsby-files-sourcing/",parent:"gatsby",title:"files sourcing",order:8},{slug:"/snippets/main/gatsby-usage/",parent:"gatsby",title:"usage",order:9},{slug:"/snippets/main/gatsby-webpack/",parent:"gatsby",title:"webpack",order:10}]},{text:"graphql",icon:"deployment-unit",order:2,submenu:[{slug:"/snippets/main/graphql-all-pages/",parent:"graphql",title:"all pages",order:11},{slug:"/snippets/main/graphql-mdx-posts/",parent:"graphql",title:"all posts",order:12},{slug:"/snippets/main/graphql-main-config/",parent:"graphql",title:"config",order:13},{slug:"/snippets/main/graphql-all-files/",parent:"graphql",title:"files",order:14}]},{text:"act blog",icon:"read",order:3,submenu:[{slug:"/snippets/main/act-github/",parent:"act blog",title:"deploy github",order:1},{slug:"/snippets/main/act-helper/",parent:"act blog",title:"helper",order:2},{slug:"/snippets/main/act-install/",parent:"act blog",title:"install",order:3},{slug:"/snippets/main/act-posts/",parent:"act blog",title:"posts",order:4},{slug:"/snippets/main/act-snippets/",parent:"act blog",title:"snippets",order:5},{slug:"/snippets/main/act-structure/",parent:"act blog",title:"structure",order:6}]}],items:[{slug:"/snippets/main/intro/",parent:"$",order:0},{slug:"/snippets/main/act-github/",parent:"act blog",title:"deploy github",order:1},{slug:"/snippets/main/act-helper/",parent:"act blog",title:"helper",order:2},{slug:"/snippets/main/act-install/",parent:"act blog",title:"install",order:3},{slug:"/snippets/main/act-posts/",parent:"act blog",title:"posts",order:4},{slug:"/snippets/main/act-snippets/",parent:"act blog",title:"snippets",order:5},{slug:"/snippets/main/act-structure/",parent:"act blog",title:"structure",order:6},{slug:"/snippets/main/gatsby-babel/",parent:"gatsby",title:".babelrc",order:7},{slug:"/snippets/main/gatsby-files-sourcing/",parent:"gatsby",title:"files sourcing",order:8},{slug:"/snippets/main/gatsby-usage/",parent:"gatsby",title:"usage",order:9},{slug:"/snippets/main/gatsby-webpack/",parent:"gatsby",title:"webpack",order:10},{slug:"/snippets/main/graphql-all-pages/",parent:"graphql",title:"all pages",order:11},{slug:"/snippets/main/graphql-mdx-posts/",parent:"graphql",title:"all posts",order:12},{slug:"/snippets/main/graphql-main-config/",parent:"graphql",title:"config",order:13},{slug:"/snippets/main/graphql-all-files/",parent:"graphql",title:"files",order:14},{slug:"/snippets/main/mdx-import/",parent:"mdx",title:"import",order:15},{slug:"/snippets/main/mdx-tabs/",parent:"mdx",title:"tabs",order:16},{slug:"/snippets/main/mdx-redefine/",parent:"mdx",title:"tags",order:17}]}},382:function(e,t,a){"use strict";var n=a(377),r=(a(380),a(71)),i=a.n(r),s=a(364),l=(a(379),a(378)),o=a.n(l),c=a(0),u=a.n(c),p=o.a.SubMenu;function g(e){var t=e.menu,a=e.items,n=e.location,r=n.pathname;a.forEach(function(e){e.current=e.slug===r});var l=Object(c.useState)(function(){return function(e){var t=e.menu,a=e.location,n=e.path;if(a.state&&a.state.openKeys){var r=t.filter(function(e){return e.submenu.some(function(e){return e.slug===n})}).map(function(e){return String(e.order)});return[].concat(a.state.openKeys,r.filter(function(e){return-1===a.state.openKeys.indexOf(e)}))}return t.map(function(e){return String(e.order)})}({menu:t,location:n,path:r})}),g=l[0],m=l[1];var d=a.filter(function(e){return e.current}).map(function(e){return String(e.order)});return u.a.createElement(o.a,{mode:"inline",defaultSelectedKeys:d,defaultOpenKeys:g,style:{height:"100%"},onOpenChange:function(e){m(e)}},t.map(function(e){return u.a.createElement(p,{key:e.order,title:u.a.createElement("span",null,u.a.createElement(i.a,{type:e.icon}),e.text)},e.submenu.map(function(e){return function(e){var t=e.item,a=t.title,n=t.order,r=e.items,i=e.openKeys,l=r[parseInt(n)].slug;return u.a.createElement(o.a.Item,{key:n},u.a.createElement(s.a,{to:l,state:{openKeys:i}},a))}({item:e,items:a,openKeys:g})}))}))}a(105);var m=a(375);a.d(t,"a",function(){return f});var d=m.a.SideMenuPanel;function f(e){var t=e.pageContext,a=e.children,r=e.location,i=Object.assign({frontmatter:{}},t),s=i.menu,l=i.items,o=Object.assign({},{layout:i.layout},i.frontmatter);return u.a.createElement(m.a,o,u.a.createElement(d,{menu:u.a.createElement(g,{menu:s,items:l,location:r})},u.a.createElement(n.a,null,a)))}}}]);
//# sourceMappingURL=component---src-generated-snippets-main-act-github-js-ec085223556ffc388bee.js.map