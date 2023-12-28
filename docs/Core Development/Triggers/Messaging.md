import useBaseUrl from '@docusaurus/useBaseUrl';


In order to transform messages quickintegrate platform provides component to make sure swift and efficient **Message transformation**.

>When we Login to Quick Integration Platform to get started.

>Click on **Manage** Option >> **Projects** >> **Create** to create the new project

>Go to **DEVELOP** >> **Functionality** API

>Select relevant project and create services in that project
by cliking **Service** button.

>Select **Messaging** triggers in drowndown while creating the flow

>Once service name is provided, canvas will show up with selected DB **Messaging** Trigger


#### Messaging Trigger

<img src={useBaseUrl('/img/Core Development/Messaging_trigger.png')} />;

<img src={useBaseUrl('/img/Core Development/Trigger_config/msg_config.png')} />;

Right click the tigger node to add the Messaging configurations queueName, channelName, listenerDelay and datasource-name needs to be defined.

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
<td>queueName</td>
<td>Name of the queue</td>
<td>sample</td>
</tr>
<tr>
<td>channelName</td>
<td>Name of Configration define as Global element</td>
<td>orderschannel</td>
</tr>
<tr>
<td>listenerDelay</td>
<td>Duration after which Polling will start once API Started</td>
<td>5000</td>
</tr>
<tr>
<td>datasource-name</td>
<td>Datasource Name which is configured in connections properties</td>
<td>msgds</td>
</tr>
</tbody>
</table>

<img src={useBaseUrl('/img/Core Development/Trigger_config/File_properties1.png')} />;

