---
sidebar_position: 8
slug: "rest-url-properties"
sidebar_label: "RESTURL"
---

import { Image } from '@site/src/components/custom';

# DataSource RESTURL

A URL identifies a resource 

## Engaging in Practical Implementation

**Open new Project in QuickIntegration Platform, and then follow these steps to get your flow working**

1) Click On the Connection Properties
2) Select the DataSource Type **RESTURL** from dropdown
3) Provide the Credentials 
4) Click on Submit to save the Crediantials
5) On the left side of the palette, you'll find the Configured Properties ready to be utilized within your API.

<Image cls="border mb-2" src="/img/Core Development/Connection properties/rest.png" alt="RESTURL configuration" />

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
            <td>postalapi</td>
        </tr>
        <tr>
            <td>DataSource Type</td>
            <td>RESTURL</td>
            <td>RESTURL</td>
        </tr>
        <tr>
            <td>Environment</td>
            <td>Provides a production environment where you can deploy applications and APIs publicly</td>
            <td>dev</td>
        </tr>
        <tr>
            <td>Connection Timeout</td>
            <td>The maximum amount of time the client will wait for the server to establish a connection</td>
            <td>60000 (ms)</td>
        </tr>
        <tr>
            <td>Read Timeout</td>
            <td>The maximum amount of time the client will wait for a response from the server after a connection is established</td>
            <td>60000 (ms)</td>
        </tr>
        <tr>
            <td>URL</td>
            <td>Unique identifier used to locate a resource</td>
            <td>https://api.postalpincode.in</td>
        </tr>
        <tr>
            <td>Swagger Name *(optional)*</td>
            <td>Swagger can be used to autofill `Rest` connector configuration and `Payload` input mapping.
                <a href="/Requirement Gathering/Swagger" target="_blank"> Please refer the link for instructions on uploading/creating swagger</a></td>
            <td>sfdc-swagger</td>
        </tr>
    </tbody>
</table>

**If the Swagger is available for the specific REST API, kindly proceed with the upload on *Define / Swagger* page.**
