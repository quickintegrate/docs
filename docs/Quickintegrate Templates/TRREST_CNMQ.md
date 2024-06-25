import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# TRREST_CNMQ

Trigger REST and Connector JMS samples

<table>
    <thead>
        <tr>
            <th>Sr. No</th>
            <th>Service Name</th>
            <th>Description</th>
            <th>Details</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1.</td>
            <td>SendMessageToQueue</td>
            <td>Get the message as payload, add some addition info from db and send the msg to queue.</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                        <CodeBlock className="language-json">
                        {JSON.stringify({
                            "name": "Frank Loyyd", "mobile": "923234234234", "id": 5
                        }, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">
                        {JSON.stringify({
                            "Result": "Data send to queue successfully."
                        }, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--success margin-bottom--sm">POST</span>
                        ```
                        /send
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>2.</td>
            <td>errQueueNotExists</td>
            <td>Send message to Queue which does not exist</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                        <CodeBlock className="language-json">
                        {JSON.stringify({
                            "name": "Frank Loyyd", "mobile": "923234234234", "id": 5
                        }, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">
                        {JSON.stringify({
                            "result": "Msg sent"
                        }, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--success margin-bottom--sm">POST</span>
                        ```
                        /queuenotexists
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>3.</td>
            <td>errMQisDown</td>
            <td>Send Message when Rabbit MQ is down</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                        <CodeBlock className="language-json">
                        {JSON.stringify({
                            "name": "Frank Loyyd", "mobile": "923234234234", "id": 5
                        }, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">
                        {JSON.stringify({
                            "result": "JMS might be down or something went wrong"
                        }, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--success margin-bottom--sm">POST</span>
                        ```
                        /mqdown
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>4.</td>
            <td>mqExceptionHandling</td>
            <td>This case involves handling of error data if there is any error while executing the mq step. In this example,we are providing incorrect ds information. This will fail to call the bean as the bean will not be created due to incorrect info.. This error will be stored in "ERROR" object in the pipeline. Then we have step exception block where we have a step whcih will throw business exception, with message and code.</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock>
                        {JSON.stringify({
                            "errorCode": 500,
                            "status": "Failed",
                            "errorDescription": "com.flow.core.processor.msg.INTQueueSendProcessor -- No bean named 'sampledsTemptemplate' available"
                        }, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--info margin-bottom--sm">GET</span>
                        ```
                        /mqExcpetionHandling
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>5.</td>
            <td>receiveMsgFromQueue</td>
            <td>Get message from a perticualar queue (one message at a time)</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">
                        {JSON.stringify({
                            "Name":"Frank.Loyyd","ID":5,"Mobile":"923234234234","Shop":"Iphone","Address":"Manchester-123"
                        }, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--info margin-bottom--sm">GET</span>
                        ```
                        /receive
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
    </tbody>
</table>
