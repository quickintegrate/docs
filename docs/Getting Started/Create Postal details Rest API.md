---
sidebar_position: 4
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Postal details Rest API Design Document

Create a **REST API** which will accept **customer Id** as **query parameter**. 
Use that **customer Id** to fetch the data from **Customer Database** in order to get **PIN** code for that customer. Use this **PIN** code to get postal address details from India Post **Rest API**. 
Transform the response in the desired format to generate final response

## Postal details Rest API:
`Description:`

It is an API which is used to get customer data from DB and use that data to get postal details from India Post API. We have the customer database and it has following no of columns in remote DB as shown below
Customer’s table column name
> Id:
>> Integer

> first_name:
>> varchar

> last_name:
>> varchar

> address:
>> varchar

> pin:
>> Integer

> email:
>> varchar

> login:
>> varchar

> identifier:
>> varchar


`End-Points:` 
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

Select relevant project and create services in that project
<img src={useBaseUrl('/img/DB_Rest_API/6.png')} />;
<img src={useBaseUrl('/img/DB_Rest_API/7.png')} />;

Once service name is provided, canvas will show up:

<img src={useBaseUrl('/img/DB_Rest_API/8.png')} />;

Drag utility component to add start and end logger for you service.


<img src={useBaseUrl('/img/DB_Rest_API/9.2.png')} />;

![Quick Integration Platform](/img/DB_Rest_API/9.png)
<img src={useBaseUrl('/img/DB_Rest_API/9.png')} />;

Drag URIVALIDATOR to validate the URL.

<img src={useBaseUrl('/img/DB_Rest_API/10.2.png')} />;

<img src={useBaseUrl('/img/DB_Rest_API/10.png')} />;

Drag DB connector to make DB call in the service.

<img src={useBaseUrl('/img/DB_Rest_API/11.2.png')} />;

Add DB connectivity details in configuration:





Select the database configuration created to configure DB component:

<img src={useBaseUrl('/img/DB_Rest_API/11.png')} />;

Define Global variables to be used in the service:















Drag REST component to make India Post REST API call to get postal details based on PIN code.

<img src={useBaseUrl('/img/DB_Rest_API/12.2.png')} />;

<img src={useBaseUrl('/img/DB_Rest_API/12.pn')} />;                             