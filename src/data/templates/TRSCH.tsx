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
    {
      serviceName: "cronSchedularService",
      description: "Scheduling the service by cron job to run after every 5 seconds. Logging the current datetime to show that the service is indeed executing after 5 seconds.",
    },
  ],
};
