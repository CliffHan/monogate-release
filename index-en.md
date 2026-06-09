---
layout: default
title: false
lang: en
---

<!-- Hero Section -->
<section class="hero">
    <div class="hero-bg">
        <div class="grid-pattern"></div>
        <div class="glow-orb orb-1"></div>
        <div class="glow-orb orb-2"></div>
    </div>
    <div class="container">
        <div class="hero-content">
            <div class="hero-badge">
                <span class="badge-dot"></span>
                Free Application Connection Gateway
            </div>
            <h1 class="hero-title">
                Expose Private Services
                <span class="gradient-text">to the Public Internet</span>
            </h1>
            <p class="hero-subtitle">
                Monogate is a lightweight application connection gateway. Deploy the server once, then connect your own services through a single Client to securely expose local or private network services to the public internet.
            </p>
            <div class="hero-actions">
                <a href="#quickstart" class="btn btn-primary">
                    <span>Quick Start</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
                <a href="{{ site.docker_image }}" class="btn btn-secondary" target="_blank">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.187.187 0 0 1-.186-.186V6.515a.186.186 0 0 0-.186-.186H11.49a.186.186 0 0 0-.186.186v2.119a.186.186 0 0 1-.186.186H9a.186.186 0 0 0-.186.186v1.887c0 .103.083.185.186.185h2.119a.186.186 0 0 1 .186.186v2.119a.186.186 0 0 0 .186.185h2.119a.186.186 0 0 0 .186-.185v-2.119a.186.186 0 0 1 .186-.186zM20 6h-2V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-2h2c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-4 14H4V4h12v16zm4-4h-2V8h2v8z"/></svg>
                    Docker Image
                </a>
            </div>
            <div class="hero-code">
                <div class="code-header">
                    <div class="code-dots">
                        <span></span><span></span><span></span>
                    </div>
                    <span class="code-title">terminal</span>
                </div>
                <pre><code><span class="code-comment"># Start the client to expose local services to the internet</span>
<span class="code-prompt">$</span> monogate-client \
    --server wss://your-server.com \
    --api-key your-secret-key \
    --route /=http://localhost:3000</code></pre>
            </div>
        </div>
    </div>
    <div class="hero-scroll">
        <div class="scroll-indicator">
            <span></span>
        </div>
    </div>
</section>

<!-- Features Section -->
<section class="features" id="features">
    <div class="container">
        <div class="section-header">
            <span class="section-tag">Core Features</span>
            <h2 class="section-title">Designed for Modern Deployment</h2>
            <p class="section-desc">Monogate doesn't try to take over the entire network. Instead, it leverages existing HTTP and PaaS infrastructure to provide lightweight connectivity for applications.</p>
        </div>
        <div class="features-grid">
            <div class="feature-card">
                <div class="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                </div>
                <h3>Lightweight & Fast</h3>
                <p>Built with Rust for safer memory management and stable performance. Data is streamed to conserve resources.</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                </div>
                <h3>Secure Connections</h3>
                <p>Client and Server communicate over persistent WebSocket connections with API Key authentication, session isolation, and secure cookie handling.</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                </div>
                <h3>PaaS Native</h3>
                <p>Designed for modern deployment environments. Supports Docker, Fly.io, Railway, Render, and more without complex network configuration.</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
                </div>
                <h3>Resource-Oriented</h3>
                <p>Everything is a resource node. Dynamically matches resource types and executes corresponding behaviors, naturally modular, extensible, and flexibly deployable.</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                </div>
                <h3>Embedded Portal &amp; Console</h3>
                <p>Embedded Portal provides client download for visitors. Embedded Console lets administrators view connections and routes. Clear separation of permissions.</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                </div>
                <h3>Cloudflare Tunnel</h3>
                <p>Optional Cloudflare Tunnel integration. No need to open server ports, automatically get HTTPS and DDoS protection.</p>
            </div>
        </div>
    </div>
</section>

