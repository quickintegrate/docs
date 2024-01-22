import useBaseUrl from '@docusaurus/useBaseUrl';


**File trigger** is available to pick up file from a FTP or SFTP location for further processing.

>When we Login to Quick Integration Platform to get started.

>Click on **Manage** Option >> **Projects** >> **Create** to create the new project

>Go to **DEVELOP** >> **Functionality** API

>Select relevant project and create services in that project
by cliking **Service** button.

>Select File triggers in drowndown while creating the flow

>Once service name is provided, canvas will show up with selected **File** Trigger

#### File Trigger

<img src={useBaseUrl('/img/Core Development/File_trigger.png')} />;

<img src={useBaseUrl('/img/Core Development/Trigger_config/File_config.png')} />;

Right click the tigger node to add the File configurations operation, sourcePath, channelName, filePattern(drop-down list with patterns such as CSV, JSON etc.), listenerDelay and destinationPath(to be defined in properties file) needs to be defined.

<img src={useBaseUrl('/img/Core Development/file pattern.png')}/>;

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
<td>operation</td>
<td>What Operations we want to perform using File connectors</td>
<td>Move</td>
</tr>
<tr>
<td>sourcePath</td>
<td>Source path of the file</td>
<td>/home/dev/git/integration.io/Source/Customers</td>
</tr>
<tr>
<td>channelName</td>
<td>Name of Configration define as Global element</td>
<td>ReadFileChannel</td>
</tr>
<tr>
<td>filePattern</td>
<td>Format of the file like Json,XML,CSV,etc</td>
<td>CSV</td>
</tr>
<tr>
<td>listenerDelay</td>
<td>Duration after which Polling will start once API Started</td>
<td>5000</td>
</tr>
<tr>
<td>destinationPath</td>
<td>The Path where Processed file will be stored</td>
<td><a href="/docs/Core Development/Property Config/Connection Properties/DataSource FILE"target="_blank"> Datasource Destination which is configured in connections properties</a></td>
</tr>
</tbody>
</table>


<img src={useBaseUrl('/img/Core Development/Trigger_config/File_properties1.png')} />;
