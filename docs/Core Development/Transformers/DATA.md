---
sidebar_position: 2
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Data

#### Step 1:

Drag and drop the **Data**

<img src={useBaseUrl('/img/Core Development/Transformer/data .png')} />;

<img src={useBaseUrl('/img/Core Development/Transformer/drag and drop data.png')} />;

#### Step 2:

Configuring **Data**

1) left click on Data Transformer, you can define the  configration

<img src={useBaseUrl('/img/Core Development/Transformer/Data transformer config.png')} />;

<img src={useBaseUrl('/img/Core Development/Transformer/data source.png')} />;  <img src={useBaseUrl('/img/Core Development/Transformer/data destination.png')} />;


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
<td>Source</td>
<td>The format of the Source system such as XML, JSON, CSV, JAVA_OBJECT, FLAT</td>
<td>XML</td>
</tr>
<tr>
<td>Destination</td>
<td>The format of the destination system such as XML, JSON, CSV, JAVA_OBJECT</td>
<td>sampleds</td>
</tr>
<tr>
<td>Input</td>
<td>Input body structure</td>
<td>$REQUEST_Payload</td>
</tr>
<tr>
<td>Output</td>
<td>Output response</td>
<td>Payload</td>
</tr>
</tbody>
</table>


