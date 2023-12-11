---
sidebar_position: 2
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# REST Connect Connector

The Exchange backend uses REST Connect to transparently convert a REST API specification to a QuickIntegration connector. 
Security Scheme Support


### REST Connect supports these security schemes:

**Basic Authentication**

**OAuth 2.0 Client Credentials**

**OAuth 2.0 Authorization Code**

If the operations defined in your API specification support multiple security schemes, the one that comes first in the list of supported schemes is selected.

### Supported Operations

The Rest connector supports the following operations:

1) GET

2) POST

3) PUT,PATCH

4) DELETE

Drag and drop the **REST Connector**

<img src={useBaseUrl('/img/Connectors/Rest/Rest_conector.png')} />;

### Configuring REST Connector
left click on connector, you can define the **REST Connector** configration

<img src={useBaseUrl('/img/Connectors/Rest/Rest_config.png')} />;

<table>
<thead>
<tr>
<th>Fields</th>
<th>Descripation</th>
</tr>
</thead>
<tbody>
<tr>
<td>Http URL</td>
<td></td>
</tr>
<tr>
<td>Method</td>
<td></td>
</tr>
<tr>
<td>Base Path</td>
<td></td>
</tr>
<tr>
<td>Security</td>
<td></td>
</tr>
<tr>
<td>Output Variable</td>
<td></td>
</tr>
</tbody>
</table>

<img src={useBaseUrl('/img/Connectors/Rest_PostConfig.png')} />;
