---
sidebar_position: 2
slug: "rest-connector"
sidebar_label: "REST"
---

import { Badge } from "@site/src/components/custom";
import { Image, Video } from '@site/src/components/custom';

# REST Connector

The Exchange backend uses REST Connect to transparently convert a REST API specification to a QuickIntegration connector.
Security Scheme Support

:::note

- If _Content-Type_ is not provided in header default is set to _text/plain_.
  :::

## Supported Security schemes

1. Basic Authentication
2. OAuth 2.0 Client Credentials
3. OAuth 2.0 Authorization Code

If the operations defined in your API specification support multiple security schemes, the one that comes first in the list of supported schemes is selected.

## Supported Operations

It supports the following operations:

1. <Badge cls="info" method="GET" />
2. <Badge cls="success" method="POST" />
3. <Badge cls="warning" method="PUT" /> / <Badge cls="success" method="PATCH" />
4. <Badge cls="danger" method="DELETE" />

## Configuration

1. Drag and drop the **REST Connector**

<Image src="/img/Core Development/Connectors/Rest/element.png" alt="REST connector" />

2. Left click on connector, now you can define the **REST Connector** configuration
3. Click on the add button to add `queryparam`, `pathparam` and `headers` as key and value pair respectively.

### Autofill using Swagger

1. Upload/Create the swagger on **Define / Swagger** page.
2. Go to **Connection properties** page configure `RESTURL` and select swagger name from dropdown.
3. Now select the datasource from dropdown in connector configuration and click on swagger button that will appear on right hand side of dropdown.
4. Hover over the endpoint that you want to hit and copy icon will appear on right hand side.
5. Click on copy icon to populate rest configurations.

<Video src="/img/Core Development/Connectors/Rest/swaggerAutofill.mp4" type="video/mp4" />

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
            <td>Datasource Name which is configured in connection properties.
                <a href="/Core Development/Property Config/Connection Properties/rest-url-properties" target="_blank"> Please refer the link for instructions on creating the datasource name.</a></td>
            <td>sfdcconnection</td>
        </tr>
        <tr>
            <td>Method</td>
            <td>Formats like GET, POST, DELETE, etc.</td>
            <td><Badge cls="success" method="POST" /></td>
        </tr>
        <tr>
            <td>Base Path</td>
            <td>Resouece Path</td>
            <td>
                ```
                /services/data/v32.0/sobjects/Account
                ```
            </td>
        </tr>
        <tr>
            <td>Security</td>
            <td>To be Defined in the properties like Basic Authentication, OAuth token, Authorization Code, etc.
                <a href="/Core Development/Property Config/Connection Properties/rest-security-properties" target="_blank"> Please refer the link for instructions for applying security to rest.</a></td>
            <td>sfdcauth</td>
        </tr>
        <tr>
            <td>Input / Body</td>
            <td>Request body / data to be passed to rest call which can come from `$REQUEST_PAYLOAD` or previous step output variable or from static template.</td>
            <td>$dataO</td>
        </tr>
        <tr>
            <td>Output Variable</td>
            <td>Stores output of connections operations.</td>
            <td>postAccountO</td>
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
            <td>headers</td>
            <td>Content-Type</td>
            <td>application/json</td>
            <td>Headers which are comming with the request </td>
        </tr>
    </tbody>
</table>

### Manual

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
            <td>Datasource Name</td>
            <td>Datasource Name which is configured in connection properties.
                <a href="/Core Development/Property Config/Connection Properties/rest-url-properties" target="_blank"> Please refer the link for instructions on creating the datasource name</a></td>
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
            <td>To be Defined in the properties like Basic Authentication, OAuth token, Authorization Code, etc.
                <a href="/Core Development/Property Config/Connection Properties/rest-security-properties" target="_blank"> Please refer the link for instructions for applying security to rest.</a></td>
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
