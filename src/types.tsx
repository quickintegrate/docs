type EndpointInfo = {
  cls?: string;
  method?: string;
  basepath?: string;
};

export type Service = {
  srNo?: number;
  serviceName: string;
  description: string;
  input?: any;
  output?: any;
  endpointInfo?: EndpointInfo;
};

export type Template = {
  description: string;
  services: Service[];
};
