---
sidebar_position: 2
slug: "Canvas operations"
sidebar_label: "Canvas operations"
---

import { Badge } from "@site/src/components/custom";
import { Image } from '@site/src/components/custom';

# Canvas operations

Manage flow services like saving, deleting, validating and much more.
<Image src="/img/Canvas properties/canvas-operations.png" alt="canvas-operations" />

## Supported features

## Save

Save flow services to persist the changes.

<Image src="/img/Canvas properties/save.png" alt="save" />

## Validate Flow

Validate the current flow service to ensure all componets are correctly configured.

<Image src="/img/Canvas properties/validate-flow.png" alt="validate-flow" />

## Connection Properties

In terms of integration within the iPASS platform, the connection configurations are centralized within connection properties across all environments. Add connection properties for the specific nodes.

<Image src="/img/Canvas properties/connection-properties.png" alt="connection-properties" />

## Global Variables

Add global variables which will be accessible to the flow service.

<Image src="/img/Canvas properties/global-variables.png" alt="global-variables" />

## Resources

Add any resource file that will be used by the service. You can add JSON, stylesheet file and template files.
<Image src="/img/Canvas properties/resource-logo.png" alt="resource-logo" />
<Image src="/img/Canvas properties/upload-resource.png" alt="upload-resource" />
<Image src="/img/Canvas properties/view-resource.png" alt="view-resource" />


#### Configuration

1. Select the resource button
2. Select the upload section
3. Add name, select schema type and the file to upload
    - Schema type:
        - SCHEMA: for JSON files
        - STYLESHEET: for XML and CSV files
        - TEMPLATE: for FLAT files
4. Click Submit button

## View
Use this button to show the service in main JSON format. This file defines the service you create.

<Image src="/img/Canvas properties/view-logo.png" alt="view-logo" />
<Image src="/img/Canvas properties/view-flow-main-json.png" alt="view-flow-main-json" />

## Delete

Delete the flow service permanently.

<Image src="/img/Canvas properties/delete.png" alt="delete" />