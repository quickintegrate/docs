---
sidebar_position: 4
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# File Connector

**File** Connector is used to handle **File**s folders on a local **File** systems

#### File-Connector features:

Ability to read Files
Writing Files to directory
Copy and move Files
Locking File so that no one can access File when the processing is going on
Listing the File and folders mentioned at directory path
Trigger a flow when the new File created or modified
Operation available:

Copy
Create Directory
Delete
List
Move
On New or Updated **File**
Read
Rename
Write

<img src={useBaseUrl('/img/Connectors/FILE_Connector.png')} />;


Here are different instances demonstrating how to access the information within a file and create a file based on a specific structure. Each illustration includes a quickintegration application utilizing DataWeave for both reading and writing files.
**Read File Operation**
**Write File Operation**

### Configuring File Connector
left click on connector, you can define the **File Connector** configration

## Read File Operation
Define configuration for file connector to read a file by selecting operation as Read. Add destination in properties to poll the file.
Provide the file name and select operation(MOVE or DELETE) to define further course of action for the file read from the destination. 

<img src={useBaseUrl('/img/Connectors/Read_File_config.png')} />;

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
<td>File Operation</td>
<td>Read/Write</td>
<td>Read</td>
</tr>
<tr>
<td>Connector</td>
<td>Connector which is configured in connections properties<a href="/Core Development/Property Config/Connection Properties/DataSource FILE"target="_blank"> Please refer the link for instructions on creating the Connector</a></td>
<td>Successrecord</td>
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

## Write File Operation
Define configuration for file connector to write a file by selecting operation as Write. Add destination in properties to write the file.
Provide the file name and file type(XML, JSON etc.). Please select Append to continue write operation in the same file or select OverWrite to overwrite the file every time operation is performed.


<img src={useBaseUrl('/img/Connectors/Write_file_config2.png')} />;

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
<td>File Operation</td>
<td>Read/Write</td>
<td>Write</td>
</tr>
<tr>
<td>Connector</td>
<td>Connector which is configured in connections properties<a href="/Core Development/Property Config/Connection Properties/DataSource FILE"target="_blank"> Please refer the link for instructions on creating the Connector</a></td>
<td>Successrecords</td>
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