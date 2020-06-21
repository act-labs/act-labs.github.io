(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{707:function(e,t,n){"use strict";n.r(t);n(6);var a=n(0),r=n.n(a),i=n(14),s=n.n(i),o=n(15),l=n.n(o),c=n(1),p=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=null,n}return l()(t,e),t.prototype.render=function(){var e=this.props,t=e.components;s()(e,["components"]);return r.a.createElement(c.MDXTag,{name:"wrapper",components:t},r.a.createElement(c.MDXTag,{name:"p",components:t},r.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/snippets/main/graphql-main-config/",title:"GraphQL, main configuration"}},"A snippet")," with GraphQL to request the main configuration file (",r.a.createElement(c.MDXTag,{name:"em",components:t,parentName:"p"},"src/content/config/main.yaml"),")."),r.a.createElement(c.MDXTag,{name:"pre",components:t},r.a.createElement(c.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-javascript"}},'query MainConfiguration {\n    allConfigYaml (\n        filter:{\n            fields:{slug: {eq:"/config/main/"}}\n        }\n    )\n    {\n        edges {\n            node {\n                fields{\n                    slug\n                }\n\n                nav{\n                    text\n                    slug\n                }\n            }\n        }\n    }\n}\n')))},t}(r.a.Component),u=n(752),g=n(743);function m(e){var t=Object.assign({},e,{pageContext:Object.assign({},e.pageContext,u)});return r.a.createElement(g.a,t,r.a.createElement(p,t))}n.d(t,"default",function(){return m})},732:function(e,t,n){"use strict";n(46);var a=n(733),r=n(0),i=n.n(r),s=n(2),o=n.n(s),l=n(744),c=n.n(l),p=n(34);function u(e){var t=e.description,n=e.lang,r=e.meta,s=e.keywords,o=e.title;return i.a.createElement(p.b,{query:g,render:function(e){return"string"==typeof s&&(s=s.split(",").map(function(e){return e.trim()})),t=t||e.site.siteMetadata.description,i.a.createElement(c.a,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s | "+e.site.siteMetadata.project,meta:[{name:"description",content:t},{property:"og:title",content:o},{property:"og:description",content:t},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:t}].concat(s?{name:"keywords",content:s.join(", ")}:[]).concat(r)})},data:a})}u.defaultProps={lang:"en",meta:[],keywords:null},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.oneOfType([o.a.string,o.a.arrayOf(o.a.string)]),title:o.a.string.isRequired},t.a=u;var g="304502870"},733:function(e){e.exports={data:{site:{siteMetadata:{project:"ACT blog",description:"React, Ant Design, Gatsby, GraphQl, and other web technologies",author:"Act Labs"}}}}},734:function(e,t,n){"use strict";n.d(t,"a",function(){return c});n(352);var a=n(735),r=n(0),i=n.n(r),s=n(34),o=n(231),l=n.n(o);function c(){return i.a.createElement(s.b,{query:"2369744027",render:function(e){return i.a.createElement(l.a,{fixed:e.logo.childImageSharp.fixed,style:{float:"left"}})},data:a})}},735:function(e){e.exports={data:{logo:{childImageSharp:{fixed:{base64:"data:image/png;base64,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",width:50,height:60,src:"/static/a64620346ac3ce8d4580a3f07039fa3c/8469d/logo.png",srcSet:"/static/a64620346ac3ce8d4580a3f07039fa3c/8469d/logo.png 1x"}}}}}},736:function(e){e.exports={data:{config:{copyright:"Copyright © Act Labs",social:[{icon:"facebook",link:"https://www.facebook.com/ACT7LAB"},{icon:"github",link:"https://github.com/act-labs/gatsby-starter-act-blog"}]}}}},737:function(e){e.exports={data:{config:{nav:[{text:"home",slug:null},{text:"posts",slug:"/posts/"},{text:"snippets",slug:"/snippets/"}]}}}},738:function(e,t,n){"use strict";n(6);var a=n(138),r=(n(178),n(31)),i=n.n(r),s=(n(745),n(730),n(731)),o=n.n(s),l=n(736),c=n(0),p=n.n(c),u=n(34),g=o.a.Footer;function m(e){var t=e.social,n=e.copyright,r=t.map(function(e){var t=e.link,n=e.icon;return p.a.createElement(a.a,{key:n,to:t},p.a.createElement(i.a,{type:n,style:{fontSize:"24px",marginLeft:10,color:"rgba(0, 0, 0, 0.65)"}}))});return p.a.createElement(g,{style:{textAlign:"center"}},p.a.createElement("div",null,n,p.a.createElement("div",{style:{float:"right"}},r)))}function d(e){return e.social?p.a.createElement(m,e):p.a.createElement(u.b,{query:"2743462859",render:function(t){var n=t.config,a=n.social,r=n.copyright;return p.a.createElement(m,Object.assign({social:a,copyright:r},e))},data:l})}n(742);var f=n(741),b=n.n(f),y=n(734),h=n(737),v=o.a.Header;function E(e){var t=e.nav;return p.a.createElement(v,{className:"navigation-bar"},p.a.createElement(a.a,{to:"/"},p.a.createElement(y.a,null)),p.a.createElement(b.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:t.filter(function(e){return e.selected}).map(function(e){return e.text}),style:{lineHeight:"64px"}},t.map(function(e,t){var n=e.slug,r=e.text;return p.a.createElement(b.a.Item,{key:t},p.a.createElement(a.a,{to:n||"/"},r))})))}function x(e){return e.nav?p.a.createElement(E,e):p.a.createElement(u.b,{query:"1250442554",render:function(t){var n=t.config.nav;return p.a.createElement(E,Object.assign({nav:n},e))},data:h})}var A=n(732),w=n(14),q=n.n(w);n(671);n.d(t,"a",function(){return Q});var k=o.a.Content,M=o.a.Sider;function O(e){var t=e.style,n=e.children,a=q()(e,["style","children"]);return p.a.createElement(k,Object.assign({style:Object.assign({padding:"5px 24px"},t)},a),n)}function Q(e){var t=e.children,n=e.className,a=e.title,r=e.description,i=e.keywords,s=e.style,l=e.layout,c=Object.assign({},K,l),u=c.footer,g=c.fullHeight,m=Object.assign({},g?{height:"100%"}:null,s),f=(n?n+" ":"")+"page-layout";return p.a.createElement(o.a,{className:f,style:m},p.a.createElement(A.a,{title:a,keywords:i,description:r}),p.a.createElement(x,null),t,u?p.a.createElement(d,null):null)}var K={footer:!0};Q.Panel=O,Q.SideMenuPanel=function(e){var t=e.children,n=e.menu;return p.a.createElement(o.a,{style:{padding:"1em 0",background:"#fff",minHeight:1e3}},p.a.createElement(M,{width:200},n),p.a.createElement(O,null,t))}},740:function(e,t,n){"use strict";n(6);var a=n(138),r=(n(46),n(0)),i=n.n(r),s=n(884),o=n(746),l=n(747),c=n(748),p=n(749),u=n(750),g=n(751);s.a.registerLanguage("javascript",o.a),s.a.registerLanguage("sh",l.a),s.a.registerLanguage("markdown",c.a),s.a.registerLanguage("yaml",p.a),s.a.registerLanguage("dockerfile",u.a);var m=n(1);n.d(t,"a",function(){return f});var d={components:{code:function(e){var t="bash";if(e.className){var n=e.className.split("-");n.length>1&&(t=n[1])}return i.a.createElement(s.a,{language:t,style:g.github},e.children)},a:a.a}};function f(e){var t=Object.assign({},d,e),n=t.components,a=t.children;return i.a.createElement(m.MDXProvider,{components:n},a)}},743:function(e,t,n){"use strict";var a=n(740),r=(n(178),n(31)),i=n.n(r),s=n(138),o=(n(742),n(741)),l=n.n(o),c=n(0),p=n.n(c),u=l.a.SubMenu;function g(e){var t=e.menu,n=e.items,a=e.location,r=a.pathname;n.forEach(function(e){e.current=e.slug===r});var o=Object(c.useState)(function(){return function(e){var t=e.menu,n=e.location,a=e.path;if(n.state&&n.state.openKeys){var r=t.filter(function(e){return e.submenu.some(function(e){return e.slug===a})}).map(function(e){return String(e.order)});return[].concat(n.state.openKeys,r.filter(function(e){return-1===n.state.openKeys.indexOf(e)}))}return t.map(function(e){return String(e.order)})}({menu:t,location:a,path:r})}),g=o[0],m=o[1];var d=n.filter(function(e){return e.current}).map(function(e){return String(e.order)});return p.a.createElement(l.a,{mode:"inline",defaultSelectedKeys:d,defaultOpenKeys:g,style:{height:"100%"},onOpenChange:function(e){m(e)}},t.map(function(e){return p.a.createElement(u,{key:e.order,title:p.a.createElement("span",null,p.a.createElement(i.a,{type:e.icon}),e.text)},e.submenu.map(function(e){return function(e){var t=e.item,n=t.title,a=t.order,r=e.items,i=e.openKeys,o=r[parseInt(a)].slug;return p.a.createElement(l.a.Item,{key:a},p.a.createElement(s.a,{to:o,state:{openKeys:i}},n))}({item:e,items:n,openKeys:g})}))}))}n(6);var m=n(738);n.d(t,"a",function(){return f});var d=m.a.SideMenuPanel;function f(e){var t=e.pageContext,n=e.children,r=e.location,i=Object.assign({frontmatter:{}},t),s=i.menu,o=i.items,l=Object.assign({},{layout:i.layout},i.frontmatter);return p.a.createElement(m.a,l,p.a.createElement(d,{menu:p.a.createElement(g,{menu:s,items:o,location:r})},p.a.createElement(a.a,null,n)))}},752:function(e){e.exports={menu:[{text:"mdx",icon:"file-text",order:0,submenu:[{slug:"/snippets/main/mdx-import/",parent:"mdx",title:"import",order:16},{slug:"/snippets/main/mdx-tabs/",parent:"mdx",title:"tabs",order:17},{slug:"/snippets/main/mdx-redefine/",parent:"mdx",title:"tags",order:18}]},{text:"gatsby",icon:"block",order:1,submenu:[{slug:"/snippets/main/gatsby-babel/",parent:"gatsby",title:".babelrc",order:8},{slug:"/snippets/main/gatsby-files-sourcing/",parent:"gatsby",title:"files sourcing",order:9},{slug:"/snippets/main/gatsby-usage/",parent:"gatsby",title:"usage",order:10},{slug:"/snippets/main/gatsby-webpack/",parent:"gatsby",title:"webpack",order:11}]},{text:"graphql",icon:"deployment-unit",order:2,submenu:[{slug:"/snippets/main/graphql-all-pages/",parent:"graphql",title:"all pages",order:12},{slug:"/snippets/main/graphql-mdx-posts/",parent:"graphql",title:"all posts",order:13},{slug:"/snippets/main/graphql-main-config/",parent:"graphql",title:"config",order:14},{slug:"/snippets/main/graphql-all-files/",parent:"graphql",title:"files",order:15}]},{text:"act blog",icon:"read",order:3,submenu:[{slug:"/snippets/main/act-github/",parent:"act blog",title:"deploy github",order:2},{slug:"/snippets/main/act-helper/",parent:"act blog",title:"helper",order:3},{slug:"/snippets/main/act-install/",parent:"act blog",title:"install",order:4},{slug:"/snippets/main/act-posts/",parent:"act blog",title:"posts",order:5},{slug:"/snippets/main/act-snippets/",parent:"act blog",title:"snippets",order:6},{slug:"/snippets/main/act-structure/",parent:"act blog",title:"structure",order:7}]}],items:[{slug:"/snippets/main/intro/",parent:"$",order:0},{slug:"/snippets/main/static-intro/",parent:"$",order:1},{slug:"/snippets/main/act-github/",parent:"act blog",title:"deploy github",order:2},{slug:"/snippets/main/act-helper/",parent:"act blog",title:"helper",order:3},{slug:"/snippets/main/act-install/",parent:"act blog",title:"install",order:4},{slug:"/snippets/main/act-posts/",parent:"act blog",title:"posts",order:5},{slug:"/snippets/main/act-snippets/",parent:"act blog",title:"snippets",order:6},{slug:"/snippets/main/act-structure/",parent:"act blog",title:"structure",order:7},{slug:"/snippets/main/gatsby-babel/",parent:"gatsby",title:".babelrc",order:8},{slug:"/snippets/main/gatsby-files-sourcing/",parent:"gatsby",title:"files sourcing",order:9},{slug:"/snippets/main/gatsby-usage/",parent:"gatsby",title:"usage",order:10},{slug:"/snippets/main/gatsby-webpack/",parent:"gatsby",title:"webpack",order:11},{slug:"/snippets/main/graphql-all-pages/",parent:"graphql",title:"all pages",order:12},{slug:"/snippets/main/graphql-mdx-posts/",parent:"graphql",title:"all posts",order:13},{slug:"/snippets/main/graphql-main-config/",parent:"graphql",title:"config",order:14},{slug:"/snippets/main/graphql-all-files/",parent:"graphql",title:"files",order:15},{slug:"/snippets/main/mdx-import/",parent:"mdx",title:"import",order:16},{slug:"/snippets/main/mdx-tabs/",parent:"mdx",title:"tabs",order:17},{slug:"/snippets/main/mdx-redefine/",parent:"mdx",title:"tags",order:18}]}}}]);
//# sourceMappingURL=component---src-generated-snippets-main-graphql-main-config-js-d9248964bc1072d65be3.js.map