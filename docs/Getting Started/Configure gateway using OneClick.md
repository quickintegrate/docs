---
sidebar_position: 5
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import { Image } from '@site/src/components/custom';

# Configure gateway using OneClick.

Apply proxy to your services with features like Authentication, Security, Traffic Control and much more.
The OneClick API feature allows one to create service with corresponding route and plugin if applied, consumer creation with its dependencies with default values in just few seconds.

`Note: This feature is available for Admin only. Normal users need to do configurations manually.`

## Prerequisite
1. Login to Designer by clicking on the link below:
   
   [https://designer.quickintegrate.io/login](https://designer.quickintegrate.io/login)

2. Open: **Execute / Deploy**
3. Application must be UP and running which contains the services that you want to configure to gateway.
Here we have taken **sample** project and started it.
<Image src="/img/Configure Gateway/deployedApp.png" alt="Deployed application details view" />

1. Login to Monitor by clicking on the link below:

    [https://monitor.quickintegrate.io/login](https://monitor.quickintegrate.io/login)

    or click on **MONITOR** in the sidbar as below:
<Image src="/img/Configure Gateway/sidbarMonitor.png" alt="Monitoring application link" />

## Open: Gateway / OneClick API
Select Project Name, Build Version and Environment. Service list will be display as below:
<Image src="/img/Configure Gateway/servicelist.png" alt="Default one click view" />

## New Configuration
1. Click on plus button in the Action column of the service that you want to configure to gateway.
2. Click on submit if you don't want to apply plugin and your configuration is done.

*Default path will be the actual service path you can change it according to your preferences.*
<Image cls="border mb-2" src="/img/Configure Gateway/new_config.png" alt="Gateway one click configuration" />

## Apply Plugin (optional)
1. Check any checkbox to apply any one plugin. Here we have selected Key Auth plugin.
2. Now you need to provide a name for consumer.
3. Click on submit and your configuration is done.
<Image cls="border mb-2" src="/img/Configure Gateway/keyauthPlugin.png" alt="Apply plugin keyauth" />

## Access Credentials (optional)
Now that you have successfully configure gateway and applied plugin i.e. Key Auth in this example.

*Key name goes by default in header / query while calling your API.*
1. You can view your Key name on page **Gateway / Plugins**.
Once on the page click on plugin name to view details or on eye icon to see raw view.
You can refer to the below image:
<Image src="/img/Configure Gateway/keyname.png" alt="View Key name" />

1. Open consumers page **Gateway / Consumers**.
Once on the page click on consumer name to view details.
Then click on Credentials tab to view all **API Keys**.
<Image src="/img/Configure Gateway/apikey.png" alt="View Credentials" />

## Test using Postman
### With plugin
Now add the Key name and API key in header.
The below images shows the response with and without API Key.
<Image src="/img/Configure Gateway/postman.png" alt="REST call with api-key" />
<Image src="/img/Configure Gateway/withoutKeyauth.png" alt="REST call without api-key" />

### Without plugin
<Image src="/img/Configure Gateway/withoutPlugin.png" alt="REST call without plugin" />

## Update Configurations
Now if needed you can change service or route path, host or anything else manually.