---
layout: guide
title: 快速开始
lang: zh-CN
---

以 Back4App 为例，从零开始部署 Monogate Server 并连接本地服务。

> 注：Back4App 免费服务只能保持 1 个小时运行，然后就会自动关闭，无法自动唤醒。

## 前提条件

- Back4App 账号
- 本地已编译 `monogate-client`（或从 Release 下载）
- 本地有一个待暴露的 HTTP 服务

## 步骤 1：创建 Back4App 服务

1. 登录 [Back4App](https://www.back4app.com/)
2. 创建新应用，选择 Docker 容器类型
3. 记录分配的公网地址

## 步骤 2：配置环境变量

在 Back4App 的环境变量配置中添加：

```
MONOGATE_API_KEY=your-secret-key
```

## 步骤 3：部署 Server

Back4App 会自动从 Docker 镜像拉取并启动。

镜像地址：`ghcr.io/cliffhan/monogate-server:master`

## 步骤 4：启动 Client

```bash
monogate-client \
  -t https://your-app.back4app.io \
  -k your-secret-key \
  --root http://localhost:3000
```

## 步骤 5：验证

访问 `https://your-app.back4app.io`，应该能看到本地服务的页面。

## 常见问题

- **连接失败**：检查 API Key 是否正确，Server 日志是否显示认证成功
- **502 错误**：检查 Client 是否已启动并成功连接
- **页面样式丢失**：检查路由配置是否正确
