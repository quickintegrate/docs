---
sidebar_position: 5
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Sub-flow 

A Subflow functions as a component block linked to the Decision Box. The Decision Box determines which Subflow to execute based on selected conditions. Multiple Subflows can be associated with each Decision Box. The behavior of the Subflow adapts according to the condition type chosen.

When employing 'if-else-elseif' conditions, the subsequent Subflow execution hinges on the evaluation of these conditions. Meanwhile, with a 'Loop' condition, the input is treated as a list. The Subflow iterates through this list to perform specified tasks. The output of the loop component becomes the final step's output within the Subflow, processing each element from the input list individually.

1) Subflows do not have trigger sources.

2) Subflows do not have an error-handling scope.

3) During design, sub-flows work as macros that replace the connected components that call them.

4) Referencing sub-flows results in better performance than referencing a flow.

Drag and drop the **Subflow**

<img src={useBaseUrl('/img/Core Development/Components/subflow.png')} />;

<img src={useBaseUrl('/img/Core Development/Components/subflow drag and drop.png')} />;


#### Configuring Subflow

1. drag the decision box and set the conditions, and define the name of subflow for each condition.

2. drag the subflow and name it the same as mentioned in the above decision box.
   
3. Link the subflow with the decision box.
   
4. Here, we must outline the process of adding different components to the subflow, similar to the regular flow. The key distinction is that the subflow lacks a trigger or response. The execution of the subflow mirrors that of the main flow, where the same thread proceeds to execute the subflow before returning to the main flow.

5. give the output name for the return value of the subflow (for loop as condition).

<img src={useBaseUrl('/img/Core Development/Components/Condition Senario.png')} />;

### Configuration of Loop Sublfow scenario Example
1) In this we have the input which is a single map object iterated from Loop Condition. We named this as ***customer***. We will then use this input variable within the subflow for any operation. Usage is same as any variable we use from the pipeline. eg. ***$customer.name*** will get the name from customer map if available.
2) Output of the subflow comes to the output variable confirued here and is put in the output variable of LoopCondtion. So the final output of LoopCondition is list of output of each subflow iteration. This can only work if the subflow's last step has output variable, else blank list will be created as final output.
<img src={useBaseUrl('/img/Core Development/Components/Loop Subflow.png')} />

