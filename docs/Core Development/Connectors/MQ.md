---
sidebar_position: 3
slug: "mq-connector"
sidebar_label: "MQ"
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
To perform write operation on MQ, provide queue name and input payload.

<img src={useBaseUrl('/img/Connectors/JMS/JMS_config.png')} />;

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
<td>Datasource Name which is configured in connections properties</td>
<td>sampleds</td>
</tr>
<tr>
<td>Queue Name</td>
<td>Name of the queue</td>
<td>sample</td>
</tr>
<tr>
<td>Input</td>
<td>Input to the connectors</td>
<td>TransformedOutput</td>
</tr>
</tbody>
</table>


## Read MQ Operation
To perform read operation on MQ, provide queue name and output payload. Please select operation(MOVE or DELETE) to define further course of action for the message read from the queue.

<img src={useBaseUrl('/img/Connectors/MQ_Read_config.png')} />;

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
<td>Datasource Name which is configured in connections properties<a href="/Core Development/Property Config/Connection Properties/DataSource JMS"target="_blank"> Please refer the link for instructions on creating the datasource name</a></td>
<td>sampleds</td>
</tr>
<tr>
<td>Queue Name</td>
<td>Name of the Queue</td>
<td>sample</td>
</tr>
<tr>
<td>Output</td>
<td>Output</td>
<td></td>
</tr>
<tr>
<td>Operation</td>
<td>What Operations we want to perform using MQ connectors</td>
<td>Rest_output</td>
</tr>
</tbody>
</table>

<img src={useBaseUrl('/img/Connectors/JMS/JMS_properties.png')} />;
