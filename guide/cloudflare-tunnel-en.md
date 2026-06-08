---
layout: guide
title: Cloudflare Tunnel Configuration
lang: en
---

> Provide a public internet entry point for Monogate Server via Cloudflare Tunnel.

## Why Cloudflare Tunnel Is Needed

Monogate Server can usually be deployed directly on a PaaS or VPS and obtain a public address. However, in some scenarios, additionally connecting Cloudflare Tunnel is more convenient:

- The default domain provided by the PaaS platform may be unstable, and the address may change after rebuilding the service
- You want to access Monogate Server using your own domain
- You want to keep both the PaaS original entry and the Cloudflare entry at the same time, forming multiple available channels
- The deployment environment is not convenient for directly exposing ports, but can actively connect to Cloudflare

Cloudflare Tunnel is not a required component. It is more like an optional public internet entry layer, used to supplement domain, HTTPS, and multi-entry needs.

## Quick Tunnel

The simplest configuration, no Cloudflare account required:

```
MONOGATE_CLOUDFLARED_QUICK_TUNNEL_ENABLED=true
```

After startup, the Server will automatically run `cloudflared tunnel --url`, generating a temporary `*.trycloudflare.com` domain.

## Named Tunnel

Use your own domain, requires a Cloudflare account:

```
MONOGATE_CLOUDFLARED_NAMED_TUNNEL_TOKEN=<your-token>
MONOGATE_CLOUDFLARED_NAMED_TUNNEL_DOMAIN=your-domain.example.com
```

### Obtaining the Token

1. Log in to [Cloudflare Zero Trust](https://one.dash.cloudflare.com/)
2. Networks → Tunnels → Create a tunnel
3. Copy the token from the command line in the connector installation interface

### Configuring Routes

Named Tunnel requires pre-configuring Public Hostname routes in Cloudflare. The route target must point to the local address that Monogate Server listens on inside the container, for example:

```text
http://localhost:8080
```

When configuring Public Hostname routes, Cloudflare will automatically handle the corresponding domain records.

## Notes

- Quick Tunnel domains change on every restart
- Named Tunnel requires pre-configuring Public Hostname routes, the target address should be `http://localhost:8080`
- The cloudflared binary is dynamically downloaded when the Server starts
- Some platforms have restrictions on cloudflare tunnel usage, known ones include:
  - huggingface spaces
  - snapdeploy.dev
