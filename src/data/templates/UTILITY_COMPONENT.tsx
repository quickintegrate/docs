import { type Template } from "@site/src/types";

export const sample: Template = {
  description:
    "This project covers all test cases for REST trigger and Utility transformer.",
  services: [
    {
      serviceName: "addLogs",
      description:
        "Use `add variable` to add key, value pair in pipeline. Use `logging` to print some message with types: INFO, ERROR, DEBUG, VERBOSE.",
      output: JSON.stringify(
        {
          Result:
            "This is a simple service to demonstrate logging and variable usage",
        },
        null,
        2
      ),
      endpointInfo: {
        basepath: "addLogs",
      },
    },
    {
      serviceName: "addRemoveVariable",
      description:
        "Use `add variable` to add key, value pair in pipeline. Log the value using `logging` and then use `remove variable` to remove key and its value from pipeline.",
      output: JSON.stringify(
        { status: "Status successfully removed." },
        null,
        2
      ),
      endpointInfo: {
        basepath: "addRemoveVariable?id=1112",
      },
    },
    {
      serviceName: "throwError",
      description: "Use of throw error (INTBusinessException) method.",
      output: JSON.stringify(
        {
          errorCode: 1001,
          status: "Failed",
          errorDescription: "This is a sample business exception",
        },
        null,
        2
      ),
      endpointInfo: {
        basepath: "throwError?id=2",
      },
    },
    {
      serviceName: "throwError",
      description: "Use of throw error (INTRtryException) method.",
      output: JSON.stringify(
        {
          errorCode: 500,
          status: "Failed",
          errorDescription: "Raised the INTRetryException Explicitly",
        },
        null,
        2
      ),
      endpointInfo: {
        basepath: "throwError?id=1",
      },
    },
  ],
};
