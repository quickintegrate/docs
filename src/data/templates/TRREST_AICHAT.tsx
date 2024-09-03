import { type Template } from "@site/src/types";

export const sample: Template = {
  description: "Trigger REST and AI CHAT connector samples",
  services: [
    {
      serviceName: "groqCall",
      description: "GROQ chat ai usage using llama3-70b-8192",
      input: JSON.stringify({}, null, 2),
      output: JSON.stringify({}, null, 2),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "groqai",
      },
    },
    {
      serviceName: "groqCallTwo",
      description: "GROQ chat ai usage using llama3-70b-8192 with option values changed",
      input: JSON.stringify({}, null, 2),
      output: JSON.stringify({}, null, 2),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "groqaiTwo",
      },
    },
  ],
};
