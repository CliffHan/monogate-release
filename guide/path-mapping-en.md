---
layout: guide
title: Path Mapping
lang: en
---

> How Client maps public requests to local services.

Path mapping is configured via `monogate-client` command-line parameters. It is not a Server-side environment variable; it is usually specified when starting the local Client.

## Basic Usage

```bash
# Root path mapping
--root http://localhost:3000

# Multi-route mapping
--route /api=http://localhost:3000
--route /files=http://localhost:8080
```

Full startup example:

```bash
monogate-client \
  -t https://your-server.com \
  -k your-secret-key \
  --root http://localhost:3000 \
  --route /files=http://localhost:8080
```

## Matching Rules

| Public Request | Route Configuration | Forward Target |
|---------|---------|---------|
| `GET /api/users` | `--route /api=http://localhost:3000` | `http://localhost:3000/api/users` |
| `GET /files/doc.pdf` | `--route /files=http://localhost:8080` | `http://localhost:8080/files/doc.pdf` |
| `GET /any/path` | `--root http://localhost:3000` | `http://localhost:3000/any/path` |

## Current Behavior

The current implementation uses **path replacement**: the full path of the public request is directly appended to the local URL.

For example: route `/api=http://localhost:3000`, request `/api/users` → `http://localhost:3000/api/users`

## Notes

- `--root` and `--route` are both Client startup parameters and must be written in the `monogate-client` command
- Duplicate routes are not allowed
- Local URLs without `://` are automatically prefixed with `http://`
- Route matching is based on `matchit`, supporting exact matching and wildcards

## To Be Improved

- [ ] Strip prefix option
- [ ] Regular expression matching
