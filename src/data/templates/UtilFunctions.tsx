import { type Template } from "@site/src/types";

export const sample: Template = {
  description:
    "This project covers all the test cases of REST trigger with usage of inline functions in response.",
  services: [
    {
      serviceName: "cnardy",
      description: "Use of custom array dynamic data type",
      input: JSON.stringify(
        { mobile1: "8787879090", mobile2: "", mobile3: "8787876767" },
        null,
        2
      ),
      output: JSON.stringify(
        {
          Result: [
            { mobile: "mobile_home", mobileNumber: "8787879090" },
            { mobile: "mobile_office", mobileNumber: "" },
            { mobile: "mobile_office_2", mobileNumber: "8787876767" },
          ],
        },
        null,
        2
      ),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "cnardy",
      },
    },
    {
      serviceName: "DYFLCL",
      description:
        "Use of dynamic field column array dynamic data type (i.e. if one of the column value is null it will dynamically select another valid coilumn",
      input: JSON.stringify(
        {
          mobile1: "7875364804",
          name: "Rajat",
          mobile2: "8783459234",
          mobile3: "",
        },
        null,
        2
      ),
      output: JSON.stringify(
        {
          Result: "8783459234",
        },
        null,
        2
      ),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "dyflcl",
      },
    },
    {
      serviceName: "IFELSE",
      description: "Use of ifelse condition logic in transformation",
      input: JSON.stringify(
        {
          status: "approved",
        },
        null,
        2
      ),
      output: JSON.stringify(
        { Result: " Customer is approved for further Transaction" },
        null,
        2
      ),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "ifelse",
      },
    },
    {
      serviceName: "NoMap",
      description: "Use to transform the input to empty string",
      output: JSON.stringify({ result: "" }, null, 2),
      endpointInfo: {
        basepath: "nomap",
      },
    },
    {
      serviceName: "Switch",
      description: "Use of switch case logic",
      input: JSON.stringify({ status: "approved" }, null, 2),
      output: JSON.stringify(
        { Result: " Customer is approved for further transaction" },
        null,
        2
      ),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "switch",
      },
    },
    {
      serviceName: "Date",
      description: "Use to get the current date and time.",
      output: JSON.stringify(
        { DateNow: "2024-06-26", DateTime: "2024-06-26 02:38:07" },
        null,
        2
      ),
      endpointInfo: {
        basepath: "date",
      },
    },
    {
      serviceName: "Strings",
      description:
        "Use of all string functions:\n 1. Use `concat` method to concatenate 2 or more strings with an underscore `_` between them.\n 2. Use `toUppercase` method to convert string to uppercase.\n 3. Use `countMatches` to find occurances of a word in given string.\n 4. Use `dasherize` to replace space with dash.\n 5. Use `isAlphanumeric` to check if given text contains only letters and numbers.\n 6. Use `toLowercase` method to convert string to lowercase.\n 7. Use `reverse` to reverse a string.\n 8. Use `capitalize` to capitalize a string.\n 9. Use `replaceAll` to replace old word with new word in a given string.",
      input: JSON.stringify(
        {
          FirstName: "john",
          LastName: "Doe",
          OriginalText: "This sentence will change",
          oldWord: "will",
          newWord: "has",
          text: "can you count how many a are there in this sentence",
        },
        null,
        2
      ),
      output: JSON.stringify(
        {
          FullName: "john_Doe",
          UpperCaseName: "JOHN_DOE",
          Occurances: 4,
          DasherizeText: "can-you-count-how-many-a-are-there-in-this-sentence",
          IsAlphanumeric: true,
          LowerCaseName: "john_doe",
          Reverse: "eoD_nhoj",
          CapitalizedName: "John_Doe",
          ReplaceAll: "This sentence has change",
        },
        null,
        2
      ),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "strings",
      },
    },
    {
      serviceName: "Math",
      description:
        "Use `add` method for addition of static and dynamic values. Use `random` method:\n 1. without any length provided.\n 2. with length given 15",
      input: JSON.stringify({ additional: 20 }, null, 2),
      output: JSON.stringify(
        { Addition: 50, Random: "XyYED", RandomWithLength: "Au1bIy3IQ4sjpKi" },
        null,
        2
      ),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "math",
      },
    },
  ],
};
