---
sidebar_position: 5
slug: "sftp-properties"
sidebar_label: "SFTP"
---

import { Image } from '@site/src/components/custom';

# DataSource SFTP

The SFTP DataSource grants access to files and directories housed within an SFTP server. It proficiently handles file transfers using the Secure File Transfer Protocol (SFTP), showcasing the following key features:

1) Reading files or generating directory contents upon request.
2) Supporting common SFTP operations: directory creation, file copying, moving, renaming, and deletion.
3) Enabling file locking functionality.
4) Providing capabilities for file matching.
5) Maintaining a design that aligns with the File DataSource and FTP DataSource.
   
## Engaging in Practical Implementation

**Open new Project in QuickIntegration Platform, and then follow these steps to get your flow working**

1) Click On the Connection Properties
2) Select the DataSource Type from drop down
3) Provide the Credentials 
4) Click on Submit to save the Credentials
5) On the left side of the palette, you'll find the Configured Properties ready to be utilized within your API.

<Image cls="border mb-2" src="/img/Core Development/Connection properties/SFTP.png" alt="SFTP configuration" />

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
            <td>sftpcall</td>
        </tr>
        <tr>
            <td>DataSource Type</td>
            <td>SFTP</td>
            <td>SFTP</td>
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
            <td>The maximum amount of time the client or server will wait for a response from the other side before terminating the connection</td>
            <td>60000 (ms)</td>
        </tr>
        <tr>
            <td>Port</td>
            <td>A port is a virtual point where network connections start and end.</td>
            <td>22</td>
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