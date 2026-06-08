---
layout: guide
title: Architecture
lang: en
---

> Monogate's core architecture and data flow.

## Overall Architecture

```mermaid
flowchart LR
    Browser[Browser] <-->|HTTP/HTTPS| Server[Monogate Server]
    Server <-->|WebSocket/TLS| Client[Monogate Client]
    Client <-->|HTTP| Service[Local Service]
```

## Core Components

### Server

Deployed on the public internet, responsible for:
- Receiving public HTTP requests
- Forwarding to Client via WebSocket
- Receiving Client responses and returning them to the browser
- Managing routes, Session, and authentication

### Client

Runs locally, responsible for:
- Establishing WebSocket connection with Server
- Receiving forwarded HTTP requests
- Forwarding to local service and obtaining responses
- Returning responses via WebSocket

### Communication Protocol

Server and Client communicate via WebSocket, transmitting control messages and HTTP request/response data:

- **Text channel**: Control commands (route registration, status queries, etc.)
- **Binary channel**: Streaming transmission of HTTP requests/responses

## Request Forwarding Flow

```mermaid
sequenceDiagram
    participant Browser as Browser
    participant Server as Monogate Server
    participant Client as Monogate Client
    participant Service as Local Service

    Browser->>Server: HTTP request
    Server->>Server: Match path resource
    Server->>Client: Send request via WebSocket
    Client->>Service: Forward to local HTTP service
    Service-->>Client: HTTP response
    Client-->>Server: Return response via WebSocket
    Server-->>Browser: Return response
```

1. Browser sends HTTP request to Server
2. Server finds the corresponding Client Tunnel through route matching
3. Server splits the request into Header + Body, sends to Client via WebSocket
4. Client forwards request to local service
5. Client receives response, splits into Header + Body, returns via WebSocket
6. Server returns response to browser

## Key Design

- **Streaming transmission**: Header and Body are separated, Body is transmitted chunk by chunk, supporting large files
- **Session binding**: Requests from the same browser are associated via Session ID, supporting Cookie
- **Multiplexing**: A single WebSocket connection supports multiple concurrent requests
- **Abort mechanism**: When either end disconnects, the other end is notified to stop transmission

## Resource System

Monogate adopts a **dynamic resource** model, where each HTTP endpoint corresponds to a resource.

### Resource Types

| Type | Description | Example |
|------|------|------|
| **Built-in Resource** | Server built-in features, can be toggled | Embedded Console, WebSocket Tunnel endpoint |
| **Client Resource** | Routes registered by Client | `/api`, `/files`, and other custom paths |
| **Root Resource** | Root path set by Client | Default resource mapped by `--root` |

### Resource Matching Rules

1. **Endpoint uniqueness**: Each endpoint can only correspond to one resource, no duplicates allowed
2. **Exact match priority**: Exact paths are matched first, then wildcards
3. **Root fallback**: When a request path does not match any resource, it is forwarded to the Client that set `--root`

### Matching Flow

```mermaid
flowchart TD
    Request[Request arrives at Server] --> Lookup[Query resource routing table]
    Lookup --> Matched{Matched resource?}
    Matched -->|Yes| Forward[Forward to corresponding resource]
    Matched -->|No| Root{Root resource exists?}
    Root -->|Yes| RootClient[Forward to Root Client]
    Root -->|No| NotFound[Return 404]
```

## Single WebSocket Connection Model

There is only **one** WebSocket connection between Server and Client, and all HTTP requests and responses are transmitted through this connection.

Each request is identified by `request_id` (UUID) to ensure no confusion during concurrent requests.
