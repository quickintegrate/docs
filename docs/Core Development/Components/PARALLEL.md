---
sidebar_position: 6
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import CodeBlock from '@theme/CodeBlock';

# Parallel

Parallel is a component block, which is a container to hold multiple, independent steps. Parallel blocks have a time frame (in seconds), which denotes the max time it will take the entire block to complete execution and is configurable. The steps inside the parallel flow are inserted by selecting a parallel container, then dragging the steps inside the block. The steps are not connected by links, meaning they are independent of each other and will run asynchronously.

The below example shows the parallel component in a flow:

<img src={useBaseUrl('/img/Core Development/Components/parallel_flow.png')} />

There are 2 properties that can be set in a parallel block, one is the timeframe (in sec) and other is output name.

<img src={useBaseUrl('/img/Core Development/Components/parallel_form.png')} />

The trigger is rest, and the first step in the flow is a parallel block. The parallel block contains 2 steps, rest and db, which will execute parallely, within the timeframe defined in the parallel block. After the steps are executed, the output of each step is gathered and is then put inside the output of the parallel block.

So the output would be. **parallelOut[restOut, dbOut]**. The output can be: 
1. error of the step if any error
2. timeout error if the step was not completed within the timeframe of parallel
3. actual output of success. 

If there is no output of the step, like the logger step, then the final output will not contain any output for that step.

The output of parallel is put in a map format, and will contain step name as key and the value as output of the step. So the value for the individual output can be extracted by, `"$ParallelOut.rest"` and `"$ParallelOut.db"`, for the above example. And the overall output can be taken like this, `"$ParallelOut"`. Aside from getting the output from parallel flow like this, the user can also retrieve the output of individual steps by their output names too, if the step contains output.

For successful execution of the above flow, the defined parallel step output name is parallelOut. So the output of parallel will be:

<CodeBlock className="language-json">
{JSON.stringify({
  "parallelOut": {
    "rest": {
      "Message": "Number of Post office(s) found: 21",
      "Status": "Success",
      "PostOffice": [
        {
          "Name": "Baroda House",
          "Description": "",
          "BranchType": "Sub Post Office",
          "DeliveryStatus": "Non-Delivery",
          "Circle": "New Delhi",
          "District": "Central Delhi",
          "Division": "New Delhi Central",
          "Region": "Delhi",
          "State": "Delhi",
          "Country": "India"
        }
      ]
    }
  },
  "db": {
    "customerName": "Rajat Kulkarni",
    "city": "Amt",
    "country": "IND",
    "pin": "444605"
  }
}, null, 2)}
</CodeBlock>

Here both the steps output are retrieved successfully. These are then mapped to parallel output.

For error cases, if one of the steps fails due to timeout or step failure, then the output will look like below. Here the rest is failing due to a timeout issue and db is successful.

<CodeBlock className="language-json">
{JSON.stringify({
    "parallelOut": {
        "rest": "Error occurred while performing step 'rest'. Cause: Socket timeout exception.",
        "db": {
            "customerName": "Rajat Kulkarni",
            "city": "Amt",
            "country": "IND",
            "pin": "444605"
        }
    }   
}, null, 2)}
</CodeBlock>

:::note
The parallel block is error proof, as even if the entire steps in the block fails or timeouts, then the parallel block itself does not fail. It will take whatever error is of the step itself as the output for the step. This way if there are 2 steps in a parallel block, and 1 step fails, it does not affect the other step, realizing the advantage of asynchronous.
:::