---
sidebar_position: 2
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import CodeBlock from '@theme/CodeBlock';

# Create Your first hello world API

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
Drag and drop **APIRESPONSE**  Transformer from the pallet.
Left click on **APIRESPONSE** Transformer and Configure as given below.

<img src={useBaseUrl('/img/hello/addedsteps/apiresponse_Connector.png')} />;

#### Step 7: 

Click on the Drop down and select Content Type application json

<img src={useBaseUrl('/img/hello/addedsteps/ContentType.png')} />;

<img src={useBaseUrl('/img/hello/addedsteps/Contenttype_addbutton.png')} />;

#### Step 8: 

Click on Add button From Drop down select TRANS

<img src={useBaseUrl('/img/hello/addedsteps/transAdd3.png')} />;

<img src={useBaseUrl('/img/hello/addedsteps/trans type.png')} />;

#### Step 9: 

Click on the add button You will see Inline functions, click on + icon 

<img src={useBaseUrl('/img/hello/addedsteps/addCondition4.png')} />;

#### Step 10: 

Select Utils and Constant from droup down
Add Parameters as a hello world and Save

<img src={useBaseUrl('/img/hello/addedsteps/addParametersand save5.png')} />;

<img src={useBaseUrl('/img/hello/addedsteps/Utils type.png')} />;

<img src={useBaseUrl('/img/hello/addedsteps/Constant .png')} />;

#### Step 11:

<img src={useBaseUrl('/img/hello/addedsteps/save0.6.png')} />;

Target- In target write Status and you will find Key as below


Key- Utils.constant(hello world)

<img src={useBaseUrl('/img/hello/3API_Response.png')} />;

#### Step 12: 
Save the application.

<img src={useBaseUrl('/img/hello/4save.png')} />;

#### Step 13:

Go to **EXECUTE** >> **BUILD** 
to Build the application.

<img src={useBaseUrl('/img/hello/5build api.png')} />;

#### Step 14:
Deploy the application after build. Select the Application Name From Drop down, and pass the security key in Properties. Click on deploy application.

<img src={useBaseUrl('/img/hello/6deploy application .png')} />;

#### Step 15: 
Go to application and Bring **UP** the application by clicking on project.

<img src={useBaseUrl('/img/hello/7application .png')} />;

#### Step 16:
Provide the security key and start the API.

<img src={useBaseUrl('/img/hello/8start application.png')} />;

### Step 17:
Once you Successfully started your API, you will find Development URL in Details Coloumn

<img src={useBaseUrl('/img/hello/addedsteps/details.png')} />;

#### Step 18:
Using the QuickIntegrate deployed URL You can Test your API using Postman Collection

<img src={useBaseUrl('/img/hello/9output response.png')} />;

Final Postman request and response for the hello world API.






