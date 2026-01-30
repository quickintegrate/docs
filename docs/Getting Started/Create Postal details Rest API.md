---
sidebar_position: 4
---

import useBaseUrl from '@docusaurus/useBaseUrl'

# Postal details Rest API Design Document

Create a **REST API** which will accept customer id **ID** as **query parameter**.
Use the customer **ID** to fetch **pin** from **crm_customers** table and use **pin** received to get postal address details from India Post using **Rest API**.
Transform the response in the desired format to generate final response

## Postal details Rest API
**Description:**

It is an API which is used to get customer data from **DB** and use that data to get postal details from India Post API. We have the crm_customers table and it has following no of columns in remote **DB** as shown below
Customer’s table column name

<table>
<thead>
<tr>
<th>Fields</th>
<th>Data Types</th>
</tr>
</thead>
<tbody>
<tr>
<td>Id</td>
<td>Integer</td>
</tr>
<tr>
<td>first_name</td>
<td>varchar</td>
</tr>
<tr>
<td>last_name</td>
<td>varchar</td>
</tr>
<tr>
<td>address</td>
<td>varchar</td>
</tr>
<tr>
<td>pin</td>
<td>Integer</td>
</tr>
<tr>
<td>email</td>
<td>varchar</td>
</tr>
<tr>
<td>login</td>
<td>varchar</td>
</tr>
<tr>
<td>identifier</td>
<td>varchar</td>
</tr>
</tbody>
</table>

### Login to Quick Integration Platform

