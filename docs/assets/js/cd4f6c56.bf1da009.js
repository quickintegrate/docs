"use strict";(self.webpackChunkuser_documentation=self.webpackChunkuser_documentation||[]).push([[3312],{8710:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var t=i(5893),o=i(1151),l=i(8492);const s={sidebar_position:2,slug:"deploy",sidebar_label:"Deploy"},r="Application Deployment",a={id:"Build and Deploy/Deploy",title:"Application Deployment",description:"Now that you have Build your application, let\u2019s deploy from within Quickintegration to CloudHub,",source:"@site/docs/Build and Deploy/Deploy.md",sourceDirName:"Build and Deploy",slug:"/Build and Deploy/deploy",permalink:"/Build and Deploy/deploy",draft:!1,unlisted:!1,editUrl:"https://github.com/quickintegrate/docs/tree/main/Build and Deploy/Deploy.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"deploy",sidebar_label:"Deploy"},sidebar:"tutorialSidebar",previous:{title:"Build",permalink:"/Build and Deploy/Build"},next:{title:"Test Cases",permalink:"/Build and Deploy/Test Cases"}},c={},d=[{value:"Configuration",id:"configuration",level:2},{value:"Start app",id:"start-app",level:2},{value:"Test using Postman",id:"test-using-postman",level:2},{value:"Logging",id:"logging",level:2},{value:"Filter By :",id:"filter-by-",level:4}];function p(e){const n={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"application-deployment",children:"Application Deployment"}),"\n",(0,t.jsx)(n.p,{children:"Now that you have Build your application, let\u2019s deploy from within Quickintegration to CloudHub,\nUnderstanding the process of Deploying an API within the Quickintegration platform holds significant importance."}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Open: ",(0,t.jsx)(n.strong,{children:"Execute / Deploy"})]}),"\n",(0,t.jsxs)(n.li,{children:["By default ",(0,t.jsx)(n.strong,{children:"Applications"})," tab is selected which shows list of configured applications and there status."]}),"\n"]}),"\n",(0,t.jsx)(l.Ee,{cls:"border mb-2",src:"/img/Execute/Deploy/applications.png",alt:"Deployed Application List"}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Select the environment from dropdown to  view / deploy application(s) to specific environment."}),"\n",(0,t.jsx)(n.li,{children:"Click on Deploy Application tab."}),"\n",(0,t.jsx)(n.li,{children:"Select project name and build version from dropdown."}),"\n",(0,t.jsxs)(n.li,{children:["By default the ",(0,t.jsx)(n.strong,{children:"Runtime"})," values like CPU is set to ",(0,t.jsx)(n.strong,{children:"0.25 %"})," and Memory to ",(0,t.jsx)(n.strong,{children:"512 MB"}),". This can be increase according to application requirement.\nOptions:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"CPU"})," - 0.25 / 0.5 / 1 / 2 core"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"Memory"})," - 512 MB / 1 GB / 2 GB"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Now go to ",(0,t.jsx)(n.strong,{children:"Properties"})," tab and provide security key to encrypt crendentials like passwords, api-key, etc. configured in connection properties."]}),"\n",(0,t.jsx)(n.li,{children:"You can edit properties like change server credentials, enable/disable service monitoring."}),"\n",(0,t.jsx)(n.li,{children:"Once you have set all configurations, you can now click on deploy application to configure your deployment."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"start-app",children:"Start app"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Now go back to ",(0,t.jsx)(n.strong,{children:"Applications"})," tab, click on application name that you just configured."]}),"\n",(0,t.jsxs)(n.li,{children:["This will take you to ",(0,t.jsx)(n.strong,{children:"Application Details"})," page on which you can provide the same security key that you provided while configuration and click on ",(0,t.jsx)(n.code,{children:"start"})," button."]}),"\n",(0,t.jsx)(n.li,{children:"Please wait for few minutes as the deployment may take some time to get your application up and running."}),"\n",(0,t.jsxs)(n.li,{children:["Congratulations! you have successfully deployed your application. You can access the application by copying ",(0,t.jsx)(n.code,{children:"Deployment URL"})," shown in ",(0,t.jsx)(n.strong,{children:"Details"})," tab."]}),"\n"]}),"\n",(0,t.jsx)(l.nk,{src:"/img/Execute/Deploy/deployment.mp4",type:"video/mp4"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Crendentials will only be encrpyted while deployment if checked in connection properties."}),"\n",(0,t.jsxs)(n.li,{children:["Applications deployed in environments other than ",(0,t.jsx)(n.strong,{children:"production"})," will be stopped after a runtime of ",(0,t.jsx)(n.em,{children:"half an hour"}),"."]}),"\n"]})}),"\n",(0,t.jsx)(n.h2,{id:"test-using-postman",children:"Test using Postman"}),"\n",(0,t.jsx)(l.Ee,{src:"/img/Execute/Deploy/postman.png",alt:"Accessing application using postman"}),"\n",(0,t.jsx)(n.h2,{id:"logging",children:"Logging"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["By default the ",(0,t.jsx)(n.strong,{children:"Logs"})," tab shows ",(0,t.jsx)(n.code,{children:"250"})," logged lines from past ",(0,t.jsx)(n.code,{children:"24 hrs"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Last 3 days logs are kept for an application."}),"\n"]})}),"\n",(0,t.jsx)(n.h4,{id:"filter-by-",children:"Filter By :"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"No. of logged lines."}),"\n",(0,t.jsx)(n.li,{children:"Start and End datetime."}),"\n",(0,t.jsxs)(n.li,{children:["Keyword search (",(0,t.jsx)(n.em,{children:"case sensitive"}),")."]}),"\n"]}),"\n",(0,t.jsx)(l.nk,{src:"/img/Execute/Deploy/logging.mp4",type:"video/mp4"})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},8492:(e,n,i)=>{i.d(n,{Ct:()=>l,Ee:()=>s,nk:()=>r});var t=i(4996),o=i(5893);function l(e){let{cls:n,method:i}=e;return(0,o.jsx)("span",{className:`badge badge--${n} margin-bottom--sm`,children:i})}function s(e){let{cls:n,src:i,alt:l}=e;return(0,o.jsx)("div",{className:"default-container",children:(0,o.jsx)("img",{className:n,src:(0,t.Z)(i),alt:l})})}function r(e){let{cls:n="default-container",src:i,type:l}=e;return(0,o.jsx)("div",{className:n,children:(0,o.jsxs)("video",{controls:!0,children:[(0,o.jsx)("source",{src:(0,t.Z)(i),type:l}),"Your browser does not support the video tag."]})})}},1151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>s});var t=i(7294);const o={},l=t.createContext(o);function s(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);