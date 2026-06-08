---
layout: guide
title: Quick Start
lang: en
---

Using Back4App as an example, deploy Monogate Server from scratch and connect a local service.

> Note: Back4App's free service only stays running for 1 hour, then automatically shuts down and cannot be auto-woken.

## Prerequisites

- Back4App account
- Locally compiled `monogate-client` (or downloaded from Release)
- A local HTTP service to expose

## Step 1: Create a Back4App Service

1. Log in to [Back4App](https://www.back4app.com/)
2. Create a new app, select Docker container type
3. Record the assigned public address

## Step 2: Configure Environment Variables

Add the following in Back4App's environment variable configuration:

```
MONOGATE_API_KEY=your-secret-key
```

## Step 3: Deploy the Server

Back4App will automatically pull and start from the Docker image.

Image address: `ghcr.io/cliffhan/monogate-server:master`

## Step 4: Start the Client

```bash
monogate-client \
  -t https://your-app.back4app.io \
  -k your-secret-key \
  --root http://localhost:3000
```

## Step 5: Verify

Visit `https://your-app.back4app.io`, you should see the local service's page.

## Common Issues

- **Connection failed**: Check if the API Key is correct, and whether the Server logs show successful authentication
- **502 error**: Check if the Client is started and successfully connected
- **Page styles missing**: Check if the route configuration is correct
