---
sidebar_position: 2
---

import { Badge } from "@site/src/components/custom";
import { Image } from '@site/src/components/custom';

The Exchange backend uses REST Connect to transparently convert a REST API specification to a QuickIntegration connector. 
Security Scheme Support

:::note
- If *Content-Type* is not provided in header default is set to *text/plain*.
:::

### This supports the following security schemes:

1. Basic Authentication
2. OAuth 2.0 Client Credentials
3. OAuth 2.0 Authorization Code

If the operations defined in your API specification support multiple security schemes, the one that comes first in the list of supported schemes is selected.

### Supported Operations

It supports the following operations:

1. <Badge cls="info" method="GET" />
2. <Badge cls="success" method="POST" />
3. <Badge cls="warning" method="PUT" /> / <Badge cls="success" method="PATCH" />
4. <Badge cls="danger" method="DELETE" />

### Configuration

1. Drag and drop the **REST Connector**

<Image src="/img/Core Development/Connectors/Rest/element.png" alt="REST connector" />

1. Left click on connector, now you can define the **REST Connector** configuration
2. Click on the add button to add queryparam, pathparam and headers as key and value pair respectively.

<Image cls="border mb-2" src="/img/Core Development/Connectors/Rest/config.png" alt="Connector Configuration" />

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
            <td>sfdcconnection</td>
        </tr>
        <tr>
            <td>Method</td>
            <td>Formats like GET, POST, DELETE, etc</td>
            <td><Badge cls="danger" method="DELETE" /></td>
        </tr>
        <tr>
            <td>Base Path</td>
            <td>Resouece Path</td>
            <td>
                ```
                services/data/v55.0/sobjects/Contact/:Id
                ```
            </td>
        </tr>
        <tr>
            <td>Security</td>
            <td>To be Defined in the properties like Basic Authentication, OAuth token, Authorization Code, etc </td>
            <td>sfdcoauth</td>
        </tr>
        <tr>
            <td>Output Variable</td>
            <td>Stores output of connections operations</td>
            <td>delcontactO</td>
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
            <td>$PATH_PARAMS.Id</td>
            <td>Define the parameters which are comming as part of URI</td>
        </tr>
        <tr>
            <td>headers</td>
            <td>Content-Type</td>
            <td>application/json</td>
            <td>Headers which are comming with the request </td>
        </tr>
    </tbody>
</table>

#### Input payload has to be provided for all the methods except GET and DELETE.

<Image cls="border mb-2" src="/img/Core Development/Connectors/Rest/postConfig.png" alt="Method POST/PUT configuration" />
