"use strict";(self.webpackChunkuser_documentation=self.webpackChunkuser_documentation||[]).push([[8661],{6915:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=t(5893),i=t(1151),s=t(4996);const o={sidebar_position:1},c="Database Connector",a={id:"Core Development/Connectors/DB",title:"Database Connector",description:"The Database connector can connect to almost any Java Database Connectivity (JDBC) relational Database and run SQL operations. You can specify MEL expressions in connector fields and configure attributes dynamically, depending on the Database configuration you use. An application can support multi-tenant scenarios using the same configuration element, changing the connection attributes based on, for example, information coming from each request.",source:"@site/docs/Core Development/Connectors/DB.md",sourceDirName:"Core Development/Connectors",slug:"/Core Development/Connectors/DB",permalink:"/docs/docs/Core Development/Connectors/DB",draft:!1,unlisted:!1,editUrl:"https://github.com/quickintegrate/docs/tree/main/Core Development/Connectors/DB.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Connectors",permalink:"/docs/docs/Core Development/Connectors/"},next:{title:"REST Connect Connector",permalink:"/docs/docs/Core Development/Connectors/REST"}},d={},l=[{value:"Basic Setup Steps",id:"basic-setup-steps",level:3},{value:"Supported Operations",id:"supported-operations",level:3},{value:"Configuring Database Connector",id:"configuring-database-connector",level:3},{value:"Read DB Operation",id:"read-db-operation",level:2},{value:"Let see how to write the query using quickintegration with few clicks",id:"let-see-how-to-write-the-query-using-quickintegration-with-few-clicks",level:4},{value:"Write DB Operation",id:"write-db-operation",level:2}];function h(e){const n={h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"database-connector",children:"Database Connector"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"Database"})," connector can connect to almost any Java ",(0,r.jsx)(n.strong,{children:"Database"})," Connectivity (JDBC) relational ",(0,r.jsx)(n.strong,{children:"Database"})," and run SQL operations. You can specify MEL expressions in connector fields and configure attributes dynamically, depending on the ",(0,r.jsx)(n.strong,{children:"Database"})," configuration you use. An application can support multi-tenant scenarios using the same configuration element, changing the connection attributes based on, for example, information coming from each request."]}),"\n",(0,r.jsxs)(n.p,{children:["You can perform predefined queries, dynamically constructed queries, and template queries that are self-sufficient and customizable. You can perform multiple SQL requests in a single bulk update and make Data Definition Language (DDL) requests that alter the data structure rather than the data itself. The ",(0,r.jsx)(n.strong,{children:"Database"})," connector is available with QuickIntegration."]}),"\n",(0,r.jsx)(n.h3,{id:"basic-setup-steps",children:"Basic Setup Steps"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Configure a ",(0,r.jsx)(n.strong,{children:"Database"})," connector where you define:"]}),"\n",(0,r.jsxs)(n.li,{children:["Your ",(0,r.jsx)(n.strong,{children:"Database"}),"\u2019s location and connection details"]}),"\n",(0,r.jsxs)(n.li,{children:["You may need to add your ",(0,r.jsx)(n.strong,{children:"Database"})," driver as a dependency to your app for the connector to work."]}),"\n",(0,r.jsx)(n.li,{children:"Advanced connection parameters such as connection pooling"}),"\n",(0,r.jsx)(n.li,{children:"Configure the operation:"}),"\n",(0,r.jsxs)(n.li,{children:["Contains the query to perform on the ",(0,r.jsx)(n.strong,{children:"Database"})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"supported-operations",children:"Supported Operations"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"Database"})," connector supports the following operations:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Select"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Insert"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Update"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Delete"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Drag and drop the ",(0,r.jsx)(n.strong,{children:"DB Connector"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)("img",{src:(0,s.Z)("/img/Core Development/DB/DB_connector.png")}),";"]}),"\n",(0,r.jsx)(n.h3,{id:"configuring-database-connector",children:"Configuring Database Connector"}),"\n",(0,r.jsxs)(n.p,{children:["left click on connector, you can define the ",(0,r.jsx)(n.strong,{children:"DB Connector"})," configration"]}),"\n",(0,r.jsx)(n.h2,{id:"read-db-operation",children:"Read DB Operation"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)("img",{src:(0,s.Z)("/img/Connectors/Read_DB_query4.png")}),";"]}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Fields"}),(0,r.jsx)("th",{children:"Description"}),(0,r.jsx)("th",{children:"Example"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"DB Operation"}),(0,r.jsx)("td",{children:"Read/Write"}),(0,r.jsx)("td",{children:"Read"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Datasource Name"}),(0,r.jsx)("td",{children:"Datasource Name which is configured in connections properties"}),(0,r.jsx)("td",{children:"lassicmodels"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Return Roe(s)"}),(0,r.jsx)("td",{children:"Single/Multiple"}),(0,r.jsx)("td",{children:"Multiple"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Output Variable"}),(0,r.jsx)("td",{children:"Stores output of connections operations"}),(0,r.jsx)("td",{children:"MultiCustomers"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Query"}),(0,r.jsx)("td",{children:"Data Base Query"}),(0,r.jsxs)("td",{children:["SELECT * FROM customers WHERE city =",":city"]})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"let-see-how-to-write-the-query-using-quickintegration-with-few-clicks",children:"Let see how to write the query using quickintegration with few clicks"}),"\n",(0,r.jsx)(n.p,{children:"Select the table Name from the Droup down list, we can limit the number of records To be retrieved\r\nIn filters add the condition for fields use in the query with the help of operation like NULL, NOT NULL, =, !=, etc\r\nYour Generated Query will get Created."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)("img",{src:(0,s.Z)("/img/Connectors/Read_DB_query1.png")}),";"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)("img",{src:(0,s.Z)("/img/Connectors/Read_DB_query2.png")}),";"]}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Fields"}),(0,r.jsx)("th",{children:"Description"}),(0,r.jsx)("th",{children:"Example"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Table Name"}),(0,r.jsx)("td",{children:"Data Base Table Name"}),(0,r.jsx)("td",{children:"Customers"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Your Generated Query is"}),(0,r.jsx)("td",{children:"Data Base Query"}),(0,r.jsxs)("td",{children:["SELECT * FROM customers WHERE city =",":city"]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Filters(Fields)"}),(0,r.jsx)("td",{children:"Perticular field where DB will Operate"}),(0,r.jsx)("td",{children:"city"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Filters(Operation)"}),(0,r.jsx)("td",{children:"Operations like NULL, NOT NULL, =, !=, etc"}),(0,r.jsx)("td",{children:"="})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"write-db-operation",children:"Write DB Operation"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)("img",{src:(0,s.Z)("/img/Connectors/Write_DB_config.png")}),";"]}),"\n",(0,r.jsxs)(n.p,{children:["When we have to perform Operations to modify records in the DB We can select ",(0,r.jsx)(n.strong,{children:"Write"})," From DB Operations,\r\nLet see how to write a delete query.\r\nSelect the query Type ",(0,r.jsx)(n.strong,{children:"Delete"})," from the dropdown list, selet bulk operation to delete multiple records using single query and define fields for the delete condition."]}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Fields"}),(0,r.jsx)("th",{children:"Description"}),(0,r.jsx)("th",{children:"Example"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"DB Operation"}),(0,r.jsx)("td",{children:"Read/Write"}),(0,r.jsx)("td",{children:"Write"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Datasource Name"}),(0,r.jsx)("td",{children:"Datasource Name which is configured in connections properties"}),(0,r.jsx)("td",{children:"classicmodels"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Query Type(s)"}),(0,r.jsx)("td",{children:"Methods like GET, POST, DELETE, etc"}),(0,r.jsx)("td",{children:"DELETE"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Parent"}),(0,r.jsx)("td",{children:"Defined by Using $ key word"}),(0,r.jsx)("td",{children:"$MultiCustomers"})]})]})]})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>o});var r=t(7294);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);