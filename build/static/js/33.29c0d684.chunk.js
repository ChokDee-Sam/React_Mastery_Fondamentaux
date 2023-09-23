(this["webpackJsonp@mikecodeur/react-fondamentaux"]=this["webpackJsonp@mikecodeur/react-fondamentaux"]||[]).push([[33],{251:function(e,n,a){"use strict";a.r(n),a.d(n,"readingTime",(function(){return l})),a.d(n,"default",(function(){return o})),a.d(n,"tableOfContents",(function(){return c})),a.d(n,"frontMatter",(function(){return i}));var t=a(78),s=(a(0),a(329)),r=["components"],l={text:"3 min read",minutes:2.085,time:125100,words:417},p={};function o(e){var n=e.components,a=Object(t.a)(e,r);return Object(s.a)("wrapper",Object.assign({},p,a,{components:n,mdxType:"MDXLayout"}),Object(s.a)("h1",{id:"les-formulaires"},"Les formulaires"),Object(s.a)("h3",{id:"-maitriser-les-formulaires"},"\ud83d\udca1 Maitriser les formulaires"),Object(s.a)("h2",{id:"-tes-notes"},"\ud83d\udcdd Tes notes"),Object(s.a)("p",null,"Detaille ce que tu as appris ici\n",Object(s.a)("inlineCode",{parentName:"p"},"src/exercise/09.md"),"ou\xa0sur\xa0une\xa0page\xa0",Object(s.a)("a",{parentName:"p",href:"https://go.mikecodeur.com/course-notes-template"},"Notion")),Object(s.a)("h2",{id:"comprendre"},"Comprendre"),Object(s.a)("p",null,"Les formulaires sont \xe0 la base du web et il existe de nombreuses mani\xe8res de les\nutiliser en React. Dans cette session nous allons voir quelques mani\xe8res les\nplus courantes de g\xe9rer les formulaires :"),Object(s.a)("ul",null,Object(s.a)("li",{parentName:"ul"},"pure javascript"),Object(s.a)("li",{parentName:"ul"},"composant non contr\xf4l\xe9"),Object(s.a)("li",{parentName:"ul"},"composant contr\xf4l\xe9")),Object(s.a)("p",null,"Nous prendrons un exemple simple : un formulaire de login"),Object(s.a)("pre",null,Object(s.a)("code",{parentName:"pre",className:"language-markup","data-language":"markup","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">></span></span> Adresse email : <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">"type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>emailInput<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Connexion<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>\n'}})),Object(s.a)("p",null,"Il est possible de g\xe9rer l\u2019\xe9v\xe8nement ",Object(s.a)("inlineCode",{parentName:"p"},"onSubmit")," de ",Object(s.a)("inlineCode",{parentName:"p"},"form.")," Cet \xe9v\xe8nement donne\nacc\xe8s \xe0 tous les \xe9l\xe9ments enfants du formulaire. On peut par exemple r\xe9cup\xe9rer\nla valeur du champs email avec ",Object(s.a)("inlineCode",{parentName:"p"},"event.target.elements.emailInput.value")),Object(s.a)("h2",{id:"exercice"},"Exercice"),Object(s.a)("p",null,"Dans cet exercice tu vas devoir r\xe9cup\xe9rer la valeur de l\u2019email et l\u2019afficher\ndans un popup avec ",Object(s.a)("inlineCode",{parentName:"p"},"alert"),"."),Object(s.a)("h2",{id:"bonus"},"Bonus"),Object(s.a)("p",null,"En HTML, les \xe9l\xe9ments de formulaire tels que ",Object(s.a)("inlineCode",{parentName:"p"},"<input>"),", ",Object(s.a)("inlineCode",{parentName:"p"},"<textarea>"),", et\n",Object(s.a)("inlineCode",{parentName:"p"},"<select>")," maintiennent g\xe9n\xe9ralement leur propre \xe9tat et se mettent \xe0 jour par\nrapport aux saisies de l\u2019utilisateur, leurs valeurs sont stock\xe9 dans le DOM.\nReact nous permet d\u2019acc\xe9der a ces donn\xe9es de deux mani\xe8res, via le DOM ou via\nles states. On parle de ",Object(s.a)("inlineCode",{parentName:"p"},"composants contr\xf4l\xe9s")," vs ",Object(s.a)("inlineCode",{parentName:"p"},"composants non contr\xf4l\xe9s.")),Object(s.a)("ul",null,Object(s.a)("li",{parentName:"ul"},"Composant non-contr\xf4l\xe9"),Object(s.a)("li",{parentName:"ul"},"Composant contr\xf4l\xe9")),Object(s.a)("p",null,"Les deux exercices suivant vont consister a utiliser les 2 approches."),Object(s.a)("h3",{id:"1--composant-non-contr\xf4l\xe9"},"1. \ud83d\ude80 Composant non contr\xf4l\xe9"),Object(s.a)("p",null,"Utilisation de ",Object(s.a)("inlineCode",{parentName:"p"},"React.createRef()")," ou le hook ",Object(s.a)("inlineCode",{parentName:"p"},"React.useRef()"),". Comme nous\nprivil\xe9gions les Hooks, il faudra utiliser ",Object(s.a)("inlineCode",{parentName:"p"},"React.useRef()")," pour g\xe9rer la donn\xe9e\ndu champ email."),Object(s.a)("pre",null,Object(s.a)("code",{parentName:"pre",className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">const</span> inputRef <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token comment">//dans le render</span>\n<span class="token punctuation">;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>inputRef<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n<span class="token comment">//recup\xe9rer la valeur</span>\ninputRef<span class="token punctuation">.</span>current<span class="token punctuation">.</span>value\n'}})),Object(s.a)("p",null,"\ud83d\udcd1 Le lien vers la doc de\n",Object(s.a)("a",{parentName:"p",href:"https://fr.reactjs.org/docs/hooks-reference.html#useref"},"useRef")),Object(s.a)("h3",{id:"2--composant-contr\xf4l\xe9"},"2. \ud83d\ude80 Composant contr\xf4l\xe9"),Object(s.a)("p",null,"Nous allons cette fois-ci passer par des states, supprime",Object(s.a)("inlineCode",{parentName:"p"},"React.useRef()")," et\ncr\xe9\xe9 un ",Object(s.a)("inlineCode",{parentName:"p"},"state")," email qui se met \xe0 jour sur l\u2019\xe9v\xe8nement ",Object(s.a)("inlineCode",{parentName:"p"},"onChange")," du champs\ninput. La donn\xe9e se trouve dans ",Object(s.a)("inlineCode",{parentName:"p"},"event.target.value")),Object(s.a)("pre",null,Object(s.a)("code",{parentName:"pre",className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">const</span> <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token parameter">event</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token comment">//event.target.value</span>\n<span class="token punctuation">}</span>\n'}})),Object(s.a)("h3",{id:"3--validation-du-formulaire"},"3. \ud83d\ude80 Validation du formulaire"),Object(s.a)("p",null,"Dans cet exercice tu vas devoir valider le champs email. Nous v\xe9rifierons\nsimplement la pr\xe9sence du caract\xe8res ",Object(s.a)("inlineCode",{parentName:"p"},"@")," avec ",Object(s.a)("inlineCode",{parentName:"p"},"email.includes('@')"),". Cr\xe9er un\nstate ",Object(s.a)("inlineCode",{parentName:"p"},"error")," qui contiendra un message d\u2019erreur \xe0 afficher dans une ",Object(s.a)("inlineCode",{parentName:"p"},"div")," avec\nle style ",Object(s.a)("inlineCode",{parentName:"p"},"color:red"),"plac\xe9 sous le champs input."),Object(s.a)("h2",{id:"aller-plus-loin"},"Aller plus loin"),Object(s.a)("p",null,"Il existe de nombreuses librairie en React qui simplifie la gestions des\nformulaires, message d\u2019erreur et validation, un tr\xe8s courant est\n",Object(s.a)("a",{parentName:"p",href:"https://formik.org/"},"Formik")),Object(s.a)("p",null,"\ud83d\udcd1 Le lien vers la doc ",Object(s.a)("a",{parentName:"p",href:"https://formik.org/"},"Formik")),Object(s.a)("h2",{id:"-feedback"},"\ud83d\udc1c Feedback"),Object(s.a)("p",null,"Remplir le formulaire le\n",Object(s.a)("a",{parentName:"p",href:"https://go.mikecodeur.com/cours-react-avis?entry.1430994900=React%20Fondamentaux&entry.533578441=09%20Les%20formulaires"},"formulaire de FeedBack.")))}o.isMDXComponent=!0;var c=function(){return[{id:"-maitriser-les-formulaires",level:3,title:"\ud83d\udca1 Maitriser les formulaires",children:[]},{id:"-tes-notes",level:2,title:"\ud83d\udcdd Tes notes",children:[]},{id:"comprendre",level:2,title:"Comprendre",children:[]},{id:"exercice",level:2,title:"Exercice",children:[]},{id:"bonus",level:2,title:"Bonus",children:[{id:"1--composant-non-contr\xf4l\xe9",level:3,title:"1. \ud83d\ude80 Composant non contr\xf4l\xe9",children:[]},{id:"2--composant-contr\xf4l\xe9",level:3,title:"2. \ud83d\ude80 Composant contr\xf4l\xe9",children:[]},{id:"3--validation-du-formulaire",level:3,title:"3. \ud83d\ude80 Validation du formulaire",children:[]}]},{id:"aller-plus-loin",level:2,title:"Aller plus loin",children:[]},{id:"-feedback",level:2,title:"\ud83d\udc1c Feedback",children:[]}]},i={}},329:function(e,n,a){"use strict";a.d(n,"a",(function(){return d}));var t=a(0),s=a.n(t);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function p(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,s=function(e,n){if(null==e)return{};var a,t,s={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(s[a]=e[a]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var c=s.a.createContext({}),i=function(e){var n=s.a.useContext(c),a=n;return e&&(a="function"===typeof e?e(n):p(p({},n),e)),a},u={inlineCode:"code",wrapper:function(e){var n=e.children;return s.a.createElement(s.a.Fragment,{},n)}},m=s.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=i(a),d=t,b=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return a?s.a.createElement(b,p(p({ref:n},c),{},{components:a})):s.a.createElement(b,p({ref:n},c))}));function d(e,n){var a=arguments,t=n&&n.mdxType;if("string"===typeof e||t){var r=a.length,l=new Array(r);l[0]=m;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"===typeof e?e:t,l[1]=p;for(var c=2;c<r;c++)l[c]=a[c];return s.a.createElement.apply(null,l)}return s.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);
//# sourceMappingURL=33.29c0d684.chunk.js.map