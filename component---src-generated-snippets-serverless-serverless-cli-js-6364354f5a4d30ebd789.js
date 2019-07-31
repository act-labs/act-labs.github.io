(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{465:function(e,t,n){"use strict";n.r(t);n(8);var a=n(0),r=n.n(a),o=n(7),s=n.n(o),i=n(4),c=n.n(i),l=n(1),u=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=null,n}return c()(t,e),t.prototype.render=function(){var e=this.props,t=e.components;s()(e,["components"]);return r.a.createElement(l.MDXTag,{name:"wrapper",components:t},r.a.createElement(l.MDXTag,{name:"p",components:t},"A few usefull serverless CLI commands"),r.a.createElement(l.MDXTag,{name:"pre",components:t},r.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-sh"}},"# Install the serverless cli\nnpm install -g serverless\n\n# create new AWS with Javascript lambda\nserverless create --template  aws-nodejs --path example\n\n# configure credentials\nserverless config credentials --provider aws --key AKIAIOSFODNN7EXAMPLE --secret wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY\n")))},t}(r.a.Component),m=n(498),p=n(484);function g(e){var t=Object.assign({},e,{pageContext:Object.assign({},e.pageContext,m)});return r.a.createElement(p.a,t,r.a.createElement(u,t))}n.d(t,"default",function(){return g})},473:function(e,t,n){"use strict";n(57);var a=n(474),r=n(0),o=n.n(r),s=n(2),i=n.n(s),c=n(486),l=n.n(c),u=n(34);function m(e){var t=e.description,n=e.lang,r=e.meta,s=e.keywords,i=e.title;return o.a.createElement(u.b,{query:p,render:function(e){return"string"==typeof s&&(s=s.split(",").map(function(e){return e.trim()})),t=t||e.site.siteMetadata.description,o.a.createElement(l.a,{htmlAttributes:{lang:n},title:i,titleTemplate:"%s | "+e.site.siteMetadata.project,meta:[{name:"description",content:t},{property:"og:title",content:i},{property:"og:description",content:t},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:t}].concat(s?{name:"keywords",content:s.join(", ")}:[]).concat(r)})},data:a})}m.defaultProps={lang:"en",meta:[],keywords:null},m.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.oneOfType([i.a.string,i.a.arrayOf(i.a.string)]),title:i.a.string.isRequired},t.a=m;var p="304502870"},474:function(e){e.exports={data:{site:{siteMetadata:{project:"ACT blog",description:"React, Ant Design, Gatsby, GraphQl, and other web technologies",author:"Act Labs"}}}}},475:function(e,t,n){"use strict";n.d(t,"a",function(){return l});n(252);var a=n(476),r=n(0),o=n.n(r),s=n(34),i=n(158),c=n.n(i);function l(){return o.a.createElement(s.b,{query:"2369744027",render:function(e){return o.a.createElement(c.a,{fixed:e.logo.childImageSharp.fixed,style:{float:"left"}})},data:a})}},476:function(e){e.exports={data:{logo:{childImageSharp:{fixed:{base64:"data:image/png;base64,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",width:50,height:60,src:"/static/24243787906a1f19048f79ada574a876/8469d/logo.png",srcSet:"/static/24243787906a1f19048f79ada574a876/8469d/logo.png 1x,\n/static/24243787906a1f19048f79ada574a876/1d933/logo.png 1.5x,\n/static/24243787906a1f19048f79ada574a876/90789/logo.png 2x"}}}}}},477:function(e){e.exports={data:{config:{copyright:"Copyright © Act Labs",social:[{icon:"facebook",link:"https://www.facebook.com/ACT7LAB"},{icon:"github",link:"https://github.com/act-labs/gatsby-starter-act-blog"}]}}}},478:function(e){e.exports={data:{config:{nav:[{text:"home",slug:null},{text:"posts",slug:"/posts/"},{text:"snippets",slug:"/snippets/"}]}}}},479:function(e,t,n){"use strict";n(8);var a=n(93),r=(n(157),n(43)),o=n.n(r),s=(n(487),n(471),n(472)),i=n.n(s),c=n(477),l=n(0),u=n.n(l),m=n(34),p=i.a.Footer;function g(e){var t=e.social,n=e.copyright,r=t.map(function(e){var t=e.link,n=e.icon;return u.a.createElement(a.a,{key:n,to:t},u.a.createElement(o.a,{type:n,style:{fontSize:"24px",marginLeft:10,color:"rgba(0, 0, 0, 0.65)"}}))});return u.a.createElement(p,{style:{textAlign:"center"}},u.a.createElement("div",null,n,u.a.createElement("div",{style:{float:"right"}},r)))}function d(e){return e.social?u.a.createElement(g,e):u.a.createElement(m.b,{query:"2743462859",render:function(t){var n=t.config,a=n.social,r=n.copyright;return u.a.createElement(g,Object.assign({social:a,copyright:r},e))},data:c})}n(483);var f=n(480),y=n.n(f),E=n(475),v=n(478),h=i.a.Header;function b(e){var t=e.nav;return u.a.createElement(h,{className:"navigation-bar"},u.a.createElement(a.a,{to:"/"},u.a.createElement(E.a,null)),u.a.createElement(y.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:t.filter(function(e){return e.selected}).map(function(e){return e.text}),style:{lineHeight:"64px"}},t.map(function(e,t){var n=e.slug,r=e.text;return u.a.createElement(y.a.Item,{key:t},u.a.createElement(a.a,{to:n||"/"},r))})))}function A(e){return e.nav?u.a.createElement(b,e):u.a.createElement(m.b,{query:"1250442554",render:function(t){var n=t.config.nav;return u.a.createElement(b,Object.assign({nav:n},e))},data:v})}var w=n(473),x=n(7),k=n.n(x);n(420);n.d(t,"a",function(){return S});var N=i.a.Content,L=i.a.Sider;function M(e){var t=e.style,n=e.children,a=k()(e,["style","children"]);return u.a.createElement(N,Object.assign({style:Object.assign({padding:"5px 24px"},t)},a),n)}function S(e){var t=e.children,n=e.className,a=e.title,r=e.description,o=e.keywords,s=e.style,c=e.layout,l=Object.assign({},C,c),m=l.footer,p=l.fullHeight,g=Object.assign({},p?{height:"100%"}:null,s),f=(n?n+" ":"")+"page-layout";return u.a.createElement(i.a,{className:f,style:g},u.a.createElement(w.a,{title:a,keywords:o,description:r}),u.a.createElement(A,null),t,m?u.a.createElement(d,null):null)}var C={footer:!0};S.Panel=M,S.SideMenuPanel=function(e){var t=e.children,n=e.menu;return u.a.createElement(i.a,{style:{padding:"1em 0",background:"#fff",minHeight:1e3}},u.a.createElement(L,{width:200},n),u.a.createElement(M,null,t))}},482:function(e,t,n){"use strict";n(8);var a=n(93),r=(n(57),n(0)),o=n.n(r),s=n(660),i=n(488),c=n(489),l=n(490),u=n(491),m=n(492);s.a.registerLanguage("javascript",i.a),s.a.registerLanguage("sh",c.a),s.a.registerLanguage("markdown",l.a),s.a.registerLanguage("yaml",u.a);var p=n(1);n.d(t,"a",function(){return d});var g={components:{code:function(e){var t="bash";if(e.className){var n=e.className.split("-");n.length>1&&(t=n[1])}return o.a.createElement(s.a,{language:t,style:m.github},e.children)},a:a.a}};function d(e){var t=Object.assign({},g,e),n=t.components,a=t.children;return o.a.createElement(p.MDXProvider,{components:n},a)}},484:function(e,t,n){"use strict";var a=n(482),r=(n(157),n(43)),o=n.n(r),s=n(93),i=(n(483),n(480)),c=n.n(i),l=n(0),u=n.n(l),m=c.a.SubMenu;function p(e){var t=e.menu,n=e.items,a=e.location,r=a.pathname;n.forEach(function(e){e.current=e.slug===r});var i=Object(l.useState)(function(){return function(e){var t=e.menu,n=e.location,a=e.path;if(n.state&&n.state.openKeys){var r=t.filter(function(e){return e.submenu.some(function(e){return e.slug===a})}).map(function(e){return String(e.order)});return[].concat(n.state.openKeys,r.filter(function(e){return-1===n.state.openKeys.indexOf(e)}))}return t.map(function(e){return String(e.order)})}({menu:t,location:a,path:r})}),p=i[0],g=i[1];var d=n.filter(function(e){return e.current}).map(function(e){return String(e.order)});return u.a.createElement(c.a,{mode:"inline",defaultSelectedKeys:d,defaultOpenKeys:p,style:{height:"100%"},onOpenChange:function(e){g(e)}},t.map(function(e){return u.a.createElement(m,{key:e.order,title:u.a.createElement("span",null,u.a.createElement(o.a,{type:e.icon}),e.text)},e.submenu.map(function(e){return function(e){var t=e.item,n=t.title,a=t.order,r=e.items,o=e.openKeys,i=r[parseInt(a)].slug;return u.a.createElement(c.a.Item,{key:a},u.a.createElement(s.a,{to:i,state:{openKeys:o}},n))}({item:e,items:n,openKeys:p})}))}))}n(8);var g=n(479);n.d(t,"a",function(){return f});var d=g.a.SideMenuPanel;function f(e){var t=e.pageContext,n=e.children,r=e.location,o=Object.assign({frontmatter:{}},t),s=o.menu,i=o.items,c=Object.assign({},{layout:o.layout},o.frontmatter);return u.a.createElement(g.a,c,u.a.createElement(d,{menu:u.a.createElement(p,{menu:s,items:i,location:r})},u.a.createElement(a.a,null,n)))}},498:function(e){e.exports={menu:[{text:"serverless",icon:"bars",order:0,submenu:[{slug:"/snippets/serverless/serverless-cli/",parent:"serverless",title:"cli",order:2}]},{text:"DynamoDB",icon:"database",order:1,submenu:[{slug:"/snippets/serverless/dynamodb-streams-configuration/",parent:"DynamoDB",title:"streams",order:1}]}],items:[{slug:"/snippets/serverless/aws-intro/",parent:"$",order:0},{slug:"/snippets/serverless/dynamodb-streams-configuration/",parent:"DynamoDB",title:"streams",order:1},{slug:"/snippets/serverless/serverless-cli/",parent:"serverless",title:"cli",order:2}]}}}]);
//# sourceMappingURL=component---src-generated-snippets-serverless-serverless-cli-js-6364354f5a4d30ebd789.js.map