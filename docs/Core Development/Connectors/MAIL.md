---
sidebar_position: 9
slug: "mail-connector"
sidebar_label: "MAIL"
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Mail Connector 
The Email Connector provides a connection to your email server

Drag and drop the **Mail Connector**

<img src={useBaseUrl('/img/Connectors/MAIL_connector.png')} />;


### Configuring Mail Connector
left click on connector, you can define the **Mail Connector** configration

<img src={useBaseUrl('/img/Connectors/mail config.png')} />;

<table>
<thead>
<tr>
<th>Fields</th>
<th>Description</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>Datasource Name</td>
<td>Datasource Name which is configured in connections properties<a href="/Core Development/Property Config/Connection Properties/DataSource MAIL"target="_blank"> Please refer the link for instructions on creating the datasource name</a></td>
<td>officalmail</td>
</tr>
<tr>
<td>To</td>
<td>Whom should the mail be delivered to</td>
<td>Atdevservicesdemo@gmail.com</td>
</tr>
<tr>
<td>Subject</td>
<td>The subject of the email intended for delivery</td>
<td>Test</td>
</tr>
<tr>
<td>Input</td>
<td>Input</td>
<td>REQUEST_PAYLOAD</td>
</tr>
</tbody>
</table>