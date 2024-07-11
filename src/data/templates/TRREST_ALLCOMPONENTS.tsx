import { type Template } from "@site/src/types";

const dataAccessError =
  " - DataAccess Error: ****** Null Data Result Error Incorrect result size: expected 1, actual 0 ******";

const error404 = {
  errorCode: 404,
  status: "No Response",
  errorDescription: dataAccessError,
};

const customers = [
  { Id: 1, Name: "Rajat", Address: "Amt" },
  { Id: 2, Name: "Aniket", Address: "Nashik" },
];

export const sample: Template = {
  description: "This project has Rest trigger and all Components.",
  services: [
    {
      serviceName: "globalErrHappyPath",
      description:
        "Global error with API_response msg. Response is 200 ok. Create rest api with DB select (wrong querry) that throws error.",
      output: JSON.stringify(
        {
          Err_MSG: dataAccessError,
        },
        null,
        2
      ),
      endpointInfo: {
        basepath: "globalErrHappyPath/10",
      },
    },
    {
      serviceName: "globalErrUnHappyPath",
      description:
        "Global error with throw error msg. Status code should should be 500. Create rest api with DB select (wrong querry) that throws error.",
      output: JSON.stringify(error404, null, 2),
      endpointInfo: {
        basepath: "globalErrUnHappyPath/10",
      },
    },
    {
      serviceName: "stepErrorHappyPath",
      description:
        "Step error with API_response msg. Response is 200 ok. Create rest api with DB select (wrong querry) that throws error.",
      output: JSON.stringify(error404, null, 2),
      endpointInfo: {
        basepath: "stepErrorHappyPath/10",
      },
    },
    {
      serviceName: "stepErrUnHappyPath",
      description:
        "Step error with throw error msg. Status code is 400. Create rest api with DB select (wrong querry) that throws error.",
      output: JSON.stringify(
        {
          errorCode: 500,
          status: "Failed",
          errorDescription: dataAccessError,
        },
        null,
        2
      ),
      endpointInfo: {
        basepath: "stepErrUnHappyPath/10",
      },
    },
    {
      serviceName: "stepErrorContinueHappyPath",
      description:
        "Step error with continue checked. Where error gets logged and then move further with API_response. Response is 200 ok. Create rest api with DB select (wrong querry) that throws error.",
      output: JSON.stringify(
        { Message: "Flow executed successfully" },
        null,
        2
      ),
      endpointInfo: {
        basepath: "stepErrorContinueHappyPath/10",
      },
    },
    {
      serviceName: "stepErrContinueUnHappyPath",
      description:
        "Step error with continue checked. Throw the  error in step exception. The flow should not move further with API_response msg. No global error componnet configured. Create rest api with DB select (wrong querry) that throws error.",
      output: JSON.stringify(
        {
          errorCode: 500,
          status: "Failed",
          errorDescription: dataAccessError,
        },
        null,
        2
      ),
      endpointInfo: {
        basepath: "stepErrContinueUnHappyPath/10",
      },
    },
    {
      serviceName: "stepErrContinueUnHappyPathWithGlobal",
      description:
        "Step error with continue checked. Throw the  error in step exception. The flow should not move further Global error componnet configured with API_response message. Response should be 200  and global api_response message should be shown. Create rest api with DB select (wrong querry) that throws error.",
      output: JSON.stringify(
        { Err_Msg: "Flow did not complete. Please check with admin." },
        null,
        2
      ),
      endpointInfo: {
        basepath: "stepErrContinueUnHappyPathWithGlobal/10",
      },
    },
    {
      serviceName: "condIfHappyPath",
      description:
        "IF condition true,then call subflow with API_repsonse.Create rest api with compulsory request params.",
      output: JSON.stringify(
        { Message: "Request Params actual value passes successfully" },
        null,
        2
      ),
      endpointInfo: {
        basepath: "condIfHappyPath?id=10",
      },
    },
    {
      serviceName: "condIfUnHappyPath",
      description:
        "IF condition is true, call subflow with API_repsonse. This throw error . Create rest api with compulsory request params key is not passed",
      output: JSON.stringify(
        { errorCode: 404, status: "No Response", errorDescription: null },
        null,
        2
      ),
      endpointInfo: {
        basepath: "condIfUnHappyPath",
      },
    },
    {
      serviceName: "condIfAndHappyPath",
      description:
        "IF-AND condition true(contains and not null), call subflow  with API_repsonse. Create rest api with compulsory  request params",
      output: JSON.stringify(
        { Message: "Request Param actual value passed successfully" },
        null,
        2
      ),
      endpointInfo: {
        basepath: "conditionIfAndHappyPath?id=10",
      },
    },
    {
      serviceName: "condIfAndUnHappyPath",
      description:
        "IF-AND condition, unsatisfied Second condition. Create rest api with 2 compulsory  request params",
      output: JSON.stringify(
        { errorCode: 404, status: "No Response", errorDescription: null },
        null,
        2
      ),
      endpointInfo: {
        basepath: "condIfAndUnHappyPath?id=null",
      },
    },
    {
      serviceName: "condIfOrHappyPath",
      description:
        "IF-OR true (active or deactive), call subflow with API_repsonse. Create rest api with compulsory request params 'status'",
      output: JSON.stringify(
        { Message: "Status actually passed successfully" },
        null,
        2
      ),
      endpointInfo: {
        basepath: "condIfOrHappyPath?status=Deactive",
      },
    },
    {
      serviceName: "condIfOrUnHappyPath",
      description:
        "IF-OR condition unsatisfied then call subflow with API_repsonse. Create rest api with 2 compulsory  request params",
      output: JSON.stringify(
        { errorCode: 404, status: "No Response", errorDescription: null },
        null,
        2
      ),
      endpointInfo: {
        basepath: "condIfOrUnHappyPath",
      },
    },
    {
      serviceName: "condIfElseHappyPath",
      description:
        "IF condition unsatisfied, ELSE call with API_repsonse saying. Create rest api with 2 compulsory  request params",
      output: JSON.stringify(
        { Message: "Request Param value passed successfully" },
        null,
        2
      ),
      endpointInfo: {
        basepath: "condIfElseHappyPath?id=10",
      },
    },
    {
      serviceName: "loopHappyPath",
      description:
        "Create  rest api by passing Array of customers to be updated with new filed status . Loop over the customers and respond back the updated array",
      input: JSON.stringify(customers, null, 2),
      output: JSON.stringify(
        [
          { Id: 1, Name: "Rajat", Address: "Amt", Status: "Active" },
          { Id: 2, Name: "Aniket", Address: "Nashik", Status: "Active" },
        ],
        null,
        2
      ),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "loopHappyPath",
      },
    },
    {
      serviceName: "condLoopUnHappyPath",
      description:
        "Create  rest api by passing json of customers to be updated with new filed status . Loop over the customers that will throw error",
      input: JSON.stringify(customers, null, 2),
      output: JSON.stringify(
        {
          errorCode: 500,
          status: "Failed",
          errorDescription:
            "The Data to loop is not object of List. Error in INTDecisionProcessor==>checkLoopBlock()",
        },
        null,
        2
      ),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "condLoopUnHappyPath",
      },
    },
  ],
};
