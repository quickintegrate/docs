"use strict";(self.webpackChunkuser_documentation=self.webpackChunkuser_documentation||[]).push([[9580],{4350:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var t=i(5893),o=i(1151),r=i(4996);const s={sidebar_position:5},a="Configure gateway using OneClick.",l={id:"Getting Started/Configure gateway using OneClick",title:"Configure gateway using OneClick.",description:"Apply proxy to your services with features like Authentication, Security, Traffic Control and much more.",source:"@site/docs/Getting Started/Configure gateway using OneClick.md",sourceDirName:"Getting Started",slug:"/Getting Started/Configure gateway using OneClick",permalink:"/Getting Started/Configure gateway using OneClick",draft:!1,unlisted:!1,editUrl:"https://github.com/quickintegrate/docs/tree/main/Getting Started/Configure gateway using OneClick.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Postal details Rest API Design Document",permalink:"/Getting Started/Create Postal details Rest API"},next:{title:"QuickIntegrate Overview",permalink:"/QuickIntegrate_Overview/"}},c={},u=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Open: Gateway / OneClick API",id:"open-gateway--oneclick-api",level:2},{value:"New Configuration",id:"new-configuration",level:2},{value:"Apply Plugin (optional)",id:"apply-plugin-optional",level:2},{value:"Access Credentials (optional)",id:"access-credentials-optional",level:2},{value:"Test using Postman",id:"test-using-postman",level:2},{value:"With plugin",id:"with-plugin",level:3},{value:"Without plugin",id:"without-plugin",level:3},{value:"Update Configurations",id:"update-configurations",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"configure-gateway-using-oneclick",children:"Configure gateway using OneClick."}),"\n",(0,t.jsx)(n.p,{children:"Apply proxy to your services with features like Authentication, Security, Traffic Control and much more.\r\nThe OneClick API feature allows one to create service with corresponding route and plugin if applied, consumer creation with its dependencies with default values in just few seconds."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"Note: This feature is available for Admin only. Normal users need to do configurations manually."})}),"\n",(0,t.jsx)(n.h2,{id:"prerequisite",children:"Prerequisite"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Login to Designer by clicking on the link below:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://designer.quickintegrate.io/login",children:"https://designer.quickintegrate.io/login"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open: ",(0,t.jsx)(n.strong,{children:"Execute / Deploy"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Application must be UP and running which contains the services that you want to configure to gateway.\r\nHere we have taken ",(0,t.jsx)(n.strong,{children:"sample"})," project and started it."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)("img",{src:(0,r.Z)("/img/Configure Gateway/deployedApp.png")}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Login to Monitor by clicking on the link below:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://monitor.quickintegrate.io/login",children:"https://monitor.quickintegrate.io/login"})}),"\n",(0,t.jsxs)(n.p,{children:["or click on ",(0,t.jsx)(n.strong,{children:"MONITOR"})," in the sidbar as below:"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)("img",{src:(0,r.Z)("/img/Configure Gateway/sidbarMonitor.png")}),"\n",(0,t.jsx)(n.h2,{id:"open-gateway--oneclick-api",children:"Open: Gateway / OneClick API"}),"\n",(0,t.jsx)(n.p,{children:"Select Project Name, Build Version and Environment. Service list will be display as below:"}),"\n",(0,t.jsx)("img",{src:(0,r.Z)("/img/Configure Gateway/servicelist.png")}),"\n",(0,t.jsx)(n.h2,{id:"new-configuration",children:"New Configuration"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Click on plus button in the Action column of the service that you want to configure to gateway."}),"\n",(0,t.jsx)(n.li,{children:"Click on submit if you don't want to apply plugin and your configuration is done."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Default path will be the actual service path you can change it according to your preferences."})}),"\n",(0,t.jsx)("img",{src:(0,r.Z)("/img/Configure Gateway/new_config.png")}),"\n",(0,t.jsx)(n.h2,{id:"apply-plugin-optional",children:"Apply Plugin (optional)"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Check any checkbox to apply any one plugin. Here we have selected Key Auth plugin."}),"\n",(0,t.jsx)(n.li,{children:"Now you need to provide a name for consumer."}),"\n",(0,t.jsx)(n.li,{children:"Click on submit and your configuration is done."}),"\n"]}),"\n",(0,t.jsx)("img",{src:(0,r.Z)("/img/Configure Gateway/keyauthPlugin.png")}),"\n",(0,t.jsx)(n.h2,{id:"access-credentials-optional",children:"Access Credentials (optional)"}),"\n",(0,t.jsx)(n.p,{children:"Now that you have successfully configure gateway and applied plugin i.e. Key Auth in this example."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Key name goes by default in header / query while calling your API."})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["You can view your Key name on page ",(0,t.jsx)(n.strong,{children:"Gateway / Plugins"}),".\r\nOnce on the page click on plugin name to view details or on eye icon to see raw view.\r\nYou can refer to the below image:"]}),"\n"]}),"\n",(0,t.jsx)("img",{src:(0,r.Z)("/img/Configure Gateway/keyname.png")}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Open consumers page ",(0,t.jsx)(n.strong,{children:"Gateway / Consumers"}),".\r\nOnce on the page click on consumer name to view details.\r\nThen click on Credentials tab to view all ",(0,t.jsx)(n.strong,{children:"API Keys"}),"."]}),"\n"]}),"\n",(0,t.jsx)("img",{src:(0,r.Z)("/img/Configure Gateway/apikey.png")}),"\n",(0,t.jsx)(n.h2,{id:"test-using-postman",children:"Test using Postman"}),"\n",(0,t.jsx)(n.h3,{id:"with-plugin",children:"With plugin"}),"\n",(0,t.jsx)(n.p,{children:"Now add the Key name and API key in header.\r\nThe below images shows the response with and without API Key."}),"\n",(0,t.jsx)("img",{src:(0,r.Z)("/img/Configure Gateway/postman.png")}),"\n",(0,t.jsx)("img",{src:(0,r.Z)("/img/Configure Gateway/withoutKeyauth.png")}),"\n",(0,t.jsx)(n.h3,{id:"without-plugin",children:"Without plugin"}),"\n",(0,t.jsx)("img",{src:(0,r.Z)("/img/Configure Gateway/withoutPlugin.png")}),"\n",(0,t.jsx)(n.h2,{id:"update-configurations",children:"Update Configurations"}),"\n",(0,t.jsx)(n.p,{children:"Now if needed you can change service or route path, host or anything else manually."})]})}function g(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>s});var t=i(7294);const o={},r=t.createContext(o);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);