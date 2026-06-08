---
layout: guide
title: Embedded Console
lang: zh-CN
---

> 面向管理员的内嵌 Web 控制台，用于查看 Monogate Server 的运行状态、Client 连接与路径映射。

## 启用

```
MONOGATE_EMBEDDED_CONSOLE_ENABLED=true
```

## 访问

默认地址：`http://<server-address>/monogate/console`

Console 是管理入口，建议只在可信环境中启用，并通过 API Key 保护访问。

## 功能

- 查看已连接的 Client 列表
- 查看当前路径映射与 root 资源
- 查看 Server 基础状态
- 辅助排查请求转发、认证与连接问题
- Web Shell（通过浏览器访问服务器终端）

## Web Shell

Embedded Console 随 Console 启动时会包含 Web Shell，目前不能单独关闭。它用于在受控环境中通过浏览器访问服务器终端。

- 需要通过 API Key 认证
- 支持 Windows（PowerShell）和 Linux（Bash）
- 支持终端大小调整

Web Shell 依赖 WebSocket。部分 PaaS 平台不允许或不稳定支持 WebSocket 连接，因此即使 Console 页面可以访问，Web Shell 也可能无法使用。

如果你的部署环境面向公网，建议谨慎启用 Console，并确保 API Key 足够强。

## 自定义端点路径

```
MONOGATE_EMBEDDED_CONSOLE_ENDPOINT=/custom-path
```

路径必须以 `/` 开头，不能以 `/` 结尾。
