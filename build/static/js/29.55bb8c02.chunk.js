(this["webpackJsonp@mikecodeur/react-fondamentaux"]=this["webpackJsonp@mikecodeur/react-fondamentaux"]||[]).push([[29],{243:function(n,a,e){"use strict";e.r(a),e.d(a,"readingTime",(function(){return l})),e.d(a,"default",(function(){return u})),e.d(a,"tableOfContents",(function(){return i})),e.d(a,"frontMatter",(function(){return m}));var t=e(78),s=e(0),p=e.n(s),o=e(329),c=["components"],l={text:"3 min read",minutes:2.13,time:127800,words:426},r={};function u(n){var a=n.components,e=Object(t.a)(n,c);return Object(o.a)("wrapper",Object.assign({},r,e,{components:a,mdxType:"MDXLayout"}),Object(o.a)("h1",{id:"ajouter-du-style-css"},"Ajouter du Style CSS"),Object(o.a)("h3",{id:"-ajouter-du-style-css-aux-composants-react"},"\ud83d\udca1 Ajouter du Style CSS aux composants React"),Object(o.a)("h2",{id:"-tes-notes"},"\ud83d\udcdd Tes notes"),Object(o.a)("p",null,"Detaille ce que tu as appris ici\n",Object(o.a)("inlineCode",{parentName:"p"},"src/exercise/01.md"),"ou\xa0sur\xa0une\xa0page\xa0",Object(o.a)("a",{parentName:"p",href:"https://go.mikecodeur.com/course-notes-template"},"Notion")),Object(o.a)("h2",{id:"comprendre"},"Comprendre"),Object(o.a)("p",null,"En HTML/CSS de base il existe deux grandes mani\xe8res d\u2019ajouter du style :"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"Via une Classe CSS"),Object(o.a)("li",{parentName:"ul"},"En inline")),Object(o.a)("p",null,"En React c\u2019est la m\xeame chose avec quelques l\xe9g\xe8re diff\xe9rences :"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"Class : en React il faut utiliser un ",Object(o.a)("inlineCode",{parentName:"li"},"prop className")," au lieu de ",Object(o.a)("inlineCode",{parentName:"li"},"class"),"."),Object(o.a)("li",{parentName:"ul"},"Inline : en React on utilise le ",Object(o.a)("inlineCode",{parentName:"li"},"prop style"),". Ce n\u2019est pas un chaine de\ncaract\xe8re mais un object JavaScript")),Object(o.a)("blockquote",null,Object(o.a)("p",{parentName:"blockquote"},"\ud83d\udca1 React \xe0 r\xe9impl\xe9menter les \xe9l\xe9ments DOM et notamment tous ce qui existent en\nCSS.")),Object(o.a)("p",null,"\ud83d\udcd1 Lien vers la doc\n",Object(o.a)("a",{parentName:"p",href:"https://fr.reactjs.org/docs/dom-elements.html"},"https://fr.reactjs.org/docs/dom-elements.html")),Object(o.a)("p",null,"Exemple de CSS Inline en HTML"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-markup","data-language":"markup","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span> <span class="token property">margin-top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n'}})),Object(o.a)("p",null,"En React :"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-markup","data-language":"markup","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token property">backgroundColor</span><span class="token punctuation">:</span>red<span class="token punctuation">,</span> <span class="token property">marginTop</span><span class="token punctuation">:</span>10<span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n'}})),Object(o.a)("p",null,"Pour simplifier, il suffit de convertir les \xe9l\xe9ments CSS (kebab-case) en\nCamelCase. Ce petit outil en ligne permet de convertir cela :\n",Object(o.a)("a",{parentName:"p",href:"https://textedit.tools/camelcase"},"https://textedit.tools/camelcase")),Object(o.a)("h2",{id:"exercice"},"Exercice"),Object(o.a)("p",null,"Dans cet exercice nous avons des classes CSS qui ont des propri\xe9t\xe9s pour des\nconteneurs. Ces conteneur pourrait \xeatre des zones de notre site par exemple."),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-css","data-language":"css","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token selector">.container</span> <span class="token punctuation">{</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>\n  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>\n  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> 1.5em<span class="token punctuation">;</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.container--large</span> <span class="token punctuation">{</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 280px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.container--medium</span> <span class="token punctuation">{</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 90px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.container--small</span> <span class="token punctuation">{</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n'}})),Object(o.a)("h2",{id:"bonus"},"Bonus"),Object(o.a)("h3",{id:"1--cr\xe9er-un-composant-react"},"1. \ud83d\ude80 Cr\xe9er un composant React"),Object(o.a)("p",null,"Dans cet exercice tu vas devoir cr\xe9er un composant React ",Object(o.a)("inlineCode",{parentName:"p"},"<Container/>")," qui aura\nle m\xeame comportement que pr\xe9c\xe8dent. Il contiendra en interne le\n",Object(o.a)("inlineCode",{parentName:"p"},"className container")," et on pourra ajouter un ",Object(o.a)("inlineCode",{parentName:"p"},"prop className:")," le prop style\ndoit aussi \xeatre pris en compte. Exemple d\u2019appel \xe0 ce composant"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Container</span></span>\n  <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token string">\'container-small\'</span><span class="token punctuation">}</span></span>\n  <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>color<span class="token operator">:</span> <span class="token string">\'white\'</span><span class="token punctuation">,</span> backgroundColor<span class="token operator">:</span> <span class="token string">\'pink\'</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n<span class="token punctuation">></span></span><span class="token plain-text">\n  Petit conteneur dark texte blanc\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Container</span></span><span class="token punctuation">></span></span>\n'}})),Object(o.a)("p",null,"Ensuite on ajoutera une propri\xe9t\xe9 ",Object(o.a)("inlineCode",{parentName:"p"},"border:'1px solid'")," \xe0 notre composant. Le\ncomposant devra toujours \xeatre en mesure d\u2019accepter le ",Object(o.a)("inlineCode",{parentName:"p"},"prop")," style."),Object(o.a)("h3",{id:"2--g\xe8re-les-props-color-et-size-dans-le-composant"},"2. \ud83d\ude80 G\xe8re les props ",Object(o.a)("inlineCode",{parentName:"h3"},"color")," et ",Object(o.a)("inlineCode",{parentName:"h3"},"size")," dans le composant"),Object(o.a)("p",null,"Quand on cr\xe9e des composants React, le but et de simplifier au maximum leurs\nutilisations aux autres d\xe9veloppeurs. On essaye donc d\u2019avoir des ",Object(o.a)("inlineCode",{parentName:"p"},"props"),"\nexplicites. Ici in va falloir rajouter deux props : ",Object(o.a)("inlineCode",{parentName:"p"},"color")," et ",Object(o.a)("inlineCode",{parentName:"p"},"size"),"."),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"color")," pour la couleur du texte"),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"size")," pour la taille du container")),Object(o.a)("p",null,"Le composant devra toujours \xeatre en mesure de g\xe9rer un ",Object(o.a)("inlineCode",{parentName:"p"},"style")," particulier pass\xe9\nen prop et un ",Object(o.a)("inlineCode",{parentName:"p"},"className")),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Container</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>white<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>backgroundColor<span class="token operator">:</span> <span class="token string">\'pink\'</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n  Petit conteneur dark texte blanc\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Container</span></span><span class="token punctuation">></span></span>\n'}})),Object(o.a)("h2",{id:"aller-plus-loin"},"Aller plus loin"),Object(o.a)("p",null,"\ud83d\udcd1 Le lien vers la doc\n",Object(o.a)("a",{parentName:"p",href:"https://www.w3schools.com/html/html_css.asp"},"https://www.w3schools.com/html/html_css.asp")),Object(o.a)("h2",{id:"-feedback"},"\ud83d\udc1c Feedback"),Object(o.a)("p",null,"Remplir le formulaire le\n",Object(o.a)("a",{parentName:"p",href:"https://go.mikecodeur.com/cours-react-avis?entry.1430994900=React%20Fondamentaux&entry.533578441=05%20Ajouter%20du%20Style%20CSS"},"formulaire de FeedBack.")))}u.isMDXComponent=!0;var i=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{id:"-ajouter-du-style-css-aux-composants-react",level:3,title:"\ud83d\udca1 Ajouter du Style CSS aux composants React",children:[]},{id:"-tes-notes",level:2,title:"\ud83d\udcdd Tes notes",children:[]},{id:"comprendre",level:2,title:"Comprendre",children:[]},{id:"exercice",level:2,title:"Exercice",children:[]},{id:"bonus",level:2,title:"Bonus",children:[{id:"1--cr\xe9er-un-composant-react",level:3,title:"1. \ud83d\ude80 Cr\xe9er un composant React",children:[]},{id:"2--g\xe8re-les-props-color-et-size-dans-le-composant",level:3,title:Object(o.a)(p.a.Fragment,null,"2. \ud83d\ude80 G\xe8re les props ",Object(o.a)(MDXTag,{name:"inlineCode",components:n},"color")," et ",Object(o.a)(MDXTag,{name:"inlineCode",components:n},"size")," dans le composant"),children:[]}]},{id:"aller-plus-loin",level:2,title:"Aller plus loin",children:[]},{id:"-feedback",level:2,title:"\ud83d\udc1c Feedback",children:[]}]},m={}},329:function(n,a,e){"use strict";e.d(a,"a",(function(){return d}));var t=e(0),s=e.n(t);function p(n,a,e){return a in n?Object.defineProperty(n,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[a]=e,n}function o(n,a){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),e.push.apply(e,t)}return e}function c(n){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?o(Object(e),!0).forEach((function(a){p(n,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(e,a))}))}return n}function l(n,a){if(null==n)return{};var e,t,s=function(n,a){if(null==n)return{};var e,t,s={},p=Object.keys(n);for(t=0;t<p.length;t++)e=p[t],a.indexOf(e)>=0||(s[e]=n[e]);return s}(n,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(n);for(t=0;t<p.length;t++)e=p[t],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(s[e]=n[e])}return s}var r=s.a.createContext({}),u=function(n){var a=s.a.useContext(r),e=a;return n&&(e="function"===typeof n?n(a):c(c({},a),n)),e},i={inlineCode:"code",wrapper:function(n){var a=n.children;return s.a.createElement(s.a.Fragment,{},a)}},m=s.a.forwardRef((function(n,a){var e=n.components,t=n.mdxType,p=n.originalType,o=n.parentName,r=l(n,["components","mdxType","originalType","parentName"]),m=u(e),d=t,k=m["".concat(o,".").concat(d)]||m[d]||i[d]||p;return e?s.a.createElement(k,c(c({ref:a},r),{},{components:e})):s.a.createElement(k,c({ref:a},r))}));function d(n,a){var e=arguments,t=a&&a.mdxType;if("string"===typeof n||t){var p=e.length,o=new Array(p);o[0]=m;var c={};for(var l in a)hasOwnProperty.call(a,l)&&(c[l]=a[l]);c.originalType=n,c.mdxType="string"===typeof n?n:t,o[1]=c;for(var r=2;r<p;r++)o[r]=e[r];return s.a.createElement.apply(null,o)}return s.a.createElement.apply(null,e)}m.displayName="MDXCreateElement"}}]);
//# sourceMappingURL=29.55bb8c02.chunk.js.map