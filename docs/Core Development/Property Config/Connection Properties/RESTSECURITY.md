---
sidebar_position: 7
slug: "rest-security-properties"
sidebar_label: "RESTSECURITY"
---

import { Image } from '@site/src/components/custom';

# DataSource RESTSECURITY

The RESTSecurity DataSource class streamlines the retrieval of data from REST APIs. It assists in managing caching, deduplicating requests, and handling errors during the resolution of operations

## Engaging in Practical Implementation

**Open new Project in QuickIntegration Platform, and then follow these steps to get your flow working**

1) Click On the Connection Properties
2) Select the DataSource Type from dropdown
3) Provide the Credentials 
4) Click on Submit to save the Credentials
5) On the left side of the palette, you'll find the Configured Properties ready to be utilized within your API.

## Security Types

### OAUTH

<Image cls="border mb-2" src="/img/Core Development/Connection properties/oauth.png" alt="OAUTH security configuration" />

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
            <td>&lt;server-url&gt;</td>
        </tr>
        <tr>
            <td>Client Id</td>
            <td>Client ID means a unique alphanumeric code provided to and used by a customer for identifying each query or reques</td>
            <td>&lt;server-client-id&gt;</td>
        </tr>
        <tr>
            <td>Client Secret</td>
            <td>A client secret is a secret known only to the OAuth application and the authorization server</td>
            <td>&lt;server-client-secret&gt;</td>
        </tr>
        <tr>
            <td>User Name</td>
            <td>A name that uses for identification purposes when logging </td>
            <td>&lt;server-username&gt;</td>
        </tr>
        <tr>
            <td>Password</td>
            <td>A password is a string of characters used to verify the identity of a user during the authentication process</td>
            <td>&lt;server-password&gt;</td>
        </tr>
        <tr>
            <td>DataSource Name</td>
            <td>Datasource Name which is configured in connections properties</td>
            <td>restsecds</td>
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

### API-KEY

<Image cls="border mb-2" src="/img/Core Development/Connection properties/apiKey.png" alt="API-KEY security configuration" />

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
            <td>&lt;server-key&gt;</td>
        </tr>
        <tr>
            <td>Value</td>
            <td>Value</td>
            <td>&lt;server-value&gt;</td>
        </tr>
        <tr>
            <td>DataSource Name</td>
            <td>Datasource Name which is configured in connections properties</td>
            <td>restsecds</td>
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

### BASIC auth

<Image cls="border mb-2" src="/img/Core Development/Connection properties/basic.png" alt="BASIC auth security configuration" />

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
            <td>Basic</td>
            <td>Basic</td>
        </tr>
        <tr>
            <td>Username</td>
            <td>The name of the User</td>
            <td>&lt;server-username&gt;</td>
        </tr>
        <tr>
            <td>Password</td>
            <td>Unique secured key </td>
            <td>&lt;server-password&gt;</td>
        </tr>
        <tr>
            <td>DataSource Name</td>
            <td>Datasource Name which is configured in connections properties</td>
            <td>restsecds</td>
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