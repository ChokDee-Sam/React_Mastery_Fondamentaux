(this["webpackJsonp@mikecodeur/react-fondamentaux"]=this["webpackJsonp@mikecodeur/react-fondamentaux"]||[]).push([[32],{249:function(n,a,s){"use strict";s.r(a),s.d(a,"readingTime",(function(){return o})),s.d(a,"default",(function(){return l})),s.d(a,"tableOfContents",(function(){return u})),s.d(a,"frontMatter",(function(){return i}));var t=s(78),p=(s(0),s(329)),e=["components"],o={text:"3 min read",minutes:2.27,time:136200,words:454},c={};function l(n){var a=n.components,s=Object(t.a)(n,e);return Object(p.a)("wrapper",Object.assign({},c,s,{components:a,mdxType:"MDXLayout"}),Object(p.a)("h1",{id:"les-states"},"Les States"),Object(p.a)("h3",{id:"-comprendre-\xe0-quoi-servent-les-states"},"\ud83d\udca1 Comprendre \xe0 quoi servent les states"),Object(p.a)("h2",{id:"-tes-notes"},"\ud83d\udcdd Tes notes"),Object(p.a)("p",null,"Detaille ce que tu as appris ici\n",Object(p.a)("inlineCode",{parentName:"p"},"src/exercise/01.md"),"ou\xa0sur\xa0une\xa0page\xa0",Object(p.a)("a",{parentName:"p",href:"https://go.mikecodeur.com/course-notes-template"},"Notion")),Object(p.a)("h2",{id:"comprendre"},"Comprendre"),Object(p.a)("p",null,"Reprenons l\u2019exercice pr\xe9c\xe8dent"),Object(p.a)("pre",null,Object(p.a)("code",{parentName:"pre",className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">const</span> skills <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>id<span class="token operator">:</span> <span class="token string">\'e313\'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">\'HTML\'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>id<span class="token operator">:</span> <span class="token string">\'f980\'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">\'CSS\'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>id<span class="token operator">:</span> <span class="token string">\'11eb\'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">\'JS\'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>id<span class="token operator">:</span> <span class="token string">\'9a03\'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">\'REACT\'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>id<span class="token operator">:</span> <span class="token string">\'65d4\'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">\'ANGULAR\'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span>\n<span class="token keyword">function</span> <span class="token function">MesSkills</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token punctuation">{</span>skills<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">skill</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>skill<span class="token punctuation">.</span>id<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>skill<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n'}})),Object(p.a)("h2",{id:"exercice"},"Exercice"),Object(p.a)("p",null,"Dans cet exercice il va falloir ajouter des nouveaux ",Object(p.a)("inlineCode",{parentName:"p"},"skills")," via un bouton et\nvoir la liste \xe9voluer \xe0 l\u2019\xe9cran."),Object(p.a)("pre",null,Object(p.a)("code",{parentName:"pre",className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token punctuation">;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>addSkillPython<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Ajouter Skill Python</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n\n<span class="token keyword">function</span> <span class="token function">addSkillPython</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  skills<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>id<span class="token operator">:</span> <span class="token number">555</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">\'Python\'</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n'}})),Object(p.a)("blockquote",null,Object(p.a)("p",{parentName:"blockquote"},"\u26a0\ufe0f On constate bien l\u2019ajout du ",Object(p.a)("em",{parentName:"p"},"skill")," python (dans les logs) mais rien ne se\nmet \xe0 jour dans l\u2019\xe9cran")),Object(p.a)("h2",{id:"bonus"},"Bonus"),Object(p.a)("h3",{id:"1--passer-par-un-prop-pour-la-modification-function-impure"},"1. \ud83d\ude80 Passer par un prop pour la modification (function impure)"),Object(p.a)("p",null,"Nous avons vu pr\xe9c\xe9demment que les donn\xe9es sont bien sotck\xe9es dans l",Object(p.a)("inlineCode",{parentName:"p"},"'array"),",\nmais l\u2019\xe9cran ne se met pas \xe0 jour. Testons maintenant en passant par un ",Object(p.a)("inlineCode",{parentName:"p"},"prop"),"\net en le modifiant en interne (",Object(p.a)("em",{parentName:"p"},"function impure"),")"),Object(p.a)("p",null,"\ud83d\udcd1 Doc React\n",Object(p.a)("a",{parentName:"p",href:"https://reactjs.org/docs/components-and-props.html#props-are-read-only"},"fonctions pures / impures")),Object(p.a)("blockquote",null,Object(p.a)("p",{parentName:"blockquote"},"\u26a0\ufe0f Ne pas faire \xe7a : Toutes les fonctions React doivent \xeatres pures, ici c\u2019est\npour la d\xe9monstration")),Object(p.a)("h3",{id:"2--passer-par-un-state-pour-la-modification"},"2. \ud83d\ude80 Passer par un state pour la modification"),Object(p.a)("p",null,"Deux mani\xe8res s\u2019offrent \xe0 nous pour cr\xe9er un composant ",Object(p.a)("inlineCode",{parentName:"p"},"statefull")," (contenant\ndes ",Object(p.a)("inlineCode",{parentName:"p"},"states)")),Object(p.a)("ul",null,Object(p.a)("li",{parentName:"ul"},"Convertir notre composant en Classe (non recommand\xe9)")),Object(p.a)("pre",null,Object(p.a)("code",{parentName:"pre",className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">class</span> <span class="token class-name">MesSkills</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>\n    <span class="token comment">//d\xe9claration du state skills</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>skills<span class="token operator">:</span> skills<span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text">\n          </span><span class="token punctuation">{</span><span class="token comment">/* utilisation du state skills */</span><span class="token punctuation">}</span><span class="token plain-text">\n          </span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>skills<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">skill</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>skill<span class="token punctuation">.</span>id<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>skill<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n          <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>addSkillPython<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Ajouter Skill</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n'}})),Object(p.a)("ul",null,Object(p.a)("li",{parentName:"ul"},"Utiliser un Hook d\u2019\xe9tat : useState (m\xe9thode recommand\xe9)")),Object(p.a)("p",null,"Les hooks seront expliqu\xe9s en d\xe9tails dans les modules suivants."),Object(p.a)("pre",null,Object(p.a)("code",{parentName:"pre",className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">function</span> <span class="token function">MesSkills</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">//declaration du state skills</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>skills<span class="token punctuation">,</span> setSkills<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span>skills<span class="token punctuation">)</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text">\n        </span><span class="token punctuation">{</span>skills<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">skill</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>skill<span class="token punctuation">.</span>id<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>skill<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>addSkillPython<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Ajouter Skill</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n'}})),Object(p.a)("p",null,"Dans cet exercice pour \xe9viter les collisions de noms nous allons renommer notre\ntableau initial ",Object(p.a)("inlineCode",{parentName:"p"},"skills")," en ",Object(p.a)("inlineCode",{parentName:"p"},"initialSkills")),Object(p.a)("pre",null,Object(p.a)("code",{parentName:"pre",className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">const</span> initialSkills <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>id<span class="token operator">:</span> <span class="token string">\'e313\'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">\'HTML\'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>id<span class="token operator">:</span> <span class="token string">\'f980\'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">\'CSS\'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>id<span class="token operator">:</span> <span class="token string">\'11eb\'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">\'JS\'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>id<span class="token operator">:</span> <span class="token string">\'9a03\'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">\'REACT\'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>id<span class="token operator">:</span> <span class="token string">\'65d4\'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">\'ANGULAR\'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span>\n'}})),Object(p.a)("p",null,"Dans la fonction ",Object(p.a)("inlineCode",{parentName:"p"},"addSkillPython")," il faudra passer par la fonction ",Object(p.a)("inlineCode",{parentName:"p"},"setSkills"),"\net non pas modifier directement ",Object(p.a)("inlineCode",{parentName:"p"},"skills")," (",Object(p.a)("em",{parentName:"p"},"sinon le rendu ne se fera pas \xe0\nl\u2019\xe9cran, comme dans l\u2019exemple pr\xe9c\xe8dent en passant par un prop"),")."),Object(p.a)("p",null,"Note : la fonction ",Object(p.a)("inlineCode",{parentName:"p"},"setSkills")," prend en param\xe8tre un ",Object(p.a)("inlineCode",{parentName:"p"},"array"),", il faudra donc\nutiliser la syntaxe ",Object(p.a)("inlineCode",{parentName:"p"},"spread operator")," pour reprendre tous les anciens ",Object(p.a)("inlineCode",{parentName:"p"},"skills"),"\net ajouter le nouveau."),Object(p.a)("pre",null,Object(p.a)("code",{parentName:"pre",className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token function">setSkills</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>skills<span class="token punctuation">,</span><span class="token punctuation">{</span>ici le nouveau skill<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n'}})),Object(p.a)("h2",{id:"-feedback"},"\ud83d\udc1c Feedback"),Object(p.a)("p",null,"Remplir le formulaire le\n",Object(p.a)("a",{parentName:"p",href:"https://go.mikecodeur.com/cours-react-avis?entry.1430994900=React%20Fondamentaux&entry.533578441=08%20Les%20States"},"formulaire de FeedBack.")))}l.isMDXComponent=!0;var u=function(){return[{id:"-comprendre-\xe0-quoi-servent-les-states",level:3,title:"\ud83d\udca1 Comprendre \xe0 quoi servent les states",children:[]},{id:"-tes-notes",level:2,title:"\ud83d\udcdd Tes notes",children:[]},{id:"comprendre",level:2,title:"Comprendre",children:[]},{id:"exercice",level:2,title:"Exercice",children:[]},{id:"bonus",level:2,title:"Bonus",children:[{id:"1--passer-par-un-prop-pour-la-modification-function-impure",level:3,title:"1. \ud83d\ude80 Passer par un prop pour la modification (function impure)",children:[]},{id:"2--passer-par-un-state-pour-la-modification",level:3,title:"2. \ud83d\ude80 Passer par un state pour la modification",children:[]}]},{id:"-feedback",level:2,title:"\ud83d\udc1c Feedback",children:[]}]},i={}},329:function(n,a,s){"use strict";s.d(a,"a",(function(){return d}));var t=s(0),p=s.n(t);function e(n,a,s){return a in n?Object.defineProperty(n,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[a]=s,n}function o(n,a){var s=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),s.push.apply(s,t)}return s}function c(n){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?o(Object(s),!0).forEach((function(a){e(n,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(s,a))}))}return n}function l(n,a){if(null==n)return{};var s,t,p=function(n,a){if(null==n)return{};var s,t,p={},e=Object.keys(n);for(t=0;t<e.length;t++)s=e[t],a.indexOf(s)>=0||(p[s]=n[s]);return p}(n,a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);for(t=0;t<e.length;t++)s=e[t],a.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(n,s)&&(p[s]=n[s])}return p}var u=p.a.createContext({}),i=function(n){var a=p.a.useContext(u),s=a;return n&&(s="function"===typeof n?n(a):c(c({},a),n)),s},r={inlineCode:"code",wrapper:function(n){var a=n.children;return p.a.createElement(p.a.Fragment,{},a)}},k=p.a.forwardRef((function(n,a){var s=n.components,t=n.mdxType,e=n.originalType,o=n.parentName,u=l(n,["components","mdxType","originalType","parentName"]),k=i(s),d=t,m=k["".concat(o,".").concat(d)]||k[d]||r[d]||e;return s?p.a.createElement(m,c(c({ref:a},u),{},{components:s})):p.a.createElement(m,c({ref:a},u))}));function d(n,a){var s=arguments,t=a&&a.mdxType;if("string"===typeof n||t){var e=s.length,o=new Array(e);o[0]=k;var c={};for(var l in a)hasOwnProperty.call(a,l)&&(c[l]=a[l]);c.originalType=n,c.mdxType="string"===typeof n?n:t,o[1]=c;for(var u=2;u<e;u++)o[u]=s[u];return p.a.createElement.apply(null,o)}return p.a.createElement.apply(null,s)}k.displayName="MDXCreateElement"}}]);
//# sourceMappingURL=32.2fbeed7b.chunk.js.map