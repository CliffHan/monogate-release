---
layout: guide
title: What is Monogate
lang: en
---

Monogate is a lightweight HTTP application gateway.

Its core purpose is clear:

> Expose local or private-network web services to the public internet through a self-hosted public Server.

If your service runs on a local machine, NAS, OpenWRT, home server, edge device, or behind CGNAT, Monogate can make it publicly accessible without opening ports on the internal network, configuring complex reverse proxies, or relying on a fixed public IP.

---

# What Problem Does Monogate Solve

Modern applications often run in environments without traditional public network conditions:

- Local development machines
- Home networks
- NAS or small servers
- OpenWRT routers
- Edge nodes
- Devices behind CGNAT
- Temporary containers or PaaS environments

Common problems in these environments include:

- No public IP address
- Unable to configure port mapping
- Firewall or NAT rules are not controllable
- Temporary demos are not worth a separate deployment
- Internal web panels only need short-term, secure exposure

Monogate's approach is to have the Client connect to the public Server from the internal network. When an external browser accesses the Server, requests are forwarded through this connection to the local HTTP service, and responses are returned to the browser.

---

# Its Scope Is Clearly Defined

Monogate does not try to take over the entire network.

Its design focus is not to cover all network traffic, but to serve HTTP application publishing well:

- Browser accesses the public Server
- Server forwards HTTP requests to the internal Client
- Client requests the local HTTP service
- Response returns to the browser along the original path

It focuses on one smaller, clearer thing:

> Make HTTP services accessible from the public internet.

Therefore, Monogate is more suitable for web applications, admin panels, file services, development environment previews, temporary project demos, and other HTTP request/response scenarios.

---

# Basic Workflow

Monogate consists of two core components:

- **Monogate Server**: Deployed on the public internet, receives browser requests
- **Monogate Client**: Runs locally, connects to the Server and forwards requests to local services

A typical data flow is as follows:

```text
Browser -> Monogate Server -> WebSocket -> Monogate Client -> Local HTTP Service
Browser <- Monogate Server <- WebSocket <- Monogate Client <- Local HTTP Service
```

The Client maintains a WebSocket connection with the Server. After an HTTP request enters the Server from the public internet side, it is matched to the corresponding Client based on the path, and then forwarded to the local service via WebSocket.

---

# Path Mapping

Monogate uses path mapping to determine where requests should be forwarded.

For example:

```bash
monogate-client \
  -t https://your-server.com \
  -k your-secret-key \
  --root http://localhost:3000
```

This means that when accessing `https://your-server.com/`, the request will be forwarded to `http://localhost:3000` locally.

You can also map different paths to different local services:

```bash
monogate-client \
  -t https://your-server.com \
  -k your-secret-key \
  --route /api=http://localhost:3000 \
  --route /files=http://localhost:8080
```

This model is suitable for splitting a single public entry point among multiple local HTTP services.

---

# Differences from Other Tools

Monogate, cloudflared, and frp can all help expose internal services, but their trade-offs differ.

## Compared to cloudflared

cloudflared's advantages are maturity, stability, and direct integration with Cloudflare's edge network.

Monogate's core difference is:

> The Server can be deployed by yourself on a PaaS or VPS.

This means you do not have to bind the entry point to a Cloudflare account and Cloudflare network. You can choose Fly.io, Railway, Render, Back4App, a small VPS, or any platform that can run Docker to host the public entry point.

If you want the Cloudflare ecosystem, Zero Trust, and edge network capabilities, cloudflared is more suitable.

If you want a self-hosted, migratable, self-controlled web service entry point, Monogate is closer to that goal.

## Compared to frp

frp's advantages are high flexibility, broader scenario support, and being more suitable for non-web service forwarding and multi-port configurations.

Monogate's trade-off is:

> Lighter server deployment, but more converged capability boundaries.

Monogate focuses on HTTP web service publishing. It is more suitable for Docker and PaaS, using a single public entry point to carry multiple web service paths; but if you need to forward various non-web services, complex port configurations, or more complete network penetration capabilities, frp is more suitable.

In short:

| Requirement | Better Choice |
|------|--------|
| Use Cloudflare ecosystem and edge network | cloudflared |
| Forward non-web services, pursue maximum flexibility | frp |
| Self-host a lightweight web service public entry point | Monogate |

---

# Embedded Portal

Monogate provides an Embedded Portal, with the default path:

```text
/monogate/portal
```

The Portal is for ordinary visitors, not an admin backend.

It is suitable for:

- Displaying current node information
- Listing publicly accessible web service entry points
- Providing brief access hints
- Hosting user-facing entry pages

The value of the Portal is: when a Server hosts multiple public services, visitors can first enter a clear entry page instead of only seeing bare paths.

---

# Embedded Console

Monogate also provides an Embedded Console, with the default path:

```text
/monogate/console
```

The Console is for administrators to view and diagnose the gateway's running status.

It is suitable for:

- Viewing connected Clients
- Viewing path mappings and root resources
- Viewing Server status
- Troubleshooting connection, authentication, and forwarding issues
- Using Web Shell in controlled environments

The Portal and Console are separate:

- Portal is for ordinary visitors
- Console is for administrators

This separation allows the public entry and management entry to each have clear responsibilities.

---

# Suitable Use Cases

Monogate is suitable for these scenarios:

- Temporarily sharing a local development environment with colleagues
- Exposing web panels on NAS, home servers, or OpenWRT
- Demoing projects to clients or partners that have not yet been deployed
- Making web services on edge devices behind CGNAT accessible
- Quickly deploying a public entry point on a PaaS or container platform
- Using Cloudflare Tunnel to add HTTPS or custom domain entry points to the Server

If your goal is to publish HTTP services rather than build a complete network tunnel, Monogate is lighter and easier to deploy.

---

# Monogate's Goal

Monogate's goal is not to become a massive network system.

What it really wants to do is:

> Make HTTP service publishing simple.

Including:

- Lower deployment cost
- Less operational burden
- Lighter public internet access method
- More natural self-hosted experience
- Clearer division of labor between Portal and Console

---

# Monogate

A lightweight HTTP application gateway for modern web services.
