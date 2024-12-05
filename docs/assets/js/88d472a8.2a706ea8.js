"use strict";(self.webpackChunkuser_documentation=self.webpackChunkuser_documentation||[]).push([[8528],{6545:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var t=r(5893),s=r(1151),i=r(8492);const o={},c=void 0,l={id:"Core Development/Triggers/REST",title:"REST",description:"Quickintegrate platform supports REST API development using HTTP trigger where configurations can be defined such as host, port, uri/query params etc.",source:"@site/docs/Core Development/Triggers/REST.md",sourceDirName:"Core Development/Triggers",slug:"/Core Development/Triggers/REST",permalink:"/Core Development/Triggers/REST",draft:!1,unlisted:!1,editUrl:"https://github.com/quickintegrate/docs/tree/main/Core Development/Triggers/REST.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Messaging",permalink:"/Core Development/Triggers/Messaging"},next:{title:"Scheduler",permalink:"/Core Development/Triggers/Scheduler"}},d={},a=[{value:"Configuration",id:"configuration",level:3}];function h(e){const n={admonition:"admonition",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Quickintegrate platform supports ",(0,t.jsx)(n.strong,{children:"REST API"})," development using HTTP trigger where configurations can be defined such as host, port, uri/query params etc."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The flow must contain atleast one APIRESPONSE element in it when this is used."}),"\n",(0,t.jsxs)(n.li,{children:["For method ",(0,t.jsx)(i.Ct,{cls:"success",method:"POST"})," / ",(0,t.jsx)(i.Ct,{cls:"warning",method:"PUT"})," / ",(0,t.jsx)(i.Ct,{cls:"success",method:"PATCH"})," request body is not compulsory."]}),"\n"]})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"When we Login to Quick Integration Platform to get started."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click on ",(0,t.jsx)(n.strong,{children:"Manage"})," Option >> ",(0,t.jsx)(n.strong,{children:"Projects"})," >> ",(0,t.jsx)(n.strong,{children:"Create"})," to create the new project"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Go to ",(0,t.jsx)(n.strong,{children:"DEVELOP"})," >> ",(0,t.jsx)(n.strong,{children:"Functionality"})," API"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Select relevant project and create services in that project by cliking ",(0,t.jsx)(n.strong,{children:"Service"})," button."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Select ",(0,t.jsx)(n.strong,{children:"REST"})," triggers in drowndown while creating the flow"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Once service name is provided, canvas will show up with selected DB ",(0,t.jsx)(n.strong,{children:"REST"})," Trigger"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.Ee,{src:"/img/Core Development/Trigger/rest.png",alt:"REST trigger"}),"\n",(0,t.jsx)(n.h3,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(i.Ee,{cls:"border mb-2",src:"/img/Core Development/Trigger_config/rest.png",alt:"Trigger Configuration"}),"\n",(0,t.jsx)(n.p,{children:"Right click the tigger node to add the REST configurations uri and type needs to be defined. Query and Uri parameters can be defined with Uri as below:"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Fields"}),(0,t.jsx)("th",{children:"Description"}),(0,t.jsx)("th",{children:"Example"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"uri"}),(0,t.jsx)("td",{children:"Resource Path"}),(0,t.jsx)("td",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"/contact/{ContactId}\n"})})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"type"}),(0,t.jsx)("td",{children:"Methods"}),(0,t.jsx)("td",{children:(0,t.jsx)(i.Ct,{cls:"info",method:"GET"})})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"URI parameters are defined in curly brackets"})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8492:(e,n,r)=>{r.d(n,{Ct:()=>i,Ee:()=>o,nk:()=>c});var t=r(4996),s=r(5893);function i(e){let{cls:n,method:r}=e;return(0,s.jsx)("span",{className:`badge badge--${n} margin-bottom--sm`,children:r})}function o(e){let{cls:n,src:r,alt:i}=e;return(0,s.jsx)("div",{className:"default-container",children:(0,s.jsx)("img",{className:n,src:(0,t.Z)(r),alt:i})})}function c(e){let{cls:n="default-container",src:r,type:i}=e;return(0,s.jsx)("div",{className:n,children:(0,s.jsxs)("video",{controls:!0,children:[(0,s.jsx)("source",{src:(0,t.Z)(r),type:i}),"Your browser does not support the video tag."]})})}},1151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>o});var t=r(7294);const s={},i=t.createContext(s);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);