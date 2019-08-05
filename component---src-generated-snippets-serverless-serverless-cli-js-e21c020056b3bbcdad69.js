(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{475:function(e,t,n){"use strict";n.r(t);n(8);var r=n(0),a=n.n(r),s=n(7),i=n.n(s),o=n(4),l=n.n(o),c=n(1),u=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=null,n}return l()(t,e),t.prototype.render=function(){var e=this.props,t=e.components;i()(e,["components"]);return a.a.createElement(c.MDXTag,{name:"wrapper",components:t},a.a.createElement(c.MDXTag,{name:"p",components:t},"A few useful serverless CLI commands"),a.a.createElement(c.MDXTag,{name:"pre",components:t},a.a.createElement(c.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-sh"}},"# Install the serverless cli\nnpm install -g serverless\n\n# create new AWS with Javascript lambda\nserverless create --template  aws-nodejs --path example\n\n# create new AWS python 3 lambda\nserverless create --template aws-python3 --path example\n\n# configure credentials\nserverless config credentials --provider aws --key AKIAIOSFODNN7EXAMPLE --secret wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY\n")))},t}(a.a.Component),m=n(501),p=n(490);function d(e){var t=Object.assign({},e,{pageContext:Object.assign({},e.pageContext,m)});return a.a.createElement(p.a,t,a.a.createElement(u,t))}n.d(t,"default",function(){return d})},479:function(e,t,n){"use strict";n(57);var r=n(480),a=n(0),s=n.n(a),i=n(2),o=n.n(i),l=n(491),c=n.n(l),u=n(34);function m(e){var t=e.description,n=e.lang,a=e.meta,i=e.keywords,o=e.title;return s.a.createElement(u.b,{query:p,render:function(e){return"string"==typeof i&&(i=i.split(",").map(function(e){return e.trim()})),t=t||e.site.siteMetadata.description,s.a.createElement(c.a,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s | "+e.site.siteMetadata.project,meta:[{name:"description",content:t},{property:"og:title",content:o},{property:"og:description",content:t},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:t}].concat(i?{name:"keywords",content:i.join(", ")}:[]).concat(a)})},data:r})}m.defaultProps={lang:"en",meta:[],keywords:null},m.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.oneOfType([o.a.string,o.a.arrayOf(o.a.string)]),title:o.a.string.isRequired},t.a=m;var p="304502870"},480:function(e){e.exports={data:{site:{siteMetadata:{project:"ACT blog",description:"React, Ant Design, Gatsby, GraphQl, and other web technologies",author:"Act Labs"}}}}},481:function(e,t,n){"use strict";n.d(t,"a",function(){return c});n(252);var r=n(482),a=n(0),s=n.n(a),i=n(34),o=n(159),l=n.n(o);function c(){return s.a.createElement(i.b,{query:"2369744027",render:function(e){return s.a.createElement(l.a,{fixed:e.logo.childImageSharp.fixed,style:{float:"left"}})},data:r})}},482:function(e){e.exports={data:{logo:{childImageSharp:{fixed:{base64:"data:image/png;base64,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",width:50,height:60,src:"/static/a64620346ac3ce8d4580a3f07039fa3c/8469d/logo.png",srcSet:"/static/a64620346ac3ce8d4580a3f07039fa3c/8469d/logo.png 1x"}}}}}},483:function(e){e.exports={data:{config:{copyright:"Copyright © Act Labs",social:[{icon:"facebook",link:"https://www.facebook.com/ACT7LAB"},{icon:"github",link:"https://github.com/act-labs/gatsby-starter-act-blog"}]}}}},484:function(e){e.exports={data:{config:{nav:[{text:"home",slug:null},{text:"posts",slug:"/posts/"},{text:"snippets",slug:"/snippets/"}]}}}},485:function(e,t,n){"use strict";n(8);var r=n(93),a=(n(158),n(43)),s=n.n(a),i=(n(492),n(477),n(478)),o=n.n(i),l=n(483),c=n(0),u=n.n(c),m=n(34),p=o.a.Footer;function d(e){var t=e.social,n=e.copyright,a=t.map(function(e){var t=e.link,n=e.icon;return u.a.createElement(r.a,{key:n,to:t},u.a.createElement(s.a,{type:n,style:{fontSize:"24px",marginLeft:10,color:"rgba(0, 0, 0, 0.65)"}}))});return u.a.createElement(p,{style:{textAlign:"center"}},u.a.createElement("div",null,n,u.a.createElement("div",{style:{float:"right"}},a)))}function g(e){return e.social?u.a.createElement(d,e):u.a.createElement(m.b,{query:"2743462859",render:function(t){var n=t.config,r=n.social,a=n.copyright;return u.a.createElement(d,Object.assign({social:r,copyright:a},e))},data:l})}n(489);var f=n(488),v=n.n(f),y=n(481),h=n(484),E=o.a.Header;function b(e){var t=e.nav;return u.a.createElement(E,{className:"navigation-bar"},u.a.createElement(r.a,{to:"/"},u.a.createElement(y.a,null)),u.a.createElement(v.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:t.filter(function(e){return e.selected}).map(function(e){return e.text}),style:{lineHeight:"64px"}},t.map(function(e,t){var n=e.slug,a=e.text;return u.a.createElement(v.a.Item,{key:t},u.a.createElement(r.a,{to:n||"/"},a))})))}function A(e){return e.nav?u.a.createElement(b,e):u.a.createElement(m.b,{query:"1250442554",render:function(t){var n=t.config.nav;return u.a.createElement(b,Object.assign({nav:n},e))},data:h})}var w=n(479),O=n(7),k=n.n(O);n(421);n.d(t,"a",function(){return K});var x=o.a.Content,M=o.a.Sider;function D(e){var t=e.style,n=e.children,r=k()(e,["style","children"]);return u.a.createElement(x,Object.assign({style:Object.assign({padding:"5px 24px"},t)},r),n)}function K(e){var t=e.children,n=e.className,r=e.title,a=e.description,s=e.keywords,i=e.style,l=e.layout,c=Object.assign({},Q,l),m=c.footer,p=c.fullHeight,d=Object.assign({},p?{height:"100%"}:null,i),f=(n?n+" ":"")+"page-layout";return u.a.createElement(o.a,{className:f,style:d},u.a.createElement(w.a,{title:r,keywords:s,description:a}),u.a.createElement(A,null),t,m?u.a.createElement(g,null):null)}var Q={footer:!0};K.Panel=D,K.SideMenuPanel=function(e){var t=e.children,n=e.menu;return u.a.createElement(o.a,{style:{padding:"1em 0",background:"#fff",minHeight:1e3}},u.a.createElement(M,{width:200},n),u.a.createElement(D,null,t))}},487:function(e,t,n){"use strict";n(8);var r=n(93),a=(n(57),n(0)),s=n.n(a),i=n(668),o=n(494),l=n(495),c=n(496),u=n(497),m=n(498),p=n(499);i.a.registerLanguage("javascript",o.a),i.a.registerLanguage("sh",l.a),i.a.registerLanguage("markdown",c.a),i.a.registerLanguage("yaml",u.a),i.a.registerLanguage("dockerfile",m.a);var d=n(1);n.d(t,"a",function(){return f});var g={components:{code:function(e){var t="bash";if(e.className){var n=e.className.split("-");n.length>1&&(t=n[1])}return s.a.createElement(i.a,{language:t,style:p.github},e.children)},a:r.a}};function f(e){var t=Object.assign({},g,e),n=t.components,r=t.children;return s.a.createElement(d.MDXProvider,{components:n},r)}},490:function(e,t,n){"use strict";var r=n(487),a=(n(158),n(43)),s=n.n(a),i=n(93),o=(n(489),n(488)),l=n.n(o),c=n(0),u=n.n(c),m=l.a.SubMenu;function p(e){var t=e.menu,n=e.items,r=e.location,a=r.pathname;n.forEach(function(e){e.current=e.slug===a});var o=Object(c.useState)(function(){return function(e){var t=e.menu,n=e.location,r=e.path;if(n.state&&n.state.openKeys){var a=t.filter(function(e){return e.submenu.some(function(e){return e.slug===r})}).map(function(e){return String(e.order)});return[].concat(n.state.openKeys,a.filter(function(e){return-1===n.state.openKeys.indexOf(e)}))}return t.map(function(e){return String(e.order)})}({menu:t,location:r,path:a})}),p=o[0],d=o[1];var g=n.filter(function(e){return e.current}).map(function(e){return String(e.order)});return u.a.createElement(l.a,{mode:"inline",defaultSelectedKeys:g,defaultOpenKeys:p,style:{height:"100%"},onOpenChange:function(e){d(e)}},t.map(function(e){return u.a.createElement(m,{key:e.order,title:u.a.createElement("span",null,u.a.createElement(s.a,{type:e.icon}),e.text)},e.submenu.map(function(e){return function(e){var t=e.item,n=t.title,r=t.order,a=e.items,s=e.openKeys,o=a[parseInt(r)].slug;return u.a.createElement(l.a.Item,{key:r},u.a.createElement(i.a,{to:o,state:{openKeys:s}},n))}({item:e,items:n,openKeys:p})}))}))}n(8);var d=n(485);n.d(t,"a",function(){return f});var g=d.a.SideMenuPanel;function f(e){var t=e.pageContext,n=e.children,a=e.location,s=Object.assign({frontmatter:{}},t),i=s.menu,o=s.items,l=Object.assign({},{layout:s.layout},s.frontmatter);return u.a.createElement(d.a,l,u.a.createElement(g,{menu:u.a.createElement(p,{menu:i,items:o,location:a})},u.a.createElement(r.a,null,n)))}},501:function(e){e.exports={menu:[{text:"serverless",icon:"bars",order:0,submenu:[{slug:"/snippets/serverless/serverless-cli/",parent:"serverless",title:"cli",order:2},{slug:"/snippets/serverless/docker/",parent:"serverless",title:"docker",order:3},{slug:"/snippets/serverless/serverless-layers/",parent:"serverless",title:"layers",order:4},{slug:"/snippets/serverless/request-parameters/",parent:"serverless",title:"request parameters",order:5}]},{text:"DynamoDB",icon:"database",order:1,submenu:[{slug:"/snippets/serverless/dynamodb-streams-configuration/",parent:"DynamoDB",title:"streams",order:1}]}],items:[{slug:"/snippets/serverless/aws-intro/",parent:"$",order:0},{slug:"/snippets/serverless/dynamodb-streams-configuration/",parent:"DynamoDB",title:"streams",order:1},{slug:"/snippets/serverless/serverless-cli/",parent:"serverless",title:"cli",order:2},{slug:"/snippets/serverless/docker/",parent:"serverless",title:"docker",order:3},{slug:"/snippets/serverless/serverless-layers/",parent:"serverless",title:"layers",order:4},{slug:"/snippets/serverless/request-parameters/",parent:"serverless",title:"request parameters",order:5}]}}}]);
//# sourceMappingURL=component---src-generated-snippets-serverless-serverless-cli-js-e21c020056b3bbcdad69.js.map