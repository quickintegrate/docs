---
sidebar_position: 3
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Step error

**Step error** component is used to catch and handle errors specific to a connector/step in the API.		

error handling is no longer limited to a Java exception handling process that requires you to check the source code or force an error in order
understand what happened. Errors mostly occur at runtime that's they belong to an unchecked type.

We catch the error at the flow level in the step error component

so after which step does the user need to catch the error, just copy and paste the step error component below that step and connect both components with the help of the connector line. and drag-drop any component in that step error for error message. but keep remembering when you need to drag a component in the error step, first, you need to select that error step component then drag another component in that step error then only your component will work

**Step Exception handling in the service:**

Step error is specifically for particular connector error.
Drag and drop the **Step Error** and configure it for the DB 

<img src={useBaseUrl('/img/Core Development/Components/Step Error.png')} />;

<img src={useBaseUrl('/img/Core Development/Components/Step error drag and drop.png')} />;

Drag and drop **Utility** Connector Inside the Step Error Component and refer the configration shown below

<img src={useBaseUrl('/img/DB_Rest_API/15.1.1.png')} />; 

<img src={useBaseUrl('/img/DB_Rest_API/15.png')} />; 

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
<td>This is the utility function to throw the error in the flow</td>
<td>throw error</td>
</tr>
<tr>
<td>Error Type</td>
<td>Type of Exception thrown in the flow such as INTBuinessException and INTRetryException </td>
<td>INTBuinessException</td>
</tr>
<tr>
<td>Exception message</td>
<td>The custom message while throwing the custom Exception</td>
<td>$VARIABLES.nocustomer</td>
</tr>
<tr>
<td>Exception code</td>
<td>The code while throwing the Execption</td>
<td>$VARIABLES.nocustomercode</td>
</tr>
</tbody>
</table>