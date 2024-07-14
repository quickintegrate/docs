"use strict";(self.webpackChunkuser_documentation=self.webpackChunkuser_documentation||[]).push([[1636],{494:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=r(5893),n=r(1151),s=r(5265);const l={description:"This project covers all test cases for REST trigger and URLVALIDATOR transformer.",services:[{serviceName:"validateUrl",description:"Required request param must be provided which are validated by validator.",output:JSON.stringify({Status:"Activated"},null,2),endpointInfo:{basepath:"validateUrl?status=Activated"}},{serviceName:"validateUrl",description:"Required request param if not provided the validator throws error.",output:JSON.stringify({errorCode:500,status:"Failed",errorDescription:"Missing request params"},null,2),endpointInfo:{basepath:"validateUrl"}}]},i={},u=void 0,o={id:"Quickintegrate Templates/TRREST_TRANS_URLVALIDATOR",title:"TRREST_TRANS_URLVALIDATOR",description:"",source:"@site/docs/Quickintegrate Templates/TRREST_TRANS_URLVALIDATOR.md",sourceDirName:"Quickintegrate Templates",slug:"/Quickintegrate Templates/TRREST_TRANS_URLVALIDATOR",permalink:"/Quickintegrate Templates/TRREST_TRANS_URLVALIDATOR",draft:!1,unlisted:!1,editUrl:"https://github.com/quickintegrate/docs/tree/main/Quickintegrate Templates/TRREST_TRANS_URLVALIDATOR.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TRREST_TRANSFORMSAMPLE",permalink:"/Quickintegrate Templates/TRREST_TRANSFORMSAMPLE"},next:{title:"TRSCH",permalink:"/Quickintegrate Templates/TRSCH"}},c={},d=[];function p(e){return(0,a.jsx)(s.Z,{...l})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p()}},8492:(e,t,r)=>{r.d(t,{Ct:()=>s,Ee:()=>l,nk:()=>i});var a=r(4996),n=r(5893);function s(e){let{cls:t,method:r}=e;return(0,n.jsx)("span",{className:`badge badge--${t} margin-bottom--sm`,children:r})}function l(e){let{cls:t,src:r,alt:s}=e;return(0,n.jsx)("div",{className:"default-container",children:(0,n.jsx)("img",{className:t,src:(0,a.Z)(r),alt:s})})}function i(e){let{cls:t="default-container",src:r,type:s}=e;return(0,n.jsx)("div",{className:t,children:(0,n.jsxs)("video",{controls:!0,children:[(0,n.jsx)("source",{src:(0,a.Z)(r),type:s}),"Your browser does not support the video tag."]})})}},5265:(e,t,r)=>{r.d(t,{Z:()=>_});var a=r(7294),n=r(6010),s=r(2466),l=r(6550),i=r(469),u=r(1980),o=r(7392),c=r(12);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}(r);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.k6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,s=p(e),[l,u]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[o,d]=m({queryString:r,groupId:n}),[b,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:n}),v=(()=>{const e=o??b;return h({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{v&&u(v)}),[v]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=r(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var T=r(5893);function g(e){let{className:t,block:r,selectedValue:a,selectValue:l,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.o5)(),c=e=>{const t=e.currentTarget,r=u.indexOf(t),n=i[r].value;n!==a&&(o(t),l(n))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return(0,T.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,T.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>u.push(e),onKeyDown:d,onClick:c,...s,className:(0,n.Z)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":a===t}),children:r??t},t)}))})}function x(e){let{lazy:t,children:r,selectedValue:n}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,T.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function j(e){const t=b(e);return(0,T.jsxs)("div",{className:(0,n.Z)("tabs-container",v.tabList),children:[(0,T.jsx)(g,{...e,...t}),(0,T.jsx)(x,{...e,...t})]})}function R(e){const t=(0,f.Z)();return(0,T.jsx)(j,{...e,children:d(e.children)},String(t))}const S={tabItem:"tabItem_Ymn6"};function A(e){let{children:t,hidden:r,className:a}=e;return(0,T.jsx)("div",{role:"tabpanel",className:(0,n.Z)(S.tabItem,a),hidden:r,children:t})}var N=r(4179),I=r(8492);function k(e){const t=/(\bhttps?:\/\/[^\s]+)/g,r=/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;return e.split(/(\bhttps?:\/\/[^\s]+|\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b)/g).map(((e,a)=>t.test(e)?(0,T.jsx)("a",{href:e,target:"_blank",rel:"noopener noreferrer",children:e},a):r.test(e)?(0,T.jsx)("a",{href:`mailto:${e}`,children:e},a):e))}function y(e){let{srNo:t,serviceName:r,description:a,input:n=null,output:s=null,endpointInfo:{cls:l="info",method:i="GET",basepath:u=""}={}}=e;return(0,T.jsxs)("tr",{children:[(0,T.jsxs)("td",{children:[t,"."]}),(0,T.jsx)("td",{children:r}),(0,T.jsx)("td",{children:(o=a,o.split("\n").map(((e,t)=>(0,T.jsx)("span",{style:{display:"block"},children:k(e)},t))))}),u&&(0,T.jsx)("td",{children:(0,T.jsxs)(R,{children:[(0,T.jsx)(A,{value:"Input",label:"Input",default:!0,children:n&&(0,T.jsx)(N.Z,{className:"templateIO",children:n})}),(0,T.jsx)(A,{value:"Output",label:"Output",children:s&&(0,T.jsx)(N.Z,{className:"templateIO",children:s})}),(0,T.jsxs)(A,{value:"Path",label:"Path",children:[(0,T.jsx)(I.Ct,{cls:l,method:i}),(0,T.jsxs)(N.Z,{className:"templateIO",children:["/",u]})]})]})})]});var o}function _(e){let{description:t,services:r}=e;return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)("p",{children:t}),(0,T.jsxs)("table",{children:[(0,T.jsx)("thead",{children:(0,T.jsxs)("tr",{children:[(0,T.jsx)("th",{children:"Sr. No"}),(0,T.jsx)("th",{children:"Service Name"}),(0,T.jsx)("th",{children:"Description"}),r[0].endpointInfo&&(0,T.jsx)("th",{children:"Details"})]})}),(0,T.jsx)("tbody",{children:r.map(((e,t)=>(0,T.jsx)(y,{srNo:t+1,...e},t)))})]})]})}}}]);