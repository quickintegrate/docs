import { type Template } from "@site/src/types";
import {
  csv1row,
  xmlArray1item,
  jsonArray,
  flatText,
  constResponse,
} from "@site/src/data/templates/TRREST_TRANSFORMSAMPLE";

export const sample: Template = {
  description: "Trigger REST and Connector FILE samples",
  services: [
    {
      serviceName: "readCsv",
      description:
        "Read a CSV file, move it to a different folder, rename it and return its data as is.",
      output: csv1row,
      endpointInfo: {
        basepath: "readCsv",
      },
    },
    {
      serviceName: "readXml",
      description:
        "Read a XML file, move it to a different folder and return its data as is.",
      output: [
        "<?xml version='1.1' encoding='UTF-8'?>\n",
        xmlArray1item.replace(/ArrayList/g, "root"),
      ],
      endpointInfo: {
        basepath: "readXml",
      },
    },
    {
      serviceName: "readJson",
      description: "Read a JSON file and return its data as is.",
      output: JSON.stringify(jsonArray[0], null, 2),
      endpointInfo: {
        basepath: "readJson",
      },
    },
    {
      serviceName: "readTxt",
      description: "Read a TEXT file and return its data as is.",
      output: flatText,
      endpointInfo: {
        basepath: "readTxt",
      },
    },
    {
      serviceName: "removeFile",
      description: "Remove a file.",
      output: JSON.stringify(constResponse, null, 2),
      endpointInfo: {
        cls: "danger",
        method: "DELETE",
        basepath: "removeFile",
      },
    },
    {
      serviceName: "writeCsv",
      description: "Create a CSV file and write payload content in it.",
      input: csv1row,
      output: JSON.stringify(constResponse, null, 2),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "writeCsv",
      },
    },
    {
      serviceName: "appendToExistingCsv",
      description: "Append payload content to already created CSV file.",
      input: csv1row.replace(/John/g, "Will").replace(/111/g, "112"),
      output: JSON.stringify(constResponse, null, 2),
      endpointInfo: {
        cls: "warning",
        method: "PUT",
        basepath: "appendToExistingCsv",
      },
    },
    {
      serviceName: "writeXml",
      description: "Create a XML file and write payload content in it.",
      input: xmlArray1item,
      output: JSON.stringify(constResponse, null, 2),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "writeXml",
      },
    },
    {
      serviceName: "writeJson",
      description: "Create a JSON file and write payload content in it.",
      input: JSON.stringify(jsonArray[0], null, 2),
      output: JSON.stringify(constResponse, null, 2),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "writeJson",
      },
    },
    {
      serviceName: "appendToExistingJson",
      description: "Append payload content to already created JSON file.",
      input: JSON.stringify(jsonArray[1], null, 2),
      output: JSON.stringify(constResponse, null, 2),
      endpointInfo: {
        cls: "warning",
        method: "PUT",
        basepath: "appendToExistingJson",
      },
    },
    {
      serviceName: "writeTxt",
      description: "Create a TEXT file and write payload content in it.",
      input: flatText,
      output: JSON.stringify(constResponse, null, 2),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "writeTxt",
      },
    },
  ],
};
