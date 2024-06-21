import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# TRREST_CNFILE

Trigger REST and Connector FILE samples

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
            <td>readCsv</td>
            <td>Read a CSV file, move it to a different folder, rename it and return its data as is.</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        ```
                        name,id,city,country
                        John,111,Nashik,India
                        ```
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--info margin-bottom--sm">GET</span>
                        ```
                        /readCsv
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>2.</td>
            <td>readXml</td>
            <td>Read a XML file, move it to a different folder and return its data as is.</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        ```
                        <?xml version='1.1' encoding='UTF-8'?>
                        <root>
                            <item>
                                <name>John</name>
                                <id>111</id>
                                <city>Pune</city>
                                <country>India</country>
                            </item>
                        </root>
                        ```
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--info margin-bottom--sm">GET</span>
                        ```
                        /readXml
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>3.</td>
            <td>readJson</td>
            <td>Read a JSON file and return its data as is.</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">{JSON.stringify({
                            "name": "John",
                            "id": 111,
                            "city": "Pune",
                            "country": "India"
                        }, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--info margin-bottom--sm">GET</span>
                        ```
                        /readJson
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>4.</td>
            <td>readTxt</td>
            <td>Read a TEXT file and return its data as is.</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        ```
                        ST*       850*0001
                        BEG*00*SA*000000006637770**20230818*0001307878
                        ```
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--info margin-bottom--sm">GET</span>
                        ```
                        /readTxt
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>5.</td>
            <td>removeFile</td>
            <td>Remove a file.</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">{JSON.stringify({
                            "status": "success"
                        }, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--danger margin-bottom--sm">DELETE</span>
                        ```
                        /removeFile
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>6.</td>
            <td>writeCsv</td>
            <td>Create a CSV file and write payload content in it.</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                        ```
                        name,id,city,country
                        John,111,Pune,India
                        ```
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">{JSON.stringify({
                            "status": "success"
                        }, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--success margin-bottom--sm">POST</span>
                        ```
                        /writeCsv
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>7.</td>
            <td>appendToExistingCsv</td>
            <td>Append payload content to already created CSV file.</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                        ```
                        name,id,city,country
                        Will,112,Pune,India
                        ```
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">{JSON.stringify({
                            "status": "success"
                        }, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--warning margin-bottom--sm">PUT</span>
                        ```
                        /appendToExistingCsv
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>8.</td>
            <td>writeXml</td>
            <td>Create a XML file and write payload content in it.</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                        ```
                        <ArrayList>
                            <item>
                                <name>John</name>
                                <id>111</id>
                                <city>Pune</city>
                                <country>India</country>
                            </item>
                        </ArrayList>
                        ```
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">{JSON.stringify({
                            "status": "success"
                        }, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--success margin-bottom--sm">POST</span>
                        ```
                        /writeXml
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>9.</td>
            <td>writeJson</td>
            <td>Create a JSON file and write payload content in it.</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                        <CodeBlock className="language-json">{JSON.stringify({
                            "name": "John",
                            "id": 111,
                            "city": "Pune",
                            "country": "India"
                        }, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">{JSON.stringify({
                            "status": "success"
                        }, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--success margin-bottom--sm">POST</span>
                        ```
                        /writeJson
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>10.</td>
            <td>appendToExistingJson</td>
            <td>Append payload content to already created JSON file.</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                        <CodeBlock className="language-json">{JSON.stringify({
                            "name": "Will",
                            "id": 112,
                            "city": "Pune",
                            "country": "India"
                        }, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">{JSON.stringify({
                            "status": "success"
                        }, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--warning margin-bottom--sm">PUT</span>
                        ```
                        /appendToExistingJson
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
        <tr>
            <td>11.</td>
            <td>writeTxt</td>
            <td>Create a TEXT file and write payload content in it.</td>
            <td>
                <Tabs>
                    <TabItem value="Input" label="Input" default>
                        ```
                        ST*       850*0001
                        BEG*00*SA*000000006637770**20230818*0001307878
                        ```
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">{JSON.stringify({
                            "status": "success"
                        }, null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Path" label="Path">
                        <span className="badge badge--success margin-bottom--sm">POST</span>
                        ```
                        /writeTxt
                        ```
                    </TabItem>
                </Tabs>
            </td>
        </tr>
    </tbody>
</table>
