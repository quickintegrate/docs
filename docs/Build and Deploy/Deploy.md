---
sidebar_position: 2
slug: "deploy"
sidebar_label: "Deploy"
---

import { Image, Video } from '@site/src/components/custom';

# Application Deployment

Now that you have Build your application, let’s deploy from within Quickintegration to CloudHub,
Understanding the process of Deploying an API within the Quickintegration platform holds significant importance.

## Configuration

1. Open: **Execute / Deploy**
2. By default **Applications** tab is selected which shows list of configured applications and there status.

<Image cls="border mb-2" src="/img/Execute/Deploy/applications.png" alt="Deployed Application List" />

3. Select the environment from dropdown to  view / deploy application(s) to specific environment.
4. Click on Deploy Application tab.
5. Select project name and build version from dropdown.
6. By default the **Runtime** values like CPU is set to **0.25 %** and Memory to **512 MB**. This can be increase according to application requirement.
   Options:
   - *CPU* - 0.25 / 0.5 / 1 / 2 core
   - *Memory* - 512 MB / 1 GB / 2 GB
7. Now go to **Properties** tab and provide security key to encrypt crendentials like passwords, api-key, etc. configured in connection properties.
8. You can edit properties like change server credentials, enable/disable service monitoring.
9. Once you have set all configurations, you can now click on deploy application to configure your deployment.

## Start app

1. Now go back to **Applications** tab, click on application name that you just configured.
2. This will take you to **Application Details** page on which you can provide the same security key that you provided while configuration and click on `start` button.
3. Please wait for few minutes as the deployment may take some time to get your application up and running.
4. Congratulations! you have successfully deployed your application. You can access the application by copying `Deployment URL` shown in **Details** tab.

<Video src="/img/Execute/Deploy/deployment.mp4" type="video/mp4" />

:::note
   - Crendentials will only be encrpyted while deployment if checked in connection properties.
   - Applications deployed in environments other than **production** will be stopped after a runtime of *half an hour*. 
:::

## Test using Postman

<Image src="/img/Execute/Deploy/postman.png" alt="Accessing application using postman" />

## Logging

:::info
    - By default the **Logs** tab shows `250` logged lines from past `24 hrs`.
    - Last 3 days logs are kept for an application.
:::

#### Filter By :

1. No. of logged lines.
2. Start and End datetime.
3. Keyword search (*case sensitive*).

<Video src="/img/Execute/Deploy/logging.mp4" type="video/mp4" />
