/*! For license information please see 22.d92d8570.chunk.js.LICENSE.txt */
(this["webpackJsonp@mikecodeur/react-fondamentaux"]=this["webpackJsonp@mikecodeur/react-fondamentaux"]||[]).push([[22],{279:function(e,t,n){"use strict";n.r(t);var r=n(7),o=n(0),a=n(327);function u(){var e=o.useState(""),t=Object(r.a)(e,2),n=t[0],u=t[1],c=o.useState(),i=Object(r.a)(c,2),s=i[0],l=i[1];return Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),alert("Bonjour ".concat(n))},children:[Object(a.jsxs)("label",{children:["Adresse email :",Object(a.jsx)("input",{type:"text",name:"emailInput",onChange:function(e){u(e.target.value),l(e.target.value.includes("@")?null:"L'email est non valide")}})]}),Object(a.jsx)("div",{style:{color:"red"},children:s}),Object(a.jsx)("input",{type:"submit",value:"Connexion"})]})}t.default=function(){return Object(a.jsx)(u,{})}},327:function(e,t,n){"use strict";e.exports=n(328)},328:function(e,t,n){"use strict";n(88);var r=n(0),o=60103;if(t.Fragment=60107,"function"===typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),t.Fragment=a("react.fragment")}var u=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,i={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,a={},s=null,l=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(l=t.ref),t)c.call(t,r)&&!i.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:s,ref:l,props:a,_owner:u.current}}t.jsx=s,t.jsxs=s}}]);
//# sourceMappingURL=22.d92d8570.chunk.js.map