---
sidebar_position: 3
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Build a CURD API using SFDC Contact table from Start to Finish


Develop a **SFDC Contact API** on quickintegrate platform which will support **Create/Retrieve/Update/Delete** operation on Contact object in **Salesforce**.

## Methods:  
   #### POST
   #### PATCH
   #### GET
   #### DELETE

 ## End Point:
 
 POST http://run.quickintegrate.io/dev/sfdc_contact_api/contact

 PATCH : http://run.quickintegrate.io/dev/sfdc_contact_details/contact/{Id}

 GET (All Contacts) :  http://run.quickintegrate.io/dev/sfdc_contact_api/contacts

 GET (Specific Contact): http://run.quickintegrate.io/dev/sfdc_contact_api/contact/{Id}

 DELETE :  http://run.quickintegrate.io/dev/sfdc_contact_api/contact/{Id}

   
<img src={useBaseUrl('/img/SFDC/1services.png')} />;


## SFDC CONTACT API Flow 

<img src={useBaseUrl('/img/SFDC/2ui.png')} />;

### POST:

<img src={useBaseUrl('/img/SFDC/Post_Rest_connector.png')} />;

#### Description:

**POST** endpoint will be used to create records in **Contact object** salesforce

<img src={useBaseUrl('/img/SFDC/POST.png')} />;

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
<td>sfdcconnect</td>
</tr>
<tr>
<td>Method</td>
<td>Formats like GET, POST, DELETE, etc</td>
<td>POST</td>
</tr>
<tr>
<td>Base Path</td>
<td>Resource Path</td>
<td>services/data/v55.0/sobjects/Contact</td>
</tr>
<tr>
<td>Security</td>
<td>To be Defined in the propertioes like Basic Authentication, OAuth token, Authorization Code, etc </td>
<td>sfdcoauth</td>
</tr>
<tr>
<td>Input/Body</td>
<td>Input </td>
<td>$REQUEST_PAYLOAD</td>
</tr>
<tr>
<td>Output Variable</td>
<td>Stores output of connections operations</td>
<td>Rest_output</td>
</tr>
</tbody>
</table>
    
## End-Points:

https://login.salesforce.com/services/oauth2/token
https://atdevcom-dev-ed.my.salesforce.com/services/data/v55.0/sobjects/Contact

#### DELETE: 

<img src={useBaseUrl('/img/SFDC/Delete_Rest_connector.png')} />;

### Description:
**DELETE** endpoint will be used to delete records from **Contact object** salesforce.

<img src={useBaseUrl('/img/SFDC/DELETE.png')} />;

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
<td>sfdcconnect</td>
</tr>
<tr>
<td>Method</td>
<td>Formats like GET, POST, DELETE, etc</td>
<td>DELETE</td>
</tr>
<tr>
<td>Base Path</td>
<td>Resource Path</td>
<td>services/data/v55.0/sobjects/Contact/:Id</td>
</tr>
<tr>
<td>Security</td>
<td>To be Defined in the propertioes like Basic Authentication, OAuth token, Authorization Code, etc </td>
<td>sfdcoauth</td>
</tr>
<tr>
<td>Output Variable</td>
<td>Stores output of connections operations</td>
<td>Rest_output</td>
</tr>
</tbody>
</table>

 ## End-Points:

https://atdevcom-dev-ed.my.salesforce.com/services/data/v55.0/sobjects/Contact/{Id}

#### GET:

<img src={useBaseUrl('/img/SFDC/Get_all_Rest_connector.png')} />;

 ### Description:
**GET** endpoint will be used to retrieve records from **Contact object** salesforce.

<img src={useBaseUrl('/img/SFDC/GET.png')} />;

GET all contact

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
<td>sfdcconnect</td>
</tr>
<tr>
<td>Method</td>
<td>Formats like GET, POST, DELETE, etc</td>
<td>GET</td>
</tr>
<tr>
<td>Base Path</td>
<td>Resource Path</td>
<td>services/data/v55.0/sobjects/Contact</td>
</tr>
<tr>
<td>Security</td>
<td>To be Defined in the propertioes like Basic Authentication, OAuth token, Authorization Code, etc </td>
<td>sfdcoauth</td>
</tr>
<tr>
<td>Output Variable</td>
<td>Stores output of connections operations</td>
<td>Rest_output</td>
</tr>
</tbody>
</table>

GET Specific contact

<img src={useBaseUrl('/img/SFDC/Get_Rest_connector.png')} />;

<img src={useBaseUrl('/img/SFDC/GET%20All.png')} />;

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
<td>URL by which the API will be called:Id</td>
<td>sfdcconnect</td>
</tr>
<tr>
<td>Method</td>
<td>Formats like GET, POST, DELETE, etc</td>
<td>GET</td>
</tr>
<tr>
<td>Base Path</td>
<td>Resource Path</td>
<td>services/data/v55.0/sobjects/Contact/:Id</td>
</tr>
<tr>
<td>Security</td>
<td>To be Defined in the propertioes like Basic Authentication, OAuth token, Authorization Code, etc </td>
<td>sfdcoauth</td>
</tr>
<tr>
<td>Output Variable</td>
<td>Stores output of connections operations</td>
<td>Rest_output</td>
</tr>
</tbody>
</table>

 ## End-Points:

**GET All Contacts:**
https://atdevcom-dev-ed.my.salesforce.com/services/data/v55.0/sobjects/Contact

**GET Specific Contact:**
https://atdevcom-dev-ed.my.salesforce.com/services/data/v55.0/sobjects/Contact/{Id}

#### PATCH:

<img src={useBaseUrl('/img/SFDC/patch_Rest_connector.png')} />;

 ### Description:
**PATCH** endpoint will be used to update records in **Contact object** salesforce.

<img src={useBaseUrl('/img/SFDC/PATCH.png')} />;

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
<td>sfdcconnect</td>
</tr>
<tr>
<td>Method</td>
<td>Formats like GET, POST, DELETE, etc</td>
<td>PATCH</td>
</tr>
<tr>
<td>Base Path</td>
<td>Resource Path</td>
<td>services/data/v55.0/sobjects/Contact/:Id</td>
</tr>
<tr>
<td>Security</td>
<td>To be Defined in the propertioes like Basic Authentication, OAuth token, Authorization Code, etc </td>
<td>sfdcoauth</td>
</tr>
<tr>
<td>Output Variable</td>
<td>Stores output of connections operations</td>
<td>Rest_output</td>
</tr>
</tbody>
</table>

 ## End-Points:

https://atdevcom-dev-ed.my.salesforce.com/services/data/v55.0/sobjects/Contact/0035i000009obUrAAI

Step to Test the API Deployed on QuickIntegration.

1) Save the application.
2) Go to **EXECUTE** >> **BUILD** 
to Build the application.
1) Deploy the application after build. Select the Application Name From Drop down, and pass the security key in Properties. Click on deploy application.
2) Go to application and Bring **UP** the application by clicking on project.
3) Provide the security key and start the API.
4) Once you Successfully started your API, you will find Development URL in Details Coloumn
5) Using the QuickIntegrate deployed URL You can Test your API using Postman Collection









