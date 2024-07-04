import { type Template } from "@site/src/types";

export const sample: Template = {
  description: "This project covers all the test cases of Schedular trigger",
  services: [
    {
      serviceName: "scheduleServieSendJMS",
      description: "Schedule a services which send JMS message",
    },
    {
      serviceName: "scheduleServiceCallRest",
      description: "Schedule a service which pools Rest API",
    },
  ],
};
