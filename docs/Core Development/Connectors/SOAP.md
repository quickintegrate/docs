---
sidebar_position: 8
slug: "soap-connector"
sidebar_label: "SOAP"
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import { Badge } from "@site/src/components/custom";
import { Image, Video } from '@site/src/components/custom';

# SOAP Connector

The SOAP Connector facilitates communication with SOAP web services, allowing you to integrate with systems that expose their functionalities via the SOAP protocol. It simplifies the process of sending SOAP requests and processing responses within your flows.

:::note
- The SOAP Connector exclusively uses **POST** requests for all interactions.
- It supports an **Enable Retry** mechanism for handling transient network issues or service unavailability.
:::

## Configuration

To configure the SOAP Connector, follow these steps:

1.  Drag and drop the **SOAP Connector** from the connectors panel onto your design canvas. Give the node a descriptive name.
<Image src="/img/Connectors/SOAP_connector.png" alt="Soap Connector" />

2.  Right-click on the connector node to access its configuration properties. You will define the following parameters:

### General Settings

<table>
    <thead>
        <tr>
            <th>Fields</th>
            <th>Description</th>
            <th>Example</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Datasource Name</td>
            <td>The name of the datasource configured in connection properties that provides the base URL for the SOAP service. This is a mandatory field.</td>
            <td><code>soapds</code></td>
        </tr>
        <tr>
            <td>Base Path</td>
            <td>The specific path to the SOAP web service endpoint. This is appended to the datasource's base URL to form the complete service URL. This is a mandatory field.</td>
            <td><code>/webserviceserver/NumberConversion.wso</code></td>
        </tr>
        <tr>
            <td>Enable Retry</td>
            <td>A checkbox to enable or disable automatic retries for the SOAP call in case of failure.</td>
            <td>(checkbox)</td>
        </tr>
    </tbody>
</table>

### Input Configuration

The SOAP Connector supports two methods for providing the SOAP request body: direct input from the pipeline or using a pre-defined template.

#### 1. Using a Template

Select the **Use Template** radio button if your SOAP request body is stored as a resource. You will need to select the resource name from the dropdown.

<Image src="/img/Core Development/Connectors/SOAP/template_input.png" alt="SOAP Connector Configuration with Template Input" />

:::note
- The resource needs to uploaded to see it in dropdown.
:::

<table>
    <thead>
        <tr>
            <th>Fields</th>
            <th>Description</th>
            <th>Example</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Resource name</td>
            <td>The name of the template resource containing the SOAP request XML. This template will be used as the body for the SOAP call.</td>
            <td><code>soap</code></td>
        </tr>
    </tbody>
</table>

#### 2. Direct Input / Body

Select the **Input** radio button if the SOAP request body is provided directly from the pipeline (e.g., from a previous step's output variable) or as a static string.

<Image src="/img/Core Development/Connectors/SOAP/direct_input.png" alt="SOAP Connector Configuration with Direct Input" />

<table>
    <thead>
        <tr>
            <th>Fields</th>
            <th>Description</th>
            <th>Example</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Input / Body</td>
            <td>The variable or static string containing the SOAP request XML. This can be a reference to a pipeline variable like <code>$REQUEST_PAYLOAD</code> or a static XML string.</td>
            <td><code>$REQUEST_PAYLOAD</code></td>
        </tr>
    </tbody>
</table>

### Output Configuration

<table>
    <thead>
        <tr>
            <th>Fields</th>
            <th>Description</th>
            <th>Example</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Output Variable</td>
            <td>The name of the variable where the response from the SOAP call will be stored. This is a mandatory field.</td>
            <td><code>consumeSoapO</code></td>
        </tr>
    </tbody>
</table>

### Retry
Retry is flag passed on connector nodes, like SOAP, to allow the step to be retryable if any exception occurs. It has 2 configurable properties.<br/>
1. maxRetryAttempts: The max number of retries if any exception occurs. max attempts are 3.
2. retryIntervalMillis: The max interval between retries. Max range is 6000ms.

Enable retry by cliking on the **Enable Retry** radio button at the top of the configuration pannel.

<Image src="/img/Connectors/retry.png" alt="Retry" />