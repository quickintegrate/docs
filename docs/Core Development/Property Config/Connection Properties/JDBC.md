---
sidebar_position: 1
slug: "jdbc-properties"
sidebar_label: "JDBC"
---

import { Image } from '@site/src/components/custom';

# DataSource JDBC

JDBC, short for Java Database Connectivity, is an API that empowers users to execute operations on a data source using the Java programming language. This versatile API facilitates connections to a wide array of Data Source systems, ranging from relational databases to spreadsheets and flat files. With the appropriate SQL syntax, you can conduct queries, updates, deletions, and even execute stored procedures.

## Engaging in Practical Implementation

**Open new Project in QuickIntegration Platform, and then follow these steps to get your flow working**

1. Click On the Connection Properties
2. Select the DataSource Type from drop down
3. Provide the Credentials
4. Click on Submit to save the Credentials
5. On the left side of the palette, you'll find the Configured Properties ready to be utilized within your API.

<Image cls="border mb-2" src="/img/Core Development/Connection properties/JDBC.png" alt="JDBC configuration" />

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
            <td>classicnew</td>
        </tr>
        <tr>
            <td>DataSource Type</td>
            <td>JDBC</td>
            <td>JDBC</td>
        </tr>
        <tr>
            <td>Driver ClassName</td>
            <td>A string that identifies the primary class for a JDBC driver</td>
            <td>com.mysql.cj.jdbc.Driver</td>
        </tr>
        <tr>
            <td>URL</td>
            <td>A URL (Uniform Resource Locator) is a unique identifier used to locate a resource on the Internet</td>
            <td>jdbc:mysql://&lt;server-host&gt;:3306/&lt;database-name&gt;</td>
        </tr>
        <tr>
            <td>Connection Timeout</td>
            <td>The maximum amount of time the driver will wait while attempting to establish a connection to the database.</td>
            <td>60000 (ms)</td>
        </tr>
        <tr>
            <td>User Name</td>
            <td>A name that uses for identification purposes when logging </td>
            <td>&lt;server-username&gt;</td>
        </tr>
        <tr>
            <td>Password</td>
            <td>A password is a string of characters used to verify the identity of a user during the authentication process</td>
            <td>&lt;server-password&gt;</td>
        </tr>
        <tr>
            <td>Environment</td>
            <td>Provides a production environment where you can deploy applications and APIs publicly</td>
            <td>dev</td>
        </tr>
        <tr>
            <td>DataBase</td>
            <td>Database driver</td>
            <td>SQL</td>
        </tr>
        <tr>
            <td>DDL schema *(optional)*</td>
            <td>SQL file that contains table creation statements.
                <a href="/Requirement Gathering/model-design" target="_blank"> Please refer the link for instructions on uploading DDL schema</a></td>
            <td>classicmodels</td>
        </tr>
    </tbody>
</table>
