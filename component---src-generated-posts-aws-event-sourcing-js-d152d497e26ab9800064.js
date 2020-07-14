(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{707:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(142),s=t(115),c=t(14),i=t.n(c),m=t(15),l=t.n(m),p=t(1),d=function(e){function a(a){var t;return(t=e.call(this,a)||this).layout=null,t}return l()(a,e),a.prototype.render=function(){var e=this.props,a=e.components;i()(e,["components"]);return r.a.createElement(p.MDXTag,{name:"wrapper",components:a},r.a.createElement(p.MDXTag,{name:"p",components:a},"Today bushiness environment is very dynamic. Quickly ",r.a.createElement(p.MDXTag,{name:"em",components:a,parentName:"p"},"shifting business requirements")," call for ",r.a.createElement(p.MDXTag,{name:"em",components:a,parentName:"p"},"Agile")," software development, modular architectures and flexibly to concentrate on the functionality of highest business priority. Growing demand for modularity popularized ",r.a.createElement(p.MDXTag,{name:"em",components:a,parentName:"p"},"microservices"),", often implemented using ",r.a.createElement(p.MDXTag,{name:"em",components:a,parentName:"p"},"event sourcing")," and ",r.a.createElement(p.MDXTag,{name:"em",components:a,parentName:"p"},"CQRS")," patterns. Though special frameworks and tools like Apache Kafka could be helpful, essentially event sourcing is quite a simple concept and could be implemented just using, for example, AWS lambdas and DynamoDB. "),r.a.createElement(p.MDXTag,{name:"p",components:a},"The central idea of event sourcing is the notion of the ",r.a.createElement(p.MDXTag,{name:"em",components:a,parentName:"p"},"event log"),", which records all what happened in the system, and thus represents the application state. The events log is the elementary, immutable, unique source of truth, from which current application state and convenient data views could be always unambiguously reconstructed. This makes application design more logical, and its constituent parts, communicating only through events, better decoupled."),r.a.createElement(p.MDXTag,{name:"p",components:a},"Lets consider how such system may look like in practice. We may construe our application as a documents processor, where every document belongs to some ",r.a.createElement(p.MDXTag,{name:"em",components:a,parentName:"p"},"owner")," - a microservice with ",r.a.createElement(p.MDXTag,{name:"em",components:a,parentName:"p"},"exclusive rights to modify"),' its documents according to some business logic. Each microservice receives commands from users and other microservices and, in response, when necessary, generates updates or "events", stored in immutable event logs.'),r.a.createElement(s.a,null),r.a.createElement(o.a,{more:"/snippets/serverless/dynamodb-streams-configuration/",title:"DynamoDB streams configuration"},r.a.createElement(p.MDXTag,{name:"p",components:a},"To configure DynamoDB stream add"),r.a.createElement(p.MDXTag,{name:"pre",components:a},r.a.createElement(p.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-yaml"}},"    StreamSpecification:\n        StreamViewType: NEW_IMAGE\n")),r.a.createElement(p.MDXTag,{name:"p",components:a},"to table configuration")),r.a.createElement(p.MDXTag,{name:"p",components:a},"The key part of the architecture is the event log - an ",r.a.createElement(p.MDXTag,{name:"em",components:a,parentName:"p"},"ordered")," list of events processed by microservice. One way to achieve the ",r.a.createElement(p.MDXTag,{name:"em",components:a,parentName:"p"},"ordering")," in ",r.a.createElement(p.MDXTag,{name:"em",components:a,parentName:"p"},"AWS")," - is to use ",r.a.createElement(p.MDXTag,{name:"em",components:a,parentName:"p"},"DynamoDB streams"),". For this we create a ",r.a.createElement(p.MDXTag,{name:"em",components:a,parentName:"p"},"commands table"),", in which every part of the system may write commands (modification requests)."),r.a.createElement(p.MDXTag,{name:"pre",components:a},r.a.createElement(p.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-javascript"}},"module.exports.addCommand = async event => {\n  const data = JSON.parse(event.body);\n  if (typeof data.type !== 'string') {\n    console.error('Validation Failed')\n    return {\n      statusCode: 400,\n      headers: { 'Content-Type': 'text/plain' },\n      body: 'Couldn't add command.',\n    }\n  }\n\n  const params = {\n    TableName: process.env.COMMANDS_TABLE,\n    Key: {\n      microservice: data.type\n    },\n    UpdateExpression:\"set id = if_not_exists(id, :initial) + :inc, payload=:payload\",\n    ExpressionAttributeValues:{':inc': 1, ':initial' : 0, \":payload\": event.body}, \n    ReturnValues: \"NONE\"\n  }\n\n  // write the todo to the database\n  await dynamoDb.update(params).promise()\n\n  return {\n    statusCode: 200\n  }\n}\n")),r.a.createElement(o.a,{more:"/snippets/serverless/serverless-cli/",title:"Create new serverless project"},r.a.createElement(p.MDXTag,{name:"pre",components:a},r.a.createElement(p.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-sh"}},"serverless create --template  aws-nodejs --path example\n"))),r.a.createElement(p.MDXTag,{name:"p",components:a},"We use ",r.a.createElement(p.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://serverless.com",title:"serverless framework to build and deploy AWS applications"}},"serverless framework")," to bundle our example AWS application. Writing updates to ",r.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"COMMANDS_TABLE"),", we are able to produce a strictly ordered stream of commands. Leveraging AWS ",r.a.createElement(p.MDXTag,{name:"em",components:a,parentName:"p"},"update expressions")," we get growing id number (",r.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"set id = if_not_exists(id, :initial) + :inc"),"). These updates later are processed by AWS lambda, subscribed to a DynamoDB stream:"),r.a.createElement(p.MDXTag,{name:"pre",components:a},r.a.createElement(p.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-javascript"}},'module.exports.example = async event => {\n  // process all commands  \n  for (const record of event.Records){\n    console.log(record.eventID)\n    console.log(record.eventName)\n    console.log(\'DynamoDB Record: %j\', record.dynamodb)\n\n    const sequenceNumber = record.dynamodb["NewImage"]["id"]["N"].padStart(10, "0")\n    const microservice = record.dynamodb["NewImage"]["microservice"]["S"]\n    const payload = record.dynamodb["NewImage"]["payload"]["S"]\n    const params = {\n      TableName: process.env.EVENTS_TABLE,\n      Item: {\n        microservice,\n        sequenceNumber,\n        payload\n      }\n    }\n    // some validation, business logic and event logging\n    await dynamoDb.put(params).promise()\n  }\n  return `Successfully processed ${event.Records.length} records.`;\n}\n')),r.a.createElement(p.MDXTag,{name:"p",components:a},"Microservice lambdas may do some command validation, data processing, execute some tasks, and update microservice state according to some business logic. And finally microservice should save ",r.a.createElement(p.MDXTag,{name:"em",components:a,parentName:"p"},"events")," (unless command has been already executed) and, possibly, using DynamoDB transactions, state snapshot. As a result requests to other microservices could be generated. Microservice lambda also could be responsible to generate data views\n(e.g. DynamoDB tables) to efficiently satisfy user queries. To make system even more modular, ",r.a.createElement(p.MDXTag,{name:"em",components:a,parentName:"p"},"SNS")," could be used to notify other subsystems/lambdas, devoted exclusively to data views generation."),r.a.createElement(p.MDXTag,{name:"p",components:a},"The ",r.a.createElement(p.MDXTag,{name:"em",components:a,parentName:"p"},"key")," schema in the ",r.a.createElement(p.MDXTag,{name:"em",components:a,parentName:"p"},"commands table"),' governs the system concurrency/scalability. All commands saved with the same key go to the same microservice. In our example we partition commands on microservice name (determined by "type" request attribute), so multiple microservices may reuse the same commands table and may live the same stream lambda. This could be adequate for small enterprise applications, but for more complex systems we may wish to partition commands based on some user/group/organization id. To further decouple system components, we may use different command tables and/or ',r.a.createElement(p.MDXTag,{name:"em",components:a,parentName:"p"},"SNS")," and ",r.a.createElement(p.MDXTag,{name:"em",components:a,parentName:"p"},"AWS Kinesis"),"."),r.a.createElement(p.MDXTag,{name:"p",components:a},"Using DynamoDB, we obtain ordered command stream, but by itself DynamoDB can't guarantee commands uniqueness (only once delivery). Thus, to assure idempontence, requests should contain some unique, growing id number, and microservice may wish to check/save the last user request ids. Along these lines, the typical request to our microservice may look like the following:"),r.a.createElement(p.MDXTag,{name:"pre",components:a},r.a.createElement(p.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-sh"}},'curl -XPOST https://XXXXX.execute-api.us-east-1.amazonaws.com/dev/command -d \'{"type":"microserviceName", "command":"commandName", "id":17, "timestamp":11178, "user":"userId"}\'\n')),r.a.createElement(p.MDXTag,{name:"p",components:a},"Event sourcing is an excellent paradigm when one strives to make modular, consistent, and error resilient system. That said, definitely not every application needs it. DynamoDB transactions and conditional updates provide powerful enough tools to handle simple concurrency/data dependencies. But in cases when one needs to handle complex transactional workflows, event sourcing is definitely the way to go. The complete source code of the example implementation of event sourcing using DynamoDB streams could be found on ",r.a.createElement(p.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/act-labs/aws-event-sourcing-example",title:"AWS, simple event sourcing using DynamoDB streams"}},"Github"),". "))},a}(r.a.Component),u=t(756);function g(e){return r.a.createElement(u.a,e,r.a.createElement(d,e))}t.d(a,"default",function(){return g})},736:function(e,a,t){"use strict";t(46);var n=t(737),r=t(0),o=t.n(r),s=t(2),c=t.n(s),i=t(747),m=t.n(i),l=t(34);function p(e){var a=e.description,t=e.lang,r=e.meta,s=e.keywords,c=e.title;return o.a.createElement(l.b,{query:d,render:function(e){return"string"==typeof s&&(s=s.split(",").map(function(e){return e.trim()})),a=a||e.site.siteMetadata.description,o.a.createElement(m.a,{htmlAttributes:{lang:t},title:c,titleTemplate:"%s | "+e.site.siteMetadata.project,meta:[{name:"description",content:a},{property:"og:title",content:c},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:a}].concat(s?{name:"keywords",content:s.join(", ")}:[]).concat(r)})},data:n})}p.defaultProps={lang:"en",meta:[],keywords:null},p.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.oneOfType([c.a.string,c.a.arrayOf(c.a.string)]),title:c.a.string.isRequired},a.a=p;var d="304502870"},737:function(e){e.exports={data:{site:{siteMetadata:{project:"ACT blog",description:"React, Ant Design, Gatsby, GraphQl, and other web technologies",author:"Act Labs"}}}}},738:function(e,a,t){"use strict";t.d(a,"a",function(){return m});t(352);var n=t(739),r=t(0),o=t.n(r),s=t(34),c=t(231),i=t.n(c);function m(){return o.a.createElement(s.b,{query:"2369744027",render:function(e){return o.a.createElement(i.a,{fixed:e.logo.childImageSharp.fixed,style:{float:"left"}})},data:n})}},739:function(e){e.exports={data:{logo:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAYCAYAAAD6S912AAAACXBIWXMAAAsSAAALEgHS3X78AAAGG0lEQVQ4y32VCVBTVxSGX2FcaqfTmWptx7aOndFKXZFqy9iOVqyOLcqMxaVW6lKXikowLAKyFDCERRN2whJICEkIMQEUhEgkZYnKmgQiWwKyOK4oQRah5OWevndprW1t78ybc+8753757zn3vBDEP4auuYEAgBfr9MyEZS/7I/1+4jA997vQ87AAL3vL4wH8XqPREGNjY8QrByf0mB1tuWGertGM78115al7H+jyIpsr03PKeT5QyvHaQ/uFx+bjuPq6m3hfY1PTv2EDD4aIW/mncaBaxsq/X5cGQx1iyIk/BRO9KsgWxEBApNfUaJfyAB1jvHF5dvJBZxyvio/6O6y54SZRXpyH51uOX5plqkltH+/Kg+HW7KkZQcnWrCq1VaoqJl2z8+BWfsBEena2M5We1+n4s5sc7F55XKWU/xpt3Y4nvtHfkDvwsDkTdJfDbeniWNA2q5BWkYoaruWQQz0VoFHJPi9KCV9VEO9/cFoha+4LUEVSMlFOWfnVeAyMOeb6YVdbhXnSooe7hiIbOVAJ5KMmuHNbbRsf1MPkU+PTc1qYWRrD+KogwKMl3Y95Uuh7MhDDqpSFhO8fYP6qWTNomxX8daTk9D7oV8usAAMIWdoAWW4jeN5JjvfUQoNKhlWBZXCOctdmXYTHLh/q+PYYItu9D1vxOwtwHgrd92wpWOvcd+29RdD3wWKbMSsS2awmQIMGZB1tI/uviaFszbrMP0+nPuQmbjqw2wEvzCYTtsINmzBMtG//l4WOa+HykuVQ5rOfNO/YCl3zFqI+eSoA2Qu2RzpEKQYdNxwS5i3Cd5Tr8+OFTNZxY9H1q29hmCQm7kUuxWvW6uqXrYba1U5T5uokuNuei2qZP6C0Q9th4E41gmdtCEbaydF7DcD1Z7jSe6IDjgRUCM+CNCPEg3g0MkKovt2B1ZXu2rve4LgOOj9xtN102YDu1PHQE302uiwPA37EQejUSAF+6wbroJ7KpQkMtdI+bXGsQhB1dFAQcQhy+Ky104VYsBAnU+ay1btwxUrIXbTUWrrdBYZMYqQriYG8VAaSntgJgzVFFNCMyCcGgJEONNRXA4MtfNDmBwM/+LAKwx6PjhKZb7+LgQWO6zOFmxxA7rDYqnLbinoa09HD5izQKsORghcIk4MUaNiIbEOtCIZvo+eP9KCvTOsrE4SICtgMHgY+sFgICUFMV3f1p4WdTk7QsWSFtdJ9G2rUJqGuqkTorU1CPQZK3VgX2J62gM1ipK6R0QrkHdDVlZ2m98rjfIVydbM9Bha/vwgrvPTFBm4rVZD6xcsnK1w3k7rzJ2w1To7QWBKHSEsroCEjUOrohwZOAeqDB91aDk5XnF+Wgn3yTayyZMdO3B1Kpu9HmlVO450r14DeYSW0rFgN7dmBNku3nIJh0F8WK+yGfsN088vjmAlUGzoQsnwRweN424t2Os+kHWXuu13L1zkbm1Z9ptRLI0zDvVJ4qMuxkU8NtCo6f9S8hbo+HSSM6qHt19Qyel9+tNd5SazfNiKa+O9xS8VpHGsXwb2mDHLiXo0NRjopSDvQV2bqSYt1sreQAqZosMKL/p75bK/DeCMvjukhTDjDy4n3DVBksNZwAv3m3iiM5bVXcuGxIcd2vynDNtQmARhtg/GHumGz7spwXz0fJs15YNJmVdCM4nj/bbJYZjDB5/ixy4QBUCk5B1WyUOjQJFj76zOeTZol0FgaTR03ixzpEEFXTUqXukS0TaXWzi+XRrmZqhOhmfKXiyNKcFGiT6/IYzFSCCHnFAUKAWmy93BuvFe3iWq3CQqmr0hUChJ8iyqlIXCz6DxoFJwDL6dDnORTeV0SBJIU/wJ6fUWYME/CZqQTGXHebAHX+xKHHbT0THLrzGJR9MbiXNY3+IMRfyatRh4KAi6jml5PGC/aywVxuHii1JBd1QWhoOQHx7z4kWgml/i/IU1mKtTiYMhJDtuIcx3rbZ+ffRH7MiXX50iSGGOxQR6tvyTWzMYtfP5MFMEJ/M5OGOVux7vgb1ekkBFlkig7RbrftIpEH14q6wh4/nz0Y3odcvYU7qiUcA9sBYlBB5NYJ4PZ7Iv4fyUz5pzT7+jdwN4yQU6eAAAAAElFTkSuQmCC",width:50,height:60,src:"/static/a64620346ac3ce8d4580a3f07039fa3c/8469d/logo.png",srcSet:"/static/a64620346ac3ce8d4580a3f07039fa3c/8469d/logo.png 1x"}}}}}},740:function(e){e.exports={data:{config:{copyright:"Copyright © Act Labs",social:[{icon:"facebook",link:"https://www.facebook.com/ACT7LAB"},{icon:"github",link:"https://github.com/act-labs/gatsby-starter-act-blog"}]}}}},741:function(e){e.exports={data:{config:{nav:[{text:"home",slug:null},{text:"posts",slug:"/posts/"},{text:"snippets",slug:"/snippets/"}]}}}},742:function(e,a,t){"use strict";t(6);var n=t(138),r=(t(178),t(31)),o=t.n(r),s=(t(748),t(734),t(735)),c=t.n(s),i=t(740),m=t(0),l=t.n(m),p=t(34),d=c.a.Footer;function u(e){var a=e.social,t=e.copyright,r=a.map(function(e){var a=e.link,t=e.icon;return l.a.createElement(n.a,{key:t,to:a},l.a.createElement(o.a,{type:t,style:{fontSize:"24px",marginLeft:10,color:"rgba(0, 0, 0, 0.65)"}}))});return l.a.createElement(d,{style:{textAlign:"center"}},l.a.createElement("div",null,t,l.a.createElement("div",{style:{float:"right"}},r)))}function g(e){return e.social?l.a.createElement(u,e):l.a.createElement(p.b,{query:"2743462859",render:function(a){var t=a.config,n=t.social,r=t.copyright;return l.a.createElement(u,Object.assign({social:n,copyright:r},e))},data:i})}t(746);var y=t(745),h=t.n(y),f=t(738),v=t(741),b=c.a.Header;function E(e){var a=e.nav;return l.a.createElement(b,{className:"navigation-bar"},l.a.createElement(n.a,{to:"/"},l.a.createElement(f.a,null)),l.a.createElement(h.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:a.filter(function(e){return e.selected}).map(function(e){return e.text}),style:{lineHeight:"64px"}},a.map(function(e,a){var t=e.slug,r=e.text;return l.a.createElement(h.a.Item,{key:a},l.a.createElement(n.a,{to:t||"/"},r))})))}function D(e){return e.nav?l.a.createElement(E,e):l.a.createElement(p.b,{query:"1250442554",render:function(a){var t=a.config.nav;return l.a.createElement(E,Object.assign({nav:t},e))},data:v})}var T=t(736),w=t(14),M=t.n(w);t(671);t.d(a,"a",function(){return x});var N=c.a.Content,A=c.a.Sider;function X(e){var a=e.style,t=e.children,n=M()(e,["style","children"]);return l.a.createElement(N,Object.assign({style:Object.assign({padding:"5px 24px"},a)},n),t)}function x(e){var a=e.children,t=e.className,n=e.title,r=e.description,o=e.keywords,s=e.style,i=e.layout,m=Object.assign({},k,i),p=m.footer,d=m.fullHeight,u=Object.assign({},d?{height:"100%"}:null,s),y=(t?t+" ":"")+"page-layout";return l.a.createElement(c.a,{className:y,style:u},l.a.createElement(T.a,{title:n,keywords:o,description:r}),l.a.createElement(D,null),a,p?l.a.createElement(g,null):null)}var k={footer:!0};x.Panel=X,x.SideMenuPanel=function(e){var a=e.children,t=e.menu;return l.a.createElement(c.a,{style:{padding:"1em 0",background:"#fff",minHeight:1e3}},l.a.createElement(A,{width:200},t),l.a.createElement(X,null,a))}},744:function(e,a,t){"use strict";t(6);var n=t(138),r=(t(46),t(0)),o=t.n(r),s=t(890),c=t(750),i=t(751),m=t(752),l=t(753),p=t(754),d=t(755);s.a.registerLanguage("javascript",c.a),s.a.registerLanguage("sh",i.a),s.a.registerLanguage("markdown",m.a),s.a.registerLanguage("yaml",l.a),s.a.registerLanguage("dockerfile",p.a);var u=t(1);t.d(a,"a",function(){return y});var g={components:{code:function(e){var a="bash";if(e.className){var t=e.className.split("-");t.length>1&&(a=t[1])}return o.a.createElement(s.a,{language:a,style:d.github},e.children)},a:n.a}};function y(e){var a=Object.assign({},g,e),t=a.components,n=a.children;return o.a.createElement(u.MDXProvider,{components:t},n)}},756:function(e,a,t){"use strict";t.d(a,"a",function(){return i});var n=t(744),r=(t(6),t(742)),o=t(0),s=t.n(o),c=(t(672),r.a.Panel);function i(e){var a=e.children,t=e.pageContext,o=Object.assign({frontmatter:{}},t),i=Object.assign({},{layout:o.layout},o.frontmatter);return s.a.createElement(r.a,i,s.a.createElement(c,{style:{paddingTop:"1em"}},i.title?s.a.createElement("h1",null,i.title):null,s.a.createElement(n.a,null,a)))}}}]);
//# sourceMappingURL=component---src-generated-posts-aws-event-sourcing-js-d152d497e26ab9800064.js.map