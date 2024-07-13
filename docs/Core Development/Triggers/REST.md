import { Badge } from "@site/src/components/custom";
import { Image } from '@site/src/components/custom';

Quickintegrate platform supports **REST API** development using HTTP trigger where configurations can be defined such as host, port, uri/query params etc.

:::note

- The flow must contain atleast one APIRESPONSE element in it when this is used.
- For method <Badge cls="success" method="POST" /> / <Badge cls="warning" method="PUT" /> / <Badge cls="success" method="PATCH" /> request body is not compulsory.
:::

1. When we Login to Quick Integration Platform to get started.

2. Click on **Manage** Option >> **Projects** >> **Create** to create the new project

3. Go to **DEVELOP** >> **Functionality** API

4. Select relevant project and create services in that project by cliking **Service** button.

5. Select **REST** triggers in drowndown while creating the flow

6. Once service name is provided, canvas will show up with selected DB **REST** Trigger

<Image src="/img/Core Development/Trigger/rest.png" alt="REST trigger" />

### Configuration

<Image cls="border mb-2" src="/img/Core Development/Trigger_config/rest.png" alt="Trigger Configuration" />

Right click the tigger node to add the REST configurations uri and type needs to be defined. Query and Uri parameters can be defined with Uri as below:

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
        <td>uri</td>
        <td>Resource Path</td>
        <td>
            ```
            /contact/{ContactId}
            ```
        </td>
    </tr>
    <tr>
        <td>type</td>
        <td>Methods</td>
        <td>
            <Badge cls="info" method="GET" />
        </td>
    </tr>
    </tbody>
</table>

`URI parameters are defined in curly brackets`
