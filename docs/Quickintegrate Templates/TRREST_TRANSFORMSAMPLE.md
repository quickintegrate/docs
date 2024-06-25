import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import * as store from '@site/src/store/trans';

# TRREST_TRANSFORMSAMPLE

Trigger REST and Transformer TRANS samples

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
            <td>CSVtoCSV</td>
            <td>Gets CSV data from payload and transform returns data as is.</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                        <CodeBlock>
                        {store.csvSample}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock>
                        {store.csvSample}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--success margin-bottom--sm">POST</span>
                        ```
                        /csvToCsv
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>2.</td>
            <td>CSVtoXML</td>
            <td>Converts CSV data from payload to XML format and returns response as is.</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                        <CodeBlock>
                        {store.csv1row}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock>
                        {"<?xml version='1.1' encoding='UTF-8'?>\n"}
                        {store.xmlArray1item.replaceAll('ArrayList', 'root')}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--success margin-bottom--sm">POST</span>
                        ```
                        /csvToXml
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>3.</td>
            <td>CSVtoOBJ</td>
            <td>Converts CSV data from payload to Java Object format and returns array of object in response in which each object has a key name.</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                        <CodeBlock>
                        {store.csvSample}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">{JSON.stringify([
                            {
                                "name": "John"
                            },
                            {
                                "name": "Will"
                            }
                        ], null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--success margin-bottom--sm">POST</span>
                        ```
                        /csvToObj
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>4.</td>
            <td>CSVtoJSON</td>
            <td>Converts CSV data from payload to JSON format and returns response as is.</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                        <CodeBlock>
                        {store.csv1row}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">
                        {JSON.stringify(store.json1obj, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--success margin-bottom--sm">POST</span>
                        ```
                        /csvToJson
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>5.</td>
            <td>XMLtoXML</td>
            <td>Gets XML data from payload and transform returns data as is.</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                        <CodeBlock>
                        {store.xmlArray1item}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock>
                        {"<?xml version='1.1' encoding='UTF-8'?>\n"}
                        {store.xmlArray1item.replaceAll('ArrayList', 'root')}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--success margin-bottom--sm">POST</span>
                        ```
                        /xmlToXml
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>6.</td>
            <td>XMLtoCSV</td>
            <td>Converts XML data from payload to CSV format and returns response as is.</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                        <CodeBlock>
                        {store.xmlArray1item}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock>
                        {store.csv1row}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--success margin-bottom--sm">POST</span>
                        ```
                        /xmlToCsv
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>7.</td>
            <td>XMLtoOBJ</td>
            <td>Converts XML data from payload to Java Object format and returns object map in response.</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                        <CodeBlock>
                        {store.xmlArray1item}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">{JSON.stringify({
                            "ObjectMap": "{item={name=John, id=111, city=Pune, country=India}}"
                        }, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--success margin-bottom--sm">POST</span>
                        ```
                        /xmlToObj
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>8.</td>
            <td>XMLtoJSON</td>
            <td>Vaildates payload data to be in valid XML format using XML stylesheet. Converts XML data from payload to JSON format and returns response as is.</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                        <CodeBlock>
                        {store.xmlObj}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">
                        {JSON.stringify(store.json1obj, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--success margin-bottom--sm">POST</span>
                        ```
                        /xmlToJson
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>9.</td>
            <td>JSONtoXML</td>
            <td>Converts JSON data from payload to XML format and returns response as is.</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                        <CodeBlock className="language-json">
                        {JSON.stringify(store.jsonArray, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock>
                        {"<?xml version='1.1' encoding='UTF-8'?>\n"}
                        {store.xmlArray.replaceAll('ArrayList', 'root')}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--success margin-bottom--sm">POST</span>
                        ```
                        /jsonToXml
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>10.</td>
            <td>JSONtoCSV</td>
            <td>Converts JSON data from payload to CSV format and returns response as is.</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                        <CodeBlock className="language-json">
                        {JSON.stringify(store.json1obj, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock>
                        {store.csv1row}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--success margin-bottom--sm">POST</span>
                        ```
                        /jsonToCsv
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>11.</td>
            <td>JSONtoOBJ</td>
            <td>Vaildates payload data to be in valid JSON format using JSON schema. Converts JSON data from payload to Java Object format and returns object with key name in response.</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                        <CodeBlock className="language-json">
                        {JSON.stringify(store.json1obj, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">{JSON.stringify({
                            "name": "John"
                        }, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--success margin-bottom--sm">POST</span>
                        ```
                        /jsonToObj
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>12.</td>
            <td>JSONtoJSON</td>
            <td>Gets JSON data from payload and transform returns data as is.</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                        <CodeBlock className="language-json">
                        {JSON.stringify(store.jsonArray, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">
                        {JSON.stringify(store.jsonArray, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--success margin-bottom--sm">POST</span>
                        ```
                        /jsonToJson
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>13.</td>
            <td>OBJtoXML</td>
            <td>Converts JSON data from payload to Java Object and then the previous Java Object to XML format and returns response as is.</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                        <CodeBlock className="language-json">
                        {JSON.stringify(store.jsonArray, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock>
                        {"<?xml version='1.1' encoding='UTF-8'?>\n"}
                        {store.xmlArray.replaceAll('ArrayList', 'root')}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--success margin-bottom--sm">POST</span>
                        ```
                        /objToXml
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>14.</td>
            <td>OBJtoCSV</td>
            <td>Converts JSON data from payload to Java Object and then the previous Java Object to CSV format and returns response as is.</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                        <CodeBlock className="language-json">
                        {JSON.stringify(store.jsonArray, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock>
                        {store.csvSample}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--success margin-bottom--sm">POST</span>
                        ```
                        /objToCsv
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>15.</td>
            <td>OBJtoOBJ</td>
            <td>Reads data from database which returns a java object and transform returns data as is.</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                        <CodeBlock className="language-json">
                        {JSON.stringify(store.jsonArray, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">{JSON.stringify({
                            "name": "[John]"
                        }, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--success margin-bottom--sm">POST</span>
                        ```
                        /objToObj
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>16.</td>
            <td>OBJtoJSON</td>
            <td>Converts JSON data from payload to Java Object and then the previous Java Object to JSON format. Returns object which contains id (number), salary (double), isRemoteEmployee (boolean), name (string), original_JSON (json).</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                        <CodeBlock className="language-json">{JSON.stringify({
                            "name": "John",
                            "id": 111,
                            "salary": "50000",
                            "isRemoteEmployee": "true"
                        }, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">{JSON.stringify({
                            "name": "John",
                            "id": 111,
                            "salary": 50000.0,
                            "isRemoteEmployee": true,
                            "original_JSON": {
                                "name": "John",
                                "id": 111,
                                "salary": "50000",
                                "isRemoteEmployee": "true"
                            }
                        }, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--success margin-bottom--sm">POST</span>
                        ```
                        /objToJson
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>17.</td>
            <td>FLATtoXML</td>
            <td>Converts TEXT data from payload to XML format and returns response as is.</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                        ```
                        ST*       850*0001
                        BEG*00*SA*000000006637770**20230818*0001307878
                        ```
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        ```
                        <?xml version='1.1' encoding='UTF-8'?>
                        <root>
                            <record0>
                                <col0>ST*       850*0001</col0>
                            </record0>
                            <record1>
                                <col0>BEG*00*SA*000000006637770**20230818*0001307878</col0>
                            </record1>
                        </root>
                        ```
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--success margin-bottom--sm">POST</span>
                        ```
                        /flatToXml
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>18.</td>
            <td>FLATtoCSV</td>
            <td>Converts TEXT data from payload to CSV format and returns response as is.</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                        <CodeBlock>
                        {store.flatText}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        ```
                        col0
                        "ST*       850*0001"
                        "BEG*00*SA*000000006637770**20230818*0001307878"
                        ```
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--success margin-bottom--sm">POST</span>
                        ```
                        /flatToCsv
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>19.</td>
            <td>FLATtoOBJ</td>
            <td>Converts TEXT data from payload to Java Object format and returns data in JSON format.</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                        <CodeBlock>
                        {flatText}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">{JSON.stringify([
                            {
                                "col0": "ST*       850*0001"
                            },
                            {
                                "col0": "BEG*00*SA*000000006637770**20230818*0001307878"
                            }
                        ], null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--success margin-bottom--sm">POST</span>
                        ```
                        /flatToObj
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>20.</td>
            <td>FLATtoJSON</td>
            <td>Converts TEXT data from payload to JSON format and returns response as is.</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                        <CodeBlock>
                        {flatText}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">{JSON.stringify([
                            {
                                "col0": "ST*       850*0001"
                            },
                            {
                                "col0": "BEG*00*SA*000000006637770**20230818*0001307878"
                            }
                        ], null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--success margin-bottom--sm">POST</span>
                        ```
                        /flatToJson
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>21.</td>
            <td>FLATtoJSONwithMultipleRanges</td>
            <td>Converts TEXT data from payload to JSON format with multiple ranges provided which reads line from start of range to end and creates values accordingly.</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                        <CodeBlock>
                        {flatText}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">{JSON.stringify([
                            {
                                "col0": "ST*       ",
                                "col1": "850*0001"
                            },
                            {
                                "col0": "BEG*00*SA*",
                                "col1": "000000006637770**20230818*0001307878"
                            }
                        ], null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--success margin-bottom--sm">POST</span>
                        ```
                        /flatToJsonWithMultipleRanges
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
    </tbody>

</table>
