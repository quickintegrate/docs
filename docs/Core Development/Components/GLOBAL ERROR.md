---
sidebar_position: 2
---


import useBaseUrl from '@docusaurus/useBaseUrl';

# Global Error

The **Global Error** component serves to capture and manage errors across the API, ensuring a unified approach to error handling throughout the application.

Utilizing **Global Error** Handling promotes the reusability of error-handling code within the application, offering a standardized approach to managing errors at an application-wide level.

This method triggers whenever an error occurs within the application, receiving the error as a parameter for further processing. In our context, it prompts a dialog to display the error message and logs the error to the browser console.

To implement **Global Error**, simply drag and drop the **Global Error** component from the component list. Utilize other components to set your error message as needed.

Drag and drop the **Global Error**

<img src={useBaseUrl('/img/Core Development/Components/Global Error.png')} />;

<img src={useBaseUrl('/img/Core Development/Components/Global error drag and drop.png')} />;

Drag and drop **Utility** Connector Inside the Global Error Component

#### Configuring Global Error
left click on Utlity Connector, you can define the **Global Error** configration as given below:

<img src={useBaseUrl('/img/Core Development/Components/Global error config.png')} />;

**Method - Throw error**

**Log type - Error** 

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
<td>Compulsory querry param not passed</td>
</tr>
<tr>
<td>Exception code</td>
<td></td>
<td>$VARIABLES.noid</td>
</tr>
</tbody>
</table>

