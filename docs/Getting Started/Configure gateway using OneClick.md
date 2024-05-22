---
sidebar_position: 5
---
import useBaseUrl from '@docusaurus/useBaseUrl';

# Configure gateway using OneClick.

Apply proxy to your services with features like Authentication, Security, Traffic Control and much more.
The OneClick API feature allows one to create service with corresponding route and plugin if applied, consumer creation with its dependencies with default values in just few seconds.

`Note: This feature is available for Admin only. Normal users need to do configurations manually.`

## Open: Gateway / OneClick API
Select Project Name, Build Version and Environment. Service list will be display as below:
<img src={useBaseUrl('/img/Configure Gateway/servicelist.png')} />

## New Configuration
1. Click on plus button in the Action column of the service that you want to configure to gateway.
2. Click on submit if you don't want to apply plugin and your configuration is done.

*Default path will be the actual service path you can change it according to your preferences.*
<img src={useBaseUrl('/img/Configure Gateway/new_config.png')} />

## Apply Plugin (optional)
1. Check any checkbox to apply any one plugin. Here we have selected Key Auth plugin.
2. Now you need to provide a name for consumer.
3. Click on submit and your configuration is done.
<img src={useBaseUrl('/img/Configure Gateway/keyauthPlugin.png')} />

## Access Credentials (optional)
Now that you have successfully configure gateway and applied plugin i.e. Key Auth in this example.

*Key name goes by default in header / query while calling your API.*
1. You can view your Key name on page **Gateway / Plugins**.
Once on the page click on plugin name to view details or on eye icon to see raw view.
You can refer to the below image:
<img src={useBaseUrl('/img/Configure Gateway/keyname.png')} />

1. Open consumers page **Gateway / Consumers**.
Once on the page click on consumer name to view details.
Then click on Credentials tab to view all **API Keys**.
<img src={useBaseUrl('/img/Configure Gateway/apikey.png')} />

## Test using Postman
### With plugin
Now add the Key name and API key in header.
The below images shows the response with and without API Key.
<img src={useBaseUrl('/img/Configure Gateway/postman.png')} />
<img src={useBaseUrl('/img/Configure Gateway/withoutKeyauth.png')} />

### Without plugin
<img src={useBaseUrl('/img/Configure Gateway/withoutPlugin.png')} />

## Update Configurations
Now if needed you can change service or route path, host or anything else manually.