Click here to login
[https://designer.quickintegrate.io/login](https://designer.quickintegrate.io/login)

<img src={useBaseUrl('/img/DB_Rest_API/dashboard.png')} />

### Create new project
From the left panel Click on **Manage** Option >> **Projects**
<img src={useBaseUrl('/img/DB_Rest_API/manage_projects_panel.png')} />

On the right click on **+** sign to create the new project
<img src={useBaseUrl('/img/DB_Rest_API/manage_projects.png')} />

Type the **Project name** and **Description** and click **submit** button to create the new project.

<img src={useBaseUrl('/img/DB_Rest_API/create_new_project.png')} />


### Go to Integration studio to create service
From the left panel select **INTEGRATION** >> **Studio**

<img src={useBaseUrl('/img/DB_Rest_API/integration_studio.png')} />

### Add new service

Select the newly created project from the **dropdown**
<img src={useBaseUrl('/img/DB_Rest_API/service_configure.png')} />

Click on **+** sign to create a new service.
Fill the **Service Name** and select the **REST** as **Trigger** and click **Submit** button
<img src={useBaseUrl('/img/DB_Rest_API/create_new_service.png')} />

After the service is created, a **canvas** will show up to build the quickintegrate flow

<img src={useBaseUrl('/img/DB_Rest_API/empty_canvas.png')} />

### Configure connection properties
Configure connection properties for **DB** and **REST** call before adding the steps for the API

a. Click on 3rd icon to open connection properties page
<img src={useBaseUrl('/img/DB_Rest_API/connection_properties_panel.png')} />
b. Select **JDBC** datasource type from the dropdown
<img src={useBaseUrl('/img/DB_Rest_API/jdbc_datasource_type.png')} />
c. Configure the database datasource as below and click on **Submit** button
<img src={useBaseUrl('/img/DB_Rest_API/jdbc_datasource_configure.png')} /> <br />
<a href="../Requirement Gathering/model-design">Check Model Design to add database schema</a> <br /><br />
d. Select **REST URL** datasource type from the dropdown
<img src={useBaseUrl('/img/DB_Rest_API/rest_datasource_type.png')} />
e. Configure the rest datasource as below and click on **Submit** button
<img src={useBaseUrl('/img/DB_Rest_API/resturl_datasource_configure.png')} />


### Define Global variables

Define Global variables to be used in the service:

a. Click on 4th icon to open connection properties page
<img src={useBaseUrl('/img/DB_Rest_API/connection_properties_panel.png')} />

<img src={useBaseUrl('/img/DB_Rest_API/GlobalVariable1.png')} />

<img src={useBaseUrl('/img/DB_Rest_API/GlobalVariable2.png')} />

<img src={useBaseUrl('/img/DB_Rest_API/GlobalVariable3.png')} />


### Configure REST trigger

Right click on **REST Trigger** to Configure as given below.

<img src={useBaseUrl('/img/DB_Rest_API/rest_trigger.png')} />

<table>
<thead>
<tr>
<th>Fields</th>
<th>Description</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td>type</td>
<td>Methods can be GET, POST, PUT, PATCH and DELETE</td>
<td>GET</td>
</tr>
<tr>
<td>uri</td>
<td>URI to trigger the API service</td>
<td>/getPostalinfo</td>
</tr>
</tbody>
</table>

### Configure start logger

Select the **Transformers** from the left control panel
<img src={useBaseUrl('/img/DB_Rest_API/utilities_transformer.png')} />

Drag and drop the **Utilities** transformer to the canvas using `left click` to add **start logger** for your service.


Enter the **Step name** and click submit
<img src={useBaseUrl('/img/DB_Rest_API/create_start_logger.png')} />

<img src={useBaseUrl('/img/DB_Rest_API/start_logger_step.png')} />


Right click on **Utilities** transformer and configure as given below.

<img src={useBaseUrl('/img/DB_Rest_API/start_logger_configure.png')} />

**Methods**:

<img src={useBaseUrl('/img/DB_Rest_API/logger_methods.png')} />

**Log type**:

<img src={useBaseUrl('/img/DB_Rest_API/log_type.png')} />

**Log Value**:

Start Log - Start_level_log_info  with ID: $REQUEST_PARAMS.ID

### Configure URL validator

Select the **Transformers** from the left control panel
<img src={useBaseUrl('/img/DB_Rest_API/urlvalidator_transformer.png')} />

Drag and drop **URL** transformer to the canvas using `left click` to validate the URL.
Enter the **Step name** and click submit

<img src={useBaseUrl('/img/DB_Rest_API/create_urlvalidator_step.png')} />

<img src={useBaseUrl('/img/DB_Rest_API/urlvalidator_step.png')} />


Right click on **URL** transformer and configure as given below.

<img src={useBaseUrl('/img/DB_Rest_API/configure_urlvalidator.png')} />

<img src={useBaseUrl('/img/DB_Rest_API/urlvalidator_step.png')} />

### Configure database step

Select the **Connectors** from the left control panel
<img src={useBaseUrl('/img/DB_Rest_API/db_connector.png')} />

Drag and drop **DB** Connector to the canvas using `left click` to make **Database** call in the service.
Enter the **Step name** and click submit

<img src={useBaseUrl('/img/DB_Rest_API/create_db_connector.png')} />

<img src={useBaseUrl('/img/DB_Rest_API/db_connector_step.png')} />


Right click on **DB** Connector and configure as given below.

<img src={useBaseUrl('/img/DB_Rest_API/db_connector_configuration.png')} />

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
<td>dbds</td>
</tr>
<tr>
<td>Return Row(s)</td>
<td>Single, Multiple</td>
<td>Single</td>
</tr>
<tr>
<td>Output Variable</td>
<td>This field is the variable name for which the output of the following step is store in the pipeline </td>
<td>Data</td>
</tr>
<tr>
<td>Query</td>
<td>This is the Database commands</td>
<td>SELECT pin FROM crm_customers WHERE id=:id</td>
</tr>
</tbody>
</table>

#### Let see how to write the query using quickintegration with few clicks

We can select tables from the dropdown list present in our database.

we can limit the number of records to be retrieved.

Filters help to add the condition for every field selected with operaions to compare like NULL, NOT NULL, =, !=, etc

Your Query will be generated!.

1) Select the Table Name, Fields and operation from the dropdown list

<img src={useBaseUrl('/img/DB_Rest_API/configure_db_query.png')} />

2) Select the coloumn names

<img src={useBaseUrl('/img/DB_Rest_API/select_column.png')} />


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
<td>crm_customers</td>
</tr>
<tr>
<td>Your Generated Query is</td>
<td>Data Base Query</td>
<td>SELECT pin FROM crm_customers WHERE id:id</td>
</tr>
<tr>
<td>Filters(Fields)</td>
<td>Perticular field where DB will Operate</td>
<td>id</td>
</tr>
<tr>
<td>Filters(Operation)</td>
<td>Operations like NULL, NOT NULL, =, !=, etc</td>
<td>=</td>
</tr>
</tbody>
</table>


