import { type Template } from "@site/src/types";

export const sample: Template = {
  description: "This project covers all the test cases of Message trigger",
  services: [
    {
      serviceName: "readOrdersMessage",
      description:
        "get the Orders JMS message and write the same to DB and File",
    },
  ],
};
