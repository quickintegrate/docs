"use strict";(self.webpackChunkuser_documentation=self.webpackChunkuser_documentation||[]).push([[6404],{7500:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var i=e(5893),r=e(1151),s=e(8492);e(2991);const o={},a="Transaction",c={id:"Monitoring/Transaction/index",title:"Transaction",description:"This page lets you monitor the application transactions.",source:"@site/docs/Monitoring/Transaction/index.md",sourceDirName:"Monitoring/Transaction",slug:"/Monitoring/Transaction/",permalink:"/Monitoring/Transaction/",draft:!1,unlisted:!1,editUrl:"https://github.com/quickintegrate/docs/tree/main/Monitoring/Transaction/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Monitoring UI",permalink:"/Monitoring/"},next:{title:"ReSubmission",permalink:"/Monitoring/Transaction/ReSubmission"}},l={},d=[];function u(t){const n={h1:"h1",p:"p",...(0,r.a)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"transaction",children:"Transaction"}),"\n",(0,i.jsx)(n.p,{children:"This page lets you monitor the application transactions.\r\nA user can easily check the flow information and its performance and resubmit any transcation."}),"\n",(0,i.jsx)(s.Ee,{src:"/img/Monitoring/Transaction/transaction-page.png",alt:"Transaction_page"})]})}function m(t={}){const{wrapper:n}={...(0,r.a)(),...t.components};return n?(0,i.jsx)(n,{...t,children:(0,i.jsx)(u,{...t})}):u(t)}},2991:(t,n,e)=>{e.d(n,{Z:()=>x});e(7294);var i=e(6010),r=e(3438),s=e(9960),o=e(3919),a=e(5999),c=e(2503);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=e(5893);function u(t){let{href:n,children:e}=t;return(0,d.jsx)(s.Z,{href:n,className:(0,i.Z)("card padding--lg",l.cardContainer),children:e})}function m(t){let{href:n,icon:e,title:r,description:s}=t;return(0,d.jsxs)(u,{href:n,children:[(0,d.jsxs)(c.Z,{as:"h2",className:(0,i.Z)("text--truncate",l.cardTitle),title:r,children:[e," ",r]}),s&&(0,d.jsx)("p",{className:(0,i.Z)("text--truncate",l.cardDescription),title:s,children:s})]})}function p(t){let{item:n}=t;const e=(0,r.LM)(n);return e?(0,d.jsx)(m,{href:e,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:n.description??(0,a.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n.items.length})}):null}function h(t){let{item:n}=t;const e=(0,o.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,r.xz)(n.docId??void 0);return(0,d.jsx)(m,{href:n.href,icon:e,title:n.label,description:n.description??i?.description})}function f(t){let{item:n}=t;switch(n.type){case"link":return(0,d.jsx)(h,{item:n});case"category":return(0,d.jsx)(p,{item:n});default:throw new Error(`unknown item type ${JSON.stringify(n)}`)}}function g(t){let{className:n}=t;const e=(0,r.jA)();return(0,d.jsx)(x,{items:e.items,className:n})}function x(t){const{items:n,className:e}=t;if(!n)return(0,d.jsx)(g,{...t});const s=(0,r.MN)(n);return(0,d.jsx)("section",{className:(0,i.Z)("row",e),children:s.map(((t,n)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(f,{item:t})},n)))})}},8492:(t,n,e)=>{e.d(n,{Ct:()=>s,Ee:()=>o,nk:()=>a});var i=e(4996),r=e(5893);function s(t){let{cls:n,method:e}=t;return(0,r.jsx)("span",{className:`badge badge--${n} margin-bottom--sm`,children:e})}function o(t){let{cls:n,src:e,alt:s}=t;return(0,r.jsx)("div",{className:"default-container",children:(0,r.jsx)("img",{className:n,src:(0,i.Z)(e),alt:s})})}function a(t){let{cls:n="default-container",src:e,type:s}=t;return(0,r.jsx)("div",{className:n,children:(0,r.jsxs)("video",{controls:!0,children:[(0,r.jsx)("source",{src:(0,i.Z)(e),type:s}),"Your browser does not support the video tag."]})})}},1151:(t,n,e)=>{e.d(n,{Z:()=>a,a:()=>o});var i=e(7294);const r={},s=i.createContext(r);function o(t){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function a(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:o(t.components),i.createElement(s.Provider,{value:n},t.children)}}}]);