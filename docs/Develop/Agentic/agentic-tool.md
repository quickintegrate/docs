---
sidebar_position: 1
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import { Image, Video } from '@site/src/components/custom';

# Agentic tool

This page lets user to generate Agentic tools by using JDBC datasource or custom entity models.


#### Navigate to the Agentic tool gen: 

Go to **DEVELOP** >> **AGENTIC** >> **Agentic Tool**

<img src={useBaseUrl('img/Develop/agentic/design/design-left-panel.png')} />

#### Generating of Agentic tools: 

In **Agentic tool gen** you can create the tool using
- Auto (JDBC datasource)
- Design (entity model)

<img src={useBaseUrl('img/Develop/agentic/design/creation-type.png')} />

### Tool generation using **Auto**

1. Toggle the **Auto** button if not selected
2. Select the project name from the dropdown in which the tools is to be generated
3. To create new JDBC datasource connection follow below steps:

:::note
The DDL schema should be present already. To upload new DDL schema refer [Data API](/docs/Develop/Integration/Data%20API.md)
:::
  - Click on the **plus sign**
  - Add the datasource name
  - Select the DDL schema already uploaded
  - Click submit
4. Select the datasource name from the dropdown list
5. Select the entity from the dropdown list
6. Select the fields in the **Entity Structure** section which needs to be present in Agentic tool
7. After selecting the fiels, click on the **view** button to see the tool name, tool description, parameters, methods.
8. If everything is verified, finally click on generate button to generate MPC tools in the project
9. The page will be redirected to the **Agentic studio** page, after all required tools are generated.

<Video src="img/Develop/agentic/design/agentic-auto.mp4" type="video/mp4" />


### Tool creation using **Design**

1. Toggle the **Design** button
2. Select the project name from the dropdown in which the tools is to be generated
3. Input the entity name
4. Add the required fields in the **Entity Structure** section which needs to be present in Agentic tool
5. After selecting the fiels, click on the **view** button to see the tool name, tool description, parameters, methods.
6. If everything is verified, finally click on generate button to generate MPC tools in the project
7. The page will be redirected to the **Agentic studio** page, after all required tools are generated.

<Video src="img/Develop/agentic/design/agentic-design.mp4" type="video/mp4" />