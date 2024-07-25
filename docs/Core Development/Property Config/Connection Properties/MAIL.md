---
sidebar_position: 6
slug: "mail-properties"
sidebar_label: "MAIL"
---

import { Image } from '@site/src/components/custom';

# DataSource MAIL

Email (Email DataSource) sends and retrieves email messages over standard email protocols. Email DataSource configurations share a basic set of parameters that require a connection over the protocols you use.

`For compatibility information and fixed issues, see the Email Connector Release Notes`

## Engaging in Practical Implementation

**Open new Project in QuickIntegration Platform, and then follow these steps to get your flow working**

1) Click On the Connection Properties
2) Select the DataSource Type from drop down
3) Provide the Credentials 
4) Click on Submit to save the Credentials
5) On the left side of the palette, you'll find the Configured Properties ready to be utilized within your API.

<Image cls="border mb-2" src="/img/Core Development/Connection properties/mail.png" alt="MAIL configuration" />

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
            <td>DataSource Name</td>
            <td>Datasource Name which is configured in connections properties</td>
            <td>officalmail</td>
        </tr>
        <tr>
            <td>DataSource Type</td>
            <td>MAIL</td>
            <td>MAIL</td>
        </tr>
        <tr>
            <td>Environment</td>
            <td>Provides a production environment where you can deploy applications and APIs publicly</td>
            <td>dev</td>
        </tr>
        <tr>
            <td>Host</td>
            <td>A hostname is a domain name assigned to a host computer</td>
            <td>&lt;server-host&gt;</td>
        </tr>
        <tr>
            <td>Connection Timeout</td>
            <td>The maximum amount of time the email client or server will wait to establish a connection with the mail server before giving up</td>
            <td>60000 (ms)</td>
        </tr>
        <tr>
            <td>Port</td>
            <td>A port is a virtual point where network connections start and end.</td>
            <td>587</td>
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
    </tbody>
</table>