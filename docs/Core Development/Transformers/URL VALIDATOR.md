---
sidebar_position: 1
---

import { Image } from '@site/src/components/custom';


# URL Validator

URL Validator validates the **request params**,**path params** and **request body** of the incoming request. 

## Configuration

1. Drag and drop **URL** Transformer from the pallet.

<Image src="/img/Core Development/Transformer/URL_validator/element.png" alt="URL Transformer" />

2. Right click on transformer, now you can define the **URL Transformer** configuration.
   
### For *Request params*

1) Click the plus button on the right to add the fields
2) Name the appropriate request parameter name and the datatype
3) Click save

<Image cls="border mb-2" src="/img/Core Development/Transformer/URL_validator/request_param.png" alt="request_param" />

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

### For *Request Body (JSON)*

1) Click the toggle button to validate request body
2) Select the schema type as JSON
3) Upload the JSON schema using the upload button
4) You can check the schema from the view button
5) Click save


<Image cls="border" src="/img/Core Development/Transformer/URL_validator/request_body_json.png" alt="request_body_json" />

**Schema**
```
{
	"title": "Customer",
	"type": "object",
    	"description": "",
    	"required": [
        	"id",
	        "name",
		"city",
        "country"
    ],
    "properties": {
        "id": {
            "type": "number"
        },
        "name": {
            "type": "string"
        },
        "city": {
            "type": "string"
        },
        "country": {
            "type": "string"
        }
    }
}
```
### For *Request Body (CSV)*

1) Click the toggle button to validate request body
2) Select the schema type as CSV
3) Upload the CSV schema using the upload button
4) You can check the schema from the view button
5) Click save

<Image cls="border" src="/img/Core Development/Transformer/URL_validator/request_body_csv.png" alt="request_body_csv" />

**Schema**
```
<?xml version="1.0" encoding="UTF-8" ?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
    <xs:element name="root">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="row" maxOccurs="unbounded" minOccurs="0">
		    <xs:complexType>
		        <xs:sequence>
			    <xs:element name="name" type="xs:string"/>
			    <xs:element name="id" type="xs:string"/>
			    <xs:element name="city" type="xs:string"/>
			    <xs:element name="country" type="xs:string"/>
		        </xs:sequence>
		    </xs:complexType>
	        </xs:element>
            </xs:sequence>
        </xs:complexType>
    </xs:element>
</xs:schema>
```