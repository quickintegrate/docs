import { type Template } from "@site/src/types";

export const sample: Template = {
  description:
    "This project covers all test cases for REST trigger and URLVALIDATOR transformer.",
  services: [
    {
      serviceName: "validateUrl",
      description:
        "Required request param must be provided which are validated by validator.",
      output: JSON.stringify(
        {
          Status: "Activated",
        },
        null,
        2
      ),
      endpointInfo: {
        basepath: "validateUrl?status=Activated",
      },
    },
    {
      serviceName: "validateUrl",
      description:
        "Required request param if not provided the validator throws error.",
      output: JSON.stringify(
        {
          errorCode: 500,
          status: "Failed",
          errorDescription: "Missing request params",
        },
        null,
        2
      ),
      endpointInfo: {
        basepath: "validateUrl",
      },
    },
  ],
};
