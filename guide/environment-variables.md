---
layout: guide
title: 环境变量配置
lang: zh-CN
---

> Server 端所有可配置的环境变量。

## 核心配置

| 变量 | 必填 | 默认值 | 说明 |
|------|------|--------|------|
| `MONOGATE_API_KEY` | ✅ | - | API 认证密钥 |
| `MONOGATE_PORT` | | `8080` | 监听端口 |
| `MONOGATE_IP` | | `0.0.0.0` | 监听 IP |
| `MONOGATE_WS_TUNNEL_ENDPOINT` | | `/tunnel/ws` | WebSocket 端点路径 |
| `MONOGATE_PING_INTERVAL_SECONDS` | | `30` | 心跳间隔（秒） |
| `MONOGATE_SERVER_ORIGIN` | | - | 服务器公网地址（用于生成外部 URL） |

## Embedded Console

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `MONOGATE_EMBEDDED_CONSOLE_ENABLED` | `false` | 启用嵌入式控制台 |
| `MONOGATE_EMBEDDED_CONSOLE_ENDPOINT` | `/monogate/console` | 控制台端点路径 |

## Embedded Portal

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `MONOGATE_EMBEDDED_PORTAL_ENABLED` | `false` | 启用嵌入式入口页 |
| `MONOGATE_EMBEDDED_PORTAL_ENDPOINT` | `/monogate/portal` | Portal 端点路径 |

建议启用 `MONOGATE_EMBEDDED_PORTAL_ENABLED`，这样访问者可以通过 Portal 查看节点入口信息，并下载内置客户端。

## Cloudflared Tunnel

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `MONOGATE_CLOUDFLARED_QUICK_TUNNEL_ENABLED` | `false` | 启用 Quick Tunnel |
| `MONOGATE_CLOUDFLARED_NAMED_TUNNEL_TOKEN` | - | Named Tunnel Token |
| `MONOGATE_CLOUDFLARED_NAMED_TUNNEL_DOMAIN` | - | Named Tunnel 域名 |

## 布尔值

以下值均视为 `true`（不区分大小写）：`true`、`1`、`yes`、`on`、`enable`、`enabled`
