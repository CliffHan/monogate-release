---
layout: guide
title: WebSocket Passthrough
lang: en
---

> Current status of WebSocket protocol passthrough.

## Current Status

**Monogate currently does not support WebSocket protocol passthrough.**

## Reason

Monogate's core design is streaming forwarding of HTTP requests/responses. The WebSocket protocol requires establishing a persistent bidirectional connection, which is incompatible with the current request-response model.

## Impact

- Applications relying on WebSocket (such as real-time chat, online collaboration) cannot be forwarded through Monogate
- HTTP Long Polling works normally and can be used as an alternative

## Future Plans

- [ ] Support WebSocket protocol passthrough
- [ ] Establish WebSocket bridge between Client and Server
