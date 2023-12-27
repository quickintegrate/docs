---
sidebar_position: 1
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Database Connector

The Database connector establishes connectivity with a wide range of Java Database Connectivity (JDBC) relational Databases, enabling the execution of SQL operations. It allows the utilization of MEL expressions within connector fields and the dynamic configuration of attributes based on the specific Database configuration employed. This flexibility facilitates multi-tenant scenarios by adjusting connection attributes according to the information received from individual requests.

Various query types are supported, including predefined, dynamically constructed, and customizable template queries. Batch updates enable the execution of multiple SQL requests in a single operation, while Data Definition Language (DDL) requests modify the data structure without altering the data itself. The Database connector is an integral part of QuickIntegration.

To configure the Database connector:

Define your Database’s location and connection details.
Configure the operation you wish to perform.
Include the query to execute on the Database.

## Supported Operations:
The Database connector offers support for the following operations:

1) Select

2) Insert

3) Update

4) Delete

Drag and drop the **DB Connector**

<img src={useBaseUrl('/img/Core Development/DB/DB_connector.png')} />;

### Configuring Database Connector
left click on connector, you can define the **DB Connector** configration

## Read DB Operation

<img src={useBaseUrl('/img/Connectors/Read_DB_query4.png')} />;

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
<td>DB Operation</td>
<td>Read/Write</td>
<td>Read</td>
</tr>
<tr>
<td>Datasource Name</td>
<td>Datasource Name which is configured in connections properties</td>
<td>lassicmodels</td>
</tr>
<tr>
<td>Return Roe(s)</td>
<td>Single/Multiple</td>
<td>Multiple</td>
</tr>
<tr>
<td>Output Variable</td>
<td>Stores output of connections operations</td>
<td>MultiCustomers</td>
</tr>
<tr>
<td>Query</td>
<td>Data Base Query</td>
<td>SELECT * FROM customers WHERE city =:city</td>
</tr>
</tbody>
</table>

#### Let see how to write the query using quickintegration with few clicks
Click on the Querry Generator icon

<img src={useBaseUrl('/img/Connectors/DB/querryIcon.png')} />;


Select the table Name from the Droup down list, we can limit the number of records To be retrieved
In filters add the condition for fields use in the query with the help of operation like NULL, NOT NULL, =, !=, etc
Your Generated Query will get Created.

<img src={useBaseUrl('/img/Connectors/Read_DB_query1.png')} />;

<img src={useBaseUrl('/img/Connectors/Read_DB_query2.png')} />;

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
<td>Table Name</td>
<td>Data Base Table Name</td>
<td>Customers</td>
</tr>
<tr>
<td>Your Generated Query is</td>
<td>Data Base Query</td>
<td>SELECT * FROM customers WHERE city =:city</td>
</tr>
<tr>
<td>Filters(Fields)</td>
<td>Perticular field where DB will Operate</td>
<td>city</td>
</tr>
<tr>
<td>Filters(Operation)</td>
<td>Operations like NULL, NOT NULL, =, !=, etc</td>
<td>=</td>
</tr>
</tbody>
</table>


## Write DB Operation

<img src={useBaseUrl('/img/Connectors/Write_DB_config.png')} />;

When we have to perform Operations to modify records in the DB We can select **Write** From DB Operations,
Let see how to write a delete query.
Select the query Type **Delete** from the dropdown list, selet bulk operation to delete multiple records using single query and define fields for the delete condition.  

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
<td>DB Operation</td>
<td>Read/Write</td>
<td>Write</td>
</tr>
<tr>
<td>Datasource Name</td>
<td>Datasource Name which is configured in connections properties</td>
<td>classicmodels</td>
</tr>
<tr>
<td>Query Type(s)</td>
<td>Methods like GET, POST, DELETE, etc</td>
<td>DELETE</td>
</tr>
<tr>
<td>Parent</td>
<td>Defined by Using $ key word</td>
<td>$MultiCustomers</td>
</tr>
</tbody>
</table>

