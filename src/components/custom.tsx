import useBaseUrl from "@docusaurus/useBaseUrl";
import { type EndpointInfo } from "@site/src/types";

export function Badge({ cls, method }: EndpointInfo) {
  return (
    <span className={`badge badge--${cls} margin-bottom--sm`}>{method}</span>
  );
}

export function Image({
  cls,
  src,
  alt,
}: {
  cls?: string;
  src: string;
  alt: string;
}) {
  return (
    <div className="default-container">
      <img className={cls} src={useBaseUrl(src)} alt={alt} />
    </div>
  );
}

export function Video({
  cls = "default-container",
  src,
  type,
}: {
  cls: string;
  src: string;
  type: string;
}) {
  return (
    <div className={cls}>
      <video controls>
        <source src={useBaseUrl(src)} type={type} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
