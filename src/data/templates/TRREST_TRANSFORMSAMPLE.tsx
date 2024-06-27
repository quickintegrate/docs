import { type Template } from "@site/src/types";

export const csv1row = "name,id,city,country\nJohn,111,Pune,India";

export const csvSample = csv1row + "\nWill,112,Pune,India";

export const xmlArray1item =
  "<ArrayList>\n    <item>\n\t<name>John</name>\n\t<id>111</id>\n\t<city>Pune</city>\n\t<country>India</country>\n    </item>\n</ArrayList>\n";

export const xmlArray =
  "<ArrayList>\n    <item>\n\t<name>John</name>\n\t<id>111</id>\n\t<city>Pune</city>\n\t<country>India</country>\n    </item>\n    <item>\n\t<name>Will</name>\n\t<id>112</id>\n\t<city>Pune</city>\n\t<country>India</country>\n    </item>\n</ArrayList>\n";

export const xmlObj =
  "<details>\n    <name>John</name>\n    <id>111</id>\n    <city>Pune</city>\n   <country>India</country>\n</details>\n";

export const json1obj = [
  {
    name: "John",
    id: 111,
    city: "Pune",
    country: "India",
  },
];

export const jsonArray = [
  ...json1obj,
  {
    name: "Will",
    id: 112,
    city: "Pune",
    country: "India",
  },
];

export const flatText =
  "ST*       850*0001\nBEG*00*SA*000000006637770**20230818*0001307878";

export const constResponse = {
  status: "success",
};

