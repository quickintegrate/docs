---
sidebar_position: 4
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Condition

The usual logical conditions :

Drag and drop the **Condition**Components from the pallatte

<img src={useBaseUrl('/img/Core Development/Components/Condition.png')} />;


<img src={useBaseUrl('/img/Core Development/Components/Condition drag and drop.png')} />;



#### Configuring Condition
left click on Condition Components, you can define the **Condition** configration as given below:

<img src={useBaseUrl('/img/Core Development/Components/Condition config.png')} />;

Case:

Operator:

<img src={useBaseUrl('/img/Core Development/Components/Condition case.png')} />;           <img src={useBaseUrl('/img/Core Development/Components/Condition operator.png')} />;

<table>
<thead>
<tr>
<th>Case</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>IF</td>
<td>Use if to execute a sub flow, if a specified condition is true</td>
</tr>
<tr>
<td>ELSE</td>
<td>Use else to execute a another sub flow, if the same condition is false</td>
</tr>
<tr>
<td>ELSEIF</td>
<td>Use else if to execute a another sub flow, if the first condition is false</td>
</tr>
<tr>
<td>LOOP</td>
<td>Use Loop to iterate over nodes /elements inside sub flow </td>
</tr>
<tr>
<td>AND</td>
<td>Use And to execute a subflow if all statements are true</td>
</tr>
<tr>
<td>OR</td>
<td>Use Or to execute a subflow if one of the statements is true</td>
</tr>
</tbody>
</table>


-
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
<td>Case</td>
<td>Condition such as IF,ELSE,ELSEIF,LOOP,AND,OR</td>
<td>IF</td>
</tr>
<tr>
<td>Condition</td>
<td></td>
<td>$Payload</td>
</tr>
<tr>
<td>Operator</td>
<td></td>
<td></td>
</tr>
<tr>
<td>Value</td>
<td></td>
<td></td>
</tr>
<tr>
<td>SubFlow</td>
<td></td>
<td></td>
</tr>
<tr>
<td>Action</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>

# Example

1) In this context, a subflow refers to a sequence that runs based on certain conditions or inputs, which is why a decision box is necessary.

<img src={useBaseUrl('/img/Core Development/Components/Condition Senario.png')} />;
