---
layout: guide
title: Embedded Portal
lang: zh-CN
---

> 面向访问者的内嵌入口页，用于展示当前 Monogate 节点的公开信息，并提供客户端软件下载。

## 定位

Embedded Portal 不是管理后台，它只承担面向访问者的入口页职责。

它更像一个节点首页：

- 告诉访问者这个 Monogate Server 提供什么
- 提供客户端软件下载
- 提供必要的连接提示
- 与管理员使用的 Embedded Console 分离

## 启用

Embedded Portal 默认不启用。建议在部署 Server 时打开它，方便访问者下载内置客户端并查看节点入口信息。

```text
MONOGATE_EMBEDDED_PORTAL_ENABLED=true
```

如果需要自定义路径，可以设置：

```text
MONOGATE_EMBEDDED_PORTAL_ENDPOINT=/custom-portal
```

路径必须以 `/` 开头，不能以 `/` 结尾。

## 默认入口

默认路径：

```text
/monogate/portal
```

当 Server 已暴露到公网时，可以通过类似下面的地址访问：

```text
https://your-server.com/monogate/portal
```

## 适合展示什么

Portal 适合放置面向普通访问者的信息：

- 当前节点说明
- 客户端软件下载
- 简短的使用提示
- 公开状态或帮助信息

不建议在 Portal 中放置管理能力、敏感配置或内部诊断信息。这些内容应保留在 Embedded Console 中。

## 与 Console 的区别

| 功能 | 面向对象 | 典型用途 |
|------|----------|----------|
| Embedded Portal | 普通访问者 | 下载客户端、查看节点说明 |
| Embedded Console | 管理员 | 查看 Client、路由、状态与诊断信息 |

这样的分离可以让 Monogate 在同一个 Server 上同时提供公开入口和管理入口，同时保持清晰的权限边界。
