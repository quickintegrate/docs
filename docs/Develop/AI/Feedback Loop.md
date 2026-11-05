---
sidebar_position: 4
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Feedback Loop

This page provides details (log) of all request and response processed using the AI services provided by the quickintegrate platform. This includes prompt to service requests and openAPI specification generation request and responses.

<img src={useBaseUrl('img/Develop/AI/feedbackloop/feedbackloop.png')} />

# Interface

## Function Names

There are different function names which defines the category of the document. Below are some funtion names

| Function name | Description |
| :--- | :--- |
| Flow GEN | All request and response generated via [prompt to flow](/docs/Develop/Integration/Studio.md) service |
| OpenApi Spec | Any [openAPI specification v3](/docs/Define/Swagger.md) generated |

<img src={useBaseUrl('img/Develop/AI/feedbackloop/function-name.png')} />

## Managing the document

We can manage the feedback loop data entries. Below are the column details:

| Column name | Description |
| :--- | :--- |
| ID | Unique integer value of the entry |
| Timestamp | The request completed time |
| Request | The user query provided |
| Inspect | Using this, view the response and metadata of the output generated |
| Actions | You can add this to [ragdataset](/docs/Develop/AI/RAG%20Dataset.md) or delete the log entry | 

### Inspect the document

- You can view the individual response of the AI service by clicking the **view** button in inspect column

<img src={useBaseUrl('img/Develop/AI/feedbackloop/feedback-response.png')} />

- The metadata is the metadata attached to the document which can be used search or filter the document
- doc_name is the key which defines the category of the document (function name identifier)

<img src={useBaseUrl('img/Develop/AI/feedbackloop/metadata-view.png')} />

### Add the document to the ragdataset

- We can also add the document into the ragdataset which can enhance the result of repsonse from AI service in the platform
- We can edit **id**, **Prompt**, **Details**  and **content** before we can add it to the ragdataset.

<img src={useBaseUrl('img/Develop/AI/feedbackloop/add-to-rag.png')} />

- After sumitting the document will be added to ragdataset and can view in [ragdataset page](/docs/Develop/AI/RAG%20Dataset.md)

<img src={useBaseUrl('img/Develop/AI/feedbackloop/rag-dataset-submit.png')} />

