---
sidebar_position: 1
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Database Connector

The Database connector establishes connectivity with a wide range of Java Database Connectivity (JDBC) relational Databases, enabling the execution of SQL operations. It allows the utilization of MEL expressions within connector fields and the dynamic configuration of attributes based on the specific Database configuration employed. This flexibility facilitates multi-tenant scenarios by adjusting connection attributes according to the information received from individual requests.

Various query types are supported, including predefined, dynamically constructed, and customizable template queries. Batch updates enable the execution of multiple SQL requests in a single operation, while Data Definition Language (DDL) requests modify the data structure without altering the data itself. The Database connector is an integral part of QuickIntegration.

**To configure the Database connector:**

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

Return Row(s) Multiple

<img src={useBaseUrl('/img/Connectors/Read_DB_query4.png')} />;

Return Row(s) Single

<img src={useBaseUrl('/img/Connectors/DB/read single db.png')} />;

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
<td>Classicmodels</td>
</tr>
<tr>
<td>Return Row(s)</td>
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
Click on the Query Generator icon

<img src={useBaseUrl('/img/Connectors/DB/querryIcon.png')} />;


Choose the table name from the dropdown list to specify the source. We can set a limit on the number of records to retrieve. In the filters section, include conditions for the fields to be used in the query, employing operations such as NULL, NOT NULL, =, !=, etc. Your query will be generated based on these selections

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

When we need to modify records in the database, we can choose the **Write** option from the DB Operations menu. Let's explore how to compose a delete query. Choose the query type as **Delete** from the dropdown list, opt for bulk operation to delete multiple records using a single query, and specify the fields for the delete condition. 


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

<img src={useBaseUrl('/img/Connectors/DB/write no bulk.png')} />;


