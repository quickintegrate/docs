---
sidebar_position: 9
slug: "dynamic-datasource-connector"
sidebar_label: "Dynamic Datasource"
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import { Badge } from "@site/src/components/custom";
import { Image, Video } from '@site/src/components/custom';

# Dynamic Datasource Connector

The Dynamic Datasource Connector provides a flexible way to interact with external services, particularly REST APIs, where connection parameters are not predefined but are determined dynamically at runtime from the pipeline data. Unlike traditional connectors that rely on pre-configured datasources and client beans initialized at startup, this connector creates the necessary client configurations per request, offering unparalleled adaptability for dynamic integration scenarios.

:::note
- This connector is currently implemented as a **Dynamic REST Connector**, leveraging the underlying `INTRESTProcessor` for its operations.
- It is ideal for scenarios where connection details (such as protocol, domain, or base path) need to vary based on the incoming request or flow data.
- The REST client is created at runtime for each request, allowing for highly dynamic and context-specific integrations.
:::

## Key Features

*   **Runtime Configuration**: All connection parameters are resolved dynamically from the pipeline, eliminating the need for static, predefined connection properties.
*   **Flexible Integration**: Supports integration with a multitude of REST services whose endpoints or authentication mechanisms might change per transaction.
*   **Full REST Method Support**: Inherits support for all standard HTTP methods (GET, POST, PUT, DELETE, PATCH) from the underlying REST processor.

## Configuration

To configure the Dynamic Datasource Connector, follow these steps:

1.  Drag and drop the **Dynamic Datasource Connector** onto your design canvas and assign it a meaningful name.

2.  Access its configuration properties. The fields below are designed to accept dynamic values, typically from pipeline variables (e.g., `$REQUEST_PARAMS`, `$VARIABLES`).

<Image src="/img/Core Development/Connectors/DynamicDatasource/config.png" alt="Dynamic Datasource Connector Configuration" />

<table>
    <thead>
        <tr>
            <th>Fields</th>
            <th>Description</th>
            <th>Example (Dynamic Value)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Enable Retry</td>
            <td>A checkbox to enable or disable automatic retries for the dynamic call in case of failure.</td>
            <td>(checkbox)</td>
        </tr>
        <tr>
            <td>Connector</td>
            <td>Specifies the type of underlying connector to be used dynamically. Currently, this is fixed to <code>REST</code>.</td>
            <td><code>REST</code></td>
        </tr>
        <tr>
            <td>Method</td>
            <td>The HTTP method to be used for the request. This value is typically sourced from pipeline parameters.</td>
            <td><code>$REQUEST_PARAMS.method</code></td>
        </tr>
        <tr>
            <td>Protocol</td>
            <td>The protocol (e.g., <code>http</code>, <code>https</code>) for the dynamic connection.</td>
            <td><code>$REQUEST_PARAMS.protocol</code></td>
        </tr>
        <tr>
            <td>Port</td>
            <td>The port number for the dynamic connection.</td>
            <td>(empty or dynamic value)</td>
        </tr>
        <tr>
            <td>Domain</td>
            <td>The domain name or IP address of the target service.</td>
            <td><code>$REQUEST_PARAMS.domain</code></td>
        </tr>
        <tr>
            <td>Basepath</td>
            <td>The base path for the API endpoint, appended to the domain.</td>
            <td><code>$REQUEST_PARAMS.basepath</code></td>
        </tr>
        <tr>
            <td>Connection Timeout (ms)</td>
            <td>The maximum time in milliseconds to wait for a connection to establish.</td>
            <td><code>60000</code></td>
        </tr>
        <tr>
            <td>Read Timeout (ms)</td>
            <td>The maximum time in milliseconds to wait for data to be received after a connection is established.</td>
            <td><code>60000</code></td>
        </tr>
        <tr>
            <td>Input</td>
            <td>The request body or input data for the dynamic call. This can be a static string or a pipeline variable.</td>
            <td><code>input</code> (or a dynamic variable like <code>$REQUEST_PAYLOAD</code>)</td>
        </tr>
        <tr>
            <td>Output Variable</td>
            <td>The name of the variable where the response from the dynamic call will be stored.</td>
            <td><code>dynamicCallO</code></td>
        </tr>
        <tr>
            <td>Headers</td>
            <td>Key-value pairs for HTTP headers, which can also be dynamically set.</td>
            <td><code>Type: header, Key: Content-Type, Value: $VARIABLES.applicationType. Can be static.</code></td>
        </tr>
        <tr>
            <td>Query Param</td>
            <td>Key-value pairs for query params, which can also be dynamically set.</td>
            <td><code>Type: query params, Key: Name of the param, Value: value can static or dynamic</code></td>
        </tr>
        <tr>
            <td>Path Param</td>
            <td>Key-value pairs for path param, which can also be dynamically set.</td>
            <td><code>Type: path params, Key: Name of the param, Value: value can static or dynamic</code></td>
        </tr>
    </tbody>
</table>

## Supported Operations

As the Dynamic Datasource Connector leverages the underlying REST processor, it supports all standard HTTP methods:

1.  <Badge cls="info" method="GET" />
2.  <Badge cls="success" method="POST" />
3.  <Badge cls="warning" method="PUT" /> / <Badge cls="success" method="PATCH" />
4.  <Badge cls="danger" method="DELETE" />

### Retry
Retry is flag passed on connector nodes, like SOAP, to allow the step to be retryable if any exception occurs. It has 2 configurable properties.<br/>
1. maxRetryAttempts: The max number of retries if any exception occurs. max attempts are 3.
2. retryIntervalMillis: The max interval between retries. Max range is 6000ms.

Enable retry by cliking on the **Enable Retry** radio button at the top of the configuration pannel.

<Image src="/img/Connectors/retry.png" alt="Retry" />
