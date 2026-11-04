---
sidebar_position: 2
slug: "postman"
sidebar_label: "Postman"
---

import { Video } from '@site/src/components/custom';

# Postman Tests for an Application

Learn how to configure and run Postman collections for an application in the Quickintegration platform.

## Configure Tests

### Manual Configuration

1. Navigate to **Test** > **Postman**.
2. From the **Project Name** dropdown, select the target application.
3. From the **Service Name** dropdown, select the target service.

#### Create a Test Case

1. Click the **+** (New) icon to open the creation form.
2. Fill in the required details: **Name**, **Description**, **Method**, and **URL** (_mandatory_).
3. Click **Submit** to create the test case.

#### Update a Test Case

1. Click the name of the test case you want to edit.
2. Select the **Test** tab to add status assertions or custom validation scripts.
3. Click **Update Changes** to save.

#### Delete a Test Case

1. Click the **Trash** icon next to the target test case.
2. Click **Confirm** to permanently remove it.

<Video src="/img/Test/Postman/new.mp4" type="video/mp4" />

---

### Import Collection

1. Click the **Import Collection** icon (tray with down arrow) to open the import modal.
2. Select your Postman collection `.json` file.
3. Click **Submit** to import the test case(s).

<Video src="/img/Test/Postman/import.mp4" type="video/mp4" />

---

### Generate Collection (AI-Assisted)

1. From the **Project Name** dropdown, select the target application.
2. Click the **Generate Collection** icon (folder with gear) to initiate AI generation.
3. Review the generated collection preview.
4. (_Optional_) Remove any unnecessary requests or variables.
5. Click **Create** to save the generated test cases.

:::note
The generation process may take some time to complete. Do not refresh or navigate away from the page.
:::

<Video src="/img/Test/Postman/generate.mp4" type="video/mp4" />

---

## Run Postman Collections

### Prerequisites

1. Sign in to the Designer workspace:
   [https://designer.quickintegrate.io/login](https://designer.quickintegrate.io/login)
2. Open **Execute / Deploy**.
3. Verify that the application containing the target services is deployed and running (e.g., ensure your `sample` project has started successfully).

### Execution Steps

1. Navigate to **Test** > **Postman**.
2. Click **Run Tests** to enter the execution workspace.
3. Select your target application from the **Project Name** dropdown.
4. Click the **Play** icon to run the Postman collection.

:::note
Execution process may take some time to complete. Do not refresh or navigate away from the page.
:::

<Video src="/img/Test/Postman/run.mp4" type="video/mp4" />
