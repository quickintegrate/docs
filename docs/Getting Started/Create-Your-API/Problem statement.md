---
sidebar_position: 1
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import CodeBlock from '@theme/CodeBlock';

# Problem Statement

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


