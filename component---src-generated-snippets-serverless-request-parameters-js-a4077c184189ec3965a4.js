(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{716:function(e,t,n){"use strict";n.r(t);n(6);var a=n(0),r=n.n(a),s=n(14),o=n.n(s),i=n(15),c=n.n(i),l=n(1),u=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=null,n}return c()(t,e),t.prototype.render=function(){var e=this.props,t=e.components;o()(e,["components"]);return r.a.createElement(l.MDXTag,{name:"wrapper",components:t},r.a.createElement(l.MDXTag,{name:"p",components:t},"Configure HTTP endpoint with ",r.a.createElement(l.MDXTag,{name:"em",components:t,parentName:"p"},"path variable"),":"),r.a.createElement(l.MDXTag,{name:"pre",components:t},r.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-yaml"}},"# serverless.yml \nfunctions:\n  create:\n    handler: user.get\n    events:\n      - http:\n          path: user/{id}\n          method: get\n          request:\n            parameters:\n              paths:\n                id: true\n")),r.a.createElement(l.MDXTag,{name:"p",components:t},"To use path variable in a lambda function:"),r.a.createElement(l.MDXTag,{name:"pre",components:t},r.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-javascript"}},"// handler.js file\nmodule.exports.get = (event, context, callback) => {\n  var id= event.pathParameters.id;\n  console.log(id);\n}\n")),r.a.createElement(l.MDXTag,{name:"p",components:t},"Configure request parameters:"),r.a.createElement(l.MDXTag,{name:"pre",components:t},r.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-yaml"}},"# serverless.yml \nfunctions:\n  create:\n    handler: posts.create\n    events:\n      - http:\n          path: posts/create\n          method: post\n          request:\n            parameters:\n              querystrings:\n                url: true\n")),r.a.createElement(l.MDXTag,{name:"p",components:t},"And the matching handler code:"),r.a.createElement(l.MDXTag,{name:"pre",components:t},r.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-javascript"}},"// handler.js file\nmodule.exports.create = (event, context, callback) => {\n  var url = event.queryStringParameters.url;\n  console.log(url);\n}\n")))},t}(r.a.Component),m=n(749),p=n(738);function g(e){var t=Object.assign({},e,{pageContext:Object.assign({},e.pageContext,m)});return r.a.createElement(p.a,t,r.a.createElement(u,t))}n.d(t,"default",function(){return g})},727:function(e,t,n){"use strict";n(46);var a=n(728),r=n(0),s=n.n(r),o=n(2),i=n.n(o),c=n(739),l=n.n(c),u=n(34);function m(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,i=e.title;return s.a.createElement(u.b,{query:p,render:function(e){return"string"==typeof o&&(o=o.split(",").map(function(e){return e.trim()})),t=t||e.site.siteMetadata.description,s.a.createElement(l.a,{htmlAttributes:{lang:n},title:i,titleTemplate:"%s | "+e.site.siteMetadata.project,meta:[{name:"description",content:t},{property:"og:title",content:i},{property:"og:description",content:t},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:t}].concat(o?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}m.defaultProps={lang:"en",meta:[],keywords:null},m.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.oneOfType([i.a.string,i.a.arrayOf(i.a.string)]),title:i.a.string.isRequired},t.a=m;var p="304502870"},728:function(e){e.exports={data:{site:{siteMetadata:{project:"ACT blog",description:"React, Ant Design, Gatsby, GraphQl, and other web technologies",author:"Act Labs"}}}}},729:function(e,t,n){"use strict";n.d(t,"a",function(){return l});n(352);var a=n(730),r=n(0),s=n.n(r),o=n(34),i=n(231),c=n.n(i);function l(){return s.a.createElement(o.b,{query:"2369744027",render:function(e){return s.a.createElement(c.a,{fixed:e.logo.childImageSharp.fixed,style:{float:"left"}})},data:a})}},730:function(e){e.exports={data:{logo:{childImageSharp:{fixed:{base64:"data:image/png;base64,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",width:50,height:60,src:"/static/a64620346ac3ce8d4580a3f07039fa3c/8469d/logo.png",srcSet:"/static/a64620346ac3ce8d4580a3f07039fa3c/8469d/logo.png 1x"}}}}}},731:function(e){e.exports={data:{config:{copyright:"Copyright © Act Labs",social:[{icon:"facebook",link:"https://www.facebook.com/ACT7LAB"},{icon:"github",link:"https://github.com/act-labs/gatsby-starter-act-blog"}]}}}},732:function(e){e.exports={data:{config:{nav:[{text:"home",slug:null},{text:"posts",slug:"/posts/"},{text:"snippets",slug:"/snippets/"}]}}}},733:function(e,t,n){"use strict";n(6);var a=n(138),r=(n(178),n(31)),s=n.n(r),o=(n(740),n(725),n(726)),i=n.n(o),c=n(731),l=n(0),u=n.n(l),m=n(34),p=i.a.Footer;function g(e){var t=e.social,n=e.copyright,r=t.map(function(e){var t=e.link,n=e.icon;return u.a.createElement(a.a,{key:n,to:t},u.a.createElement(s.a,{type:n,style:{fontSize:"24px",marginLeft:10,color:"rgba(0, 0, 0, 0.65)"}}))});return u.a.createElement(p,{style:{textAlign:"center"}},u.a.createElement("div",null,n,u.a.createElement("div",{style:{float:"right"}},r)))}function d(e){return e.social?u.a.createElement(g,e):u.a.createElement(m.b,{query:"2743462859",render:function(t){var n=t.config,a=n.social,r=n.copyright;return u.a.createElement(g,Object.assign({social:a,copyright:r},e))},data:c})}n(737);var f=n(736),v=n.n(f),y=n(729),h=n(732),E=i.a.Header;function b(e){var t=e.nav;return u.a.createElement(E,{className:"navigation-bar"},u.a.createElement(a.a,{to:"/"},u.a.createElement(y.a,null)),u.a.createElement(v.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:t.filter(function(e){return e.selected}).map(function(e){return e.text}),style:{lineHeight:"64px"}},t.map(function(e,t){var n=e.slug,r=e.text;return u.a.createElement(v.a.Item,{key:t},u.a.createElement(a.a,{to:n||"/"},r))})))}function A(e){return e.nav?u.a.createElement(b,e):u.a.createElement(m.b,{query:"1250442554",render:function(t){var n=t.config.nav;return u.a.createElement(b,Object.assign({nav:n},e))},data:h})}var M=n(727),k=n(14),x=n.n(k);n(671);n.d(t,"a",function(){return T});var w=i.a.Content,D=i.a.Sider;function O(e){var t=e.style,n=e.children,a=x()(e,["style","children"]);return u.a.createElement(w,Object.assign({style:Object.assign({padding:"5px 24px"},t)},a),n)}function T(e){var t=e.children,n=e.className,a=e.title,r=e.description,s=e.keywords,o=e.style,c=e.layout,l=Object.assign({},X,c),m=l.footer,p=l.fullHeight,g=Object.assign({},p?{height:"100%"}:null,o),f=(n?n+" ":"")+"page-layout";return u.a.createElement(i.a,{className:f,style:g},u.a.createElement(M.a,{title:a,keywords:s,description:r}),u.a.createElement(A,null),t,m?u.a.createElement(d,null):null)}var X={footer:!0};T.Panel=O,T.SideMenuPanel=function(e){var t=e.children,n=e.menu;return u.a.createElement(i.a,{style:{padding:"1em 0",background:"#fff",minHeight:1e3}},u.a.createElement(D,{width:200},n),u.a.createElement(O,null,t))}},735:function(e,t,n){"use strict";n(6);var a=n(138),r=(n(46),n(0)),s=n.n(r),o=n(878),i=n(742),c=n(743),l=n(744),u=n(745),m=n(746),p=n(747);o.a.registerLanguage("javascript",i.a),o.a.registerLanguage("sh",c.a),o.a.registerLanguage("markdown",l.a),o.a.registerLanguage("yaml",u.a),o.a.registerLanguage("dockerfile",m.a);var g=n(1);n.d(t,"a",function(){return f});var d={components:{code:function(e){var t="bash";if(e.className){var n=e.className.split("-");n.length>1&&(t=n[1])}return s.a.createElement(o.a,{language:t,style:p.github},e.children)},a:a.a}};function f(e){var t=Object.assign({},d,e),n=t.components,a=t.children;return s.a.createElement(g.MDXProvider,{components:n},a)}},738:function(e,t,n){"use strict";var a=n(735),r=(n(178),n(31)),s=n.n(r),o=n(138),i=(n(737),n(736)),c=n.n(i),l=n(0),u=n.n(l),m=c.a.SubMenu;function p(e){var t=e.menu,n=e.items,a=e.location,r=a.pathname;n.forEach(function(e){e.current=e.slug===r});var i=Object(l.useState)(function(){return function(e){var t=e.menu,n=e.location,a=e.path;if(n.state&&n.state.openKeys){var r=t.filter(function(e){return e.submenu.some(function(e){return e.slug===a})}).map(function(e){return String(e.order)});return[].concat(n.state.openKeys,r.filter(function(e){return-1===n.state.openKeys.indexOf(e)}))}return t.map(function(e){return String(e.order)})}({menu:t,location:a,path:r})}),p=i[0],g=i[1];var d=n.filter(function(e){return e.current}).map(function(e){return String(e.order)});return u.a.createElement(c.a,{mode:"inline",defaultSelectedKeys:d,defaultOpenKeys:p,style:{height:"100%"},onOpenChange:function(e){g(e)}},t.map(function(e){return u.a.createElement(m,{key:e.order,title:u.a.createElement("span",null,u.a.createElement(s.a,{type:e.icon}),e.text)},e.submenu.map(function(e){return function(e){var t=e.item,n=t.title,a=t.order,r=e.items,s=e.openKeys,i=r[parseInt(a)].slug;return u.a.createElement(c.a.Item,{key:a},u.a.createElement(o.a,{to:i,state:{openKeys:s}},n))}({item:e,items:n,openKeys:p})}))}))}n(6);var g=n(733);n.d(t,"a",function(){return f});var d=g.a.SideMenuPanel;function f(e){var t=e.pageContext,n=e.children,r=e.location,s=Object.assign({frontmatter:{}},t),o=s.menu,i=s.items,c=Object.assign({},{layout:s.layout},s.frontmatter);return u.a.createElement(g.a,c,u.a.createElement(d,{menu:u.a.createElement(p,{menu:o,items:i,location:r})},u.a.createElement(a.a,null,n)))}},749:function(e){e.exports={menu:[{text:"serverless",icon:"bars",order:0,submenu:[{slug:"/snippets/serverless/serverless-cli/",parent:"serverless",title:"cli",order:2},{slug:"/snippets/serverless/docker/",parent:"serverless",title:"docker",order:3},{slug:"/snippets/serverless/serverless-layers/",parent:"serverless",title:"layers",order:4},{slug:"/snippets/serverless/request-parameters/",parent:"serverless",title:"request parameters",order:5}]},{text:"DynamoDB",icon:"database",order:1,submenu:[{slug:"/snippets/serverless/dynamodb-streams-configuration/",parent:"DynamoDB",title:"streams",order:1}]}],items:[{slug:"/snippets/serverless/aws-intro/",parent:"$",order:0},{slug:"/snippets/serverless/dynamodb-streams-configuration/",parent:"DynamoDB",title:"streams",order:1},{slug:"/snippets/serverless/serverless-cli/",parent:"serverless",title:"cli",order:2},{slug:"/snippets/serverless/docker/",parent:"serverless",title:"docker",order:3},{slug:"/snippets/serverless/serverless-layers/",parent:"serverless",title:"layers",order:4},{slug:"/snippets/serverless/request-parameters/",parent:"serverless",title:"request parameters",order:5}]}}}]);
//# sourceMappingURL=component---src-generated-snippets-serverless-request-parameters-js-a4077c184189ec3965a4.js.map