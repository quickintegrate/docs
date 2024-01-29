"use strict";(self.webpackChunkuser_documentation=self.webpackChunkuser_documentation||[]).push([[1580],{1514:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>h,contentTitle:()=>l,default:()=>x,frontMatter:()=>d,metadata:()=>c,toc:()=>o});var t=n(5893),i=n(1151),r=n(4996);const d={sidebar_position:4},l="Postal details Rest API Design Document",c={id:"Getting Started/Create Postal details Rest API",title:"Postal details Rest API Design Document",description:"Create a REST API which will accept customer Id as query parameter.",source:"@site/docs/Getting Started/Create Postal details Rest API.md",sourceDirName:"Getting Started",slug:"/Getting Started/Create Postal details Rest API",permalink:"/docs/Getting Started/Create Postal details Rest API",draft:!1,unlisted:!1,editUrl:"https://github.com/quickintegrate/docs/tree/main/Getting Started/Create Postal details Rest API.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Build a CURD API using SFDC Contact table from Start to Finish",permalink:"/docs/Getting Started/Build a CURD API using SFDC Contact table from Start to Finish"},next:{title:"QuickIntegrate Overview",permalink:"/docs/QuickIntegrate_Overview/"}},h={},o=[{value:"Postal details Rest API:",id:"postal-details-rest-api",level:2},{value:"End-Points:",id:"end-points",level:2},{value:"SETP 1:",id:"setp-1",level:4},{value:"STEP 2:",id:"step-2",level:4},{value:"STEP 3:",id:"step-3",level:4},{value:"STEP 4:",id:"step-4",level:4},{value:"STEP 5:",id:"step-5",level:4},{value:"STEP 6:",id:"step-6",level:4},{value:"STEP 7:",id:"step-7",level:4},{value:"STEP 8:",id:"step-8",level:4},{value:"STEP 9:",id:"step-9",level:4},{value:"STEP 10:",id:"step-10",level:4},{value:"STEP 11:",id:"step-11",level:4},{value:"STEP 12:",id:"step-12",level:4},{value:"STEP 13:",id:"step-13",level:4},{value:"Let see how to write the query using quickintegration with few clicks",id:"let-see-how-to-write-the-query-using-quickintegration-with-few-clicks",level:4},{value:"STEP 14:",id:"step-14",level:4},{value:"STEP 15:",id:"step-15",level:4},{value:"STEP 16:",id:"step-16",level:4},{value:"STEP 17:",id:"step-17",level:4},{value:"APIResponse <a> Please refer the link for instructions on creating the APIResponse</a>",id:"apiresponse--please-refer-the-link-for-instructions-on-creating-the-apiresponse",level:3},{value:"STEP 18:",id:"step-18",level:4},{value:"STEP 19:",id:"step-19",level:4},{value:"STEP 20:",id:"step-20",level:4},{value:"STEP 21:",id:"step-21",level:4},{value:"STEP 22:",id:"step-22",level:4},{value:"STEP 23:",id:"step-23",level:4}];function a(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"postal-details-rest-api-design-document",children:"Postal details Rest API Design Document"}),"\n",(0,t.jsxs)(s.p,{children:["Create a ",(0,t.jsx)(s.strong,{children:"REST API"})," which will accept ",(0,t.jsx)(s.strong,{children:"customer Id"})," as ",(0,t.jsx)(s.strong,{children:"query parameter"}),".\r\nUse that ",(0,t.jsx)(s.strong,{children:"customer Id"})," to fetch the data from ",(0,t.jsx)(s.strong,{children:"Customer Database"})," in order to get ",(0,t.jsx)(s.strong,{children:"PIN"})," code for that customer. Use this ",(0,t.jsx)(s.strong,{children:"PIN"})," code to get postal address details from India Post ",(0,t.jsx)(s.strong,{children:"Rest API"}),".\r\nTransform the response in the desired format to generate final response"]}),"\n",(0,t.jsx)(s.h2,{id:"postal-details-rest-api",children:"Postal details Rest API:"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(s.p,{children:["It is an API which is used to get customer data from ",(0,t.jsx)(s.strong,{children:"DB"})," and use that data to get postal details from India Post API. We have the customer database and it has following no of columns in remote ",(0,t.jsx)(s.strong,{children:"DB"})," as shown below\r\nCustomer\u2019s table column name"]}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Fields"}),(0,t.jsx)("th",{children:"Data Types"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Id"}),(0,t.jsx)("td",{children:"Integer"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"first_name"}),(0,t.jsx)("td",{children:"varchar"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"last_name"}),(0,t.jsx)("td",{children:"varchar"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"address"}),(0,t.jsx)("td",{children:"varchar"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"pin"}),(0,t.jsx)("td",{children:"Integer"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"email"}),(0,t.jsx)("td",{children:"varchar"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"login"}),(0,t.jsx)("td",{children:"varchar"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"identifier"}),(0,t.jsx)("td",{children:"varchar"})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"end-points",children:"End-Points:"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"http://run.quickintegrate.io/dev/restapi/getPostalInfo?ID=4",children:"GET-returns specific record"})}),"\n",(0,t.jsx)(s.h4,{id:"setp-1",children:"SETP 1:"}),"\n",(0,t.jsx)(s.p,{children:"Login to Quick Integration Platform to get started."}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)("img",{src:(0,r.Z)("/img/DB_Rest_API/1.png")}),";"]}),"\n",(0,t.jsx)(s.h4,{id:"step-2",children:"STEP 2:"}),"\n",(0,t.jsxs)(s.p,{children:["Click on ",(0,t.jsx)(s.strong,{children:"Manage"})," Option >> ",(0,t.jsx)(s.strong,{children:"Projects"})," >> ",(0,t.jsx)(s.strong,{children:"Create"})," to create the new project"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)("img",{src:(0,r.Z)("/img/DB_Rest_API/2.png")}),";\r\n",(0,t.jsx)("img",{src:(0,r.Z)("/img/DB_Rest_API/3.png")}),";"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"Once project is created, below popup shows up."})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)("img",{src:(0,r.Z)("/img/DB_Rest_API/4.png")}),";"]}),"\n",(0,t.jsx)(s.h4,{id:"step-3",children:"STEP 3:"}),"\n",(0,t.jsxs)(s.p,{children:["Go to ",(0,t.jsx)(s.strong,{children:"DEVELOP"})," >> ",(0,t.jsx)(s.strong,{children:"Functionality"})," API"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)("img",{src:(0,r.Z)("/img/DB_Rest_API/5.png")}),";"]}),"\n",(0,t.jsx)(s.h4,{id:"step-4",children:"STEP 4:"}),"\n",(0,t.jsxs)(s.p,{children:["Select relevant project and create services in that project\r\n",(0,t.jsx)("img",{src:(0,r.Z)("/img/DB_Rest_API/6.png")}),";\r\n",(0,t.jsx)("img",{src:(0,r.Z)("/img/DB_Rest_API/7.png")}),";"]}),"\n",(0,t.jsx)(s.h4,{id:"step-5",children:"STEP 5:"}),"\n",(0,t.jsx)(s.p,{children:"Once service name is provided, canvas will show up"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)("img",{src:(0,r.Z)("/img/DB_Rest_API/8.png")}),";"]}),"\n",(0,t.jsx)(s.h4,{id:"step-6",children:"STEP 6:"}),"\n",(0,t.jsxs)(s.p,{children:["Left click on ",(0,t.jsx)(s.strong,{children:"REST Trigger"})," to Configure as given below."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)("img",{src:(0,r.Z)("/img/DB_Rest_API/a1.png")}),";"]}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Fields"}),(0,t.jsx)("th",{children:"Description"}),(0,t.jsx)("th",{children:"Examples"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"uri"}),(0,t.jsx)("td",{children:"Resource Path to trigger the API"}),(0,t.jsx)("td",{children:"/getPostalinfo"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"type"}),(0,t.jsx)("td",{children:"Metods of The API like GET, PUT, PATCH, etc"}),(0,t.jsx)("td",{children:"GET"})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"step-7",children:"STEP 7:"}),"\n",(0,t.jsxs)(s.p,{children:["Drag ",(0,t.jsx)(s.strong,{children:"UTILITY"})," component to add start logger for you service."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)("img",{src:(0,r.Z)("/img/DB_Rest_API/9.2.png")}),";"]}),"\n",(0,t.jsx)(s.h4,{id:"step-8",children:"STEP 8:"}),"\n",(0,t.jsxs)(s.p,{children:["Left click on ",(0,t.jsx)(s.strong,{children:"UTILITY"})," Connector and Configure as given below."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)("img",{src:(0,r.Z)("/img/DB_Rest_API/9.png")}),";"]}),"\n",(0,t.jsx)(s.p,{children:"Methods:"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)("img",{src:(0,r.Z)("/img/DB_Rest_API/methods.png")}),";"]}),"\n",(0,t.jsx)(s.p,{children:"Log type:"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)("img",{src:(0,r.Z)("/img/DB_Rest_API/Log type.png")}),";"]}),"\n",(0,t.jsx)(s.p,{children:"Log Value:"}),"\n",(0,t.jsx)(s.p,{children:"Start Log - Start_level_log_info"}),"\n",(0,t.jsx)(s.h4,{id:"step-9",children:"STEP 9:"}),"\n",(0,t.jsxs)(s.p,{children:["Drag ",(0,t.jsx)(s.strong,{children:"URIVALIDATOR"})," to validate the URL."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)("img",{src:(0,r.Z)("/img/DB_Rest_API/10.2.png")}),";"]}),"\n",(0,t.jsx)(s.h4,{id:"step-10",children:"STEP 10:"}),"\n",(0,t.jsxs)(s.p,{children:["Left click on ",(0,t.jsx)(s.strong,{children:"URIVALIDATOR"})," Connector and Configure as given below."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)("img",{src:(0,r.Z)("/img/DB_Rest_API/10.png")}),";"]}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Fields"}),(0,t.jsx)("th",{children:"Description"}),(0,t.jsx)("th",{children:"Examples"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Scenario-Name"}),(0,t.jsx)("td",{children:"Name of the scenario to be performed in case the validation failed."}),(0,t.jsx)("td",{children:"Validate_request"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Request Params"}),(0,t.jsx)("td",{children:"Names of the param keys passed in query parameters."}),(0,t.jsx)("td",{children:"ID"})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"step-11",children:"STEP 11:"}),"\n",(0,t.jsxs)(s.p,{children:["Drag ",(0,t.jsx)(s.strong,{children:"DB"})," Connector to make ",(0,t.jsx)(s.strong,{children:"DB"})," call in the service."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)("img",{src:(0,r.Z)("/img/DB_Rest_API/11.2.png")}),";"]}),"\n",(0,t.jsx)(s.h4,{id:"step-12",children:"STEP 12:"}),"\n",(0,t.jsxs)(s.p,{children:["Add ",(0,t.jsx)(s.strong,{children:"DB"})," connectivity details in Connection properties:"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)("img",{src:(0,r.Z)("/img/DB_Rest_API/New folder/A1.png")}),";"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)("img",{src:(0,r.Z)("/img/DB_Rest_API/New folder/A2.png")}),";"]}),"\n",(0,t.jsx)(s.h4,{id:"step-13",children:"STEP 13:"}),"\n",(0,t.jsxs)(s.p,{children:["Left click on ",(0,t.jsx)(s.strong,{children:"DB"})," Connector and Configure as given below.\r\nSelect the database configuration created in properties to ",(0,t.jsx)(s.strong,{children:"DB"})," connectivity in datasource name:"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)("img",{src:(0,r.Z)("/img/DB_Rest_API/11.png")}),";"]}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Fields"}),(0,t.jsx)("th",{children:"Description"}),(0,t.jsx)("th",{children:"Example"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"DB Operation"}),(0,t.jsx)("td",{children:"Read/Write"}),(0,t.jsx)("td",{children:"Read"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Datasource Name"}),(0,t.jsx)("td",{children:"Datasource Name which is configured in connections properties"}),(0,t.jsx)("td",{children:"dbds"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Return Row(s)"}),(0,t.jsx)("td",{children:"Single, Multiple"}),(0,t.jsx)("td",{children:"Single"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Output Variable"}),(0,t.jsx)("td",{children:"This field is the variable name for which the output of the following step is store in the pipeline "}),(0,t.jsx)("td",{children:"Data"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Query"}),(0,t.jsx)("td",{children:"This is the Database commands"}),(0,t.jsxs)("td",{children:["SELECT pin FROM crm_customers WHERE id=",":id"]})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"let-see-how-to-write-the-query-using-quickintegration-with-few-clicks",children:"Let see how to write the query using quickintegration with few clicks"}),"\n",(0,t.jsx)(s.p,{children:"Select the table Name from the Droup down list, we can limit the number of records To be retrieved\r\nIn filters add the condition for fields use in the query with the help of operation like NULL, NOT NULL, =, !=, etc\r\nYour Generated Query will get Created."}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"Select the Table Name"}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)("img",{src:(0,r.Z)("/img/DB_Rest_API/New folder/crm_customer.png")}),";"]}),"\n",(0,t.jsxs)(s.ol,{start:"2",children:["\n",(0,t.jsx)(s.li,{children:"Select the Coloumn"}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)("img",{src:(0,r.Z)("/img/DB_Rest_API/New folder/pin.png")}),";"]}),"\n",(0,t.jsxs)(s.ol,{start:"3",children:["\n",(0,t.jsx)(s.li,{children:"Select the Fields"}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)("img",{src:(0,r.Z)("/img/DB_Rest_API/New folder/id.png")}),";"]}),"\n",(0,t.jsxs)(s.ol,{start:"4",children:["\n",(0,t.jsx)(s.li,{children:"Select the Operations"}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)("img",{src:(0,r.Z)("/img/DB_Rest_API/New folder/ope.png")}),";"]}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Fields"}),(0,t.jsx)("th",{children:"Description"}),(0,t.jsx)("th",{children:"Example"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Table Name"}),(0,t.jsx)("td",{children:"Data Base Table Name"}),(0,t.jsx)("td",{children:"crm_customers"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Your Generated Query is"}),(0,t.jsx)("td",{children:"Data Base Query"}),(0,t.jsxs)("td",{children:["SELECT pin FROM crm_customers WHERE id",":id"]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Filters(Fields)"}),(0,t.jsx)("td",{children:"Perticular field where DB will Operate"}),(0,t.jsx)("td",{children:"id"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Filters(Operation)"}),(0,t.jsx)("td",{children:"Operations like NULL, NOT NULL, =, !=, etc"}),(0,t.jsx)("td",{children:"="})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"step-14",children:"STEP 14:"}),"\n",(0,t.jsx)(s.p,{children:"Define Global variables to be used in the service:"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)("img",{src:(0,r.Z)("/img/DB_Rest_API/New folder/GlobalVariable3.png")}),";"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)("img",{src:(0,r.Z)("/img/DB_Rest_API/New folder/GlobalVariable4.png")}),";"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)("img",{src:(0,r.Z)("/img/DB_Rest_API/New folder/GlobalVariable5.png")}),";"]}),"\n",(0,t.jsx)(s.h4,{id:"step-15",children:"STEP 15:"}),"\n",(0,t.jsxs)(s.p,{children:["Drag ",(0,t.jsx)(s.strong,{children:"REST"})," component to make India Post ",(0,t.jsx)(s.strong,{children:"REST"})," API call to get postal details based on PIN code."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)("img",{src:(0,r.Z)("/img/DB_Rest_API/12.2.png")}),";"]}),"\n",(0,t.jsx)(s.h4,{id:"step-16",children:"STEP 16:"}),"\n",(0,t.jsxs)(s.p,{children:["Left click on ",(0,t.jsx)(s.strong,{children:"REST"})," Connector and Configure as given below."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)("img",{src:(0,r.Z)("/img/DB_Rest_API/12.png")}),";"]}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Fields"}),(0,t.jsx)("th",{children:"Description"}),(0,t.jsx)("th",{children:"Example"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Http URL"}),(0,t.jsx)("td",{children:"URL by which the API will be called"}),(0,t.jsx)("td",{children:"dburl"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Method"}),(0,t.jsx)("td",{children:"Formats like GET, POST, DELETE, etc"}),(0,t.jsx)("td",{children:"GET"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Base Path"}),(0,t.jsx)("td",{children:"Resource Path"}),(0,t.jsx)("td",{children:"/pincode/;pincode"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Security"}),(0,t.jsx)("td",{children:"To be Defined in the propertioes like Basic Authentication, OAuth token, Authorization Code, etc "}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Output Variable"}),(0,t.jsx)("td",{children:"Stores output of connections operations"}),(0,t.jsx)("td",{children:"payload"})]})]})]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Type:"}),"\r\npathparam"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Target:"}),"\r\npincode"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"key:"}),"\r\n$Data.pin"]}),"\n",(0,t.jsx)(s.h4,{id:"step-17",children:"STEP 17:"}),"\n",(0,t.jsxs)(s.p,{children:["Drag ",(0,t.jsx)(s.strong,{children:"APIRESPONSE"})," component to map the response :"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)("img",{src:(0,r.Z)("/img/DB_Rest_API/13.2.png")}),";"]}),"\n",(0,t.jsx)(s.p,{children:"Click on the Drop down and select Content Type application json"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)("img",{src:(0,r.Z)("/img/hello/addedsteps/ContentType.png")}),";"]}),"\n",(0,t.jsx)(s.p,{children:"Click on Add button and do the mapping as shown below"}),"\n",(0,t.jsxs)(s.p,{children:["When we want to get a variable, from the pipeline, we use ",(0,t.jsx)(s.strong,{children:"$"})," sign as prefix followed by Variable name from in the pipeline. There can be nested get which is seperated by '.' Ex. ",(0,t.jsx)(s.strong,{children:"$Payload.key"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"Note:- The variable Payload should be present in the pipeline before the calling"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)("img",{src:(0,r.Z)("/img/DB_Rest_API/n1.png")}),";"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)("img",{src:(0,r.Z)("/img/DB_Rest_API/New folder/types1.png")}),";"]}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Fields"}),(0,t.jsx)("th",{children:"Description"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"GEN"}),(0,t.jsx)("td",{children:"Get one field from the Input and mapped in another field of Output"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"TRANS"}),(0,t.jsx)("td",{children:"Transforms the Input value with the help of transformation functions"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"CN"}),(0,t.jsx)("td",{children:"Mapped the Input as it is Output body"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"OBJ"}),(0,t.jsx)("td",{children:"Mapped the Inputs to Object"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"AR"}),(0,t.jsx)("td",{children:"Mapped the Inputs to Array"})]})]})]}),"\n",(0,t.jsxs)(s.h3,{id:"apiresponse--please-refer-the-link-for-instructions-on-creating-the-apiresponse",children:["APIResponse ",(0,t.jsx)("a",{href:"/docs/Core Development/Transformers/APIRESPONSE",target:"_blank",children:" Please refer the link for instructions on creating the APIResponse"})]}),"\n",(0,t.jsx)(s.h4,{id:"step-18",children:"STEP 18:"}),"\n",(0,t.jsxs)(s.p,{children:["Drag ",(0,t.jsx)(s.strong,{children:"UTILITY"})," component to add end logger for you service"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)("img",{src:(0,r.Z)("/img/DB_Rest_API/14.2.png")}),";"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)("img",{src:(0,r.Z)("/img/DB_Rest_API/14.png")}),";"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Methods:"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)("img",{src:(0,r.Z)("/img/DB_Rest_API/methods.png")}),";"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Log type:"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)("img",{src:(0,r.Z)("/img/DB_Rest_API/Log type.png")}),";"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Log Value:"})}),"\n",(0,t.jsx)(s.p,{children:"End Log - End_level_log_info"}),"\n",(0,t.jsx)(s.h4,{id:"step-19",children:"STEP 19:"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Step Exception handling in the service:"})}),"\n",(0,t.jsx)(s.p,{children:"Step error is specifically for particular connector error.\r\nSelect the Step Exception handler from the palate, Drag it to the canvas and configure it for the DB and Rest error\r\nPlease refer the configration shown below"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)("img",{src:(0,r.Z)("/img/DB_Rest_API/15.1.1.png")}),";"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)("img",{src:(0,r.Z)("/img/DB_Rest_API/15.png")}),";"]}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Fields"}),(0,t.jsx)("th",{children:"Description"}),(0,t.jsx)("th",{children:"Example"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Method"}),(0,t.jsx)("td",{children:"This is the utility function to throw the error in the flow"}),(0,t.jsx)("td",{children:"throw error"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Error Type"}),(0,t.jsx)("td",{children:"Type of Exception thrown in the flow such as INTBuinessException and INTRetryException "}),(0,t.jsx)("td",{children:"INTBuinessException"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Exception message"}),(0,t.jsx)("td",{children:"The custom message while throwing the custom Exception"}),(0,t.jsx)("td",{children:"$VARIABLES.nocustomer"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Exception code"}),(0,t.jsx)("td",{children:"The code while throwing the Execption"}),(0,t.jsx)("td",{children:"$VARIABLES.nocustomercode"})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"step-20",children:"STEP 20:"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)("img",{src:(0,r.Z)("/img/DB_Rest_API/16.1.png")}),";"]}),"\n",(0,t.jsxs)(s.p,{children:["If ",(0,t.jsx)(s.strong,{children:"DB"})," does not return response for a customer Id, error message is created as \u201cNo customer found\u201d. PFB the configuration for reference:"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)("img",{src:(0,r.Z)("/img/DB_Rest_API/16.png")}),";"]}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Fields"}),(0,t.jsx)("th",{children:"Description"}),(0,t.jsx)("th",{children:"Example"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Method"}),(0,t.jsx)("td",{children:"This is the utility function to throw the error in the flow"}),(0,t.jsx)("td",{children:"throw error"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Error Type"}),(0,t.jsx)("td",{children:"Type of Exception thrown in the flow such as INTBuinessException and INTRetryException "}),(0,t.jsx)("td",{children:"INTBuinessException"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Exception message"}),(0,t.jsx)("td",{children:"The custom message while throwing the custom Exception"}),(0,t.jsx)("td",{children:"$VARIABLES.invalidPin"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Exception code"}),(0,t.jsx)("td",{children:"The code while throwing the Execption "}),(0,t.jsx)("td",{children:"$VARIABLES.errorPin"})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"step-21",children:"STEP 21:"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Global Exception handling in the service:"})}),"\n",(0,t.jsx)(s.p,{children:"Global Error is for the all the component in the flow.\r\nSelect the Global Error from the palate, Drag it to the canvas and configure it as shown below"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)("img",{src:(0,r.Z)("/img/DB_Rest_API/17.png")}),";"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)("img",{src:(0,r.Z)("/img/DB_Rest_API/17.1.png")}),";"]}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Fields"}),(0,t.jsx)("th",{children:"Description"}),(0,t.jsx)("th",{children:"Example"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Method"}),(0,t.jsx)("td",{children:"This is the utility function to throw the error in the flow"}),(0,t.jsx)("td",{children:"throw error"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Error Type"}),(0,t.jsx)("td",{children:"Type of Exception thrown in the flow such as INTBuinessException and INTRetryException "}),(0,t.jsx)("td",{children:"INTBuinessException"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Exception message"}),(0,t.jsx)("td",{children:"The custom message while throwing the custom Exception"}),(0,t.jsx)("td",{children:"compulsory querry param not passed"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Exception code"}),(0,t.jsx)("td",{children:"The code while throwing the Execption"}),(0,t.jsx)("td",{children:"$VARIABLES.noid"})]})]})]}),"\n",(0,t.jsx)(s.p,{children:"If any error occurs in the service during processing. It is handled in the global Exception handler."}),"\n",(0,t.jsx)(s.h4,{id:"step-22",children:"STEP 22:"}),"\n",(0,t.jsx)(s.p,{children:"PFB the final service screenshot below :"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)("img",{src:(0,r.Z)("/img/DB_Rest_API/18.png")}),";"]}),"\n",(0,t.jsx)(s.h4,{id:"step-23",children:"STEP 23:"}),"\n",(0,t.jsx)(s.p,{children:"Step to Test the API Deployed on QuickIntegration."}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"Save the application."}),"\n",(0,t.jsxs)(s.li,{children:["Go to ",(0,t.jsx)(s.strong,{children:"EXECUTE"})," >> ",(0,t.jsx)(s.strong,{children:"BUILD"}),"\r\nto Build the application."]}),"\n",(0,t.jsx)(s.li,{children:"Deploy the application after build. Select the Application Name From Drop down, and pass the security key in Properties. Click on deploy application."}),"\n",(0,t.jsxs)(s.li,{children:["Go to application and Bring ",(0,t.jsx)(s.strong,{children:"UP"})," the application by clicking on project."]}),"\n",(0,t.jsx)(s.li,{children:"Provide the security key and start the API."}),"\n",(0,t.jsx)(s.li,{children:"Once you Successfully started your API, you will find Development URL in Details Coloumn"}),"\n",(0,t.jsx)(s.li,{children:"Using the QuickIntegrate deployed URL You can Test your API using Postman Collection"}),"\n"]})]})}function x(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>d});var t=n(7294);const i={},r=t.createContext(i);function d(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);