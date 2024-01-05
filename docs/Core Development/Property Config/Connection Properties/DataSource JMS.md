---
sidebar_position: 2
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# DataSource JMS 

The JMS DataSource (Java Message Service) facilitates message transmission and reception to queues and topics across any message service conforming to the JMS specification. JMS serves as a widely adopted API for message-oriented middleware, allowing loosely coupled, reliable, and asynchronous communication between various components of distributed applications

### Practical Scenarios for Using the DataSource
### The JMS DataSource allows you to

1) Listen for new messages as they arrive at a specified destination.

2) Publish a new message and send it to a specified destination.

3) Consume a message at any given time in the flow from any given specified destination.

4) Publish a message to any specified destination, and then consume a reply on a different specified destination

# JMS supports two models for messaging:

### Point-to-point queues

Within the point-to-point queuing model, a sender dispatches messages to a specific queue, and a receiver retrieves those messages from the identical queue. In this framework, the sender possesses the knowledge of the message's destination and delivers the message directly to that destination.

1) Only one receiver consumes the received message.

2) The sender does not need to be running at the time the receiver consumes the message, and the receiver does not need to be running at the time the message is sent.

3) Every message that is successfully processed is acknowledged by the receiver.

### Publish and subscribe topics

The publish and subscribe model allows a sender to publish messages to a specific message topic instead of a particular queue. Receivers subscribe to receive messages from a designated message topic. In this model, neither the sender nor the receiver has awareness of each other. A suitable analogy for this concept is an anonymous bulletin board.

1) Multiple receivers consume the receive the message, including none if there are no subscribers to the topic.

2) The sender must create a message topic in such a way that receivers can subscribe to that topic.

3) The receiver must remain continuously active to consume the receive messages, unless it has established a durable subscription in which case messages sent while the receiver is not connected are redistributed when the receiver reconnects.

## Engaging in Practical Implementation

**Open new Project in QuickIntegration Platform, and then follow these steps to get your flow working**

1) Click On the Connection Properties
2) Select the DataSource Type from drop down
3) Provide the Credentials 
4) Click on Submit to save the Credentials
5) On the left side of the palette, you'll find the Configured Properties ready to be utilized within your API.

<img src={useBaseUrl('/img/Core Development/Connection properties/JMS1.png')} />;

<img src={useBaseUrl('/img/Core Development/Connection properties/JMS.png')} />;

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
<td>DataSource Name</td>
<td>Datasource Name which is configured in connections properties</td>
<td>schdulemsgds</td>
</tr>
<tr>
<td>DataSource Type</td>
<td>JMS</td>
<td>JMS</td>
</tr>
<tr>
<td>Environment</td>
<td>Provides a production environment where you can deploy applications and APIs publicly</td>
<td>dev</td>
</tr>
<tr>
<td>JMS Type</td>
<td>RABBITMQ/ACTIVEMQ</td>
<td>RABBITMQ</td>
</tr>
<tr>
<td>Virtual Host</td>
<td></td>
<td>/</td>
</tr>
<tr>
<td>Host</td>
<td>A hostname is a domain name assigned to a host computer</td>
<td>abcd</td>
</tr>
<tr>
<td>Port</td>
<td>A port is a virtual point where network connections start and end.</td>
<td>123</td>
</tr>
<tr>
<td>User Name</td>
<td>A name that uses for identification purposes when logging </td>
<td>integration</td>
</tr>
<tr>
<td>Password</td>
<td>A password is a string of characters used to verify the identity of a user during the authentication process</td>
<td>abcd</td>
</tr>
</tbody>
</table>