---
sidebar_position: 1
slug: "file-connector"
sidebar_label: "DEFAULT"
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Default file Connector

**Default file** Connector is used to handle **File**s in **AWS S3**

<img src={useBaseUrl('/img/Connectors/FILE_Connector.png')} />

#### Default file-Connector features:

1. Ability to read Files from s3
2. Writing Files to s3
3. Copy and move Files in s3
4. Locking File so that no one can access File when the processing is going on
5. Listing the File and folders mentioned at directory path
6. Trigger a flow when the new File created or modified

#### Operation available:
1. Copy
2. Create Directory
3. Delete
4. List
5. Move
6. On New or Updated **File**
7. Read
8. Rename
9. Write

### Configuring File Connector
left click on connector, you can define the **File Connector** configuration

Here are different instances demonstrating how to access the information within a file and create a file based on a specific structure. Each illustration includes a quickintegration application utilizing DataWeave for both reading and writing files.

### Read File Operation
Select the Default radio button and define configuration for file connector to read a file by selecting operation as Read. Add destination in properties to poll the file.
Provide the file name and select operation(MOVE or DELETE) to define further course of action for the file read from the destination. 

<img src={useBaseUrl('/img/Connectors/Read_File_config.png')} />

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
<td>Type of file connector</td>
<td>File connector to be used for the file operation</td>
<td>Default</td>
</tr>
<tr>
<td>File Operation</td>
<td>Read/Write</td>
<td>Read</td>
</tr>
<tr>
<td>Datasource Name</td>
<td>Datasource name which is configured in connections properties<a href="/Core Development/Property Config/Connection Properties/file-properties"target="_blank"> Please refer the link for instructions on creating the Connector</a></td>
<td>filePath</td>
</tr>
<tr>
<td>File Name/ Full path</td>
<td>Name of the file to be processed</td>
<td>temp</td>
</tr>
<tr>
<td>File Type</td>
<td>Format of File</td>
<td>CSV</td>
</tr>
<tr>
<td>OutPut</td>
<td>Output</td>
<td>readerO</td>
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

## Write File Operation
Define configuration for file connector to write a file by selecting operation as Write. Add destination in properties to write the file.
Provide the file name and file type(XML, JSON etc.). Please select Append to continue write operation in the same file or select OverWrite to overwrite the file every time operation is performed.


<img src={useBaseUrl('/img/Connectors/Write_file_config2.png')} />

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
<td>Type of file connector</td>
<td>File connector to be used for the file operation</td>
<td>Default</td>
</tr>
<tr>
<td>File Operation</td>
<td>Read/Write</td>
<td>Write</td>
</tr>
<tr>
<td>Datasource Name</td>
<td>Datasource Name which is configured in connections properties<a href="/Core Development/Property Config/Connection Properties/file-properties"target="_blank"> Please refer the link for instructions on creating the Connector</a></td>
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