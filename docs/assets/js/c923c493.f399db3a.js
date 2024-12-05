"use strict";(self.webpackChunkuser_documentation=self.webpackChunkuser_documentation||[]).push([[5516],{5284:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=r(5893),s=r(1151),a=r(5265);const o='<?xml version="1.0" encoding="utf-8"?>\n<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\n    <soap:Body>\n\t<NumberToWords xmlns="http://www.dataaccess.com/webservicesserver/">\n\t    <ubiNum>5280.2</ubiNum>\n\t</NumberToWords>\n    </soap:Body>\n</soap:Envelope>',i={description:"Trigger REST and Connector SOAP",services:[{serviceName:"consumeSoap",description:"Trigger is rest with post action.xml body is passed as payload input. number conversion soap api is called with soap v=connector with the input as is the body to the request as input. Get the output and convert to json and send as response.",input:o,output:JSON.stringify({Body:{NumberToWordsResponse:{NumberToWordsResult:"five thousand two hundred and eighty"}}},null,2),endpointInfo:{cls:"success",method:"POST",basepath:"consumeSoap"}},{serviceName:"consumeSoapUnHappyPath",description:"Trigger is rest with post action. blank body is passed as payload input. number conversion soap api is called with soap v=connector with the input as is the body to the request as input. Get the output and convert to json and send as response. This will throw error as no body passed. 500 status caode",input:o,output:JSON.stringify({Message:"Error occurred while calling soap. Reason: com.flow.core.processor.soap.INTSOAPClient--Error occurred while calling soap service. Reason: javax.xml.transform.TransformerException: com.sun.org.apache.xml.internal.utils.WrappedRuntimeException: The content of elements must consist of well-formed character data or markup."},null,2),endpointInfo:{cls:"success",method:"POST",basepath:"consumeSoapUnHappyPath"}},{serviceName:"soapExceptionHandling",description:'This case involves handling of error data if there is any error while executing the soap step. In this example,we are providing incorrect payload, which the soap service will be giving error of incorrect body. This error will be stored in "ERROR" object in the pipeline. Then we have step exception block where we have a step whcih will throw business exception, with message and code.',output:JSON.stringify({errorCode:404,status:"Failed",errorDescription:"com.flow.core.processor.soap.INTSOAPClient--Error occurred while calling soap service. Reason: javax.xml.transform.TransformerException: com.sun.org.apache.xml.internal.utils.WrappedRuntimeException: The content of elements must consist of well-formed character data or markup."},null,2),endpointInfo:{basepath:"soapExceptionHandling"}},{serviceName:"soapWithTimeout",description:"setting timeout. if connection take longer that set time, gives timeout error.",input:o,output:JSON.stringify({errorCode:500,status:"Failed",errorDescription:"com.flow.core.processor.soap.INTSOAPClient--Read timed out"},null,2),endpointInfo:{cls:"success",method:"POST",basepath:"soapWithTimeOut"}},{serviceName:"soapWithoutTimeout",description:"setting timeout. will not give error since not timeout occurs",input:o,output:JSON.stringify({Body:{NumberToWordsResponse:{NumberToWordsResult:"five thousand two hundred and eighty"}}},null,2),endpointInfo:{cls:"success",method:"POST",basepath:"soapWithoutTimeout"}}]},l={},u=void 0,c={id:"Quickintegrate Templates/TRREST_CNSOAP",title:"TRREST_CNSOAP",description:"",source:"@site/docs/Quickintegrate Templates/TRREST_CNSOAP.md",sourceDirName:"Quickintegrate Templates",slug:"/Quickintegrate Templates/TRREST_CNSOAP",permalink:"/Quickintegrate Templates/TRREST_CNSOAP",draft:!1,unlisted:!1,editUrl:"https://github.com/quickintegrate/docs/tree/main/Quickintegrate Templates/TRREST_CNSOAP.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TRREST_CNREST",permalink:"/Quickintegrate Templates/TRREST_CNREST"},next:{title:"TRREST_PAYLOADTRANS",permalink:"/Quickintegrate Templates/TRREST_PAYLOADTRANS"}},d={},p=[];function h(e){return(0,n.jsx)(a.Z,{...i})}function m(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h()}},5265:(e,t,r)=>{r.d(t,{Z:()=>k});var n=r(7294),s=r(6010),a=r(2466),o=r(6550),i=r(469),l=r(1980),u=r(7392),c=r(12);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const s=(0,o.k6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._X)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,a=p(e),[o,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[u,d]=m({queryString:r,groupId:s}),[b,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,c.Nk)(r);return[s,(0,n.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:s}),v=(()=>{const e=u??b;return h({value:e,tabValues:a})?e:null})();(0,i.Z)((()=>{v&&l(v)}),[v]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,a]),tabValues:a}}var f=r(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(5893);function T(e){let{className:t,block:r,selectedValue:n,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.o5)(),c=e=>{const t=e.currentTarget,r=l.indexOf(t),s=i[r].value;s!==n&&(u(t),o(s))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...a,className:(0,s.Z)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function x(e){let{lazy:t,children:r,selectedValue:s}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function w(e){const t=b(e);return(0,g.jsxs)("div",{className:(0,s.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(T,{...e,...t}),(0,g.jsx)(x,{...e,...t})]})}function N(e){const t=(0,f.Z)();return(0,g.jsx)(w,{...e,children:d(e.children)},String(t))}const S={tabItem:"tabItem_Ymn6"};function y(e){let{children:t,hidden:r,className:n}=e;return(0,g.jsx)("div",{role:"tabpanel",className:(0,s.Z)(S.tabItem,n),hidden:r,children:t})}var j=r(4179);function R(e){const t=/(\bhttps?:\/\/[^\s]+)/g,r=/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;return e.split(/(\bhttps?:\/\/[^\s]+|\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b)/g).map(((e,n)=>t.test(e)?(0,g.jsx)("a",{href:e,target:"_blank",rel:"noopener noreferrer",children:e},n):r.test(e)?(0,g.jsx)("a",{href:`mailto:${e}`,children:e},n):e))}function E(e){let{srNo:t,serviceName:r,description:n,input:s=null,output:a=null,endpointInfo:{cls:o="info",method:i="GET",basepath:l=""}={}}=e;return(0,g.jsxs)("tr",{children:[(0,g.jsxs)("td",{children:[t,"."]}),(0,g.jsx)("td",{children:r}),(0,g.jsx)("td",{children:(u=n,u.split("\n").map(((e,t)=>(0,g.jsx)("span",{style:{display:"block"},children:R(e)},t))))}),l&&(0,g.jsx)("td",{children:(0,g.jsxs)(N,{children:[(0,g.jsx)(y,{value:"Input",label:"Input",default:!0,children:s&&(0,g.jsx)(j.Z,{className:"templateIO",children:s})}),(0,g.jsx)(y,{value:"Output",label:"Output",children:a&&(0,g.jsx)(j.Z,{className:"templateIO",children:a})}),(0,g.jsxs)(y,{value:"Path",label:"Path",children:[(0,g.jsx)("span",{className:`badge badge--${o} margin-bottom--sm`,children:i}),(0,g.jsxs)(j.Z,{className:"templateIO",children:["/",l]})]})]})})]});var u}function k(e){let{description:t,services:r}=e;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("p",{children:t}),(0,g.jsxs)("table",{children:[(0,g.jsx)("thead",{children:(0,g.jsxs)("tr",{children:[(0,g.jsx)("th",{children:"Sr. No"}),(0,g.jsx)("th",{children:"Service Name"}),(0,g.jsx)("th",{children:"Description"}),r[0].endpointInfo&&(0,g.jsx)("th",{children:"Details"})]})}),(0,g.jsx)("tbody",{children:r.map(((e,t)=>(0,g.jsx)(E,{srNo:t+1,...e},t)))})]})]})}}}]);