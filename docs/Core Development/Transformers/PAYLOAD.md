---
sidebar_position: 4
slug: "payload-transformer"
sidebar_label: "PAYLOAD"
---

import { Image, Video } from '@site/src/components/custom';

# Payload Transformer

It resembles an API response but includes an output. We generate customized data through data mapping, employing it as input for subsequent nodes. The output will be a java map or array, depending on the mapping you use.

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
            <td>OBJ</td>
            <td>Creates a object with target name as key</td>
        </tr>
        <tr>
            <td>AR</td>
            <td>Mapped the input into an array</td>
        </tr>
    </tbody>
</table>

### 1. AR

From Dropdown select **AR** - Mapping an array element. If the the input is array and in output you want to update that array, you can use AR element. Similarily, if you want to create a new array, you dont need to provide input, just add elements tot he array.

#### Array with input as array and output as array.
<Image src="/img/Core Development/Transformer/APIresponse/AR.png" alt="Array mapping" />

#### Array with no input. Output will be array of element.
<Image src="/img/Core Development/Transformer/APIresponse/AR2.png" alt="New Array mapping" />

### 2. GEN

From Dropdown select **GEN** - Gen is used to mapping value to a field. Value can be anything, from static 'Hello', to more dynamic '$Data.name'. You can provide the entire data too, if transformable, will be put put in as json element.

For example:
data = $Data
```
{
    "data": {
        "name": "John",
        "age": 30
    }
}
```

<Image src="/img/Core Development/Transformer/APIresponse/GEN.png" alt="Key & value pair mapping" />

### 3. OBJ

From Dropdown select **OBJ** - Creates a object with target name as key. 

<Image src="/img/Core Development/Transformer/APIresponse/OBJ.png" alt="Object mapping" />

## Mapping view

View response structure side by side as you create mapping.
Right click on the payload node to open up the configuration pannel. Click the eye icon, to view the mapping view display.

:::note
    - The mapping view only shows `JSON`.
    - It does not shows the response structure for other types like `XML`.
:::

<Video src="/img/Core Development/Transformer/Payload/mapping_view.mp4" type="video/mp4" />

### Mapping Functions

Mapping functions are helper utilities used to transform values during mapping.

For example, when using **GEN mapping**, if the value is coming from pipeline (e.g. `$Data.name`) and you want to modify it (like converting to lowercase), you can use a function.

To use a function:
- Type `##` after the value
- Select a function from the suggestions
- Hover on a function to see its usage

Example:
- $REQUEST_PARAMS.name.##lowerCase()


<Video src="/img/Core Development/Transformer/Payload/functions.mp4" type="video/mp4" />

Following is the list of available functions and their definitions:

---

### Strings

<table>
<thead>
<tr>
<th>Method</th>
<th>Description</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>camelCase()</td>
<td>Converts string to camel case format</td>
<td>'i am a man .and..i have_a__pen'.##camelCase() ⇒ "IAmAmanAndIHaveAPen"</td>
</tr>
<tr>
<td>capitalize()</td>
<td>Uppercases first character</td>
<td>'cat'.##capitalize() ⇒ "Cat"</td>
</tr>
<tr>
<td>lowerCase()</td>
<td>Converts string to lowercase</td>
<td>'CAT'.##lowerCase() ⇒ "cat"</td>
</tr>
<tr>
<td>upperCase()</td>
<td>Converts string to uppercase</td>
<td>'cat'.##upperCase() ⇒ "CAT"</td>
</tr>
<tr>
<td>replace()</td>
<td>Replace substring</td>
<td>'abaa'.##replace('a','z') ⇒ "zbzz"</td>
</tr>
<tr>
<td>replaceIgnoreCase()</td>
<td>Replace substring ignoring case</td>
<td>'Abaa'.##replaceIgnoreCase('a','z') ⇒ "zbzz"</td>
</tr>
<tr>
<td>concatFree()</td>
<td>Concatenate values ignoring nulls</td>
<td>##concatFree('Hello','_','World') ⇒ "Hello_World"</td>
</tr>
<tr>
<td>prependIfMissing()</td>
<td>Add prefix if missing</td>
<td>'abc'.##prependIfMissing('xyz') ⇒ "xyzabc"</td>
</tr>
<tr>
<td>repeat()</td>
<td>Repeat string</td>
<td>'a'.##repeat(3) ⇒ "aaa"</td>
</tr>
<tr>
<td>substr()</td>
<td>Safe substring</td>
<td>'abc'.##substr(1) ⇒ "bc"</td>
</tr>
<tr>
<td>isAlphanumeric()</td>
<td>Check alphanumeric</td>
<td>'A1b2c3'.##isAlphanumeric() ⇒ true</td>
</tr>
<tr>
<td>randomString()</td>
<td>Generate random string</td>
<td>##randomString(10)</td>
</tr>
</tbody>
</table>

