---
sidebar_position: 6
slug: "sftp-connector"
sidebar_label: "SFTP"
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# SFTP Connector 

**SFTP** Connector provides access to files and folders on an **SFTP** server. **SFTP** Connector operations manage file transfers over the **SFTP** (Secure File Transfer Protocol) protocol. The Connector’s main features include

The ability to read files or list directory contents on demand

Support for common **SFTP** operations such as creating directories, copying, moving, renaming, and deleting files

Support for locking files

File matching functionality

A design that is consistent with that of File Connector and FTP Connector

The same set of operations is available on these Connectors, and they behave similarly.

Drag and drop the **SFTP Connector**

<img src={useBaseUrl('/img/Connectors/SFTP_connector.png')} />;

### Configuring SFTP Connector
left click on connector, you can define the **SFTP Connector** configration

## Read SFTP Connector

<img src={useBaseUrl('/img/Connectors/sftp_read.png')} />;

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
<td>Read/Write</td>
<td>Read</td>
</tr>
<tr>
<td>Datasource Name</td>
<td>Datasource Name which is configured in connections properties<a href="/Core Development/Property Config/Connection Properties/DataSource SFTP"target="_blank"> Please refer the link for instructions on creating the datasource name</a></td>
<td>sftpcall</td>
</tr>
<tr>
<td>File Name</td>
<td>Name of the file to be processed</td>
<td>Contacts</td>
</tr>
<tr>
<td>File Type</td>
<td>Format of File</td>
<td>CSV</td>
</tr>
<tr>
<td>OutPut</td>
<td>Output</td>
<td>Rest_output</td>
</tr>
<tr>
<td>Operation</td>
<td>Operation of the file</td>
<td>Move</td>
</tr>
</tbody>
</table>

## Write FTP Connector

<img src={useBaseUrl('/img/Connectors/sftp_write.png')} />;


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
<td>Read/Write</td>
<td>Write</td>
</tr>
<tr>
<td>Datasource Name</td>
<td>Datasource Name which is configured in connections properties<a href="/Core Development/Property Config/Connection Properties/DataSource SFTP"target="_blank"> Please refer the link for instructions on creating the datasource name</a></td>
<td>sftpcall</td>
</tr>
<tr>
<td>File Name</td>
<td>Processed File</td>
<td>Contacts</td>
</tr>
<tr>
<td>File Type</td>
<td>Format of File</td>
<td>CSV</td>
</tr>
<tr>
<td>Input</td>
<td>Input</td>
<td>REQUEST_PAYLOAD</td>
</tr>
<tr>
<td>Append/OverWrite</td>
<td>Select "append" to add the request or choose "overwrite" to modify the request</td>
<td>OverWrite</td>
</tr>
</tbody>
</table>