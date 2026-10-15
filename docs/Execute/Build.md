---
sidebar_position: 1
slug: "build"
sidebar_label: "Build"
---

import { Image, Video } from '@site/src/components/custom';

# Build an Application

Learn how to configure and trigger an application build in the Quickintegration platform.

## Prerequisites

- An active Quickintegration project with configured endpoints or workflows.

## Build Steps

1. Navigate to **Execute** > **Build**.
2. Under the **Applications** tab, choose your project type:
   - **Integration** (_Default_)
   - **MCP**
   - **Agentic**

<Image cls="border mb-2" src="/img/Execute/Build/applications.png" alt="Build Application List" />

3. Select the **Build Application** tab.
4. From the **Project Name** dropdown, select the target application.
5. Configure the build parameters:
   - **Version:** Enter a semantic version (default: `1.0.0`).
   - **Comment** (_Optional_): Add release notes or a description for this build.
   - **Maintainer** (_Optional_): Specify the author or owner responsible for the build.
6. Click **Build Application** to initiate the build process.

<Video src="/img/Execute/Build/build.mp4" type="video/mp4" />

:::note
The application build process may take a few minutes to complete depending on project size and dependencies.
:::

## Next Steps

Once the build completes successfully:

- To view **Readme**:
  - Return to the **Applications** tab.
  - Locate your target application in the table.
  - Click the **File** button in that application's row to review build documentation.
- Proceed to deployment via the **Deploy** panel.
