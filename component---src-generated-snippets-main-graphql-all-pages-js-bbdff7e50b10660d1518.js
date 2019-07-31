(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{458:function(e,t,n){"use strict";n.r(t);n(8);var a=n(0),r=n.n(a),i=n(7),s=n.n(i),l=n(4),o=n.n(l),p=n(1),c=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=null,n}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.components;s()(e,["components"]);return r.a.createElement(p.MDXTag,{name:"wrapper",components:t},r.a.createElement(p.MDXTag,{name:"p",components:t},r.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/snippets/main/graphql-all-pages/",title:"GraphQL, all site pages"}},"A snippet")," with GraphQL to show all site pages (the path and some fields of the page context)."),r.a.createElement(p.MDXTag,{name:"pre",components:t},r.a.createElement(p.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-javascript"}},"query AllSitePages {\n    allSitePage{\n        edges {\n            node {\n                path\n                context {\n                    posts {\n                        slug\n                    }\n                    frontmatter {\n                        title\n                    }\n                }\n            }\n        }\n    }\n}\n")))},t}(r.a.Component),u=n(485),g=n(484);function m(e){var t=Object.assign({},e,{pageContext:Object.assign({},e.pageContext,u)});return r.a.createElement(g.a,t,r.a.createElement(c,t))}n.d(t,"default",function(){return m})},473:function(e,t,n){"use strict";n(57);var a=n(474),r=n(0),i=n.n(r),s=n(2),l=n.n(s),o=n(486),p=n.n(o),c=n(34);function u(e){var t=e.description,n=e.lang,r=e.meta,s=e.keywords,l=e.title;return i.a.createElement(c.b,{query:g,render:function(e){return"string"==typeof s&&(s=s.split(",").map(function(e){return e.trim()})),t=t||e.site.siteMetadata.description,i.a.createElement(p.a,{htmlAttributes:{lang:n},title:l,titleTemplate:"%s | "+e.site.siteMetadata.project,meta:[{name:"description",content:t},{property:"og:title",content:l},{property:"og:description",content:t},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:t}].concat(s?{name:"keywords",content:s.join(", ")}:[]).concat(r)})},data:a})}u.defaultProps={lang:"en",meta:[],keywords:null},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.oneOfType([l.a.string,l.a.arrayOf(l.a.string)]),title:l.a.string.isRequired},t.a=u;var g="304502870"},474:function(e){e.exports={data:{site:{siteMetadata:{project:"ACT blog",description:"React, Ant Design, Gatsby, GraphQl, and other web technologies",author:"Act Labs"}}}}},475:function(e,t,n){"use strict";n.d(t,"a",function(){return p});n(252);var a=n(476),r=n(0),i=n.n(r),s=n(34),l=n(158),o=n.n(l);function p(){return i.a.createElement(s.b,{query:"2369744027",render:function(e){return i.a.createElement(o.a,{fixed:e.logo.childImageSharp.fixed,style:{float:"left"}})},data:a})}},476:function(e){e.exports={data:{logo:{childImageSharp:{fixed:{base64:"data:image/png;base64,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",width:50,height:60,src:"/static/a64620346ac3ce8d4580a3f07039fa3c/8469d/logo.png",srcSet:"/static/a64620346ac3ce8d4580a3f07039fa3c/8469d/logo.png 1x"}}}}}},477:function(e){e.exports={data:{config:{copyright:"Copyright © Act Labs",social:[{icon:"facebook",link:"https://www.facebook.com/ACT7LAB"},{icon:"github",link:"https://github.com/act-labs/gatsby-starter-act-blog"}]}}}},478:function(e){e.exports={data:{config:{nav:[{text:"home",slug:null},{text:"posts",slug:"/posts/"},{text:"snippets",slug:"/snippets/"}]}}}},479:function(e,t,n){"use strict";n(8);var a=n(93),r=(n(157),n(43)),i=n.n(r),s=(n(487),n(471),n(472)),l=n.n(s),o=n(477),p=n(0),c=n.n(p),u=n(34),g=l.a.Footer;function m(e){var t=e.social,n=e.copyright,r=t.map(function(e){var t=e.link,n=e.icon;return c.a.createElement(a.a,{key:n,to:t},c.a.createElement(i.a,{type:n,style:{fontSize:"24px",marginLeft:10,color:"rgba(0, 0, 0, 0.65)"}}))});return c.a.createElement(g,{style:{textAlign:"center"}},c.a.createElement("div",null,n,c.a.createElement("div",{style:{float:"right"}},r)))}function d(e){return e.social?c.a.createElement(m,e):c.a.createElement(u.b,{query:"2743462859",render:function(t){var n=t.config,a=n.social,r=n.copyright;return c.a.createElement(m,Object.assign({social:a,copyright:r},e))},data:o})}n(483);var f=n(480),b=n.n(f),y=n(475),h=n(478),v=l.a.Header;function E(e){var t=e.nav;return c.a.createElement(v,{className:"navigation-bar"},c.a.createElement(a.a,{to:"/"},c.a.createElement(y.a,null)),c.a.createElement(b.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:t.filter(function(e){return e.selected}).map(function(e){return e.text}),style:{lineHeight:"64px"}},t.map(function(e,t){var n=e.slug,r=e.text;return c.a.createElement(b.a.Item,{key:t},c.a.createElement(a.a,{to:n||"/"},r))})))}function x(e){return e.nav?c.a.createElement(E,e):c.a.createElement(u.b,{query:"1250442554",render:function(t){var n=t.config.nav;return c.a.createElement(E,Object.assign({nav:n},e))},data:h})}var A=n(473),w=n(7),q=n.n(w);n(420);n.d(t,"a",function(){return Q});var k=l.a.Content,O=l.a.Sider;function M(e){var t=e.style,n=e.children,a=q()(e,["style","children"]);return c.a.createElement(k,Object.assign({style:Object.assign({padding:"5px 24px"},t)},a),n)}function Q(e){var t=e.children,n=e.className,a=e.title,r=e.description,i=e.keywords,s=e.style,o=e.layout,p=Object.assign({},K,o),u=p.footer,g=p.fullHeight,m=Object.assign({},g?{height:"100%"}:null,s),f=(n?n+" ":"")+"page-layout";return c.a.createElement(l.a,{className:f,style:m},c.a.createElement(A.a,{title:a,keywords:i,description:r}),c.a.createElement(x,null),t,u?c.a.createElement(d,null):null)}var K={footer:!0};Q.Panel=M,Q.SideMenuPanel=function(e){var t=e.children,n=e.menu;return c.a.createElement(l.a,{style:{padding:"1em 0",background:"#fff",minHeight:1e3}},c.a.createElement(O,{width:200},n),c.a.createElement(M,null,t))}},482:function(e,t,n){"use strict";n(8);var a=n(93),r=(n(57),n(0)),i=n.n(r),s=n(660),l=n(488),o=n(489),p=n(490),c=n(491),u=n(492);s.a.registerLanguage("javascript",l.a),s.a.registerLanguage("sh",o.a),s.a.registerLanguage("markdown",p.a),s.a.registerLanguage("yaml",c.a);var g=n(1);n.d(t,"a",function(){return d});var m={components:{code:function(e){var t="bash";if(e.className){var n=e.className.split("-");n.length>1&&(t=n[1])}return i.a.createElement(s.a,{language:t,style:u.github},e.children)},a:a.a}};function d(e){var t=Object.assign({},m,e),n=t.components,a=t.children;return i.a.createElement(g.MDXProvider,{components:n},a)}},484:function(e,t,n){"use strict";var a=n(482),r=(n(157),n(43)),i=n.n(r),s=n(93),l=(n(483),n(480)),o=n.n(l),p=n(0),c=n.n(p),u=o.a.SubMenu;function g(e){var t=e.menu,n=e.items,a=e.location,r=a.pathname;n.forEach(function(e){e.current=e.slug===r});var l=Object(p.useState)(function(){return function(e){var t=e.menu,n=e.location,a=e.path;if(n.state&&n.state.openKeys){var r=t.filter(function(e){return e.submenu.some(function(e){return e.slug===a})}).map(function(e){return String(e.order)});return[].concat(n.state.openKeys,r.filter(function(e){return-1===n.state.openKeys.indexOf(e)}))}return t.map(function(e){return String(e.order)})}({menu:t,location:a,path:r})}),g=l[0],m=l[1];var d=n.filter(function(e){return e.current}).map(function(e){return String(e.order)});return c.a.createElement(o.a,{mode:"inline",defaultSelectedKeys:d,defaultOpenKeys:g,style:{height:"100%"},onOpenChange:function(e){m(e)}},t.map(function(e){return c.a.createElement(u,{key:e.order,title:c.a.createElement("span",null,c.a.createElement(i.a,{type:e.icon}),e.text)},e.submenu.map(function(e){return function(e){var t=e.item,n=t.title,a=t.order,r=e.items,i=e.openKeys,l=r[parseInt(a)].slug;return c.a.createElement(o.a.Item,{key:a},c.a.createElement(s.a,{to:l,state:{openKeys:i}},n))}({item:e,items:n,openKeys:g})}))}))}n(8);var m=n(479);n.d(t,"a",function(){return f});var d=m.a.SideMenuPanel;function f(e){var t=e.pageContext,n=e.children,r=e.location,i=Object.assign({frontmatter:{}},t),s=i.menu,l=i.items,o=Object.assign({},{layout:i.layout},i.frontmatter);return c.a.createElement(m.a,o,c.a.createElement(d,{menu:c.a.createElement(g,{menu:s,items:l,location:r})},c.a.createElement(a.a,null,n)))}},485:function(e){e.exports={menu:[{text:"mdx",icon:"file-text",order:0,submenu:[{slug:"/snippets/main/mdx-import/",parent:"mdx",title:"import",order:16},{slug:"/snippets/main/mdx-tabs/",parent:"mdx",title:"tabs",order:17},{slug:"/snippets/main/mdx-redefine/",parent:"mdx",title:"tags",order:18}]},{text:"gatsby",icon:"block",order:1,submenu:[{slug:"/snippets/main/gatsby-babel/",parent:"gatsby",title:".babelrc",order:8},{slug:"/snippets/main/gatsby-files-sourcing/",parent:"gatsby",title:"files sourcing",order:9},{slug:"/snippets/main/gatsby-usage/",parent:"gatsby",title:"usage",order:10},{slug:"/snippets/main/gatsby-webpack/",parent:"gatsby",title:"webpack",order:11}]},{text:"graphql",icon:"deployment-unit",order:2,submenu:[{slug:"/snippets/main/graphql-all-pages/",parent:"graphql",title:"all pages",order:12},{slug:"/snippets/main/graphql-mdx-posts/",parent:"graphql",title:"all posts",order:13},{slug:"/snippets/main/graphql-main-config/",parent:"graphql",title:"config",order:14},{slug:"/snippets/main/graphql-all-files/",parent:"graphql",title:"files",order:15}]},{text:"act blog",icon:"read",order:3,submenu:[{slug:"/snippets/main/act-github/",parent:"act blog",title:"deploy github",order:2},{slug:"/snippets/main/act-helper/",parent:"act blog",title:"helper",order:3},{slug:"/snippets/main/act-install/",parent:"act blog",title:"install",order:4},{slug:"/snippets/main/act-posts/",parent:"act blog",title:"posts",order:5},{slug:"/snippets/main/act-snippets/",parent:"act blog",title:"snippets",order:6},{slug:"/snippets/main/act-structure/",parent:"act blog",title:"structure",order:7}]}],items:[{slug:"/snippets/main/intro/",parent:"$",order:0},{slug:"/snippets/main/static-intro/",parent:"$",order:1},{slug:"/snippets/main/act-github/",parent:"act blog",title:"deploy github",order:2},{slug:"/snippets/main/act-helper/",parent:"act blog",title:"helper",order:3},{slug:"/snippets/main/act-install/",parent:"act blog",title:"install",order:4},{slug:"/snippets/main/act-posts/",parent:"act blog",title:"posts",order:5},{slug:"/snippets/main/act-snippets/",parent:"act blog",title:"snippets",order:6},{slug:"/snippets/main/act-structure/",parent:"act blog",title:"structure",order:7},{slug:"/snippets/main/gatsby-babel/",parent:"gatsby",title:".babelrc",order:8},{slug:"/snippets/main/gatsby-files-sourcing/",parent:"gatsby",title:"files sourcing",order:9},{slug:"/snippets/main/gatsby-usage/",parent:"gatsby",title:"usage",order:10},{slug:"/snippets/main/gatsby-webpack/",parent:"gatsby",title:"webpack",order:11},{slug:"/snippets/main/graphql-all-pages/",parent:"graphql",title:"all pages",order:12},{slug:"/snippets/main/graphql-mdx-posts/",parent:"graphql",title:"all posts",order:13},{slug:"/snippets/main/graphql-main-config/",parent:"graphql",title:"config",order:14},{slug:"/snippets/main/graphql-all-files/",parent:"graphql",title:"files",order:15},{slug:"/snippets/main/mdx-import/",parent:"mdx",title:"import",order:16},{slug:"/snippets/main/mdx-tabs/",parent:"mdx",title:"tabs",order:17},{slug:"/snippets/main/mdx-redefine/",parent:"mdx",title:"tags",order:18}]}}}]);
//# sourceMappingURL=component---src-generated-snippets-main-graphql-all-pages-js-bbdff7e50b10660d1518.js.map