---
sidebar_position: 1
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Studio

Agentic Studio combines integration triggers with built-in tools and AI capabilities, allowing you to create advanced agentic workflows, orchestrate multi-step tasks, and manage services equipped with both custom tools and standard integration triggers.

#### Navigate to the Agentic Studio:

Go to **DEVELOP** >> **Agentic** >> **Studio**

#### Service & Tool Creation:

In Agentic Studio, you can create and configure services that integrate triggers, custom tools, and execution flows to power your agentic applications.

---

### Duplicate Service

The **Duplicate Service** feature allows you to replicate an existing service and its graphical flow (along with the underlying service JSON) into a target project. This avoids the time-consuming process of recreating complex flows from scratch.

#### Key Considerations & Technical Scope:
- **What gets copied:** The service graph, node layout, and underlying service JSON configuration are fully duplicated into the new service.
- **What needs manual setup:** Duplicating a service **does not** replicate external connection properties, environment resources, global variables, custom class code, or project dependencies. You must manually configure or bind these in the target scope/project after duplication.
- **REST Endpoint Behavior:** For services using a **REST Trigger**, the URL will automatically be prefixed with `/duplicate/` followed by the original URL path.

---

#### Step 1:

From the services list table in Studio, click the **Duplicate** button for the specific service you want to copy.

<img src={useBaseUrl('/img/Develop Functionality/agentic/duplicate.png')} />

#### Step 2:

A modal popup will appear for the duplication configuration.

<img src={useBaseUrl('/img/Develop Functionality/agentic/Duplicate Popup.png')} />

#### Step 3:

- Select the **Target Project** from the dropdown menu (you can choose the current project or a different one).
- Enter the **Service Name** in the input field (you can retain the original name or provide a new name).
- Once both fields are set, click **Submit**.

<img src={useBaseUrl('/img/Develop Functionality/agentic/Duplicate Submit.png')} />

#### Step 4:

- **Successful Duplication:** If the service name is unique and not already taken within the target project, the service will be successfully created and the page will redirect to that target project workspace.

<img src={useBaseUrl('/img/Develop Functionality/agentic/Duplicate Success Redirect.png')} />

- **Duplicate Error:** If a service with that name already exists in the target project, an error alert will be thrown.

<img src={useBaseUrl('/img/Develop Functionality/agentic/Duplicate Error Alert.png')} />