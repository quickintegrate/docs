---
sidebar_position: 4
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Postal details Rest API Design Document

Create a **REST API** which will accept **customer Id** as **query parameter**. 
Use that **customer Id** to fetch the data from **Customer Database** in order to get **PIN** code for that customer. Use this **PIN** code to get postal address details from India Post **Rest API**. 
Transform the response in the desired format to generate final response

## Postal details Rest API:
**Description:**

It is an API which is used to get customer data from **DB** and use that data to get postal details from India Post API. We have the customer database and it has following no of columns in remote **DB** as shown below
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


## End-Points:
[GET-returns specific record](http://run.quickintegrate.io/dev/restapi/getPostalInfo?ID=4)

#### SETP 1:
Login to Quick Integration Platform to get started.

<img src={useBaseUrl('/img/DB_Rest_API/1.png')} />;

#### STEP 2:
Click on **Manage** Option >> **Projects** >> **Create** to create the new project

<img src={useBaseUrl('/img/DB_Rest_API/2.png')} />;
<img src={useBaseUrl('/img/DB_Rest_API/3.png')} />;

`Once project is created, below popup shows up.`

<img src={useBaseUrl('/img/DB_Rest_API/4.png')} />;


#### STEP 3:
Go to **DEVELOP** >> **Functionality** API

<img src={useBaseUrl('/img/DB_Rest_API/5.png')} />;

#### STEP 4:

Select relevant project and create services in that project
<img src={useBaseUrl('/img/DB_Rest_API/6.png')} />;
<img src={useBaseUrl('/img/DB_Rest_API/7.png')} />;

#### STEP 5:

Once service name is provided, canvas will show up

<img src={useBaseUrl('/img/DB_Rest_API/8.png')} />;

#### STEP 6:

Left click on **REST Trigger** to Configure as given below.

<img src={useBaseUrl('/img/DB_Rest_API/a1.png')} />;

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
<td>uri</td>
<td>Resource Path to trigger the API</td>
<td>/getPostalinfo</td>
</tr>
<tr>
<td>type</td>
<td>Metods of The API like GET, PUT, PATCH, etc</td>
<td>GET</td>
</tr>
</tbody>
</table>

#### STEP 7:

Drag **UTILITY** component to add start logger for you service.

<img src={useBaseUrl('/img/DB_Rest_API/9.2.png')} />;

#### STEP 8:

Left click on **UTILITY** Connector and Configure as given below.

<img src={useBaseUrl('/img/DB_Rest_API/9.png')} />;

Methods:

<img src={useBaseUrl('/img/DB_Rest_API/methods.png')} />;

Log type:

<img src={useBaseUrl('/img/DB_Rest_API/Log type.png')} />;

Log Value:

Start Log - Start_level_log_info

#### STEP 9:

Drag **URIVALIDATOR** to validate the URL.

<img src={useBaseUrl('/img/DB_Rest_API/10.2.png')} />;

#### STEP 10:

Left click on **URIVALIDATOR** Connector and Configure as given below.

<img src={useBaseUrl('/img/DB_Rest_API/10.png')} />;

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
<td>Scenario-Name</td>
<td>Name of the scenario to be performed in case the validation failed.</td>
<td>Validate_request</td>
</tr>
<tr>
<td>Request Params</td>
<td>Names of the param keys passed in query parameters.</td>
<td>ID</td>
</tr>
</tbody>
</table>

#### STEP 11:

Drag **DB** Connector to make **DB** call in the service.

<img src={useBaseUrl('/img/DB_Rest_API/11.2.png')} />;

#### STEP 12:

Add **DB** connectivity details in Connection properties:

<img src={useBaseUrl('/img/DB_Rest_API/New folder/A1.png')} />;

<img src={useBaseUrl('/img/DB_Rest_API/New folder/A2.png')} />;

#### STEP 13:

Left click on **DB** Connector and Configure as given below.
Select the database configuration created in properties to **DB** connectivity in datasource name:

<img src={useBaseUrl('/img/DB_Rest_API/11.png')} />;

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
 
Select the table Name from the Droup down list, we can limit the number of records To be retrieved
In filters add the condition for fields use in the query with the help of operation like NULL, NOT NULL, =, !=, etc
Your Generated Query will get Created.

1) Select the Table Name
   
<img src={useBaseUrl('/img/DB_Rest_API/New folder/crm_customer.png')} />;

2) Select the Coloumn 
 
<img src={useBaseUrl('/img/DB_Rest_API/New folder/pin.png')} />;

3) Select the Fields

<img src={useBaseUrl('/img/DB_Rest_API/New folder/id.png')} />;

4) Select the Operations 

<img src={useBaseUrl('/img/DB_Rest_API/New folder/ope.png')} />;


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


#### STEP 14:

Define Global variables to be used in the service:

<img src={useBaseUrl('/img/DB_Rest_API/New folder/GlobalVariable3.png')} />;

<img src={useBaseUrl('/img/DB_Rest_API/New folder/GlobalVariable4.png')} />;

