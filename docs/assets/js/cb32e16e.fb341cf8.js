"use strict";(self.webpackChunkuser_documentation=self.webpackChunkuser_documentation||[]).push([[9368],{3364:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>S,contentTitle:()=>m,default:()=>f,frontMatter:()=>d,metadata:()=>h,toc:()=>N});var s=n(5893),a=n(1151),o=n(5265),i=n(8897);const r={ID:1,Name:"Minal",LastName:"Deshpande",FirstName:"Minal",phone:"40.32.2555",Address1:"Pune",Address2:null,city:"Pune",state:null,pincode:"411007",country:"India",salesRepEmployeeNumber:1702,creditLimit:1451.25},u="<Customer>\n    <ID>1</ID>\n    <Name>Minal</Name>\n    <LastName>Deshpande</LastName>\n    <FirstName>Minal</FirstName>\n    <phone>40.32.2555</phone>\n    <Address1>Pune</Address1>\n    <Address2/>\n    <city>Pune</city>\n    <state/>\n    <pincode>411007</pincode>\n    <country>India</country>\n    <salesRepEmployeeNumber>1702</salesRepEmployeeNumber>\n    <creditLimit>1451.25</creditLimit>\n</Customer>",l="ID,Name,LastName,FirstName,phone,Address1,Address2,city,state,pincode,country,salesRepEmployeeNumber,creditLimit\n1,Minal,Deshpande,Minal,40.32.2555,Pune,,Pune,,411007,India,1702,1451.25",c=[{Id:100,Name:"Rajat Kulkarni",City:"Boston",Country:"USA"},{Id:103,Name:"Atelier graphique",City:"Amravati",Country:"France"},{Id:112,Name:"Signal Gift Stores",City:"Las Vegas",Country:"USA"},{Id:114,Name:"Australian Collectors, Co.",City:"Melbourne",Country:"Australia"},{Id:119,Name:"La Rochelle Gifts",City:"Nantes",Country:"France"}],p={description:"This project covers all the test cases of REST trigger and APIRESPONSE transformer.",services:[{serviceName:"getSingleRecord",description:"getSingleRecord having GEN mapping. Create rest trigger to get customer data from DB and map the single record with GEN. Target keys will change",output:JSON.stringify(c[0],null,2),endpointInfo:{basepath:"getSingleRecord"}},{serviceName:"getStatusCodeGlobal",description:"get status code from global variables and content-type text/plain",output:JSON.stringify({Customer:c[0]},null,0).replace("Name","customerName").replace("Id","customerNumber").replace("City","city").replace("Country","country"),endpointInfo:{basepath:"getStatusCodeGlobal"}},{serviceName:"getMultipleRecord",description:"getMultipleRecord having AR mapping. Create rest trigger to get customers data from DB and map the multiple record with GEN. Target keys will change",output:JSON.stringify({Customers:c},null,2),endpointInfo:{basepath:"getMultipleRecord"}},{serviceName:"getArrayResponse",description:"get array in response and content-type application/json",output:JSON.stringify(c,null,2),endpointInfo:{basepath:"getArrayResponse"}},{serviceName:"getArrayResponseTxt",description:"get array in response and content-type text/plain and status-code 202",output:JSON.stringify(c,null,2),endpointInfo:{basepath:"getArrayResponseTxt"}},{serviceName:"getFirstObject",description:"Get first record from array using CN",output:JSON.stringify(c[0],null,2),endpointInfo:{basepath:"getFirstObject"}},{serviceName:"postCNOBJ",description:"Usage of Transformer where both input and output are JSON in REST POST request (ouput request_payload)  TRansform in Java object. IN APIResponse using CN send data back as with content-type as application/json",input:JSON.stringify(r,null,2),output:l,endpointInfo:{cls:"success",method:"POST",basepath:"postCNOBJ"}},{serviceName:"postTransUtils",description:"Use of few inline functions:\n 1. Use `Strings.concat` method to concatenate 2 or more strings with an underscore `-` between them and `Utils.constant` to get a constant value.\n 2. Use `Strings.toUppercase` method to convert string to uppercase.\n 3. Use `Maths.add` method for addition of static and dynamic values with datatype `Number`.\n 4. Use `Strings.isAlphanumeric` to check if given text contains only letters and numbers.\n 5. Use `Maths.add` method for addition of static and dynamic values with datatype `Double`.\n 6. Use `Date.DateTime` method to get the current date and time.",input:JSON.stringify({name:"John Doe",num1:12,num2:34,num3:50,price:133,text:"This sentence contains alphanumeric characters 00"},null,2),output:JSON.stringify({"Constant Concat String":"Welcome to Atd Services-John Doe","Uppercase Name":"JOHN DOE",Total:96,isAlphanumeric:!0,"Double Val":233,Date:(0,i.Z)()},null,2),endpointInfo:{cls:"success",method:"POST",basepath:"postTransUtils"}},{serviceName:"postJSONgetJSON",description:"input  is json APIRESPONSE component Content-Type-> application/json use CN with request_payload",input:JSON.stringify(r,null,2),output:JSON.stringify(r,null,2),endpointInfo:{cls:"success",method:"POST",basepath:"postJSONgetJSON"}},{serviceName:"postJSONgetXML",description:"input  is json APIRESPONSE component Content-Type-> application/xml use CN with request_payload",input:JSON.stringify(r,null,2),output:u,endpointInfo:{cls:"success",method:"POST",basepath:"postJSONgetXML"}},{serviceName:"postJSONgetCSV",description:"input  is json APIRESPONSE component Content-Type-> text/csv use CN with request_payload",input:JSON.stringify(r,null,2),output:l,endpointInfo:{cls:"success",method:"POST",basepath:"postJSONgetCSV"}},{serviceName:"postJsonArrGetCsv",description:"input  is json APIRESPONSE component Content-Type-> text/csv use CN with request_payload",input:JSON.stringify([r],null,2),output:l,endpointInfo:{cls:"success",method:"POST",basepath:"postJsonArrGetCsv"}},{serviceName:"postJSONgetTXT",description:"input  is json APIRESPONSE component Content-Type-> text/plain use CN with request_payload",input:JSON.stringify(r,null,2),output:l,endpointInfo:{cls:"success",method:"POST",basepath:"postJSONgetTXT"}},{serviceName:"postXMLgetJSON",description:"input  is json APIRESPONSE component Content-Type-> application/json use CN with request_payload",input:u,output:JSON.stringify(r,null,2),endpointInfo:{cls:"success",method:"POST",basepath:"postXMLgetJSON"}},{serviceName:"postXMLgetXML",description:"input  is json APIRESPONSE component Content-Type-> application/xml use CN with request_payload",input:u,output:u,endpointInfo:{cls:"success",method:"POST",basepath:"postXMLgetXML"}},{serviceName:"postXMLgetCSV",description:"input  is json APIRESPONSE component Content-Type-> text/csv use CN with request_payload",input:u,output:l,endpointInfo:{cls:"success",method:"POST",basepath:"postXMLgetCSV"}},{serviceName:"postXMLgetTXT",description:"input  is json APIRESPONSE component Content-Type-> text/plain use CN with request_payload",input:u,output:l,endpointInfo:{cls:"success",method:"POST",basepath:"postXMLgetTXT"}},{serviceName:"postCSVgetJSON",description:"input  is json APIRESPONSE component Content-Type-> application/json use CN with request_payload",input:l,output:JSON.stringify(r,null,2),endpointInfo:{cls:"success",method:"POST",basepath:"postCSVgetJSON"}},{serviceName:"postCSVgetXML",description:"input  is json APIRESPONSE component Content-Type-> application/xml use CN with request_payload",input:l,output:u,endpointInfo:{cls:"success",method:"POST",basepath:"postCSVgetXML"}},{serviceName:"postCSVgetCSV",description:"input  is json APIRESPONSE component Content-Type-> text/csv use CN with request_payload",input:l,output:l,endpointInfo:{cls:"success",method:"POST",basepath:"postCSVgetCSV"}},{serviceName:"postCSVgetTXT",description:"input  is json APIRESPONSE component Content-Type-> text/plain use CN with request_payload",input:l,output:l,endpointInfo:{cls:"success",method:"POST",basepath:"postCSVgetTXT"}},{serviceName:"postTXTgetJSON",description:"input  is json APIRESPONSE component Content-Type-> application/json use CN with request_payload",input:l,output:JSON.stringify(r,null,2),endpointInfo:{cls:"success",method:"POST",basepath:"postTXTgetJSON"}},{serviceName:"postTXTgetXML",description:"input  is json APIRESPONSE component Content-Type-> application/xml use CN with request_payload",input:l,output:u,endpointInfo:{cls:"success",method:"POST",basepath:"postTXTgetXML"}},{serviceName:"postTXTgetCSV",description:"input  is json APIRESPONSE component Content-Type-> text/csv use CN with request_payload",input:l,output:l,endpointInfo:{cls:"success",method:"POST",basepath:"postTXTgetCSV"}},{serviceName:"postTXTgetTXT",description:"input  is json APIRESPONSE component Content-Type-> text/plain use CN with request_payload",input:l,output:l,endpointInfo:{cls:"success",method:"POST",basepath:"postTXTgetTXT"}}]},d={},m=void 0,h={id:"Quickintegrate Templates/TRREST_APIRESPONSE",title:"TRREST_APIRESPONSE",description:"",source:"@site/docs/Quickintegrate Templates/TRREST_APIRESPONSE.md",sourceDirName:"Quickintegrate Templates",slug:"/Quickintegrate Templates/TRREST_APIRESPONSE",permalink:"/Quickintegrate Templates/TRREST_APIRESPONSE",draft:!1,unlisted:!1,editUrl:"https://github.com/quickintegrate/docs/tree/main/Quickintegrate Templates/TRREST_APIRESPONSE.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TRREST_ALLCOMPONENTS",permalink:"/Quickintegrate Templates/TRREST_ALLCOMPONENTS"},next:{title:"TRREST_CMPARALLEL",permalink:"/Quickintegrate Templates/TRREST_CMPARALLEL"}},S={},N=[];function g(e){return(0,s.jsx)(o.Z,{...p})}function f(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g()}},5265:(e,t,n)=>{n.d(t,{Z:()=>R});var s=n(7294),a=n(6010),o=n(2466),i=n(6550),r=n(469),u=n(1980),l=n(7392),c=n(12);function p(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return p(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:a}}=e;return{value:t,label:n,attributes:s,default:a}}))}(n);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(o),(0,s.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function S(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[i,u]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:o}))),[l,p]=h({queryString:n,groupId:a}),[S,N]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,s.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),g=(()=>{const e=l??S;return m({value:e,tabValues:o})?e:null})();(0,r.Z)((()=>{g&&u(g)}),[g]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),p(e),N(e)}),[p,N,o]),tabValues:o}}var N=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(5893);function T(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:r}=e;const u=[],{blockElementScrollPositionUntilNextRender:l}=(0,o.o5)(),c=e=>{const t=e.currentTarget,n=u.indexOf(t),a=r[n].value;a!==s&&(l(t),i(a))},p=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:r.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>u.push(e),onKeyDown:p,onClick:c,...o,className:(0,a.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function b(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=S(e);return(0,f.jsxs)("div",{className:(0,a.Z)("tabs-container",g.tabList),children:[(0,f.jsx)(T,{...e,...t}),(0,f.jsx)(b,{...e,...t})]})}function O(e){const t=(0,N.Z)();return(0,f.jsx)(y,{...e,children:p(e.children)},String(t))}const v={tabItem:"tabItem_Ymn6"};function C(e){let{children:t,hidden:n,className:s}=e;return(0,f.jsx)("div",{role:"tabpanel",className:(0,a.Z)(v.tabItem,s),hidden:n,children:t})}var I=n(4179);function E(e){const t=/(\bhttps?:\/\/[^\s]+)/g,n=/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;return e.split(/(\bhttps?:\/\/[^\s]+|\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b)/g).map(((e,s)=>t.test(e)?(0,f.jsx)("a",{href:e,target:"_blank",rel:"noopener noreferrer",children:e},s):n.test(e)?(0,f.jsx)("a",{href:`mailto:${e}`,children:e},s):e))}function P(e){let{srNo:t,serviceName:n,description:s,input:a=null,output:o=null,endpointInfo:{cls:i="info",method:r="GET",basepath:u=""}={}}=e;return(0,f.jsxs)("tr",{children:[(0,f.jsxs)("td",{children:[t,"."]}),(0,f.jsx)("td",{children:n}),(0,f.jsx)("td",{children:(l=s,l.split("\n").map(((e,t)=>(0,f.jsx)("span",{style:{display:"block"},children:E(e)},t))))}),u&&(0,f.jsx)("td",{children:(0,f.jsxs)(O,{children:[(0,f.jsx)(C,{value:"Input",label:"Input",default:!0,children:a&&(0,f.jsx)(I.Z,{className:"templateIO",children:a})}),(0,f.jsx)(C,{value:"Output",label:"Output",children:o&&(0,f.jsx)(I.Z,{className:"templateIO",children:o})}),(0,f.jsxs)(C,{value:"Path",label:"Path",children:[(0,f.jsx)("span",{className:`badge badge--${i} margin-bottom--sm`,children:r}),(0,f.jsxs)(I.Z,{className:"templateIO",children:["/",u]})]})]})})]});var l}function R(e){let{description:t,services:n}=e;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("p",{children:t}),(0,f.jsxs)("table",{children:[(0,f.jsx)("thead",{children:(0,f.jsxs)("tr",{children:[(0,f.jsx)("th",{children:"Sr. No"}),(0,f.jsx)("th",{children:"Service Name"}),(0,f.jsx)("th",{children:"Description"}),n[0].endpointInfo&&(0,f.jsx)("th",{children:"Details"})]})}),(0,f.jsx)("tbody",{children:n.map(((e,t)=>(0,f.jsx)(P,{srNo:t+1,...e},t)))})]})]})}},8897:(e,t,n)=>{function s(){return(new Date).toISOString().replace("T"," ").replace(/\..+/g,"")}n.d(t,{Z:()=>s})}}]);