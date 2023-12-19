import useBaseUrl from '@docusaurus/useBaseUrl';


For **Scheduler** based APIs quickintegrate development kit has **Scheduler Trigger** which can be used for cron or frequency based triggers.


>When we Login to Quick Integration Platform to get started.

>Click on **Manage** Option >> **Projects** >> **Create** to create the new project

>Go to **DEVELOP** >> **Functionality** API

>Select relevant project and create services in that project

>Select **Scheduler** triggers in drowndown while creating the flow

>Once service name is provided, canvas will show up with selected DB **Scheduler** Trigger

#### Scheduler Trigger
<img src={useBaseUrl('/img/Core Development/Scheduling_trigger.png')} />;

<img src={useBaseUrl('/img/Core Development/Trigger_config/SCH_config.png')} />;

In Scheduler configurations initialDelay and scheduleDelay needs to be defined. 

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
<td>initialDelay</td>
<td>Duration after which Polling will start once API Started</td>
<td>1000</td>
</tr>
<tr>
<td>scheduleDelay</td>
<td>Plooing Frequency</td>
<td>5000</td>
</tr>
</tbody>
</table>