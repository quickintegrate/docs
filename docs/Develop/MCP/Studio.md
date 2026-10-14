---
sidebar_position: 1
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Studio

MCP studio provides drag and drop functionality to create complex MCP tools easily. There are multiple connectors, components, transformers and AI tools that will help users create powerful MCP tools that can be utilized by AI agents and MCP clients.


#### Navigate to the MCP studio: 

Go to **DEVELOP** >> **MCP** >> **Studio**

<img src={useBaseUrl('img/Develop/mcp/studio/studio-left-panel.png')} />


#### Creation of MCP tools: 

In Studio you can create the tool using:
- Advanced AI feature by describing what the tool does
- Manual drag and drop MCP tool creation
- Uploading a swagger file

<img src={useBaseUrl('img/Develop/mcp/studio/creation-type.png')} />

### Tool creation using AI

1. Select a project from the dropdown menu column to create an **MCP tool** within it.
2. Click on the first button on the top right, write the description of the tool, and click generate service.
<img src={useBaseUrl('img/Develop/mcp/studio/mcp-prompt-creation.png')} />
3. The tool will be automatically created (it will take a few minutes to generate).
4. After the tool is created, click on the tool to open it in canvas, edit accordingly, and save the tool.
<img src={useBaseUrl('img/Develop/mcp/studio/mcp-prompt-canvas.png')} />


### Tool creation manually

1. Select a project from the dropdown menu column to create an **MCP tool** within it.
2. Click on the **plus** button on the top right, specify the MCP tool name, and select the trigger **Private Flow** from the dropdown menu provided.
<img src={useBaseUrl('img/Develop/mcp/studio/mcp-manual-creation.png')} />
3. After the tool is created, click on it to open it in canvas, edit accordingly, and save the tool.
4. Once the tool service is created, implement the tool logic using the connectors and components on the left panel by dragging and dropping them onto the canvas.
5. Once the desired tool is created, save the service.
<img src={useBaseUrl('img/Develop/mcp/studio/mcp-manual-canvas.png')} />


### Tool creation by uploading swagger file

1. Select a project from the dropdown menu column to create an **MCP tool** within it.
2. Click on the **upload** button on the top right, browse and select the swagger file, and click upload.
<img src={useBaseUrl('img/Develop/mcp/studio/mcp-swagger-creation.png')} />
3. Once the file is uploaded, the tools will be listed in the current project.

---

### Duplicate Tool Service

The **Duplicate Tool** feature allows you to replicate an existing MCP tool service along with its graphical flow (and underlying service JSON) into a target project. When you need the same tool logic in another project, duplicating saves time and avoids rebuilding the flow from scratch.

#### Key Considerations & Technical Scope:
- **What gets copied:** The tool service graph, node layout, and underlying service JSON configuration are fully duplicated into the new tool service.
- **What needs manual setup:** Duplicating a tool service **does not** replicate external connection properties, environment resources, global variables, custom class code, or project dependencies. You must manually configure or bind these in the target project after duplication.

---

#### Step 1:

From the tools list table in MCP Studio, click the **Duplicate** button for the specific tool service you want to copy.

<img src={useBaseUrl('/img/Develop Functionality/mcp/duplicate.png')} />

#### Step 2:

A modal popup will appear for the duplication configuration.

<img src={useBaseUrl('/img/Develop Functionality/mcp/Duplicate Popup.png')} />

#### Step 3:

- Select the **Target Project** from the dropdown menu (you can choose the current project or a different one).
- Enter the **Tool Service Name** in the input field (you can retain the original name or provide a new name).
- Once both fields are set, click **Submit**.

<img src={useBaseUrl('/img/Develop Functionality/mcp/Duplicate Submit.png')} />

#### Step 4:

- **Successful Duplication:** If the tool service name is unique and not already taken within the target project, the tool will be successfully created and the page will redirect to that target project workspace.

<img src={useBaseUrl('/img/Develop Functionality/mcp/Duplicate Success Redirect.png')} />

- **Duplicate Error:** If a tool service with that name already exists in the selected target project, an error alert will be thrown.

<img src={useBaseUrl('/img/Develop Functionality/mcp/Duplicate Error Alert.png')} />