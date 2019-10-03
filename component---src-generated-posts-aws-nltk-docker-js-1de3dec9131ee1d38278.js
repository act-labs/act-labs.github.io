(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{705:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(141),i=a(14),l=a.n(i),s=a(15),c=a.n(s),m=a(1),p=function(e){function t(t){var a;return(a=e.call(this,t)||this).layout=null,a}return c()(t,e),t.prototype.render=function(){var e=this.props,t=e.components;l()(e,["components"]);return r.a.createElement(m.MDXTag,{name:"wrapper",components:t},r.a.createElement(o.a,{more:"/posts/aws-spacy-layer/",title:"Use public AWS layers"},r.a.createElement(m.MDXTag,{name:"pre",components:t},r.a.createElement(m.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-yaml"}},"    layers:\n      - arn:aws:lambda:${self:provider.region}:113088814899:layer:Klayers-python37-spacy:1\n"))),r.a.createElement(m.MDXTag,{name:"p",components:t},"Though popular frameworks  are usually available as public AWS Lambda layers, the time will come when you may wish to build your own layer instead. There could be many reasons for this, for example, you may need some less popular library, or you may wish to optimise the existing one, or you may just need to ship some custom static data.  Building AWS layers requires some skills, expect to jump through a few hoops in a process, but nowadays the procedure is not that difficult as one might expect. Let's consider, for example, how to build and deploy ",r.a.createElement(m.MDXTag,{name:"em",components:t,parentName:"p"},"NLTK")," library with WordNet dictionary dataset."),r.a.createElement(m.MDXTag,{name:"p",components:t},"Basically, to create AWS layers you need to zip your files in appropriate directory (it could be nodejs, or python, or arbitrary subdirectory for data). As serverless framework comes with the ability to build custom layers, this step could be automated. And the only remaining problem of packaging correct binaries under different OS could be easily solved using docker. In this post I use ",r.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://hub.docker.com/r/lambci/lambda",title:"A sandboxed local environment that replicates the live AWS Lambda environment almost identically"}},"lambci/lambda")," docker images to both build and test an NLTK layer. "),r.a.createElement(o.a,{more:"/snippets/serverless/docker/",title:"During development, run interactive bash session"},r.a.createElement(m.MDXTag,{name:"pre",components:t},r.a.createElement(m.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-sh"}},"    docker run -it lambci/lambda:build-python3.7 bash\n"))),r.a.createElement(m.MDXTag,{name:"p",components:t},"So the first step is to build layer in the docker container. For this, one may wish to install NLTK package in a separate Python virtual environment to use it later for data  download and to generate requirements.txt file with correct package dependencies. Dumping ",r.a.createElement(m.MDXTag,{name:"em",components:t,parentName:"p"},"requirements.txt")," file requires  ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"pip freeze  > requirements.txt")," command. Using ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"pip install -r requirements.txt -t /opt/python")," command (where option -t stands for target), all the required packages could be installed to a ",r.a.createElement(m.MDXTag,{name:"em",components:t,parentName:"p"},"/opt/python")," directory (where they reside in AWS lambda function environment). "),r.a.createElement(m.MDXTag,{name:"p",components:t},"WordNet dataset could be downloaded using ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"nltk.downloader -d /opt/nltk_data wordnet")," command (to ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"/opt/nltk_data")," subdirectory). The whole procedure is quite straightforward and could be tested in interactive bash session in docker, where commands could be entered manually. The only caveat is that in Dockerfile, when  working  with virtual environments, we cannot use standard ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"activate")," command which is usually used on command prompt to adjust the ",r.a.createElement(m.MDXTag,{name:"em",components:t,parentName:"p"},"PATH")," variable. In docker, on the other hand, commands are executed one by one, outside any bash sessions, so environment should be adjusted explicitly (using ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"ENV PATH /opt/env/bin:/var/task/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"),"). Our dockerfile finally will look like this:"),r.a.createElement(m.MDXTag,{name:"pre",components:t},r.a.createElement(m.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-dockerfile"}},"# Dockerfile to create nltk layer with wordnet dataset\nFROM lambci/lambda:build-python3.7\n\nRUN rm -rf /opt/* && mkdir -p /opt/nltk_data\nRUN python3 -m venv /opt/env\n\nENV PATH /opt/env/bin:/var/task/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin\n\nRUN python3 -m pip install --upgrade pip && python3 -m pip install nltk\n\nRUN python3 -m nltk.downloader -d /opt/nltk_data wordnet\n\nRUN pip freeze > requirements.txt\n\nRUN pip install -r requirements.txt -t /opt/python\n\nRUN rm -rf /opt/env\n")),r.a.createElement(m.MDXTag,{name:"p",components:t},"After an image is created, ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"docker cp")," command can be used to copy layer to working directory. The whole process could be automated using ",r.a.createElement(m.MDXTag,{name:"em",components:t,parentName:"p"},"build.sh")," file:"),r.a.createElement(m.MDXTag,{name:"pre",components:t},r.a.createElement(m.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-sh"}},"docker build -t nltk-lambda-layer -f Dockerfile .\ndocker run -d --name nltk-layer nltk-lambda-layer false\ndocker cp nltk-layer:/opt ./layer\ndocker cp nltk-layer:/var/task/requirements.txt .\ndocker rm nltk-layer\n")),r.a.createElement(m.MDXTag,{name:"p",components:t},"Finally, create a simple ",r.a.createElement(m.MDXTag,{name:"em",components:t,parentName:"p"},"serverless.yml")," configuration file, in which location of the layer should be specified:"),r.a.createElement(m.MDXTag,{name:"pre",components:t},r.a.createElement(m.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-yaml"}},"# serverless.yaml\nservice: python-nltk-layer\n\nprovider:\n  name: aws\n\nlayers:\n  nltk:\n    path: layer\n")),r.a.createElement(o.a,{more:"/snippets/serverless/request-parameters/",title:"Path variables could be excesses trough pathParameters key"},r.a.createElement(m.MDXTag,{name:"pre",components:t},r.a.createElement(m.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-javascript"}},'    word = event["pathParameters"]["word"]\n'))),r.a.createElement(m.MDXTag,{name:"p",components:t},"After deploying layer to AWS, we may start using it immediately. To test that it is working, lets create a simple HTTP AWS endpoint that will return word synonyms. To make WordNet dataset available, its location (/opt/nltk_data) should be specified in NLTK_DATA environment variable. Example code could be deployed to AWS and tested using ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"curl"),". Alternatively, the handler could be invoked locally in docker:"),r.a.createElement(m.MDXTag,{name:"pre",components:t},r.a.createElement(m.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-sh"}},'# to test deployed AWS endpoint\ncurl https://XXXXX.execute-api.us-east-1.amazonaws.com/dev/synonyms/active\n["participating", "active_voice", "alive", "active_agent", "combat-ready", "fighting", "active", "dynamic"]\n# alternatively, invoke it locally\ndocker run --rm -e NLTK_DATA=/opt/nltk_data -v "$PWD":/var/task -v "$PWD"/../layer:/opt lambci/lambda:python3.7 handler.synonyms \'{"pathParameters":{"word":"active"}}\'\n')),r.a.createElement(m.MDXTag,{name:"p",components:t},"See source code on ",r.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/act-labs/aws-nltk-layer",title:"Build custom NLTK/WordNet AWS lambda function layer using docker and serverless framework"}},"Github")," for details."))},t}(r.a.Component),d=a(744);function u(e){return r.a.createElement(d.a,e,r.a.createElement(p,e))}a.d(t,"default",function(){return u})},723:function(e,t,a){"use strict";a(46);var n=a(724),r=a(0),o=a.n(r),i=a(2),l=a.n(i),s=a(735),c=a.n(s),m=a(38);function p(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,l=e.title;return o.a.createElement(m.b,{query:d,render:function(e){return"string"==typeof i&&(i=i.split(",").map(function(e){return e.trim()})),t=t||e.site.siteMetadata.description,o.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+e.site.siteMetadata.project,meta:[{name:"description",content:t},{property:"og:title",content:l},{property:"og:description",content:t},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:t}].concat(i?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:n})}p.defaultProps={lang:"en",meta:[],keywords:null},p.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.oneOfType([l.a.string,l.a.arrayOf(l.a.string)]),title:l.a.string.isRequired},t.a=p;var d="304502870"},724:function(e){e.exports={data:{site:{siteMetadata:{project:"ACT blog",description:"React, Ant Design, Gatsby, GraphQl, and other web technologies",author:"Act Labs"}}}}},725:function(e,t,a){"use strict";a.d(t,"a",function(){return c});a(350);var n=a(726),r=a(0),o=a.n(r),i=a(38),l=a(231),s=a.n(l);function c(){return o.a.createElement(i.b,{query:"2369744027",render:function(e){return o.a.createElement(s.a,{fixed:e.logo.childImageSharp.fixed,style:{float:"left"}})},data:n})}},726:function(e){e.exports={data:{logo:{childImageSharp:{fixed:{base64:"data:image/png;base64,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",width:50,height:60,src:"/static/a64620346ac3ce8d4580a3f07039fa3c/8469d/logo.png",srcSet:"/static/a64620346ac3ce8d4580a3f07039fa3c/8469d/logo.png 1x"}}}}}},727:function(e){e.exports={data:{config:{copyright:"Copyright © Act Labs",social:[{icon:"facebook",link:"https://www.facebook.com/ACT7LAB"},{icon:"github",link:"https://github.com/act-labs/gatsby-starter-act-blog"}]}}}},728:function(e){e.exports={data:{config:{nav:[{text:"home",slug:null},{text:"posts",slug:"/posts/"},{text:"snippets",slug:"/snippets/"}]}}}},729:function(e,t,a){"use strict";a(6);var n=a(137),r=(a(178),a(31)),o=a.n(r),i=(a(736),a(721),a(722)),l=a.n(i),s=a(727),c=a(0),m=a.n(c),p=a(38),d=l.a.Footer;function u(e){var t=e.social,a=e.copyright,r=t.map(function(e){var t=e.link,a=e.icon;return m.a.createElement(n.a,{key:a,to:t},m.a.createElement(o.a,{type:a,style:{fontSize:"24px",marginLeft:10,color:"rgba(0, 0, 0, 0.65)"}}))});return m.a.createElement(d,{style:{textAlign:"center"}},m.a.createElement("div",null,a,m.a.createElement("div",{style:{float:"right"}},r)))}function g(e){return e.social?m.a.createElement(u,e):m.a.createElement(p.b,{query:"2743462859",render:function(t){var a=t.config,n=a.social,r=a.copyright;return m.a.createElement(u,Object.assign({social:n,copyright:r},e))},data:s})}a(733);var y=a(732),h=a.n(y),b=a(725),f=a(728),v=l.a.Header;function k(e){var t=e.nav;return m.a.createElement(v,{className:"navigation-bar"},m.a.createElement(n.a,{to:"/"},m.a.createElement(b.a,null)),m.a.createElement(h.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:t.filter(function(e){return e.selected}).map(function(e){return e.text}),style:{lineHeight:"64px"}},t.map(function(e,t){var a=e.slug,r=e.text;return m.a.createElement(h.a.Item,{key:t},m.a.createElement(n.a,{to:a||"/"},r))})))}function E(e){return e.nav?m.a.createElement(k,e):m.a.createElement(p.b,{query:"1250442554",render:function(t){var a=t.config.nav;return m.a.createElement(k,Object.assign({nav:a},e))},data:f})}var w=a(723),T=a(14),A=a.n(T);a(668);a.d(t,"a",function(){return X});var M=l.a.Content,N=l.a.Sider;function D(e){var t=e.style,a=e.children,n=A()(e,["style","children"]);return m.a.createElement(M,Object.assign({style:Object.assign({padding:"5px 24px"},t)},n),a)}function X(e){var t=e.children,a=e.className,n=e.title,r=e.description,o=e.keywords,i=e.style,s=e.layout,c=Object.assign({},x,s),p=c.footer,d=c.fullHeight,u=Object.assign({},d?{height:"100%"}:null,i),y=(a?a+" ":"")+"page-layout";return m.a.createElement(l.a,{className:y,style:u},m.a.createElement(w.a,{title:n,keywords:o,description:r}),m.a.createElement(E,null),t,p?m.a.createElement(g,null):null)}var x={footer:!0};X.Panel=D,X.SideMenuPanel=function(e){var t=e.children,a=e.menu;return m.a.createElement(l.a,{style:{padding:"1em 0",background:"#fff",minHeight:1e3}},m.a.createElement(N,{width:200},a),m.a.createElement(D,null,t))}},731:function(e,t,a){"use strict";a(6);var n=a(137),r=(a(46),a(0)),o=a.n(r),i=a(874),l=a(738),s=a(739),c=a(740),m=a(741),p=a(742),d=a(743);i.a.registerLanguage("javascript",l.a),i.a.registerLanguage("sh",s.a),i.a.registerLanguage("markdown",c.a),i.a.registerLanguage("yaml",m.a),i.a.registerLanguage("dockerfile",p.a);var u=a(1);a.d(t,"a",function(){return y});var g={components:{code:function(e){var t="bash";if(e.className){var a=e.className.split("-");a.length>1&&(t=a[1])}return o.a.createElement(i.a,{language:t,style:d.github},e.children)},a:n.a}};function y(e){var t=Object.assign({},g,e),a=t.components,n=t.children;return o.a.createElement(u.MDXProvider,{components:a},n)}},744:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var n=a(731),r=(a(6),a(729)),o=a(0),i=a.n(o),l=(a(669),r.a.Panel);function s(e){var t=e.children,a=e.pageContext,o=Object.assign({frontmatter:{}},a),s=Object.assign({},{layout:o.layout},o.frontmatter);return i.a.createElement(r.a,s,i.a.createElement(l,{style:{paddingTop:"1em"}},s.title?i.a.createElement("h1",null,s.title):null,i.a.createElement(n.a,null,t)))}}}]);
//# sourceMappingURL=component---src-generated-posts-aws-nltk-docker-js-1de3dec9131ee1d38278.js.map