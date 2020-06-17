(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{705:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),s=a.n(o),i=a(15),c=a.n(i),l=a(1),p=a(244),m=a(245),u=function(e){function t(t){var a;return(a=e.call(this,t)||this).layout=null,a}return c()(t,e),t.prototype.render=function(){var e=this.props,t=e.components;s()(e,["components"]);return r.a.createElement(l.MDXTag,{name:"wrapper",components:t},r.a.createElement(l.MDXTag,{name:"p",components:t},"Gatsby comes with detailed ",r.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://www.gatsbyjs.org/docs/",title:"Gatsby, extensive online documentation"}},"documentation")," and large and constantly growing plugin system. For new users, the amount of information could be overwhelming. In order to help to navigate through large Gatsby ecosystem, this post gives very high level overview of main Gatsby concepts and ideas. "),r.a.createElement(l.MDXTag,{name:"h2",components:t},"Core: GraphQL, Webpack, and programmatic page generation."),r.a.createElement(l.MDXTag,{name:"p",components:t},"Growing in popularity, static site generators produce highly optimized content with small response time and better perceived performance. One of the most popular static site generators, Gatsby is implemented on top of node.js and React, which helps it to tap directly into modern web development stack and makes it attractive for React developers. The page generation process in Gatsby mainly revolves around in-memory nodes, representing resources necessary for page construction. In Gatsby, this graph (often referred as ",r.a.createElement(l.MDXTag,{name:"em",components:t,parentName:"p"},"GraphQL"),") serves as a convenient integration layer, allowing declarative access to various resources. In other words, essentially, Gatsby provides in-memory database layer, backed by GraphQL declarative query syntax."),r.a.createElement(m.a,null),r.a.createElement(l.MDXTag,{name:"p",components:t},"Thanks to GraphQL expressive power, very complex websites could be created literally without any programming. Nonetheless, Gatsby is actually a comprehensive API: developers may hook into the build process and easily extend the system importing (",r.a.createElement(l.MDXTag,{name:"em",components:t,parentName:"p"},"sourcing")," in the Gatsby lingo) and transforming various resources. Unlike many popular website builders, Gatsby doesn't provide any proprietary content management tools, instead it concentrates on tools to build powerful integration/processing pipelines. Owing to plugins, Gatsby is able to source all common file types, information from popular databases, and even content from other CMS systems."),r.a.createElement(l.MDXTag,{name:"p",components:t},"Typically, HTML pages are constructed from various files: CSS, Javascript/Typescript/React, HTML, JSON, markdown etc. To process files of various types, Gatsby relies on standard, production ready tools: Babel and Webpack. Babel comes with a comprehensive API and a set of plugins to transform various files to standard cross-browser Javascript. Webpack splits multiple Javascript files into optimal chunks to optimize the load time of successive page requests. React server side rendering is used to generate HTML, but original Javascript is served to clients as well and is bound (hydrated) to HTML in a browser, helping to provide a rich interactive user experience."),r.a.createElement(l.MDXTag,{name:"p",components:t},"To create a page programmatically, the ",r.a.createElement(l.MDXTag,{name:"em",components:t,parentName:"p"},"createPage")," action can be invoked inside a ",r.a.createElement(l.MDXTag,{name:"em",components:t,parentName:"p"},"createPages")," callback defined in gatsby-node.js. When creating pages, a React component are provided, as well as a page context - a JSON object used directly or as a parameter for page GraphQL query. Generated JS files and page data are saved in the topmost ",r.a.createElement(l.MDXTag,{name:"em",components:t,parentName:"p"},"public")," project directory. All the required data and javascript chunks (created by webpack) are listed in a data.json file, used in a browser to intelligently load pages. For example, if pages have the same component but different page data, only the absent data is requested for the second and later page requests. In Gatsby v2 there is no concept of the shared layout, but shared layouts could be trivially implemented using the Gatsby browser API (could be useful for complex page transition effects). The same applies to other shared code (context providers, a redux store, APIs, etc)."),r.a.createElement(l.MDXTag,{name:"h2",components:t},"Gatsby plugins."),r.a.createElement(l.MDXTag,{name:"p",components:t},"Thanks to an open architecture, a lot of Gatsby functionality comes in the form of plugins. Plugins are invoked in ",r.a.createElement(l.MDXTag,{name:"em",components:t,parentName:"p"},"gatsby-config.js")," and thus configure/build a website pipeline. Many of them are casually borrowed from one project to another, and could be seen practically in all Gatsby starters (projects, helping to jump start Gatsby development). For example, consider plugins listed in ",r.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/act-labs/gatsby-starter-act-blog"}},"an ACT starter")," (to reduce clutter, common plugins were moved to separate node.js module in ",r.a.createElement(l.MDXTag,{name:"em",components:t,parentName:"p"},"gatsby")," directory)."),r.a.createElement(l.MDXTag,{name:"p",components:t},"There are a few distinct plugin types in Gatsby. First of all, there are sourcing plugins, which import external data and create corresponding nodes in GraphQL. There are many plugins sourcing all types of data (databases, CMS, etc), but the most commonly used sourcing plugin is ",r.a.createElement(l.MDXTag,{name:"em",components:t,parentName:"p"},"gatsby-source-filesystem"),", which reads all the files from specified directories. "),r.a.createElement(p.a,null),r.a.createElement(l.MDXTag,{name:"p",components:t},"The second type of plugins transforms existing nodes, often creating children. One of the commonly used transformation plugins is ",r.a.createElement(l.MDXTag,{name:"em",components:t,parentName:"p"},"gatsby-plugin-sharp")," (with accompanying ",r.a.createElement(l.MDXTag,{name:"em",components:t,parentName:"p"},"gatsby-transformer-sharp"),"), which generates optimized images, so that for every screen resolution the image of the best quality/size could be loaded. A Gatsby ",r.a.createElement(l.MDXTag,{name:"em",components:t,parentName:"p"},"Image")," component also supports placeholders, helping to achieve blazing fast initial image loading. Other often used transformation plugins are ",r.a.createElement(l.MDXTag,{name:"em",components:t,parentName:"p"},"gatsby-transformer-yaml")," to parse ","*",".yaml files, and ",r.a.createElement(l.MDXTag,{name:"em",components:t,parentName:"p"},"gatsby-mdx")," to parse MDX. In project Javascript files, various resources could be imported as usually. Under the hood, Gatsby uses webpack to support file import. Many file types, e.g., JSON and CSS, are supported by Gatsby out of the box, others, like LESS, require minor modifications to a webpack configuration, which could be accomplished using the Gatsby API or installing a proper plugin."))},t}(r.a.Component),d=a(752);function g(e){return r.a.createElement(d.a,e,r.a.createElement(u,e))}a.d(t,"default",function(){return g})},731:function(e,t,a){"use strict";a(46);var n=a(732),r=a(0),o=a.n(r),s=a(2),i=a.n(s),c=a(743),l=a.n(c),p=a(31);function m(e){var t=e.description,a=e.lang,r=e.meta,s=e.keywords,i=e.title;return o.a.createElement(p.b,{query:u,render:function(e){return"string"==typeof s&&(s=s.split(",").map(function(e){return e.trim()})),t=t||e.site.siteMetadata.description,o.a.createElement(l.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+e.site.siteMetadata.project,meta:[{name:"description",content:t},{property:"og:title",content:i},{property:"og:description",content:t},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:t}].concat(s?{name:"keywords",content:s.join(", ")}:[]).concat(r)})},data:n})}m.defaultProps={lang:"en",meta:[],keywords:null},m.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.oneOfType([i.a.string,i.a.arrayOf(i.a.string)]),title:i.a.string.isRequired},t.a=m;var u="304502870"},732:function(e){e.exports={data:{site:{siteMetadata:{project:"ACT blog",description:"React, Ant Design, Gatsby, GraphQl, and other web technologies",author:"Act Labs"}}}}},733:function(e,t,a){"use strict";a.d(t,"a",function(){return l});a(354);var n=a(734),r=a(0),o=a.n(r),s=a(31),i=a(231),c=a.n(i);function l(){return o.a.createElement(s.b,{query:"2369744027",render:function(e){return o.a.createElement(c.a,{fixed:e.logo.childImageSharp.fixed,style:{float:"left"}})},data:n})}},734:function(e){e.exports={data:{logo:{childImageSharp:{fixed:{base64:"data:image/png;base64,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",width:50,height:60,src:"/static/a64620346ac3ce8d4580a3f07039fa3c/8469d/logo.png",srcSet:"/static/a64620346ac3ce8d4580a3f07039fa3c/8469d/logo.png 1x"}}}}}},735:function(e){e.exports={data:{config:{copyright:"Copyright © Act Labs",social:[{icon:"facebook",link:"https://www.facebook.com/ACT7LAB"},{icon:"github",link:"https://github.com/act-labs/gatsby-starter-act-blog"}]}}}},736:function(e){e.exports={data:{config:{nav:[{text:"home",slug:null},{text:"posts",slug:"/posts/"},{text:"snippets",slug:"/snippets/"}]}}}},737:function(e,t,a){"use strict";a(6);var n=a(138),r=(a(178),a(32)),o=a.n(r),s=(a(744),a(729),a(730)),i=a.n(s),c=a(735),l=a(0),p=a.n(l),m=a(31),u=i.a.Footer;function d(e){var t=e.social,a=e.copyright,r=t.map(function(e){var t=e.link,a=e.icon;return p.a.createElement(n.a,{key:a,to:t},p.a.createElement(o.a,{type:a,style:{fontSize:"24px",marginLeft:10,color:"rgba(0, 0, 0, 0.65)"}}))});return p.a.createElement(u,{style:{textAlign:"center"}},p.a.createElement("div",null,a,p.a.createElement("div",{style:{float:"right"}},r)))}function g(e){return e.social?p.a.createElement(d,e):p.a.createElement(m.b,{query:"2743462859",render:function(t){var a=t.config,n=a.social,r=a.copyright;return p.a.createElement(d,Object.assign({social:n,copyright:r},e))},data:c})}a(741);var y=a(740),h=a.n(y),f=a(733),b=a(736),v=i.a.Header;function E(e){var t=e.nav;return p.a.createElement(v,{className:"navigation-bar"},p.a.createElement(n.a,{to:"/"},p.a.createElement(f.a,null)),p.a.createElement(h.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:t.filter(function(e){return e.selected}).map(function(e){return e.text}),style:{lineHeight:"64px"}},t.map(function(e,t){var a=e.slug,r=e.text;return p.a.createElement(h.a.Item,{key:t},p.a.createElement(n.a,{to:a||"/"},r))})))}function w(e){return e.nav?p.a.createElement(E,e):p.a.createElement(m.b,{query:"1250442554",render:function(t){var a=t.config.nav;return p.a.createElement(E,Object.assign({nav:a},e))},data:b})}var M=a(731),T=a(14),A=a.n(T);a(674);a.d(t,"a",function(){return X});var k=i.a.Content,D=i.a.Sider;function x(e){var t=e.style,a=e.children,n=A()(e,["style","children"]);return p.a.createElement(k,Object.assign({style:Object.assign({padding:"5px 24px"},t)},n),a)}function X(e){var t=e.children,a=e.className,n=e.title,r=e.description,o=e.keywords,s=e.style,c=e.layout,l=Object.assign({},G,c),m=l.footer,u=l.fullHeight,d=Object.assign({},u?{height:"100%"}:null,s),y=(a?a+" ":"")+"page-layout";return p.a.createElement(i.a,{className:y,style:d},p.a.createElement(M.a,{title:n,keywords:o,description:r}),p.a.createElement(w,null),t,m?p.a.createElement(g,null):null)}var G={footer:!0};X.Panel=x,X.SideMenuPanel=function(e){var t=e.children,a=e.menu;return p.a.createElement(i.a,{style:{padding:"1em 0",background:"#fff",minHeight:1e3}},p.a.createElement(D,{width:200},a),p.a.createElement(x,null,t))}},739:function(e,t,a){"use strict";a(6);var n=a(138),r=(a(46),a(0)),o=a.n(r),s=a(882),i=a(745),c=a(746),l=a(747),p=a(748),m=a(749),u=a(750);s.a.registerLanguage("javascript",i.a),s.a.registerLanguage("sh",c.a),s.a.registerLanguage("markdown",l.a),s.a.registerLanguage("yaml",p.a),s.a.registerLanguage("dockerfile",m.a);var d=a(1);a.d(t,"a",function(){return y});var g={components:{code:function(e){var t="bash";if(e.className){var a=e.className.split("-");a.length>1&&(t=a[1])}return o.a.createElement(s.a,{language:t,style:u.github},e.children)},a:n.a}};function y(e){var t=Object.assign({},g,e),a=t.components,n=t.children;return o.a.createElement(d.MDXProvider,{components:a},n)}},752:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var n=a(739),r=(a(6),a(737)),o=a(0),s=a.n(o),i=(a(675),r.a.Panel);function c(e){var t=e.children,a=e.pageContext,o=Object.assign({frontmatter:{}},a),c=Object.assign({},{layout:o.layout},o.frontmatter);return s.a.createElement(r.a,c,s.a.createElement(i,{style:{paddingTop:"1em"}},c.title?s.a.createElement("h1",null,c.title):null,s.a.createElement(n.a,null,t)))}}}]);
//# sourceMappingURL=component---src-generated-posts-gatsby-intro-js-90c1686d885eefb4f9ea.js.map