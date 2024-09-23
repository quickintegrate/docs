---
sidebar_position: 9
slug: "chat-ai-properties"
sidebar_label: "CHAT_AI"
---

import { Image, Video } from '@site/src/components/custom';

# DataSource Chat AI

A Chat AI is an artificial intelligence system designed to engage in conversations with users through natural language. It leverages techniques such as natural language processing (NLP) and machine learning to understand, process, and generate human-like responses in real-time, enabling tasks like answering questions, providing recommendations, or holding interactive dialogues. Popular examples include virtual assistants and AI-driven customer support chatbots.

## Supported models and sub-models

1. OpenAI
   - GPT-3.5 Turbo
2. Groq
   - Meta Llama 3 70B

## Engaging in Practical Implementation

**Open new Project in QuickIntegration Platform, and then follow these steps to get your flow working**

1) Click On the Connection Properties
2) Select the DataSource Type from drop down
3) Provide the Credentials 
4) Click on Submit to save the Credentials
5) On the left side of the palette, you'll find the Configured Properties ready to be utilized within your API.

<Image cls="border mb-2" src="/img/Core Development/Connection properties/CHAT_AI.png" alt="Chat AI configuration" />

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
            <td>DataSource Name</td>
            <td>Datasource Name which is configured in connections properties</td>
            <td>groqds</td>
        </tr>
        <tr>
            <td>DataSource Type</td>
            <td>CHAT_AI</td>
            <td>CHAT_AI</td>
        </tr>
        <tr>
            <td>Environment</td>
            <td>Provides a production environment where you can deploy applications and APIs publicly</td>
            <td>dev</td>
        </tr>
        <tr>
            <td>URL</td>
            <td>A URL (Uniform Resource Locator) is a unique identifier used to locate a resource on the Internet</td>
            <td>https://api.groq.com/openai</td>
        </tr>
        <tr>
            <td>API Token</td>
            <td>An API token is a unique identifier used to authenticate and authorize access to an API, ensuring secure communication between a client and the server.</td>
            <td>&lt;your-api-token&gt;</td>
        </tr>
        <tr>
            <td>Connection Timeout</td>
            <td>The maximum amount of time the driver will wait while attempting to establish a connection to the database.</td>
            <td>60000 (ms)</td>
        </tr>
        <tr>
            <td>Read Timeout</td>
            <td>The maximum amount of time the client will wait for a response from the server after a connection is established</td>
            <td>60000 (ms)</td>
        </tr>
        <tr>
            <td>Model</td>
            <td>A model in the context of machine learning is an algorithm or mathematical structure that processes input data, identifies patterns, and makes predictions or decisions based on that data. It is trained using data to learn relationships and rules, which it then applies to new, unseen inputs.</td>
            <td>Groq</td>
        </tr>
        <tr>
            <td>Sub-model</td>
            <td>A sub-model in machine learning is a smaller or specialized component of a larger model, designed to handle a specific task or subset of the overall problem. It works in conjunction with other sub-models or the main model to contribute to the final prediction or decision-making process.</td>
            <td>Meta Llama 3 70B</td>
        </tr>
    </tbody>
</table>

<table>
    <thead>
        <tr>
            <th>Options</th>
            <th>Description</th>
            <th>Example</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Log Probability</td>
            <td>The log probability of a token is the logarithm of the probability assigned to that token. This is useful for numerical stability and for comparing relative probabilities, as it avoids issues with very small probabilities.</td>
            <td>true</td>
        </tr>
        <tr>
            <td>Temperature</td>
            <td>The sampling temperature to use that controls the apparent creativity of generated completions. Higher values will make output more random while lower values will make results more focused and deterministic. It is not recommended to modify temperature and top_p for the same completions request as the interaction of these two settings is difficult to predict.</td>
            <td>0.8</td>
        </tr>
        <tr>
            <td>Frequency Penalty</td>
            <td>Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model’s likelihood to repeat the same line verbatim.</td>
            <td>0.0</td>
        </tr>
        <tr>
            <td>Max Tokens</td>
            <td>The maximum number of tokens to generate in the chat completion. The total length of input tokens and generated tokens is limited by the model’s context length.</td>
            <td>4096</td>
        </tr>
        <tr>
            <td>User</td>
            <td>A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse.</td>
            <td>-</td>
        </tr>
    </tbody>
</table>

