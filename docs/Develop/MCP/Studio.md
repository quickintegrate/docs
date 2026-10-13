---
sidebar_position: 1
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Studio

MCP studio provides drag and drop functionaly to create complex MCP tools easily. There are multiple connectors, components, transformers and AI tools that will help user to create powerful MCP tools that can be utilzed by AI agents and MCP clients.


#### Navigate to the MCP studio: 

Go to **DEVELOP** >> **MCP** >> **Studio**

<img src={useBaseUrl('img/Develop/mcp/studio/studio-left-panel.png')} />


#### Creation of MCP tools: 

In Studio You can create the tool using
- Advance AI feature by describing what tool does
- Manual drag and drop MCP tool creation
- Uploading a swagger file

<img src={useBaseUrl('img/Develop/mcp/studio/creation-type.png')} />

### Tool creation using AI

1. Select a project from the dropdown menu column to create a **MCP tool** within it
2. Click on the first button on the top right and write the description of the tool and click generate service
<img src={useBaseUrl('img/Develop/mcp/studio/mcp-prompt-creation.png')} />
3. The tool will be automaically created (It will take few minutes to create the tool)
4. After the tools is created, click on the tool to open in canvas and edit accordingly and save the tool.
<img src={useBaseUrl('img/Develop/mcp/studio/mcp-prompt-canvas.png')} />


### Tool creation using manually

1. Select a project from the dropdown menu column to create a **MCP tool** within it
2. Click on the **plus** button on the top right, specify the MCP tool name and select the trigger **Private Flow** from the dropdown menu provided below.
<img src={useBaseUrl('img/Develop/mcp/studio/mcp-manual-creation.png')} />
3. After the tools is created, click on the tool to open in canvas and edit accordingly and save the tool.
4. Once the tool service is created, implement tool logic by using the connectors, components on the left panel by dragging and dropping to the canvas.
5. Once the desired tool is created, save the service.
<img src={useBaseUrl('img/Develop/mcp/studio/mcp-manual-canvas.png')} />


### Tool creation by uploading swagger file

1. Select a project from the dropdown menu column to create a **MCP tool** within it
2. Click on the **upload** button on the top right, browse and select the swagger file and click upload
<img src={useBaseUrl('img/Develop/mcp/studio/mcp-swagger-creation.png')} />
3. Once the file is uploaded, the tools will be listed in the current project.