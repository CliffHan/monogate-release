---
layout: guide
title: Cloudflare Tunnel 配置
lang: zh-CN
---

> 通过 Cloudflare Tunnel 为 Monogate Server 提供公网入口。

## 为什么需要 Cloudflare Tunnel

Monogate Server 通常可以直接部署在 PaaS 或 VPS 上并获得公网地址。但在一些场景下，额外接入 Cloudflare Tunnel 会更方便：

- PaaS 平台提供的默认域名可能不稳定，重建服务后地址可能变化
- 你希望使用自己的域名访问 Monogate Server
- 你希望同时保留 PaaS 原始入口和 Cloudflare 入口，形成多个可用通道
- 部署环境不方便直接暴露端口，但可以主动连接 Cloudflare

Cloudflare Tunnel 不是必需组件。它更像一个可选的公网入口层，用来补足域名、HTTPS 和多入口需求。

## Quick Tunnel（快速隧道）

最简单的配置方式，无需 Cloudflare 账号：

```
MONOGATE_CLOUDFLARED_QUICK_TUNNEL_ENABLED=true
```

启动后 Server 会自动运行 `cloudflared tunnel --url`，生成一个临时的 `*.trycloudflare.com` 域名。

## Named Tunnel（命名隧道）

使用自有域名，需要 Cloudflare 账号：

```
MONOGATE_CLOUDFLARED_NAMED_TUNNEL_TOKEN=<your-token>
MONOGATE_CLOUDFLARED_NAMED_TUNNEL_DOMAIN=your-domain.example.com
```

### 获取 Token

1. 登录 [Cloudflare Zero Trust](https://one.dash.cloudflare.com/)
2. Networks → Tunnels → 创建隧道
3. 在安装 connector 的界面中复制命令行里的 token

### 配置路由

Named Tunnel 需要在 Cloudflare 中提前配置 Public Hostname 路由。路由目标必须指向 Monogate Server 在容器内监听的本地地址，例如：

```text
http://localhost:8080
```

配置 Public Hostname 路由时，Cloudflare 会自动处理对应的域名记录。

## 注意事项

- Quick Tunnel 的域名每次重启会变化
- Named Tunnel 需要提前配置 Public Hostname 路由，目标地址应为 `http://localhost:8080`
- cloudflared 二进制会在 Server 启动时动态下载
- 部分平台对 cloudflare tunnel 的使用有限制，已知的包括：
  - huggingface spaces
  - snapdeploy.dev
