"use strict";(self.webpackChunkuser_documentation=self.webpackChunkuser_documentation||[]).push([[548],{4539:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>a,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var r=n(5893),o=n(1151),s=n(4996);const i={sidebar_position:3},c="Step error",d={id:"Core Development/Components/STEP ERROR",title:"Step error",description:"Step error component is used to catch and handle errors specific to a connector/step in the API.",source:"@site/docs/Core Development/Components/STEP ERROR.md",sourceDirName:"Core Development/Components",slug:"/Core Development/Components/STEP ERROR",permalink:"/Core Development/Components/STEP ERROR",draft:!1,unlisted:!1,editUrl:"https://github.com/quickintegrate/docs/tree/main/Core Development/Components/STEP ERROR.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Global Error",permalink:"/Core Development/Components/GLOBAL ERROR"},next:{title:"Condition",permalink:"/Core Development/Components/CONDITION"}},p={},h=[];function l(e){const t={h1:"h1",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"step-error",children:"Step error"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Step error"})," component is used to catch and handle errors specific to a connector/step in the API."]}),"\n",(0,r.jsx)(t.p,{children:"error handling is no longer limited to a Java exception handling process that requires you to check the source code or force an error in order\nunderstand what happened. Errors mostly occur at runtime that's they belong to an unchecked type."}),"\n",(0,r.jsx)(t.p,{children:"We catch the error at the flow level in the step error component"}),"\n",(0,r.jsx)(t.p,{children:"so after which step does the user need to catch the error, just copy and paste the step error component below that step and connect both components with the help of the connector line. and drag-drop any component in that step error for error message. but keep remembering when you need to drag a component in the error step, first, you need to select that error step component then drag another component in that step error then only your component will work"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Step Exception handling in the service:"})}),"\n",(0,r.jsxs)(t.p,{children:["Step error is specifically for particular connector error.\nDrag and drop the ",(0,r.jsx)(t.strong,{children:"Step Error"})," and configure it for the DB"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)("img",{src:(0,s.Z)("/img/Core Development/Components/Step Error.png")}),";"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)("img",{src:(0,s.Z)("/img/Core Development/Components/Step error drag and drop.png")}),";"]}),"\n",(0,r.jsxs)(t.p,{children:["Drag and drop ",(0,r.jsx)(t.strong,{children:"Utility"})," Connector Inside the Step Error Component and refer the configration shown below"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)("img",{src:(0,s.Z)("/img/DB_Rest_API/15.1.1.png")}),";"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)("img",{src:(0,s.Z)("/img/DB_Rest_API/15.png")}),";"]}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Fields"}),(0,r.jsx)("th",{children:"Description"}),(0,r.jsx)("th",{children:"Example"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Method"}),(0,r.jsx)("td",{children:"This is the utility function to throw the error in the flow"}),(0,r.jsx)("td",{children:"throw error"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Error Type"}),(0,r.jsx)("td",{children:"Type of Exception thrown in the flow such as INTBuinessException and INTRetryException "}),(0,r.jsx)("td",{children:"INTBuinessException"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Exception message"}),(0,r.jsx)("td",{children:"The custom message while throwing the custom Exception"}),(0,r.jsx)("td",{children:"$VARIABLES.nocustomer"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Exception code"}),(0,r.jsx)("td",{children:"The code while throwing the Execption"}),(0,r.jsx)("td",{children:"$VARIABLES.nocustomercode"})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>i});var r=n(7294);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);