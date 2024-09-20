---
sidebar_position: 3
slug: "model-design"
---

import { Image, Video } from '@site/src/components/custom';

Develop the virtual model, including database tables and columns, and generate CRUD APIs from it. Upload DDL schemas and use them while creating connection to generate queries using quickintegrate. 

## Entity Design

### Project Creation *(optional)*
1. Open: **Manage / Projects**
2. Click on **CREATE** button.
3. Provide *name* and *description*.
4. Click on create.

### Configuration
1. Select project from dropdown
2. Click on **+** button.
3. Provide *entity name* and fields required information.
4. Click on **SAVE**. Entity will be created.
5. Check the checkbox in action column for the field that you want to generate endpoints with. By default *primary key* is checked.
6. Feel free to change the ***basepath*** and click on **Show API**.
7. Now list of endpoints will be generated. You can remove one or more endpoints that are not required.
8. Click on **Create API**. Services corresponding to the table will be generated.
9. After service creation you will be redirected to **Functionality API** page and you will have access to a comprehensive list of all the end-to-end services outlined in the model design.

:::note
    - If the endpoint(s) or service(s) already exists in the selected project then text box will appear instead of plain text. This allows you to modify duplicate URLs or service names.
    - This will create simple services from given list with a **APIRESPPONSE** step in it that returns a message `{ status: success }`
:::

<Video src="/img/Define/Model Design/genAPI.mp4" type="video/mp4" />

### Sample Configuration

#### REST Trigger
<Image cls="border" src="/img/Define/Model Design/trigger.png" alt="Sample REST trigger configuration" />

#### API Response
<Image cls="border" src="/img/Define/Model Design/response.png" alt="Sample API Response configuration" />

## DDL schema

:::warning Schema Restriction
    It must only contain table statements. Like below:
    ```
    CREATE TABLE `order_query` (
        `order_id` INT AUTO_INCREMENT PRIMARY KEY,   -- Unique ID for each order
        `customer_name` VARCHAR(100),                -- Customer's name
        `order_date` DATE,                           -- Date of the order
        `total_amount` DECIMAL(10, 2)                -- Total amount for the order
    );
    ```
    If statements like `use schema` are present it will raise error and Query generation will not work.
:::

<Video src="/img/Define/Model Design/schemaUpload.mp4" type="video/mp4" />
