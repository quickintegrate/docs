import useBaseUrl from '@docusaurus/useBaseUrl';


**File trigger** is available to pick up file from a FTP or SFTP location for further processing.

>When we Login to Quick Integration Platform to get started.

>Click on **Manage** Option >> **Projects** >> **Create** to create the new project

>Go to **DEVELOP** >> **Functionality** API

>Select relevant project and create services in that project

>Select File triggers in drowndown while creating the flow

>Once service name is provided, canvas will show up with selected **File** Trigger

#### File Trigger

<img src={useBaseUrl('/img/Core Development/File_trigger.png')} />;

<img src={useBaseUrl('/img/Core Development/Trigger_config/File_config.png')} />;

In File configurations operation, sourcePath, channelName, filePattern(drop-down list with patterns such as CSV, JSON etc.), listenerDelay and destinationPath(to be defined in properties file) needs to be defined.

<img src={useBaseUrl('/img/Core Development/file pattern.png')}/>;

<table>
<thead>
<tr>
<th>Fields</th>
<th>Descripation</th>
</tr>
</thead>
<tbody>
<tr>
<td>operation</td>
<td></td>
</tr>
<tr>
<td>sourcePath</td>
<td></td>
</tr>
<tr>
<td>channelName</td>
<td></td>
</tr>
<tr>
<td>filePattern</td>
<td></td>
</tr>
<tr>
<td>listenerDelay</td>
<td></td>
</tr>
<tr>
<td>destinationPath</td>
<td></td>
</tr>
</tbody>
</table>


<img src={useBaseUrl('/img/Core Development/Trigger_config/File_properties1.png')} />;
