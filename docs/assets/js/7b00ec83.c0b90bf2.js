"use strict";(self.webpackChunkuser_documentation=self.webpackChunkuser_documentation||[]).push([[667],{4664:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var r=n(5893),a=n(1151),s=n(5265);const i={description:"This project covers all the test cases of REST trigger with usage of inline functions in response.",services:[{serviceName:"cnardy",description:"Use of custom array dynamic data type",input:JSON.stringify({mobile1:"8787879090",mobile2:"",mobile3:"8787876767"},null,2),output:JSON.stringify({Result:[{mobile:"mobile_home",mobileNumber:"8787879090"},{mobile:"mobile_office",mobileNumber:""},{mobile:"mobile_office_2",mobileNumber:"8787876767"}]},null,2),endpointInfo:{cls:"success",method:"POST",basepath:"cnardy"}},{serviceName:"DYFLCL",description:"Use of dynamic field column array dynamic data type (i.e. if one of the column value is null it will dynamically select another valid coilumn",input:JSON.stringify({mobile1:"7875364804",name:"Rajat",mobile2:"8783459234",mobile3:""},null,2),output:JSON.stringify({Result:"8783459234"},null,2),endpointInfo:{cls:"success",method:"POST",basepath:"dyflcl"}},{serviceName:"IFELSE",description:"Use of ifelse condition logic in transformation",input:JSON.stringify({status:"approved"},null,2),output:JSON.stringify({Result:" Customer is approved for further Transaction"},null,2),endpointInfo:{cls:"success",method:"POST",basepath:"ifelse"}},{serviceName:"NoMap",description:"Use to transform the input to empty string",output:JSON.stringify({result:""},null,2),endpointInfo:{basepath:"nomap"}},{serviceName:"Switch",description:"Use of switch case logic",input:JSON.stringify({status:"approved"},null,2),output:JSON.stringify({Result:" Customer is approved for further transaction"},null,2),endpointInfo:{cls:"success",method:"POST",basepath:"switch"}},{serviceName:"Date",description:"Use to get the current date and time.",output:JSON.stringify({DateNow:"2024-06-26",DateTime:"2024-06-26 02:38:07"},null,2),endpointInfo:{basepath:"date"}},{serviceName:"Strings",description:"Use of all string functions:\n 1. Use `concat` method to concatenate 2 or more strings with an underscore `_` between them.\n 2. Use `toUppercase` method to convert string to uppercase.\n 3. Use `countMatches` to find occurances of a word in given string.\n 4. Use `dasherize` to replace space with dash.\n 5. Use `isAlphanumeric` to check if given text contains only letters and numbers.\n 6. Use `toLowercase` method to convert string to lowercase.\n 7. Use `reverse` to reverse a string.\n 8. Use `capitalize` to capitalize a string.\n 9. Use `replaceAll` to replace old word with new word in a given string.",input:JSON.stringify({FirstName:"john",LastName:"Doe",OriginalText:"This sentence will change",oldWord:"will",newWord:"has",text:"can you count how many a are there in this sentence"},null,2),output:JSON.stringify({FullName:"john_Doe",UpperCaseName:"JOHN_DOE",Occurances:4,DasherizeText:"can-you-count-how-many-a-are-there-in-this-sentence",IsAlphanumeric:!0,LowerCaseName:"john_doe",Reverse:"eoD_nhoj",CapitalizedName:"John_Doe",ReplaceAll:"This sentence has change"},null,2),endpointInfo:{cls:"success",method:"POST",basepath:"strings"}},{serviceName:"Math",description:"Use `add` method for addition of static and dynamic values. Use `random` method:\n 1. without any length provided.\n 2. with length given 15",input:JSON.stringify({additional:20},null,2),output:JSON.stringify({Addition:50,Random:"XyYED",RandomWithLength:"Au1bIy3IQ4sjpKi"},null,2),endpointInfo:{cls:"success",method:"POST",basepath:"math"}}]},l={},o=void 0,u={id:"Quickintegrate Templates/UtilFunctions",title:"UtilFunctions",description:"",source:"@site/docs/Quickintegrate Templates/UtilFunctions.md",sourceDirName:"Quickintegrate Templates",slug:"/Quickintegrate Templates/UtilFunctions",permalink:"/Quickintegrate Templates/UtilFunctions",draft:!1,unlisted:!1,editUrl:"https://github.com/quickintegrate/docs/tree/main/Quickintegrate Templates/UtilFunctions.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"UTILITY_COMPONENT",permalink:"/Quickintegrate Templates/UTILITY_COMPONENT"},next:{title:"Mule",permalink:"/Migrate/mule-migration"}},c={},d=[];function p(e){return(0,r.jsx)(s.Z,{...i})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p()}},8492:(e,t,n)=>{n.d(t,{Ct:()=>s,Ee:()=>i,nk:()=>l});var r=n(4996),a=n(5893);function s(e){let{cls:t,method:n}=e;return(0,a.jsx)("span",{className:`badge badge--${t} margin-bottom--sm`,children:n})}function i(e){let{cls:t,src:n,alt:s}=e;return(0,a.jsx)("div",{className:"default-container",children:(0,a.jsx)("img",{className:t,src:(0,r.Z)(n),alt:s})})}function l(e){let{cls:t="default-container",src:n,type:s}=e;return(0,a.jsx)("div",{className:t,children:(0,a.jsxs)("video",{controls:!0,children:[(0,a.jsx)("source",{src:(0,r.Z)(n),type:s}),"Your browser does not support the video tag."]})})}},5265:(e,t,n)=>{n.d(t,{Z:()=>U});var r=n(7294),a=n(6010),s=n(2466),i=n(6550),l=n(469),o=n(1980),u=n(7392),c=n(12);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=p(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[u,d]=m({queryString:n,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),g=(()=>{const e=u??f;return h({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(5893);function y(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),a=l[n].value;a!==r&&(u(t),i(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function N(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function x(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,a.Z)("tabs-container",g.tabList),children:[(0,v.jsx)(y,{...e,...t}),(0,v.jsx)(N,{...e,...t})]})}function j(e){const t=(0,b.Z)();return(0,v.jsx)(x,{...e,children:d(e.children)},String(t))}const w={tabItem:"tabItem_Ymn6"};function T(e){let{children:t,hidden:n,className:r}=e;return(0,v.jsx)("div",{role:"tabpanel",className:(0,a.Z)(w.tabItem,r),hidden:n,children:t})}var I=n(4179),S=n(8492);function O(e){const t=/(\bhttps?:\/\/[^\s]+)/g,n=/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;return e.split(/(\bhttps?:\/\/[^\s]+|\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b)/g).map(((e,r)=>t.test(e)?(0,v.jsx)("a",{href:e,target:"_blank",rel:"noopener noreferrer",children:e},r):n.test(e)?(0,v.jsx)("a",{href:`mailto:${e}`,children:e},r):e))}function k(e){let{srNo:t,serviceName:n,description:r,input:a=null,output:s=null,endpointInfo:{cls:i="info",method:l="GET",basepath:o=""}={}}=e;return(0,v.jsxs)("tr",{children:[(0,v.jsxs)("td",{children:[t,"."]}),(0,v.jsx)("td",{children:n}),(0,v.jsx)("td",{children:(u=r,u.split("\n").map(((e,t)=>(0,v.jsx)("span",{style:{display:"block"},children:O(e)},t))))}),o&&(0,v.jsx)("td",{children:(0,v.jsxs)(j,{children:[(0,v.jsx)(T,{value:"Input",label:"Input",default:!0,children:a&&(0,v.jsx)(I.Z,{className:"templateIO",children:a})}),(0,v.jsx)(T,{value:"Output",label:"Output",children:s&&(0,v.jsx)(I.Z,{className:"templateIO",children:s})}),(0,v.jsxs)(T,{value:"Path",label:"Path",children:[(0,v.jsx)(S.Ct,{cls:i,method:l}),(0,v.jsxs)(I.Z,{className:"templateIO",children:["/",o]})]})]})})]});var u}function U(e){let{description:t,services:n}=e;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("p",{children:t}),(0,v.jsxs)("table",{children:[(0,v.jsx)("thead",{children:(0,v.jsxs)("tr",{children:[(0,v.jsx)("th",{children:"Sr. No"}),(0,v.jsx)("th",{children:"Service Name"}),(0,v.jsx)("th",{children:"Description"}),n[0].endpointInfo&&(0,v.jsx)("th",{children:"Details"})]})}),(0,v.jsx)("tbody",{children:n.map(((e,t)=>(0,v.jsx)(k,{srNo:t+1,...e},t)))})]})]})}}}]);