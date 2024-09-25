---
sidebar_position: 2
slug: "data-api"
---

import { Image, Video } from '@site/src/components/custom';

The **Data APIs** represent the CRUD operations for existing database tables. Developers can retrieve the tables from already uploaded database ddl schema, and generate CRUD APIs instantly with the click of a button within the integration flow interface.

## Project Creation *(optional)*

1. Open: **Manage / Projects**
2. Click on **CREATE** button.
3. Provide *name* and *description*.
4. Click on create.

## Initially Configuration

1. Open: **DEVELOP / Data API**
2. Select project name from dropdown.
3. Click on **+** button and create new JDBC configuration with DDL schema selected *(mandatory)*.
4. If DDL schema is not already uploaded. <a href="/Requirement Gathering/model-design" target="_blank"> Please refer the link for instructions on uploading DDL schema</a>

<Image cls="border" src="img/Develop Functionality/DataAPI/jdbcConfig.png" alt="New JDBC Configuration" />

## Services creation

1. Select datasource. Entities list will be displayed.
2. Click on an entity. Entity details will be shown *(table structure)*.
3. Check the checkbox in action column for the field that you want to generate endpoints with. By default *primary key* is checked.
4. Feel free to change the ***basepath*** and click on **Show API**.
5. Now list of endpoints will be generated. You can remove one or more endpoints that are not required.
6. Click on **Create API**. Services corresponding to the table will be generated.
7. After service creation you will be redirected to **Functionality API** page and you will have access to a comprehensive list of all the end-to-end services outlined in the data API.
8. These services are ready to use and can be deployed (if need with some tweaks and changes).

:::note
    If the endpoint(s) or service(s) already exists in the selected project then text box will appear instead of plain text. This allows you to modify duplicate URLs or service names.
:::

<Video src="/img/Develop Functionality/DataAPI/genAPI.mp4" type="video/mp4" />

### Sample Flow

<Image cls="border" src="/img/Develop Functionality/DataAPI/sampleFlow.png" alt="Sample API Flow" />

#### REST Trigger
<Image cls="border" src="/img/Develop Functionality/DataAPI/triggerConfig.png" alt="Sample REST trigger configuration" />

#### DB step
<Image cls="border" src="/img/Develop Functionality/DataAPI/dbConfig.png" alt="Sample DB configuration" />

#### API Response
<Image cls="border" src="/img/Develop Functionality/DataAPI/resConfig.png" alt="Sample API Response configuration" />