<!-- Quick Start Section -->
<section class="quickstart" id="quickstart">
    <div class="container">
        <div class="section-header">
            <span class="section-tag">Quick Start</span>
            <h2 class="section-title">Three Steps to Launch</h2>
            <p class="section-desc">Deploy the gateway once, then connect your own services through a single Client.</p>
        </div>
        <div class="steps">
            <div class="step">
                <div class="step-number">1</div>
                <div class="step-content">
                    <h3>Deploy Server</h3>
                    <p>Run the server on a Docker-supported cloud platform or VPS.</p>
                    <div class="code-block">
                        <div class="code-header">
                            <span>docker</span>
                            <button class="copy-btn" data-clipboard="docker run -p 8080:8080 -e MONOGATE_API_KEY=your-secret-key ghcr.io/cliffhan/monogate-server">Copy</button>
                        </div>
                        <pre><code>docker run -p 8080:8080 \
  -e MONOGATE_API_KEY=your-secret-key \
  ghcr.io/cliffhan/monogate-server</code></pre>
                    </div>
                </div>
            </div>
            <div class="step">
                <div class="step-number">2</div>
                <div class="step-content">
                    <h3>Start Client</h3>
                    <p>Run the client locally, specifying the server address and services to expose.</p>
                    <div class="code-block">
                        <div class="code-header">
                            <span>bash</span>
                            <button class="copy-btn" data-clipboard="monogate-client --server wss://your-server.com --api-key your-secret-key --route /=http://localhost:3000">Copy</button>
                        </div>
                        <pre><code>monogate-client \
  --server wss://your-server.com \
  --api-key your-secret-key \
  --route /=http://localhost:3000</code></pre>
                    </div>
                </div>
            </div>
            <div class="step">
                <div class="step-number">3</div>
                <div class="step-content">
                    <h3>Access Services</h3>
                    <p>Access your local services through the server's public address.</p>
                    <div class="code-block">
                        <div class="code-header">
                            <span>browser</span>
                        </div>
                        <pre><code>https://your-server.com</code></pre>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Architecture Section -->
<section class="architecture" id="architecture">
    <div class="container">
        <div class="section-header">
            <span class="section-tag">Architecture</span>
            <h2 class="section-title">Simple Yet Efficient Data Flow</h2>
            <p class="section-desc">Single WebSocket connection model. All HTTP requests and responses flow through one connection.</p>
        </div>
        <div class="arch-diagram">
            <div class="arch-flow">
                <div class="arch-node">
                    <div class="arch-icon">🌐</div>
                    <div class="arch-label">Browser</div>
                    <div class="arch-sublabel">HTTP/HTTPS</div>
                </div>
                <div class="arch-arrow">
                    <span class="arrow-line"></span>
                    <span class="arrow-head">▶</span>
                </div>
                <div class="arch-node server-node">
                    <div class="arch-icon">🔷</div>
                    <div class="arch-label">Monogate Server</div>
                    <div class="arch-sublabel">Public Gateway</div>
                </div>
                <div class="arch-arrow">
                    <span class="arrow-line"></span>
                    <span class="arrow-head">▶</span>
                </div>
                <div class="arch-node">
                    <div class="arch-icon">💻</div>
                    <div class="arch-label">Monogate Client</div>
                    <div class="arch-sublabel">Local Proxy</div>
                </div>
                <div class="arch-arrow">
                    <span class="arrow-line"></span>
                    <span class="arrow-head">▶</span>
                </div>
                <div class="arch-node">
                    <div class="arch-icon">⚙️</div>
                    <div class="arch-label">Local Service</div>
                    <div class="arch-sublabel">Your App</div>
                </div>
            </div>
            <div class="arch-details">
                <div class="arch-detail-card">
                    <h4>Streaming</h4>
                    <p>Header and Body are separated. Body is transmitted chunk by chunk, supporting large files.</p>
                </div>
                <div class="arch-detail-card">
                    <h4>Session Binding</h4>
                    <p>Requests from the same browser are associated via Session ID, with Cookie support.</p>
                </div>
                <div class="arch-detail-card">
                    <h4>Multiplexing</h4>
                    <p>A single WebSocket connection supports multiple concurrent requests, identified by request_id.</p>
                </div>
                <div class="arch-detail-card">
                    <h4>Abort Mechanism</h4>
                    <p>When either end disconnects, the other side is notified to stop transmission, avoiding resource waste.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Use Cases Section -->
