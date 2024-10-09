---
sidebar_position: 1
slug: "Flow configurations"
sidebar_label: "Flow configurations"
---

import { Badge } from "@site/src/components/custom";
import { Image } from '@site/src/components/custom';

# Flow configurations

Configure quickintegration flow to enable monitoring, add custom tracking, define input and out schemas.

## Supported features

1. Add flow description
2. Enable monitoring
3. Add tracking id
4. Define input schema
5. Define output schema

<Image src="/img/Canvas properties/flow-configuration.png" alt="flow-configuration" />

## Description

Add a flow description to describe what flow service does.

<Image src="/img/Canvas properties/description.png" alt="description" />

## Enable monitoring

By selecting enable monitoring, user can monitor the application in monitoring UI.

<Image src="/img/Canvas properties/enable-monitoring.png" alt="enable-monitoring" />

### Add Masking keys

1. Mask values corresponding to a specified set of keys. The masked keys values will not be visible in the transaction.
2. Multiple keys can be provided using comma as delimiter

### Add restricted keys

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
4. Multiple keys can be added using comma delimiter without space in between.
5. Click save

## Transaction id

Define custom transcation id for easy tracking of service requests.

<Image src="/img/Canvas properties/tracking-id.png" alt="tracking-id" />

### Configuration
:::note

- Transaction id will replace the autogerated transcation id of the request
:::

1. Right click on the blank canvas
2. Add the header key name which will be passed in the request headers
3. Click save

## Input schema

Define input schemas for request params and request body

<Image src="/img/Canvas properties/input.png" alt="input" />

### Configuration

1. Add request param key and its data type in `Request Params` section
2. Click `plus button` to add multiple request params
3. Select `Request Body` radio button to add request body
    - Select `value` to directly input the schema
    - Select `Template` to upload the schema
    - Select `Schema Type` as XML or JSON or CSV or TEXT

## Output schema

Define output schemas like for flow response

<Image src="/img/Canvas properties/output.png" alt="output" />

### Configuration

1. Select `value` to directly input the schema
2. Select `Template` to upload the schema
3. Select `Schema Type` as XML or JSON or CSV or TEXT
