import { type Template } from "@site/src/types";

export const sample: Template = {
  description: "This project covers all the test cases of DB trigger",
  services: [
    {
      serviceName: "supplierEventListner",
      description:
        "Read the Customer Change event which captures insert/update or delete and write that to file",
    },
    {
      serviceName: "eventListnerPropogate",
      description:
        "Read the Employee Change event and write that to file , Update to DB , Publsih JMS",
    },
  ],
};
