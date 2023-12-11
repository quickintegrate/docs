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
<th>Descripation</th>
</tr>
</thead>
<tbody>
<tr>
<td>DB Operation</td>
<td></td>
</tr>
<tr>
<td>Datasource Name</td>
<td></td>
</tr>
<tr>
<td>Return Roe(s)</td>
<td></td>
</tr>
<tr>
<td>Output Variable</td>
<td></td>
</tr>
<tr>
<td>Query</td>
<td></td>
</tr>
</tbody>
</table>

<img src={useBaseUrl('/img/Connectors/Read_DB_query1.png')} />;

<img src={useBaseUrl('/img/Connectors/Read_DB_query2.png')} />;

<table>
<thead>
<tr>
<th>Fields</th>
<th>Descripation</th>
</tr>
</thead>
<tbody>
<tr>
<td>Table Name</td>
<td></td>
</tr>
<tr>
<td>Your Generated Query is</td>
<td></td>
</tr>
<tr>
<td>Filters(Fields)</td>
<td></td>
</tr>
<tr>
<td>Filters(Operation)</td>
<td></td>
</tr>
</tbody>
</table>

## Write DB Operation

<img src={useBaseUrl('/img/Connectors/Write_DB_config.png')} />;

<table>
<thead>
<tr>
<th>Fields</th>
<th>Descripation</th>
</tr>
</thead>
<tbody>
<tr>
<td>DB Operation</td>
<td>Write</td>
</tr>
<tr>
<td>Datasource Name</td>
<td>Classicmodels to be defined in properties file</td>
</tr>
<tr>
<td>Query Type(s)</td>
<td></td>
</tr>
<tr>
<td>Parent</td>
<td></td>
</tr>
</tbody>
</table>

# DB Properties

<img src={useBaseUrl('/img/Connectors/DB/DB_properties.png')} />;

<img src={useBaseUrl('/img/Connectors/DB/DB_properties1.png')} />;