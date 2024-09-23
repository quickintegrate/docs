import { type Template } from "@site/src/types";

export const sample: Template = {
  description: "Trigger REST and AI CHAT connector samples",
  services: [
    {
      serviceName: "groqCall",
      description: "Invoking rest call to the GROQ chat AI using llama3-70b-8192 model with a test input and text answer as the output.",
      input: JSON.stringify({}, null, 2),
      output: JSON.stringify({}, null, 2),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "groqai",
      },
    },
    {
      serviceName: "chatPractical",
      description: "Practical Example of Chat AI model. Rest post service with a string containing the order number. Call the AI chat model, to extract this order number from the text. Get order details for this order number from the DB. Convert the returned order detail to simple English text, by calling the AI chat model. Now this English response is returned as a Response of the service.",
      input: JSON.stringify({}, null, 2),
      output: JSON.stringify({}, null, 2),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "chatTest",
      },
    },
    {
      serviceName: "groqConnectionTimeout",
      description: "Rest call with connection timeout waiting of 1 millisecond that throws an error and an error response is returned for the connection timed out.",
      input: JSON.stringify({}, null, 2),
      output: JSON.stringify({}, null, 2),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "groqConnectionTimeout",
      },
    },
    {
      serviceName: "groqReadTimeout",
      description: "Rest call with response timeout waiting of 1 millisecond that throws an error and an error response is returned for the read timed out.",
      input: JSON.stringify({}, null, 2),
      output: JSON.stringify({}, null, 2),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "groqReadTimeout",
      },
    },
  ],
};
