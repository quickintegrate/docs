---
sidebar_position: 4
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# PAYLOAD

It resembles an API response but includes an output. We generate customized data through data mapping, employing it as input for subsequent nodes.

#### Step 1:
Drag and drop the **PAYLOAD**Components from the pallatte

<img src={useBaseUrl('/img/Core Development/Transformer/payload.png')} />;
 

<img src={useBaseUrl('/img/Core Development/Transformer/drag and drop Payload.png')} />;


#### Step 2:
#### Configuring PAYLOAD
left click on PAYLOAD Components, you can define the **PAYLOAD** configration as given below:

<img src={useBaseUrl('/img/Core Development/Transformer/payload config.png')} />;

#### Step 3:
Provide the Output Variable 
**It Stores output of connections operations**

#### Step 4:
Click on Add button and do the mapping as shown 

<img src={useBaseUrl('/img/Core Development/Transformer/Payload add button.png')} />;

<img src={useBaseUrl('/img/Core Development/Transformer/Payload utils.png')} />; 

<img src={useBaseUrl('/img/Core Development/Transformer/Payload constant.png')} />;


<img src={useBaseUrl('/img/Core Development/Transformer/Payload parameters.png')} />;

and Save


#### Step 5:
When we want to get a variable, from the pipeline, we use **$** sign as prefix followed by Variable name from in the pipeline. There can be nested get which is seperated by '.' Ex. **$Payload.key**

`Note:- The variable Payload should be present in the pipeline before the calling`