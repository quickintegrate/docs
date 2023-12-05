---
sidebar_position: 3
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Build a CURD API using SFDC Contact table from Start to Finish

## Problem Statement
Develop a **SFDC Contact API** on quickintegrate platform which will support **Create/Retrieve/Update/Delete** operation on Contact object in **Salesforce**.

### Methods:  
   #### POST
   #### PATCH
   #### GET
   #### DELETE

 `End Point:`
 
 POST http://run.quickintegrate.io/dev/sfdc_contact_api/contact

 PATCH : http://run.quickintegrate.io/dev/sfdc_contact_details/contact/{Id}

 GET (All Contacts) :  http://run.quickintegrate.io/dev/sfdc_contact_api/contacts

 GET (Specific Contact): http://run.quickintegrate.io/dev/sfdc_contact_api/contact/{Id}

 DELETE :  http://run.quickintegrate.io/dev/sfdc_contact_api/contact/{Id}

   
<img src={useBaseUrl('/img/SFDC/1services.png')} />;


## SFDC CONTACT API Flow 

<img src={useBaseUrl('/img/SFDC/2ui.png')} />;

#### POST:

 `Description:`

**POST** endpoint will be used to create records in **Contact object** salesforce

<img src={useBaseUrl('/img/SFDC/POST.png')} />;
    
 `End-Points:`

https://login.salesforce.com/services/oauth2/token
https://atdevcom-dev-ed.my.salesforce.com/services/data/v55.0/sobjects/Contact

#### DELETE: 
 `Description:`
**DELETE** endpoint will be used to delete records from **Contact object** salesforce.

<img src={useBaseUrl('/img/SFDC/DELETE.png')} />;

 `End-Points:`

https://atdevcom-dev-ed.my.salesforce.com/services/data/v55.0/sobjects/Contact/{Id}

#### GET:
 `Description:`
**GET** endpoint will be used to retrieve records from **Contact object** salesforce.

<img src={useBaseUrl('/img/SFDC/GET.png')} />;

<img src={useBaseUrl('/img/SFDC/GET%20All.png')} />;

 `End-Points:`

**GET All Contacts:**
https://atdevcom-dev-ed.my.salesforce.com/services/data/v55.0/sobjects/Contact

**GET Specific Contact:**
https://atdevcom-dev-ed.my.salesforce.com/services/data/v55.0/sobjects/Contact/{Id}

#### PATCH:
 `Description:`
**PATCH** endpoint will be used to update records in **Contact object** salesforce.

<img src={useBaseUrl('/img/SFDC/PATCH.png')} />;

 `End-Points:`

https://atdevcom-dev-ed.my.salesforce.com/services/data/v55.0/sobjects/Contact/0035i000009obUrAAI










