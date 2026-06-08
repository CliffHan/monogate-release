---
layout: guide
title: Cookie Handling
lang: en
---

> How Monogate handles browser Cookies.

## Working Mechanism

Monogate achieves Cookie support through **Session binding**:

1. Server uses `tower_sessions` to manage browser Sessions
2. A Session is automatically created for each browser on first visit
3. Session ID is passed to Client via WebSocket
4. Client maintains an independent `reqwest::Client` (with cookie_store enabled) for each Session

## Cookie Flow

```
Browser --Set-Cookie--> Server --> Stored in Session
Browser --Cookie--> Server --> Associated via Session ID
                      --> WebSocket --> Client --> Forwarded to local service using corresponding Session's cookie_store
Local Service --Set-Cookie--> Client --> Stored in cookie_store
                      --> WebSocket --> Server --> Returned to browser
```

## Design Points

- **Cookies cannot be externally overridden**: When Client forwards requests, the original `cookie` header is removed, and reqwest's cookie_store manages it automatically
- **Session isolation**: Sessions from different browsers do not affect each other
- **Cache expiration**: HTTP Client cache expires in 30 minutes, maximum 64 Sessions

## Known Limitations

- Session storage is in memory and is lost after Server restart
- Cookie Domain/Path attributes may need to be handled by the local service itself
