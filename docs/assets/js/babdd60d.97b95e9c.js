"use strict";(self.webpackChunkuser_documentation=self.webpackChunkuser_documentation||[]).push([[4013],{4341:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(5893),i=n(1151),s=n(8492);const o={sidebar_position:1,slug:"jdbc-properties",sidebar_label:"JDBC"},a="DataSource JDBC",c={id:"Core Development/Property Config/Connection Properties/JDBC",title:"DataSource JDBC",description:"JDBC, short for Java Database Connectivity, is an API that empowers users to execute operations on a data source using the Java programming language. This versatile API facilitates connections to a wide array of Data Source systems, ranging from relational databases to spreadsheets and flat files. With the appropriate SQL syntax, you can conduct queries, updates, deletions, and even execute stored procedures.",source:"@site/docs/Core Development/Property Config/Connection Properties/JDBC.md",sourceDirName:"Core Development/Property Config/Connection Properties",slug:"/Core Development/Property Config/Connection Properties/jdbc-properties",permalink:"/Core Development/Property Config/Connection Properties/jdbc-properties",draft:!1,unlisted:!1,editUrl:"https://github.com/quickintegrate/docs/tree/main/Core Development/Property Config/Connection Properties/JDBC.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"jdbc-properties",sidebar_label:"JDBC"},sidebar:"tutorialSidebar",previous:{title:"Connection Properties",permalink:"/Core Development/Property Config/Connection Properties/"},next:{title:"JMS",permalink:"/Core Development/Property Config/Connection Properties/jms-properties"}},d={},l=[{value:"Engaging in Practical Implementation",id:"engaging-in-practical-implementation",level:2}];function h(e){const t={em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"datasource-jdbc",children:"DataSource JDBC"}),"\n",(0,r.jsx)(t.p,{children:"JDBC, short for Java Database Connectivity, is an API that empowers users to execute operations on a data source using the Java programming language. This versatile API facilitates connections to a wide array of Data Source systems, ranging from relational databases to spreadsheets and flat files. With the appropriate SQL syntax, you can conduct queries, updates, deletions, and even execute stored procedures."}),"\n",(0,r.jsx)(t.h2,{id:"engaging-in-practical-implementation",children:"Engaging in Practical Implementation"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Open new Project in QuickIntegration Platform, and then follow these steps to get your flow working"})}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Click On the Connection Properties"}),"\n",(0,r.jsx)(t.li,{children:"Select the DataSource Type from drop down"}),"\n",(0,r.jsx)(t.li,{children:"Provide the Credentials"}),"\n",(0,r.jsx)(t.li,{children:"Click on Submit to save the Credentials"}),"\n",(0,r.jsx)(t.li,{children:"On the left side of the palette, you'll find the Configured Properties ready to be utilized within your API."}),"\n"]}),"\n",(0,r.jsx)(s.Ee,{cls:"border mb-2",src:"/img/Core Development/Connection properties/JDBC.png",alt:"JDBC configuration"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Fields"}),(0,r.jsx)("th",{children:"Description"}),(0,r.jsx)("th",{children:"Example"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"DataSource Name"}),(0,r.jsx)("td",{children:"Datasource Name which is configured in connections properties"}),(0,r.jsx)("td",{children:"classicnew"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"DataSource Type"}),(0,r.jsx)("td",{children:"JDBC"}),(0,r.jsx)("td",{children:"JDBC"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Driver ClassName"}),(0,r.jsx)("td",{children:"A string that identifies the primary class for a JDBC driver"}),(0,r.jsx)("td",{children:"com.mysql.cj.jdbc.Driver"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"URL"}),(0,r.jsx)("td",{children:"A URL (Uniform Resource Locator) is a unique identifier used to locate a resource on the Internet"}),(0,r.jsx)("td",{children:"jdbc:mysql://<server-host>:3306/<database-name>"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Connection Timeout"}),(0,r.jsx)("td",{children:"The maximum amount of time the driver will wait while attempting to establish a connection to the database."}),(0,r.jsx)("td",{children:"60000 (ms)"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"User Name"}),(0,r.jsx)("td",{children:"A name that uses for identification purposes when logging "}),(0,r.jsx)("td",{children:"<server-username>"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Password"}),(0,r.jsx)("td",{children:"A password is a string of characters used to verify the identity of a user during the authentication process"}),(0,r.jsx)("td",{children:"<server-password>"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Environment"}),(0,r.jsx)("td",{children:"Provides a production environment where you can deploy applications and APIs publicly"}),(0,r.jsx)("td",{children:"dev"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"DataBase"}),(0,r.jsx)("td",{children:"Database driver"}),(0,r.jsx)("td",{children:"SQL"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:["DDL schema ",(0,r.jsx)(t.em,{children:"(optional)"})]}),(0,r.jsxs)("td",{children:["SQL file that contains table creation statements.\n",(0,r.jsx)("a",{href:"/Requirement Gathering/model-design",target:"_blank",children:" Please refer the link for instructions on uploading DDL schema"})]}),(0,r.jsx)("td",{children:"classicmodels"})]})]})]})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8492:(e,t,n)=>{n.d(t,{Ct:()=>s,Ee:()=>o,nk:()=>a});var r=n(4996),i=n(5893);function s(e){let{cls:t,method:n}=e;return(0,i.jsx)("span",{className:`badge badge--${t} margin-bottom--sm`,children:n})}function o(e){let{cls:t,src:n,alt:s}=e;return(0,i.jsx)("div",{className:"default-container",children:(0,i.jsx)("img",{className:t,src:(0,r.Z)(n),alt:s})})}function a(e){let{cls:t="default-container",src:n,type:s}=e;return(0,i.jsx)("div",{className:t,children:(0,i.jsxs)("video",{controls:!0,children:[(0,i.jsx)("source",{src:(0,r.Z)(n),type:s}),"Your browser does not support the video tag."]})})}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var r=n(7294);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);