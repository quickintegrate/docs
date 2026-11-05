---
sidebar_position: 2
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# RAG Dataset

- In order to process user data in AI services provided in quickintegrate platform, Retrieval-Augmented Generation feature is added to upload the user documents which can be used in the platform.
- Using the documents uploaded, developer can add context or user data to AI, using AI service provided in the platform.


# Interface

## Function Names

There are different function names which defines the category of the document. Below are some funtion names

| Function name | Description | Usage | function metadata |
| :--- | :--- | :--- | :--- |
| Flow GEN | The documents are the quickintegrate AI flows JSON | Used in [prompt to flow](/docs/Develop/Integration/Studio.md) and [migration](https://migrate.quickintegrate.io/) to quickintegrate | flow_gen |
| OpenApi Spec | These are the openAPI specification v3 | Used in [swagger](/docs/Define/Swagger.md) generation| openapi_spec |

<img src={useBaseUrl('img/Develop/AI/Rag-dataset/function-name.png')} />

## Add documents

- Select the function name from the dropdown in which you want to upload the document
- Click in the **plus button** on the right side
- Enter the document details
  - **Natural query**: This field is cumpulsary since the document will be searched based on this field
  - **Detail query**: This field acts as a detail document overview important for document description
- Select the document to be uploaded and click **submit**

<img src={useBaseUrl('img/Develop/AI/Rag-dataset/upload-doc.png')} />

## Managing the document

<img src={useBaseUrl('img/Develop/AI/Rag-dataset/view-doc-list.png')} />

- You can view the uploaded document by selecting the function name from the dropdown
- You can check the natural query and detail query of the document uploaded
- In action column, using the **view** button, you can check the actual document uploaded
<img src={useBaseUrl('img/Develop/AI/Rag-dataset/view-document.png')} />
- In action column, we can also **delete** the document which are not needed
