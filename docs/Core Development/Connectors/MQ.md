---
sidebar_position: 6
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# MQ Connector

Java Message Service (**JMS Connector**) enables sending and receiving messages to queues and topics for any message service that implements the JMS specification. JMS is a widely used API for message-oriented middleware. It enables the communication between different components of a distributed application to be loosely coupled, reliable, and asynchronous. The main features of **JMS Connector** include:

Publish and subscribe pattern support on any given destination

Listen and reply pattern support on any given destination

Publish and consume pattern support on any given destination, with a fixed or temporary reply queue

Drag and drop the **MQ Connector**

<img src={useBaseUrl('/img/Connectors/JMS_connector.png')} />;

### Configuring MQ Connector
left click on connector, you can define the **MQ Connector** configration

## Write MQ Operation
<img src={useBaseUrl('/img/Connectors/JMS/JMS_config.png')} />;

<table>
<thead>
<tr>
<th>Fields</th>
<th>Descripation</th>
</tr>
</thead>
<tbody>
<tr>
<td>Type</td>
<td>Write</td>
</tr>
<tr>
<td>Datasource Name</td>
<td>sampleds to be defined in properties file</td>
</tr>
<tr>
<td>Queue Name</td>
<td></td>
</tr>
<tr>
<td>Input</td>
<td></td>
</tr>
</tbody>
</table>


## Read MQ Operation
<img src={useBaseUrl('/img/Connectors/MQ_Read_config.png')} />;

<table>
<thead>
<tr>
<th>Fields</th>
<th>Descripation</th>
</tr>
</thead>
<tbody>
<tr>
<td>Type</td>
<td></td>
</tr>
<tr>
<td>Datasource Name</td>
<td></td>
</tr>
<tr>
<td>Queue Name</td>
<td></td>
</tr>
<tr>
<td>Output</td>
<td></td>
</tr>
<tr>
<td>Operation</td>
<td></td>
</tr>
</tbody>
</table>

<img src={useBaseUrl('/img/Connectors/JMS/JMS_properties.png')} />;

