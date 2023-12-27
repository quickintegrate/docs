import useBaseUrl from '@docusaurus/useBaseUrl';


Quickintegrate platform supports **REST API** development using HTTP trigger where configurations can be defined such as host, port, uri/query params etc.														


1) When we Login to Quick Integration Platform to get started.

2) Click on **Manage** Option >> **Projects** >> **Create** to create the new project

3) Go to **DEVELOP** >> **Functionality** API

4) Select relevant project and create services in that project

5) Select **REST** triggers in drowndown while creating the flow

6) Once service name is provided, canvas will show up with selected DB **REST** Trigger

#### REST Trigger

<img src={useBaseUrl('/img/Core Development/Rest_trigger.png')} />;

<img src={useBaseUrl('/img/Core Development/Trigger_config/Rest_config.png')} />;

In REST configurations uri and type needs to be defined. Query and Uri parameters can be defined with Uri as below:

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
<td>uri</td>
<td>Resource Path</td>
<td>`contact/{ContactId}`</td>
</tr>
<tr>
<td>type</td>
<td>Methods</td>
<td>GET</td>
</tr>
</tbody>
</table>

`URI parameters are defiened in curly brackets`