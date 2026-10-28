---
sidebar_position: 2
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Global Exception

The **Global Exception** component is a container-level node for handling errors that are not handled elsewhere in the main API flow. It acts as the final catch point for the flow, allowing you to define what should happen after an error is caught.

If the API flow does not contain a Global Exception component, the application returns its default error response. Only one Global Exception container can be added to an API flow. The container cannot be left empty; it must contain at least one node.

Global Exception container is a independant component and is not part of the main flow, so it is never linked or connected by any nodes.

## Add the Global Exception container

Drag the **Global Exception** container from the component list into the API flow.

<img
  src={useBaseUrl('/img/Core Development/Components/Global Exception container.png')}
  alt="Global Exception container node in the component list"
/>

## Name the container

Give the Global Exception container a clear, descriptive name that identifies its purpose in the API flow.

<img
  src={useBaseUrl('/img/Core Development/Components/Name Global Exception.png')}
  alt="Naming the Global Exception container"
/>

## Define the exception-handling flow

Add the nodes that should run after an unhandled error is caught. The Global Exception container must include at least one node; configure the flow according to the response or follow-up actions required by your API. You have to click/select on the global exception container node, before dragging any node you have to include in this container, else it will be add outside the container.

Once selected the container node, its  border is highlighted.

<img
  src={useBaseUrl('/img/Core Development/Components/Global Exception container highlighted.png')}
  alt="Global Exception container highlighted"
/>
<br/>

Once container selected, you can now drag and drop nodes in it to define how to handle it. In this example we will simply put the logger, by dragging utility node.
<img
  src={useBaseUrl('/img/Core Development/Components/Global Exception flow.png')}
  alt="Nodes inside the Global Exception container"
/>

## Configure the flow

Global Exception Container itself doesnt have any configuration. You have to configure the flow inside the container. Configure the nodes inside the container to determine how the caught exception is handled. You can use the Error object for which the exception occured in the main flow also with **$ERROR** object. Like in the example we are printing the error message in the log.

<img
  src={useBaseUrl('/img/Core Development/Components/Global Exception flow configuration.png')}
  alt="Configuration for the flow inside the Global Exception container"
/>
