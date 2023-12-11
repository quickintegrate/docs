---
sidebar_position: 4
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# FTP Connector


Provides access to files and folders on an **FTP** server. **FTP** Connector operations manage file transfers by using File Transfer Protocol (**FTP**). The Connector’s main features include:

1) The ability to read files or fully list directory contents on demand.

2) Support for common ****FTP**** operations such as creating directories and copying, moving, renaming, and deleting files.

3) Support for locking files.

4) File matching functionality.

A design that is consistent with the **File** and ****FTP**** Connectors.

The same set of operations is available using these two Connectors, and they behave similarly.

### Configuring **FTP** Connector

Follow these steps to set up and test a connection to your **FTP**  by creating a reusable global variable for the **FTP** Connector to reference.

<img src={useBaseUrl('/img/Connectors/FTP_connector.png')} />;