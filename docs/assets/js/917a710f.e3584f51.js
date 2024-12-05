"use strict";(self.webpackChunkuser_documentation=self.webpackChunkuser_documentation||[]).push([[3434],{36:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=n(5893),s=n(1151),r=n(5265),o=n(2420);const i={},l=void 0,c={id:"Quickintegrate Templates/TRREST_TRANSFORMSAMPLE",title:"TRREST_TRANSFORMSAMPLE",description:"",source:"@site/docs/Quickintegrate Templates/TRREST_TRANSFORMSAMPLE.md",sourceDirName:"Quickintegrate Templates",slug:"/Quickintegrate Templates/TRREST_TRANSFORMSAMPLE",permalink:"/Quickintegrate Templates/TRREST_TRANSFORMSAMPLE",draft:!1,unlisted:!1,editUrl:"https://github.com/quickintegrate/docs/tree/main/Quickintegrate Templates/TRREST_TRANSFORMSAMPLE.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TRREST_PAYLOADTRANS",permalink:"/Quickintegrate Templates/TRREST_PAYLOADTRANS"},next:{title:"TRREST_TRANS_URLVALIDATOR",permalink:"/Quickintegrate Templates/TRREST_TRANS_URLVALIDATOR"}},u={},d=[];function p(e){return(0,a.jsx)(r.Z,{...o.UP})}function m(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p()}},8492:(e,t,n)=>{n.d(t,{Ct:()=>r,Ee:()=>o,nk:()=>i});var a=n(4996),s=n(5893);function r(e){let{cls:t,method:n}=e;return(0,s.jsx)("span",{className:`badge badge--${t} margin-bottom--sm`,children:n})}function o(e){let{cls:t,src:n,alt:r}=e;return(0,s.jsx)("div",{className:"default-container",children:(0,s.jsx)("img",{className:t,src:(0,a.Z)(n),alt:r})})}function i(e){let{cls:t="default-container",src:n,type:r}=e;return(0,s.jsx)("div",{className:t,children:(0,s.jsxs)("video",{controls:!0,children:[(0,s.jsx)("source",{src:(0,a.Z)(n),type:r}),"Your browser does not support the video tag."]})})}},5265:(e,t,n)=>{n.d(t,{Z:()=>C});var a=n(7294),s=n(6010),r=n(2466),o=n(6550),i=n(469),l=n(1980),c=n(7392),u=n(12);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:s}}=e;return{value:t,label:n,attributes:a,default:s}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const s=(0,o.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(s.location.search);t.set(r,e),s.replace({...s.location,search:t.toString()})}),[r,s])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,r=p(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[c,d]=h({queryString:n,groupId:s}),[f,S]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,r]=(0,u.Nk)(n);return[s,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:s}),b=(()=>{const e=c??f;return m({value:e,tabValues:r})?e:null})();(0,i.Z)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),S(e)}),[d,S,r]),tabValues:r}}var S=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(5893);function T(e){let{className:t,block:n,selectedValue:a,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),s=i[n].value;s!==a&&(c(t),o(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...r,className:(0,s.Z)("tabs__item",b.tabItem,r?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:s}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function O(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,s.Z)("tabs-container",b.tabList),children:[(0,v.jsx)(T,{...e,...t}),(0,v.jsx)(y,{...e,...t})]})}function N(e){const t=(0,S.Z)();return(0,v.jsx)(O,{...e,children:d(e.children)},String(t))}const g={tabItem:"tabItem_Ymn6"};function J(e){let{children:t,hidden:n,className:a}=e;return(0,v.jsx)("div",{role:"tabpanel",className:(0,s.Z)(g.tabItem,a),hidden:n,children:t})}var j=n(9286),x=n(8492);function I(e){const t=/(\bhttps?:\/\/[^\s]+)/g,n=/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;return e.split(/(\bhttps?:\/\/[^\s]+|\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b)/g).map(((e,a)=>t.test(e)?(0,v.jsx)("a",{href:e,target:"_blank",rel:"noopener noreferrer",children:e},a):n.test(e)?(0,v.jsx)("a",{href:`mailto:${e}`,children:e},a):e))}function A(e){let{srNo:t,serviceName:n,description:a,input:s=null,output:r=null,endpointInfo:{cls:o="info",method:i="GET",basepath:l=""}={}}=e;return(0,v.jsxs)("tr",{children:[(0,v.jsxs)("td",{children:[t,"."]}),(0,v.jsx)("td",{children:n}),(0,v.jsx)("td",{children:(c=a,c.split("\n").map(((e,t)=>(0,v.jsx)("span",{style:{display:"block"},children:I(e)},t))))}),l&&(0,v.jsx)("td",{children:(0,v.jsxs)(N,{children:[(0,v.jsx)(J,{value:"Input",label:"Input",default:!0,children:s&&(0,v.jsx)(j.Z,{className:"templateIO",children:s})}),(0,v.jsx)(J,{value:"Output",label:"Output",children:r&&(0,v.jsx)(j.Z,{className:"templateIO",children:r})}),(0,v.jsxs)(J,{value:"Path",label:"Path",children:[(0,v.jsx)(x.Ct,{cls:o,method:i}),(0,v.jsxs)(j.Z,{className:"templateIO",children:["/",l]})]})]})})]});var c}function C(e){let{description:t,services:n}=e;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("p",{children:t}),(0,v.jsxs)("table",{children:[(0,v.jsx)("thead",{children:(0,v.jsxs)("tr",{children:[(0,v.jsx)("th",{children:"Sr. No"}),(0,v.jsx)("th",{children:"Service Name"}),(0,v.jsx)("th",{children:"Description"}),n[0].endpointInfo&&(0,v.jsx)("th",{children:"Details"})]})}),(0,v.jsx)("tbody",{children:n.map(((e,t)=>(0,v.jsx)(A,{srNo:t+1,...e},t)))})]})]})}},2420:(e,t,n)=>{n.d(t,{C8:()=>r,SY:()=>c,UP:()=>d,Y3:()=>a,_C:()=>l,je:()=>u});const a="name,id,city,country\nJohn,111,Pune,India",s=a+"\nWill,112,Pune,India",r="<ArrayList>\n    <item>\n\t<name>John</name>\n\t<id>111</id>\n\t<city>Pune</city>\n\t<country>India</country>\n    </item>\n</ArrayList>\n",o="<ArrayList>\n    <item>\n\t<name>John</name>\n\t<id>111</id>\n\t<city>Pune</city>\n\t<country>India</country>\n    </item>\n    <item>\n\t<name>Will</name>\n\t<id>112</id>\n\t<city>Pune</city>\n\t<country>India</country>\n    </item>\n</ArrayList>\n",i=[{name:"John",id:111,city:"Pune",country:"India"}],l=[...i,{name:"Will",id:112,city:"Pune",country:"India"}],c="ST*       850*0001\nBEG*00*SA*000000006637770**20230818*0001307878",u={status:"success"},d={description:"Trigger REST and Transformer TRANS samples",services:[{serviceName:"CSVtoCSV",description:"Gets CSV data from payload and transform returns data as is.",input:s,output:s,endpointInfo:{cls:"success",method:"POST",basepath:"csvToCsv"}},{serviceName:"CSVtoXML",description:"Validates payload data to be in valid CSV format using XML stylesheet. Converts CSV data from payload to XML format and returns response as is.",input:a,output:["<?xml version='1.1' encoding='UTF-8'?>\n",r.replace(/ArrayList/g,"root")],endpointInfo:{cls:"success",method:"POST",basepath:"csvToXml"}},{serviceName:"CSVtoOBJ",description:"Converts CSV data from payload to Java Object format and returns array of object in response in which each object has a key name.",input:s,output:JSON.stringify([{name:"John"},{name:"Will"}],null,2),endpointInfo:{cls:"success",method:"POST",basepath:"csvToObj"}},{serviceName:"CSVtoJSON",description:"Converts CSV data from payload to JSON format and returns response as is.",input:a,output:JSON.stringify(i,null,2),endpointInfo:{cls:"success",method:"POST",basepath:"csvToJson"}},{serviceName:"XMLtoXML",description:"Gets XML data from payload and transform returns data as is.",input:r,output:["<?xml version='1.1' encoding='UTF-8'?>\n",r.replace(/ArrayList/g,"root")],endpointInfo:{cls:"success",method:"POST",basepath:"xmlToXml"}},{serviceName:"XMLtoCSV",description:"Converts XML data from payload to CSV format and returns response as is.",input:r,output:a,endpointInfo:{cls:"success",method:"POST",basepath:"xmlToCsv"}},{serviceName:"XMLtoOBJ",description:"Converts XML data from payload to Java Object format and returns object map in response.",input:r,output:JSON.stringify({ObjectMap:"{item={name=John, id=111, city=Pune, country=India}}"},null,2),endpointInfo:{cls:"success",method:"POST",basepath:"xmlToObj"}},{serviceName:"XMLtoJSON",description:"Validates payload data to be in valid XML format using XML stylesheet. Converts XML data from payload to JSON format and returns response as is.",input:"<details>\n    <name>John</name>\n    <id>111</id>\n    <city>Pune</city>\n   <country>India</country>\n</details>\n",output:JSON.stringify(i,null,2),endpointInfo:{cls:"success",method:"POST",basepath:"xmlToJson"}},{serviceName:"JSONtoXML",description:"Converts JSON data from payload to XML format and returns response as is.",input:JSON.stringify(l,null,2),output:["<?xml version='1.1' encoding='UTF-8'?>\n",o.replace(/ArrayList/g,"root")],endpointInfo:{cls:"success",method:"POST",basepath:"jsonToXml"}},{serviceName:"JSONtoCSV",description:"Converts JSON data from payload to CSV format and returns response as is.",input:JSON.stringify(i,null,2),output:a,endpointInfo:{cls:"success",method:"POST",basepath:"jsonToCsv"}},{serviceName:"JSONtoOBJ",description:"Validates payload data to be in valid JSON format using JSON schema. Converts JSON data from payload to Java Object format and returns object with key name in response.",input:JSON.stringify(i,null,2),output:JSON.stringify({name:"John"},null,2),endpointInfo:{cls:"success",method:"POST",basepath:"jsonToObj"}},{serviceName:"JSONtoJSON",description:"Gets JSON data from payload and transform returns data as is.",input:JSON.stringify(l,null,2),output:JSON.stringify(l,null,2),endpointInfo:{cls:"success",method:"POST",basepath:"jsonToJson"}},{serviceName:"OBJtoXML",description:"Converts JSON data from payload to Java Object and then the previous Java Object to XML format and returns response as is.",input:JSON.stringify(l,null,2),output:["<?xml version='1.1' encoding='UTF-8'?>\n",o.replace(/ArrayList/g,"root")],endpointInfo:{cls:"success",method:"POST",basepath:"objToXml"}},{serviceName:"OBJtoCSV",description:"Converts JSON data from payload to Java Object and then the previous Java Object to CSV format and returns response as is.",input:JSON.stringify(l,null,2),output:s,endpointInfo:{cls:"success",method:"POST",basepath:"objToCsv"}},{serviceName:"OBJtoOBJ",description:"Reads data from database which returns a java object and transform returns data as is.",input:JSON.stringify(l,null,2),output:JSON.stringify({name:"[John]"},null,2),endpointInfo:{cls:"success",method:"POST",basepath:"objToObj"}},{serviceName:"OBJtoJSON",description:"Converts JSON data from payload to Java Object and then the previous Java Object to JSON format. Returns object which contains id (number), salary (double), isRemoteEmployee (boolean), name (string), original_JSON (json).",input:JSON.stringify({name:"John",id:111,salary:"50000",isRemoteEmployee:"true"},null,2),output:JSON.stringify({name:"John",id:111,salary:5e4,isRemoteEmployee:!0,original_JSON:{name:"John",id:111,salary:"50000",isRemoteEmployee:"true"}},null,2),endpointInfo:{cls:"success",method:"POST",basepath:"objToJson"}},{serviceName:"FLATtoXML",description:"Converts TEXT data from payload to XML format and returns response as is.",input:c,output:"<?xml version='1.1' encoding='UTF-8'?>\n<root>\n    <record0>\n\t<col0>ST*       850*0001</col0>\n    </record0>\n    <record1>\n\t<col0>BEG*00*SA*000000006637770**20230818*0001307878</col0>\n    </record1>\n</root>",endpointInfo:{cls:"success",method:"POST",basepath:"flatToXml"}},{serviceName:"FLATtoCSV",description:"Converts TEXT data from payload to CSV format and returns response as is.",input:c,output:'col0\n"ST*       850*0001"\n"BEG*00*SA*000000006637770**20230818*0001307878"',endpointInfo:{cls:"success",method:"POST",basepath:"flatToCsv"}},{serviceName:"FLATtoOBJ",description:"Converts TEXT data from payload to Java Object format and returns data in JSON format.",input:c,output:JSON.stringify([{col0:"ST*       850*0001"},{col0:"BEG*00*SA*000000006637770**20230818*0001307878"}],null,2),endpointInfo:{cls:"success",method:"POST",basepath:"flatToObj"}},{serviceName:"FLATtoJSON",description:"Converts TEXT data from payload to JSON format and returns response as is.",input:c,output:JSON.stringify([{col0:"ST*       850*0001"},{col0:"BEG*00*SA*000000006637770**20230818*0001307878"}],null,2),endpointInfo:{cls:"success",method:"POST",basepath:"flatToJson"}},{serviceName:"FLATtoJSONwithMultipleRanges",description:"Converts TEXT data from payload to JSON format with multiple ranges provided which reads line from start of range to end and creates values accordingly.",input:c,output:JSON.stringify([{col0:"ST*       ",col1:"850*0001"},{col0:"BEG*00*SA*",col1:"000000006637770**20230818*0001307878"}],null,2),endpointInfo:{cls:"success",method:"POST",basepath:"flatToJsonWithMultipleRanges"}}]}}}]);