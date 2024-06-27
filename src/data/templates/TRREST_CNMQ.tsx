import { type Template } from "@site/src/types";

export const sample: Template = {
  description: "Trigger REST and Connector JMS samples",
  services: [
    {
      serviceName: "SendMessageToQueue",
      description:
        "Get the message as payload, add some addition info from db and send the msg to queue.",
      input: JSON.stringify(
        {
          name: "Frank Loyyd",
          mobile: "923234234234",
          id: 5,
        },
        null,
        2
      ),
      output: JSON.stringify(
        {
          Result: "Data send to queue successfully.",
        },
        null,
        2
      ),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "send",
      },
    },
    {
      serviceName: "errQueueNotExists",
      description: "Send message to Queue which does not exist",
      input: JSON.stringify(
        {
          name: "Frank Loyyd",
          mobile: "923234234234",
          id: 5,
        },
        null,
        2
      ),
      output: JSON.stringify(
        {
          result: "Msg sent",
        },
        null,
        2
      ),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "queuenotexists",
      },
    },
    {
      serviceName: "errMQisDown",
      description: "Send Message when Rabbit MQ is down",
      input: JSON.stringify(
        {
          name: "Frank Loyyd",
          mobile: "923234234234",
          id: 5,
        },
        null,
        2
      ),
      output: JSON.stringify(
        {
          result: "JMS might be down or something went wrong",
        },
        null,
        2
      ),
      endpointInfo: {
        cls: "success",
        method: "POST",
        basepath: "mqdown",
      },
    },
    {
      serviceName: "mqExceptionHandling",
      description:
        'This case involves handling of error data if there is any error while executing the mq step. In this example,we are providing incorrect ds information. This will fail to call the bean as the bean will not be created due to incorrect info. This error will be stored in "ERROR" object in the pipeline. Then we have step exception block where we have a step which will throw business exception, with message and code.',
      output: JSON.stringify(
        {
          errorCode: 500,
          status: "Failed",
          errorDescription:
            "com.flow.core.processor.msg.INTQueueSendProcessor -- No bean named 'sampledsTemptemplate' available",
        },
        null,
        2
      ),
      endpointInfo: {
        basepath: "mqExcpetionHandling",
      },
    },
    {
      serviceName: "receiveMsgFromQueue",
      description:
        "Get message from a particular queue (one message at a time)",
      output: JSON.stringify(
        {
          Name: "Frank.Loyyd",
          ID: 5,
          Mobile: "923234234234",
          Shop: "Iphone",
          Address: "Manchester-123",
        },
        null,
        2
      ),
      endpointInfo: {
        basepath: "receive",
      },
    },
  ],
};