### Configure Postal API step

Select the **Connectors** from the left control panel
<img src={useBaseUrl('/img/DB_Rest_API/rest_connector.png')} />

Drag **REST** connector to make India Post **REST** API call to get postal details based on PIN code.
<img src={useBaseUrl('/img/DB_Rest_API/create_rest_connector.png')} />


<img src={useBaseUrl('/img/DB_Rest_API/rest_connector_step.png')} />


Right click on **REST** connector and configure as given below.

<img src={useBaseUrl('/img/DB_Rest_API/configure_rest_connector.png')} />

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
<td>Datasource Name</td>
<td>Rest datasource configured in connection properties</td>
<td>dburl</td>
</tr>
<tr>
<td>Method</td>
<td>Http method like GET, POST, DELETE, etc</td>
<td>GET</td>
</tr>
<tr>
<td>Base Path</td>
<td>Resource Path</td>
<td>/pincode/:pincode</td>
</tr>
<tr>
<td>Security</td>
<td>To be Defined in the propertioes like Basic Authentication, OAuth token, Authorization Code, etc </td>
<td></td>
</tr>
<tr>
<td>Output Variable</td>
<td>Stores output of connections operations</td>
<td>callPostalAPIO</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th>Type</th>
<th>Description</th>
<th>Key</th>
<th>Value</th>
</tr>
</thead>
<tbody>
<tr>
<td>pathparams</td>
<td>Path parmeter for REST call</td>
<td>pincode</td>
<td>$Data.postalCode</td>
</tr>
<tr>
<td>header</td>
<td>Header for REST call</td>
<td>Content-Type</td>
<td>application/json</td>
</tr>
</tbody>
</table>


### Configure Response step

Select the **Transformer** from the left control panel
<img src={useBaseUrl('/img/DB_Rest_API/apiresponse_transformer.png')} />
Drag **APIRes** transformer to return the response back to the client
<img src={useBaseUrl('/img/DB_Rest_API/create_apiresponse.png')} />

<img src={useBaseUrl('/img/DB_Rest_API/apiresponse_step.png')} />

Right click on **APIRes** transformer to configure

Click on the Drop down and select Content Type application json

<img src={useBaseUrl('/img/hello/addedsteps/ContentType.png')} />

Click on **+** button to add more mappings.

Create the response object as shown below

<img src={useBaseUrl('/img/DB_Rest_API/configure_api_response.png')} />

When we want to get a variable from the pipeline, we use **$** sign as prefix followed by Variable name from in the pipeline. There can be nested values which can be accessed by dot operator **'.'** for example **$Payload.key**.

`Note:- The variable name should be present in the pipeline before the calling`

<table>
<thead>
<tr>
<th>Fields</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>GEN</td>
<td>Map a single key to a value</td>
</tr>
<tr>
<td>TRANS</td>
<td>Transforms the Input value with the help of inline functions</td>
</tr>
<tr>
<td>CN</td>
<td>Map the Input variable directly to output</td>
</tr>
<tr>
<td>OBJ</td>
<td>Mapped the Inputs to Object</td>
</tr>
<tr>
<td>AR</td>
<td>Mapped the Inputs to Array</td>
</tr>
</tbody>
</table>


 <a href="/Core Development/Transformers/APIRESPONSE"target="_blank">Click here to check how to configure APIRESPONSE</a>

### Configure end logger

Select the **Transformers** from the left control panel
<img src={useBaseUrl('/img/DB_Rest_API/utilities_transformer.png')} />

Drag and drop the **Utilities** transformer to the canvas using `left click` to add **End logger** for your service.
<img src={useBaseUrl('/img/DB_Rest_API/create_end_logger.png')} />

<img src={useBaseUrl('/img/DB_Rest_API/end_logger_step.png')} />

Right click on the **End logger utilities** transformer and configure it as shown below

<img src={useBaseUrl('/img/DB_Rest_API/configure_end_logger.png')} />


### DB Step Exception handling

Any exceptions or error occured on **DB** step will be handled by the **Step** component

Select the **Step** exception handler from the palate, drag it to the canvas

<img src={useBaseUrl('/img/DB_Rest_API/stepException_component.png')} />

<img src={useBaseUrl('/img/DB_Rest_API/create_db_stepException.png')} />


