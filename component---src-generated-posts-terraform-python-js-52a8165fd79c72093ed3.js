(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{729:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),o=a(14),i=a.n(o),s=a(15),l=a.n(s),m=a(1),c=function(e){function n(n){var a;return(a=e.call(this,n)||this).layout=null,a}return l()(n,e),n.prototype.render=function(){var e=this.props,n=e.components;i()(e,["components"]);return r.a.createElement(m.MDXTag,{name:"wrapper",components:n},r.a.createElement(m.MDXTag,{name:"p",components:n},"Terraform is a great tool to configure infrastructure, but, at certain level of project complexity, Terraform configuration management becomes an issue. It is easy to start your project simple, but, as it grows, you need to create more and more resources: for production, dev and staging environment, for different regions and cloud providers, for individual clients. All these environments need to be similar, though still may vary slightly. There are different approaches to address growing complexity in Terraform. One may manage all infrastructure through the single module, which becomes a single source of truth, and helps to achieve uniformity and avoid code duplication. On the downside, this tightly couples all the infrastructure in a project and doesn't scale well beyond certain project complexity. The next logical step is to split project into many subprojects. But as soon as configuration and Terraform states are splitted into independent subprojects, there arise the need to manage and coordinate them. When it comes to multiple configurations, Terraform internal capabilities are limited enough, which made tools like Terragrunt very popular. While extending some Terraform capabilities, Terragrunt still is quite limited. After all, the real root of the problem lies in the fact, that as convenient for infrastructure definitions as HCL (a configuration language used in both Terragrunt and Terraform) is, it is not as flexible and powerful, as a general purpose language. And that is when Python could be very helpful."),r.a.createElement(m.MDXTag,{name:"h1",components:n},"Configuration generation"),r.a.createElement(m.MDXTag,{name:"p",components:n},"In Terraform you may specify configuration not only using HCL configuration language, but using JSON files as well. And, as you know, Python has a lot of tooling to work with JSON. Not a surprise, there have been developed many libraries allowing to define Terraform artifacts directly in Python. One of them, ",r.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://pypi.org/project/terraformpy/"}},"terraformpy")," allows to create Terraform artifacts using syntax nearly identical to HCL:"),r.a.createElement(m.MDXTag,{name:"pre",components:n},r.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-python"}},"    Resource(\n        'aws_instance', 'example',\n        ami=ami.id,\n        instance_type='m4.xlarge'\n    )\n")),r.a.createElement(m.MDXTag,{name:"p",components:n},"Using such library, one may easily define entire configuration in Python. Or, even better, one just can use it to combine/orchestrate existing Terraform modules."),r.a.createElement(m.MDXTag,{name:"h1",components:n},"Managing Terraform modules"),r.a.createElement(m.MDXTag,{name:"p",components:n},"To provision even simplest project, one may need to create a lot of interdependent resources. Wiring them together could be a challenging endeavor. To make life of developers easier, there have been developed many configurable, open source Terraform modules. Such modules could be found on Github and/or in Terraform Registry. When working with yor infrastructure, your configuration often relies on many such modules, coming from different sources. To organize and manage such modules, I usually place them in a ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"modules")," folder, and describe/update using ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"terrafile.yaml"),":"),r.a.createElement(m.MDXTag,{name:"pre",components:n},r.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-yaml"}},'aws-vps:\n  name: terraform-aws-modules-vpc\n  source: terraform-aws-modules/vpc/aws\n  version: "2.44.0"\naws-ecs:\n  name: terraform-aws-modules-ecs\n  source: terraform-aws-modules/ecs/aws\n  version: "2.3.0"\n')),r.a.createElement(m.MDXTag,{name:"p",components:n},"The keys in a ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"terrafile.yaml")," file serve as short module IDs, names (if given) specify exact module directory name. ",r.a.createElement(m.MDXTag,{name:"em",components:n,parentName:"p"},"Source")," may contain Github URL, Terraform Registry name, or local file path. A simple utility class could be used to check/update/download modules when necessary (see ",r.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/act-labs/terraform-python",title:"Terraform - Python orchestration"}},"source code"),"):"),r.a.createElement(m.MDXTag,{name:"pre",components:n},r.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-python"}},"from terraformy.terrafile import Terrafile\nterrafile = Terrafile()\nterrafile.update()\n")),r.a.createElement(m.MDXTag,{name:"h1",components:n},"Managing multiple Terraform states"),r.a.createElement(m.MDXTag,{name:"p",components:n},"I usually place all top level Terraform modules (modules with state) into ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"state")," subdirectories, to distinguish them from reusable modules, located in ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"modules")," directory. I try to keep such modules simple, generating them based on some configuration. For example, a simple helper class below is able to generate Terraform configuration and invoke corresponding Terraform commands in appropriate subdirectories:"),r.a.createElement(m.MDXTag,{name:"pre",components:n},r.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-python"}},"class RootModule:\n    name: str\n    state_dir: str\n    terrafile: Terrafile\n    config: Iterable[TerraformConfig]\n\n    def __init__(self, name: str, terrafile: Terrafile, config: Iterable[TerraformConfig]):\n        self.name = name\n        self.config = config\n        self.terrafile = terrafile\n        self.state_dir = \"./state/{}\".format(name)\n\n    def insure_dir_exists(self):\n        pathlib.Path(self.state_dir).mkdir(parents=True, exist_ok=True)\n\n    def generate_config(self):\n        self.insure_dir_exists()\n        for conf in self.config:\n            conf.config()\n            with open(\"{}/{}.yaml\".format(self.state_dir, conf.name), 'w') as file:\n                yaml.dump(conf.dict(), file)\n\n        print(\"terraformpy - Writing main.tf.json\")\n\n        with open(\"{}/main.tf.json\".format(self.state_dir), \"w\") as fd:\n            json.dump(compile(), fd, indent=4, sort_keys=True)\n\n    def init(self, **kwargs):\n        self.insure_dir_exists()\n        return exec('terraform', 'init', cwd=self.state_dir, **kwargs)\n\n    def plan(self, **kwargs):\n        self.insure_dir_exists()\n        return exec('terraform', 'plan', '-out=plan.saved', cwd=self.state_dir, **kwargs)\n\n    def apply(self, **kwargs):\n        self.insure_dir_exists()\n        return exec('terraform', 'apply', '-auto-approve', cwd=self.state_dir, **kwargs)\n\n    def destroy(self, **kwargs):\n        self.insure_dir_exists()\n        return exec('terraform', 'destroy', '-auto-approve', cwd=self.state_dir, **kwargs)\n")),r.a.createElement(m.MDXTag,{name:"h1",components:n},"Defining Terraform configuration"),r.a.createElement(m.MDXTag,{name:"p",components:n},"To generate a new Terraform configuration, define a new class subclassing ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"BaseConfig")," class:"),r.a.createElement(m.MDXTag,{name:"pre",components:n},r.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-python"}},'from pydantic import BaseModel\nimport abc\n\nclass TerraformConfig(abc.ABC):\n    name: str\n    @abc.abstractmethod\n    def config(self):\n        pass\n\n    @abc.abstractmethod\n    def dict(self):\n        pass\n\nclass BaseConfig(BaseModel, TerraformConfig):\n    terrafile: Terrafile\n\n    def module(self, name):\n        dir = name\n\n        if name in self.terrafile.entries and self.terrafile.entries[name].name:\n            dir = self.terrafile.entries[name].name\n\n        return "../../modules/{}".format(dir)\n\n    class Config:\n        arbitrary_types_allowed = True\n')),r.a.createElement(m.MDXTag,{name:"p",components:n},r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"BaseConfig")," above defines certain protocol (",r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"config")," and ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"dict")," methods and ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"name")," field), provides ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"pydantic")," validation and helper methods (",r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"module")," method returns a relative path to a module based on a short id from ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"terrafile.yaml"),"). For example, the configuration, responsible to create AWS VPC with the help of ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"terraform-aws-modules/vpc/aws")," module, could be defined as follows:"),r.a.createElement(m.MDXTag,{name:"pre",components:n},r.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-python"}},'from terraformpy import Module, Provider\n\nfrom terraformy.config import BaseConfig\n\nclass MyVpc(BaseConfig):\n    name: str\n    region: str = "eu-west-2"\n    private_number: int = 2\n    public_number: int = 2\n\n    def config(self):\n        name = self.name\n        region = self.region\n        private_number = self.private_number\n        public_number = self.public_number\n\n        Provider("aws", region=region)\n        params = dict(\n            source=self.module("aws-vps"),\n            name=name,\n            cidr="10.0.0.0/16",\n            azs=[region + "a", region + "b"],\n            private_subnets=[\n                "10.0.{}.0/24".format(k) for k in range(1, private_number + 1)\n            ],\n            public_subnets=[\n                "10.0.10{}.0/24".format(k) for k in range(1, public_number + 1)\n            ],\n            enable_ipv6="true",\n            enable_nat_gateway="true",\n            single_nat_gateway="true",\n            public_subnet_tags={"Name": "overridden-name-public"},\n            tags={"Owner": "user", "Environment": "dev"},\n            vpc_tags={"Name": name},\n        )\n\n        Module(name, **params)\n')),r.a.createElement(m.MDXTag,{name:"h1",components:n},"The best of both worlds"),r.a.createElement(m.MDXTag,{name:"p",components:n},"Using Python in combination with Terraform modules, we are able to leverage both open source Terraform modules and the power of Python. We may use Terraform declarative HCL definitions. And we have access to all Python capabilities: ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"*.yaml")," and ",r.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"*.json")," config files, schema validation, tools to create CLI and/or REST APIs, etc."),r.a.createElement(m.MDXTag,{name:"p",components:n},"Find the source code used in this blog on ",r.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/act-labs/terraform-python",title:"Terraform - Python orchestration"}},"Github"),"."))},n}(r.a.Component),p=a(757);function u(e){return r.a.createElement(p.a,e,r.a.createElement(c,e))}a.d(n,"default",function(){return u})},737:function(e,n,a){"use strict";a(46);var t=a(738),r=a(0),o=a.n(r),i=a(2),s=a.n(i),l=a(748),m=a.n(l),c=a(34);function p(e){var n=e.description,a=e.lang,r=e.meta,i=e.keywords,s=e.title;return o.a.createElement(c.b,{query:u,render:function(e){return"string"==typeof i&&(i=i.split(",").map(function(e){return e.trim()})),n=n||e.site.siteMetadata.description,o.a.createElement(m.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+e.site.siteMetadata.project,meta:[{name:"description",content:n},{property:"og:title",content:s},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:n}].concat(i?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:t})}p.defaultProps={lang:"en",meta:[],keywords:null},p.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.oneOfType([s.a.string,s.a.arrayOf(s.a.string)]),title:s.a.string.isRequired},n.a=p;var u="304502870"},738:function(e){e.exports={data:{site:{siteMetadata:{project:"ACT blog",description:"React, Ant Design, Gatsby, GraphQl, and other web technologies",author:"Act Labs"}}}}},739:function(e,n,a){"use strict";a.d(n,"a",function(){return m});a(352);var t=a(740),r=a(0),o=a.n(r),i=a(34),s=a(231),l=a.n(s);function m(){return o.a.createElement(i.b,{query:"2369744027",render:function(e){return o.a.createElement(l.a,{fixed:e.logo.childImageSharp.fixed,style:{float:"left"}})},data:t})}},740:function(e){e.exports={data:{logo:{childImageSharp:{fixed:{base64:"data:image/png;base64,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",width:50,height:60,src:"/static/a64620346ac3ce8d4580a3f07039fa3c/8469d/logo.png",srcSet:"/static/a64620346ac3ce8d4580a3f07039fa3c/8469d/logo.png 1x"}}}}}},741:function(e){e.exports={data:{config:{copyright:"Copyright © Act Labs",social:[{icon:"facebook",link:"https://www.facebook.com/ACT7LAB"},{icon:"github",link:"https://github.com/act-labs/gatsby-starter-act-blog"}]}}}},742:function(e){e.exports={data:{config:{nav:[{text:"home",slug:null},{text:"posts",slug:"/posts/"},{text:"snippets",slug:"/snippets/"}]}}}},743:function(e,n,a){"use strict";a(6);var t=a(138),r=(a(178),a(31)),o=a.n(r),i=(a(749),a(735),a(736)),s=a.n(i),l=a(741),m=a(0),c=a.n(m),p=a(34),u=s.a.Footer;function d(e){var n=e.social,a=e.copyright,r=n.map(function(e){var n=e.link,a=e.icon;return c.a.createElement(t.a,{key:a,to:n},c.a.createElement(o.a,{type:a,style:{fontSize:"24px",marginLeft:10,color:"rgba(0, 0, 0, 0.65)"}}))});return c.a.createElement(u,{style:{textAlign:"center"}},c.a.createElement("div",null,a,c.a.createElement("div",{style:{float:"right"}},r)))}function f(e){return e.social?c.a.createElement(d,e):c.a.createElement(p.b,{query:"2743462859",render:function(n){var a=n.config,t=a.social,r=a.copyright;return c.a.createElement(d,Object.assign({social:t,copyright:r},e))},data:l})}a(747);var g=a(746),h=a.n(g),y=a(739),b=a(742),T=s.a.Header;function v(e){var n=e.nav;return c.a.createElement(T,{className:"navigation-bar"},c.a.createElement(t.a,{to:"/"},c.a.createElement(y.a,null)),c.a.createElement(h.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:n.filter(function(e){return e.selected}).map(function(e){return e.text}),style:{lineHeight:"64px"}},n.map(function(e,n){var a=e.slug,r=e.text;return c.a.createElement(h.a.Item,{key:n},c.a.createElement(t.a,{to:a||"/"},r))})))}function w(e){return e.nav?c.a.createElement(v,e):c.a.createElement(p.b,{query:"1250442554",render:function(n){var a=n.config.nav;return c.a.createElement(v,Object.assign({nav:a},e))},data:b})}var E=a(737),M=a(14),D=a.n(M);a(671);a.d(n,"a",function(){return C});var X=s.a.Content,A=s.a.Sider;function k(e){var n=e.style,a=e.children,t=D()(e,["style","children"]);return c.a.createElement(X,Object.assign({style:Object.assign({padding:"5px 24px"},n)},t),a)}function C(e){var n=e.children,a=e.className,t=e.title,r=e.description,o=e.keywords,i=e.style,l=e.layout,m=Object.assign({},N,l),p=m.footer,u=m.fullHeight,d=Object.assign({},u?{height:"100%"}:null,i),g=(a?a+" ":"")+"page-layout";return c.a.createElement(s.a,{className:g,style:d},c.a.createElement(E.a,{title:t,keywords:o,description:r}),c.a.createElement(w,null),n,p?c.a.createElement(f,null):null)}var N={footer:!0};C.Panel=k,C.SideMenuPanel=function(e){var n=e.children,a=e.menu;return c.a.createElement(s.a,{style:{padding:"1em 0",background:"#fff",minHeight:1e3}},c.a.createElement(A,{width:200},a),c.a.createElement(k,null,n))}},745:function(e,n,a){"use strict";a(6);var t=a(138),r=(a(46),a(0)),o=a.n(r),i=a(891),s=a(751),l=a(752),m=a(753),c=a(754),p=a(755),u=a(756);i.a.registerLanguage("javascript",s.a),i.a.registerLanguage("sh",l.a),i.a.registerLanguage("markdown",m.a),i.a.registerLanguage("yaml",c.a),i.a.registerLanguage("dockerfile",p.a);var d=a(1);a.d(n,"a",function(){return g});var f={components:{code:function(e){var n="bash";if(e.className){var a=e.className.split("-");a.length>1&&(n=a[1])}return o.a.createElement(i.a,{language:n,style:u.github},e.children)},a:t.a}};function g(e){var n=Object.assign({},f,e),a=n.components,t=n.children;return o.a.createElement(d.MDXProvider,{components:a},t)}},757:function(e,n,a){"use strict";a.d(n,"a",function(){return l});var t=a(745),r=(a(6),a(743)),o=a(0),i=a.n(o),s=(a(672),r.a.Panel);function l(e){var n=e.children,a=e.pageContext,o=Object.assign({frontmatter:{}},a),l=Object.assign({},{layout:o.layout},o.frontmatter);return i.a.createElement(r.a,l,i.a.createElement(s,{style:{paddingTop:"1em"}},l.title?i.a.createElement("h1",null,l.title):null,i.a.createElement(t.a,null,n)))}}}]);
//# sourceMappingURL=component---src-generated-posts-terraform-python-js-52a8165fd79c72093ed3.js.map