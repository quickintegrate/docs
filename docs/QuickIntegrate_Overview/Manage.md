import useBaseUrl from '@docusaurus/useBaseUrl';


#### QuickIntegrate platform also provides **API management** capabilities after deployment where we can scale the API, apply policies etc.

<img src={useBaseUrl('/img/overwiew/Manage.png')} />;

#### Transaction
Monitor services transaction with in-depth analysis and visibility.Provide list of Transaction and historical transaction for an Service. Visual analysis and debugging where in  one can see the  data per node as it flows . 
In case of errors provides the detailed error logs.

#### Application
This module, one can monitor the application in depth. It uses spring boot actuator data and details all insights of the running  application.
Live dashboard for service transaction with bar graph to show live required failed or passed.

#### Properties
This module, provides option to change the application properties file where in one can configure the number of spring boot applications to monitor, API gateway URL , Email alerts to send and many other key parameters to be changed. 

#### Service Performance
One can see the performance of the services in terms of time it takes to execute and historical/average performance to compare.
Important is each node/step level execution time is available to identify the bottleneck in the flow.

#### Live Dashboard & Alerts
Provides alerts for the key configured api’s . This alert is sent as email to configured mail box.
Dashboard provides info on health of end systems & Services  i.e  up or down to take necessary action. 
This are live dashboard to take instance action.

#### Register Services
This module helps to register the services to be managed. One need to upload the service meta data , which enables the services to be available for detail transaction visibility.