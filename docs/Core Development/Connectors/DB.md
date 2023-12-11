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

### Configuring **Database** Connector


<img src={useBaseUrl('/img/Connectors/DB/DB_config.png')} />;

<img src={useBaseUrl('/img/Connectors/DB/DB_properties.png')} />;

<img src={useBaseUrl('/img/CConnectors/DB/DB_properties1.png')} />;