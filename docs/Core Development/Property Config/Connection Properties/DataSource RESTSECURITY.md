---
sidebar_position: 7
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# DataSource RESTSECURITY

The RESTDataSource class simplifies fetching data from REST APIs and helps handle caching, request deduplication, and errors while resolving operations.

## Engaging in Practical Implementation

**Open new Project in QuickIntegration Platform, and then follow these steps to get your flow working**

1) Click On the Connection Properties
2) Select the DataSource Type from drop down
3) Provide the Credentials 
4) On the left side of the palette, you'll find the Configured Properties ready to be utilized within your API.

## Type OAUTH

<img src={useBaseUrl('/img/Core Development/Connection properties/aouth.png')} />;

<img src={useBaseUrl('/img/Core Development/Connection properties/TYPE2.png')} />;

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
<td>Type</td>
<td>OAUTH</td>
<td>OAUTH</td>
</tr>
<tr>
<td>Grant Type</td>
<td>Grant Type</td>
<td>password</td>
</tr>
<tr>
<td>Token URL</td>
<td>Token unique identifier used to locate a resource on OAUTH Token</td>
<td>https://...</td>
</tr>
<tr>
<td>Client Id</td>
<td>Client ID means a unique alphanumeric code provided to and used by a customer for identifying each query or reques</td>
<td>abcd...</td>
</tr>
<tr>
<td>Client Secret</td>
<td>A client secret is a secret known only to the OAuth application and the authorization server</td>
<td>ab123...</td>
</tr>
<tr>
<td>User Name</td>
<td>A name that uses for identification purposes when logging </td>
<td>rakhitest@atdev.com</td>
</tr>
<tr>
<td>Password</td>
<td>A password is a string of characters used to verify the identity of a user during the authentication process</td>
<td>abc...</td>
</tr>
<tr>
<td>DataSource Name</td>
<td>Datasource Name which is configured in connections properties</td>
<td>sfdcoauth</td>
</tr>
<tr>
<td>DataSource Type</td>
<td>RESTSECURITY</td>
<td>RESTSECURITY</td>
</tr>
<tr>
<td>Environment</td>
<td>Provides a production environment where you can deploy applications and APIs publicly</td>
<td>dev</td>
</tr>
</tbody>
</table>


## Type API-KEY

<img src={useBaseUrl('/img/Core Development/Connection properties/Rest_key Type.png')} />;

<img src={useBaseUrl('/img/Core Development/Connection properties/RESTSECURITY.png')} />;

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
<td>Type</td>
<td>API-KEY</td>
<td>API-KEY</td>
</tr>
<tr>
<td>Name</td>
<td>Name</td>
<td>Authorization</td>
</tr>
<tr>
<td>Value</td>
<td>Value</td>
<td>abc...</td>
</tr>
<tr>
<td>DataSource Name</td>
<td>Datasource Name which is configured in connections properties</td>
<td>oktasecurity</td>
</tr>
<tr>
<td>DataSource Type</td>
<td>RESTSECURITY</td>
<td>RESTSECURITY</td>
</tr>
<tr>
<td>Environment</td>
<td>Provides a production environment where you can deploy applications and APIs publicly</td>
<td>dev</td>
</tr>
</tbody>
</table>

## Type Basic

<img src={useBaseUrl('/img/Core Development/Connection properties/TYPE1.png')} />;

<img src={useBaseUrl('/img/Core Development/Connection properties/Rest_Basic.png')} />;

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
<td>Type</td>
<td></td>
<td></td>
</tr>
<tr>
<td>Username</td>
<td></td>
<td></td>
</tr>
<tr>
<td>Password</td>
<td></td>
<td></td>
</tr>
<tr>
<td>DataSource Name</td>
<td>Datasource Name which is configured in connections properties</td>
<td>oktasecurity</td>
</tr>
<tr>
<td>DataSource Type</td>
<td>RESTSECURITY</td>
<td>RESTSECURITY</td>
</tr>
<tr>
<td>Environment</td>
<td>Provides a production environment where you can deploy applications and APIs publicly</td>
<td>dev</td>
</tr>
</tbody>
</table>