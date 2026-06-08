---
layout: guide
title: 什么是 Monogate
lang: zh-CN
---

Monogate 是一个轻量级 HTTP 应用连接网关。

它的核心用途很明确：

> 将本地或私有网络中的 Web 服务，通过一个自托管的公网 Server 安全发布到公网。

如果你的服务运行在本地电脑、NAS、OpenWRT、家庭服务器、边缘设备或 CGNAT 后面，Monogate 可以让它被公网访问，而不需要在内网侧开放端口、配置复杂反向代理或依赖固定公网 IP。

---

# Monogate 解决什么问题

现代应用经常运行在不具备传统公网条件的环境里：

- 本地开发机
- 家庭网络
- NAS 或小型服务器
- OpenWRT 路由器
- 边缘节点
- CGNAT 后的设备
- 临时容器或 PaaS 环境

这些环境常见的问题是：

- 没有公网 IP
- 无法配置端口映射
- 防火墙或 NAT 规则不可控
- 临时演示不值得单独部署
- 内部 Web 面板只想短期、安全地暴露出来

Monogate 的做法是让 Client 从内网主动连接公网 Server。外部浏览器访问 Server 时，请求会通过这条连接转发到本地 HTTP 服务，再把响应返回给浏览器。

---

# 它的边界很清晰

Monogate 不试图接管整个网络。

它的设计重点不是覆盖所有网络流量，而是服务好 HTTP 应用发布：

- 浏览器访问公网 Server
- Server 将 HTTP 请求转发给内网 Client
- Client 请求本地 HTTP 服务
- 响应沿原路径返回给浏览器

它关注的是更小、更清晰的一件事：

> 让 HTTP 服务可以被公网访问。

因此 Monogate 更适合 Web 应用、管理面板、文件服务、开发环境预览、临时项目演示等 HTTP 请求/响应场景。

---

# 基本工作方式

Monogate 由两个核心组件组成：

- **Monogate Server**：部署在公网，接收浏览器请求
- **Monogate Client**：运行在本地，连接 Server 并转发请求到本地服务

典型数据流如下：

```text
浏览器 -> Monogate Server -> WebSocket -> Monogate Client -> 本地 HTTP 服务
浏览器 <- Monogate Server <- WebSocket <- Monogate Client <- 本地 HTTP 服务
```

Client 与 Server 之间保持一条 WebSocket 连接。公网侧的 HTTP 请求进入 Server 后，会根据路径匹配到对应 Client，再通过 WebSocket 转发到本地服务。

---

# 路径映射

Monogate 使用路径映射来决定请求应该转发到哪里。

例如：

```bash
monogate-client \
  -t https://your-server.com \
  -k your-secret-key \
  --root http://localhost:3000
```

这表示访问 `https://your-server.com/` 时，请求会被转发到本地的 `http://localhost:3000`。

你也可以把不同路径映射到不同本地服务：

```bash
monogate-client \
  -t https://your-server.com \
  -k your-secret-key \
  --route /api=http://localhost:3000 \
  --route /files=http://localhost:8080
```

这种模型适合把一个公网入口拆分给多个本地 HTTP 服务使用。

---

# 和其他工具的区别

Monogate 和 cloudflared、frp 都能帮助你把内网服务暴露出去，但它们的取舍不一样。

## 相比 cloudflared

cloudflared 的优势是成熟、稳定，并且能直接接入 Cloudflare 的边缘网络。

Monogate 的核心差异是：

> Server 可以由你自己部署在 PaaS 或 VPS 上。

这意味着你不一定要把入口绑定在 Cloudflare 账号和 Cloudflare 网络上。你可以选择 Fly.io、Railway、Render、Back4App、小型 VPS，或者任何能跑 Docker 的平台来承载公网入口。

如果你想要的是 Cloudflare 生态、Zero Trust 和边缘网络能力，cloudflared 更合适。

如果你想要的是一个可自托管、可迁移、由自己控制的 Web 服务入口，Monogate 会更贴近这个目标。

## 相比 frp

frp 的优势是自由度高，支持的场景更广，也更适合非 Web 服务转发和多端口配置。

Monogate 的取舍是：

> 服务器部署更轻，但能力边界更收敛。

Monogate 聚焦 HTTP Web 服务发布。它更适合放进 Docker 和 PaaS，用一个公网入口承载多个 Web 服务路径；但如果你需要转发各种非 Web 服务、复杂端口配置或更完整的网络穿透能力，frp 会更合适。

简单来说：

| 需求 | 更适合 |
|------|--------|
| 使用 Cloudflare 生态和边缘网络 | cloudflared |
| 转发非 Web 服务、追求最高自由度 | frp |
| 自托管一个轻量 Web 服务公网入口 | Monogate |

---

# Embedded Portal

Monogate 提供 Embedded Portal，默认路径是：

```text
/monogate/portal
```

Portal 面向普通访问者，不是管理后台。

它适合用于：

- 展示当前节点说明
- 列出公开可访问的 Web 服务入口
- 提供简短的访问提示
- 承载面向用户的入口页

Portal 的价值在于：当一个 Server 上承载多个公开服务时，访问者可以先进入一个清晰的入口页，而不是只看到裸露的路径。

---

# Embedded Console

Monogate 也提供 Embedded Console，默认路径是：

```text
/monogate/console
```

Console 面向管理员，用于查看和诊断网关运行状态。

它适合用于：

- 查看已连接的 Client
- 查看路径映射和 root 资源
- 查看 Server 状态
- 排查连接、认证和转发问题
- 在受控环境中使用 Web Shell

Portal 与 Console 是分离的：

- Portal 面向普通访问者
- Console 面向管理员

这种分离让公开入口和管理入口各自承担清晰职责。

---

# 适合的使用场景

Monogate 适合这些场景：

- 将本地开发环境临时共享给同事
- 暴露 NAS、家庭服务器或 OpenWRT 上的 Web 面板
- 给客户或合作方演示尚未部署的项目
- 让 CGNAT 后的边缘设备 Web 服务可访问
- 在 PaaS 或容器平台上快速部署一个公网入口
- 用 Cloudflare Tunnel 给 Server 增加 HTTPS 或自定义域名入口

如果你的目标是发布 HTTP 服务，而不是构建完整网络通道，Monogate 会更轻量，也更容易部署。

---

# Monogate 的目标

Monogate 的目标不是成为庞大的网络系统。

它真正想做的是：

> 让 HTTP 服务发布变得简单。

包括：

- 更低部署成本
- 更少运维负担
- 更轻量的公网接入方式
- 更自然的自托管体验
- 更清晰的 Portal 与 Console 分工

---

# Monogate

一个面向现代 Web 服务的轻量 HTTP 应用连接网关。
