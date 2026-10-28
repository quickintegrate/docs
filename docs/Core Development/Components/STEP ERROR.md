---
sidebar_position: 3
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Step Error

The **Step Error** component handles errors raised by a specific connector or step in an API flow. Use it when you want to define a dedicated error-handling flow for a particular step, such as a database operation that might fail because of a query, data, or connection issue.

A Step Error container must be linked to exactly one step. It must also contain at least one node. Linking the container alone does not register the exception handler: configure and save the container and its handling flow.

## Add and name the Step Error container

Drag the **Step Error** container into the API flow, then give it a clear, descriptive name.

<img
  src={useBaseUrl('/img/Core Development/Components/Step Error container.png')}
  alt="Adding a Step Error container to the API flow"
/>
<br/>
<br/>
<img
  src={useBaseUrl('/img/Core Development/Components/Name Step Error.png')}
  alt="Naming the Step Error container"
/>

## Link it to a step

Select the connector or step whose errors you want to handle, then select the Step Error container to create the link. A Step Error container can be linked to one step only.

<img
  src={useBaseUrl('/img/Core Development/Components/Link Step Error to step.png')}
  alt="Linking a Step Error container to a specific step"
/>

## Configure the Step Error container

Right-click the Step Error container to open its configuration panel. Choose one of the available options:

- **Propagate** (the default): stop the main flow at this point rather than continuing it.
- **Continue**: after the error-handling flow runs, continue the main flow.

Select an option and save the configuration. The setting is presented in the interface as radio buttons.

<img
  src={useBaseUrl('/img/Core Development/Components/Configure Step Error.png')}
  alt="Step Error configuration panel with Propagate and Continue options"
/>

## Validate the configuration

Use the flow's validation control to check that the Step Error container is registered correctly. Resolve any reported validation errors; a successful validation indicates that the configuration is valid.<br/>
*Failed*
<img
  src={useBaseUrl('/img/Core Development/Components/Step Error validation error.png')}
  alt="Validation error for a Step Error configuration"
/>
<br/><br/>
*Success*
<img
  src={useBaseUrl('/img/Core Development/Components/Step Error validation success.png')}
  alt="Successful validation of a Step Error configuration"
/>

## Build the error-handling flow

Add at least one node inside the Step Error container to handle the error. For example, add a **Utility** node configured as a logger. Select the Step Error container before dragging another component into it so that the new component is added to the error-handling flow.

<img
  src={useBaseUrl('/img/Core Development/Components/Add logger to Step Error.png')}
  alt="Adding a Utility logger node inside the Step Error container"
/>

Configure the logger or other handler node as needed, then save it.

<img
  src={useBaseUrl('/img/Core Development/Components/Configure logger in Step Error.png')}
  alt="Configuring the logger inside the Step Error flow"
/>

## Read or rethrow the error

The error object is available as `$ERROR`. For example, use `$ERROR.message` to access the error message in a logger or another handler.

If the flow needs to raise the exception again, configure a Utility node to throw it. A rethrown error, or an error that is not handled by a Step Error flow, is handled by the **Global Exception** component if one is configured. Otherwise, the application returns its default error response.
