"use strict";(self.webpackChunkuser_documentation=self.webpackChunkuser_documentation||[]).push([[5687],{1868:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>x,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var t=r(5893),o=r(1151),s=r(4996);const i={sidebar_position:5,slug:"ftp-connector",sidebar_label:"FTP"},c="FTP Connector",d={id:"Core Development/Connectors/FTP",title:"FTP Connector",description:"Provides access to files and folders on an FTP server. FTP Connector operations manage file transfers by using File Transfer Protocol (FTP). The Connector\u2019s main features include:",source:"@site/docs/Core Development/Connectors/FTP.md",sourceDirName:"Core Development/Connectors",slug:"/Core Development/Connectors/ftp-connector",permalink:"/Core Development/Connectors/ftp-connector",draft:!1,unlisted:!1,editUrl:"https://github.com/quickintegrate/docs/tree/main/Core Development/Connectors/FTP.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,slug:"ftp-connector",sidebar_label:"FTP"},sidebar:"tutorialSidebar",previous:{title:"FILE",permalink:"/Core Development/Connectors/file-connector"},next:{title:"SFTP",permalink:"/Core Development/Connectors/sftp-connector"}},l={},a=[{value:"Configuring FTP Connector",id:"configuring-ftp-connector",level:3},{value:"Configuring FTP Connector",id:"configuring-ftp-connector-1",level:3},{value:"Read FTP Connector",id:"read-ftp-connector",level:2},{value:"Write FTP Connector",id:"write-ftp-connector",level:2}];function h(e){const n={h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"ftp-connector",children:"FTP Connector"}),"\n",(0,t.jsxs)(n.p,{children:["Provides access to files and folders on an ",(0,t.jsx)(n.strong,{children:"FTP"})," server. ",(0,t.jsx)(n.strong,{children:"FTP"})," Connector operations manage file transfers by using File Transfer Protocol (",(0,t.jsx)(n.strong,{children:"FTP"}),"). The Connector\u2019s main features include:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The ability to read files or fully list directory contents on demand."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Support for common ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.strong,{children:"FTP"})})," operations such as creating directories and copying, moving, renaming, and deleting files."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Support for locking files."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"File matching functionality."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["A design that is consistent with the ",(0,t.jsx)(n.strong,{children:"File"})," and ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.strong,{children:"FTP"})})," Connectors."]}),"\n",(0,t.jsx)(n.p,{children:"The same set of operations is available using these two Connectors, and they behave similarly."}),"\n",(0,t.jsx)(n.h3,{id:"configuring-ftp-connector",children:"Configuring FTP Connector"}),"\n",(0,t.jsxs)(n.p,{children:["Follow these steps to set up and test a connection to your ",(0,t.jsx)(n.strong,{children:"FTP"}),"  by creating a reusable global variable for the ",(0,t.jsx)(n.strong,{children:"FTP"})," Connector to reference."]}),"\n",(0,t.jsxs)(n.p,{children:["Drag and drop the ",(0,t.jsx)(n.strong,{children:"FTP Connector"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)("img",{src:(0,s.Z)("/img/Connectors/FTP_connector.png")}),";"]}),"\n",(0,t.jsx)(n.h3,{id:"configuring-ftp-connector-1",children:"Configuring FTP Connector"}),"\n",(0,t.jsxs)(n.p,{children:["left click on connector, you can define the ",(0,t.jsx)(n.strong,{children:"FTP Connector"})," configration"]}),"\n",(0,t.jsx)(n.h2,{id:"read-ftp-connector",children:"Read FTP Connector"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)("img",{src:(0,s.Z)("/img/Connectors/ftp_read.png")}),";"]}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Fields"}),(0,t.jsx)("th",{children:"Description"}),(0,t.jsx)("th",{children:"Example"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Type"}),(0,t.jsx)("td",{children:"Read/Write"}),(0,t.jsx)("td",{children:"Read"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Datasource Name"}),(0,t.jsxs)("td",{children:["Datasource Name which is configured in connections properties",(0,t.jsx)("a",{href:"/Core Development/Property Config/Connection Properties/DataSource FTP",target:"_blank",children:" Please refer the link for instructions on creating the datasource name"})]}),(0,t.jsx)("td",{children:"ftpcall"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"File Name"}),(0,t.jsx)("td",{children:"Name of the file to be processed"}),(0,t.jsx)("td",{children:"Contacts"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"File Type"}),(0,t.jsx)("td",{children:"Format of File"}),(0,t.jsx)("td",{children:"CSV"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"OutPut"}),(0,t.jsx)("td",{children:"Output"}),(0,t.jsx)("td",{children:"Rest_output"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Operation"}),(0,t.jsx)("td",{children:"Operation of the file"}),(0,t.jsx)("td",{children:"Move"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"write-ftp-connector",children:"Write FTP Connector"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)("img",{src:(0,s.Z)("/img/Connectors/ftp_write.png")}),";"]}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Fields"}),(0,t.jsx)("th",{children:"Description"}),(0,t.jsx)("th",{children:"Example"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Type"}),(0,t.jsx)("td",{children:"Read/Write"}),(0,t.jsx)("td",{children:"Write"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Datasource Name"}),(0,t.jsxs)("td",{children:["Datasource Name which is configured in connections properties",(0,t.jsx)("a",{href:"/Core Development/Property Config/Connection Properties/DataSource FTP",target:"_blank",children:" Please refer the link for instructions on creating the datasource name"})]}),(0,t.jsx)("td",{children:"ftpcall"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"File Name"}),(0,t.jsx)("td",{children:"Processed File"}),(0,t.jsx)("td",{children:"Contacts"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"File Type"}),(0,t.jsx)("td",{children:"Format of File"}),(0,t.jsx)("td",{children:"CSV"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Input"}),(0,t.jsx)("td",{children:"Input"}),(0,t.jsx)("td",{children:"REQUEST_PAYLOAD"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Append/OverWrite"}),(0,t.jsx)("td",{children:'Select "append" to add the request or choose "overwrite" to modify the request'}),(0,t.jsx)("td",{children:"Append"})]})]})]})]})}function x(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>i});var t=r(7294);const o={},s=t.createContext(o);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);