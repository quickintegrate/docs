---
sidebar_position: 3
---

# MCP (Model Context Protocol)

The Model Context Protocol is the standard we use to let LLMs talk to external systems. Think of it as a universal adapter: you build a tool once in the Studio, and it becomes instantly readable and executable by any model connected to the platform.

## Studio

Welcome to the MCP (Model Context Protocol) Studio. If you’re here, you’re looking to extend the intelligence of our platform by giving it "hands"—custom tools that allow AI models to interact with your specific data, APIs, and workflows.

#### Best Practices for Tool Dev

- **Be Verbose in Descriptions:** Instead of "Gets weather," use "Retrieves current Celsius temperature and humidity for a specific city string."
- **Keep it Atomic:** One tool should do one thing well. Don't build a manage_entire_database tool; build a query_user_by_email tool.
- **Security First:** Never hardcode API keys in the flow. Use the Global variables / Connection properties section to reference secrets securely.
