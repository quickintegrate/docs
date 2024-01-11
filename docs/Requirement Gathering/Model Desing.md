---
sidebar_position: 3
---

import useBaseUrl from '@docusaurus/useBaseUrl';


# Model Design
Develop the virtual model, including database tables and columns, and generate CRUD APIs from it. Alternatively, leverage it as a schema for your integration flow.

Go to **Define** >> **Model Design** 

<img src={useBaseUrl('/img/Define/Define-Model design.png')} />;

When you navigate to the page, you'll find the Model Design page with Create Entity and Entity Details coloum Where you can Define the Entity

<img src={useBaseUrl('/img/Define/model design page.png')} />;


Click the "add" button to create the entity and enter the required information,and then save. 

<img src={useBaseUrl('/img/Define/Create-Entity-order.png')} />;

After saving the entity, the entity details will be created; then, select Show API

<img src={useBaseUrl('/img/Define/Entity-Details.png')} />;

After you click on Show API, all the services relevant to the API will be created automatically

<img src={useBaseUrl('/img/Define/Services in Entity.png')} />;

After clicking "Create API," services corresponding to the table will be generated. If the services already exist, a text box will appear instead of plain text. This allows you to modify duplicate URLs or service names.
