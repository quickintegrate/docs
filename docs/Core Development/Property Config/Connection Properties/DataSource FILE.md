---
sidebar_position: 3
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# DataSource FILE

The File DataSource oversees file and folder management within a locally mounted file system, offering the following key features:

Support for essential file operations: create directories, read, write, copy, move, rename, delete, and list files.
Capability to lock files for exclusive access.
Functionality for file matching.
A design that aligns consistently with the FTP DataSource and SFTP DataSource.

## Engaging in Practical Implementation

**Open new Project in QuickIntegration Platform, and then follow these steps to get your flow working**

1) Click On the Connection Properties
2) Select the DataSource Type from drop down
3) Provide the Credentials 
4) Click on Submit to save the Credentials
5) On the left side of the palette, you'll find the Configured Properties ready to be utilized within your API.

<img src={useBaseUrl('/img/Core Development/Connection properties/FILE.png')} />;

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
<td>successrecords</td>
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
<td>URL</td>
<td>A URL (Uniform Resource Locator) is a unique identifier used to locate a resource on the FILE</td>
<td>FILE URL</td>
</tr>
</tbody>
</table>