(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{722:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(14),i=t.n(o),l=t(15),c=t.n(l),s=t(1),m=function(e){function n(n){var t;return(t=e.call(this,n)||this).layout=null,t}return c()(n,e),n.prototype.render=function(){var e=this.props,n=e.components;i()(e,["components"]);return r.a.createElement(s.MDXTag,{name:"wrapper",components:n},r.a.createElement(s.MDXTag,{name:"p",components:n},"Lets create simple form exploring function children and component cloning along the way. Currently there are many libraries providing good form components, but creating such components from scratch could be fun and could be a good playground to try different techniques. Here we are going to implement components for ",r.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/posts/contact-us-form/",title:"Jest, developing and testing UI for Contact Us form"}},"Contact Us form"),", later we consider ",r.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/posts/mysql-express/",title:"Express and MySql. Simple Contact Us form"}},"server side implementation")," using Express and MySQL. Source code could be found in ",r.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/act-labs/contact-us",title:"Sample contact-us app using React/MySql/Express"}},"Github repository"),"."),r.a.createElement(s.MDXTag,{name:"h2",components:n},"Form components"),r.a.createElement(s.MDXTag,{name:"p",components:n},"Form components pose and interesting challenge as multiple components here should also interact with each other to support validation. We could create some React context to orchestrate such communication, but this could be undesirable as one may wish keep validation and presentation logic separate. There are two alternative techniques which will be investigated here: functions as component children and component cloning. To decouple presentation from validation we create two components: ",r.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Form")," and ",r.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Field")," which will interact with each other. ",r.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Field")," also will be responsible to layout form and will control child components:"),r.a.createElement(s.MDXTag,{name:"pre",components:n},r.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},'const App = () => {\n  ...............................\n\n  return (\n    <div className="App">\n      <header className="App-header">\n        <h1>Contact Us</h1>\n        <p>{last}</p>\n\n        <Form onSubmit={onSubmit}>\n          <Field label={"First name"} name="first_name" required>{({ fieldProps }) => <TextField {...fieldProps} />}</Field>\n          <Field label={"Last name"} name="last_name">{({ fieldProps }) => <TextField {...fieldProps} />}</Field>\n          <Field label={"Address"} name="address" >{({ fieldProps }) => <TextField {...fieldProps} />}</Field>\n          <Field label={"Phone"} name="phone">{({ fieldProps }) => <TextField {...fieldProps} />}</Field>\n          <Field label={"Email"} name="email" required email>{({ fieldProps }) => <TextField {...fieldProps} />}</Field>\n          <Field label={"Message"} name="message" required>{({ fieldProps }) => <Textarea {...fieldProps} />}</Field>\n          <input type="submit" value="Submit" />\n        </Form>\n      </header>\n    </div>\n  )\n}\n')),r.a.createElement(s.MDXTag,{name:"p",components:n},"Here every ",r.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Field/>")," component receives common field properties like ",r.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"label")," and ",r.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"name")," and passes them, with some modification\nto children using ",r.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"fieldProps")," field of the child function. Here we could use children cloning, but function children give additional flexibility, for example we could change components depending on the validation error."),r.a.createElement(s.MDXTag,{name:"p",components:n},r.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Form")," and ",r.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Field")," components should be aware of each other, so we could use React context and function child for even greater flexibility. Here we use React cloning instead. The technique is quite old but could be still useful if we would like to coordinate component still avoiding too tight coupling:"),r.a.createElement(s.MDXTag,{name:"pre",components:n},r.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},'export const Form = ({ onSubmit, children }) => {\n  const validation = useRef({})\n  const values = useRef({})\n  const [errors, setErrors] = useState({})\n\n  const setValidation = (name, validator) => {\n    validation.current = { ...validation.current, [name]: validator }\n  }\n\n  const setValue = (name, value) => {\n    values.current = { ...values.current, [name]: value }\n  }\n\n  const handleSubmit = event => {\n    event.preventDefault()\n\n    const errors = Object.entries(validation.current).reduce((errors, [name, validator]) => {\n      const schema = joi.object({ [name]: validator })\n      const { error } = schema.validate({ [name]: values.current[name] })\n      if (error) {\n        errors[name] = error.message\n      }\n      return errors\n    }, {})\n\n    setErrors(errors)\n\n    if (Object.keys(errors).length) {\n      return\n    }\n\n    const schema = joi.object(validation.current)\n    const {value} = schema.validate(values.current)\n    if(onSubmit) {\n      onSubmit(value)\n    }\n  }\n\n  const augmented = React.Children.map(children, child => {\n    if (child.type === Field) {\n      return React.cloneElement(child, { setValidation, setValue, errors })\n    }\n    return child\n  })\n\n\n  return (\n    <div className="Form">\n      <form onSubmit={handleSubmit}>\n        {augmented}\n      </form>\n    </div>\n  )\n}\n')),r.a.createElement(s.MDXTag,{name:"p",components:n},"Here we call ",r.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"React.cloneElement(child, { setValidation, setValue, errors })")," to add ",r.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"setValidation"),", ",r.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"setValue"),", and ",r.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"errors")," to all ",r.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Field")," components. Here ",r.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"setValidation")," is used to setup validation for each field, and ",r.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"setValue")," to update value on input element change event."),r.a.createElement(s.MDXTag,{name:"p",components:n},"Component cloning plays nicely with function child technique and could be extended to do deep recursive mapping."),r.a.createElement(s.MDXTag,{name:"h2",components:n},"Next"),r.a.createElement(s.MDXTag,{name:"p",components:n},"Now, when form components are created, lets use TDD to implement and test ",r.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/posts/contact-us-form/",title:"Jest, developing and testing UI for Contact Us form"}},"Contact Us form"),"."))},n}(r.a.Component),p=t(753);function d(e){return r.a.createElement(p.a,e,r.a.createElement(m,e))}t.d(n,"default",function(){return d})},732:function(e,n,t){"use strict";t(46);var a=t(733),r=t(0),o=t.n(r),i=t(2),l=t.n(i),c=t(744),s=t.n(c),m=t(34);function p(e){var n=e.description,t=e.lang,r=e.meta,i=e.keywords,l=e.title;return o.a.createElement(m.b,{query:d,render:function(e){return"string"==typeof i&&(i=i.split(",").map(function(e){return e.trim()})),n=n||e.site.siteMetadata.description,o.a.createElement(s.a,{htmlAttributes:{lang:t},title:l,titleTemplate:"%s | "+e.site.siteMetadata.project,meta:[{name:"description",content:n},{property:"og:title",content:l},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:n}].concat(i?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:a})}p.defaultProps={lang:"en",meta:[],keywords:null},p.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.oneOfType([l.a.string,l.a.arrayOf(l.a.string)]),title:l.a.string.isRequired},n.a=p;var d="304502870"},733:function(e){e.exports={data:{site:{siteMetadata:{project:"ACT blog",description:"React, Ant Design, Gatsby, GraphQl, and other web technologies",author:"Act Labs"}}}}},734:function(e,n,t){"use strict";t.d(n,"a",function(){return s});t(352);var a=t(735),r=t(0),o=t.n(r),i=t(34),l=t(231),c=t.n(l);function s(){return o.a.createElement(i.b,{query:"2369744027",render:function(e){return o.a.createElement(c.a,{fixed:e.logo.childImageSharp.fixed,style:{float:"left"}})},data:a})}},735:function(e){e.exports={data:{logo:{childImageSharp:{fixed:{base64:"data:image/png;base64,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",width:50,height:60,src:"/static/a64620346ac3ce8d4580a3f07039fa3c/8469d/logo.png",srcSet:"/static/a64620346ac3ce8d4580a3f07039fa3c/8469d/logo.png 1x"}}}}}},736:function(e){e.exports={data:{config:{copyright:"Copyright © Act Labs",social:[{icon:"facebook",link:"https://www.facebook.com/ACT7LAB"},{icon:"github",link:"https://github.com/act-labs/gatsby-starter-act-blog"}]}}}},737:function(e){e.exports={data:{config:{nav:[{text:"home",slug:null},{text:"posts",slug:"/posts/"},{text:"snippets",slug:"/snippets/"}]}}}},738:function(e,n,t){"use strict";t(6);var a=t(138),r=(t(178),t(31)),o=t.n(r),i=(t(745),t(730),t(731)),l=t.n(i),c=t(736),s=t(0),m=t.n(s),p=t(34),d=l.a.Footer;function u(e){var n=e.social,t=e.copyright,r=n.map(function(e){var n=e.link,t=e.icon;return m.a.createElement(a.a,{key:t,to:n},m.a.createElement(o.a,{type:t,style:{fontSize:"24px",marginLeft:10,color:"rgba(0, 0, 0, 0.65)"}}))});return m.a.createElement(d,{style:{textAlign:"center"}},m.a.createElement("div",null,t,m.a.createElement("div",{style:{float:"right"}},r)))}function g(e){return e.social?m.a.createElement(u,e):m.a.createElement(p.b,{query:"2743462859",render:function(n){var t=n.config,a=t.social,r=t.copyright;return m.a.createElement(u,Object.assign({social:a,copyright:r},e))},data:c})}t(742);var f=t(741),h=t.n(f),v=t(734),b=t(737),E=l.a.Header;function y(e){var n=e.nav;return m.a.createElement(E,{className:"navigation-bar"},m.a.createElement(a.a,{to:"/"},m.a.createElement(v.a,null)),m.a.createElement(h.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:n.filter(function(e){return e.selected}).map(function(e){return e.text}),style:{lineHeight:"64px"}},n.map(function(e,n){var t=e.slug,r=e.text;return m.a.createElement(h.a.Item,{key:n},m.a.createElement(a.a,{to:t||"/"},r))})))}function M(e){return e.nav?m.a.createElement(y,e):m.a.createElement(p.b,{query:"1250442554",render:function(n){var t=n.config.nav;return m.a.createElement(y,Object.assign({nav:t},e))},data:b})}var w=t(732),T=t(14),D=t.n(T);t(671);t.d(n,"a",function(){return x});var A=l.a.Content,X=l.a.Sider;function F(e){var n=e.style,t=e.children,a=D()(e,["style","children"]);return m.a.createElement(A,Object.assign({style:Object.assign({padding:"5px 24px"},n)},a),t)}function x(e){var n=e.children,t=e.className,a=e.title,r=e.description,o=e.keywords,i=e.style,c=e.layout,s=Object.assign({},N,c),p=s.footer,d=s.fullHeight,u=Object.assign({},d?{height:"100%"}:null,i),f=(t?t+" ":"")+"page-layout";return m.a.createElement(l.a,{className:f,style:u},m.a.createElement(w.a,{title:a,keywords:o,description:r}),m.a.createElement(M,null),n,p?m.a.createElement(g,null):null)}var N={footer:!0};x.Panel=F,x.SideMenuPanel=function(e){var n=e.children,t=e.menu;return m.a.createElement(l.a,{style:{padding:"1em 0",background:"#fff",minHeight:1e3}},m.a.createElement(X,{width:200},t),m.a.createElement(F,null,n))}},740:function(e,n,t){"use strict";t(6);var a=t(138),r=(t(46),t(0)),o=t.n(r),i=t(884),l=t(746),c=t(747),s=t(748),m=t(749),p=t(750),d=t(751);i.a.registerLanguage("javascript",l.a),i.a.registerLanguage("sh",c.a),i.a.registerLanguage("markdown",s.a),i.a.registerLanguage("yaml",m.a),i.a.registerLanguage("dockerfile",p.a);var u=t(1);t.d(n,"a",function(){return f});var g={components:{code:function(e){var n="bash";if(e.className){var t=e.className.split("-");t.length>1&&(n=t[1])}return o.a.createElement(i.a,{language:n,style:d.github},e.children)},a:a.a}};function f(e){var n=Object.assign({},g,e),t=n.components,a=n.children;return o.a.createElement(u.MDXProvider,{components:t},a)}},753:function(e,n,t){"use strict";t.d(n,"a",function(){return c});var a=t(740),r=(t(6),t(738)),o=t(0),i=t.n(o),l=(t(672),r.a.Panel);function c(e){var n=e.children,t=e.pageContext,o=Object.assign({frontmatter:{}},t),c=Object.assign({},{layout:o.layout},o.frontmatter);return i.a.createElement(r.a,c,i.a.createElement(l,{style:{paddingTop:"1em"}},c.title?i.a.createElement("h1",null,c.title):null,i.a.createElement(a.a,null,n)))}}}]);
//# sourceMappingURL=component---src-generated-posts-form-components-js-0c62d9269d28815ce128.js.map