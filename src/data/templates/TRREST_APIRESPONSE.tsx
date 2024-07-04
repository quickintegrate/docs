import { type Template } from "@site/src/types";
import getFormattedDateTime from "@site/src/utils/common";

const sampleJson = {
  ID: 1,
  Name: "Minal",
  LastName: "Deshpande",
  FirstName: "Minal",
  phone: "40.32.2555",
  Address1: "Pune",
  Address2: null,
  city: "Pune",
  state: null,
  pincode: "411007",
  country: "India",
  salesRepEmployeeNumber: 1702,
  creditLimit: 1451.25,
};

const sampleXml =
  "<Customer>\n    <ID>1</ID>\n    <Name>Minal</Name>\n    <LastName>Deshpande</LastName>\n    <FirstName>Minal</FirstName>\n    <phone>40.32.2555</phone>\n    <Address1>Pune</Address1>\n    <Address2/>\n    <city>Pune</city>\n    <state/>\n    <pincode>411007</pincode>\n    <country>India</country>\n    <salesRepEmployeeNumber>1702</salesRepEmployeeNumber>\n    <creditLimit>1451.25</creditLimit>\n</Customer>";

const sampleCsv =
  "ID,Name,LastName,FirstName,phone,Address1,Address2,city,state,pincode,country,salesRepEmployeeNumber,creditLimit\n1,Minal,Deshpande,Minal,40.32.2555,Pune,,Pune,,411007,India,1702,1451.25";

const customers = [
  { Id: 100, Name: "Rajat Kulkarni", City: "Boston", Country: "USA" },
  { Id: 103, Name: "Atelier graphique", City: "Amravati", Country: "France" },
  { Id: 112, Name: "Signal Gift Stores", City: "Las Vegas", Country: "USA" },
  {
    Id: 114,
    Name: "Australian Collectors, Co.",
    City: "Melbourne",
    Country: "Australia",
  },
  { Id: 119, Name: "La Rochelle Gifts", City: "Nantes", Country: "France" },
];

