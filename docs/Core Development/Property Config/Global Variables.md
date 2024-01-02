import useBaseUrl from '@docusaurus/useBaseUrl';

# Global Varaible

A Global element serves as a reusable object that holds parameters shared among multiple elements within a flow. QuickIntegration Connectors or components within your QuickIntegrate application can reference these Global elements

Use the Global element to apply configuration details to multiple local elements in flows. Create one Global element that defines parameters and configuration details, and then reference the Global element from any flow element that uses this configuration. This practice enables you to ensure consistency across flow elements.


`Note that some components require their properties stored in a Global element.`

## Benifits
1) **Reusability**
2) **Efficiency**
3) **Flexibility**

## Create a Global Variable

A Global element is a container for keys and values accessible across the entire application. Once defined in the Global Variables section with the 'VARIABLES' prefix, users can invoke the keys to access pre-set values. These values remain static within the flow and are only modifiable during service development or before deployment. Once the application begins, these values become immutable but remain usable. Services within the application can utilize these pre-defined keys as part of their pipeline.

For example, suppose a user needs to consistently apply certain headers across multiple services in the application. They can store these properties in Global Variables, exemplifying the primary use: reusability of specific keys. For instance, setting a header like Content-Type to 'application/json' can be stored in a global variable with a user-defined key, say 'contentType', with the corresponding value 'application/json'. Now, by referencing $VARIABLES.contentType, this value can be retrieved from any service within the application

1) Click on the Global Variable

<img src={useBaseUrl('/img/Core Development/Global variable/Conection Properties.png')} />;

2) Manage Variable by provideing Key and Value in Global variable

<img src={useBaseUrl('/img/Core Development/Global variable/Manage Variable.png')} />;

3) Inculde Variables as given below

<img src={useBaseUrl('/img/Core Development/Global variable/Call GV.png')} />;





