import { type Template } from "@site/src/types";

export const sample: Template = {
  description:
    "This project covers all test cases for REST trigger and URLVALIDATOR transformer.",
  services: [
    {
      serviceName: "urlValidateHappy",
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
      serviceName: "urlValidateUnHappy",
      description:
        "Required request param if not provided the validator throws error.",
      output: JSON.stringify(
        {
          errorCode: 500,
          status: "Failed",
          errorDescription: "request param id is not present.",
        },
        null,
        2
      ),
      endpointInfo: {
        basepath: "validateUrl",
      },
    },
    {
      serviceName: "validateCsvBody",
      description:
        "Request Body with valid CSV schema is required or else will throw error.",
      input: "name,id,city,country\nPranab,777,Bongaigaon,India",
      output: JSON.stringify(
        {
          result: "success"
        },null,2),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "validatecsvbody",
      },
    },
    {
      serviceName: "validateJsonBody",
      description:
        "Request Body with valid JSON schema is required or else will throw error.",
      input: JSON.stringify(
        {
          name: "Pranab",
          id: 777,
          city: "Bongaigaon",
          country: "India"
        },null,2),
      output: JSON.stringify(
        {
          result: "success"
        },null,2),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "validatejsonbody",
      },
    },
    {
      serviceName: "validateXMLBody",
      description:
        "Request Body with valid XML schema is required or else will throw error.",
      input: "<details>\n    <name>Pranab</name>\n    <id>777</id>\n    <city>Bongaigaon</city>\n    <country>India</country>\n</details>\n",
      output: JSON.stringify(
        {
          result: "success"
        },null,2),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "validatexmlbody",
      },
    },
    {
      serviceName: "validateQueryParam",
      description:
        "Required request param must be provided which are validated by validator.",
      output: JSON.stringify(
        {
          result: "success",
        },
        null,
        2
      ),
      endpointInfo: {
        basepath: "validatequeryparam?companyName=Atdev&yearsOfExperience=1",
      },
    },
  ],
};
