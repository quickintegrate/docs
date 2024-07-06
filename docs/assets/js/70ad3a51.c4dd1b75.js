"use strict";(self.webpackChunkuser_documentation=self.webpackChunkuser_documentation||[]).push([[8202],{4918:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var r=n(5893),a=n(1151),s=n(5265);const i={description:"Trigger REST and Connector MAIL",services:[{serviceName:"sendMailToMulInValidEmail",description:"Send mail with to config as atd#^&gdf.com , <receiver-mail-id>@gmail.com",input:"mail test for multiple invalid email",output:JSON.stringify({errorCode:500,status:"Failed",errorDescription:"Error Occured in INTMailProcessor. Cause: Failed messages: jakarta.mail.SendFailedException: Invalid Addresses;\n  nested exception is:\n\torg.eclipse.angus.mail.smtp.SMTPAddressFailedException: 553-5.1.3 The recipient address <atde123$$.com> is not a valid RFC 5321 address.\n553-5.1.3 For more information, go to\n553-5.1.3  https://support.google.com/a/answer/3221692 and review RFC 5321\n553 5.1.3 specifications. d9443c01a7336-1fac11d8c26sm1668825ad.110 - gsmtp\n"},null,2),endpointInfo:{cls:"success",method:"POST",basepath:"sendMailToMulInvalidEmail"}},{serviceName:"sendMailToIdNotExists",description:"SemdMail to id which does not exist",input:"send mail to invalid email id",output:JSON.stringify({result:"mail sent to non existent id"},null,2),endpointInfo:{cls:"success",method:"POST",basepath:"sendMailToIdNotExists"}},{serviceName:"mailWithoutTimeout",description:"setting timeout. if connection take longer that set time, gives timeout error.",input:"This is a new message. First try was successfull!!",output:JSON.stringify({Result:"Mail Sent Successfully, "},null,2),endpointInfo:{cls:"success",method:"POST",basepath:"mailWithoutTimeOut?subject=Testing%20for%20mail%20Connector.%20Secon%20Try.&tempmail=<receiver-mail-id>@gmail.com"}}]},l={},o=void 0,u={id:"Quickintegrate Templates/TRREST_CNMAIL",title:"TRREST_CNMAIL",description:"",source:"@site/docs/Quickintegrate Templates/TRREST_CNMAIL.md",sourceDirName:"Quickintegrate Templates",slug:"/Quickintegrate Templates/TRREST_CNMAIL",permalink:"/Quickintegrate Templates/TRREST_CNMAIL",draft:!1,unlisted:!1,editUrl:"https://github.com/quickintegrate/docs/tree/main/Quickintegrate Templates/TRREST_CNMAIL.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TRREST_CNFILE",permalink:"/Quickintegrate Templates/TRREST_CNFILE"},next:{title:"TRREST_CNMQ",permalink:"/Quickintegrate Templates/TRREST_CNMQ"}},c={},d=[];function m(e){return(0,r.jsx)(s.Z,{...i})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m()}},5265:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(7294),a=n(6010),s=n(2466),i=n(6550),l=n(469),o=n(1980),u=n(7392),c=n(12);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=m(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[u,d]=h({queryString:n,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),g=(()=>{const e=u??f;return p({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(5893);function T(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),a=l[n].value;a!==r&&(u(t),i(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function I(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,a.Z)("tabs-container",g.tabList),children:[(0,v.jsx)(T,{...e,...t}),(0,v.jsx)(x,{...e,...t})]})}function j(e){const t=(0,b.Z)();return(0,v.jsx)(I,{...e,children:d(e.children)},String(t))}const N={tabItem:"tabItem_Ymn6"};function S(e){let{children:t,hidden:n,className:r}=e;return(0,v.jsx)("div",{role:"tabpanel",className:(0,a.Z)(N.tabItem,r),hidden:n,children:t})}var k=n(4179);function E(e){const t=/(\bhttps?:\/\/[^\s]+)/g,n=/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;return e.split(/(\bhttps?:\/\/[^\s]+|\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b)/g).map(((e,r)=>t.test(e)?(0,v.jsx)("a",{href:e,target:"_blank",rel:"noopener noreferrer",children:e},r):n.test(e)?(0,v.jsx)("a",{href:`mailto:${e}`,children:e},r):e))}function y(e){let{srNo:t,serviceName:n,description:r,input:a=null,output:s=null,endpointInfo:{cls:i="info",method:l="GET",basepath:o=""}={}}=e;return(0,v.jsxs)("tr",{children:[(0,v.jsxs)("td",{children:[t,"."]}),(0,v.jsx)("td",{children:n}),(0,v.jsx)("td",{children:(u=r,u.split("\n").map(((e,t)=>(0,v.jsx)("span",{style:{display:"block"},children:E(e)},t))))}),o&&(0,v.jsx)("td",{children:(0,v.jsxs)(j,{children:[(0,v.jsx)(S,{value:"Input",label:"Input",default:!0,children:a&&(0,v.jsx)(k.Z,{className:"templateIO",children:a})}),(0,v.jsx)(S,{value:"Output",label:"Output",children:s&&(0,v.jsx)(k.Z,{className:"templateIO",children:s})}),(0,v.jsxs)(S,{value:"Path",label:"Path",children:[(0,v.jsx)("span",{className:`badge badge--${i} margin-bottom--sm`,children:l}),(0,v.jsxs)(k.Z,{className:"templateIO",children:["/",o]})]})]})})]});var u}function w(e){let{description:t,services:n}=e;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("p",{children:t}),(0,v.jsxs)("table",{children:[(0,v.jsx)("thead",{children:(0,v.jsxs)("tr",{children:[(0,v.jsx)("th",{children:"Sr. No"}),(0,v.jsx)("th",{children:"Service Name"}),(0,v.jsx)("th",{children:"Description"}),n[0].endpointInfo&&(0,v.jsx)("th",{children:"Details"})]})}),(0,v.jsx)("tbody",{children:n.map(((e,t)=>(0,v.jsx)(y,{srNo:t+1,...e},t)))})]})]})}}}]);