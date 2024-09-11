---
sidebar_position: 2
slug: "ReSubmission"
sidebar_label: "ReSubmission"
---

import { Badge } from "@site/src/components/custom";
import { Image, Video } from '@site/src/components/custom';

# ReSubmission

It allows to resubmit a rest transaction from the monitoring ui.

## Configuration

:::note

- The application needs to be running to ensure resubmission.
  :::

1. Select `Transaction` from sidebar if not selected
2. Select `Poject name`, `build version` and `environment` from the drop down
   1. You can also filter out the transactions by selecting `start date` and `end date`
3. Select the transaction record from the list which needs to be resubmitted
4. From the transaction information page click `re-submit` button
5. Edit the fields that needs to be change and click `submit` again to send the request
   1. You can also delete or add if any field is required or not required respectively
6. If the resubmission is successfull then a new transaction id will be return.
7. You can confirm if a transaction is resubmitted or not in the  Re-submitted column in the transaction list
   1. clicking the `plus sign`, a parent transaction id will appear if the transaction is resubmitted

<Video src="/img/Monitoring/Transaction/transaction-resubmission.mp4" type="video/mp4" />