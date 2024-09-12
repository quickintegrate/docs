import { Image } from '@site/src/components/custom';
import DocCardList from '@theme/DocCardList';

# Transaction

This page lets you monitor the application transactions.
A user can easily check the flow information and its performance and resubmit any transcation.

## Contents

1. Transactions can be listed by selecting `Project name`, `build version` and `environment` from the drop down
2. You can also filter out the transactions by selecting `start date` and `end date` for more specific transaction data
3. Clicking the `plus sign`
   1. A parent transaction id will appear if the transaction is resubmitted
   2. If data is changed while resubmitting

<table>
    <thead>
        <tr>
            <th>Tracking Number</th>
            <th>Service Name</th>
            <th>SPI URI</th>
            <th>Error</th>
            <th>Duration</th>
            <th>Re-submitted</th>
            <th>Updated Date</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Unique transaction Id</td>
            <td>Service name of the transaction</td>
            <td>Service URL endpoint</td>
            <td>Boolean value if any error occured</td>
            <td>Total duration (ms) taken by the service to execute</td>
            <td>If the perticular transaction has been resubmitted or not</td>
            <td>Time when transaction happened</td>
        </tr>
    </tbody>
</table>




<Image src="/img/Monitoring/Transaction/transaction-page.png" alt="Transaction_page" />

<!-- <DocCardList /> -->