---

### Maths

<table>
<thead>
<tr>
<th>Method</th>
<th>Description</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>calc()</td>
<td>Evaluate expression</td>
<td>##calc(3 + 5) ⇒ 8</td>
</tr>
<tr>
<td>floor()</td>
<td>Round down</td>
<td>3.14.##floor() ⇒ 3</td>
</tr>
<tr>
<td>ceil()</td>
<td>Round up</td>
<td>3.14.##ceil() ⇒ 4</td>
</tr>
<tr>
<td>round()</td>
<td>Round to decimal places</td>
<td>3.14.##round(1) ⇒ 3.1</td>
</tr>
<tr>
<td>mod()</td>
<td>Remainder of division</td>
<td>8.##mod(3) ⇒ 2</td>
</tr>
<tr>
<td>random()</td>
<td>Generate random number</td>
<td>##random()</td>
</tr>
</tbody>
</table>

---

### Utils

<table>
<thead>
<tr>
<th>Method</th>
<th>Description</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>if()</td>
<td>Conditional evaluation</td>
<td>##if([$REQUEST_PARAMS.status='success'],'Valid','Invalid')</td>
</tr>
<tr>
<td>switch()</td>
<td>Multi-condition mapping</td>
<td>##switch($REQUEST_PARAMS.status, W:'WAITING', Y:'DELIVERED', default:'INVALID')</td>
</tr>
</tbody>
</table>

---

### Date

<table>
<thead>
<tr>
<th>Method</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>now()</td>
<td>Returns current datetime (yyyy-MM-dd HH:mm:ss)</td>
</tr>
</tbody>
</table>

## Input Mapping (*Autofill*)

### 1. Swagger

1. Upload/Create the swagger on **Define / Swagger** page.
2. Right-Click on the payload node to open up the configuration page.
3. Select swagger radio button and swagger name from dropdown.
4. Click on view swagger button that will appear on right hand side of dropdown.
5. Hover over the endpoint which has `Request Body` and copy icon will appear on right hand side.
6. Click on copy icon to map input configurations.

<Image src="/img/Core Development/Transformer/Payload/element.png" alt="PAYLOAD transformer" />

<Video src="/img/Core Development/Transformer/Payload/swaggerMapping.mp4" type="video/mp4" />

### 2. Schema

1. Create the schema on **Define / Schema Design** page.
2. Right-Click on the payload node to open up the configuration page.
3. Select schema radio button and schema name from dropdown.

<Image src="/img/Core Development/Transformer/Payload/element.png" alt="PAYLOAD transformer" />

<Video src="/img/Core Development/Transformer/Payload/schemaMapping.mp4" type="video/mp4" />

### skipNull
Skipping the null value key in the object. If you checked this checkbox, all the keys in the final object, having null as value, will be removed.

For example:<br />
If the final data create is this: <br />
```
{
    "name": "John",
    "age": 30,
    "city": null
}
```
The final result for skipNull check true is following: <br />
```
{
    "name": "John",
    "age": 30
}
```

<Image src="/img/Core Development/Transformer/Payload/skipNull.png" alt="Skipping Null value keys" />

### Json Editor
Json Editor outputs the same as Form Editor we have used above, where we define mapping in a form format. But Json Editor lets you map the elements like you are mapping a json, so you have a clear idea as what the output would look like. <br />
You just have to click the check box 'jsonEditor' and a json editor pannel will open up.
Here you can edit what you want as an output. Add elements, remove, append, etc. You can add object, array or string, by selecting the dropdown.<br />

The only difference here is how you access the dynamic values. In Form Editor you give a single '$' to get the pipeline data. In Json Editor, you have to give double dollar sign to access it, '$$'.
<br />

#### The video shows how to use the json editor.

<Video src="/img/Core Development/Transformer/Payload/json_editor.mp4" type="video/mp4" />