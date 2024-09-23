---
sidebar_position: 1
slug: "chat-ai"
sidebar_label: "Chat"
---

import { Image, Video } from '@site/src/components/custom';

# Chat AI

A Chat AI is an artificial intelligence system designed to engage in conversations with users through natural language. It leverages techniques such as natural language processing (NLP) and machine learning to understand, process, and generate human-like responses in real-time, enabling tasks like answering questions, providing recommendations, or holding interactive dialogues. Popular examples include virtual assistants and AI-driven customer support chatbots.

## Configuration
1. Drag and drop the **CHAT**
<Image src="/img/Core Development/AI/Chat/element.png" alt="CHAT AI" />

2. Right click on element, you can define the **CHAT** configuration.

<Image cls="border mb-2" src="/img/Core Development/AI/Chat/config.png" alt="Chat AI Configuration" />

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
            <td>Datasource Name</td>
            <td>Datasource Name which is configured in connection properties.
                <a href="/Core Development/Property Config/Connection Properties/chat-ai-properties" target="_blank"> Please refer the link for instructions on creating the datasource name</a></td>
            <td>groqds</td>
        </tr>
        <tr>
            <td>Input</td>
            <td>Text / Data to be passed to chat AI which can come from `$REQUEST_PAYLOAD` or previous step output variable.</td>
            <td>$REQUEST_PAYLOAD</td>
        </tr>
        <tr>
            <td>Output Variable</td>
            <td>Stores output of connections operations</td>
            <td>chatO</td>
        </tr>
    </tbody>
</table>