export const sample: Template = {
  description: "Trigger REST and Transformer TRANS samples",
  services: [
    {
      serviceName: "CSVtoCSV",
      description:
        "Gets CSV data from payload and transform returns data as is.",
      input: csvSample,
      output: csvSample,
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "csvToCsv",
      },
    },
    {
      serviceName: "CSVtoXML",
      description:
        "Validates payload data to be in valid CSV format using XML stylesheet. Converts CSV data from payload to XML format and returns response as is.",
      input: csv1row,
      output: [
        "<?xml version='1.1' encoding='UTF-8'?>\n",
        xmlArray1item.replace(/ArrayList/g, "root"),
      ],
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "csvToXml",
      },
    },
    {
      serviceName: "CSVtoOBJ",
      description:
        "Converts CSV data from payload to Java Object format and returns array of object in response in which each object has a key name.",
      input: csvSample,
      output: JSON.stringify(
        [
          {
            name: "John",
          },
          {
            name: "Will",
          },
        ],
        null,
        2
      ),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "csvToObj",
      },
    },
    {
      serviceName: "CSVtoJSON",
      description:
        "Converts CSV data from payload to JSON format and returns response as is.",
      input: csv1row,
      output: JSON.stringify(json1obj, null, 2),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "csvToJson",
      },
    },
    {
      serviceName: "XMLtoXML",
      description:
        "Gets XML data from payload and transform returns data as is.",
      input: xmlArray1item,
      output: [
        "<?xml version='1.1' encoding='UTF-8'?>\n",
        xmlArray1item.replace(/ArrayList/g, "root"),
      ],
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "xmlToXml",
      },
    },
    {
      serviceName: "XMLtoCSV",
      description:
        "Converts XML data from payload to CSV format and returns response as is.",
      input: xmlArray1item,
      output: csv1row,
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "xmlToCsv",
      },
    },
    {
      serviceName: "XMLtoOBJ",
      description:
        "Converts XML data from payload to Java Object format and returns object map in response.",
      input: xmlArray1item,
      output: JSON.stringify(
        {
          ObjectMap: "{item={name=John, id=111, city=Pune, country=India}}",
        },
        null,
        2
      ),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "xmlToObj",
      },
    },
    {
      serviceName: "XMLtoJSON",
      description:
        "Validates payload data to be in valid XML format using XML stylesheet. Converts XML data from payload to JSON format and returns response as is.",
      input: xmlObj,
      output: JSON.stringify(json1obj, null, 2),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "xmlToJson",
      },
    },
    {
      serviceName: "JSONtoXML",
      description:
        "Converts JSON data from payload to XML format and returns response as is.",
      input: JSON.stringify(jsonArray, null, 2),
      output: [
        "<?xml version='1.1' encoding='UTF-8'?>\n",
        xmlArray.replace(/ArrayList/g, "root"),
      ],
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "jsonToXml",
      },
    },
    {
      serviceName: "JSONtoCSV",
      description:
        "Converts JSON data from payload to CSV format and returns response as is.",
      input: JSON.stringify(json1obj, null, 2),
      output: csv1row,
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "jsonToCsv",
      },
    },
    {
      serviceName: "JSONtoOBJ",
      description:
        "Validates payload data to be in valid JSON format using JSON schema. Converts JSON data from payload to Java Object format and returns object with key name in response.",
      input: JSON.stringify(json1obj, null, 2),
      output: JSON.stringify(
        {
          name: "John",
        },
        null,
        2
      ),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "jsonToObj",
      },
    },
    {
      serviceName: "JSONtoJSON",
      description:
        "Gets JSON data from payload and transform returns data as is.",
      input: JSON.stringify(jsonArray, null, 2),
      output: JSON.stringify(jsonArray, null, 2),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "jsonToJson",
      },
    },
    {
      serviceName: "OBJtoXML",
      description:
        "Converts JSON data from payload to Java Object and then the previous Java Object to XML format and returns response as is.",
      input: JSON.stringify(jsonArray, null, 2),
      output: [
        "<?xml version='1.1' encoding='UTF-8'?>\n",
        xmlArray.replace(/ArrayList/g, "root"),
      ],
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "objToXml",
      },
    },
    {
      serviceName: "OBJtoCSV",
      description:
        "Converts JSON data from payload to Java Object and then the previous Java Object to CSV format and returns response as is.",
      input: JSON.stringify(jsonArray, null, 2),
      output: csvSample,
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "objToCsv",
      },
    },
    {
      serviceName: "OBJtoOBJ",
      description:
        "Reads data from database which returns a java object and transform returns data as is.",
      input: JSON.stringify(jsonArray, null, 2),
      output: JSON.stringify(
        {
          name: "[John]",
        },
        null,
        2
      ),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "objToObj",
      },
    },
    {
      serviceName: "OBJtoJSON",
      description:
        "Converts JSON data from payload to Java Object and then the previous Java Object to JSON format. Returns object which contains id (number), salary (double), isRemoteEmployee (boolean), name (string), original_JSON (json).",
      input: JSON.stringify(
        {
          name: "John",
          id: 111,
          salary: "50000",
          isRemoteEmployee: "true",
        },
        null,
        2
      ),
      output: JSON.stringify(
        {
          name: "John",
          id: 111,
          salary: 50000.0,
          isRemoteEmployee: true,
          original_JSON: {
            name: "John",
            id: 111,
            salary: "50000",
            isRemoteEmployee: "true",
          },
        },
        null,
        2
      ),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "objToJson",
      },
    },
    {
      serviceName: "FLATtoXML",
      description:
        "Converts TEXT data from payload to XML format and returns response as is.",
      input: flatText,
      output: `<?xml version='1.1' encoding='UTF-8'?>\n<root>\n    <record0>\n\t<col0>ST*       850*0001</col0>\n    </record0>\n    <record1>\n\t<col0>BEG*00*SA*000000006637770**20230818*0001307878</col0>\n    </record1>\n</root>`,
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "flatToXml",
      },
    },
    {
      serviceName: "FLATtoCSV",
      description:
        "Converts TEXT data from payload to CSV format and returns response as is.",
      input: flatText,
      output: `col0\n"ST*       850*0001"\n"BEG*00*SA*000000006637770**20230818*0001307878"`,
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "flatToCsv",
      },
    },
    {
      serviceName: "FLATtoOBJ",
      description:
        "Converts TEXT data from payload to Java Object format and returns data in JSON format.",
      input: flatText,
      output: JSON.stringify(
        [
          {
            col0: "ST*       850*0001",
          },
          {
            col0: "BEG*00*SA*000000006637770**20230818*0001307878",
          },
        ],
        null,
        2
      ),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "flatToObj",
      },
    },
    {
      serviceName: "FLATtoJSON",
      description:
        "Converts TEXT data from payload to JSON format and returns response as is.",
      input: flatText,
      output: JSON.stringify(
        [
          {
            col0: "ST*       850*0001",
          },
          {
            col0: "BEG*00*SA*000000006637770**20230818*0001307878",
          },
        ],
        null,
        2
      ),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "flatToJson",
      },
    },
    {
      serviceName: "FLATtoJSONwithMultipleRanges",
      description:
        "Converts TEXT data from payload to JSON format with multiple ranges provided which reads line from start of range to end and creates values accordingly.",
      input: flatText,
      output: JSON.stringify(
        [
          {
            col0: "ST*       ",
            col1: "850*0001",
          },
          {
            col0: "BEG*00*SA*",
            col1: "000000006637770**20230818*0001307878",
          },
        ],
        null,
        2
      ),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "flatToJsonWithMultipleRanges",
      },
    },
  ],
};
