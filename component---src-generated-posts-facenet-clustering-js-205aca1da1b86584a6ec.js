(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{722:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),o=t(299),r=t(300),i=t(301),c=t(14),l=t.n(c),m=t(15),d=t.n(m),p=t(1),u=function(e){function a(a){var t;return(t=e.call(this,a)||this).layout=null,t}return d()(a,e),a.prototype.render=function(){var e=this.props,a=e.components;l()(e,["components"]);return s.a.createElement(p.MDXTag,{name:"wrapper",components:a},s.a.createElement(p.MDXTag,{name:"p",components:a},"Face detection is a desired feature in many applications, ranging from fashion to security. FaceNet is often used for feature embedding in combination with CNN neural networks for face detection. Open source implementations, showing state of the art results on popular datasets, are readily available. As an example, in this blog posts, I take David Sandberg's ",s.a.createElement(p.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/davidsandberg/facenet"}},"TensorFlow FaceNet")," and build a Python package to process videos, extracting face locations, landmarks, and embeddings. Embeddings allow to group face images using new density based clustering algorithms (",s.a.createElement(p.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://hdbscan.readthedocs.io/"}},"hierarchical dbscan")," and ",s.a.createElement(p.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://umap-learn.readthedocs.io"}},"umap")," - density based feature reduction algorithm)."),s.a.createElement(p.MDXTag,{name:"h2",components:a},"FaceNet and MTCNN"),s.a.createElement(p.MDXTag,{name:"p",components:a},"As faces in image may be present in different locations at different scales, to detect them, multi-scale image analyses techniques were developed. The main idea is to check for face presence first on full image. If the test is positive, more detailed tests are repeatedly conducted on smaller image patches. Currently, many libraries provide good face detection implementations, including ",s.a.createElement(p.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"http://dlib.net/"}},"dlib")," and ",s.a.createElement(p.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://opencv.org/"}},"opencv"),". The recent trend is to use neural network based methods as they outperform feature engineering approaches, showing top notch results on test datasets. Here an open source implementation of Multi-task Cascaded Convolutional Networks, available as python package ",s.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"pip install mtcnn"),", was used. The library is able to both detect multiple faces, and to provide location of faces and face landmarks (nose, eyes, lips, etc)."),s.a.createElement(p.MDXTag,{name:"p",components:a},"In addition to face detection, many applications may need to identify people on images. To accomplish this, algorithms extracting image feature are used. Popular FaceNet neural network architecture could be trained to automatically produce feature vectors, called embeddings. During training, algorithm uses trippet loss function encouraging similar embeddings for images of the same people and different embeddings for different people. As mentioned earlier, here a popular open source ",s.a.createElement(p.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/davidsandberg/facenet"}},"David Sandberg implementation")," is being used. The ",s.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"Facenet")," class is able to load pre-trained TensorFlow models and could be used to generate embeddings."),s.a.createElement(p.MDXTag,{name:"h2",components:a},"Video preprocessing"),s.a.createElement(p.MDXTag,{name:"p",components:a},"For video/image preprocessing OpenCV library is a common choice. The following simple wrapper simplifies video processing/navigation:"),s.a.createElement(p.MDXTag,{name:"pre",components:a},s.a.createElement(p.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-python"}},"# video_facenet/video.py\nclass VideoProcessor:\n    def __init__(self, video_path, **kwargs):\n        self.video_path = video_path\n        self.cap = cv2.VideoCapture(video_path)\n        self.id = 0\n        self.data = kwargs           \n\n    @property\n    def duration(self):\n        cap = self.cap\n        fps = cap.get(cv2.CAP_PROP_FPS)\n        frame_count = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))\n        return frame_count/fps\n\n    @property\n    def pos(self):\n        return int(self.cap.get(cv2.CAP_PROP_POS_FRAMES))\n\n    @pos.setter\n    def pos(self, pos):\n        self.id = pos\n        self.cap.set(cv2.CAP_PROP_POS_FRAMES, pos) \n  \n\n    def images(self, start=0, end=None):\n        self.pos = start\n        success, image = self.cap.read()\n        while success:\n            if end is not None and self.id == end:\n                yield image\n                return\n\n            yield image\n            self.id += 1            \n            success, image = self.cap.read()                \n\n    def iterate(self, process, start=0, end=None):\n        last = self.frame_count - 1 if end is None else end \n        for image in self.images(start=start, end=end):\n            if process(image=image, pos=self.id, video=self, last=last, **self.data):\n                break\n")),s.a.createElement(p.MDXTag,{name:"p",components:a},"Flexible data processing is best achieved using functional paradigms. To this end, VideoProcessor's constructor receives additional named parameters, which are then passed further to processing functions (in iterate method). Thus, processing functions should be ready to receive dictionaries of named arguments ",s.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"**kwargs")," which they may pass down the line, or may just choose to ignore. Following this pattern, image processing could be shaped into interchangeable, reusable functions: "),s.a.createElement(p.MDXTag,{name:"pre",components:a},s.a.createElement(p.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-python"}},'# video_facenet/pipelines.py\ndef process_video(video_path, model_path, start=0, suffix="", batch_size=64, end=None, **kwargs):\n    from video_facenet.facenet import Detector, Facenet\n\n    detector = Detector()\n    encoder = Facenet(\n        model_path=model_path,\n        batch_size=batch_size\n    )\n    faces = []\n\n    save = create_faces_saver(suffix=suffix)\n\n    def process(save, pos, faces, batch_size, last, **kwargs):\n        find_faces(faces=faces, pos=pos, **kwargs)\n        if len(faces) >= batch_size or pos==last:\n            generate_embeddings(faces=faces, **kwargs)\n            save(faces=faces, **kwargs)\n            save.flush()\n            faces.clear()\n            print("frame #", pos)\n\n    video = VideoProcessor(video_path=video_path, detector=detector, encoder=encoder, save=save, faces=faces, batch_size=batch_size)\n    video.iterate(process, start=start, end=end)\n    save.close()\n    detector.close()\n    encoder.close()\n')),s.a.createElement(p.MDXTag,{name:"p",components:a},"The ",s.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"process_video")," function from ",s.a.createElement(p.MDXTag,{name:"em",components:a,parentName:"p"},"pipelines.py")," module detects, encodes and saves images in batches in three separate text ",s.a.createElement(p.MDXTag,{name:"em",components:a,parentName:"p"},".csv")," files: face bounding boxes, landmarks, and embeddings (bounding_box_suffix.csv, landmarks_suffix.csv, and embeddings_suffix.csv respectively). A suffix is added to the file names to distinguish different jobs. The start and the end of video could be specified, so processing could be easily parallelized."),s.a.createElement(p.MDXTag,{name:"h2",components:a},"Clustering faces: HDBSCAN"),s.a.createElement(p.MDXTag,{name:"p",components:a},"Information from text files could be processed further using density based clustering techniques. FaceNet could be seen as probabilistic model generating embeddings in multidimensional embedding space. Embeddings of different people should form distinct dense clusters. One of the popular tools to discover such clusters is DBSCAN, which is shown to give good results for face clustering. Recent algorithm extensions/generalizations, like hierarchical DBSCAN, divide densely populated regions into hierarchical trees to automatically find cluster boundaries based exclusively on available density information. An ",s.a.createElement(p.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://hdbscan.readthedocs.io/"}},"hdbscan")," is a popular DBSCAN extension, implementing scikit-learn interface and playing nicely with the rest of ",s.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"scikit-learn")," ecosystem. As you may see below, for sample short Hamilton video, clustering gives nearly ideal results, grouping together faces of different people and even filtering out the noise - erroneous face boxes (dark points on the plot bellow). Results are illustrated using umap (a density based feature reduction library similar to t-SNE):"),s.a.createElement(i.a,null),s.a.createElement(p.MDXTag,{name:"p",components:a},"From this plot, it could be seen that points of embedding space tend to cluster into dense groups. Dense regions could be unevenly shaped, which explains why clustering method like K-mean poorly perform on such tasks. Density based clustering clearly gives better results, though results, in general, may be not that good as in this short sample. For example, relatively rare camera angles, lightning conditions or faces may result in outliers, marked by algorithm as noise. On the other hand, after some time, failures in face detection algorithm tend to produce their own clusters. And on some camera angles/with different lightnings, faces of the same people may fall into different clusters. Another problem is that, as number of embeddings grows (to dozens of thousands), the algorithm performance eventually comes to a halt. "),s.a.createElement(p.MDXTag,{name:"p",components:a},"To some degree, the mentioned problems could be alleviated. First of all, hdbscan package allows not only to assign cluster labels, but also gives estimates of assignment probabilities (for every point/every cluster combination). Assignment probabilities could be also obtained for points not used during training, which mitigates scalability problems. Furthermore, hdbscan could be used in combination with feature reduction algorithms. In addition to standard PCA, density based umap algorithm could be used. Similar to to t-SNE, ",s.a.createElement(p.MDXTag,{name:"em",components:a,parentName:"p"},"umap")," is based on point densities but is designed to work not only for visualization, but for feature reduction and even supervised learning. Both umap and hdbscan honer scikit-learn conventions, so could be combined into single scikit-learn Pipeline and tweaked using grid parameter search:"),s.a.createElement(p.MDXTag,{name:"pre",components:a},s.a.createElement(p.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-python"}},'# video_facenet/hdbscan_clustering.py\ndef cluster_faces_pipeline(reduce):\n    models = []\n    if reduce:\n        models.append(\n            ("umap", umap.UMAP(\n                n_neighbors=30,\n                min_dist=0.0,\n                n_components=30,\n                random_state=42,\n            ))\n        )\n    models.append(("hdbscan", hdbscan.HDBSCAN (min_cluster_size=15)))\n    return Pipeline(models)\n')),s.a.createElement(p.MDXTag,{name:"p",components:a},"Though, in general, 512 dimensions of facenet embeddings carry very useful information, within similar settings all this information is clearly redundant and just contributes to noise and clustering algorithm confusion. Reducing dimensions to the 20-50 components, one may improve both algorithm accuracy and performance, and, as a result, meaningful clusters for videos with thousand faces become a possibility:"),s.a.createElement(r.a,null),s.a.createElement(p.MDXTag,{name:"p",components:a},"As unsupervised learning is often exploratory in nature, it is easier to pass parameters/options using configuration ",s.a.createElement(p.MDXTag,{name:"em",components:a,parentName:"p"},"yaml")," files:"),s.a.createElement(p.MDXTag,{name:"pre",components:a},s.a.createElement(p.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-yaml"}},"# tasks.yaml\nhamilton:\n  suffix: hamilton\n  video_path: short_hamilton_clip.mp4\n  model_path: /lab/20180402-114759/facenet.pb\n  umap: false\n  delay: 200\n  parameters:\n    hdbscan__min_cluster_size: 5    \nprocess_hamilton:\n  task: process_video\n  config: hamilton  \n")),s.a.createElement(p.MDXTag,{name:"p",components:a},"Here tasks are defined as named objects, a function name is specified in a ",s.a.createElement(p.MDXTag,{name:"em",components:a,parentName:"p"},'"task"')," property, and configuration is either specified alongside or is referenced through a ",s.a.createElement(p.MDXTag,{name:"em",components:a,parentName:"p"},'"config"')," property."),s.a.createElement(p.MDXTag,{name:"h2",components:a},"Clustering and other ML algorithms"),s.a.createElement(p.MDXTag,{name:"p",components:a},"Clustering algorithms are important in unsupervised/exploratory settings when there are no labeled data, and/or available data should be quickly explored. Thus, frames/images, grouped by clustering algorithms, with probabilities/alternative assignment suggestions, may help to prepare training data for supervised algorithms: "),s.a.createElement(o.a,null),s.a.createElement(p.MDXTag,{name:"p",components:a}," Modern density based algorithms allow for supervised learning/classification. As density based algorithms are completely data driven they can make data processing less susceptible to data drifts. On the other hand, such methods come with a number of inherent shortcomings: they poorly generalize to unseen data and have a limited scalability (all points should be kept in memory, compared to a few parameters of neural networks or SVM). As you can see, in case of face detection/recognition, clustering algorithms favorably complement neural networks, helping to prepare training data/providing flexible identification algorithms."),s.a.createElement(p.MDXTag,{name:"p",components:a}," The source code used in the blog post is available on ",s.a.createElement(p.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/act-labs/video_facenet/",title:"FaceNet clustering for video"}},"Github")," or could be installed through ",s.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"pip install video_facenet"),"."))},a}(s.a.Component),g=t(753);function f(e){return s.a.createElement(g.a,e,s.a.createElement(u,e))}t.d(a,"default",function(){return f})},732:function(e,a,t){"use strict";t(46);var n=t(733),s=t(0),o=t.n(s),r=t(2),i=t.n(r),c=t(744),l=t.n(c),m=t(34);function d(e){var a=e.description,t=e.lang,s=e.meta,r=e.keywords,i=e.title;return o.a.createElement(m.b,{query:p,render:function(e){return"string"==typeof r&&(r=r.split(",").map(function(e){return e.trim()})),a=a||e.site.siteMetadata.description,o.a.createElement(l.a,{htmlAttributes:{lang:t},title:i,titleTemplate:"%s | "+e.site.siteMetadata.project,meta:[{name:"description",content:a},{property:"og:title",content:i},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:a}].concat(r?{name:"keywords",content:r.join(", ")}:[]).concat(s)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:null},d.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.oneOfType([i.a.string,i.a.arrayOf(i.a.string)]),title:i.a.string.isRequired},a.a=d;var p="304502870"},733:function(e){e.exports={data:{site:{siteMetadata:{project:"ACT blog",description:"React, Ant Design, Gatsby, GraphQl, and other web technologies",author:"Act Labs"}}}}},734:function(e,a,t){"use strict";t.d(a,"a",function(){return l});t(352);var n=t(735),s=t(0),o=t.n(s),r=t(34),i=t(231),c=t.n(i);function l(){return o.a.createElement(r.b,{query:"2369744027",render:function(e){return o.a.createElement(c.a,{fixed:e.logo.childImageSharp.fixed,style:{float:"left"}})},data:n})}},735:function(e){e.exports={data:{logo:{childImageSharp:{fixed:{base64:"data:image/png;base64,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",width:50,height:60,src:"/static/a64620346ac3ce8d4580a3f07039fa3c/8469d/logo.png",srcSet:"/static/a64620346ac3ce8d4580a3f07039fa3c/8469d/logo.png 1x"}}}}}},736:function(e){e.exports={data:{config:{copyright:"Copyright © Act Labs",social:[{icon:"facebook",link:"https://www.facebook.com/ACT7LAB"},{icon:"github",link:"https://github.com/act-labs/gatsby-starter-act-blog"}]}}}},737:function(e){e.exports={data:{config:{nav:[{text:"home",slug:null},{text:"posts",slug:"/posts/"},{text:"snippets",slug:"/snippets/"}]}}}},738:function(e,a,t){"use strict";t(6);var n=t(138),s=(t(178),t(31)),o=t.n(s),r=(t(745),t(730),t(731)),i=t.n(r),c=t(736),l=t(0),m=t.n(l),d=t(34),p=i.a.Footer;function u(e){var a=e.social,t=e.copyright,s=a.map(function(e){var a=e.link,t=e.icon;return m.a.createElement(n.a,{key:t,to:a},m.a.createElement(o.a,{type:t,style:{fontSize:"24px",marginLeft:10,color:"rgba(0, 0, 0, 0.65)"}}))});return m.a.createElement(p,{style:{textAlign:"center"}},m.a.createElement("div",null,t,m.a.createElement("div",{style:{float:"right"}},s)))}function g(e){return e.social?m.a.createElement(u,e):m.a.createElement(d.b,{query:"2743462859",render:function(a){var t=a.config,n=t.social,s=t.copyright;return m.a.createElement(u,Object.assign({social:n,copyright:s},e))},data:c})}t(742);var f=t(741),h=t.n(f),b=t(734),y=t(737),v=i.a.Header;function E(e){var a=e.nav;return m.a.createElement(v,{className:"navigation-bar"},m.a.createElement(n.a,{to:"/"},m.a.createElement(b.a,null)),m.a.createElement(h.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:a.filter(function(e){return e.selected}).map(function(e){return e.text}),style:{lineHeight:"64px"}},a.map(function(e,a){var t=e.slug,s=e.text;return m.a.createElement(h.a.Item,{key:a},m.a.createElement(n.a,{to:t||"/"},s))})))}function w(e){return e.nav?m.a.createElement(E,e):m.a.createElement(d.b,{query:"1250442554",render:function(a){var t=a.config.nav;return m.a.createElement(E,Object.assign({nav:t},e))},data:y})}var M=t(732),T=t(14),D=t.n(T);t(671);t.d(a,"a",function(){return X});var A=i.a.Content,k=i.a.Sider;function N(e){var a=e.style,t=e.children,n=D()(e,["style","children"]);return m.a.createElement(A,Object.assign({style:Object.assign({padding:"5px 24px"},a)},n),t)}function X(e){var a=e.children,t=e.className,n=e.title,s=e.description,o=e.keywords,r=e.style,c=e.layout,l=Object.assign({},x,c),d=l.footer,p=l.fullHeight,u=Object.assign({},p?{height:"100%"}:null,r),f=(t?t+" ":"")+"page-layout";return m.a.createElement(i.a,{className:f,style:u},m.a.createElement(M.a,{title:n,keywords:o,description:s}),m.a.createElement(w,null),a,d?m.a.createElement(g,null):null)}var x={footer:!0};X.Panel=N,X.SideMenuPanel=function(e){var a=e.children,t=e.menu;return m.a.createElement(i.a,{style:{padding:"1em 0",background:"#fff",minHeight:1e3}},m.a.createElement(k,{width:200},t),m.a.createElement(N,null,a))}},740:function(e,a,t){"use strict";t(6);var n=t(138),s=(t(46),t(0)),o=t.n(s),r=t(884),i=t(746),c=t(747),l=t(748),m=t(749),d=t(750),p=t(751);r.a.registerLanguage("javascript",i.a),r.a.registerLanguage("sh",c.a),r.a.registerLanguage("markdown",l.a),r.a.registerLanguage("yaml",m.a),r.a.registerLanguage("dockerfile",d.a);var u=t(1);t.d(a,"a",function(){return f});var g={components:{code:function(e){var a="bash";if(e.className){var t=e.className.split("-");t.length>1&&(a=t[1])}return o.a.createElement(r.a,{language:a,style:p.github},e.children)},a:n.a}};function f(e){var a=Object.assign({},g,e),t=a.components,n=a.children;return o.a.createElement(u.MDXProvider,{components:t},n)}},753:function(e,a,t){"use strict";t.d(a,"a",function(){return c});var n=t(740),s=(t(6),t(738)),o=t(0),r=t.n(o),i=(t(672),s.a.Panel);function c(e){var a=e.children,t=e.pageContext,o=Object.assign({frontmatter:{}},t),c=Object.assign({},{layout:o.layout},o.frontmatter);return r.a.createElement(s.a,c,r.a.createElement(i,{style:{paddingTop:"1em"}},c.title?r.a.createElement("h1",null,c.title):null,r.a.createElement(n.a,null,a)))}}}]);
//# sourceMappingURL=component---src-generated-posts-facenet-clustering-js-205aca1da1b86584a6ec.js.map