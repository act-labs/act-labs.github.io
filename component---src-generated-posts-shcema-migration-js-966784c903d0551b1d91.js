(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{704:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),i=a.n(o),s=a(15),c=a.n(s),l=a(1),m=function(e){function t(t){var a;return(a=e.call(this,t)||this).layout=null,a}return c()(t,e),t.prototype.render=function(){var e=this.props,t=e.components;i()(e,["components"]);return r.a.createElement(l.MDXTag,{name:"wrapper",components:t},r.a.createElement(l.MDXTag,{name:"p",components:t},"Our sample Express and MySql ",r.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/posts/mysql-express/",title:"Express and MySql. Simple Contact Us form"}},"Contact Us application")," may potentially require schema updates in the future. Schema updates could be tricky, especially when applied to big databases in production. To avoid problems in the future and simplify maintenance, our project from the start adopts certain best practices."),r.a.createElement(l.MDXTag,{name:"h2",components:t},"Migration scripts"),r.a.createElement(l.MDXTag,{name:"p",components:t},"I put all DDL statements for the project in a separate directory ",r.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"/src/sql/migrations")," in files following ",r.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"VXXXX_XXX__description.sql")," pattern. Schema updates from multiple files are usually applied by many database utilities in an alphabetical order. So newer updates should go in files with higher version numbers (a new file is strictly required as soon as a previous update was used in a production). In our simple example, the first SQL command creating database table goes into file ",r.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"V0001_001__createContactUsTable.sql"),":"),r.a.createElement(l.MDXTag,{name:"pre",components:t},r.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-sql"}},"CREATE TABLE IF NOT EXISTS CONTACT_US (\n    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,\n    created DATETIME DEFAULT CURRENT_TIMESTAMP,\n    first_name varchar(25),\n    last_name varchar(25),\n    phone varchar(25),\n    address varchar(255),\n    email varchar(50),\n    message text\n)\n")),r.a.createElement(l.MDXTag,{name:"h2",components:t},"MySql containers for development and production"),r.a.createElement(l.MDXTag,{name:"p",components:t},"For development we may build a simple container with a schema built in, which is luckily pretty simple. Here is a Dockerfile:"),r.a.createElement(l.MDXTag,{name:"pre",components:t},r.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-dockerfile"}},"FROM mysql:5.7\n\nCOPY . /docker-entrypoint-initdb.d/\n")),r.a.createElement(l.MDXTag,{name:"p",components:t},"A new image is built from standard MySql Docker image, all migration scripts are copied into ",r.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"/docker-entrypoint-initdb.d/")," directory, where they will be executed in alphabetical order on every container start up. In our case, Docker image creation could be automated using ",r.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"yarn"),":"),r.a.createElement(l.MDXTag,{name:"pre",components:t},r.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-json"}},'    "build": "cd ./src/sql/migrations && docker build -t schema-mysql ."\n')),r.a.createElement(l.MDXTag,{name:"p",components:t},"To check the result, one may connect to a running container and use standard command line utilities:"),r.a.createElement(l.MDXTag,{name:"pre",components:t},r.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-sh"}},"docker exec -it js-test-mysql bash\n$ mysql -uroot -p\nEnter password: (jstest)\nmysql> show databases;\n+--------------------+\n| Database           |\n+--------------------+\n| information_schema |\n| jstest             |\n| mysql              |\n| performance_schema |\n| sys                |\n+--------------------+\n5 rows in set (0.00 sec)\nmysql> use jstest;\nmysql> show tables;\n...................\n")),r.a.createElement(l.MDXTag,{name:"p",components:t},"While this method works for development, in production environment it is better to keep database tables in a mounted volume. To manage updates there, tools like Flyway, could be used. Such tools usually can connect to the database, select smartly missing updates and apply them correctly (based on file version number) ."))},t}(r.a.Component),p=a(758);function u(e){return r.a.createElement(p.a,e,r.a.createElement(m,e))}a.d(t,"default",function(){return u})},738:function(e,t,a){"use strict";a(46);var n=a(739),r=a(0),o=a.n(r),i=a(2),s=a.n(i),c=a(749),l=a.n(c),m=a(34);function p(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,s=e.title;return o.a.createElement(m.b,{query:u,render:function(e){return"string"==typeof i&&(i=i.split(",").map(function(e){return e.trim()})),t=t||e.site.siteMetadata.description,o.a.createElement(l.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+e.site.siteMetadata.project,meta:[{name:"description",content:t},{property:"og:title",content:s},{property:"og:description",content:t},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:t}].concat(i?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:n})}p.defaultProps={lang:"en",meta:[],keywords:null},p.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.oneOfType([s.a.string,s.a.arrayOf(s.a.string)]),title:s.a.string.isRequired},t.a=p;var u="304502870"},739:function(e){e.exports={data:{site:{siteMetadata:{project:"ACT blog",description:"React, Ant Design, Gatsby, GraphQl, and other web technologies",author:"Act Labs"}}}}},740:function(e,t,a){"use strict";a.d(t,"a",function(){return l});a(352);var n=a(741),r=a(0),o=a.n(r),i=a(34),s=a(231),c=a.n(s);function l(){return o.a.createElement(i.b,{query:"2369744027",render:function(e){return o.a.createElement(c.a,{fixed:e.logo.childImageSharp.fixed,style:{float:"left"}})},data:n})}},741:function(e){e.exports={data:{logo:{childImageSharp:{fixed:{base64:"data:image/png;base64,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",width:50,height:60,src:"/static/a64620346ac3ce8d4580a3f07039fa3c/8469d/logo.png",srcSet:"/static/a64620346ac3ce8d4580a3f07039fa3c/8469d/logo.png 1x"}}}}}},742:function(e){e.exports={data:{config:{copyright:"Copyright © Act Labs",social:[{icon:"facebook",link:"https://www.facebook.com/ACT7LAB"},{icon:"github",link:"https://github.com/act-labs/gatsby-starter-act-blog"}]}}}},743:function(e){e.exports={data:{config:{nav:[{text:"home",slug:null},{text:"posts",slug:"/posts/"},{text:"snippets",slug:"/snippets/"}]}}}},744:function(e,t,a){"use strict";a(6);var n=a(138),r=(a(178),a(31)),o=a.n(r),i=(a(750),a(736),a(737)),s=a.n(i),c=a(742),l=a(0),m=a.n(l),p=a(34),u=s.a.Footer;function d(e){var t=e.social,a=e.copyright,r=t.map(function(e){var t=e.link,a=e.icon;return m.a.createElement(n.a,{key:a,to:t},m.a.createElement(o.a,{type:a,style:{fontSize:"24px",marginLeft:10,color:"rgba(0, 0, 0, 0.65)"}}))});return m.a.createElement(u,{style:{textAlign:"center"}},m.a.createElement("div",null,a,m.a.createElement("div",{style:{float:"right"}},r)))}function g(e){return e.social?m.a.createElement(d,e):m.a.createElement(p.b,{query:"2743462859",render:function(t){var a=t.config,n=a.social,r=a.copyright;return m.a.createElement(d,Object.assign({social:n,copyright:r},e))},data:c})}a(748);var y=a(747),f=a.n(y),h=a(740),E=a(743),b=s.a.Header;function v(e){var t=e.nav;return m.a.createElement(b,{className:"navigation-bar"},m.a.createElement(n.a,{to:"/"},m.a.createElement(h.a,null)),m.a.createElement(f.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:t.filter(function(e){return e.selected}).map(function(e){return e.text}),style:{lineHeight:"64px"}},t.map(function(e,t){var a=e.slug,r=e.text;return m.a.createElement(f.a.Item,{key:t},m.a.createElement(n.a,{to:a||"/"},r))})))}function M(e){return e.nav?m.a.createElement(v,e):m.a.createElement(p.b,{query:"1250442554",render:function(t){var a=t.config.nav;return m.a.createElement(v,Object.assign({nav:a},e))},data:E})}var T=a(738),A=a(14),w=a.n(A);a(671);a.d(t,"a",function(){return N});var D=s.a.Content,X=s.a.Sider;function k(e){var t=e.style,a=e.children,n=w()(e,["style","children"]);return m.a.createElement(D,Object.assign({style:Object.assign({padding:"5px 24px"},t)},n),a)}function N(e){var t=e.children,a=e.className,n=e.title,r=e.description,o=e.keywords,i=e.style,c=e.layout,l=Object.assign({},q,c),p=l.footer,u=l.fullHeight,d=Object.assign({},u?{height:"100%"}:null,i),y=(a?a+" ":"")+"page-layout";return m.a.createElement(s.a,{className:y,style:d},m.a.createElement(T.a,{title:n,keywords:o,description:r}),m.a.createElement(M,null),t,p?m.a.createElement(g,null):null)}var q={footer:!0};N.Panel=k,N.SideMenuPanel=function(e){var t=e.children,a=e.menu;return m.a.createElement(s.a,{style:{padding:"1em 0",background:"#fff",minHeight:1e3}},m.a.createElement(X,{width:200},a),m.a.createElement(k,null,t))}},746:function(e,t,a){"use strict";a(6);var n=a(138),r=(a(46),a(0)),o=a.n(r),i=a(892),s=a(752),c=a(753),l=a(754),m=a(755),p=a(756),u=a(757);i.a.registerLanguage("javascript",s.a),i.a.registerLanguage("sh",c.a),i.a.registerLanguage("markdown",l.a),i.a.registerLanguage("yaml",m.a),i.a.registerLanguage("dockerfile",p.a);var d=a(1);a.d(t,"a",function(){return y});var g={components:{code:function(e){var t="bash";if(e.className){var a=e.className.split("-");a.length>1&&(t=a[1])}return o.a.createElement(i.a,{language:t,style:u.github},e.children)},a:n.a}};function y(e){var t=Object.assign({},g,e),a=t.components,n=t.children;return o.a.createElement(d.MDXProvider,{components:a},n)}},758:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var n=a(746),r=(a(6),a(744)),o=a(0),i=a.n(o),s=(a(672),r.a.Panel);function c(e){var t=e.children,a=e.pageContext,o=Object.assign({frontmatter:{}},a),c=Object.assign({},{layout:o.layout},o.frontmatter);return i.a.createElement(r.a,c,i.a.createElement(s,{style:{paddingTop:"1em"}},c.title?i.a.createElement("h1",null,c.title):null,i.a.createElement(n.a,null,t)))}}}]);
//# sourceMappingURL=component---src-generated-posts-shcema-migration-js-966784c903d0551b1d91.js.map