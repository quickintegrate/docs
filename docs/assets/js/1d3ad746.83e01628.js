"use strict";(self.webpackChunkuser_documentation=self.webpackChunkuser_documentation||[]).push([[9674],{4771:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var n=r(5893),a=r(1151),s=r(5265);const l={description:"Trigger REST and AI CHAT connector samples",services:[{serviceName:"groqCall",description:"Invoking rest call to the GROQ chat AI using llama3-70b-8192 model with a test input and text answer as the output.",input:JSON.stringify({},null,2),output:JSON.stringify({},null,2),endpointInfo:{cls:"success",method:"POST",basepath:"groqai"}},{serviceName:"chatPractical",description:"Practical Example of Chat AI model. Rest post service with a string containing the order number. Call the AI chat model, to extract this order number from the text. Get order details for this order number from the DB. Convert the returned order detail to simple English text, by calling the AI chat model. Now this English response is returned as a Response of the service.",input:JSON.stringify({},null,2),output:JSON.stringify({},null,2),endpointInfo:{cls:"success",method:"POST",basepath:"chatTest"}},{serviceName:"groqConnectionTimeout",description:"Rest call with connection timeout waiting of 1 millisecond that throws an error and an error response is returned for the connection timed out.",input:JSON.stringify({},null,2),output:JSON.stringify({},null,2),endpointInfo:{cls:"success",method:"POST",basepath:"groqConnectionTimeout"}},{serviceName:"groqReadTimeout",description:"Rest call with response timeout waiting of 1 millisecond that throws an error and an error response is returned for the read timed out.",input:JSON.stringify({},null,2),output:JSON.stringify({},null,2),endpointInfo:{cls:"success",method:"POST",basepath:"groqReadTimeout"}}]},i={},o=void 0,u={id:"Quickintegrate Templates/TRREST_AICHAT",title:"TRREST_AICHAT",description:"",source:"@site/docs/Quickintegrate Templates/TRREST_AICHAT.md",sourceDirName:"Quickintegrate Templates",slug:"/Quickintegrate Templates/TRREST_AICHAT",permalink:"/Quickintegrate Templates/TRREST_AICHAT",draft:!1,unlisted:!1,editUrl:"https://github.com/quickintegrate/docs/tree/main/Quickintegrate Templates/TRREST_AICHAT.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TRMSG",permalink:"/Quickintegrate Templates/TRMSG"},next:{title:"TRREST_ALLCOMPONENTS",permalink:"/Quickintegrate Templates/TRREST_ALLCOMPONENTS"}},c={},d=[];function h(e){return(0,n.jsx)(s.Z,{...l})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h()}},8492:(e,t,r)=>{r.d(t,{Ct:()=>s,Ee:()=>l,nk:()=>i});var n=r(4996),a=r(5893);function s(e){let{cls:t,method:r}=e;return(0,a.jsx)("span",{className:`badge badge--${t} margin-bottom--sm`,children:r})}function l(e){let{cls:t,src:r,alt:s}=e;return(0,a.jsx)("div",{className:"default-container",children:(0,a.jsx)("img",{className:t,src:(0,n.Z)(r),alt:s})})}function i(e){let{cls:t="default-container",src:r,type:s}=e;return(0,a.jsx)("div",{className:t,children:(0,a.jsxs)("video",{controls:!0,children:[(0,a.jsx)("source",{src:(0,n.Z)(r),type:s}),"Your browser does not support the video tag."]})})}},5265:(e,t,r)=>{r.d(t,{Z:()=>E});var n=r(7294),a=r(6010),s=r(2466),l=r(6550),i=r(469),o=r(1980),u=r(7392),c=r(12);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const a=(0,l.k6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o._X)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,s=h(e),[l,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[u,d]=m({queryString:r,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),g=(()=>{const e=u??f;return p({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{g&&o(g)}),[g]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=r(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(5893);function T(e){let{className:t,block:r,selectedValue:n,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),c=e=>{const t=e.currentTarget,r=o.indexOf(t),a=i[r].value;a!==n&&(u(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function x(e){let{lazy:t,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function j(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,a.Z)("tabs-container",g.tabList),children:[(0,v.jsx)(T,{...e,...t}),(0,v.jsx)(x,{...e,...t})]})}function I(e){const t=(0,b.Z)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(t))}const N={tabItem:"tabItem_Ymn6"};function S(e){let{children:t,hidden:r,className:n}=e;return(0,v.jsx)("div",{role:"tabpanel",className:(0,a.Z)(N.tabItem,n),hidden:r,children:t})}var y=r(4179),k=r(8492);function w(e){const t=/(\bhttps?:\/\/[^\s]+)/g,r=/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;return e.split(/(\bhttps?:\/\/[^\s]+|\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b)/g).map(((e,n)=>t.test(e)?(0,v.jsx)("a",{href:e,target:"_blank",rel:"noopener noreferrer",children:e},n):r.test(e)?(0,v.jsx)("a",{href:`mailto:${e}`,children:e},n):e))}function A(e){let{srNo:t,serviceName:r,description:n,input:a=null,output:s=null,endpointInfo:{cls:l="info",method:i="GET",basepath:o=""}={}}=e;return(0,v.jsxs)("tr",{children:[(0,v.jsxs)("td",{children:[t,"."]}),(0,v.jsx)("td",{children:r}),(0,v.jsx)("td",{children:(u=n,u.split("\n").map(((e,t)=>(0,v.jsx)("span",{style:{display:"block"},children:w(e)},t))))}),o&&(0,v.jsx)("td",{children:(0,v.jsxs)(I,{children:[(0,v.jsx)(S,{value:"Input",label:"Input",default:!0,children:a&&(0,v.jsx)(y.Z,{className:"templateIO",children:a})}),(0,v.jsx)(S,{value:"Output",label:"Output",children:s&&(0,v.jsx)(y.Z,{className:"templateIO",children:s})}),(0,v.jsxs)(S,{value:"Path",label:"Path",children:[(0,v.jsx)(k.Ct,{cls:l,method:i}),(0,v.jsxs)(y.Z,{className:"templateIO",children:["/",o]})]})]})})]});var u}function E(e){let{description:t,services:r}=e;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("p",{children:t}),(0,v.jsxs)("table",{children:[(0,v.jsx)("thead",{children:(0,v.jsxs)("tr",{children:[(0,v.jsx)("th",{children:"Sr. No"}),(0,v.jsx)("th",{children:"Service Name"}),(0,v.jsx)("th",{children:"Description"}),r[0].endpointInfo&&(0,v.jsx)("th",{children:"Details"})]})}),(0,v.jsx)("tbody",{children:r.map(((e,t)=>(0,v.jsx)(A,{srNo:t+1,...e},t)))})]})]})}}}]);