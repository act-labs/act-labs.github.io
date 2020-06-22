(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{709:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),s=a.n(o),i=a(15),c=a.n(i),m=a(1),l=a(245),p=a(104),d=a(246),u=a(247),g=a(248),h=a(249),f=function(e){function t(t){var a;return(a=e.call(this,t)||this).layout=null,a}return c()(t,e),t.prototype.render=function(){var e=this.props,t=e.components;s()(e,["components"]);return r.a.createElement(m.MDXTag,{name:"wrapper",components:t},r.a.createElement(m.MDXTag,{name:"p",components:t},r.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/act-labs/gatsby-starter-act-blog",title:"Gatsby starter to create documentation"}},"ACT")," is a starter to create blogs, documentation, or e-learning websites. Just edit markdown files, or use ",r.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://mdxjs.com/",title:"markdown with embedded React components"}},"MDX")," to quickly create formated, user interactive pages without any programming skills, or complex visual designers. As ACT is a Gatsby starter, all the power of Gatsby plugin system is at your disposal (optimized images, SEO, etc), as well as Ant Design, webpack, Babel, etc. These interesting and important topics are left for other blog posts though (see, for example, more ",r.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/posts/act-blog/"}},"in depth article")," about complex page development). Here we concentrate on installation/usage, general project structure and main ACT page types."),r.a.createElement(m.MDXTag,{name:"h2",components:t},"Installation"),r.a.createElement(m.MDXTag,{name:"p",components:t},"ACT is a ",r.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://www.gatsbyjs.org/"}},"Gatsby")," starter, which means ",r.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://nodejs.org/"}},"node.js")," must be already present."),r.a.createElement(l.a,null),r.a.createElement(m.MDXTag,{name:"h2",components:t},"Pages"),r.a.createElement(m.MDXTag,{name:"p",components:t},"ACT provides tools to create cross referenced entries, convenient for documentation, e-learning, and other websites describing closely related items. To accomplish this, two main page types are provided: posts and snippets. Snippets are short write-ups (for example, short code excerpts), grouped by subjects for quick reference. They are for readers, who already know the subject well enough, but wish to review/quickly look up information. Posts are fully fledged articles, often referencing/embedding relevant snippets. Just  interactively edit/preview markdown documents using your favorite text editor."),r.a.createElement(m.MDXTag,{name:"p",components:t},"To edit posts, go to ",r.a.createElement(m.MDXTag,{name:"em",components:t,parentName:"p"},"src/content/posts"),". Posts are ordinary MDX files. Which means they are basically markdown documents with embedded JSX and configuration information (a JS object) in the beginning (in the form of a ",r.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://jekyllrb.com/docs/front-matter/"}},"frontmatter")," section)."),r.a.createElement(d.a,null),r.a.createElement(m.MDXTag,{name:"p",components:t},"As posts are MDX documents, they may contain not only markdown, but also embedded JSX components. Using such components, for example, one can embed a chart, data table, quiz popup, or just split text into separate tabs. MDX documents themselves are React components, and hence, for example, snippets could be embedded in posts (or other snippets as well):"),r.a.createElement(p.a,null),r.a.createElement(m.MDXTag,{name:"p",components:t},"Snippets are located in ",r.a.createElement(m.MDXTag,{name:"em",components:t,parentName:"p"},"src/content/snippets")," subdirectories (each subdirectory is a snippet collection). They are ordinary MDX files. Snippets are organized into collections. Every snippet collection comes with a ","*",".yaml configuration file of the same name as the corresponding collection directory. Within collections, snippets are also divided into groups. Snippet pages have a two level sidebar menu (group/name) for quick navigation."),r.a.createElement(u.a,null),r.a.createElement(m.MDXTag,{name:"p",components:t},"Complex singleton pages (e.g., the main site page, posts index, etc.) are located in the ",r.a.createElement(m.MDXTag,{name:"em",components:t,parentName:"p"},"src/content/pages")," directory. Files from this directory correspond to root pages (",r.a.createElement(m.MDXTag,{name:"em",components:t,parentName:"p"},"pages/page.md")," maps to the ",r.a.createElement(m.MDXTag,{name:"em",components:t,parentName:"p"},"/page/")," URL, ",r.a.createElement(m.MDXTag,{name:"em",components:t,parentName:"p"},"pages/index.md")," maps to ",r.a.createElement(m.MDXTag,{name:"em",components:t,parentName:"p"},"/"),", etc.). To edit these pages, modifications to React components or helper node.js modules could be required. For more information about helper modules see ",r.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/act-labs/gatsby-plugin-combine/"}},"gatsby-plugin-combine")," and source code."),r.a.createElement(m.MDXTag,{name:"p",components:t},"Ordinary Gatsby pages (for example, pure React components or simple MDX documents) could be created in the standard Gatsby ",r.a.createElement(m.MDXTag,{name:"em",components:t,parentName:"p"},"src/pages")," directory. See a ",r.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/examples/hello-antd/"}},"Hello Antd")," page in the ",r.a.createElement(m.MDXTag,{name:"em",components:t,parentName:"p"},"src/pages/examples/")," directory. For more information see ",r.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/snippets/main/act-structure/"}},"ACT directory tree structure"),"."),r.a.createElement(m.MDXTag,{name:"h2",components:t},"Usage"),r.a.createElement(m.MDXTag,{name:"p",components:t},"To start ACT development, Gatsby development server must be started in the ACT project home directory. After which posts and snippets could be edited/added. Modifications could be previewed live in a browser. After site updates are done and tested, static pages could be built and examined/served (tested) from the ",r.a.createElement(m.MDXTag,{name:"em",components:t,parentName:"p"},"public")," directory."),r.a.createElement(g.a,null),r.a.createElement(m.MDXTag,{name:"h2",components:t},"Deployment"),r.a.createElement(m.MDXTag,{name:"p",components:t},"After the build, a ",r.a.createElement(m.MDXTag,{name:"em",components:t,parentName:"p"},"public")," directory containing all static resources could be deployed to any web hosting. The Gatsby website contains detailed instructions how to deploy builds to the most popular hosting providers. As they are quite similar and simple. For example, lets consider GitHub Pages, which is a free static website hosting from a leading version control service based on Git. The simplest way to deploy to GitHub Pages is to use a ",r.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/tschaub/gh-pages"}},"gh-pages")," package."),r.a.createElement(h.a,null))},t}(r.a.Component),y=a(753);function b(e){return r.a.createElement(y.a,e,r.a.createElement(f,e))}a.d(t,"default",function(){return b})},732:function(e,t,a){"use strict";a(46);var n=a(733),r=a(0),o=a.n(r),s=a(2),i=a.n(s),c=a(744),m=a.n(c),l=a(34);function p(e){var t=e.description,a=e.lang,r=e.meta,s=e.keywords,i=e.title;return o.a.createElement(l.b,{query:d,render:function(e){return"string"==typeof s&&(s=s.split(",").map(function(e){return e.trim()})),t=t||e.site.siteMetadata.description,o.a.createElement(m.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+e.site.siteMetadata.project,meta:[{name:"description",content:t},{property:"og:title",content:i},{property:"og:description",content:t},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:t}].concat(s?{name:"keywords",content:s.join(", ")}:[]).concat(r)})},data:n})}p.defaultProps={lang:"en",meta:[],keywords:null},p.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.oneOfType([i.a.string,i.a.arrayOf(i.a.string)]),title:i.a.string.isRequired},t.a=p;var d="304502870"},733:function(e){e.exports={data:{site:{siteMetadata:{project:"ACT blog",description:"React, Ant Design, Gatsby, GraphQl, and other web technologies",author:"Act Labs"}}}}},734:function(e,t,a){"use strict";a.d(t,"a",function(){return m});a(352);var n=a(735),r=a(0),o=a.n(r),s=a(34),i=a(231),c=a.n(i);function m(){return o.a.createElement(s.b,{query:"2369744027",render:function(e){return o.a.createElement(c.a,{fixed:e.logo.childImageSharp.fixed,style:{float:"left"}})},data:n})}},735:function(e){e.exports={data:{logo:{childImageSharp:{fixed:{base64:"data:image/png;base64,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",width:50,height:60,src:"/static/a64620346ac3ce8d4580a3f07039fa3c/8469d/logo.png",srcSet:"/static/a64620346ac3ce8d4580a3f07039fa3c/8469d/logo.png 1x"}}}}}},736:function(e){e.exports={data:{config:{copyright:"Copyright © Act Labs",social:[{icon:"facebook",link:"https://www.facebook.com/ACT7LAB"},{icon:"github",link:"https://github.com/act-labs/gatsby-starter-act-blog"}]}}}},737:function(e){e.exports={data:{config:{nav:[{text:"home",slug:null},{text:"posts",slug:"/posts/"},{text:"snippets",slug:"/snippets/"}]}}}},738:function(e,t,a){"use strict";a(6);var n=a(138),r=(a(178),a(31)),o=a.n(r),s=(a(745),a(730),a(731)),i=a.n(s),c=a(736),m=a(0),l=a.n(m),p=a(34),d=i.a.Footer;function u(e){var t=e.social,a=e.copyright,r=t.map(function(e){var t=e.link,a=e.icon;return l.a.createElement(n.a,{key:a,to:t},l.a.createElement(o.a,{type:a,style:{fontSize:"24px",marginLeft:10,color:"rgba(0, 0, 0, 0.65)"}}))});return l.a.createElement(d,{style:{textAlign:"center"}},l.a.createElement("div",null,a,l.a.createElement("div",{style:{float:"right"}},r)))}function g(e){return e.social?l.a.createElement(u,e):l.a.createElement(p.b,{query:"2743462859",render:function(t){var a=t.config,n=a.social,r=a.copyright;return l.a.createElement(u,Object.assign({social:n,copyright:r},e))},data:c})}a(742);var h=a(741),f=a.n(h),y=a(734),b=a(737),E=i.a.Header;function v(e){var t=e.nav;return l.a.createElement(E,{className:"navigation-bar"},l.a.createElement(n.a,{to:"/"},l.a.createElement(y.a,null)),l.a.createElement(f.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:t.filter(function(e){return e.selected}).map(function(e){return e.text}),style:{lineHeight:"64px"}},t.map(function(e,t){var a=e.slug,r=e.text;return l.a.createElement(f.a.Item,{key:t},l.a.createElement(n.a,{to:a||"/"},r))})))}function w(e){return e.nav?l.a.createElement(v,e):l.a.createElement(p.b,{query:"1250442554",render:function(t){var a=t.config.nav;return l.a.createElement(v,Object.assign({nav:a},e))},data:b})}var M=a(732),T=a(14),A=a.n(T);a(671);a.d(t,"a",function(){return x});var D=i.a.Content,X=i.a.Sider;function k(e){var t=e.style,a=e.children,n=A()(e,["style","children"]);return l.a.createElement(D,Object.assign({style:Object.assign({padding:"5px 24px"},t)},n),a)}function x(e){var t=e.children,a=e.className,n=e.title,r=e.description,o=e.keywords,s=e.style,c=e.layout,m=Object.assign({},N,c),p=m.footer,d=m.fullHeight,u=Object.assign({},d?{height:"100%"}:null,s),h=(a?a+" ":"")+"page-layout";return l.a.createElement(i.a,{className:h,style:u},l.a.createElement(M.a,{title:n,keywords:o,description:r}),l.a.createElement(w,null),t,p?l.a.createElement(g,null):null)}var N={footer:!0};x.Panel=k,x.SideMenuPanel=function(e){var t=e.children,a=e.menu;return l.a.createElement(i.a,{style:{padding:"1em 0",background:"#fff",minHeight:1e3}},l.a.createElement(X,{width:200},a),l.a.createElement(k,null,t))}},740:function(e,t,a){"use strict";a(6);var n=a(138),r=(a(46),a(0)),o=a.n(r),s=a(884),i=a(746),c=a(747),m=a(748),l=a(749),p=a(750),d=a(751);s.a.registerLanguage("javascript",i.a),s.a.registerLanguage("sh",c.a),s.a.registerLanguage("markdown",m.a),s.a.registerLanguage("yaml",l.a),s.a.registerLanguage("dockerfile",p.a);var u=a(1);a.d(t,"a",function(){return h});var g={components:{code:function(e){var t="bash";if(e.className){var a=e.className.split("-");a.length>1&&(t=a[1])}return o.a.createElement(s.a,{language:t,style:d.github},e.children)},a:n.a}};function h(e){var t=Object.assign({},g,e),a=t.components,n=t.children;return o.a.createElement(u.MDXProvider,{components:a},n)}},753:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var n=a(740),r=(a(6),a(738)),o=a(0),s=a.n(o),i=(a(672),r.a.Panel);function c(e){var t=e.children,a=e.pageContext,o=Object.assign({frontmatter:{}},a),c=Object.assign({},{layout:o.layout},o.frontmatter);return s.a.createElement(r.a,c,s.a.createElement(i,{style:{paddingTop:"1em"}},c.title?s.a.createElement("h1",null,c.title):null,s.a.createElement(n.a,null,t)))}}}]);
//# sourceMappingURL=component---src-generated-posts-act-intro-js-80d8a02b9c4c75d38b8f.js.map