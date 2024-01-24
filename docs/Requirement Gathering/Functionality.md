---
sidebar_position: 1
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Functionality
In this dedicated section, Business Analysts and Solution Designers outline the integration flow from a functional standpoint using straightforward language and visual components. This documentation illustrates the sequence of actions and processes required, simplifying complex concepts into an easily understandable framework.

Go to **Define** >> **Functionality** 

<img src={useBaseUrl('/img/Define/Define-Fun.png')} />; 

When you navigate to the page,You will discover the Define page, which allows you to establish new services and define existing projects.

<img src={useBaseUrl('/img/Define/Fun.. window.png')} />; 

Click the "Dropdown" button in project name coloum and enter the required existing project. 

<img src={useBaseUrl('/img/Define/Fun dropdown.png')} />; 

Clicking on the service button enables you to define new services as well.

<img src={useBaseUrl('/img/Define/fun Service&swagger.png')} />; 

After successfully creating the service, you will notice that the project is automatically defined

<img src={useBaseUrl('/img/Define/fun Rest.png')} />; 

<table>
<thead>
<tr>
<th>Case</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>URI_FUNCTIONAL</td>
<td>A concise functional description of the URI.</td>
</tr>
<tr>
<td>TYPE_FUNCTIONAL</td>
<td>The type of function determines the category of people who will be using it</td>
</tr>
<tr>
<td>TRIGGER_FUNCTIONAL</td>
<td>Functions related to triggering.</td>
</tr>
</tbody>
</table>


<img src={useBaseUrl('/img/Define/fun DB.png')} />; 

<table>
<thead>
<tr>
<th>Case</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>DEF</td>
<td>What is the intended function of this node</td>
</tr>
<tr>
<td>OUTPUT</td>
<td>The output that this node will produce for each column in the table</td>
</tr>
<tr>
<td>PROCESSING</td>
<td>How will the node function in the processing of the overall operation</td>
</tr>
<tr>
<td>ONSTEPERROR</td>
<td>How should we handle errors if they occur</td>
</tr>
<tr>
<td>PREPROCESSOR</td>
<td>The preprocessor function of the node.</td>
</tr>
</tbody>
</table>