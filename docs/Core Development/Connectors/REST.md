---
sidebar_position: 2
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# REST Connector

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

Click on the add button to add queryparam, pathparam and headers as key and values respectively.

<img src={useBaseUrl('/img/Connectors/Rest/Rest_config.png')} />;

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
<td>Http URL</td>
<td>URL by which the API will be called</td>
<td>sfdcconnect</td>
</tr>
<tr>
<td>Method</td>
<td>Formats like GET, POST, DELETE, etc</td>
<td>DELETE</td>
</tr>
<tr>
<td>Base Path</td>
<td>Resouece Path</td>
<td>services/data/v55.0/sobjects/Contact/:Id</td>
</tr>
<tr>
<td>Security</td>
<td>To be Defined in the properties like Basic Authentication, OAuth token, Authorization Code, etc </td>
<td>sfdcoauth</td>
</tr>
<tr>
<td>Output Variable</td>
<td>Stores output of connections operations</td>
<td>Rest_output</td>
</tr>
</tbody>
</table>


<table>
<thead>
<tr>
<th>Type</th>
<th>Key</th>
<th>Value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>pathparams</td>
<td>Id</td>
<td>$PATH_PARAMS.ContactId</td>
<td></td>
</tr>
<tr>
<td>headers</td>
<td>Content-Type</td>
<td>application/json</td>
<td></td>
</tr>
</tbody>
</table>

#### Input paylad has to be provided for all the methods except GET and DELETE.


<img src={useBaseUrl('/img/Connectors/Rest_PostConfig.png')} />;
