---
sidebar_position: 1
slug: "db-connector"
sidebar_label: "DB"
---

import { Image, Video } from '@site/src/components/custom';

# Database Connector

The Database connector establishes connectivity with a wide range of Java Database Connectivity (JDBC) relational Databases, enabling the execution of SQL operations. It allows the utilization of MEL expressions within connector fields and the dynamic configuration of attributes based on the specific Database configuration employed. This flexibility facilitates multi-tenant scenarios by adjusting connection attributes according to the information received from individual requests.

Various query types are supported, including predefined, dynamically constructed, and customizable template queries. Batch updates enable the execution of multiple SQL requests in a single operation, while Data Definition Language (DDL) requests modify the data structure without altering the data itself. The Database connector is an integral part of QuickIntegration.

**To configure the Database connector:**

- Define your Database’s location and connection details.
- Configure the operation you wish to perform.
- Include the query to execute on the Database.

## Supported Commands
The Database connector offers support for the following commands:

1. Select
2. Insert
3. Update
4. Delete

## Configuration
1. Drag and drop the **DB Connector**
<Image src="/img/Core Development/Connectors/DB/element.png" alt="DB Connector" />

2. Right click on connector, you can define the **DB Connector** configuration.

### Quickintegrate Query Generator
1. Click on the Query Generator icon.
2. Choose the table name from the dropdown list to specify the source. We can set a limit on the number of records to retrieve.
3. In the filters section, include conditions for the fields to be used in the query, employing operations such as NULL, NOT NULL, =, !=, etc. Your query will be generated based on these selections.

<Video src="/img/Core Development/Connectors/DB/autoQueryGen.mp4" type="video/mp4" />

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
            <td>DataBase Table Name</td>
            <td>Customers</td>
        </tr>
        <tr>
            <td>Your Generated Query is</td>
            <td>DataBase Query</td>
            <td>SELECT * FROM customers WHERE city =:city</td>
        </tr>
        <tr>
            <td>Filters (Fields)</td>
            <td>Particular field where DB will Operate</td>
            <td>city</td>
        </tr>
        <tr>
            <td>Filters (Operation)</td>
            <td>Operations like NULL, NOT NULL, =, !=, etc</td>
            <td>=</td>
        </tr>
    </tbody>
</table>

### Read Operation

**1. Get multiple row(s)**
<Image cls="border mb-2" src="/img/Core Development/Connectors/DB/multipleRows.png" alt="Multiple rows configuration" />

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
            <td>Read / Write / Stored Procedure</td>
            <td>Read</td>
        </tr>
        <tr>
            <td>Datasource Name</td>
            <td>Datasource Name which is configured in connection properties.
                <a href="/Core Development/Property Config/Connection Properties/jdbc-properties" target="_blank"> Please refer the link for instructions on creating the datasource name</a></td>
            <td>classicmodels</td>
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
            <td>DataBase Query</td>
            <td>SELECT * FROM customers WHERE city =:city</td>
        </tr>
        <tr>
            <td>Gradle dependencies</td>
            <td>Database driver dependencies which are configured in connection properties.
                <a href="/Core Development/Property Config/Connection Properties/gradle-dependencies" target="_blank"> Please refer the link for instructions on adding dependencies</a></td>
            <td>com.mysql:mysql-connector-j:9.0.0</td>
        </tr>
    </tbody>
</table>

**2. Get single row**
<Image cls="border" src="/img/Core Development/Connectors/DB/singleRow.png" alt="Single row configuration" />

### Write Operation

When we need to modify records in the database, we can choose the **Write** option from the DB Operations menu. 

#### 1. Normal Insert

The following shows a insert operation usage without checking:
- ***skipNull*** - Excludes `NULL` values.
- ***BULK*** - Performing a large number of data manipulation operations (insert, update, delete) in a single call

<Image cls="border" src="/img/Core Development/Connectors/DB/insertRow.png" />

#### 2. Skip Null

If *skipNull* is checked then it update the query on runtime and remove all the values from query for fields that contain `NULL` values.

:::note
    This works only in case of normal write operation and not in bulk. 
:::

#### 3. Bulk Delete

Let's explore how to compose a delete query.
1. Choose the query type as **Delete** from the dropdown list.
2. Check the bulk operation to delete multiple records using a single query
3. Specify the fields for the delete condition. 

<Image cls="border mb-2" src="/img/Core Development/Connectors/DB/bulkDelete.png" />

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
            <td>Read / Write / Stored Procedure</td>
            <td>Write</td>
        </tr>
        <tr>
            <td>Datasource Name</td>
            <td>Datasource Name which is configured in connection properties.
                <a href="/Core Development/Property Config/Connection Properties/jdbc-properties" target="_blank"> Please refer the link for instructions on creating the datasource name</a></td>
            <td>classicmodels</td>
        </tr>
        <tr>
            <td>Query Type(s)</td>
            <td>Methods like INSERT, UPDATE, DELETE</td>
            <td>DELETE</td>
        </tr>
        <tr>
            <td>Output Variable</td>
            <td>Stores output of connections operations</td>
            <td>bulkDeleteO</td>
        </tr>
        <tr>
            <td>Parent</td>
            <td>Defined by Using $ key word</td>
            <td>$MultiCustomers</td>
        </tr>
        <tr>
            <td>Gradle dependencies</td>
            <td>Database driver dependencies which are configured in connection properties.
                <a href="/Core Development/Property Config/Connection Properties/gradle-dependencies" target="_blank"> Please refer the link for instructions on adding dependencies</a></td>
            <td>com.mysql:mysql-connector-j:9.0.0</td>
        </tr>
    </tbody>
</table>

### Stored Procedure Operation

A stored procedure is a precompiled collection of SQL statements and optional control-of-flow statements that you can execute as a single unit to perform a specific task in a database.

<Image cls="border mb-2" src="/img/Core Development/Connectors/DB/storedProcedure.png" />

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
            <td>Read / Write / Stored Procedure</td>
            <td>Stored Procedure</td>
        </tr>
        <tr>
            <td>Datasource Name</td>
            <td>Datasource Name which is configured in connection properties.
                <a href="/Core Development/Property Config/Connection Properties/jdbc-properties" target="_blank"> Please refer the link for instructions on creating the datasource name</a></td>
            <td>classicmodels</td>
        </tr>
        <tr>
            <td>Output Variable</td>
            <td>Stores output of connections operations</td>
            <td>CallDBO</td>
        </tr>
        <tr>
            <td>Name</td>
            <td>Procedure name</td>
            <td>new_procedure</td>
        </tr>
        <tr>
            <td>Gradle dependencies</td>
            <td>Database driver dependencies which are configured in connection properties.
                <a href="/Core Development/Property Config/Connection Properties/gradle-dependencies" target="_blank"> Please refer the link for instructions on adding dependencies</a></td>
            <td>com.mysql:mysql-connector-j:9.0.0</td>
        </tr>
        <tr>
            <td>Target</td>
            <td>Parameter that is passed to procedure</td>
            <td>customer_id</td>
        </tr>
        <tr>
            <td>Key</td>
            <td>Value of target</td>
            <td>$PATH_PARAMS.id</td>
        </tr>
        <tr>
            <td>DataType</td>
            <td>Type like String / Number / Double / Boolean</td>
            <td>Number</td>
        </tr>
    </tbody>
</table>
