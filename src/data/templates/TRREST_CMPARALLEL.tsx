import { type Template } from "@site/src/types";
import { PostOffice } from "@site/src/data/templates/TRREST_CNREST";

export const sample: Template = {
  description: "Trigger REST and Component PARALLEL",
  services: [
    {
      serviceName: "parallelHappy",
      description:
        "Get postal code as input from query param. in parallel, call rest with the postal code as input to fetch postal data. from db for the pin, get customers for the pin. return the cosolidated data of the 2 parallel steps as output. ",
      output: JSON.stringify(
        {
          db: [],
          rest: PostOffice,
        },
        null,
        2
      ),
      endpointInfo: {
        basepath: "parallelHappy?pin=444605",
      },
    },
    {
      serviceName: "parallelUnHappy",
      description:
        "Get postal code as input from query param. in parallel, call rest with the wrong postal code as input to fetch postal data. from db for the pin, get customers for the pin. return the cosolidated data of the 2 parallel steps as output. Rest will give error.",
      output: JSON.stringify(
        {
          rest: {
            err_code: 500,
            err_msg:
              "Error getting param for key: $REQUEST_PARAMS.postal. Error : Error getting value for key: $REQUEST_PARAMS.postal",
          },
          db: [],
        },
        null,
        2
      ),
      endpointInfo: {
        basepath: "parallelUnHappy?pin=444607",
      },
    },
  ],
};
