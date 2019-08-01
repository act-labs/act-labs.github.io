(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{468:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(7),i=t.n(r),s=t(4),c=t.n(s),l=t(1),m=t(175),p=t(176),u=t(177),d=(t(67),t(178)),g=function(e){function a(a){var t;return(t=e.call(this,a)||this).layout=null,t}return c()(a,e),a.prototype.render=function(){var e=this.props,a=e.components;i()(e,["components"]);return o.a.createElement(l.MDXTag,{name:"wrapper",components:a},o.a.createElement(l.MDXTag,{name:"p",components:a},o.a.createElement(l.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/act-labs/gatsby-starter-act-blog"}},"ACT")," is a starter to create blog/documentation sites. It provides advanced, non-trivial building blocks, including pages generated by ",o.a.createElement(l.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/act-labs/gatsby-plugin-combine"}},"gatsby-plugin-combine"),". The focus is on flexibility and progressive enhancements, made easy through multiple GraphQL queries and clear-cut data processing. And it comes with a popular Ant Design library, very helpful when creating complex React components, and ",o.a.createElement(l.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://mdxjs.com/",title:"markdown with embedded React components"}},"MDX")," (markdown with embedded JSX components, see also our ",o.a.createElement(l.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"/posts/mdx/",title:"MDX features overview"}},"MDX intro"),") to handle chunks of structured text. The blog itself has two main regular pages: blog posts and snippets (short excerpts), which could be useful whenever there is a need to describe and summarize/quickly reference some information. As ACT relies on a modern web development ecosystem, it is impossible to cover all the aspects which could be useful when working with this starter. Instead, this article gives overview of the project structure, gatsby-plugin-combine, and advance Babel configuration options. For a higher level overview you may read ",o.a.createElement(l.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"/posts/act-intro/",title:"High level ACT overview"}},"an ACT intro"),".  "),o.a.createElement(l.MDXTag,{name:"h2",components:a},"Complex pages using ",o.a.createElement(l.MDXTag,{name:"em",components:a,parentName:"h2"},"gatsby-plugin-combine")),o.a.createElement(l.MDXTag,{name:"p",components:a},"Gatsby pages are regular React components which receive some page context (a JSON object). A page component may also define a GraphQL query. This greatly increases flexibility, as one can ",o.a.createElement(l.MDXTag,{name:"em",components:a,parentName:"p"},"declaratively")," query and process data of practically unlimited complexity. The only, but important, caveat is that a Gatsby node graph should provide a sufficiently convenient data representation. And in practice, indeed, when working with Gatsby, one has to face some challenges."),o.a.createElement(l.MDXTag,{name:"p",components:a},"Firstly, after page GraphQL query is executed, complex data preprocessing is still often required, in which case code may beg for explicit extraction of data processing logic. In general, separation of data processing from UI code may encourage a better structured, less coupled with Gatsby, and more testable code. And, as an additional bonus, during explicit data processing, information always could be easily saved or logged for later inspection or reuse."),o.a.createElement(l.MDXTag,{name:"p",components:a},"Secondly, for complex pages, it is often convenient to think that every page consists of multiple, logically independent parts. When code is structured accordingly, it clarifies GraphQL queries and data processing logic. Along the same lines, lodash templates, for example, can serve as an attractive, flexible tool to mix and match logical page elements."),o.a.createElement(l.MDXTag,{name:"p",components:a},"And finally, additional GraphQL queries or access to the data outside GraphQL could be desirable. Shaping GraphQL to the needs of every website page could be too time consuming, to be practical. Developers may prefer to leave Gatsby nodes intact, but, instead, read additional data directly from external data sources, or query GraphQL multiple times."),o.a.createElement(l.MDXTag,{name:"p",components:a},"All the complications mentioned could be addressed using the power of the Gatsby API, which makes every aspect of page construction transparent and open to customization. ACT doesn't use the Gatsby API directly, but, instead, relies on ",o.a.createElement(l.MDXTag,{name:"em",components:a,parentName:"p"},"gatsby-plugin-combine"),", which provides a convenient abstraction and API to work with every page as a collection of multiple GraphQL queries/data processing functions."),o.a.createElement(l.MDXTag,{name:"p",components:a},"For example, it is convenient to treat snippets as chunks of text plus elaborate navigation (a sidebar menu). Chunks of text, possibly with some embedded components (code excerpts, additional controls, charting elements, etc), could be represented using MDX files. A sidebar menu, on the other hand, requires information about all snippets in the collection and additional configuration. Thus, navigation information is obtained once for all snippets (using a separate GraphQL query) and is saved in a JSON file to be imported later by all snippet pages. To combine MDX, JSON, and React component files, lodash templates come in handy."),o.a.createElement(d.a,null),o.a.createElement(l.MDXTag,{name:"p",components:a},"Posts, on the other hand, are simpler and could be implemented using standard Gatsby tools. Still, in ACT, they are implemented similarly to snippets: a generated page wraps MDX inside a React component. This leaves more knobs to play with and makes the implementation more flexible/open to progressive enhancements, when and if further enhancements become desirable. But even if no further enhancements is expected, this approach has certain advantages: shortness of code and simplicity are traded for code decoupling and explicit page representation - arguably a reasonable tradeoff."),o.a.createElement(l.MDXTag,{name:"p",components:a},"The index of blog posts is a unique page and hence located in the ",o.a.createElement(l.MDXTag,{name:"em",components:a,parentName:"p"},"src/content/pages")," directory. It is also quite a complex page, which may grow in complexity even further, so ",o.a.createElement(l.MDXTag,{name:"em",components:a,parentName:"p"},"gatsby-plugin-combine")," is used again."),o.a.createElement(l.MDXTag,{name:"h2",components:a},"Configuring Babel and Webpack"),o.a.createElement(l.MDXTag,{name:"p",components:a},"As our blog aims to provide reach interactive user experience, we need complex page components, and, to make complex React components easier to develop, we need a powerful and diverse React library. A popular Ant Design library fits the above description well enough, so it was a natural choice. But it is not enough to install the library itself (and a gatsby less plugin to compile stylesheets) to start working productively - a convenient JavaScript import style is also important. And here the custom Babel configuration (in a ",o.a.createElement(l.MDXTag,{name:"em",components:a,parentName:"p"},".babelrc")," file) and ",o.a.createElement(l.MDXTag,{name:"em",components:a,parentName:"p"},"babel-plugin-import")," come to the rescue:"),o.a.createElement(m.a,null),o.a.createElement(l.MDXTag,{name:"p",components:a},"To import project components as ",o.a.createElement(l.MDXTag,{name:"em",components:a,parentName:"p"},'"actb"')," and simplify other imports, webpack aliases must be defined:"),o.a.createElement(p.a,null),o.a.createElement(l.MDXTag,{name:"p",components:a},"The style of imports is no doubt a matter of taste and preferences, and one may prefer to use traditional relative imports, but if you do not mind aliases, all necessary infrastructure is already in place. Webpack configuration adjustments in Gatsby projects conventionally happen in a ",o.a.createElement(l.MDXTag,{name:"em",components:a,parentName:"p"},"onCreateWebpackConfig")," hook in ",o.a.createElement(l.MDXTag,{name:"em",components:a,parentName:"p"},"gatsby-node.js"),". To reduce clutter and facilitate later code reuse, this and other common configuration operations in ACT are moved to the functions defined in the ",o.a.createElement(l.MDXTag,{name:"em",components:a,parentName:"p"},"gatsby")," directory."),o.a.createElement(l.MDXTag,{name:"h2",components:a},"Project directory structure"),o.a.createElement(l.MDXTag,{name:"p",components:a},"An ACT project directory structure follows usual Gatsby conventions. For example, files in ",o.a.createElement(l.MDXTag,{name:"em",components:a,parentName:"p"},"src/pages")," are ordinary Gatsby pages. The ",o.a.createElement(l.MDXTag,{name:"em",components:a,parentName:"p"},"src/components")," directory, as usually, contains React components. In addition, there is a number of directories specific to ACT. "),o.a.createElement(l.MDXTag,{name:"p",components:a},"Resources for pages are stored in ",o.a.createElement(l.MDXTag,{name:"em",components:a,parentName:"p"},"src/content")," subdirectories:"),o.a.createElement(l.MDXTag,{name:"ul",components:a},o.a.createElement(l.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(l.MDXTag,{name:"em",components:a,parentName:"li"},"config")," - common configuration files (main.yaml and other)."),o.a.createElement(l.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(l.MDXTag,{name:"em",components:a,parentName:"li"},"images")," - a logo and other images."),o.a.createElement(l.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(l.MDXTag,{name:"em",components:a,parentName:"li"},"pages")," - resources for unique complex pages (the main page, index of posts, etc)."),o.a.createElement(l.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(l.MDXTag,{name:"em",components:a,parentName:"li"},"posts")," - MDX (markdown) files for regular blog posts."),o.a.createElement(l.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(l.MDXTag,{name:"em",components:a,parentName:"li"},"snippets")," - collections of snippets (subdirectories and corresponding configuration files). Every subdirectory is a single collection of snippets (MDX files). Every collection has a configuration file with the same file name but an ","*",".yaml extension.")),o.a.createElement(l.MDXTag,{name:"p",components:a},"ACT also uses the ",o.a.createElement(l.MDXTag,{name:"em",components:a,parentName:"p"},"data")," directory, where helper modules of ",o.a.createElement(l.MDXTag,{name:"em",components:a,parentName:"p"},"gatsby-plugin-combine")," can save data. There is also a number of ",o.a.createElement(l.MDXTag,{name:"em",components:a,parentName:"p"},"src")," subdirectories for ",o.a.createElement(l.MDXTag,{name:"em",components:a,parentName:"p"},"gatsby-plugin-combine"),":"),o.a.createElement(l.MDXTag,{name:"ul",components:a},o.a.createElement(l.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(l.MDXTag,{name:"em",components:a,parentName:"li"},"generated")," - the place where pages, generated using lodash templates are saved. The path of a page relative to ",o.a.createElement(l.MDXTag,{name:"em",components:a,parentName:"li"},"src/generated")," corresponds to the slug of the page."),o.a.createElement(l.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(l.MDXTag,{name:"em",components:a,parentName:"li"},"helpers")," - node.js modules orchestrating page construction (a ",o.a.createElement(l.MDXTag,{name:"em",components:a,parentName:"li"},"helper")," plugin option)."),o.a.createElement(l.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(l.MDXTag,{name:"em",components:a,parentName:"li"},"templates")," - lodash templates (a ",o.a.createElement(l.MDXTag,{name:"em",components:a,parentName:"li"},"template")," plugin option).")),o.a.createElement(u.a,null))},a}(o.a.Component),h=t(495);function f(e){return o.a.createElement(h.a,e,o.a.createElement(g,e))}t.d(a,"default",function(){return f})},475:function(e,a,t){"use strict";t(57);var n=t(476),o=t(0),r=t.n(o),i=t(2),s=t.n(i),c=t(488),l=t.n(c),m=t(34);function p(e){var a=e.description,t=e.lang,o=e.meta,i=e.keywords,s=e.title;return r.a.createElement(m.b,{query:u,render:function(e){return"string"==typeof i&&(i=i.split(",").map(function(e){return e.trim()})),a=a||e.site.siteMetadata.description,r.a.createElement(l.a,{htmlAttributes:{lang:t},title:s,titleTemplate:"%s | "+e.site.siteMetadata.project,meta:[{name:"description",content:a},{property:"og:title",content:s},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:a}].concat(i?{name:"keywords",content:i.join(", ")}:[]).concat(o)})},data:n})}p.defaultProps={lang:"en",meta:[],keywords:null},p.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.oneOfType([s.a.string,s.a.arrayOf(s.a.string)]),title:s.a.string.isRequired},a.a=p;var u="304502870"},476:function(e){e.exports={data:{site:{siteMetadata:{project:"ACT blog",description:"React, Ant Design, Gatsby, GraphQl, and other web technologies",author:"Act Labs"}}}}},477:function(e,a,t){"use strict";t.d(a,"a",function(){return l});t(252);var n=t(478),o=t(0),r=t.n(o),i=t(34),s=t(158),c=t.n(s);function l(){return r.a.createElement(i.b,{query:"2369744027",render:function(e){return r.a.createElement(c.a,{fixed:e.logo.childImageSharp.fixed,style:{float:"left"}})},data:n})}},478:function(e){e.exports={data:{logo:{childImageSharp:{fixed:{base64:"data:image/png;base64,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",width:50,height:60,src:"/static/a64620346ac3ce8d4580a3f07039fa3c/8469d/logo.png",srcSet:"/static/a64620346ac3ce8d4580a3f07039fa3c/8469d/logo.png 1x"}}}}}},479:function(e){e.exports={data:{config:{copyright:"Copyright © Act Labs",social:[{icon:"facebook",link:"https://www.facebook.com/ACT7LAB"},{icon:"github",link:"https://github.com/act-labs/gatsby-starter-act-blog"}]}}}},480:function(e){e.exports={data:{config:{nav:[{text:"home",slug:null},{text:"posts",slug:"/posts/"},{text:"snippets",slug:"/snippets/"}]}}}},481:function(e,a,t){"use strict";t(8);var n=t(93),o=(t(157),t(43)),r=t.n(o),i=(t(489),t(473),t(474)),s=t.n(i),c=t(479),l=t(0),m=t.n(l),p=t(34),u=s.a.Footer;function d(e){var a=e.social,t=e.copyright,o=a.map(function(e){var a=e.link,t=e.icon;return m.a.createElement(n.a,{key:t,to:a},m.a.createElement(r.a,{type:t,style:{fontSize:"24px",marginLeft:10,color:"rgba(0, 0, 0, 0.65)"}}))});return m.a.createElement(u,{style:{textAlign:"center"}},m.a.createElement("div",null,t,m.a.createElement("div",{style:{float:"right"}},o)))}function g(e){return e.social?m.a.createElement(d,e):m.a.createElement(p.b,{query:"2743462859",render:function(a){var t=a.config,n=t.social,o=t.copyright;return m.a.createElement(d,Object.assign({social:n,copyright:o},e))},data:c})}t(485);var h=t(483),f=t.n(h),y=t(477),b=t(480),E=s.a.Header;function v(e){var a=e.nav;return m.a.createElement(E,{className:"navigation-bar"},m.a.createElement(n.a,{to:"/"},m.a.createElement(y.a,null)),m.a.createElement(f.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:a.filter(function(e){return e.selected}).map(function(e){return e.text}),style:{lineHeight:"64px"}},a.map(function(e,a){var t=e.slug,o=e.text;return m.a.createElement(f.a.Item,{key:a},m.a.createElement(n.a,{to:t||"/"},o))})))}function T(e){return e.nav?m.a.createElement(v,e):m.a.createElement(p.b,{query:"1250442554",render:function(a){var t=a.config.nav;return m.a.createElement(v,Object.assign({nav:t},e))},data:b})}var M=t(475),D=t(7),X=t.n(D);t(420);t.d(a,"a",function(){return N});var w=s.a.Content,A=s.a.Sider;function x(e){var a=e.style,t=e.children,n=X()(e,["style","children"]);return m.a.createElement(w,Object.assign({style:Object.assign({padding:"5px 24px"},a)},n),t)}function N(e){var a=e.children,t=e.className,n=e.title,o=e.description,r=e.keywords,i=e.style,c=e.layout,l=Object.assign({},k,c),p=l.footer,u=l.fullHeight,d=Object.assign({},u?{height:"100%"}:null,i),h=(t?t+" ":"")+"page-layout";return m.a.createElement(s.a,{className:h,style:d},m.a.createElement(M.a,{title:n,keywords:r,description:o}),m.a.createElement(T,null),a,p?m.a.createElement(g,null):null)}var k={footer:!0};N.Panel=x,N.SideMenuPanel=function(e){var a=e.children,t=e.menu;return m.a.createElement(s.a,{style:{padding:"1em 0",background:"#fff",minHeight:1e3}},m.a.createElement(A,{width:200},t),m.a.createElement(x,null,a))}},484:function(e,a,t){"use strict";t(8);var n=t(93),o=(t(57),t(0)),r=t.n(o),i=t(662),s=t(490),c=t(491),l=t(492),m=t(493),p=t(494);i.a.registerLanguage("javascript",s.a),i.a.registerLanguage("sh",c.a),i.a.registerLanguage("markdown",l.a),i.a.registerLanguage("yaml",m.a);var u=t(1);t.d(a,"a",function(){return g});var d={components:{code:function(e){var a="bash";if(e.className){var t=e.className.split("-");t.length>1&&(a=t[1])}return r.a.createElement(i.a,{language:a,style:p.github},e.children)},a:n.a}};function g(e){var a=Object.assign({},d,e),t=a.components,n=a.children;return r.a.createElement(u.MDXProvider,{components:t},n)}},495:function(e,a,t){"use strict";t.d(a,"a",function(){return c});var n=t(484),o=(t(8),t(481)),r=t(0),i=t.n(r),s=(t(421),o.a.Panel);function c(e){var a=e.children,t=e.pageContext,r=Object.assign({frontmatter:{}},t),c=Object.assign({},{layout:r.layout},r.frontmatter);return i.a.createElement(o.a,c,i.a.createElement(s,{style:{paddingTop:"1em"}},c.title?i.a.createElement("h1",null,c.title):null,i.a.createElement(n.a,null,a)))}}}]);
//# sourceMappingURL=component---src-generated-posts-act-blog-js-19e809446aa153248404.js.map