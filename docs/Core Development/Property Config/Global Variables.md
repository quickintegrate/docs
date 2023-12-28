import useBaseUrl from '@docusaurus/useBaseUrl';

# Global Varaible

A Global element serves as a reusable object that holds parameters shared among multiple elements within a flow. QuickIntegration Connectors or components within your QuickIntegrate application can reference these Global elements

Use the Global element to apply configuration details to multiple local elements in flows. Create one Global element that defines parameters and configuration details, and then reference the Global element from any flow element that uses this configuration. This practice enables you to ensure consistency across flow elements.

`Note that some components require their properties stored in a Global element.`

## Benifits
1) **Reusability**
2) **Efficiency**
3) **Flexibility**

## Create a Global Varaible

1) Click on the Global Variable

<img src={useBaseUrl('/img/Core Development/Global variable/Conection Properties.png')} />;

2) Manage Variable by provideing Key and Value in Global variable

<img src={useBaseUrl('/img/Core Development/Global variable/Manage Variable.png')} />;

3) Inculde Variables as given below

<img src={useBaseUrl('/img/Core Development/Global variable/Call GV.png')} />;





