(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{445:function(t,e,a){"use strict";a.r(e),a.d(e,"default",function(){return f});a(509);var n=a(519),r=a.n(n),o=a(93),i=(a(8),a(513)),c=(a(57),a(259),a(166)),l=a.n(c),s=a(481),u=a(0),d=a.n(u),m=s.a.Panel;function g(t){var e=t.item;return d.a.createElement(l.a,{size:"large",style:{backgroundColor:e.backgroundColor}},e.keyword)}function f(t){var e=t.pageContext,a=Object.assign({frontmatter:{}},e),n=Object.assign({},{layout:a.layout},a.frontmatter),c=function(t){var e=t.map(function(t){return{keyword:(t.frontmatter.keywords||"ACT").split(",")[0].trim(),title:t.frontmatter.title,excerpt:t.excerpt,slug:t.slug}});return i.a.distinctBackgroundColors(e)}(e.posts);return d.a.createElement(s.a,n,d.a.createElement(m,null,d.a.createElement(r.a,{itemLayout:"horizontal",dataSource:c,renderItem:function(t){return d.a.createElement(r.a.Item,null,d.a.createElement(r.a.Item.Meta,{avatar:d.a.createElement(g,{item:t}),title:d.a.createElement(o.a,{to:t.slug},t.title),description:t.excerpt}))}})))}},475:function(t,e,a){"use strict";a(57);var n=a(476),r=a(0),o=a.n(r),i=a(2),c=a.n(i),l=a(488),s=a.n(l),u=a(34);function d(t){var e=t.description,a=t.lang,r=t.meta,i=t.keywords,c=t.title;return o.a.createElement(u.b,{query:m,render:function(t){return"string"==typeof i&&(i=i.split(",").map(function(t){return t.trim()})),e=e||t.site.siteMetadata.description,o.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+t.site.siteMetadata.project,meta:[{name:"description",content:e},{property:"og:title",content:c},{property:"og:description",content:e},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:e}].concat(i?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:null},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.oneOfType([c.a.string,c.a.arrayOf(c.a.string)]),title:c.a.string.isRequired},e.a=d;var m="304502870"},476:function(t){t.exports={data:{site:{siteMetadata:{project:"ACT blog",description:"React, Ant Design, Gatsby, GraphQl, and other web technologies",author:"Act Labs"}}}}},477:function(t,e,a){"use strict";a.d(e,"a",function(){return s});a(252);var n=a(478),r=a(0),o=a.n(r),i=a(34),c=a(158),l=a.n(c);function s(){return o.a.createElement(i.b,{query:"2369744027",render:function(t){return o.a.createElement(l.a,{fixed:t.logo.childImageSharp.fixed,style:{float:"left"}})},data:n})}},478:function(t){t.exports={data:{logo:{childImageSharp:{fixed:{base64:"data:image/png;base64,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",width:50,height:60,src:"/static/a64620346ac3ce8d4580a3f07039fa3c/8469d/logo.png",srcSet:"/static/a64620346ac3ce8d4580a3f07039fa3c/8469d/logo.png 1x"}}}}}},479:function(t){t.exports={data:{config:{copyright:"Copyright © Act Labs",social:[{icon:"facebook",link:"https://www.facebook.com/ACT7LAB"},{icon:"github",link:"https://github.com/act-labs/gatsby-starter-act-blog"}]}}}},480:function(t){t.exports={data:{config:{nav:[{text:"home",slug:null},{text:"posts",slug:"/posts/"},{text:"snippets",slug:"/snippets/"}]}}}},481:function(t,e,a){"use strict";a(8);var n=a(93),r=(a(157),a(43)),o=a.n(r),i=(a(489),a(473),a(474)),c=a.n(i),l=a(479),s=a(0),u=a.n(s),d=a(34),m=c.a.Footer;function g(t){var e=t.social,a=t.copyright,r=e.map(function(t){var e=t.link,a=t.icon;return u.a.createElement(n.a,{key:a,to:e},u.a.createElement(o.a,{type:a,style:{fontSize:"24px",marginLeft:10,color:"rgba(0, 0, 0, 0.65)"}}))});return u.a.createElement(m,{style:{textAlign:"center"}},u.a.createElement("div",null,a,u.a.createElement("div",{style:{float:"right"}},r)))}function f(t){return t.social?u.a.createElement(g,t):u.a.createElement(d.b,{query:"2743462859",render:function(e){var a=e.config,n=a.social,r=a.copyright;return u.a.createElement(g,Object.assign({social:n,copyright:r},t))},data:l})}a(485);var y=a(483),p=a.n(y),A=a(477),b=a(480),h=c.a.Header;function E(t){var e=t.nav;return u.a.createElement(h,{className:"navigation-bar"},u.a.createElement(n.a,{to:"/"},u.a.createElement(A.a,null)),u.a.createElement(p.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:e.filter(function(t){return t.selected}).map(function(t){return t.text}),style:{lineHeight:"64px"}},e.map(function(t,e){var a=t.slug,r=t.text;return u.a.createElement(p.a.Item,{key:e},u.a.createElement(n.a,{to:a||"/"},r))})))}function k(t){return t.nav?u.a.createElement(E,t):u.a.createElement(d.b,{query:"1250442554",render:function(e){var a=e.config.nav;return u.a.createElement(E,Object.assign({nav:a},t))},data:b})}var v=a(475),w=a(7),x=a.n(w);a(420);a.d(e,"a",function(){return C});var O=c.a.Content,M=c.a.Sider;function Q(t){var e=t.style,a=t.children,n=x()(t,["style","children"]);return u.a.createElement(O,Object.assign({style:Object.assign({padding:"5px 24px"},e)},n),a)}function C(t){var e=t.children,a=t.className,n=t.title,r=t.description,o=t.keywords,i=t.style,l=t.layout,s=Object.assign({},W,l),d=s.footer,m=s.fullHeight,g=Object.assign({},m?{height:"100%"}:null,i),y=(a?a+" ":"")+"page-layout";return u.a.createElement(c.a,{className:y,style:g},u.a.createElement(v.a,{title:n,keywords:o,description:r}),u.a.createElement(k,null),e,d?u.a.createElement(f,null):null)}var W={footer:!0};C.Panel=Q,C.SideMenuPanel=function(t){var e=t.children,a=t.menu;return u.a.createElement(c.a,{style:{padding:"1em 0",background:"#fff",minHeight:1e3}},u.a.createElement(M,{width:200},a),u.a.createElement(Q,null,e))}},513:function(t,e,a){"use strict";var n=a(514),r=a.n(n);e.a={distinctBackgroundColors:function(t){var e=t.reduce(function(t,e){return e.keyword in t.keywords?t:(t.keywords[e.keyword]=t.count++,t)},{count:0,keywords:{}}),a=r()({count:e.count>5?e.count:5});return t.map(function(t){return t.backgroundColor=a[e.keywords[t.keyword]].css(),t})}}}}]);
//# sourceMappingURL=component---src-components-posts-page-js-2e9fab6d982e56210b8d.js.map