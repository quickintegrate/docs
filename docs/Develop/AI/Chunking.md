---
sidebar_position: 3
slug: "Chunking"
sidebar_label: "Chunking"
---


import { Badge } from "@site/src/components/custom";
import { Image, Video } from '@site/src/components/custom';

# Document chunking

The document chunking page provides functionaly to chunk and summarize documents like pdf, docx, txt, csv and zip files using different strategy and AI.


## Create new document name

Using `+` button on top right to add new document name
<Image src="img/Develop/AI/Chunking/add-document-name.png" alt="Add document name" />

## Upload new document for chunking

Using upload button on top right to upload new document for chunking
<Image src="img/Develop/AI/Chunking/upload-document.png" alt="Upload document" />


### Document details

1. Select the **document name** from the dropbox
2. Select strategy:
    - **recursive (text)**: Recursive chunking is a text-splitting technique that breaks down large documents hierarchically. It uses a ranked list of separators (e.g., paragraphs, lines, spaces) to split text.
    - **semantic**: Semantic chunking is a preprocessing technique used to break large documents into smaller, meaningful segments.
3. CSV option
    - If you want to chunk the csv file **toggle the csv option**
    - **Metadata**: A list of csv columns (comma seperated) which needs to be added as metadata
    - **Primary text content**: A list of csv columns (comma seperated) using which the summary is be generated using AI
:::note
- Each row in the csv file will a chunk
:::
4. Select files: Select file which needs to be chunked
5. Click **Submit** button to send chunking request.

<Image src="img/Develop/AI/Chunking/document-details.png" alt="document details" />


## Show chunked document

1. Select the **document name** from the dropdown
<Image src="img/Develop/AI/Chunking/chunk-list.png" alt="document details" />
2. The **Natural query** shows the AI genereted summary of the chunk
3. Click **eye** button in Actions columns to view the chunk document
<Image src="img/Develop/AI/Chunking/chunk-data.png" alt="document details" />
3. Click **delete** button to delete the chunk
