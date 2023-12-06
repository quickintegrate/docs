---
sidebar_position: 2
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import CodeBlock from '@theme/CodeBlock';

# Create Your first hello world API
## Problem Statement

Develop a **Hello World** REST API on quick integration platform which will accept a GET request and return below message as a response:

<CodeBlock className="language-json">{JSON.stringify({
    "status": "hello world"
}, null, 2)}</CodeBlock>


#### SETP 1:
Login to Quick Integration Platform to get started.

<img src={useBaseUrl('/img/DB_Rest_API/1.png')} />;

#### STEP 2:
Click on **Manage** Option >> **Projects** >> **Create** to create the new project

<img src={useBaseUrl('/img/DB_Rest_API/2.png')} />;
<img src={useBaseUrl('/img/DB_Rest_API/3.png')} />;

#### STEP 3:
Go to **DEVELOP** >> **Functionality** API

<img src={useBaseUrl('/img/DB_Rest_API/5.png')} />;

#### STEP 4:
Select the created project name

Create a service **hello world** In your project

<img src={useBaseUrl('/img/hello/1service%20.png')} />;

#### Step 5:  
Take REST Trigger from the pallet and configure it.

<img src={useBaseUrl('/img/hello/2trigger path.png')} />;

#### Step 6:
Drag and drop APIRESPONSE component from the pallet.
Always put value in trans by Utils.constant

<img src={useBaseUrl('/img/hello/3API_Response.png')} />;

#### Step 7: 
Save the application.

<img src={useBaseUrl('/img/hello/4save.png')} />;

#### Step 8:
Build the application.

<img src={useBaseUrl('/img/hello/5build api.png')} />;

#### Step 9:
Deploy the application after build. Click on the project and pass the security key in application. Click on deploy application.

<img src={useBaseUrl('/img/hello/6deploy application .png')} />;

#### Step 10: 
Bring **UP** the application by clicking on project.

<img src={useBaseUrl('/img/hello/7application .png')} />;

#### Step 11:
Provide the security key and start the API.

<img src={useBaseUrl('/img/hello/8start application.png')} />;

#### Step 12:
Postman request and response for the hello world API.

<img src={useBaseUrl('/img/hello/9output response.png')} />;






