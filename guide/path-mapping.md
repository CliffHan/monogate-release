---
layout: guide
title: 路径映射
lang: zh-CN
---

> Client 如何将公网请求映射到本地服务。

路径映射由 `monogate-client` 的命令行参数配置。它不是 Server 端环境变量，通常在启动本地 Client 时指定。

## 基本用法

```bash
# 根路径映射
--root http://localhost:3000

# 多路由映射
--route /api=http://localhost:3000
--route /files=http://localhost:8080
```

完整启动示例：

```bash
monogate-client \
  -t https://your-server.com \
  -k your-secret-key \
  --root http://localhost:3000 \
  --route /files=http://localhost:8080
```

## 匹配规则

| 公网请求 | 路由配置 | 转发目标 |
|---------|---------|---------|
| `GET /api/users` | `--route /api=http://localhost:3000` | `http://localhost:3000/api/users` |
| `GET /files/doc.pdf` | `--route /files=http://localhost:8080` | `http://localhost:8080/files/doc.pdf` |
| `GET /any/path` | `--root http://localhost:3000` | `http://localhost:3000/any/path` |

## 当前行为

当前实现是**路径替换**：公网请求的完整路径会直接附加到本地 URL 上。

例如：路由 `/api=http://localhost:3000`，请求 `/api/users` → `http://localhost:3000/api/users`

## 注意事项

- `--root` 和 `--route` 都是 Client 启动参数，需要写在 `monogate-client` 命令中
- 不允许重复路由
- 本地 URL 不含 `://` 时自动补全 `http://` 前缀
- 路由匹配基于 `matchit`，支持精确匹配和通配符

## 待完善

- [ ] 路径前缀移除（strip prefix）选项
- [ ] 正则表达式匹配
