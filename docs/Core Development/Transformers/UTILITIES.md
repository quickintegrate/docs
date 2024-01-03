---
sidebar_position: 5
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# UTILITIES

#### Step 1:

Drag and drop the **UTILITIES**

<img src={useBaseUrl('/img/Core Development/Transformer/Utility.png')} />;

<img src={useBaseUrl('/img/Core Development/Transformer/drag and drop utility.png')} />;

#### Step 2:

Left click on **UTILITIES** Transformer, you can define the  configration

### Method

1) Add variable
2) Remove variable
3) Logging
4) Throw error
   
<img src={useBaseUrl('/img/Core Development/Transformer/Utility methods.png')} />;

### Log Type

1) Info
2) Error
3) Debug
4) Verbose

<img src={useBaseUrl('/img/Core Development/Transformer/utlity log types.png')} />;

### Example 1: 

**Method - Logging**

**Log type - Info**  

<img src={useBaseUrl('/img/Core Development/Transformer/utility logging.png')} />;

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
<td>Method</td>
<td></td>
<td>Logging</td>
</tr>
<tr>
<td>Log Type</td>
<td></td>
<td>Info</td>
</tr>
<tr>
<td>Log Value</td>
<td></td>
<td>Start_level_log_info</td>
</tr>
</tbody>
</table>

### Example 2: 

**Method - Throw error**

**Log type - Error** 

<img src={useBaseUrl('/img/Core Development/Transformer/utility throwerror.png')} />;

<img src={useBaseUrl('/img/Core Development/Transformer/utility throwerror type.png')} />;

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
<td>Method</td>
<td></td>
<td>Throw error</td>
</tr>
<tr>
<td>Error Type</td>
<td></td>
<td>INTBusinessException</td>
</tr>
<tr>
<td>Exception message</td>
<td></td>
<td>$VARIABLES.errorPin</td>
</tr>
<tr>
<td>Variable Name</td>
<td></td>
<td>Status,NoRecords</td>
</tr>
</tbody>
</table>

### Example 3:
**Method - Add variable**

**Log type - Info** 

<img src={useBaseUrl('/img/Core Development/Transformer/Add variable utility.png')} />;

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
<td>Method</td>
<td></td>
<td>Add variable</td>
</tr>
<tr>
<td>Variable Name</td>
<td></td>
<td>Status,NoRecords</td>
</tr>
</tbody>
</table>

### Example 4:

**Method - Remove variable**

**Log type - Info** 

<img src={useBaseUrl('/img/Core Development/Transformer/remove variable utility.png')} />;

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
<td>Method</td>
<td></td>
<td>Remove variable</td>
</tr>
<tr>
<td>Variable Name</td>
<td></td>
<td>Status</td>
</tr>
</tbody>
</table>
