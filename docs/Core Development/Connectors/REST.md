import useBaseUrl from '@docusaurus/useBaseUrl';

# REST Connect Connector

The Exchange backend uses REST Connect to transparently convert a REST API specification to a QuickIntegration connector. 
Security Scheme Support


### REST Connect supports these security schemes:

**Basic Authentication**

**OAuth 2.0 Client Credentials**

**OAuth 2.0 Authorization Code**

If the operations defined in your API specification support multiple security schemes, the one that comes first in the list of supported schemes is selected.

### Supported Operations

The Rest connector supports the following operations:

1) GET

2) POST

3) PUT,PATCH

4) DELETE

Drag and drop the **REST Connector**

<img src={useBaseUrl('/img/Connectors/Rest/Rest_conector.png')} />;

<img src={useBaseUrl('/img/Connectors/Rest/Rest_config.png')} />;

<img src={useBaseUrl('/img/Connectors/Rest/Rest_config.png')} />;