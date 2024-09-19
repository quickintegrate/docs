import { type Template } from "@site/src/types";

export const sample: Template = {
  description: "This project covers all the test cases of File trigger",
  services: [
    {
      serviceName: "ReadFile",
      description:
        "Read the records from file e.g CSV Orders file  and write it to db . Move the file to done folder. (to triggger this file handling scenario -  save a csv file on the specified source location. check db to verify tht recoreds are inserted)",
    },
    {
      serviceName: "WriteErrorRecordFile",
      description:
        "Read the records from file e.g JSON Orders file . Let the file have 7 valid order and 3 order with no Price. Check with condition block, the price field. if prices is null, then write error for that record, else write success record. At the end done long for trigger executed successfully.",
    },
  ],
};