---
sidebar_position: 4
slug: "payload-transformer"
sidebar_label: "PAYLOAD"
---

import { Image, Video } from '@site/src/components/custom';

# Payload Transformer

It resembles an API response but includes an output. We generate customized data through data mapping, employing it as input for subsequent nodes.

:::info
When we want to get a variable from the pipeline, we use **$** sign as prefix followed by Variable name in the pipeline. They can be nested which are seperated by "." Ex. **$Payload.key**

`Note: The variable Payload should be present in the pipeline before getting it.`
:::

## Configuration

1. Drag and drop **PAYLOAD** Transformer from the pallet.

<Image src="/img/Core Development/Transformer/Payload/element.png" alt="PAYLOAD transformer" />

2. Left click on transformer, now you can define the **PAYLOAD Transformer** configuration.
3. Provide the Output variable. **The output variable stores the result of the transformation**.

## Mapping Types

<table>
    <thead>
        <tr>
            <th>Fields</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>GEN</td>
            <td>Get one field from the input and mapped in another field of output</td>
        </tr>
        <tr>
            <td>TRANS</td>
            <td>Transforms the input value with the help of inline transformation functions</td>
        </tr>
        <tr>
            <td>OBJ</td>
            <td>Creates a object with target name as key</td>
        </tr>
        <tr>
            <td>AR</td>
            <td>Mapped the input into an array</td>
        </tr>
    </tbody>
</table>

### 1. TRANS

1. From Dropdown select **TRANS** - Transforms the Input value with the help of inline transformation functions.
2. Click on the add button. You will see Inline functions, click on + icon.
3. Select `Utils` and `Constant` from dropdown. Add Parameters as *Active* and Save.
4. The configuration of the APIRESPONSE Transformer appears as follows:

<Video src="/img/Core Development/Transformer/Payload/TRANS.mp4" type="video/mp4" />

- **Target** - In target write Status and you will find Key as below
- **Key** - Utils.constant(Active)

### 2. AR

From Dropdown select **AR** - Mapped the input into an array.

<Image src="/img/Core Development/Transformer/APIresponse/AR.png" alt="Array mapping" />

### 3. GEN

From Dropdown select **GEN** - Get one field from the input and mapped in another field of output.

<Image src="/img/Core Development/Transformer/APIresponse/GEN.png" alt="Key & value pair mapping" />

### 4. OBJ

From Dropdown select **OBJ** - Creates a object with target name as key. 

<Image src="/img/Core Development/Transformer/APIresponse/OBJ.png" alt="Object mapping" />

## Mapping view

View response structure side by side as you create mapping.

<Video src="/img/Core Development/Transformer/Payload/jsonView.mp4" type="video/mp4" />

## Input Mapping (*Autofill*)

### 1. Swagger

1. Upload/Create the swagger on **Define / Swagger** page.
2. Select swagger radio button and swagger name from dropdown.
3. Click on view swagger button that will appear on right hand side of dropdown.
4. Hover over the endpoint which has `Request Body` and copy icon will appear on right hand side.
5. Click on copy icon to map input configurations.

<Video src="/img/Core Development/Transformer/Payload/swaggerMapping.mp4" type="video/mp4" />

### 2. Schema

1. Create the schema on **Define / Schema Design** page.
2. Select schema radio button and schema name from dropdown.

<Video src="/img/Core Development/Transformer/Payload/schemaMapping.mp4" type="video/mp4" />
