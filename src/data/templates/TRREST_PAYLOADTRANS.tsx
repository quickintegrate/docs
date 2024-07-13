import { type Template } from "@site/src/types";
import getFormattedDateTime from "@site/src/utils/common";

const customer = { id: 1, name: "John", city: "Pune" };
const customerRes = { Id: 1, Name: "John", City: "Pune" };

export const sample: Template = {
  description:
    "This project covers all the test cases of REST trigger and payload transformer.",
  services: [
    {
      serviceName: "mapSingleRecord",
      description: "mapSingleRecord having GEN mapping",
      input: JSON.stringify(customer, null, 2),
      output: JSON.stringify(customerRes, null, 2),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "mapSingleRecord",
      },
    },
    {
      serviceName: "mapMultipleRecord",
      description: "mapMultipleRecord having AR mapping",
      input: JSON.stringify([customer], null, 2),
      output: JSON.stringify(
        {
          Customers: [{ Status: "Active", ...customerRes }],
        },
        null,
        2
      ),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "mapMultipleRecord",
      },
    },
    {
      serviceName: "mapArray",
      description: "Having AR mapping which returns array as output",
      input: JSON.stringify([customer], null, 2),
      output: JSON.stringify([{ Status: "Active", ...customerRes }], null, 2),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "mapArray",
      },
    },
    {
      serviceName: "mapRecordQueryParam",
      description:
        "Usage of Transformer where input comes from query params using TRANS mapping, concatenate the input and return as output.",
      output: JSON.stringify(
        {
          Message: "User John Doe is active at " + getFormattedDateTime(),
        },
        null,
        2
      ),
      endpointInfo: {
        basepath: "mapRecordQueryParam?firstName=John&lastName=Doe",
      },
    },
    {
      serviceName: "postRecordOBJ",
      description: "postRecordOBJ having OBJ mapping",
      input: JSON.stringify(customer, null, 2),
      output: JSON.stringify(
        {
          Record: {
            Shop: "Sony",
            Customer: customer,
          },
        },
        null,
        2
      ),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "postRecordOBJ",
      },
    },
    {
      serviceName: "postTransUtils",
      description:
        "Use of few inline functions:\n 1. Use `Strings.concat` method to concatenate 2 or more strings with an underscore `-` between them and `Utils.constant` to get a constant value.\n 2. Use `Strings.toUppercase` method to convert string to uppercase.\n 3. Use `Maths.add` method for addition of dynamic values with datatype `Number`.\n 4. Use `Maths.add` method for addition of static and dynamic values with datatype `Double`.\n 5. Use GEN with datatype `Boolean`.\n 6. Use `Date.DateTime` method to get the current date and time.",
      input: JSON.stringify(
        {
          name: "John Doe",
          num1: 123.09,
          num2: 34,
          num3: 50,
          price: 133,
          flag: true,
        },
        null,
        2
      ),
      output: JSON.stringify(
        {
          Value: "Welcome to Atd Services-John Doe",
          "Uppercase Name": "JOHN DOE",
          Total: 207,
          "Double Val": 233.0,
          Flag: true,
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
  ],
};