export const sample: Template = {
  description:
    "This project covers all the test cases of REST trigger and APIRESPONSE transformer.",
  services: [
    {
      serviceName: "getSingleRecord",
      description:
        "getSingleRecord having GEN mapping. Create rest trigger to get customer data from DB and map the single record with GEN. Target keys will change",
      output: JSON.stringify(customers[0], null, 2),
      endpointInfo: {
        basepath: "getSingleRecord",
      },
    },
    {
      serviceName: "getStatusCodeGlobal",
      description:
        "get status code from global variables and content-type text/plain",
      output: JSON.stringify({ Customer: customers[0] }, null, 0)
        .replace("Name", "customerName")
        .replace("Id", "customerNumber")
        .replace("City", "city")
        .replace("Country", "country"),
      endpointInfo: {
        basepath: "getStatusCodeGlobal",
      },
    },
    {
      serviceName: "getMultipleRecord",
      description:
        "getMultipleRecord having AR mapping. Create rest trigger to get customers data from DB and map the multiple record with GEN. Target keys will change",
      output: JSON.stringify({ Customers: customers }, null, 2),
      endpointInfo: {
        basepath: "getMultipleRecord",
      },
    },
    {
      serviceName: "getArrayResponse",
      description: "get array in response and content-type application/json",
      output: JSON.stringify(customers, null, 2),
      endpointInfo: {
        basepath: "getArrayResponse",
      },
    },
    {
      serviceName: "getArrayResponseTxt",
      description:
        "get array in response and content-type text/plain and status-code 202",
      output: JSON.stringify(customers, null, 2),
      endpointInfo: {
        basepath: "getArrayResponseTxt",
      },
    },
    {
      serviceName: "getFirstObject",
      description: "Get first record from array using CN",
      output: JSON.stringify(customers[0], null, 2),
      endpointInfo: {
        basepath: "getFirstObject",
      },
    },
    {
      serviceName: "postCNOBJ",
      description:
        "Usage of Transformer where both input and output are JSON in REST POST request (ouput request_payload)  TRansform in Java object. IN APIResponse using CN send data back as with content-type as application/json",
      input: JSON.stringify(sampleJson, null, 2),
      output: sampleCsv,
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "postCNOBJ",
      },
    },
    {
      serviceName: "postTransUtils",
      description:
        "Use of few inline functions:\n 1. Use `Strings.concat` method to concatenate 2 or more strings with an underscore `-` between them and `Utils.constant` to get a constant value.\n 2. Use `Strings.toUppercase` method to convert string to uppercase.\n 3. Use `Maths.add` method for addition of static and dynamic values with datatype `Number`.\n 4. Use `Strings.isAlphanumeric` to check if given text contains only letters and numbers.\n 5. Use `Maths.add` method for addition of static and dynamic values with datatype `Double`.\n 6. Use `Date.DateTime` method to get the current date and time.",
      input: JSON.stringify(
        {
          name: "John Doe",
          num1: 12,
          num2: 34,
          num3: 50,
          price: 133,
          text: "This sentence contains alphanumeric characters 00",
        },
        null,
        2
      ),
      output: JSON.stringify(
        {
          "Constant Concat String": "Welcome to Atd Services-John Doe",
          "Uppercase Name": "JOHN DOE",
          Total: 96,
          isAlphanumeric: true,
          "Double Val": 233.0,
          Date: getFormattedDateTime(),
        },
        null,
        2
      ),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "postTransUtils",
      },
    },
    {
      serviceName: "postJSONgetJSON",
      description:
        "input  is json APIRESPONSE component Content-Type-> application/json use CN with request_payload",
      input: JSON.stringify(sampleJson, null, 2),
      output: JSON.stringify(sampleJson, null, 2),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "postJSONgetJSON",
      },
    },
    {
      serviceName: "postJSONgetXML",
      description:
        "input  is json APIRESPONSE component Content-Type-> application/xml use CN with request_payload",
      input: JSON.stringify(sampleJson, null, 2),
      output: sampleXml,
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "postJSONgetXML",
      },
    },
    {
      serviceName: "postJSONgetCSV",
      description:
        "input  is json APIRESPONSE component Content-Type-> text/csv use CN with request_payload",
      input: JSON.stringify(sampleJson, null, 2),
      output: sampleCsv,
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "postJSONgetCSV",
      },
    },
    {
      serviceName: "postJsonArrGetCsv",
      description:
        "input  is json APIRESPONSE component Content-Type-> text/csv use CN with request_payload",
      input: JSON.stringify([sampleJson], null, 2),
      output: sampleCsv,
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "postJsonArrGetCsv",
      },
    },
    {
      serviceName: "postJSONgetTXT",
      description:
        "input  is json APIRESPONSE component Content-Type-> text/plain use CN with request_payload",
      input: JSON.stringify(sampleJson, null, 2),
      output: sampleCsv,
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "postJSONgetTXT",
      },
    },
    {
      serviceName: "postXMLgetJSON",
      description:
        "input  is json APIRESPONSE component Content-Type-> application/json use CN with request_payload",
      input: sampleXml,
      output: JSON.stringify(sampleJson, null, 2),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "postXMLgetJSON",
      },
    },
    {
      serviceName: "postXMLgetXML",
      description:
        "input  is json APIRESPONSE component Content-Type-> application/xml use CN with request_payload",
      input: sampleXml,
      output: sampleXml,
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "postXMLgetXML",
      },
    },
    {
      serviceName: "postXMLgetCSV",
      description:
        "input  is json APIRESPONSE component Content-Type-> text/csv use CN with request_payload",
      input: sampleXml,
      output: sampleCsv,
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "postXMLgetCSV",
      },
    },
    {
      serviceName: "postXMLgetTXT",
      description:
        "input  is json APIRESPONSE component Content-Type-> text/plain use CN with request_payload",
      input: sampleXml,
      output: sampleCsv,
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "postXMLgetTXT",
      },
    },
    {
      serviceName: "postCSVgetJSON",
      description:
        "input  is json APIRESPONSE component Content-Type-> application/json use CN with request_payload",
      input: sampleCsv,
      output: JSON.stringify(sampleJson, null, 2),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "postCSVgetJSON",
      },
    },
    {
      serviceName: "postCSVgetXML",
      description:
        "input  is json APIRESPONSE component Content-Type-> application/xml use CN with request_payload",
      input: sampleCsv,
      output: sampleXml,
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "postCSVgetXML",
      },
    },
    {
      serviceName: "postCSVgetCSV",
      description:
        "input  is json APIRESPONSE component Content-Type-> text/csv use CN with request_payload",
      input: sampleCsv,
      output: sampleCsv,
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "postCSVgetCSV",
      },
    },
    {
      serviceName: "postCSVgetTXT",
      description:
        "input  is json APIRESPONSE component Content-Type-> text/plain use CN with request_payload",
      input: sampleCsv,
      output: sampleCsv,
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "postCSVgetTXT",
      },
    },
    {
      serviceName: "postTXTgetJSON",
      description:
        "input  is json APIRESPONSE component Content-Type-> application/json use CN with request_payload",
      input: sampleCsv,
      output: JSON.stringify(sampleJson, null, 2),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "postTXTgetJSON",
      },
    },
    {
      serviceName: "postTXTgetXML",
      description:
        "input  is json APIRESPONSE component Content-Type-> application/xml use CN with request_payload",
      input: sampleCsv,
      output: sampleXml,
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "postTXTgetXML",
      },
    },
    {
      serviceName: "postTXTgetCSV",
      description:
        "input  is json APIRESPONSE component Content-Type-> text/csv use CN with request_payload",
      input: sampleCsv,
      output: sampleCsv,
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "postTXTgetCSV",
      },
    },
    {
      serviceName: "postTXTgetTXT",
      description:
        "input  is json APIRESPONSE component Content-Type-> text/plain use CN with request_payload",
      input: sampleCsv,
      output: sampleCsv,
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "postTXTgetTXT",
      },
    },
  ],
};
