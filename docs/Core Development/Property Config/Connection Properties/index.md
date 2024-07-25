import DocCardList from '@theme/DocCardList';
import { Image } from '@site/src/components/custom';

# Connection Properties

In terms of integration within the iPASS platform, the connection configurations are centralized within connection properties across all environments. During deployment to particular environments, the data for the development environment can be configured and subsequently updated

## Configuration

QuickIntegration application configurations file contains your properties which you can refer in your application Configuring.
A properties file improves the maintainability of your applications.

### Properties

1) In QuickIntegration tool:
    - Open: **Develop / Functionality**
    - Select project and click on a service.
    - Create a service. If no service created. (*optional*)
    - Click on connection properties button.

<Image src="/img/Core Development/Connection properties/propertiesBtn.png" alt="Connection Properties button" />

2) Select the DataSource Type from dropdown and Configure 

<Image src="/img/Core Development/Connection properties/datasource types.png" alt="Datasource Types" />

3) On the left side of the palette, you'll find the Configured Properties ready to be utilized within your API.

### Gradle dependencies

On left hand side in bottom, there is a option to add `gradle dependencies`. 

:::note
    - By default no database drivers are present in an application.
:::

<Image cls="border mb-2" src="/img/Core Development/Connection properties/dynamicGradle.png" alt="Gradle dependencies" />

<DocCardList />
