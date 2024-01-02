---
sidebar_position: 1
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# DataSource JDBC

JDBC, short for Java Database Connectivity, is an API that empowers users to execute operations on a data source using the Java programming language. This versatile API facilitates connections to a wide array of Data Source systems, ranging from relational databases to spreadsheets and flat files. With the appropriate SQL syntax, you can conduct queries, updates, deletions, and even execute stored procedures.

## Engaging in Practical Implementation

**Open new Project in QuickIntegration Platform, and then follow these steps to get your flow working**

1) Click On the Connection Properties
2) Select the DataSource Type from drop down
3) Provide the Credentials 
4) Click on Submit to save the Crediantials
5) On the left side of the palette, you'll find the Configured Properties ready to be utilized within your API.

<img src={useBaseUrl('/img/Core Development/Connection properties/JDBC.png')} />;


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
<td>dbds</td>
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
<td>JDBC URL</td>
</tr>
<tr>
<td>User Name</td>
<td>A name that uses for identification purposes when logging </td>
<td>root</td>
</tr>
<tr>
<td>Password</td>
<td>A password is a string of characters used to verify the identity of a user during the authentication process</td>
<td>abcd</td>
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
</tbody>
</table>