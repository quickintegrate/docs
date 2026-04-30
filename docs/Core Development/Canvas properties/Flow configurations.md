---
sidebar_position: 1
slug: "Flow configurations"
sidebar_label: "Flow configurations"
---

import { Badge } from "@site/src/components/custom";
import { Image } from '@site/src/components/custom';

# Flow configurations

Configure quickintegration flow to enable monitoring, add custom tracking, define input and output schemas. **Right click** on the canvas to access all the options.

<Image src="/img/Canvas properties/flow-configuration.png" alt="flow-configuration" />

## Supported features

## 1. Description

Add a flow description to describe what flow service does.
This description will be added in **swagger** file of the service and in the API portal of **Monitoring** service.

<Image src="/img/Canvas properties/description.png" alt="description" />

## 2. Tracking Id

You can add a custom **Tracking Id** for better traceability.
The custom tracking id will be displayed in the **application logs**.
Same will be shown at **transaction monitoring** page in monitoring service.
The value provided in this section should be passed as header when sending the request to the application.

<Image src="/img/Canvas properties/tracking-id.png" alt="tracking-id" />

### Configuration
:::note
- Transaction id will replace the autogerated transcation id of the request
:::

1. Right click on the blank canvas
2. Add the header key name which will be passed in the request headers
3. Click save

## 3. Enable monitoring

By selecting enable monitoring, user can monitor the application in **monitoring UI** service. Every request made to the application will be monitored.

<Image src="/img/Canvas properties/enable-monitoring.png" alt="enable-monitoring" />

### 4. Add Masking keys
1. Mask values corresponding to a specified set of keys. The masked keys values will not be visible in the transaction page in **monitoring UI**.
2. Multiple keys can be provided using comma as delimiter

### 5. Add restricted keys

Restrict any top level keys which should not be visible to transaction.

#### Configuration
:::note
- Masking keys supports top level and nested keys
    - eg: REQUEST_PARAMS,email,phone_number
- Restricted kets only support top level keys
    - eg: REQUEST_PARAMS,REQUEST_BODY
:::

1. Right click on the blank canvas
2. Check `enable monotoring`
3. Add `masking keys` or `Restricted keys` as per requirement
4. Multiple keys can be added using comma delimiter without space in between
5. Click save

<Image src="/img/Canvas properties/masking-restricted-keys.png" alt="masking-restricted-keys.png" />

## 6. Input schema

Define input schemas for request params and request body

<Image src="/img/Canvas properties/input.png" alt="input" />
<Image src="/img/Canvas properties/request-body.png" alt="request-body" />

#### Configuration

1. Add request param key and its data type in `Request Params` section
2. Click `plus button` to add multiple request params
3. Select `Request Body` radio button to add request body
    - Select `Content Type` from:
        - application/json
        - application/xml
        - text/csv
        - text/plain
    - Select `value` to directly input the schema
    - Select `Template` to upload the schema

:::note
- The schemas options is only available for REST, SOAP and MCP tool services, and it will be added in swagger file of the service
:::

## 7. Output schema

Define output schemas for the service using value or template.

<Image src="/img/Canvas properties/output.png" alt="output" />

#### Configuration

1. Select `Content Type`from:
    - application/json
    - application/xml
    - text/csv
    - text/plain
2. Select `value` to directly input the schema
3. Select `Template` to upload the schema
