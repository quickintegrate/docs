---
sidebar_position: 1
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import { Image, Video } from '@site/src/components/custom';

# MCP tool

This page lets user to generate MCP tools by using JDBC datasource or custom entity models.


#### Navigate to the MCP tool gen: 

Go to **DEVELOP** >> **MCP** >> **MCP Tool**

<img src={useBaseUrl('img/Develop/mcp/design/design-left-panel.png')} />

#### Generating of MCP tools: 

In **MCP tool gen** you can create the tool using
- Auto (JDBC datasource)
- Design (entity model)

<img src={useBaseUrl('img/Develop/mcp/design/creation-type.png')} />

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
6. Select the fields in the **Entity Structure** section which needs to be present in MCP tool
7. After selecting the fiels, click on the **view** button to see the tool name, tool description, parameters, methods.
8. If everything is verified, finally click on generate button to generate MPC tools in the project
9. The page will be redirected to the **MCP studio** page, after all required tools are generated.

<Video src="img/Develop/mcp/design/mcp-auto.mp4" type="video/mp4" />


### Tool creation using **Design**

1. Toggle the **Design** button
2. Select the project name from the dropdown in which the tools is to be generated
3. Input the entity name
4. Add the required fields in the **Entity Structure** section which needs to be present in MCP tool
5. After selecting the fiels, click on the **view** button to see the tool name, tool description, parameters, methods.
6. If everything is verified, finally click on generate button to generate MPC tools in the project
7. The page will be redirected to the **MCP studio** page, after all required tools are generated.

<Video src="img/Develop/mcp/design/mcp-design.mp4" type="video/mp4" />