<section class="usecases" id="usecases">
    <div class="container">
        <div class="section-header">
            <span class="section-tag">Use Cases</span>
            <h2 class="section-title">Works in Many Environments</h2>
            <p class="section-desc">Monogate is especially suitable for environments where "traditional networking assumptions no longer hold."</p>
        </div>
        <div class="usecases-grid">
            <div class="usecase-card">
                <div class="usecase-icon">👨‍💻</div>
                <h3>Local Dev Sharing</h3>
                <p>Quickly share your local development environment with colleagues or teams without deploying to a temporary server.</p>
            </div>
            <div class="usecase-card">
                <div class="usecase-icon">🏠</div>
                <h3>Internal Service Exposure</h3>
                <p>Securely expose NAS, admin panels, home servers, and more without a public IP.</p>
            </div>
            <div class="usecase-card">
                <div class="usecase-icon">🚀</div>
                <h3>Project Demos</h3>
                <p>Quickly show project progress to clients or partners, disconnect anytime after the demo.</p>
            </div>
            <div class="usecase-card">
                <div class="usecase-icon">📡</div>
                <h3>IoT / Edge Devices</h3>
                <p>Enable devices behind CGNAT or edge networks to be accessible from the public internet.</p>
            </div>
            <div class="usecase-card">
                <div class="usecase-icon">🐳</div>
                <h3>PaaS Deployment</h3>
                <p>One-click deployment on Fly.io, Railway, Render, and more for a native cloud experience.</p>
            </div>
            <div class="usecase-card">
                <div class="usecase-icon">🔧</div>
                <h3>No Public IP</h3>
                <p>No reverse proxy, firewall, or port mapping configuration needed. One command solves it all.</p>
            </div>
        </div>
    </div>
</section>

<!-- Docs Section -->
<section class="docs" id="docs">
    <div class="container">
        <div class="section-header">
            <span class="section-tag">Documentation</span>
            <h2 class="section-title">Learn More</h2>
            <p class="section-desc">Detailed configuration guides and usage instructions.</p>
        </div>
        <div class="docs-grid">
            <a href="{{ '/guide/what-is-monogate-en.html' | relative_url }}" class="doc-card">
                <div class="doc-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                </div>
                <h3>What is Monogate</h3>
                <p>Project background, design philosophy, and core goals.</p>
            </a>
            <a href="{{ '/guide/quick-start-en.html' | relative_url }}" class="doc-card">
                <div class="doc-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
                </div>
                <h3>Quick Start</h3>
                <p>Deploy Server from scratch and connect local services.</p>
            </a>
            <a href="{{ '/guide/architecture-en.html' | relative_url }}" class="doc-card">
                <div class="doc-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                </div>
                <h3>Architecture</h3>
                <p>Core components, request forwarding flow, and resource system.</p>
            </a>
            <a href="{{ '/guide/environment-variables-en.html' | relative_url }}" class="doc-card">
                <div class="doc-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                </div>
                <h3>Environment Variables</h3>
                <p>All configurable environment variables for the Server.</p>
            </a>
            <a href="{{ '/guide/cloudflare-tunnel-en.html' | relative_url }}" class="doc-card">
                <div class="doc-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                </div>
                <h3>Cloudflare Tunnel</h3>
                <p>Provide additional entry points via Cloudflare Tunnel.</p>
            </a>
            <a href="{{ '/guide/path-mapping-en.html' | relative_url }}" class="doc-card">
                <div class="doc-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
                </div>
                <h3>Path Mapping</h3>
                <p>How the Client maps public requests to local services.</p>
            </a>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="cta">
    <div class="container">
        <div class="cta-content">
            <h2>Start Using Monogate</h2>
            <p>Make modern application connectivity simple. Lower deployment costs, less operational burden, lighter access.</p>
            <div class="cta-actions">
                <a href="{{ site.docker_image }}" class="btn btn-primary btn-large" target="_blank">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.187.187 0 0 1-.186-.186V6.515a.186.186 0 0 0-.186-.186H11.49a.186.186 0 0 0-.186.186v2.119a.186.186 0 0 1-.186.186H9a.186.186 0 0 0-.186.186v1.887c0 .103.083.185.186.185h2.119a.186.186 0 0 1 .186.186v2.119a.186.186 0 0 0 .186.185h2.119a.186.186 0 0 0 .186-.185v-2.119a.186.186 0 0 1 .186-.186zM20 6h-2V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-2h2c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-4 14H4V4h12v16zm4-4h-2V8h2v8z"/></svg>
                    Get Docker Image
                </a>
                <a href="#quickstart" class="btn btn-secondary btn-large">Quick Start</a>
            </div>
        </div>
    </div>
</section>