Drag **Utilities** transformer and drop inside the **error_msg step handler** and name it msg

Right click on the **msg Utilities** to configure as shown below

<img src={useBaseUrl('/img/DB_Rest_API/db_stepException_utility.png')} />

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
<td>Method</td>
<td>This is the utility function to throw the error in the flow</td>
<td>throw error</td>
</tr>
<tr>
<td>Error Type</td>
<td>Type of Exception thrown in the flow such as INTBuinessException and INTRetryException </td>
<td>INTBuinessException</td>
</tr>
<tr>
<td>Exception message</td>
<td>The custom message while throwing the custom Exception</td>
<td>$VARIABLES.nocustomer</td>
</tr>
<tr>
<td>Exception code</td>
<td>The code while throwing the Execption</td>
<td>$VARIABLES.nocustomercode</td>
</tr>
</tbody>
</table>

After adding the **DB step exception handler**, the configuration should look like below

<img src={useBaseUrl('/img/DB_Rest_API/db_stepException_utility_step.png')} />


### REST Step Exception handling

Any exceptions or error occured on **REST** step will be handled by the **Step** component

Select the **Step** exception handler from the palate, drag it to the canvas

<img src={useBaseUrl('/img/DB_Rest_API/create_rest_stepException.png')} />


Drag **Utilities** transformer and drop inside the **error_pin step handler** and name it errorPin

Right click on the **errorPin Utilities** to configure as shown below

<img src={useBaseUrl('/img/DB_Rest_API/rest_stepException_utility.png')} />

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
<td>Method</td>
<td>This is the utility function to throw the error in the flow</td>
<td>Throw error</td>
</tr>
<tr>
<td>Error Type</td>
<td>Type of Exception</td>
<td>INTBuinessException</td>
</tr>
<tr>
<td>Exception message</td>
<td>The custom message while throwing the custom Exception</td>
<td>$VARIABLES.invalidPin</td>
</tr>
<tr>
<td>Exception code</td>
<td>The code while throwing the Execption </td>
<td>$VARIABLES.errorPin</td>
</tr>
</tbody>
</table>

After adding the **REST step exception handler**, the configuration should look like below

<img src={useBaseUrl('/img/DB_Rest_API/rest_stepException_utility_step.png')} />

### Setup Global Exception handler

Global Exception handler handles any exception or error thorwn by any node in the API service.

It is similar to step exception handler but for all nodes.

Select the Global Error from the palate, Drag it to the canvas and configure it as shown below

<img src={useBaseUrl('/img/DB_Rest_API/globalException_component.png')} />

<img src={useBaseUrl('/img/DB_Rest_API/globalException_utility_step.png')} />

Right click on the **errorMsg Utilities** to configure as below 

<img src={useBaseUrl('/img/DB_Rest_API/configure_globalException_utility.png')} />

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
<td>Method</td>
<td>This is the utility function to throw the error in the flow</td>
<td>Throw error</td>
</tr>
<tr>
<td>Error Type</td>
<td>Type of Exception</td>
<td>INTBuinessException</td>
</tr>
<tr>
<td>Exception message</td>
<td>The custom message while throwing the custom Exception</td>
<td>$VARIABLES.noid</td>
</tr>
<tr>
<td>Exception code</td>
<td>The code while throwing the Execption</td>
<td>1000</td>
</tr>
</tbody>
</table>

If any error occurs in the service during processing. It is handled in the global Exception handler.

### Final quickintegrate flow:

At the end the final canvas should look like this

<img src={useBaseUrl('/img/DB_Rest_API/final_flow.png')} />


### Steps to build and deploy the API service
Step to Test the API Deployed on QuickIntegration.

<a href="../Build and Deploy">Check how to build and deploy the above service</a> <br /><br />

1) Save the application.
2) Go to **EXECUTE** >> **BUILD**
to Build the application.
3) Deploy the application after build. Select the Application Name From Drop down, and pass the security key in Properties. Click on deploy application.
4) Go to application and Bring **UP** the application by clicking on project.
5) Provide the security key and start the API.
6) Once you Successfully started your API, you will find Development URL in Details column
7) Using the QuickIntegrate deployed URL You can Test your API using Postman Collection


[Test service API](https://run.quickintegrate.io/1/dev/v1.0.0/sample/getPostalinfo?ID=4)