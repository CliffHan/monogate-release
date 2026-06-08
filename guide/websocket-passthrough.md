---
layout: guide
title: WebSocket 透传
lang: zh-CN
---

> 关于 WebSocket 协议透传的当前状态。

## 当前状态

**Monogate 目前不支持 WebSocket 协议透传。**

## 原因

Monogate 的核心设计是 HTTP 请求/响应的流式转发。WebSocket 协议需要建立持久化的双向连接，与当前的请求-响应模型不兼容。

## 影响

- 依赖 WebSocket 的应用（如实时聊天、在线协作）无法通过 Monogate 转发
- HTTP 长轮询（Long Polling）可以正常工作，可作为替代方案

## 未来计划

- [ ] 支持 WebSocket 协议透传
- [ ] 在 Client 和 Server 之间建立 WebSocket 桥接
