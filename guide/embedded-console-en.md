---
layout: guide
title: Embedded Console
lang: en
---

> An embedded web console for administrators to view Monogate Server's running status, Client connections, and path mappings.

## Enable

```
MONOGATE_EMBEDDED_CONSOLE_ENABLED=true
```

## Access

Default address: `http://<server-address>/monogate/console`

The Console is a management entry point. It is recommended to only enable it in trusted environments and protect access via API Key.

## Features

- View the list of connected Clients
- View current path mappings and root resources
- View Server basic status
- Assist in troubleshooting request forwarding, authentication, and connection issues
- Web Shell (access server terminal via browser)

## Web Shell

Embedded Console includes a Web Shell when the Console starts, which currently cannot be turned off separately. It is used to access the server terminal via browser in controlled environments.

- Requires API Key authentication
- Supports Windows (PowerShell) and Linux (Bash)
- Supports terminal size adjustment

Web Shell depends on WebSocket. Some PaaS platforms do not allow or unstably support WebSocket connections, so even if the Console page is accessible, Web Shell may not work.

If your deployment environment is public-facing, it is recommended to enable the Console cautiously and ensure the API Key is sufficiently strong.

## Custom Endpoint Path

```
MONOGATE_EMBEDDED_CONSOLE_ENDPOINT=/custom-path
```

The path must start with `/` and must not end with `/`.
