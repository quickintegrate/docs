import { type Service, Template } from "@site/src/types";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CodeBlock from "@theme/CodeBlock";

function linkify(s: string) {
  const urlRegex = /(\bhttps?:\/\/[^\s]+)/g;
  const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;

  return s
    .split(
      /(\bhttps?:\/\/[^\s]+|\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b)/g
    )
    .map((part, i) => {
      if (urlRegex.test(part)) {
        return (
          <a key={i} href={part} target="_blank" rel="noopener noreferrer">
            {part}
          </a>
        );
      } else if (emailRegex.test(part)) {
        return (
          <a key={i} href={`mailto:${part}`}>
            {part}
          </a>
        );
      }
      return part;
    });
}

function moveToNewline(s: string) {
  return s.split("\n").map((line, i) => (
    <span key={i} style={{ display: "block" }}>
      {linkify(line)}
    </span>
  ));
}

function TemplateRow({
  srNo,
  serviceName,
  description,
  input = null,
  output = null,
  endpointInfo: { cls = "info", method = "GET", basepath = "" } = {},
}: Service) {
  return (
    <tr>
      <td>{srNo}.</td>
      <td>{serviceName}</td>
      <td>{moveToNewline(description)}</td>
      {basepath && (
        <td>
          <Tabs>
            <TabItem value="Input" label="Input" default>
              {input && <CodeBlock className="templateIO">{input}</CodeBlock>}
            </TabItem>
            <TabItem value="Output" label="Output">
              {output && <CodeBlock className="templateIO">{output}</CodeBlock>}
            </TabItem>
            <TabItem value="Path" label="Path">
              <span className={`badge badge--${cls} margin-bottom--sm`}>
                {method}
              </span>
              <CodeBlock className="templateIO">/{basepath}</CodeBlock>
            </TabItem>
          </Tabs>
        </td>
      )}
    </tr>
  );
}

export default function TemplatePage({
  description,
  services,
}: Template): JSX.Element {
  return (
    <>
      <p>{description}</p>
      <table>
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>Service Name</th>
            <th>Description</th>
            {services[0].endpointInfo && <th>Details</th>}
          </tr>
        </thead>
        <tbody>
          {services.map((props, idx) => (
            <TemplateRow key={idx} srNo={idx + 1} {...props} />
          ))}
        </tbody>
      </table>
    </>
  );
}
