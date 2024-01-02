---
sidebar_position: 5
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Sub-flow 

A sub-flow is a scope that enables you to group event processors in a manner similar to that of a flow, but with certain differences and limitations:

1) Subflows do not have trigger sources.

2) Subflows do not have an error-handling scope.

3) During design, sub-flows work as macros that replace the connected components that call them.

4) Referencing sub-flows results in better performance than referencing a flow.