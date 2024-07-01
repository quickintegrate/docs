import { type Template } from "@site/src/types";

const soapEnvelope =
  '<?xml version="1.0" encoding="utf-8"?>\n<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\n    <soap:Body>\n\t<NumberToWords xmlns="http://www.dataaccess.com/webservicesserver/">\n\t    <ubiNum>5280.2</ubiNum>\n\t</NumberToWords>\n    </soap:Body>\n</soap:Envelope>';

export const sample: Template = {
  description: "Trigger REST and Connector SOAP",
  services: [
    {
      serviceName: "consumeSoap",
      description:
        "Trigger is rest with post action.xml body is passed as payload input. number conversion soap api is called with soap v=connector with the input as is the body to the request as input. Get the output and convert to json and send as response.",
      input: soapEnvelope,
      output: JSON.stringify(
        {
          Body: {
            NumberToWordsResponse: {
              NumberToWordsResult: "five thousand two hundred and eighty",
            },
          },
        },
        null,
        2
      ),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "consumeSoap",
      },
    },
    {
      serviceName: "consumeSoapUnHappyPath",
      description:
        "Trigger is rest with post action. blank body is passed as payload input. number conversion soap api is called with soap v=connector with the input as is the body to the request as input. Get the output and convert to json and send as response. This will throw error as no body passed. 500 status caode",
      input: soapEnvelope,
      output: JSON.stringify(
        {
          Message:
            "Error occurred while calling soap. Reason: com.flow.core.processor.soap.INTSOAPClient--Error occurred while calling soap service. Reason: javax.xml.transform.TransformerException: com.sun.org.apache.xml.internal.utils.WrappedRuntimeException: The content of elements must consist of well-formed character data or markup.",
        },
        null,
        2
      ),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "consumeSoapUnHappyPath",
      },
    },
    {
      serviceName: "soapExceptionHandling",
      description:
        'This case involves handling of error data if there is any error while executing the soap step. In this example,we are providing incorrect payload, which the soap service will be giving error of incorrect body. This error will be stored in "ERROR" object in the pipeline. Then we have step exception block where we have a step whcih will throw business exception, with message and code.',
      output: JSON.stringify(
        {
          errorCode: 404,
          status: "Failed",
          errorDescription:
            "com.flow.core.processor.soap.INTSOAPClient--Error occurred while calling soap service. Reason: javax.xml.transform.TransformerException: com.sun.org.apache.xml.internal.utils.WrappedRuntimeException: The content of elements must consist of well-formed character data or markup.",
        },
        null,
        2
      ),
      endpointInfo: {
        basepath: "soapExceptionHandling",
      },
    },
    {
      serviceName: "soapWithTimeout",
      description:
        "setting timeout. if connection take longer that set time, gives timeout error.",
      input: soapEnvelope,
      output: JSON.stringify(
        {
          errorCode: 500,
          status: "Failed",
          errorDescription:
            "com.flow.core.processor.soap.INTSOAPClient--Read timed out",
        },
        null,
        2
      ),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "soapWithTimeOut",
      },
    },
    {
      serviceName: "soapWithoutTimeout",
      description:
        "setting timeout. will not give error since not timeout occurs",
      input: soapEnvelope,
      output: JSON.stringify(
        {
          Body: {
            NumberToWordsResponse: {
              NumberToWordsResult: "five thousand two hundred and eighty",
            },
          },
        },
        null,
        2
      ),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "soapWithoutTimeout",
      },
    },
  ],
};
