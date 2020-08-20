(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{710:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(242),i=n(14),s=n.n(i),c=n(15),l=n.n(c),m=n(1),p=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=null,n}return l()(t,e),t.prototype.render=function(){var e=this.props,t=e.components;s()(e,["components"]);return o.a.createElement(m.MDXTag,{name:"wrapper",components:t},o.a.createElement(m.MDXTag,{name:"p",components:t},'In articles about DDD, UI is often mentioned as a disposable (Infrastructure) layer. This probably was true\nfor "traditional" applications, where bulk of the logic resided on the servers interacting with users through generated static HTML. In contrast, today, it is not uncommon that main application logic lives in browser, in React and javascript code. Servers (or rather "serverless" cloud) just provide a disposable (interchangeable) persistance infrastructure. So, in many modern applications, UI (Javascript and React components) must contain Core, Domain and API layers (here I quite loosely follow onion architecture terminology). It seems to be instructive to try to map main DDD concepts and architecture layers onto constituent parts of React applications, analyzing possible implications for project structure, development methodology and tooling.'),o.a.createElement(r.a,null),o.a.createElement(m.MDXTag,{name:"h2",components:t},"Infrastructure and Core"),o.a.createElement(m.MDXTag,{name:"p",components:t},'As already mentioned, in React applications cloud based services may often function as Infrastructure. Common component libraries (Material Design, Ant Design, etc) also mostly belong to this layer. The code responsible for interaction with the cloud is a good candidate for the Core layer. The Core layer may also include some common components, used across whole application and forming distinctive application interface. This is mostly "atomic" components according to Atomic Design terminology. The Core code may live in separate directories or may even belong to sub-packages, orchestrated by bundlers like Rollup. The Core code is a good candidate for traditional Unit Testing. Visual components, tilted toward graphical design, could be developed/maintained using tools like Storybook.'),o.a.createElement(m.MDXTag,{name:"h2",components:t},"Domain and API"),o.a.createElement(m.MDXTag,{name:"p",components:t},"Though the boundaries between Infrastructure and Core layers are more or less clear (though in real life things may be quite fuzzy), the borders between Domain and API layers, and bounded contexts are inherently very subjective and prone to changes."),o.a.createElement(m.MDXTag,{name:"p",components:t},"In case of popular Redux architecture, bounded contexts tend to map to Redux modules. Corresponding Domain logic (and associated ",o.a.createElement(m.MDXTag,{name:"em",components:t,parentName:"p"},"Ubiquitous language"),") could be scattered across actions, reducers, selectors and Redux Sagas. Actions look like a good place to look for thoughtful naming conventions and API. Redux Sagas is a first stop when implementing complex Domain logic."),o.a.createElement(m.MDXTag,{name:"p",components:t},"It is quit natural to organize ",o.a.createElement(m.MDXTag,{name:"em",components:t,parentName:"p"},"Bounded contexts")," in separate folders/packages. In terms of testability, such code is relatively easy to test using common Node.js TDD frameworks like ",o.a.createElement(m.MDXTag,{name:"em",components:t,parentName:"p"},"Jest"),". Functional paradigm, favored by Redux, really shines in this area, especially in frameworks like Redux Sagas/",o.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"redux-saga-test-plan")," allowing to test every step of complex asynchronous algorithms."),o.a.createElement(m.MDXTag,{name:"p",components:t},"Quite surprisingly, in this architecture, by a method of exclusion, some compound React components also must belong to API and Domain layers. Which on the second thought is quite natural. For example, a typical application button may have a meaningful, domain specific name and usually is implemented using core application controls:"),o.a.createElement(m.MDXTag,{name:"pre",components:t},o.a.createElement(m.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-javascript"}},"const PersistOrderButton: React.FC = (other)=> {\n    return <PrimaryAppButton onClick={()=>dispatch(persistOrderCommand())} {...other}/>\n}\n")),o.a.createElement(m.MDXTag,{name:"p",components:t},"The look of such a button is transparently determined by Core application component (here ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"PrimaryAppButton"),"). In case of Redux, often, there is also one to one correspondence between many redux actions and buttons. This all makes us to think about buttons as belonging to API layer."),o.a.createElement(m.MDXTag,{name:"p",components:t},"The same applies to many other control components, which effectively could be equated to commands. The same logic also applies to components representing Entities. For example, in case of orders, ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<OrderItem/>")," components may represent OrderItem entities:"),o.a.createElement(m.MDXTag,{name:"pre",components:t},o.a.createElement(m.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-javascript"}},"const OrderItem: React.FC = ({id, ...other})=> {\n    const {name, qty} = useOrderItem(id)\n    return (\n        <ListItem {...other}>\n            <ListItemField>{name}</ListItemField>\n            <ListItemField>{qty}</ListItemField>\n        </ListItem>\n    )\n}\n")),o.a.createElement(m.MDXTag,{name:"p",components:t},"Here again, component view (appearance) is completely determined by generic core components (",o.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"ListItem")," and ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"ListItemField"),") and can chang without any modifications to the component itself. So the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"OrderItem")," and similar components could be classified as Domain or API components. The former could be the case when a component contains some non-trivial business logic, the later when it contains very little logic of its own and essentially serves as a frontend to Domain."),o.a.createElement(m.MDXTag,{name:"p",components:t},"Buttons and components representing entities/aggregates, when combined, provide quite a powerful and easy to use API to access and manipulate application entities. And such an API is a natural place for integration, BDD style testing. If someone sticks with BDD development process, one may start from a new test case for a new user story. And initially behavior could be tested in isolation on test pages containing API/Domain components identical to the ones used in an application, though, probably differently layered and spiced with additional/facilitating components. Such test pages can serve as both a project documentation/playground and as a fixture for ",o.a.createElement(m.MDXTag,{name:"em",components:t,parentName:"p"},"Cypress")," tests (yet another popular and convenient tool for tests running directly in the browser)."),o.a.createElement(m.MDXTag,{name:"p",components:t},"Not all compound components belong to API and Domain layers though. Pages, layering, template and adapter components form the presentation layer, which may change without any impact on Domain and evidently belongs to Infrastructure. Here we come to the realm of the end to end testing where, again, tools like Cypress come in handy."),o.a.createElement(m.MDXTag,{name:"h2",components:t},"Conclusion"),o.a.createElement(m.MDXTag,{name:"p",components:t},"From time to time, it could be useful to rethink application structure to accommodate for a new knowledge about business processes and/or to address technical issues and bottlenecks. Domain Driven Design, which recently grew in popularity and adoption across industry, is often viewed as a helpful paradigm, providing new, interesting ways to think about application architecture. Though conceived as a methodology for more  traditional client-server applications, DDD looks relevant and thought provoking when applied to purely React applications."))},t}(o.a.Component),u=n(758);function d(e){return o.a.createElement(u.a,e,o.a.createElement(p,e))}n.d(t,"default",function(){return d})},738:function(e,t,n){"use strict";n(46);var a=n(739),o=n(0),r=n.n(o),i=n(2),s=n.n(i),c=n(749),l=n.n(c),m=n(34);function p(e){var t=e.description,n=e.lang,o=e.meta,i=e.keywords,s=e.title;return r.a.createElement(m.b,{query:u,render:function(e){return"string"==typeof i&&(i=i.split(",").map(function(e){return e.trim()})),t=t||e.site.siteMetadata.description,r.a.createElement(l.a,{htmlAttributes:{lang:n},title:s,titleTemplate:"%s | "+e.site.siteMetadata.project,meta:[{name:"description",content:t},{property:"og:title",content:s},{property:"og:description",content:t},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:t}].concat(i?{name:"keywords",content:i.join(", ")}:[]).concat(o)})},data:a})}p.defaultProps={lang:"en",meta:[],keywords:null},p.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.oneOfType([s.a.string,s.a.arrayOf(s.a.string)]),title:s.a.string.isRequired},t.a=p;var u="304502870"},739:function(e){e.exports={data:{site:{siteMetadata:{project:"ACT blog",description:"React, Ant Design, Gatsby, GraphQl, and other web technologies",author:"Act Labs"}}}}},740:function(e,t,n){"use strict";n.d(t,"a",function(){return l});n(352);var a=n(741),o=n(0),r=n.n(o),i=n(34),s=n(231),c=n.n(s);function l(){return r.a.createElement(i.b,{query:"2369744027",render:function(e){return r.a.createElement(c.a,{fixed:e.logo.childImageSharp.fixed,style:{float:"left"}})},data:a})}},741:function(e){e.exports={data:{logo:{childImageSharp:{fixed:{base64:"data:image/png;base64,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",width:50,height:60,src:"/static/a64620346ac3ce8d4580a3f07039fa3c/8469d/logo.png",srcSet:"/static/a64620346ac3ce8d4580a3f07039fa3c/8469d/logo.png 1x"}}}}}},742:function(e){e.exports={data:{config:{copyright:"Copyright © Act Labs",social:[{icon:"facebook",link:"https://www.facebook.com/ACT7LAB"},{icon:"github",link:"https://github.com/act-labs/gatsby-starter-act-blog"}]}}}},743:function(e){e.exports={data:{config:{nav:[{text:"home",slug:null},{text:"posts",slug:"/posts/"},{text:"snippets",slug:"/snippets/"}]}}}},744:function(e,t,n){"use strict";n(6);var a=n(138),o=(n(178),n(31)),r=n.n(o),i=(n(750),n(736),n(737)),s=n.n(i),c=n(742),l=n(0),m=n.n(l),p=n(34),u=s.a.Footer;function d(e){var t=e.social,n=e.copyright,o=t.map(function(e){var t=e.link,n=e.icon;return m.a.createElement(a.a,{key:n,to:t},m.a.createElement(r.a,{type:n,style:{fontSize:"24px",marginLeft:10,color:"rgba(0, 0, 0, 0.65)"}}))});return m.a.createElement(u,{style:{textAlign:"center"}},m.a.createElement("div",null,n,m.a.createElement("div",{style:{float:"right"}},o)))}function g(e){return e.social?m.a.createElement(d,e):m.a.createElement(p.b,{query:"2743462859",render:function(t){var n=t.config,a=n.social,o=n.copyright;return m.a.createElement(d,Object.assign({social:a,copyright:o},e))},data:c})}n(748);var h=n(747),y=n.n(h),f=n(740),b=n(743),v=s.a.Header;function D(e){var t=e.nav;return m.a.createElement(v,{className:"navigation-bar"},m.a.createElement(a.a,{to:"/"},m.a.createElement(f.a,null)),m.a.createElement(y.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:t.filter(function(e){return e.selected}).map(function(e){return e.text}),style:{lineHeight:"64px"}},t.map(function(e,t){var n=e.slug,o=e.text;return m.a.createElement(y.a.Item,{key:t},m.a.createElement(a.a,{to:n||"/"},o))})))}function E(e){return e.nav?m.a.createElement(D,e):m.a.createElement(p.b,{query:"1250442554",render:function(t){var n=t.config.nav;return m.a.createElement(D,Object.assign({nav:n},e))},data:b})}var w=n(738),A=n(14),T=n.n(A);n(671);n.d(t,"a",function(){return x});var M=s.a.Content,k=s.a.Sider;function I(e){var t=e.style,n=e.children,a=T()(e,["style","children"]);return m.a.createElement(M,Object.assign({style:Object.assign({padding:"5px 24px"},t)},a),n)}function x(e){var t=e.children,n=e.className,a=e.title,o=e.description,r=e.keywords,i=e.style,c=e.layout,l=Object.assign({},X,c),p=l.footer,u=l.fullHeight,d=Object.assign({},u?{height:"100%"}:null,i),h=(n?n+" ":"")+"page-layout";return m.a.createElement(s.a,{className:h,style:d},m.a.createElement(w.a,{title:a,keywords:r,description:o}),m.a.createElement(E,null),t,p?m.a.createElement(g,null):null)}var X={footer:!0};x.Panel=I,x.SideMenuPanel=function(e){var t=e.children,n=e.menu;return m.a.createElement(s.a,{style:{padding:"1em 0",background:"#fff",minHeight:1e3}},m.a.createElement(k,{width:200},n),m.a.createElement(I,null,t))}},746:function(e,t,n){"use strict";n(6);var a=n(138),o=(n(46),n(0)),r=n.n(o),i=n(892),s=n(752),c=n(753),l=n(754),m=n(755),p=n(756),u=n(757);i.a.registerLanguage("javascript",s.a),i.a.registerLanguage("sh",c.a),i.a.registerLanguage("markdown",l.a),i.a.registerLanguage("yaml",m.a),i.a.registerLanguage("dockerfile",p.a);var d=n(1);n.d(t,"a",function(){return h});var g={components:{code:function(e){var t="bash";if(e.className){var n=e.className.split("-");n.length>1&&(t=n[1])}return r.a.createElement(i.a,{language:t,style:u.github},e.children)},a:a.a}};function h(e){var t=Object.assign({},g,e),n=t.components,a=t.children;return r.a.createElement(d.MDXProvider,{components:n},a)}},758:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(746),o=(n(6),n(744)),r=n(0),i=n.n(r),s=(n(672),o.a.Panel);function c(e){var t=e.children,n=e.pageContext,r=Object.assign({frontmatter:{}},n),c=Object.assign({},{layout:r.layout},r.frontmatter);return i.a.createElement(o.a,c,i.a.createElement(s,{style:{paddingTop:"1em"}},c.title?i.a.createElement("h1",null,c.title):null,i.a.createElement(a.a,null,t)))}}}]);
//# sourceMappingURL=component---src-generated-posts-ddd-in-react-js-59d144d7b9508edfa5bf.js.map