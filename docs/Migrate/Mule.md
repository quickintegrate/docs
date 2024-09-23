---
sidebar_position: 1
slug: "mule-migration"
sidebar_label: "Mule"
---

import { Badge } from "@site/src/components/custom";
import { Image, Video } from '@site/src/components/custom';

# Mule migration

Import mule workflows into quickintegrate by uploading mule XML configuration file.
:::note
- Atleast one project should be created
- Mule workflow name should not be present in the project, otherwise it will fail to create the workflow
- Connection properties configuration will not be created automatically
- Nodes which are not mapped completely, node data will be available in flow json tab in functional key
:::

## Steps

1. Select the project from drop down to which mule workflow to be imported
2. Click on mule button on the top right to upload the mule configuration file
3. Select the mule configuration file and click upload

If the uploaded file is successfully processed then a new service will be created within the project selected

<Video src="/img/Migrate/mule-import.mp4" type="video/mp4" />

## Mapped components

<table>
    <thead>
        <tr>
            <th>Mule node</th>
            <th>Quickintegrate node</th>
            <th>Fields mapped</th>
        </tr>
    </thead>
    <tbody>
        <tr align="center">
            <td>flow</td>
            <td>flow</td>
            <td>
                <ul>
                    <li>name</li>
                    <li>type (only for rest trigger)</li>
                </ul>
            </td>
        </tr>
        <tr align="center">
            <td>http:listner-config</td>
            <td>REST_CONFIG</td>
            <td>
                <ul>
                    <li>ds_name</li>
                    <li>ds_host</li>
                    <li>ds_port</li>
                </ul>
            </td>
        </tr>
        <tr align="center">
            <td>http:request-config</td>
            <td>REST_CONFIG</td>
            <td>
                <ul>
                    <li>ds_name</li>
                    <li>ds_host</li>
                    <li>ds_port</li>
                </ul>
            </td>
        </tr>
        <tr align="center">
            <td>http:request</td>
            <td>REST</td>
            <td>
                <ul>
                    <li>alias</li>
                    <li>basepath</li>
                    <li>method</li>
                </ul>
            </td>
        </tr>
        <tr align="center">
            <td>db:config</td>
            <td>DB_CONFIG</td>
            <td>
                <ul>
                    <li>ds_name</li>
                    <li>ds_host</li>
                    <li>ds_port</li>
                    <li>ds_username</li>
                    <li>ds_password</li>
                    <li>ds_database</li>
                </ul>
            </td>
        </tr>
        <tr align="center">
            <td>db:select</td>
            <td>DB</td>
            <td>
                <ul>
                    <li>name</li>
                    <li>query</li>
                    <li>queryparams</li>
                    <li>datasource-name</li>
                </ul>
            </td>
        </tr>
        <tr align="center">
            <td>db:insert</td>
            <td>DB</td>
            <td>
                <ul>
                    <li>name</li>
                    <li>query</li>
                    <li>queryparams</li>
                    <li>datasource-name</li>
                </ul>
            </td>
        </tr>
        <tr align="center">
            <td>db:update</td>
            <td>DB</td>
            <td>
                <ul>
                    <li>name</li>
                    <li>query</li>
                    <li>queryparams</li>
                    <li>datasource-name</li>
                </ul>
            </td>
        </tr>
        <tr align="center">
            <td>db:delete</td>
            <td>DB</td>
            <td>
                <ul>
                    <li>name</li>
                    <li>query</li>
                    <li>queryparams</li>
                    <li>datasource-name</li>
                </ul>
            </td>
        </tr>
        <tr align="center">
            <td>db:query-single</td>
            <td>DB</td>
            <td>
                <ul>
                    <li>name</li>
                    <li>query</li>
                    <li>queryparams</li>
                    <li>datasource-name</li>
                </ul>
            </td>
        </tr>
        <tr align="center">
            <td>db:bulk-update</td>
            <td>DB</td>
            <td>
                <ul>
                    <li>name</li>
                    <li>query</li>
                    <li>queryparams</li>
                    <li>datasource-name</li>
                </ul>
            </td>
        </tr>
        <tr align="center">
            <td>db:bulk-delete</td>
            <td>DB</td>
            <td>
                <ul>
                    <li>name</li>
                    <li>query</li>
                    <li>queryparams</li>
                    <li>datasource-name</li>
                </ul>
            </td>
        </tr>
        <tr align="center">
            <td>set-variable</td>
            <td>UTILITY</td>
            <td>
                <ul>
                    <li>name</li>
                    <li>pipeline</li>
                    <li>varName</li>
                </ul>
            </td>
        </tr>
        <tr align="center">
            <td>remove-variable</td>
            <td>UTILITY</td>
            <td>-</td>
        </tr>
        <tr align="center">
            <td>logger</td>
            <td>UTILITY</td>
            <td>
                <ul>
                    <li>name</li>
                    <li>logType</li>
                </ul>
            </td>
        </tr>
        <tr align="center">
            <td>error-handler</td>
            <td>CUSTOMSERVICE</td>
            <td>
                <ul>
                    <li>name</li>
                </ul>
            </td>
        </tr>
        <tr align="center">
            <td>try</td>
            <td>CUSTOMSERVICE</td>
            <td>
                <ul>
                    <li>name</li>
                </ul>
            </td>
        </tr>
        <tr align="center">
            <td>scatter-gather</td>
            <td>PARALLEL</td>
            <td>
                <ul>
                    <li>name</li>
                    <li>timeframe</li>
                </ul>
            </td>
        </tr>
        <tr align="center">
            <td>error-handler</td>
            <td>CUSTOMSERVICE</td>
            <td>
                <ul>
                    <li>name</li>
                </ul>
            </td>
        </tr>
        <tr align="center">
            <td>choice</td>
            <td>DECISIONBOX</td>
            <td>
                <ul>
                    <li>name</li>
                </ul>
            </td>
        </tr>
        <tr align="center">
            <td>foreach</td>
            <td>DECISIONBOX</td>
            <td>-</td>
        </tr>
        <tr align="center">
            <td>choice</td>
            <td>SCHEDULER</td>
            <td>
                <ul>
                    <li>name</li>
                    <li>intialDelay</li>
                    <li>startDelay</li>
                </ul>
            </td>
        </tr>
        <tr align="center">
            <td>s3:create-bucket</td>
            <td>CUSTOM</td>
            <td>-</td>
        </tr>
        <tr align="center">
            <td>s3:put-object</td>
            <td>FILE</td>
            <td>
                <ul>
                    <li>name</li>
                    <li>filename</li>
                    <li>datasource-name</li>
                </ul>
            </td>
        </tr>
        <tr align="center">
            <td>s3:get-object</td>
            <td>FILE</td>
            <td>
                <ul>
                    <li>name</li>
                    <li>filename</li>
                    <li>datasource-name</li>
                </ul>
            </td>
        </tr>
        <tr align="center">
            <td>s3:delete-object</td>
            <td>CUSTOM</td>
            <td>-</td>
        </tr>
        <tr align="center">
            <td>s3:delete-bucket</td>
            <td>CUSTOM</td>
            <td>-</td>
        </tr>
    </tbody>
</table>