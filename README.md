# Monogate

**Monogate** 是一个轻量级 HTTP 应用连接网关，用于将本地或私有网络中的 Web 服务安全发布到公网。

**Monogate** is a lightweight HTTP application gateway for exposing local or private-network web services to the public internet.

🌐 **访问站点 / Visit:** [https://monogate.clifftop.win](https://monogate.clifftop.win)

## 主要特性 / Key Features

- **自托管公网入口** — Server 部署在 VPS 或 PaaS 上，入口归你管理
- **内网无需开端口** — Client 从本地主动连接 Server，无需端口映射
- **一个入口多个服务** — 通过路径映射，同一域名承载多个本地服务
- **Embedded Portal** — 面向访问者的节点入口页
- **Embedded Console** — 面向管理员的状态控制台
- **Cloudflare Tunnel 集成** — 可选接入，自动获得 HTTPS 和 DDoS 防护

## 快速开始 / Quick Start

```bash
# 1. 启动 Server（Docker）
docker run -p 8080:8080 \
  -e MONOGATE_API_KEY=your-secret-key \
  ghcr.io/cliffhan/monogate-server

# 2. 启动 Client，暴露本地服务
monogate-client \
  --server wss://your-server.com \
  --api-key your-secret-key \
  --route /=http://localhost:3000
```

详细文档请访问站点：[https://monogate.clifftop.win](https://monogate.clifftop.win)

## 本站构建 / Local Build

本仓库是 Monogate 的 GitHub Pages 发布站点，使用 Jekyll 构建。

This repository is the GitHub Pages site for Monogate, built with Jekyll.

```bash
jekyll build
```

## 许可证 / License

Freeware. 免费软件，商业使用请联系作者。

For commercial use, please contact the author.
