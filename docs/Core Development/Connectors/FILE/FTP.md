---
sidebar_position: 5
slug: "ftp-connector"
sidebar_label: "FTP"
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# FTP Connector


Provides access to files and folders on an **FTP** server. **FTP** Connector operations manage file transfers by using File Transfer Protocol (**FTP**). The Connector’s main features include:

1) The ability to read files or fully list directory contents on demand.

2) Support for common ****FTP**** operations such as creating directories and copying, moving, renaming, and deleting files.

3) Support for locking files.

4) File matching functionality.

A design that is consistent with the **File** and ****FTP**** Connectors.

The same set of operations is available using these two Connectors, and they behave similarly.

### Configuring FTP Connector

Follow these steps to set up and test a connection to your **FTP**  by creating a reusable global variable for the **FTP** Connector to reference.

Drag and drop the **FTP Connector**

<img src={useBaseUrl('/img/Connectors/FTP_connector.png')} />;

### Configuring FTP Connector
left click on connector, you can define the **FTP Connector** configration

## Read FTP Connector

<img src={useBaseUrl('/img/Connectors/ftp_read.png')} />;

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
<td>Datasource Name which is configured in connections properties<a href="/Core Development/Property Config/Connection Properties/ftp-properties"target="_blank"> Please refer the link for instructions on creating the datasource name</a></td>
<td>ftpcall</td>
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
<tr>
<td>Destination</td>
<td>Local destination file path</td>
<td>/app/Schemas/Customers</td>
</tr>
</tbody>
</table>

## Write FTP Connector

<img src={useBaseUrl('/img/Connectors/ftp_write.png')} />;


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
<td>Datasource Name which is configured in connections properties<a href="/Core Development/Property Config/Connection Properties/ftp-properties"target="_blank"> Please refer the link for instructions on creating the datasource name</a></td>
<td>ftpcall</td>
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
<td>Append</td>
</tr>
</tbody>
</table>