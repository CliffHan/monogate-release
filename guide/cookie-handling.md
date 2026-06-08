---
layout: guide
title: Cookie 处理
lang: zh-CN
---

> Monogate 如何处理浏览器 Cookie。

## 工作机制

Monogate 通过 **Session 绑定** 实现 Cookie 支持：

1. Server 使用 `tower_sessions` 管理浏览器 Session
2. 每个浏览器首次访问时自动创建 Session
3. Session ID 通过 WebSocket 传递给 Client
4. Client 为每个 Session 维护独立的 `reqwest::Client`（启用 cookie_store）

## Cookie 流转

```
浏览器 --Set-Cookie--> Server --> 存入 Session
浏览器 --Cookie--> Server --> 通过 Session ID 关联
                      --> WebSocket --> Client --> 用对应 Session 的 cookie_store 转发到本地服务
本地服务 --Set-Cookie--> Client --> 存入 cookie_store
                      --> WebSocket --> Server --> 返回给浏览器
```

## 设计要点

- **Cookie 不会被外部覆盖**：Client 转发请求时会移除原始请求中的 `cookie` header，由 reqwest 的 cookie_store 自动管理
- **Session 隔离**：不同浏览器的 Session 互不影响
- **缓存过期**：HTTP Client 缓存 30 分钟过期，最大 64 个 Session

## 已知限制

- Session 存储在内存中，Server 重启后丢失
- Cookie 的 Domain/Path 属性可能需要本地服务自行处理
