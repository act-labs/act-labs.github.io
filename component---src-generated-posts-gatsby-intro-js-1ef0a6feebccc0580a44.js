(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{355:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(4),s=a.n(o),i=a(3),c=a.n(i),l=a(1),p=a(117),m=a(118),u=function(e){function t(t){var a;return(a=e.call(this,t)||this).layout=null,a}return c()(t,e),t.prototype.render=function(){var e=this.props,t=e.components;s()(e,["components"]);return r.a.createElement(l.MDXTag,{name:"wrapper",components:t},r.a.createElement(l.MDXTag,{name:"p",components:t},"Gatsby comes with detailed ",r.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://www.gatsbyjs.org/docs/",title:"Gatsby, extensive online documentation"}},"documentation")," and large and constantly growing plugin system. For new users, the amount of information could be overwhelming. In order to help to navigate through large Gatsby ecosystem, this post gives very high level overview of main Gatsby concepts and ideas. "),r.a.createElement(l.MDXTag,{name:"h2",components:t},"Core: GraphQL, Webpack, and programmatic page generation."),r.a.createElement(l.MDXTag,{name:"p",components:t},"Growing in popularity, static site generators produce highly optimized content with small response time and better perceived performance. One of the most popular static site generators, Gatsby is implemented on top of node.js and React, which helps it to tap directly into modern web development stack and makes it attractive for React developers. The page generation process in Gatsby mainly revolves around in-memory nodes, representing resources necessary for page construction. In Gatsby, this graph (often referred as ",r.a.createElement(l.MDXTag,{name:"em",components:t,parentName:"p"},"GraphQL"),") serves as a convenient integration layer, allowing declarative access to various resources. In other words, essentially, Gatsby provides in-memory database layer, backed by GraphQL declarative query syntax."),r.a.createElement(m.a,null),r.a.createElement(l.MDXTag,{name:"p",components:t},"Thanks to GraphQL expressive power, very complex websites could be created literally without any programming. Nonetheless, Gatsby is actually a comprehensive API: developers may hook into the build process and easily extend the system importing (",r.a.createElement(l.MDXTag,{name:"em",components:t,parentName:"p"},"sourcing")," in the Gatsby lingo) and transforming various resources. Unlike many popular website builders, Gatsby doesn't provide any proprietary content management tools, instead it concentrates on tools to build powerful integration/processing pipelines. Owing to plugins, Gatsby is able to source all common file types, information from popular databases, and even content from other CMS systems."),r.a.createElement(l.MDXTag,{name:"p",components:t},"Typically, HTML pages are constructed from various files: CSS, Javascript/Typescript/React, HTML, JSON, markdown etc. To process files of various types, Gatsby relies on standard, production ready tools: Babel and Webpack. Babel comes with a comprehensive API and a set of plugins to transform various files to standard cross-browser Javascript. Webpack splits multiple Javascript files into optimal chunks to optimize the load time of successive page requests. React server side rendering is used to generate HTML, but original Javascript is served to clients as well and is bound (hydrated) to HTML in a browser, helping to provide a rich interactive user experience."),r.a.createElement(l.MDXTag,{name:"p",components:t},"To create a page programmatically, the ",r.a.createElement(l.MDXTag,{name:"em",components:t,parentName:"p"},"createPage")," action can be invoked inside a ",r.a.createElement(l.MDXTag,{name:"em",components:t,parentName:"p"},"createPages")," callback defined in gatsby-node.js. When creating pages, a React component are provided, as well as a page context - a JSON object used directly or as a parameter for page GraphQL query. Generated JS files and page data are saved in the topmost ",r.a.createElement(l.MDXTag,{name:"em",components:t,parentName:"p"},"public")," project directory. All the required data and javascript chunks (created by webpack) are listed in a data.json file, used in a browser to intelligently load pages. For example, if pages have the same component but different page data, only the absent data is requested for the second and later page requests. In Gatsby v2 there is no concept of the shared layout, but shared layouts could be trivially implemented using the Gatsby browser API (could be useful for complex page transition effects). The same applies to other shared code (context providers, a redux store, APIs, etc)."),r.a.createElement(l.MDXTag,{name:"h2",components:t},"Gatsby plugins."),r.a.createElement(l.MDXTag,{name:"p",components:t},"Thanks to an open architecture, a lot of Gatsby functionality comes in the form of plugins. Plugins are invoked in ",r.a.createElement(l.MDXTag,{name:"em",components:t,parentName:"p"},"gatsby-config.js")," and thus configure/build a website pipeline. Many of them are casually borrowed from one project to another, and could be seen practically in all Gatsby starters (projects, helping to jump start Gatsby development). For example, consider plugins listed in ",r.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/act-labs/gatsby-starter-act-blog"}},"an ACT starter")," (to reduce clutter, common plugins were moved to separate node.js module in ",r.a.createElement(l.MDXTag,{name:"em",components:t,parentName:"p"},"gatsby")," directory)."),r.a.createElement(l.MDXTag,{name:"p",components:t},"There are a few distinct plugin types in Gatsby. First of all, there are sourcing plugins, which import external data and create corresponding nodes in GraphQL. There are many plugins sourcing all types of data (databases, CMS, etc), but the most commonly used sourcing plugin is ",r.a.createElement(l.MDXTag,{name:"em",components:t,parentName:"p"},"gatsby-source-filesystem"),", which reads all the files from specified directories. "),r.a.createElement(p.a,null),r.a.createElement(l.MDXTag,{name:"p",components:t},"The second type of plugins transforms existing nodes, often creating children. One of the commonly used transformation plugins is ",r.a.createElement(l.MDXTag,{name:"em",components:t,parentName:"p"},"gatsby-plugin-sharp")," (with accompanying ",r.a.createElement(l.MDXTag,{name:"em",components:t,parentName:"p"},"gatsby-transformer-sharp"),"), which generates optimized images, so that for every screen resolution the image of the best quality/size could be loaded. A Gatsby ",r.a.createElement(l.MDXTag,{name:"em",components:t,parentName:"p"},"Image")," component also supports placeholders, helping to achieve blazing fast initial image loading. Other often used transformation plugins are ",r.a.createElement(l.MDXTag,{name:"em",components:t,parentName:"p"},"gatsby-transformer-yaml")," to parse ","*",".yaml files, and ",r.a.createElement(l.MDXTag,{name:"em",components:t,parentName:"p"},"gatsby-mdx")," to parse MDX. In project Javascript files, various resources could be imported as usually. Under the hood, Gatsby uses webpack to support file import. Many file types, e.g., JSON and CSS, are supported by Gatsby out of the box, others, like LESS, require minor modifications to a webpack configuration, which could be accomplished using the Gatsby API or installing a proper plugin."))},t}(r.a.Component),d=a(392);function g(e){return r.a.createElement(d.a,e,r.a.createElement(u,e))}a.d(t,"default",function(){return g})},363:function(e,t,a){"use strict";a.d(t,"b",function(){return p});var n=a(0),r=a.n(n),o=a(2),s=a.n(o),i=a(70),c=a.n(i);a.d(t,"a",function(){return c.a});a(365);var l=r.a.createContext({}),p=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};p.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},364:function(e,t,a){"use strict";a(105);var n=a(4),r=a.n(n),o=a(0),s=a.n(o),i=a(363);t.a=function(e){var t=e.children,a=e.to,n=e.activeClassName,o=e.href,c=r()(e,["children","to","activeClassName","href"]);return o&&(a=o),/^\/(?!\/)/.test(a)?s.a.createElement(i.a,Object.assign({to:a,activeClassName:n},c),t):s.a.createElement("a",Object.assign({href:a},c),t)}},365:function(e,t,a){var n;e.exports=(n=a(368))&&n.default||n},368:function(e,t,a){"use strict";a.r(t);var n=a(24),r=a.n(n),o=a(0),s=a.n(o),i=a(2),c=a.n(i),l=a(106),p=a(7),m=function(e){var t=e.location,a=p.default.getResourcesForPathnameSync(t.pathname);return a?s.a.createElement(l.a,r()({location:t,pageResources:a},a.json)):null};m.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=m},369:function(e,t,a){"use strict";a(163);var n=a(372),r=a(0),o=a.n(r),s=a(2),i=a.n(s),c=a(386),l=a.n(c),p=a(363);function m(e){var t=e.description,a=e.lang,r=e.meta,s=e.keywords,i=e.title;return o.a.createElement(p.b,{query:u,render:function(e){return"string"==typeof s&&(s=s.split(",").map(function(e){return e.trim()})),t=t||e.site.siteMetadata.description,o.a.createElement(l.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+e.site.siteMetadata.project,meta:[{name:"description",content:t},{property:"og:title",content:i},{property:"og:description",content:t},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:t}].concat(s?{name:"keywords",content:s.join(", ")}:[]).concat(r)})},data:n})}m.defaultProps={lang:"en",meta:[],keywords:null},m.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.oneOfType([i.a.string,i.a.arrayOf(i.a.string)]),title:i.a.string.isRequired},t.a=m;var u="304502870"},370:function(e,t,a){"use strict";a.d(t,"a",function(){return l});a(384);var n=a(371),r=a(0),o=a.n(r),s=a(363),i=a(385),c=a.n(i);function l(){return o.a.createElement(s.b,{query:"2369744027",render:function(e){return o.a.createElement(c.a,{fixed:e.logo.childImageSharp.fixed,style:{float:"left"}})},data:n})}},371:function(e){e.exports={data:{logo:{childImageSharp:{fixed:{base64:"data:image/png;base64,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",width:50,height:60,src:"/static/24243787906a1f19048f79ada574a876/ae665/logo.png",srcSet:"/static/24243787906a1f19048f79ada574a876/ae665/logo.png 1x,\n/static/24243787906a1f19048f79ada574a876/0fd90/logo.png 1.5x,\n/static/24243787906a1f19048f79ada574a876/456a3/logo.png 2x,\n/static/24243787906a1f19048f79ada574a876/f920b/logo.png 3x"}}}}}},372:function(e){e.exports={data:{site:{siteMetadata:{project:"ACT blog",description:"React, Ant Design, Gatsby, GraphQl, and other web technologies",author:"Act Labs"}}}}},373:function(e){e.exports={data:{config:{copyright:"Copyright © Act Labs",social:[{icon:"facebook",link:"https://www.facebook.com/ACT7LAB"},{icon:"github",link:"https://github.com/act-labs/gatsby-starter-act-blog"}]}}}},374:function(e){e.exports={data:{config:{nav:[{text:"home",slug:null},{text:"posts",slug:"/posts/"},{text:"snippets",slug:"/snippets/main/intro/"}]}}}},375:function(e,t,a){"use strict";a(105);var n=a(364),r=(a(380),a(71)),o=a.n(r),s=(a(383),a(366),a(367)),i=a.n(s),c=a(373),l=a(0),p=a.n(l),m=a(363),u=i.a.Footer;function d(e){var t=e.social,a=e.copyright,r=t.map(function(e){var t=e.link,a=e.icon;return p.a.createElement(n.a,{key:a,to:t},p.a.createElement(o.a,{type:a,style:{fontSize:"24px",marginLeft:10,color:"rgba(0, 0, 0, 0.65)"}}))});return p.a.createElement(u,{style:{textAlign:"center"}},p.a.createElement("div",null,a,p.a.createElement("div",{style:{float:"right"}},r)))}function g(e){return e.social?p.a.createElement(d,e):p.a.createElement(m.b,{query:"2743462859",render:function(t){var a=t.config,n=a.social,r=a.copyright;return p.a.createElement(d,Object.assign({social:n,copyright:r},e))},data:c})}a(379);var f=a(378),y=a.n(f),h=a(370),b=a(374),v=i.a.Header;function E(e){var t=e.nav;return p.a.createElement(v,{className:"navigation-bar"},p.a.createElement(h.a,null),p.a.createElement(y.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:t.filter(function(e){return e.selected}).map(function(e){return e.text}),style:{lineHeight:"64px"}},t.map(function(e,t){var a=e.slug,r=e.text;return p.a.createElement(y.a.Item,{key:t},p.a.createElement(n.a,{to:a||"/"},r))})))}function w(e){return e.nav?p.a.createElement(E,e):p.a.createElement(m.b,{query:"1250442554",render:function(t){var a=t.config.nav;return p.a.createElement(E,Object.assign({nav:a},e))},data:b})}var T=a(369);a(316);a.d(t,"a",function(){return A});var k=i.a.Content,M=i.a.Sider;function x(e){var t=e.style,a=e.children;return p.a.createElement(k,{style:Object.assign({padding:"5px 24px"},t)},a)}function A(e){var t=e.children,a=e.title,n=e.description,r=e.keywords,o=e.style,s=e.layout,c=Object.assign({},X,s),l=c.footer,m=c.fullHeight,u=Object.assign({},m?{height:"100%"}:null,o);return p.a.createElement(i.a,{className:"main-page-layout",style:u},p.a.createElement(T.a,{title:a,keywords:r,description:n}),p.a.createElement(w,null),t,l?p.a.createElement(g,null):null)}var X={footer:!0};A.Panel=x,A.SideMenuPanel=function(e){var t=e.children,a=e.menu;return p.a.createElement(i.a,{style:{padding:"1em 0",background:"#fff",minHeight:1e3}},p.a.createElement(M,{width:200},a),p.a.createElement(x,null,t))}},377:function(e,t,a){"use strict";a(105);var n=a(364),r=(a(163),a(0)),o=a.n(r),s=a(562),i=a(387),c=a(388),l=a(389),p=a(390),m=a(391);s.a.registerLanguage("javascript",i.a),s.a.registerLanguage("sh",c.a),s.a.registerLanguage("markdown",l.a),s.a.registerLanguage("yaml",p.a);var u=a(1);a.d(t,"a",function(){return g});var d={components:{code:function(e){var t="bash";if(e.className){var a=e.className.split("-");a.length>1&&(t=a[1])}return o.a.createElement(s.a,{language:t,style:m.github},e.children)},a:n.a}};function g(e){var t=Object.assign({},d,e),a=t.components,n=t.children;return o.a.createElement(u.MDXProvider,{components:a},n)}},392:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var n=a(377),r=(a(105),a(375)),o=a(0),s=a.n(o),i=(a(317),r.a.Panel);function c(e){var t=e.children,a=e.pageContext,o=Object.assign({frontmatter:{}},a),c=Object.assign({},{layout:o.layout},o.frontmatter);return s.a.createElement(r.a,c,s.a.createElement(i,{style:{paddingTop:"1em"}},c.title?s.a.createElement("h1",null,c.title):null,s.a.createElement(n.a,null,t)))}}}]);
//# sourceMappingURL=component---src-generated-posts-gatsby-intro-js-1ef0a6feebccc0580a44.js.map