---
layout: guide
title: Embedded Portal
lang: en
---

> An embedded entry page for visitors to display public information about the current Monogate node and provide client software download.

## Positioning

Embedded Portal is not an admin backend; it only serves as a visitor-facing entry page.

It is more like a node homepage:

- Tell visitors what this Monogate Server provides
- Provide client software download
- Provide necessary connection hints
- Separate from the administrator's Embedded Console

## Enable

Embedded Portal is not enabled by default. It is recommended to turn it on when deploying the Server, so visitors can download the built-in client and view node entry information.

```text
MONOGATE_EMBEDDED_PORTAL_ENABLED=true
```

If you need to customize the path, you can set:

```text
MONOGATE_EMBEDDED_PORTAL_ENDPOINT=/custom-portal
```

The path must start with `/` and must not end with `/`.

## Default Entry

Default path:

```text
/monogate/portal
```

When the Server is exposed to the public internet, it can be accessed via an address like:

```text
https://your-server.com/monogate/portal
```

## Suitable Content

The Portal is suitable for placing information for ordinary visitors:

- Current node description
- Client software download
- Brief usage hints
- Public status or help information

It is not recommended to place management capabilities, sensitive configurations, or internal diagnostic information in the Portal. These should be kept in the Embedded Console.

## Difference from Console

| Feature | Audience | Typical Use |
|------|----------|------|
| Embedded Portal | Ordinary visitors | Download client and view node description |
| Embedded Console | Administrators | View Clients, routes, status, and diagnostic information |

This separation allows Monogate to provide both a public entry and a management entry on the same Server, while maintaining clear permission boundaries.
