---
sidebar_position: 4
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Decision Box (Cond)

The **Decision Box** is a conditional container executor. In the user interface, it appears as **Cond**. Use it to run a subflow based on a condition or to repeat a subflow for each item in a list.

Every Decision Box uses one or more subflows. The subflow name configured in the Decision Box must exactly match the name of its corresponding subflow container; otherwise, validation will fail.

## Add and configure a Decision Box

Drag the **Cond** component from the component palette into the API flow, then open its configuration panel.

<img src={useBaseUrl('/img/Core Development/Components/Condition.png')} alt="Cond component in the component palette" /><br/><br/>

<img src={useBaseUrl('/img/Core Development/Components/Condition drag and drop.png')} alt="Adding the Cond component to an API flow" />

<img src={useBaseUrl('/img/Core Development/Components/Condition config.png')} alt="Decision Box configuration panel" />

Choose either **IF** or **LOOP** as the decision type. These modes are mutually exclusive: selecting one makes the other unavailable.

## IF conditions

Use **IF** to choose a subflow based on one or more conditions. You can configure a single `IF`, an `IF`/`ELSE` pair, or an `IF`/`ELSE IF`/`ELSE` chain. Use **AND** and **OR** to combine multiple conditions within the IF logic.

The case options determine when a branch runs:

| Case | Description |
| --- | --- |
| IF | Run the associated subflow when its condition is true. |
| ELSE IF | Check another condition if the preceding IF or ELSE IF condition was false; run its subflow if true. |
| ELSE | Run the associated subflow when none of the preceding conditions was true. |
| AND | Combine conditions so the branch is true only when all combined conditions are true. |
| OR | Combine conditions so the branch is true when at least one of the combined conditions is true. |

For example:

```text
IF a > b AND b > c
    run subflow_1
ELSE IF c < d
    run subflow_2
ELSE
    run subflow_3
```

Each condition row uses these fields:

| Field | Description | Example |
| --- | --- | --- |
| Condition | The value or pipeline variable to test. | `$Payload` or `a` |
| Operator | The comparison or matching operation. | `>` or `contains` |
| Value | The value to compare the condition against. | `b` |
| Subflow | The name of the subflow to run when the condition is satisfied. | `subflow_1` |

Supported operators are `<`, `>`, `==`, `<=`, `>=`, `!=`, `reg`, and `contains`. A condition can use a static value or a value from the pipeline. Multiple AND/OR conditions can be added using the **+** control in the configuration panel. The conditions use the pipeline available to the Decision Box.
<br/><br/>
**Case:** First row always will be containg 2 options only. *IF* or *LOOP*. It defines what next rows cases can be. If *LOOP* selected then, *IF* and other cases disappears and you cant add another rows. *IF* selected, then *LOOP* and *IF* is removed, next rows will only have *AND*, *OR*, *ELSEIF* and *ELSE* cases as shown in image.
<img src={useBaseUrl('/img/Core Development/Components/Condition case.png')} alt="Decision Box condition case options" /><br/><br/>

**Operators:** For *IF* and its supporting cases.
<img src={useBaseUrl('/img/Core Development/Components/Condition operator.png')} alt="Decision Box condition operator options" /><br/><br/>

**Adding rows:** Supported only in if else cases.
<img src={useBaseUrl('/img/Core Development/Components/Add condition row.png')} alt="Adding an additional condition row with the plus control" />

### IF examples

The following diagram illustrates an API flow with condition-based subflows.

<img src={useBaseUrl('/img/Core Development/Components/Condition Senario.png')} alt="Example API flow using IF conditions and subflows" />

### IF-ELSE Config
The following diagram illustrates *IF-ELSE* case configuration.

<img src={useBaseUrl('/img/Core Development/Components/Condition Config IF ELSE.png')} alt="IF ELSE CONFIG" />

### IF-AND-ELSE Config
The following diagram illustrates *IF-AND-ELSE* case configuration.

<img src={useBaseUrl('/img/Core Development/Components/Condition Config IF AND ELSE.png')} alt="IF AND ELSE CONFIG" />

### IF-OR Config
The following diagram illustrates *IF-OR* case configuration.

<img src={useBaseUrl('/img/Core Development/Components/Condition Config IF OR.png')} alt="IF OR CONFIG" />

## LOOP

Use **LOOP** to run a subflow once for each item in a list. The condition must resolve to a pipeline value containing a Java list of map objects. A loop iterates over one list and runs one subflow for each item; unlike IF conditions, it does not support adding multiple condition rows.

| Field | Description |
| --- | --- |
| Condition | The pipeline value containing the list of map objects to iterate over. |
| Subflow | The name of the subflow to run for each item. |

Each item is passed to the subflow as it runs. You can set the item's variable name in the subflow's configuration panel. If you do not set a name, the default is `subflow_map`. For example, access an item's `name` field in the subflow with `$subflow_map.name`. This iteration variable is scoped to the subflow.

### Loop example

<img src={useBaseUrl('/img/Core Development/Components/Condition Loop Scenario.png')} alt="Example API flow using a Decision Box loop" />

### Loop configuration

<img src={useBaseUrl('/img/Core Development/Components/Loop Condtion Config.png')} alt="Configuring a Decision Box loop" />

:::note
See **Components / Sub-flow** for details about configuring subflows and their input variables.
:::

## Outputs and pipeline values

The Decision Box output is taken from the last node in the executed subflow that provides an output variable. If no node in the subflow provides an output variable, the Decision Box has no output value.

For a **LOOP**, the output is an array containing the output from each iteration. The pipeline is shared with the subflow, so variables used in a subflow can also be accessed directly from the pipeline. In a loop, a shared variable may be overwritten on every iteration; in that case, its final value is the one left by the last iteration.
