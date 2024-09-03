import { Image } from '@site/src/components/custom';

For **SCHEDULER** based API's, quickintegrate development kit has **SCHEDULER Trigger** which can be used for cron or frequency based triggers.

1. When we Login to Quick Integration Platform to get started.
2. Click on **Manage** Option >> **Projects** >> **Create** to create the new project
3. Go to **DEVELOP** >> **Functionality** API
4. Select relevant project and create services in that project by clicking **Service** button.
5. Select **SCHEDULER** trigger from drowndown while creating the flow
6. Once service name is provided, canvas will show up with selected DB **SCHEDULER** Trigger

<Image src="/img/Core Development/Trigger/scheduler.png" alt="SCHEDULER trigger" />

## Configuration

Right click the tigger node to add the SCHEDULER configurations based on type that needs to be defined.

### Fixed frequency
<Image cls="border mb-2" src="/img/Core Development/Trigger_config/fixedFrequency.png" alt="Fixed frequency Configuration" />

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
            <td>Initial Delay</td>
            <td>Duration after which Polling will start once API Started</td>
            <td>5000</td>
        </tr>
        <tr>
            <td>Schedule Delay</td>
            <td>Polling Frequency</td>
            <td>10000</td>
        </tr>
    </tbody>
</table>

### Cron job

<Image cls="border mb-2" src="/img/Core Development/Trigger_config/cronJob.png" alt="Cron job Configuration" />

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
            <td>Cron Expression</td>
            <td>String consisting of six or seven subexpressions (fields) that describe individual details of the schedule.</td>
            <td>*/5 * * * * *</td>
        </tr>
    </tbody>
</table>
