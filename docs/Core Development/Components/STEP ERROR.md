import useBaseUrl from '@docusaurus/useBaseUrl';

# Step error

**Step error** component is used to catch and handle errors specific to a connector/step in the API.		

error handling is no longer limited to a Java exception handling process that requires you to check the source code or force an error in order
understand what happened. Errors mostly occur at runtime that's they belong to an unchecked type.

We catch the error at the flow level in the step error component

so after which step does the user need to catch the error, just copy and paste the step error component below that step and connect both components with the help of the connector line. and drag-drop any component in that step error for error message. but keep remembering when you need to drag a component in the error step, first, you need to select that error step component then drag another component in that step error then only your component will work