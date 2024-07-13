---
sidebar_position: 3
---

import { Image, Video } from '@site/src/components/custom';

:::note
- This tranformer can only be used with REST trigger.
- The flow must contain atleast one APIRESPONSE element in it when REST trigger used. 
:::

## Transformer Configuration

1. Drag and drop **APIRESPONSE**  Transformer from the pallet.

<Image src="/img/Core Development/Transformer/APIresponse/element.png" alt="APIRESPONSE transformer" />

1. Left click on **APIRESPONSE** Transformer and Configure as given below.
2. Provide status code.
3. Click on the Drop down and select Content Type `application/json`.

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
            <td>TRANS</td>
            <td>Transforms the input value with the help of inline transformation functions</td>
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

### 1. TRANS

1. From Dropdown select **TRANS** - Transforms the Input value with the help of inline transformation functions.
2. Click on the add button. You will see Inline functions, click on + icon.
3. Select `Utils` and `Constant` from dropdown. Add Parameters as *Hello world* and Save.
4. The configuration of the APIRESPONSE Transformer appears as follows:

<Video src="/img/Core Development/Transformer/APIresponse/TRANS.mp4" type="video/mp4" />

- **Target** - In target write Status and you will find Key as below
- **Key** - Utils.constant(Hello world)

### 2. CN

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
