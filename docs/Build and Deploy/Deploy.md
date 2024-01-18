---
sidebar_position: 2
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Deploy

Now that you have Build your application, let’s deploy from within Quickintegration to CloudHub,
Understanding the process of Deploying an API within the Quickintegration platform holds significant importance.

Go to **Execute** >> **Deploy** API

<img src={useBaseUrl('/img/Build&Deploy/Execute-Deploy.png')} />;

When you navigate to the page, you'll encounter the status of the Deployed Application. To start deploying your application, click on **Deploy Application.**

<img src={useBaseUrl('/img/Core Development/Execute API/Deploy application.png')} />;


Please access the dropdown menu and choose the appropriate project.

<img src={useBaseUrl('/img/Core Development/Execute API/drop down deploy.png')} />;


Click on the **Properties**
Enter the security key, Encrypt the value, and proceed by clicking on **Deploy Application.**

<img src={useBaseUrl('/img/Core Development/Execute API/deploy application button.png')} />;


Once the application deployment process finishes, a popup will confirm successful deployment.

<img src={useBaseUrl('/img/Core Development/Execute API/successfully deploy.png')} />;

Go to the **Application** Column and select the relevant project to initiate the deployed application.

<img src={useBaseUrl('/img/Core Development/Execute API/application colum deploy.png')} />;


Within the **Runtime Properties**, Provide the security key for Decryption,Which you have Encrypt then click the **Start** button to deploy your application

<img src={useBaseUrl('/img/Core Development/Execute API/Start deploy .png')} />;


Within the Details Column, you'll find all the information about your API, including the deployed URL for testing it.

<img src={useBaseUrl('/img/Core Development/Execute API/details .png')} />;


Using the QuickIntegrate deployed URL You can Test your API using Postman Collection

<img src={useBaseUrl('/img/DB_Rest_API/postman.png')} />;