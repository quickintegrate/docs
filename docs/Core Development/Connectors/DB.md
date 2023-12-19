---
sidebar_position: 1
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Database Connector

The **Database** connector can connect to almost any Java **Database** Connectivity (JDBC) relational **Database** and run SQL operations. You can specify MEL expressions in connector fields and configure attributes dynamically, depending on the **Database** configuration you use. An application can support multi-tenant scenarios using the same configuration element, changing the connection attributes based on, for example, information coming from each request.

You can perform predefined queries, dynamically constructed queries, and template queries that are self-sufficient and customizable. You can perform multiple SQL requests in a single bulk update and make Data Definition Language (DDL) requests that alter the data structure rather than the data itself. The **Database** connector is available with QuickIntegration.

### Basic Setup Steps

1) Configure a **Database** connector where you define:
2) Your **Database**’s location and connection details
3) You may need to add your **Database** driver as a dependency to your app for the connector to work.
4) Advanced connection parameters such as connection pooling
5) Configure the operation:
6) Contains the query to perform on the **Database**

### Supported Operations
The **Database** connector supports the following operations:

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

