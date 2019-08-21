(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{708:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),i=a.n(o),c=a(15),s=a.n(c),l=(a(140),a(83)),u=a.n(l),m=a(1),d=a(249),p=a(250),g=a(104),f=(u.a.TabPane,function(e){function t(t){var a;return(a=e.call(this,t)||this).layout=null,a}return s()(t,e),t.prototype.render=function(){var e=this.props,t=e.components;i()(e,["components"]);return r.a.createElement(m.MDXTag,{name:"wrapper",components:t},r.a.createElement(m.MDXTag,{name:"p",components:t},r.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://mdxjs.com/",title:"MDX - markdown on steroids"}},"MDX")," is a natural markdown extension: works seamlessly with React, arbitrary React components could be easily embedded, complex document composition becomes possible."),r.a.createElement(m.MDXTag,{name:"h2",components:t},"Redefine standard elements"),r.a.createElement(m.MDXTag,{name:"p",components:t},"Normally, markdown is compiled to HTML. Appearance of HTML tags could be customized through Javascript and CSS, with usual drawbacks inherent to pure, non-componentized Javascript. In the React world, transformation to React components is a natural step forward. Tags in MDX could be easily redefined, and thus very complex, dynamic behavior could be easily achieved. For example, any text/code editor or even complex online IDE component could be used to render markdown code blocks. As another example, a custom link component, smartly prefetching site pages, could be used instead of ordinary hyperlinks."),r.a.createElement(p.a,null),r.a.createElement(m.MDXTag,{name:"h2",components:t},"Embedded components"),r.a.createElement(m.MDXTag,{name:"p",components:t},"Thanks to MDX, arbitrary JSX components could be easily embedded in markdown. Which could be used, for example, to illustrate an article with charts or to split and format text. Consider how little markup is needed to organize any text into separate tabs:"),r.a.createElement(d.a,null),r.a.createElement(m.MDXTag,{name:"h2",components:t},"Import and embed one MDX document into another"),r.a.createElement(m.MDXTag,{name:"p",components:t},"MDX documents compile to React components, which could be imported and reused in other JS files using standard import syntax. Or, in a similar fashion, they could be embedded in other MDX documents. Quite convenient, when some chunks of text could be useful in multiple places. For example, code snippets from an API reference could be reused to illustrate blog posts."),r.a.createElement(g.a,null))},t}(r.a.Component)),h=a(736);function y(e){return r.a.createElement(h.a,e,r.a.createElement(f,e))}a.d(t,"default",function(){return y})},715:function(e,t,a){"use strict";a(44);var n=a(716),r=a(0),o=a.n(r),i=a(2),c=a.n(i),s=a(727),l=a.n(s),u=a(52);function m(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,c=e.title;return o.a.createElement(u.b,{query:d,render:function(e){return"string"==typeof i&&(i=i.split(",").map(function(e){return e.trim()})),t=t||e.site.siteMetadata.description,o.a.createElement(l.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+e.site.siteMetadata.project,meta:[{name:"description",content:t},{property:"og:title",content:c},{property:"og:description",content:t},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:t}].concat(i?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:n})}m.defaultProps={lang:"en",meta:[],keywords:null},m.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.oneOfType([c.a.string,c.a.arrayOf(c.a.string)]),title:c.a.string.isRequired},t.a=m;var d="304502870"},716:function(e){e.exports={data:{site:{siteMetadata:{project:"ACT blog",description:"React, Ant Design, Gatsby, GraphQl, and other web technologies",author:"Act Labs"}}}}},717:function(e,t,a){"use strict";a.d(t,"a",function(){return l});a(344);var n=a(718),r=a(0),o=a.n(r),i=a(52),c=a(231),s=a.n(c);function l(){return o.a.createElement(i.b,{query:"2369744027",render:function(e){return o.a.createElement(s.a,{fixed:e.logo.childImageSharp.fixed,style:{float:"left"}})},data:n})}},718:function(e){e.exports={data:{logo:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAYCAYAAAD6S912AAAACXBIWXMAAAsSAAALEgHS3X78AAAGG0lEQVQ4y32VCVBTVxSGX2FcaqfTmWptx7aOndFKXZFqy9iOVqyOLcqMxaVW6lKXikowLAKyFDCERRN2whJICEkIMQEUhEgkZYnKmgQiWwKyOK4oQRah5OWevndprW1t78ybc+8753757zn3vBDEP4auuYEAgBfr9MyEZS/7I/1+4jA997vQ87AAL3vL4wH8XqPREGNjY8QrByf0mB1tuWGertGM78115al7H+jyIpsr03PKeT5QyvHaQ/uFx+bjuPq6m3hfY1PTv2EDD4aIW/mncaBaxsq/X5cGQx1iyIk/BRO9KsgWxEBApNfUaJfyAB1jvHF5dvJBZxyvio/6O6y54SZRXpyH51uOX5plqkltH+/Kg+HW7KkZQcnWrCq1VaoqJl2z8+BWfsBEena2M5We1+n4s5sc7F55XKWU/xpt3Y4nvtHfkDvwsDkTdJfDbeniWNA2q5BWkYoaruWQQz0VoFHJPi9KCV9VEO9/cFoha+4LUEVSMlFOWfnVeAyMOeb6YVdbhXnSooe7hiIbOVAJ5KMmuHNbbRsf1MPkU+PTc1qYWRrD+KogwKMl3Y95Uuh7MhDDqpSFhO8fYP6qWTNomxX8daTk9D7oV8usAAMIWdoAWW4jeN5JjvfUQoNKhlWBZXCOctdmXYTHLh/q+PYYItu9D1vxOwtwHgrd92wpWOvcd+29RdD3wWKbMSsS2awmQIMGZB1tI/uviaFszbrMP0+nPuQmbjqw2wEvzCYTtsINmzBMtG//l4WOa+HykuVQ5rOfNO/YCl3zFqI+eSoA2Qu2RzpEKQYdNxwS5i3Cd5Tr8+OFTNZxY9H1q29hmCQm7kUuxWvW6uqXrYba1U5T5uokuNuei2qZP6C0Q9th4E41gmdtCEbaydF7DcD1Z7jSe6IDjgRUCM+CNCPEg3g0MkKovt2B1ZXu2rve4LgOOj9xtN102YDu1PHQE302uiwPA37EQejUSAF+6wbroJ7KpQkMtdI+bXGsQhB1dFAQcQhy+Ky104VYsBAnU+ay1btwxUrIXbTUWrrdBYZMYqQriYG8VAaSntgJgzVFFNCMyCcGgJEONNRXA4MtfNDmBwM/+LAKwx6PjhKZb7+LgQWO6zOFmxxA7rDYqnLbinoa09HD5izQKsORghcIk4MUaNiIbEOtCIZvo+eP9KCvTOsrE4SICtgMHgY+sFgICUFMV3f1p4WdTk7QsWSFtdJ9G2rUJqGuqkTorU1CPQZK3VgX2J62gM1ipK6R0QrkHdDVlZ2m98rjfIVydbM9Bha/vwgrvPTFBm4rVZD6xcsnK1w3k7rzJ2w1To7QWBKHSEsroCEjUOrohwZOAeqDB91aDk5XnF+Wgn3yTayyZMdO3B1Kpu9HmlVO450r14DeYSW0rFgN7dmBNku3nIJh0F8WK+yGfsN088vjmAlUGzoQsnwRweN424t2Os+kHWXuu13L1zkbm1Z9ptRLI0zDvVJ4qMuxkU8NtCo6f9S8hbo+HSSM6qHt19Qyel9+tNd5SazfNiKa+O9xS8VpHGsXwb2mDHLiXo0NRjopSDvQV2bqSYt1sreQAqZosMKL/p75bK/DeCMvjukhTDjDy4n3DVBksNZwAv3m3iiM5bVXcuGxIcd2vynDNtQmARhtg/GHumGz7spwXz0fJs15YNJmVdCM4nj/bbJYZjDB5/ixy4QBUCk5B1WyUOjQJFj76zOeTZol0FgaTR03ixzpEEFXTUqXukS0TaXWzi+XRrmZqhOhmfKXiyNKcFGiT6/IYzFSCCHnFAUKAWmy93BuvFe3iWq3CQqmr0hUChJ8iyqlIXCz6DxoFJwDL6dDnORTeV0SBJIU/wJ6fUWYME/CZqQTGXHebAHX+xKHHbT0THLrzGJR9MbiXNY3+IMRfyatRh4KAi6jml5PGC/aywVxuHii1JBd1QWhoOQHx7z4kWgml/i/IU1mKtTiYMhJDtuIcx3rbZ+ffRH7MiXX50iSGGOxQR6tvyTWzMYtfP5MFMEJ/M5OGOVux7vgb1ekkBFlkig7RbrftIpEH14q6wh4/nz0Y3odcvYU7qiUcA9sBYlBB5NYJ4PZ7Iv4fyUz5pzT7+jdwN4yQU6eAAAAAElFTkSuQmCC",width:50,height:60,src:"/static/a64620346ac3ce8d4580a3f07039fa3c/8469d/logo.png",srcSet:"/static/a64620346ac3ce8d4580a3f07039fa3c/8469d/logo.png 1x"}}}}}},719:function(e){e.exports={data:{config:{copyright:"Copyright © Act Labs",social:[{icon:"facebook",link:"https://www.facebook.com/ACT7LAB"},{icon:"github",link:"https://github.com/act-labs/gatsby-starter-act-blog"}]}}}},720:function(e){e.exports={data:{config:{nav:[{text:"home",slug:null},{text:"posts",slug:"/posts/"},{text:"snippets",slug:"/snippets/"}]}}}},721:function(e,t,a){"use strict";a(6);var n=a(137),r=(a(178),a(31)),o=a.n(r),i=(a(728),a(713),a(714)),c=a.n(i),s=a(719),l=a(0),u=a.n(l),m=a(52),d=c.a.Footer;function p(e){var t=e.social,a=e.copyright,r=t.map(function(e){var t=e.link,a=e.icon;return u.a.createElement(n.a,{key:a,to:t},u.a.createElement(o.a,{type:a,style:{fontSize:"24px",marginLeft:10,color:"rgba(0, 0, 0, 0.65)"}}))});return u.a.createElement(d,{style:{textAlign:"center"}},u.a.createElement("div",null,a,u.a.createElement("div",{style:{float:"right"}},r)))}function g(e){return e.social?u.a.createElement(p,e):u.a.createElement(m.b,{query:"2743462859",render:function(t){var a=t.config,n=a.social,r=a.copyright;return u.a.createElement(p,Object.assign({social:n,copyright:r},e))},data:s})}a(725);var f=a(724),h=a.n(f),y=a(717),b=a(720),E=c.a.Header;function v(e){var t=e.nav;return u.a.createElement(E,{className:"navigation-bar"},u.a.createElement(n.a,{to:"/"},u.a.createElement(y.a,null)),u.a.createElement(h.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:t.filter(function(e){return e.selected}).map(function(e){return e.text}),style:{lineHeight:"64px"}},t.map(function(e,t){var a=e.slug,r=e.text;return u.a.createElement(h.a.Item,{key:t},u.a.createElement(n.a,{to:a||"/"},r))})))}function A(e){return e.nav?u.a.createElement(v,e):u.a.createElement(m.b,{query:"1250442554",render:function(t){var a=t.config.nav;return u.a.createElement(v,Object.assign({nav:a},e))},data:b})}var w=a(715),M=a(14),k=a.n(M);a(661);a.d(t,"a",function(){return O});var x=c.a.Content,D=c.a.Sider;function X(e){var t=e.style,a=e.children,n=k()(e,["style","children"]);return u.a.createElement(x,Object.assign({style:Object.assign({padding:"5px 24px"},t)},n),a)}function O(e){var t=e.children,a=e.className,n=e.title,r=e.description,o=e.keywords,i=e.style,s=e.layout,l=Object.assign({},T,s),m=l.footer,d=l.fullHeight,p=Object.assign({},d?{height:"100%"}:null,i),f=(a?a+" ":"")+"page-layout";return u.a.createElement(c.a,{className:f,style:p},u.a.createElement(w.a,{title:n,keywords:o,description:r}),u.a.createElement(A,null),t,m?u.a.createElement(g,null):null)}var T={footer:!0};O.Panel=X,O.SideMenuPanel=function(e){var t=e.children,a=e.menu;return u.a.createElement(c.a,{style:{padding:"1em 0",background:"#fff",minHeight:1e3}},u.a.createElement(D,{width:200},a),u.a.createElement(X,null,t))}},723:function(e,t,a){"use strict";a(6);var n=a(137),r=(a(44),a(0)),o=a.n(r),i=a(866),c=a(730),s=a(731),l=a(732),u=a(733),m=a(734),d=a(735);i.a.registerLanguage("javascript",c.a),i.a.registerLanguage("sh",s.a),i.a.registerLanguage("markdown",l.a),i.a.registerLanguage("yaml",u.a),i.a.registerLanguage("dockerfile",m.a);var p=a(1);a.d(t,"a",function(){return f});var g={components:{code:function(e){var t="bash";if(e.className){var a=e.className.split("-");a.length>1&&(t=a[1])}return o.a.createElement(i.a,{language:t,style:d.github},e.children)},a:n.a}};function f(e){var t=Object.assign({},g,e),a=t.components,n=t.children;return o.a.createElement(p.MDXProvider,{components:a},n)}},736:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var n=a(723),r=(a(6),a(721)),o=a(0),i=a.n(o),c=(a(662),r.a.Panel);function s(e){var t=e.children,a=e.pageContext,o=Object.assign({frontmatter:{}},a),s=Object.assign({},{layout:o.layout},o.frontmatter);return i.a.createElement(r.a,s,i.a.createElement(c,{style:{paddingTop:"1em"}},s.title?i.a.createElement("h1",null,s.title):null,i.a.createElement(n.a,null,t)))}}}]);
//# sourceMappingURL=component---src-generated-posts-mdx-js-2e3d0415c3d3b75cc47f.js.map