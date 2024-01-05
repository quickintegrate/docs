import useBaseUrl from '@docusaurus/useBaseUrl';


**DB trigger** is available to get the records from DB for newly created records.

>Login to Quick Integration Platform to get started.

>Click on **Manage** Option >> **Projects** >> **Create** to create the new project

>Go to **DEVELOP** >> **Functionality** API

>Select relevant project and create services in that project
by cliking **Service** button.

>Select **DB Event** triggers in drowndown while creating the flow

>Once service name is provided, canvas will show up with selected DB **Event** Trigger

#### DB Event Trigger

<img src={useBaseUrl('/img/Core Development/DB_event_trigger.png')} />;

Right click the tigger node to add the DB configurations channelName, listenerDelay, listnerTable and datasource-name needs to be defined.


<img src={useBaseUrl('/img/Core Development/Trigger_config/DC_event_Config1.png')} />;

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
<td>channelName</td>
<td>Name of Configration define as Global element</td>
<td>customerlistnereventchannel</td>
</tr>
<tr>
<td>listenerDelay(ms)</td>
<td>Duration after which Polling will start once API Started</td>
<td>50000</td>
</tr>
<tr>
<td>listnerTable</td>
<td>DB Table Name</td>
<td>customer_update</td>
</tr>
<tr>
<td>datasource-name</td>
<td><a href="/docs/Core Development/Property Config/Connection Properties/DataSource JDBC">Datasource Name which is configured in connections properties</a></td>
<td>customerds</td>
</tr>
</tbody>
</table>


