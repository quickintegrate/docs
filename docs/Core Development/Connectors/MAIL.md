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

### Retry
Retry is flag passed on connector nodes, like Mail, to allow the step to be retryable if any exception occurs. It has 2 configurable properties.<br/>
1. maxRetryAttempts: The max number of retries if any exception occurs. max attempts are 3.
2. retryIntervalMillis: The max interval between retries. Max range is 6000ms.

Enable retry by cliking on the **Enable Retry** radio button at the top of the configuration pannel.

<Image src="/img/Connectors/retry.png" alt="PAYLOAD transformer" />