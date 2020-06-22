(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{715:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(14),s=t.n(o),c=t(15),i=t.n(c),l=t(1),m=function(e){function n(n){var t;return(t=e.call(this,n)||this).layout=null,t}return i()(n,e),n.prototype.render=function(){var e=this.props,n=e.components;s()(e,["components"]);return r.a.createElement(l.MDXTag,{name:"wrapper",components:n},r.a.createElement(l.MDXTag,{name:"p",components:n},"Production ready Express project structure. Focus on testability (using Jest) and scalability. Project is supposed to work with simple",r.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/posts/contact-us-form/",title:"Jest, developing and testing UI for Contact Us form"}},"Contact Us form"),". When in development, project uses pm2 manager to run server and docker container to run MySql database (see blog post about ",r.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/posts/schema-migration/"}},"migration scripts"),"). Source code is in ",r.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/act-labs/contact-us",title:"Sample contact-us app using React/MySql/Express"}},"Github repository"),"."),r.a.createElement(l.MDXTag,{name:"h2",components:n},"Express application structure"),r.a.createElement(l.MDXTag,{name:"p",components:n},"For scalability and better testability, when organizing project structure, it is better to stick with best practices. We organize our project into following directories:"),r.a.createElement(l.MDXTag,{name:"ul",components:n},r.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"models - code for interaction with database (in our case MySql)"),r.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"controllers - handle HTTP requests, do validation, handle business logic using ",r.a.createElement(l.MDXTag,{name:"em",components:n,parentName:"li"},"services")," (no need here because of the simplicity of the project) and persist data using models"),r.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"routes - responsible to configure API endpoints"),r.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"scripts - various maintenance tasks, in our case seeding database with the help of ",r.a.createElement(l.MDXTag,{name:"em",components:n,parentName:"li"},"faker")),r.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"sql/migration - directory for ",r.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"*.sql")," files to modify database schema, with Dockerfile to build Docker container with up-to-date schema"),r.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"test - for jest test files")),r.a.createElement(l.MDXTag,{name:"h2",components:n},"Model"),r.a.createElement(l.MDXTag,{name:"p",components:n},"Model contains all the files interacting with databases. They all reuse file ",r.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"db.js")," which opens database connections. In our case, initially, we need minimum of operations:"),r.a.createElement(l.MDXTag,{name:"pre",components:n},r.a.createElement(l.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},'const sql = require("./db")\n\nconst ContactUs = {}\n\nContactUs.create = (newContact) => {\n    return new Promise((resolve, reject) => {\n        sql.query("INSERT INTO CONTACT_US SET ?", newContact, (err, res) => {\n            if (err) {\n                console.log("error: ", err)\n                reject(err)\n                return\n            }\n\n            console.log("created contact-us: ", { id: res.insertId, ...newContact })\n            resolve({ id: res.insertId, ...newContact })\n        })\n    })\n}\n\nContactUs.findById = (contactId) => {\n    return new Promise((resolve, reject) => {\n        sql.query(`SELECT * FROM CONTACT_US WHERE id = ${contactId}`, (err, res) => {\n            if (err) {\n                console.log("error: ", err)\n                reject(err)\n                return\n            }\n\n            if (res.length) {\n                console.log("found contact-us: ", res[0])\n                resolve(res[0])\n                return\n            }\n\n            // not found ContactUs with the id\n            resolve(null)\n        })\n    })\n}\n\nContactUs.removeAll = () => {\n    return new Promise((resolve, reject) => {\n        sql.query("DELETE FROM CONTACT_US", (err, res) => {\n            if (err) {\n                console.log("error: ", err)\n                reject(err)\n                return\n            }\n\n            console.log(`deleted ${res.affectedRows} contact-us`)\n            resolve(res)\n        })\n    })\n}\n\nContactUs.getAll = () => {\n    return new Promise((resolve, reject) => {\n        sql.query("SELECT * FROM CONTACT_US ORDER BY ID", (err, res) => {\n            if (err) {\n                console.log("error: ", err)\n                reject(err)\n                return\n            }\n\n            console.log("contact-us: ", res)\n            resolve(res)\n        })\n    })\n}\n\nmodule.exports = ContactUs\n')),r.a.createElement(l.MDXTag,{name:"h2",components:n},"Controllers"),r.a.createElement(l.MDXTag,{name:"p",components:n},"In our case we just do the simplest request validation/error handling"),r.a.createElement(l.MDXTag,{name:"pre",components:n},r.a.createElement(l.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},'const Contact = require("../models/contact-us.model")\n\n// Create and Save a new Message\nexports.create = async(req, res) => {\n    // Validate request\n    if (!req.body) {\n        res.status(400).send({\n            message: "Content can not be empty!"\n        })\n    }\n\n    try {\n        await Contact.create(req.body)\n        res.send({message: "Success!"})\n    } catch (err) {\n        console.error(err)\n        res.status(500).send({\n            message: err.message || "Some error occurred while saving your message."\n        })\n    }\n}\n\n// Retrieve all Messages from the database.\nexports.findAll = async(_req, res) => {\n    try {\n        const contacts = await Contact.getAll()\n        res.send(contacts)\n    } catch (err) {\n        console.error(err)\n        res.status(500).send({\n            message: err.message || "Some error occurred while retrieving messages."\n        })\n    }\n}\n')),r.a.createElement(l.MDXTag,{name:"h2",components:n},"Routes"),r.a.createElement(l.MDXTag,{name:"p",components:n},"Files here work essentially as configuration files, responsible to configure our API endpoints:"),r.a.createElement(l.MDXTag,{name:"pre",components:n},r.a.createElement(l.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},'module.exports = app => {\n    const contacts = require("../controllers/contact-us.controller")\n\n    // Create a new Contact\n    app.post("/contacts", contacts.create)\n\n    // Retrieve all Contacts\n    app.get("/contacts", contacts.findAll)\n}\n')),r.a.createElement(l.MDXTag,{name:"h2",components:n},"Server"),r.a.createElement(l.MDXTag,{name:"p",components:n},"Our server.js file wires it all together (adding a few endpoints for easy diagnostic):"),r.a.createElement(l.MDXTag,{name:"pre",components:n},r.a.createElement(l.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"const express = require('express')\nconst bodyParser = require('body-parser')\nconst path = require('path')\n\nconst cors = require('cors')\n\nconst PORT = process.env.PORT || 8080\nconst app = express()\n\n//STATIC FOLDER\napp.use(express.static(path.join(__dirname, '../client/build')))\n\n// Body Parser Middleware\napp.use(bodyParser.json())\n\n// Deal with CORS\napp.use(cors())\n\n// Start Express listening\napp.listen(PORT, () => {\n  console.log(`Server started on port ${PORT}`)\n})\n\n// Test to make sure the API can talk to React\napp.get('/', (_req, res) => {\n  return res.json({\n    message: 'API Active'\n  })\n})\n\n// An echo, to help with debugging\napp.post('/', (req, res) => {\n  return res.json({\n    message: 'ECHO!',\n    posted: req.body\n  })\n})\n\nrequire(\"./routes/contact-us.routes\")(app)\n")),r.a.createElement(l.MDXTag,{name:"h2",components:n},"TDD using Jest, easy mocking MySql"),r.a.createElement(l.MDXTag,{name:"p",components:n},"Such complicated project structure may look like an overkill for such a simple project, but we will rip benefits of our approach when extending and maintaining our project. Even now, such structure helps us to test easily. First we can test our model functions with our Docker Mysql container running:"),r.a.createElement(l.MDXTag,{name:"pre",components:n},r.a.createElement(l.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"describe('model methods', () => {\n    it('contact is created and queried back', async () => {\n        const req = {\n            first_name: 'name',\n            email: 'email@email.com',\n            message: 'message',\n            last_name: 'surname',\n            phone: 'phone',\n            address: 'address'\n        }\n        const contact = require(\"../../models/contact-us.model\")\n        const res1 = await contact.create(req)\n        expect(res1).toMatchObject(req)\n        const res2 = await contact.findById(res1.id)\n        expect(res2).toMatchObject(res1)\n    })\n\n    it('deletes all, create a few, select all', async () => {\n        const faker = require(\"faker\")\n        const contact = require(\"../../models/contact-us.model\")\n        await contact.removeAll()\n        const total = 5\n\n        const contacts = []\n        for (let i = 0; i < total; i++) {\n            const req = {\n                first_name: faker.name.firstName(),\n                email: faker.internet.email(),\n                message: faker.lorem.sentences(5),\n                last_name: faker.name.lastName(),\n                phone: faker.phone.phoneNumberFormat(),\n                address: faker.address.streetAddress(\"###\")\n            }\n            const res1 = await contact.create(req)\n            contacts.push(res1)\n        }\n\n        const all = await contact.getAll()\n        expect(all.length).toBe(total)\n\n        for (let i = 0; i < total; i++) {\n            expect(all[i]).toMatchObject(contacts[i])\n        }\n    })\n\n    afterAll(() => {\n        const db = require(\"../../models/db\")\n        db.destroy();\n    })\n})\n")),r.a.createElement(l.MDXTag,{name:"p",components:n},"Here we just insert new object and query it immediately. Than we remove all record, insert a few new, populated using faker, query them all again and close connection. After our models are tested, we may use the rest of application without MySql container, just mocking MySql and our models using Jest:"),r.a.createElement(l.MDXTag,{name:"pre",components:n},r.a.createElement(l.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"jest.mock(\"mysql\", () => {\n    return {\n        createConnection: () => ({\n            connect: () => null\n        })\n    }\n})\n\nconst model = require(\"../../models/contact-us.model\")\njest.mock(\"../../models/contact-us.model\")\n\nconst mockResponse = () => {\n    const res = {}\n    res.send = jest.fn().mockReturnValue(res)\n    res.status = jest.fn().mockReturnValue(res)\n    res.json = jest.fn().mockReturnValue(res)\n    return res\n}\n\ndescribe('controllers', () => {\n    it('contact creation success', async () => {\n        const data = {\n            first_name: 'name',\n            email: 'email@email.com',\n            message: 'message',\n            last_name: 'surname',\n            phone: 'phone',\n            address: 'address'\n        }\n        const contact = require(\"../../controllers/contact-us.controller\")\n        const res = mockResponse ()\n        await contact.create({ body: data }, res)\n        expect(model.create.mock.calls.length).toBe(1)\n        expect(model.create.mock.calls[0][0]).toEqual(data)\n\n        expect(res.send.mock.calls[0][0]).toEqual({message: \"Success!\"})\n    })\n})\n")),r.a.createElement(l.MDXTag,{name:"h2",components:n},"Next"),r.a.createElement(l.MDXTag,{name:"p",components:n},"As one may see, our model code is not especially original, and could be easily reused for similar tables. As the number of endpoints growth, we usually end up in a situation when our application is using a few core functions and a few components. Adding a new endpoints becomes practically the matter of configuration. Tests of such endpoints become less and less helpful, as they essentially retest a few core functions with different parameters. At the same time as production infrastructure becomes more and more and more complex, interaction between different components of application becomes the main source of bugs and complexity. At this point we may wish to resort to tools like Cypress simplifying integration and end-to-end testing. Even than clean project structure and ability to test different application components in isolation (so called Double Loop Testing) greatly simplify maintenance and further development."))},n}(r.a.Component),p=t(753);function u(e){return r.a.createElement(p.a,e,r.a.createElement(m,e))}t.d(n,"default",function(){return u})},732:function(e,n,t){"use strict";t(46);var a=t(733),r=t(0),o=t.n(r),s=t(2),c=t.n(s),i=t(744),l=t.n(i),m=t(34);function p(e){var n=e.description,t=e.lang,r=e.meta,s=e.keywords,c=e.title;return o.a.createElement(m.b,{query:u,render:function(e){return"string"==typeof s&&(s=s.split(",").map(function(e){return e.trim()})),n=n||e.site.siteMetadata.description,o.a.createElement(l.a,{htmlAttributes:{lang:t},title:c,titleTemplate:"%s | "+e.site.siteMetadata.project,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(s?{name:"keywords",content:s.join(", ")}:[]).concat(r)})},data:a})}p.defaultProps={lang:"en",meta:[],keywords:null},p.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.oneOfType([c.a.string,c.a.arrayOf(c.a.string)]),title:c.a.string.isRequired},n.a=p;var u="304502870"},733:function(e){e.exports={data:{site:{siteMetadata:{project:"ACT blog",description:"React, Ant Design, Gatsby, GraphQl, and other web technologies",author:"Act Labs"}}}}},734:function(e,n,t){"use strict";t.d(n,"a",function(){return l});t(352);var a=t(735),r=t(0),o=t.n(r),s=t(34),c=t(231),i=t.n(c);function l(){return o.a.createElement(s.b,{query:"2369744027",render:function(e){return o.a.createElement(i.a,{fixed:e.logo.childImageSharp.fixed,style:{float:"left"}})},data:a})}},735:function(e){e.exports={data:{logo:{childImageSharp:{fixed:{base64:"data:image/png;base64,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",width:50,height:60,src:"/static/a64620346ac3ce8d4580a3f07039fa3c/8469d/logo.png",srcSet:"/static/a64620346ac3ce8d4580a3f07039fa3c/8469d/logo.png 1x"}}}}}},736:function(e){e.exports={data:{config:{copyright:"Copyright © Act Labs",social:[{icon:"facebook",link:"https://www.facebook.com/ACT7LAB"},{icon:"github",link:"https://github.com/act-labs/gatsby-starter-act-blog"}]}}}},737:function(e){e.exports={data:{config:{nav:[{text:"home",slug:null},{text:"posts",slug:"/posts/"},{text:"snippets",slug:"/snippets/"}]}}}},738:function(e,n,t){"use strict";t(6);var a=t(138),r=(t(178),t(31)),o=t.n(r),s=(t(745),t(730),t(731)),c=t.n(s),i=t(736),l=t(0),m=t.n(l),p=t(34),u=c.a.Footer;function d(e){var n=e.social,t=e.copyright,r=n.map(function(e){var n=e.link,t=e.icon;return m.a.createElement(a.a,{key:t,to:n},m.a.createElement(o.a,{type:t,style:{fontSize:"24px",marginLeft:10,color:"rgba(0, 0, 0, 0.65)"}}))});return m.a.createElement(u,{style:{textAlign:"center"}},m.a.createElement("div",null,t,m.a.createElement("div",{style:{float:"right"}},r)))}function g(e){return e.social?m.a.createElement(d,e):m.a.createElement(p.b,{query:"2743462859",render:function(n){var t=n.config,a=t.social,r=t.copyright;return m.a.createElement(d,Object.assign({social:a,copyright:r},e))},data:i})}t(742);var f=t(741),h=t.n(f),y=t(734),E=t(737),b=c.a.Header;function w(e){var n=e.nav;return m.a.createElement(b,{className:"navigation-bar"},m.a.createElement(a.a,{to:"/"},m.a.createElement(y.a,null)),m.a.createElement(h.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:n.filter(function(e){return e.selected}).map(function(e){return e.text}),style:{lineHeight:"64px"}},n.map(function(e,n){var t=e.slug,r=e.text;return m.a.createElement(h.a.Item,{key:n},m.a.createElement(a.a,{to:t||"/"},r))})))}function v(e){return e.nav?m.a.createElement(w,e):m.a.createElement(p.b,{query:"1250442554",render:function(n){var t=n.config.nav;return m.a.createElement(w,Object.assign({nav:t},e))},data:E})}var M=t(732),T=t(14),A=t.n(T);t(671);t.d(n,"a",function(){return C});var q=c.a.Content,D=c.a.Sider;function k(e){var n=e.style,t=e.children,a=A()(e,["style","children"]);return m.a.createElement(q,Object.assign({style:Object.assign({padding:"5px 24px"},n)},a),t)}function C(e){var n=e.children,t=e.className,a=e.title,r=e.description,o=e.keywords,s=e.style,i=e.layout,l=Object.assign({},j,i),p=l.footer,u=l.fullHeight,d=Object.assign({},u?{height:"100%"}:null,s),f=(t?t+" ":"")+"page-layout";return m.a.createElement(c.a,{className:f,style:d},m.a.createElement(M.a,{title:a,keywords:o,description:r}),m.a.createElement(v,null),n,p?m.a.createElement(g,null):null)}var j={footer:!0};C.Panel=k,C.SideMenuPanel=function(e){var n=e.children,t=e.menu;return m.a.createElement(c.a,{style:{padding:"1em 0",background:"#fff",minHeight:1e3}},m.a.createElement(D,{width:200},t),m.a.createElement(k,null,n))}},740:function(e,n,t){"use strict";t(6);var a=t(138),r=(t(46),t(0)),o=t.n(r),s=t(884),c=t(746),i=t(747),l=t(748),m=t(749),p=t(750),u=t(751);s.a.registerLanguage("javascript",c.a),s.a.registerLanguage("sh",i.a),s.a.registerLanguage("markdown",l.a),s.a.registerLanguage("yaml",m.a),s.a.registerLanguage("dockerfile",p.a);var d=t(1);t.d(n,"a",function(){return f});var g={components:{code:function(e){var n="bash";if(e.className){var t=e.className.split("-");t.length>1&&(n=t[1])}return o.a.createElement(s.a,{language:n,style:u.github},e.children)},a:a.a}};function f(e){var n=Object.assign({},g,e),t=n.components,a=n.children;return o.a.createElement(d.MDXProvider,{components:t},a)}},753:function(e,n,t){"use strict";t.d(n,"a",function(){return i});var a=t(740),r=(t(6),t(738)),o=t(0),s=t.n(o),c=(t(672),r.a.Panel);function i(e){var n=e.children,t=e.pageContext,o=Object.assign({frontmatter:{}},t),i=Object.assign({},{layout:o.layout},o.frontmatter);return s.a.createElement(r.a,i,s.a.createElement(c,{style:{paddingTop:"1em"}},i.title?s.a.createElement("h1",null,i.title):null,s.a.createElement(a.a,null,n)))}}}]);
//# sourceMappingURL=component---src-generated-posts-mysql-express-js-db8623428e9405e6bcf5.js.map