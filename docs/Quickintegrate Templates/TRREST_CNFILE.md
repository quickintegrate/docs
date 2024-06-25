import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import { csv1row, xmlArray1item, jsonArray, flatText, constResponse } from '@site/src/store/trans';

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
                        <CodeBlock>
                        {csv1row}
                        </CodeBlock>
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
                        <CodeBlock>
                        {"<?xml version='1.1' encoding='UTF-8'?>\n"}
                        {xmlArray1item.replaceAll('ArrayList', 'root')}
                        </CodeBlock>
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
                        <CodeBlock className="language-json">
                        {JSON.stringify(jsonArray[0], null, 2)}
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
                        <CodeBlock>
                        {flatText}
                        </CodeBlock>
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
                        <CodeBlock className="language-json">
                        {JSON.stringify(constResponse, null, 2)}
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
                        <CodeBlock>
                        {csv1row}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">
                        {JSON.stringify(constResponse, null, 2)}
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
                        <CodeBlock>
                        {csv1row.replaceAll('John', 'Will').replaceAll('111', '112')}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">
                        {JSON.stringify(constResponse, null, 2)}
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
                        <CodeBlock>
                        {xmlArray1item}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">
                        {JSON.stringify(constResponse, null, 2)}
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
                        <CodeBlock className="language-json">
                        {JSON.stringify(jsonArray[0], null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">
                        {JSON.stringify(constResponse, null, 2)}
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
                        <CodeBlock className="language-json">
                        {JSON.stringify(jsonArray[1], null, 2)}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">
                        {JSON.stringify(constResponse, null, 2)}
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
                        <CodeBlock>
                        {flatText}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="Output" label="Output">
                        <CodeBlock className="language-json">
                        {JSON.stringify(constResponse, null, 2)}
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
