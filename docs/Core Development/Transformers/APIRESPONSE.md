---
sidebar_position: 3
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# APIRESPONSE

:::note
- This tranformer can only be used with REST trigger.
- The flow must contain atleast one APIRESPONSE element in it when REST trigger used. 
:::

#### Step 1:
Drag and drop **APIRESPONSE**  Transformer from the pallet.


<img src={useBaseUrl('/img/hello/addedsteps/apiresponse_connector.png')} />;


<img src={useBaseUrl('/img/Core Development/Transformer/drag and drop APIRes.png')} />;

#### Step 2:
Left click on **APIRESPONSE** Transformer and Configure as given below.

<img src={useBaseUrl('/img/hello/3API_Response.png')} />;

#### Step 3: 

Click on the Drop down and select Content Type application json

<img src={useBaseUrl('/img/hello/addedsteps/ContentType.png')} />;

<img src={useBaseUrl('/img/hello/addedsteps/Contenttype_addbutton.png')} />;

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
<td>Get one field from the Input and mapped in another field of Output</td>
</tr>
<tr>
<td>TRANS</td>
<td>Transforms the Input value with the help of transformation functions</td>
</tr>
<tr>
<td>CN</td>
<td>Mapped the Input as it is Output body</td>
</tr>
<tr>
<td>OBJ</td>
<td>Mapped the Inputs to Object</td>
</tr>
<tr>
<td>AR</td>
<td>Mapped the Inputs to Array</td>
</tr>
</tbody>
</table>

#### Step 4: 

Click on Add button From Drop down select **TRANS** - Transforms the Input value with the help of transformation functions

<img src={useBaseUrl('/img/hello/addedsteps/trans type.png')} />;

<img src={useBaseUrl('/img/hello/addedsteps/transAdd3.png')} />;


#### Step 5: 

Click on the add button You will see Inline functions, click on + icon 

<img src={useBaseUrl('/img/hello/addedsteps/addCondition4.png')} />;

#### Step 6: 

Select Utils and Constant from droup down
Add Parameters as a hello world and Save

<img src={useBaseUrl('/img/hello/addedsteps/addParametersand save5.png')} />;

<img src={useBaseUrl('/img/hello/addedsteps/Utils type.png')} />;

<img src={useBaseUrl('/img/hello/addedsteps/Constant .png')} />;

#### Step 7:

The configuration of the APIRESPONSE Transformer appears as follows:

<img src={useBaseUrl('/img/hello/addedsteps/save0.6.png')} />;

Target- In target write Status and you will find Key as below

Key- Utils.constant(hello world)


#### Step 8: 

Click on Add button From Drop down select **CN** - Mapped the Input as it is Output body

<img src={useBaseUrl('/img/APIresponse New/cn1.png')} />;

<img src={useBaseUrl('/img/APIresponse New/CN.png')} />;

#### Step 9: 

Click on Add button From Drop down select **AR** - Mapped the Inputs to Array

<img src={useBaseUrl('/img/APIresponse New/ar1.png')} />;

<img src={useBaseUrl('/img/APIresponse New/AR.png')} />;

#### Step 10: 

Click on Add button From Drop down select **GEN** - Get one field from the Input and mapped in another field of Output

<img src={useBaseUrl('/img/APIresponse New/gen1.png')} />;

<img src={useBaseUrl('/img/APIresponse New/GEN.png')} />;
