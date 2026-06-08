---
layout: guide
title: Environment Variables
lang: en
---

> All configurable environment variables on the Server side.

## Core Configuration

| Variable | Required | Default | Description |
|------|------|--------|------|
| `MONOGATE_API_KEY` | Yes | - | API authentication key |
| `MONOGATE_PORT` | | `8080` | Listening port |
| `MONOGATE_IP` | | `0.0.0.0` | Listening IP |
| `MONOGATE_WS_TUNNEL_ENDPOINT` | | `/tunnel/ws` | WebSocket endpoint path |
| `MONOGATE_PING_INTERVAL_SECONDS` | | `30` | Heartbeat interval (seconds) |
| `MONOGATE_SERVER_ORIGIN` | | - | Server public address (used for generating external URLs) |

## Embedded Console

| Variable | Default | Description |
|------|--------|------|
| `MONOGATE_EMBEDDED_CONSOLE_ENABLED` | `false` | Enable embedded console |
| `MONOGATE_EMBEDDED_CONSOLE_ENDPOINT` | `/monogate/console` | Console endpoint path |

## Embedded Portal

| Variable | Default | Description |
|------|--------|------|
| `MONOGATE_EMBEDDED_PORTAL_ENABLED` | `false` | Enable embedded portal |
| `MONOGATE_EMBEDDED_PORTAL_ENDPOINT` | `/monogate/portal` | Portal endpoint path |

It is recommended to enable `MONOGATE_EMBEDDED_PORTAL_ENABLED`, so visitors can view node entry information through the Portal and download the built-in client.

## Cloudflared Tunnel

| Variable | Default | Description |
|------|--------|------|
| `MONOGATE_CLOUDFLARED_QUICK_TUNNEL_ENABLED` | `false` | Enable Quick Tunnel |
| `MONOGATE_CLOUDFLARED_NAMED_TUNNEL_TOKEN` | - | Named Tunnel Token |
| `MONOGATE_CLOUDFLARED_NAMED_TUNNEL_DOMAIN` | - | Named Tunnel domain |

## Boolean Values

The following values are all treated as `true` (case-insensitive): `true`, `1`, `yes`, `on`, `enable`, `enabled`
