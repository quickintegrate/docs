---
sidebar_position: 3
slug: "file-properties"
sidebar_label: "FILE"
---

import { Image } from '@site/src/components/custom';

# DataSource FILE

The File DataSource oversees file and folder management within a locally mounted file system, offering the following key features:

1. Support for essential file operations: create directories, read, write, copy, move, rename, delete, and list files.
2. Capability to lock files for exclusive access.
3. Functionality for file matching.
4. A design that aligns consistently with the FTP DataSource and SFTP DataSource.

## Engaging in Practical Implementation

**Open new Project in QuickIntegration Platform, and then follow these steps to get your flow working**

1) Click On the Connection Properties
2) Select the DataSource Type from drop down
3) Provide the Credentials 
4) Click on Submit to save the Credentials
5) On the left side of the palette, you'll find the Configured Properties ready to be utilized within your API.

<Image cls="border mb-2" src="/img/Core Development/Connection properties/FILE.png" alt="FILE configuration" />

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
            <td>fileds</td>
        </tr>
        <tr>
            <td>DataSource Type</td>
            <td>FILE</td>
            <td>FILE</td>
        </tr>
        <tr>
            <td>Environment</td>
            <td>Provides a production environment where you can deploy applications and APIs publicly</td>
            <td>dev</td>
        </tr>
        <tr>
            <td>Connection Timeout</td>
            <td>Time period allowed for establishing a connection to the server</td>
            <td>60000 (ms)</td>
        </tr>
        <tr>
            <td>Read Timeout</td>
            <td>Time period allowed for receiving a response from the server after the request is sent</td>
            <td>60000 (ms)</td>
        </tr>
        <tr>
            <td>Bucket Name</td>
            <td>Unique identifier for a storage container in Amazon S3</td>
            <td>&lt;bucket-name&gt;</td>
        </tr>
        <tr>
            <td>Region</td>
            <td>Geographical location where Amazon S3 resources are hosted</td>
            <td>&lt;region&gt;</td>
        </tr>
        <tr>
            <td>Access Key</td>
            <td>Identifier used to authenticate requests to Amazon S3</td>
            <td>&lt;access-key&gt;</td>
        </tr>
        <tr>
            <td>Secret Key</td>
            <td>Confidential credential used in conjunction with the access key to sign requests to Amazon S3</td>
            <td>&lt;secret-key&gt;</td>
        </tr>
    </tbody>
</table>