(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{703:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(252),i=t(14),s=t.n(i),c=t(15),l=t.n(c),m=t(1),u=function(e){function n(n){var t;return(t=e.call(this,n)||this).layout=null,t}return l()(n,e),n.prototype.render=function(){var e=this.props,n=e.components;s()(e,["components"]);return o.a.createElement(m.MDXTag,{name:"wrapper",components:n},o.a.createElement(m.MDXTag,{name:"p",components:n},"Even for simple static website, authentication can be bebificial. Per user ",o.a.createElement(m.MDXTag,{name:"em",components:n,parentName:"p"},"Google Analytics"),", ",o.a.createElement(m.MDXTag,{name:"em",components:n,parentName:"p"},"Google Drive")," and similar cloud APIs, ability to personalize content and send notifications are just a few possibilities. Though authentication is notoriously difficult to do right, luckily, nowadays, it could be added quite easily. In this post we consider how to add simple user authentication using ",o.a.createElement(m.MDXTag,{name:"em",components:n,parentName:"p"},"React"),", ",o.a.createElement(m.MDXTag,{name:"em",components:n,parentName:"p"},"Ant Design")," and ",o.a.createElement(m.MDXTag,{name:"em",components:n,parentName:"p"},"Firebase")," backend."),o.a.createElement(m.MDXTag,{name:"h2",components:n},"React Hooks and UserContext"),o.a.createElement(m.MDXTag,{name:"p",components:n},"We use ",o.a.createElement(m.MDXTag,{name:"em",components:n,parentName:"p"},"React Hooks")," to use UserContext which will contain user details. To start working with Firebase authentication, only a few clicks are necessary to register and crete web application, install firebase package (",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"npm install --save firebase"),"), enable authentication methods. Copy config from Firebase console, and you are good to go. To implement UserContext, UserProvider just needs to subscribe to firebase authentication changes in useEffect:"),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},'// user-provider.js\n\nimport React, { useEffect, useState} from \'react\'\n\nimport firebase from \'firebase/app\'\nimport \'firebase/auth\'\n\nimport UserContext from "./user-context"\nimport getLogger from "./get-logger"\n\nfunction registerFirebase(firebaseConfig){\n    if (!firebase.apps.length) {\n        return firebase.initializeApp(firebaseConfig) \n    } \n}\n\nfunction signInAnonymously(){\n    if (firebase.auth().currentUser){\n        return\n    }\n    firebase.auth().signInAnonymously().catch(error=>{\n        console.error(error)\n        setTimeout(signInAnonymously, 5000)\n    })    \n}\n\nexport default function UserProvider({firebaseConfig, children, anonymous=true}){\n    try{\n        registerFirebase(firebaseConfig)\n    }catch(error){\n        console.error("during app registration", error)\n    }\n \n    const [user, setUser] = useState(false)\n    const [properties, setProperties] = useState()\n    const debug = getLogger("auth") // use "debug" library to nicely log events \n\n    useEffect(()=>{\n        return firebase.auth().onAuthStateChanged(function(user) {\n            debug("auth state change user: %o", user)\n            setUser(user)\n            if (!user && anonymous){\n                signInAnonymously()\n            }\n        })\n    }, [])\n\n    const addProperties = v => setProperties(Object.assign({}, properties, v))    \n\n    const value = Object.freeze(Object.assign({user, addProperties}, properties))\n    return (\n        <UserContext.Provider value={value}>\n            {children}\n        </UserContext.Provider>\n    )\n}\n')),o.a.createElement(m.MDXTag,{name:"p",components:n},"User tracking could be useful even on public pages (to persist shopping cart, track user behavior in Google Analytics, etc), so it makes sense to add ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"UserProvider")," somewhere near the root of components hierarchy. To update UserContext with additional information (e.g., API tokens), ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"addProperties")," function is provided. To create anonymous users, anonymous authentication should be enabled in Firebase console."),o.a.createElement(m.MDXTag,{name:"h2",components:n},"Password protected sections"),o.a.createElement(m.MDXTag,{name:"p",components:n},"Ant Design comes with excellent form validation components, after augmenting login form example with Firebase specific authentication handler, functional login form is at our disposal. To restrict access to certain application functionality, ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"PasswordProtected")," component could be used, with Login parameter for Login form (defaults to simple Ant Design form), Placeholder (to show something when Firebase is initializing), and buttons (auxillary controls like Google or Facebook sign in buttons). Below is you can see a rather contrived example of login protected page with signout, delete account links, Google Sign In button, Google Drive API authentication, and component showing list of 10 first Google Drive files (implementation details of some components could be found bellow, source code being packaged as ",o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/act-labs/firelib",title:"Ant Design authentication components for Firebase web apps"}},"firelib"),"). "),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},'// password-protected-page-section.js\n<PasswordProtected\n    buttons={[GoogleSignInButton]}\n>\n    <Signout>Signout</Signout>\n    <DeleteUser>Delete account</DeleteUser>\n    <GoogleSignInButton style={googleLoginStyle}/>\n    <GoogleSignInButton\n    style = {googleLoginStyle}\n    scopes = {["https://www.googleapis.com/auth/drive.readonly"]}\n    >\n        Google Drive\n    </GoogleSignInButton>\n    <GoogleDriveFilesList/>\n</PasswordProtected>  \n')),o.a.createElement(m.MDXTag,{name:"p",components:n},"These components already allow to handle quite complicated workflows. An anonymous user is linked with newly created one, and upon login the old anonymous user is deleted. Code also takes care of authentication persistence. This all slightly complicates code of a ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"PasswordProtected")," component, which, nonetheless, remains manageable:"),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},'// password-protected.js\nimport React, { useContext } from \'react\'\nimport firebase from \'firebase/app\'\nimport { notification } from \'antd\'\n\nimport errorNotification from "./error-notification"\nimport UserContext from "./user-context"\nimport getLogger from "./get-logger"\nimport SimpleLogin from "./login"\n\nfunction successfullySentReminderNotification(){\n    notification.success({\n        message:"Password reminder was successfully sent to your E-mail address",\n        description: "Check your mail box!", \n        duration: 10\n    }); \n}\n\nasync function signInWithEmailAndPassword(action, email, password, remember){\n    const auth = firebase.auth(), user = auth.currentUser\n    const Persistence = firebase.auth.Auth.Persistence\n\n    await auth.setPersistence(remember ? Persistence.LOCAL : Persistence.NONE)\n    \n    if (action === "login"){\n        await auth.signInWithEmailAndPassword(email, password)\n        if (user && user.isAnonymous){\n            user.delete()\n        }\n        return\n    }\n\n    if (user){\n        const credential = firebase.auth.EmailAuthProvider.credential(email, password)\n        await user.linkWithCredential(credential)\n        return\n    }\n    \n    await auth.createUserWithEmailAndPassword(email, password)     \n}\n\nfunction loginProcessor(addProperties){\n    return async ({action, values})=>{\n        const debug = getLogger("auth")    \n        debug(\'%s, form: %o\', action, values)\n        const {email, password, remember} = values      \n\n        try{\n            if (action === "login" || action === "register"){\n                await signInWithEmailAndPassword(action, email, password, remember)\n            } else if (action === "remind") {\n                await firebase.auth().sendPasswordResetEmail(email)\n                successfullySentReminderNotification()\n            } else{\n                throw new Error(`not implemented login action: ${action}`)               \n            }\n        }catch(error){   \n            errorNotification({operation:"during authentication", error})\n        }\n        addProperties()  \n    }\n}\n\nexport default function PasswordProtected({Login, Placeholder, buttons, handler, children}){\n    const {user, addProperties} = useContext(UserContext)    \n    if (!Login){\n        Login = SimpleLogin\n    }\n\n    if (user === false){\n        return Placeholder ? <Placeholder/> : null \n    }\n\n    if (user && !user.isAnonymous){\n        return <>{children}</>\n    }\n\n    const processor = loginProcessor(addProperties)\n    const action = handler? ()=> handler(processor, addProperties): processor\n\n    return <Login action={action} buttons={buttons}/>\n}\n')),o.a.createElement(m.MDXTag,{name:"p",components:n},"As anyone can see, in such a way, login form with email/password, password reminders, Google Sign In, anonymous users, and authentication persistence could be implemented with relatively little code, thanks to ",o.a.createElement(m.MDXTag,{name:"em",components:n,parentName:"p"},"Firebase")," and ",o.a.createElement(m.MDXTag,{name:"em",components:n,parentName:"p"},"Ant Design")," libraries. You can play with the form below:"),o.a.createElement(r.a,null),o.a.createElement(m.MDXTag,{name:"h2",components:n},"Integrate React application with Google API"),o.a.createElement(m.MDXTag,{name:"p",components:n},"Firebase comes with a support of many various authentication workflows. The components above may answer the basic authentication needs of an average web application, otherwise you may wish directly refer to Firebase documentation. Here only one more aspect of authentication is considered in more details: integration with various Google API. These APIs allow read/save data from Google Docs, Google Spreadsheet, Google Drive, etc, and could be useful in many React applications. For implementation, lets look at the code for ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<GoogleSignInButton/>")," component:"),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},'import React, { useContext} from \'react\'\nimport firebase from \'firebase/app\'\nimport {Button} from "antd"\n\nimport errorNotification from "./error-notification"\nimport UserContext from "./user-context"\n\nasync function signInWithPopup(user, provider){\n    if (user && !user.isAnonymous){\n        const linked = user.providerData.some(v=>v.providerId === provider.providerId)\n        if (linked){\n            return firebase.auth().signInWithPopup(provider)\n        } \n\n        return user.linkWithPopup(provider)\n    }\n    const result = await firebase.auth().signInWithPopup(provider)\n    if (user && user.isAnonymous){\n        user.delete() \n    }\n\n    return result\n}\n\nexport default function GoogleSignInButton(props){\n    const {user, addProperties} = useContext(UserContext)\n    const {scopes, children, className, ...other} = props    \n    const onClick = async ()=>{\n        const provider = new firebase.auth.GoogleAuthProvider()\n        if (scopes){\n            scopes.forEach(scope=>provider.addScope(scope))\n        }\n        try {\n            const result = await signInWithPopup(user, provider)\n            const accessToken = result.credential.accessToken\n            addProperties({accessToken})\n        }catch(error) {\n            errorNotification({operation:"during google sign in", error})\n        }     \n    }\n    return (\n        <Button\n        className={"login-form__button" + (className? className:"")}\n        icon="google" onClick={onClick} {...other}>\n            { children || "Sign in with Google!"}\n        </Button>\n    )\n}\n')),o.a.createElement(m.MDXTag,{name:"p",components:n},"To authenticate using Google account, basically the same set of functions as before is used with a ",o.a.createElement(m.MDXTag,{name:"em",components:n,parentName:"p"},"provider")," object argument, configuring particular authentication method. In case of Google, access to APIs could be configured using ",o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://developers.google.com/identity/protocols/googlescopes",title:"Scopes for Google APIs"}},"scopes"),". As a result  ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"accessToken")," is returned to be used in future requests, and ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"refreshToken")," is added to user object to request new ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"accessToken"),"s in server side functions after  ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"accessToken")," expiration. When ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"accessToken"),'\nbecomes available it could be used in "Authentication" header in Google API requests, as in a simple example component, listing first 10 files from Google Drive:'),o.a.createElement(m.MDXTag,{name:"pre",components:n},o.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},'function listFiles({accessToken}){\n    return fetch("https://www.googleapis.com/drive/v3/files?pageSize=10", {\n        method: \'GET\',\n        headers: new Headers({ \'Authorization\': \'Bearer \' + accessToken }),\n    }).then((res) => {\n        return res.json();\n    });\n}\n\nfunction GoogleDriveFilesList(){\n    const {accessToken} = useContext(UserContext)\n\n    const files = useAsync(async ()=>{\n        if (!accessToken){\n            return null\n        }\n\n        return listFiles({accessToken})\n    },[accessToken])\n\n    if(files.error){\n        errorNotification({operation:"when connecting to Google drive", error:files.error})        \n    }\n\n    if (files.value && files.value.error){\n        const error = files.value.error\n        const message = error.message\n        return (\n        <Alert \n            message="Google Drive files list error"\n            description={message}\n            type="warning"\n            showIcon \n        />\n        )\n    }\n\n    if (!accessToken){\n        return (\n            <Alert \n                message="Google Drive API is not available"\n                description="Login, using Google Drive button!"\n                type="warning"\n                showIcon \n            />\n        )        \n    }\n\n    return (<List\n        style={{margin:10}}\n        loading={files.loading}\n        dataSource={(files.value && files.value.files) || []}\n        renderItem={file=> <List.Item>{file.name}</List.Item>}\n    />\n    )\n}\n')),o.a.createElement(m.MDXTag,{name:"p",components:n},"Even if you are not going to use Firebase for anything else, you may wish to use it for easy of authentication and integration with with other Google offerings. Here we only could scratch the surface of the authentication. For more details, refer directly to ",o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://firebase.google.com/docs/auth/"}},"Firebase documentation"),", and ",o.a.createElement(m.MDXTag,{name:"em",components:n,parentName:"p"},"firelib")," source code on ",o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/act-labs/firelib",title:"React components for Firebase web apps"}},"Github")," repository."))},n}(o.a.Component),p=t(748);function g(e){return o.a.createElement(p.a,e,o.a.createElement(u,e))}t.d(n,"default",function(){return g})},727:function(e,n,t){"use strict";t(46);var a=t(728),o=t(0),r=t.n(o),i=t(2),s=t.n(i),c=t(739),l=t.n(c),m=t(34);function u(e){var n=e.description,t=e.lang,o=e.meta,i=e.keywords,s=e.title;return r.a.createElement(m.b,{query:p,render:function(e){return"string"==typeof i&&(i=i.split(",").map(function(e){return e.trim()})),n=n||e.site.siteMetadata.description,r.a.createElement(l.a,{htmlAttributes:{lang:t},title:s,titleTemplate:"%s | "+e.site.siteMetadata.project,meta:[{name:"description",content:n},{property:"og:title",content:s},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:n}].concat(i?{name:"keywords",content:i.join(", ")}:[]).concat(o)})},data:a})}u.defaultProps={lang:"en",meta:[],keywords:null},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.oneOfType([s.a.string,s.a.arrayOf(s.a.string)]),title:s.a.string.isRequired},n.a=u;var p="304502870"},728:function(e){e.exports={data:{site:{siteMetadata:{project:"ACT blog",description:"React, Ant Design, Gatsby, GraphQl, and other web technologies",author:"Act Labs"}}}}},729:function(e,n,t){"use strict";t.d(n,"a",function(){return l});t(352);var a=t(730),o=t(0),r=t.n(o),i=t(34),s=t(231),c=t.n(s);function l(){return r.a.createElement(i.b,{query:"2369744027",render:function(e){return r.a.createElement(c.a,{fixed:e.logo.childImageSharp.fixed,style:{float:"left"}})},data:a})}},730:function(e){e.exports={data:{logo:{childImageSharp:{fixed:{base64:"data:image/png;base64,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",width:50,height:60,src:"/static/a64620346ac3ce8d4580a3f07039fa3c/8469d/logo.png",srcSet:"/static/a64620346ac3ce8d4580a3f07039fa3c/8469d/logo.png 1x"}}}}}},731:function(e){e.exports={data:{config:{copyright:"Copyright © Act Labs",social:[{icon:"facebook",link:"https://www.facebook.com/ACT7LAB"},{icon:"github",link:"https://github.com/act-labs/gatsby-starter-act-blog"}]}}}},732:function(e){e.exports={data:{config:{nav:[{text:"home",slug:null},{text:"posts",slug:"/posts/"},{text:"snippets",slug:"/snippets/"}]}}}},733:function(e,n,t){"use strict";t(6);var a=t(138),o=(t(178),t(31)),r=t.n(o),i=(t(740),t(725),t(726)),s=t.n(i),c=t(731),l=t(0),m=t.n(l),u=t(34),p=s.a.Footer;function g(e){var n=e.social,t=e.copyright,o=n.map(function(e){var n=e.link,t=e.icon;return m.a.createElement(a.a,{key:t,to:n},m.a.createElement(r.a,{type:t,style:{fontSize:"24px",marginLeft:10,color:"rgba(0, 0, 0, 0.65)"}}))});return m.a.createElement(p,{style:{textAlign:"center"}},m.a.createElement("div",null,t,m.a.createElement("div",{style:{float:"right"}},o)))}function d(e){return e.social?m.a.createElement(g,e):m.a.createElement(u.b,{query:"2743462859",render:function(n){var t=n.config,a=t.social,o=t.copyright;return m.a.createElement(g,Object.assign({social:a,copyright:o},e))},data:c})}t(737);var f=t(736),h=t.n(f),b=t(729),y=t(732),w=s.a.Header;function v(e){var n=e.nav;return m.a.createElement(w,{className:"navigation-bar"},m.a.createElement(a.a,{to:"/"},m.a.createElement(b.a,null)),m.a.createElement(h.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:n.filter(function(e){return e.selected}).map(function(e){return e.text}),style:{lineHeight:"64px"}},n.map(function(e,n){var t=e.slug,o=e.text;return m.a.createElement(h.a.Item,{key:n},m.a.createElement(a.a,{to:t||"/"},o))})))}function E(e){return e.nav?m.a.createElement(v,e):m.a.createElement(u.b,{query:"1250442554",render:function(n){var t=n.config.nav;return m.a.createElement(v,Object.assign({nav:t},e))},data:y})}var A=t(727),T=t(14),D=t.n(T);t(671);t.d(n,"a",function(){return N});var M=s.a.Content,k=s.a.Sider;function P(e){var n=e.style,t=e.children,a=D()(e,["style","children"]);return m.a.createElement(M,Object.assign({style:Object.assign({padding:"5px 24px"},n)},a),t)}function N(e){var n=e.children,t=e.className,a=e.title,o=e.description,r=e.keywords,i=e.style,c=e.layout,l=Object.assign({},X,c),u=l.footer,p=l.fullHeight,g=Object.assign({},p?{height:"100%"}:null,i),f=(t?t+" ":"")+"page-layout";return m.a.createElement(s.a,{className:f,style:g},m.a.createElement(A.a,{title:a,keywords:r,description:o}),m.a.createElement(E,null),n,u?m.a.createElement(d,null):null)}var X={footer:!0};N.Panel=P,N.SideMenuPanel=function(e){var n=e.children,t=e.menu;return m.a.createElement(s.a,{style:{padding:"1em 0",background:"#fff",minHeight:1e3}},m.a.createElement(k,{width:200},t),m.a.createElement(P,null,n))}},735:function(e,n,t){"use strict";t(6);var a=t(138),o=(t(46),t(0)),r=t.n(o),i=t(878),s=t(742),c=t(743),l=t(744),m=t(745),u=t(746),p=t(747);i.a.registerLanguage("javascript",s.a),i.a.registerLanguage("sh",c.a),i.a.registerLanguage("markdown",l.a),i.a.registerLanguage("yaml",m.a),i.a.registerLanguage("dockerfile",u.a);var g=t(1);t.d(n,"a",function(){return f});var d={components:{code:function(e){var n="bash";if(e.className){var t=e.className.split("-");t.length>1&&(n=t[1])}return r.a.createElement(i.a,{language:n,style:p.github},e.children)},a:a.a}};function f(e){var n=Object.assign({},d,e),t=n.components,a=n.children;return r.a.createElement(g.MDXProvider,{components:t},a)}},748:function(e,n,t){"use strict";t.d(n,"a",function(){return c});var a=t(735),o=(t(6),t(733)),r=t(0),i=t.n(r),s=(t(672),o.a.Panel);function c(e){var n=e.children,t=e.pageContext,r=Object.assign({frontmatter:{}},t),c=Object.assign({},{layout:r.layout},r.frontmatter);return i.a.createElement(o.a,c,i.a.createElement(s,{style:{paddingTop:"1em"}},c.title?i.a.createElement("h1",null,c.title):null,i.a.createElement(a.a,null,n)))}}}]);
//# sourceMappingURL=component---src-generated-posts-firebase-auth-js-f46768435e77c522d7a9.js.map