<img src={useBaseUrl('/img/DB_Rest_API/New folder/GlobalVariable5.png')} />;

#### STEP 15:

Drag **REST** component to make India Post **REST** API call to get postal details based on PIN code.


<img src={useBaseUrl('/img/DB_Rest_API/12.2.png')} />;

#### STEP 16:

Left click on **REST** Connector and Configure as given below.

<img src={useBaseUrl('/img/DB_Rest_API/12.png')} />;  

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
<td>Http URL</td>
<td>URL by which the API will be called</td>
<td>dburl</td>
</tr>
<tr>
<td>Method</td>
<td>Formats like GET, POST, DELETE, etc</td>
<td>GET</td>
</tr>
<tr>
<td>Base Path</td>
<td>Resource Path</td>
<td>/pincode/;pincode</td>
</tr>
<tr>
<td>Security</td>
<td>To be Defined in the propertioes like Basic Authentication, OAuth token, Authorization Code, etc </td>
<td></td>
</tr>
<tr>
<td>Output Variable</td>
<td>Stores output of connections operations</td>
<td>payload</td>
</tr>
</tbody>
</table>

**Type:**
pathparam

**Target:**
pincode

**key:**
$Data.pin

#### STEP 17:

Drag **APIRESPONSE** component to map the response :


<img src={useBaseUrl('/img/DB_Rest_API/13.2.png')} />; 

Click on the Drop down and select Content Type application json

<img src={useBaseUrl('/img/hello/addedsteps/ContentType.png')} />;

Click on Add button and do the mapping as shown below

When we want to get a variable, from the pipeline, we use **$** sign as prefix followed by Variable name from in the pipeline. There can be nested get which is seperated by '.' Ex. **$Payload.key**.

`Note:- The variable Payload should be present in the pipeline before the calling`

<img src={useBaseUrl('/img/DB_Rest_API/n1.png')} />; 

<img src={useBaseUrl('/img/DB_Rest_API/New folder/types1.png')} />; 

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
<td>Get one field from the Input and mapped in another field of Output</td>
</tr>
<tr>
<td>TRANS</td>
<td>Transforms the Input value with the help of transformation functions</td>
</tr>
<tr>
<td>CN</td>
<td>Mapped the Input as it is Output body</td>
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

#### STEP 18:

Drag **UTILITY** component to add end logger for you service

<img src={useBaseUrl('/img/DB_Rest_API/14.2.png')} />; 

<img src={useBaseUrl('/img/DB_Rest_API/14.png')} />; 

**Methods:**

<img src={useBaseUrl('/img/DB_Rest_API/methods.png')} />;

**Log type:**

<img src={useBaseUrl('/img/DB_Rest_API/Log type.png')} />;

**Log Value:**

End Log - End_level_log_info

#### STEP 19:

**Step Exception handling in the service:**

Step error is specifically for particular connector error.
Select the Step Exception handler from the palate, Drag it to the canvas and configure it for the DB and Rest error
Please refer the configration shown below

<img src={useBaseUrl('/img/DB_Rest_API/15.1.1.png')} />; 

<img src={useBaseUrl('/img/DB_Rest_API/15.png')} />; 

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

<img src={useBaseUrl('/img/DB_Rest_API/16.1.png')} />; 

If **DB** does not return response for a customer Id, error message is created as “No customer found”. PFB the configuration for reference:

<img src={useBaseUrl('/img/DB_Rest_API/16.png')} />; 

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
<td>$VARIABLES.invalidPin</td>
</tr>
<tr>
<td>Exception code</td>
<td>The code while throwing the Execption </td>
<td>$VARIABLES.errorPin</td>
</tr>
</tbody>
</table>

#### STEP 21:

**Global Exception handling in the service:**

Global Error is for the all the component in the flow.
Select the Global Error from the palate, Drag it to the canvas and configure it as shown below

<img src={useBaseUrl('/img/DB_Rest_API/17.png')} />; 

<img src={useBaseUrl('/img/DB_Rest_API/17.1.png')} />; 

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
<td>compulsory querry param not passed</td>
</tr>
<tr>
<td>Exception code</td>
<td>The code while throwing the Execption</td>
<td>$VARIABLES.noid</td>
</tr>
</tbody>
</table>

If any error occurs in the service during processing. It is handled in the global Exception handler.

#### STEP 22:

PFB the final service screenshot below :


<img src={useBaseUrl('/img/DB_Rest_API/18.png')} />; 

#### STEP 23: 
Step to Test the API Deployed on QuickIntegration.

1) Save the application.
2) Go to **EXECUTE** >> **BUILD** 
to Build the application.
3) Deploy the application after build. Select the Application Name From Drop down, and pass the security key in Properties. Click on deploy application.
4) Go to application and Bring **UP** the application by clicking on project.
5) Provide the security key and start the API.
6) Once you Successfully started your API, you will find Development URL in Details Coloumn
7) Using the QuickIntegrate deployed URL You can Test your API using Postman Collection