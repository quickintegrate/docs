import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import * as store from '@site/src/store/rest';

# TRREST_CNREST

Trigger REST and Connector REST samples

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
            <td>getMultipleRecord</td>
            <td>Get Multiple record from India Post API https://api.postalpincode.in . No Query or Path parameter passed and pincode is passed in the basepath itself. The output of the rest connector is used as the trigger response and returned as is.</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">
                        {JSON.stringify(store.PostOffice431001, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--info margin-bottom--sm">GET</span>
                        ```
                        /postal/multiple
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>2.</td>
            <td>getRecordPathParam</td>
            <td>Get Single record from India Post API. Get PostCode from DB for an custoemr id. Pass the post code as REST Path parameter. The output of the rest connector is used as the trigger resoponse and returned as is.</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">
                        {JSON.stringify(store.PostOffice, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--info margin-bottom--sm">GET</span>
                        ```
                        /getRecordPathParam/3
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>3.</td>
            <td>getRecordQueryparam</td>
            <td>Get Single record from SFDC API using query param.</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">
                        {JSON.stringify(store.sfdcRecords, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--info margin-bottom--sm">GET</span>
                        ```
                        /getRecordQueryParam?query=SELECT+Name+from+Contact
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>4.</td>
            <td>dynamicHeader</td>
            <td>Get Singel record from India Post API. Pass the post code from query params as REST Path parameter. set  header dynamically through request params.</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">
                        {JSON.stringify(store.PostOffice444601, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--info margin-bottom--sm">GET</span>
                        ```
                        /dynamicHeader?pin=444601&contentType=application/json
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>5.</td>
            <td>staticHeader</td>
            <td>Get Singel record from India Post API https://api.postalpincode.in  . No Query or Path parameter passed and pincode is passed in the basepath itself. set  static value to header, Content-Type is set as application/json as is static.</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">
                        {JSON.stringify(store.PostOffice431001, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--info margin-bottom--sm">GET</span>
                        ```
                        /staticHeader
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>6.</td>
            <td>requestHeader</td>
            <td>Dynamic Rest is called, with all parameters passed dynamically from query params. since no request header is passed explicitly, the headers will be passed as is from the call request to this trigger.</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">
                        {JSON.stringify(store.PostOffice431001, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--info margin-bottom--sm">GET</span>
                        ```
                        /requestHeader?protocol=https&domain=api.postalpincode.in&basepath=/pincode/431001&method=GET
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>7.</td>
            <td>globalvariableHeader</td>
            <td>Values to the rest connector like headers and path/query parameter are passed from Global Variables with the key "VARIABLES". eg. "$VARIABLES.query"</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">
                        {JSON.stringify(store.sfdcSearchRecords, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--info margin-bottom--sm">GET</span>
                        ```
                        /globalvariableHeader
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>8.</td>
            <td>dynamicQueryParam</td>
            <td>Set  query parameter dynamically through variable the value of q ie Services can be taken from request/query parameters.</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">
                        {JSON.stringify(store.sfdcSearchRecords, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--info margin-bottom--sm">GET</span>
                        ```
                        /dynamicQueryParam?query=Services&fields=Name
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>9.</td>
            <td>staticQueryParam</td>
            <td>Set  static value to query param . the values like headers and query params for the rest api are set in with static hardcoded values.</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">
                        {JSON.stringify(store.sfdcSearchRecords, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--info margin-bottom--sm">GET</span>
                        ```
                        /staticQueryParam
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>10.</td>
            <td>requestParam</td>
            <td>pass the same request query param as is.</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">
                        {JSON.stringify(store.sfdcSearchRecords, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--info margin-bottom--sm">GET</span>
                        ```
                        /requestParam?query=Services&fields=Name
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>11.</td>
            <td>globalQueryParam</td>
            <td>get the query param value from global variable set the limit global variable as 10 an dpass in rest.</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">
                        {JSON.stringify(store.sfdcSearchRecords, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--info margin-bottom--sm">GET</span>
                        ```
                        /globalQueryParam
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>12.</td>
            <td>dynamicPathParam</td>
            <td>Get Singel record from India Post API, Get PostCode from DB for an custoemr id . Pass the post code as REST Path parameter. The output of the rest connector is used as the trigger resoponse and returned as is.</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">
                        {JSON.stringify(store.PostOffice, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--info margin-bottom--sm">GET</span>
                        ```
                        /dynamicPathParam/3
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>13.</td>
            <td>staticPathParam</td>
            <td>set  static value to path param. For the rest connector, whenc calling the postal pincode, the path param is configured and the values is set static, i.e hardcoded. This values is passed to the api at the time of calling.</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">
                        {JSON.stringify(store.PostOffice431001, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--info margin-bottom--sm">GET</span>
                        ```
                        /staticPathParam
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>14.</td>
            <td>requestPathParam</td>
            <td>pass the same request path param as is. For the rest connector, whenc calling the postal pincode, the path param is configured and the values is set taking the value from path parameters of the main request. This values is passed to the api at the time of calling.</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">
                        {JSON.stringify(store.PostOffice110001, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--info margin-bottom--sm">GET</span>
                        ```
                        /requestPathParam/110001
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>15.</td>
            <td>globalVariablePathParam</td>
            <td>get the path param value from global variable.  For the rest connector, whenc calling the postal pincode, the path param is configured and the values is set taking the value from Global Variables, .e.g. $VARIABLES.pin This values is passed to the api at the time of calling.</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">
                        {JSON.stringify(store.PostOffice110001, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--info margin-bottom--sm">GET</span>
                        ```
                        /globalVariablePathParam
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>16.</td>
            <td>postStatic</td>
            <td>REST POST method - use this URL to post record - https://reqres.in/</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">{JSON.stringify({
                            "Status": "Constant",
                            "Result": {
                                "id": "902",
                                "createdAt": "2024-06-20T21:01:52.182Z"
                            }
                        }, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--info margin-bottom--sm">GET</span>
                        ```
                        /postStatic
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>17.</td>
            <td>postDynamic</td>
            <td>REST POST method - use this URL to post record - https://reqres.in/</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                        <CodeBlock className="language-json">{JSON.stringify({
                            "name": "John Smith 485",
                            "job":"Manager 970"
                        }, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">{JSON.stringify({
                            "name":"John Smith 485",
                            "job":"Manager 970",
                            "id":"521",
                            "createdAt":"2024-06-20T21:01:48.495Z"
                        }, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--success margin-bottom--sm">POST</span>
                        ```
                        /postDynamic
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>18.</td>
            <td>putData</td>
            <td>REST PUT method - use this URL to post record - https://reqres.in/</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                        <CodeBlock className="language-json">{JSON.stringify({
                            "name": "John Smith 109",
                            "job":"Manager 357"
                        }, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">{JSON.stringify({
                            "Status": "Updated Successfully",
                            "Update Result": {
                                "name": "John Smith 109",
                                "job": "Manager 357",
                                "updatedAt": "2024-06-23T21:01:53.241Z"
                            }
                        }, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--warning margin-bottom--sm">PUT</span>
                        ```
                        /putData/521
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>19.</td>
            <td>deleteData</td>
            <td>REST DELETE method - use this URL to post record - https://reqres.in/</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">{JSON.stringify({
                            "Status": "Record deleted successfully."
                        }, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--danger margin-bottom--sm">DELETE</span>
                        ```
                        /deleteData/521
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>20.</td>
            <td>patchData</td>
            <td>REST PATCH method - use this URL to post record - http://localhost:8083 and if rest step throws exception rethrow same with same code and description.</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                        <CodeBlock className="language-json">{JSON.stringify({
                             "city": "Mumbai", "phone": "9876345560", "refid": "", "state": "Maharastra", "country": "India", "postalCode": "110001", "creditLimit": "445623.11", "addressLine1": "", "addressLine2": "", "customerName": "John Watson", "contactLastName": "John", "contactFirstName": "Watson", "salesRepEmployeeNumber": "1702"
                        }, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">{JSON.stringify({
                            "Status":"Record for 728 patched successfully"
                        }, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--success margin-bottom--sm">PATCH</span>
                        ```
                        /patchData/728
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>21.</td>
            <td>postDataWithTemplate</td>
            <td>REST POST method, post body using file/template rather that sattic body  - use this URL to post record - https://reqres.in/</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                        <CodeBlock className="language-json">{JSON.stringify({
                            "name": "John",
                            "job": "Manager"
                        }, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">{JSON.stringify({
                            "name": "John",
                            "job": "Manager",
                            "id": "3",
                            "createdAt": "2024-06-20T21:01:50.844Z"
                        }, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--success margin-bottom--sm">POST</span>
                        ```
                        /postDataWithTemplate
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>22.</td>
            <td>dynamicGet</td>
            <td>use India postal code service  -  https://api.postalpincode.in/pincode/110001 -- invokeDynamicRest  without security</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">
                        {JSON.stringify(store.PostOffice431001, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--info margin-bottom--sm">GET</span>
                        ```
                        /dynamicGet?method=GET&protocol=https&domain=api.postalpincode.in&basepath=/pincode/431001
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>23.</td>
            <td>dynamicPost</td>
            <td>use OKTA rest service to create a customer -- invokeDynamicRest with APIKEY security</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                        <CodeBlock className="language-json">{JSON.stringify({
                            "method":"POST","protocol":"https","domain":"dev-55000538.okta.com","basepath":"/api/v1/users?activate=false","input":{"profile":{"firstName":"John_587","lastName":"Smith_473","email":"John_Smith_46@gmail.com","login":"John_Smith_46@gmail.com"}}
                        }, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">{JSON.stringify({
                            "id":"00uhwprwnj6TnQVtt5d7","status":"STAGED","created":"2024-06-22T21:01:34.000Z","activated":null,"statusChanged":null,"lastLogin":null,"lastUpdated":"2024-06-22T21:01:34.000Z","passwordChanged":null,"type":{"id":"oty7xf8z5yEllvu8a5d7"},"profile":{"firstName":"John_726","lastName":"Smith_99","mobilePhone":null,"secondEmail":null,"login":"John_Smith_88@gmail.com","email":"John_Smith_88@gmail.com"},"credentials":{"emails":[{"value":"John_Smith_88@gmail.com","status":"VERIFIED","type":"PRIMARY"}],"provider":{"type":"OKTA","name":"OKTA"}},"_links":{"schema":{"href":"https://dev-55000538.okta.com/api/v1/meta/schemas/user/osc7xf8z5yEllvu8a5d7"},"activate":{"href":"https://dev-55000538.okta.com/api/v1/users/00uhwprwnj6TnQVtt5d7/lifecycle/activate","method":"POST"},"self":{"href":"https://dev-55000538.okta.com/api/v1/users/00uhwprwnj6TnQVtt5d7"},"resetFactors":{"href":"https://dev-55000538.okta.com/api/v1/users/00uhwprwnj6TnQVtt5d7/lifecycle/reset_factors","method":"POST"},"type":{"href":"https://dev-55000538.okta.com/api/v1/meta/types/user/oty7xf8z5yEllvu8a5d7"}}
                        }, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--success margin-bottom--sm">POST</span>
                        ```
                        /dynamicPost
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>24.</td>
            <td>dynamicPut</td>
            <td>use OKTA rest service to create a customer -- invokeDynamicRest  with APIKEY security</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                        <CodeBlock className="language-json">{JSON.stringify({
                            "method": "PUT", "protocol": "https", "domain": "dev-55000538.okta.com", "basepath": "/api/v1/users/00udpvceehb4vYQPx5d7", "input": { "profile": { "firstName": "Shyam", "lastName": "Gupta", "email": "shyamgupta11@gmail.com", "login": "shyamgupta11@gmail.com", "mobilePhone": "555-415-1337", "city": "Florida", "state": "USA" } }
                        }, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">{JSON.stringify({
                            "id":"00udpvceehb4vYQPx5d7","status":"STAGED","created":"2023-12-08T04:04:26.000Z","activated":null,"statusChanged":null,"lastLogin":null,"lastUpdated":"2024-06-23T21:01:59.000Z","passwordChanged":null,"type":{"id":"oty7xf8z5yEllvu8a5d7"},"profile":{"firstName":"Shyam","lastName":"Gupta","mobilePhone":"555-415-1337","city":"Florida","secondEmail":null,"state":"USA","login":"shyamgupta11@gmail.com","email":"shyamgupta11@gmail.com"},"credentials":{"emails":[{"value":"shyamgupta11@gmail.com","status":"VERIFIED","type":"PRIMARY"}],"provider":{"type":"OKTA","name":"OKTA"}},"_links":{"schema":{"href":"https://dev-55000538.okta.com/api/v1/meta/schemas/user/osc7xf8z5yEllvu8a5d7"},"activate":{"href":"https://dev-55000538.okta.com/api/v1/users/00udpvceehb4vYQPx5d7/lifecycle/activate","method":"POST"},"self":{"href":"https://dev-55000538.okta.com/api/v1/users/00udpvceehb4vYQPx5d7"},"resetFactors":{"href":"https://dev-55000538.okta.com/api/v1/users/00udpvceehb4vYQPx5d7/lifecycle/reset_factors","method":"POST"},"type":{"href":"https://dev-55000538.okta.com/api/v1/meta/types/user/oty7xf8z5yEllvu8a5d7"}}
                        }, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--warning margin-bottom--sm">PUT</span>
                        ```
                        /dynamicPut
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>25.</td>
            <td>dynamicDelete</td>
            <td>use OKTA rest service to create a customer -- invokeDynamicRest  with APIKEY security</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">{JSON.stringify({
                            "Status":"Data deleted successfully."
                        }, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--danger margin-bottom--sm">DELETE</span>
                        ```
                        /dynamicDelete?method=DELETE&protocol=https&domain=dev-55000538.okta.com&basepath=/api/v1/users/00uhvd6qsagQznkVR5d7
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>26.</td>
            <td>postDataValidation</td>
            <td>input hedaer key Content-Type -> applcaitoninput/json  while calling the REST and Rest Response json</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                        <CodeBlock className="language-json">{JSON.stringify({
                             "consent":"Y",
                             "pan":"BQHPJ7128J"
                        }, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">{JSON.stringify({
                            "Status":"Pan validated successfully for user ANIKET NIVAS JADHAV"
                        }, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--success margin-bottom--sm">POST</span>
                        ```
                        /postDataValidation
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>27.</td>
            <td>jsonResponseCall</td>
            <td>Exception Handling Response  in case of   - Invalid URL</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">
                        {JSON.stringify(store.PostOffice431001, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--info margin-bottom--sm">GET</span>
                        ```
                        /jsonResponseCall
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>28.</td>
            <td>invalidUrl</td>
            <td>Exception Handling Response  in case of   - Invalid URL</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                        <CodeBlock className="language-json">{JSON.stringify({
                            "method": "GET",
                            "protocol": "https",
                            "domain": "api.postalpincode.inkl",
                            "basepath": "/pincode/431001"
                        }, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">{JSON.stringify({
                            "errorCode": 1000,
                            "status": "Failed",
                            "errorDescription": "Invalid Url"
                        }, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--success margin-bottom--sm">POST</span>
                        ```
                        /invalidUrl
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>29.</td>
            <td>noPathParam</td>
            <td>Exception Handling Response  in case of   - Path Parameter not sent</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                        <CodeBlock className="language-json">{JSON.stringify({
                            "method": "GET",
                            "protocol": "https",
                            "domain": "reqres.in",
                            "basepath": "/api/users/p"
                        }, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">{JSON.stringify({
                            "errorCode": 1009,
                            "status": "Failed",
                            "errorDescription": "No path param passed to the api, which is required"
                        }, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--success margin-bottom--sm">POST</span>
                        ```
                        /noPathParam
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>30.</td>
            <td>noQueryParam</td>
            <td>Exception Handling Response  in case of   - URL Parameter not set</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                        <CodeBlock className="language-json">{JSON.stringify({
                            "method": "GET",
                            "protocol": "https",
                            "domain": "reqres.in",
                            "basepath": "/api/users/p"
                        }, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">{JSON.stringify({
                            "errorCode": 1000,
                            "status": "Failed",
                            "errorDescription": "No query param passed which is required."
                        }, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--success margin-bottom--sm">POST</span>
                        ```
                        /noQueryParam
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>31.</td>
            <td>invalidSecurity</td>
            <td>Exception Handling Response  in case of   - Wrong or expired security</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                        <CodeBlock className="language-json">{JSON.stringify({
                            "method": "GET",
                            "protocol": "https",
                            "domain": "api.postalpincode.inkl",
                            "basepath": "/pincode/431001"
                        }, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">{JSON.stringify({
                            "errorCode": 400,
                            "status": "Failed",
                            "errorDescription": "Error occurred while posting data."
                        }, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--success margin-bottom--sm">POST</span>
                        ```
                        /invalidSecurity
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>32.</td>
            <td>deleteOverrideResponseCode</td>
            <td>Delete the contact  record which returns 204 as status code. Pass this staus code to caller</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--danger margin-bottom--sm">DELETE</span>
                        ```
                        /deleteOverrideResponseCode/521
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>33.</td>
            <td>restExceptionHandling</td>
            <td>This case involves handling of error data if there is any error while executing the rest step. In this example, we are calling a postal api, which needds pincode. We are not passing this pincode, which will give an error. This error will be stored in "ERROR" object in the pipeline. Then we have step exception block where we have a step whcih will throw business exception, with message and code.</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">{JSON.stringify({
                            "errorCode": 500,
                            "status": "Failed",
                            "errorDescription": "Error getting param for key: $PATH_PARAMS.pincode. Error : Error getting value for key: $PATH_PARAMS.pincode"
                        }, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--info margin-bottom--sm">GET</span>
                        ```
                        /restExceptionHandling
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>34.</td>
            <td>restWithTimeout</td>
            <td>setting timeout. if connection take longer that set time, gives timeout error.</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">{JSON.stringify({
                            "errorCode": 1001,
                            "status": "Failed",
                            "errorDescription": "Socket Connection Timeout. Error -I/O error on GET request for \"https://api.postalpincode.in/pincode/444605\": Connect to https://api.postalpincode.in:443 [api.postalpincode.in/50.63.8.57] failed: Connect timed out"
                        }, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--info margin-bottom--sm">GET</span>
                        ```
                        /restWithTimeOut/3
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>35.</td>
            <td>restWithoutTimeout</td>
            <td>setting timeout. will not give error since not timeout occurs</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">
                        {JSON.stringify(store.PostOffice, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--info margin-bottom--sm">GET</span>
                        ```
                        /restWithoutTimeOut/3
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
    </tbody>
</table>
