import DocCardList from '@theme/DocCardList';

# Monitor

In the QuickIntegrate ecosystem, this tracks and analyzes the flow of data as a single user request moves across multiple independent services.

Because a single business transaction (like placing an order) is broken down into various distributed steps such as:

- inventory checks
- payment processing
- shipping updates

The application uses distributed tracing to stitch these interactions together.
By assigning a unique `tracking ID` to each request, the system monitors the **health**, **latency**, and **success rate** of every service boundary in real time. This ensures that if a bottleneck or failure occurs, it can be isolated and resolved instantly without impacting the rest of the application ecosystem.

## Monitor microservice at one place

Monitor microservice at one place using monitoring UI.
This platform helps a user to monitor applications that have been deployed using designer flow UI. Also user can check application transactions.

<DocCardList />
