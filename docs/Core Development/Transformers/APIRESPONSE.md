---
sidebar_position: 3
slug: "apiresponse-transformer"
sidebar_label: "APIRESPONSE"
---

import { Image, Video } from '@site/src/components/custom';

# API Response Transformer

:::note
- This tranformer can only be used with REST trigger.
- The flow must contain atleast one APIRESPONSE element in it when REST trigger used. 
:::

## Configuration

1. Drag and drop **APIRESPONSE** Transformer from the pallet.

<Image src="/img/Core Development/Transformer/APIresponse/element.png" alt="APIRESPONSE transformer" />

2. Left click on **APIRESPONSE** Transformer and Configure as given below.
3. Provide status code.
4. Click on the Drop down and select Content Type `application/json`.

<Video src="/img/Core Development/Transformer/APIresponse/intro.mp4" type="video/mp4" />

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
            <td>CN</td>
            <td>Mapped the input as it is in output body</td>
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

### 1. CN

From Dropdown select **CN** - Mapped the input as it is in output body.

<Image src="/img/Core Development/Transformer/APIresponse/CN.png" alt="Constant mapping" />

### 3. AR

From Dropdown select **AR** - Mapped the input into an array.

<Image src="/img/Core Development/Transformer/APIresponse/AR.png" alt="Array mapping" />

### 4. GEN

From Dropdown select **GEN** - Get one field from the input and mapped in another field of output.

<Image src="/img/Core Development/Transformer/APIresponse/GEN.png" alt="Key & value pair mapping" />

### 5. OBJ

From Dropdown select **OBJ** - Creates a object with target name as key. 

<Image src="/img/Core Development/Transformer/APIresponse/OBJ.png" alt="Object mapping" />

## Mapping view

View response structure side by side as you create mapping.

:::note
    - The mapping view only shows `JSON`.
    - It does not shows the response structure for other types like `XML`.
:::

<Video src="/img/Core Development/Transformer/APIresponse/jsonView.mp4" type="video/mp4" />
