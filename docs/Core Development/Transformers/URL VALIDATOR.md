---
sidebar_position: 1
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# URL Validator

URL Validator validates the **request params**,**path params** and **request body** of the incoming request. 

### Configuring URL validator

### Step 1:

Drag and drop the **URL Validator** and name the component

<img src={useBaseUrl('/img/Core Development/Transformer/URL Validator.png')} />

<img src={useBaseUrl('/img/Core Development/Transformer/drag and drop URL.png')} />

### Step 2.a:
Configuring URL Validator for **Request params**

1) Right click on URL Validator Transformer
2) Click the plus button on the right to add the fields
3) Name the appropriate request parameter name and the datatype
4) Click save
   
<img src={useBaseUrl('/img/Core Development/Transformer/URL_Validator_config_request_param.png')} />

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
<td>Value</td>
<td>Name of the parameter</td>
<td>companyName</td>
</tr>
<tr>
<td>Datatype</td>
<td>Datatype of the parameter</td>
<td>String</td>
</tr>
<tr>
<td>Value</td>
<td>Name of the parameter</td>
<td>yearsOfExperience</td>
</tr>
<tr>
<td>Datatype</td>
<td>Datatype of the parameter</td>
<td>Number</td>
</tr>
</tbody>
</table>

### Step 2.b:
Configuring URL Validator for **Request Body (JSON)**

1) Right click on URL Validator Transformer
2) Click the toggle button to validate request body
3) Select the schema type as JSON
4) Upload the JSON schema using the upload button
5) You can check the schema from the view button
6) Click save
   
<img src={useBaseUrl('/img/Core Development/Transformer/URL_Validator_config_request_body_json.png')} />

<img src={useBaseUrl('/img/Core Development/Transformer/URL_Validator_config_request_body_json_schema.png')} />

### Step 2.c:
Configuring URL Validator for **Request Body (CSV)**

1) Right click on URL Validator Transformer
2) Click the toggle button to validate request body
3) Select the schema type as CSV
4) Upload the CSV schema using the upload button
5) You can check the schema from the view button
6) Click save
   
<img src={useBaseUrl('/img/Core Development/Transformer/URL_Validator_config_request_body_csv.png')} />

<img src={useBaseUrl('/img/Core Development/Transformer/URL_Validator_config_request_body_csv_schema.png')} />