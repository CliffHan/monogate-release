---
layout: default
title: false
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
                自托管内网穿透网关
            </div>
            <h1 class="hero-title">
                把内网的 Web 服务
                <span class="gradient-text">带到公网</span>
            </h1>
            <p class="hero-subtitle">
                想临时分享本地项目、访问家里的 NAS，或给边缘设备留一个公网入口？Monogate 让你用自己的云服务托管入口，把本地服务主动暴露出去，不需要公网 IP。
            </p>
            <div class="hero-actions">
                <a href="#quickstart" class="btn btn-primary">
                    <span>快速开始</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
                <a href="{{ site.docker_image }}" class="btn btn-secondary" target="_blank">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.187.187 0 0 1-.186-.186V6.515a.186.186 0 0 0-.186-.186H11.49a.186.186 0 0 0-.186.186v2.119a.186.186 0 0 1-.186.186H9a.186.186 0 0 0-.186.186v1.887c0 .103.083.185.186.185h2.119a.186.186 0 0 1 .186.186v2.119a.186.186 0 0 0 .186.185h2.119a.186.186 0 0 0 .186-.185v-2.119a.186.186 0 0 1 .186-.186zM20 6h-2V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-2h2c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-4 14H4V4h12v16zm4-4h-2V8h2v8z"/></svg>
                    Docker 镜像
                </a>
            </div>
            <div class="hero-code">
                <div class="code-header">
                    <div class="code-dots">
                        <span></span><span></span><span></span>
                    </div>
                    <span class="code-title">terminal</span>
                </div>
                <pre><code><span class="code-comment"># 启动客户端，将本地服务暴露到公网</span>
<span class="code-prompt">$</span> monogate-client \
    -t https://your-server.com \
    -k your-secret-key \
    --root http://localhost:3000</code></pre>
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
            <span class="section-tag">核心特性</span>
            <h2 class="section-title">少一点网络折腾，多一点可控入口</h2>
            <p class="section-desc">Monogate 面向 Web 服务发布：入口由你托管，连接从内网主动发起，访问者只需要一个普通 HTTPS 地址。</p>
        </div>
        <div class="features-grid">
            <div class="feature-card">
                <div class="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                </div>
                <h3>自己的公网入口</h3>
                <p>Server 可以放在 VPS，也可以放在支持 Docker 的 PaaS 上。入口归你管理，迁移和停用都更可控。</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                </div>
                <h3>内网无需开端口</h3>
                <p>Client 从本地主动连到 Server。家庭网络、公司内网、CGNAT 后面的设备，都不需要额外端口映射。</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                </div>
                <h3>部署更省心</h3>
                <p>用 Docker 启动 Server，再运行一个 Client，就能把本地 Web 服务发布出去。适合临时演示和长期自用。</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
                </div>
                <h3>一个入口多个服务</h3>
                <p>可以把首页、NAS、API、文件服务放在不同路径下，通过同一个公网域名访问。</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                </div>
                <h3>访问者有入口页</h3>
                <p>Embedded Portal 提供客户端软件下载和节点说明，让访问者不必到处寻找。</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                </div>
                <h3>管理员有控制台</h3>
                <p>Embedded Console 用来查看 Client、路由和服务器状态，公开入口和管理入口互不混在一起。</p>
            </div>
        </div>
    </div>
</section>

<!-- Quick Start Section -->
<section class="quickstart" id="quickstart">
    <div class="container">
        <div class="section-header">
            <span class="section-tag">快速开始</span>
            <h2 class="section-title">三步启动</h2>
            <p class="section-desc">部署一次公网网关，然后让本地 Client 主动连上来。</p>
        </div>
        <div class="steps">
            <div class="step">
                <div class="step-number">1</div>
                <div class="step-content">
                    <h3>部署 Server</h3>
                    <p>在支持 Docker 的云平台或 VPS 上运行服务端。</p>
                    <div class="code-block">
                        <div class="code-header">
                            <span>docker</span>
                            <button class="copy-btn" data-clipboard="docker run -p 8080:8080 -e MONOGATE_API_KEY=your-secret-key ghcr.io/cliffhan/monogate-server:master">复制</button>
                        </div>
                        <pre><code>docker run -p 8080:8080 \
  -e MONOGATE_API_KEY=your-secret-key \
  ghcr.io/cliffhan/monogate-server:master</code></pre>
                    </div>
                </div>
            </div>
            <div class="step">
                <div class="step-number">2</div>
                <div class="step-content">
                    <h3>启动 Client</h3>
                    <p>在本地运行客户端，指定服务端地址和要暴露的服务。</p>
                    <div class="code-block">
                        <div class="code-header">
                            <span>bash</span>
                            <button class="copy-btn" data-clipboard="monogate-client -t https://your-server.com -k your-secret-key --root http://localhost:3000">复制</button>
                        </div>
                        <pre><code>monogate-client \
  -t https://your-server.com \
  -k your-secret-key \
  --root http://localhost:3000</code></pre>
                    </div>
                </div>
            </div>
            <div class="step">
                <div class="step-number">3</div>
                <div class="step-content">
                    <h3>访问服务</h3>
                    <p>通过服务端公网地址即可访问本地服务。</p>
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

<!-- Positioning Section -->
<section class="architecture" id="architecture">
    <div class="container">
        <div class="section-header">
            <span class="section-tag">定位</span>
            <h2 class="section-title">它和 cloudflared、frp 有什么不同？</h2>
            <p class="section-desc">Monogate 不是要替代所有隧道工具，而是给“自托管 Web 服务入口”这个场景一个更轻的选择。</p>
        </div>
        <div class="arch-diagram">
            <div class="arch-details">
                <div class="arch-detail-card">
                    <h4>相比 cloudflared</h4>
                    <p>cloudflared 的入口依赖 Cloudflare 账号和网络。Monogate 的 Server 可以部署在你选择的 PaaS 或 VPS 上，入口更自托管、更容易按自己的环境迁移。</p>
                </div>
                <div class="arch-detail-card">
                    <h4>相比 frp</h4>
                    <p>frp 更通用、自由度更高，也需要你处理更多服务端配置。Monogate 聚焦 Web 服务发布，Server 更容易放进容器和 PaaS，但支持的场景更收敛。</p>
                </div>
                <div class="arch-detail-card">
                    <h4>适合谁</h4>
                    <p>适合想要一个可控公网入口，又不想维护复杂隧道系统的人：本地开发、家庭服务、NAS 面板、边缘设备和临时演示。</p>
                </div>
                <div class="arch-detail-card">
                    <h4>不适合谁</h4>
                    <p>如果你需要转发各种非 Web 服务、配置多个端口，或做更完整的网络穿透，frp 这类工具会更合适。</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Use Cases Section -->
<section class="usecases" id="usecases">
    <div class="container">
        <div class="section-header">
            <span class="section-tag">应用场景</span>
            <h2 class="section-title">适用于多种环境</h2>
            <p class="section-desc">Monogate 特别适合那些"传统网络假设失效"的环境。</p>
        </div>
        <div class="usecases-grid">
            <div class="usecase-card">
                <div class="usecase-icon">👨‍💻</div>
                <h3>本地开发共享</h3>
                <p>将本地 Web 应用快速共享给同事或团队，无需部署到临时服务器。</p>
            </div>
            <div class="usecase-card">
                <div class="usecase-icon">🏠</div>
                <h3>内网服务暴露</h3>
                <p>安全暴露 NAS、管理面板、家庭服务器等 HTTP 服务，无需公网 IP。</p>
            </div>
            <div class="usecase-card">
                <div class="usecase-icon">🚀</div>
                <h3>临时项目演示</h3>
                <p>快速向客户或合作方展示项目进展，演示结束后随时断开连接。</p>
            </div>
            <div class="usecase-card">
                <div class="usecase-icon">📡</div>
                <h3>IoT / 边缘设备</h3>
                <p>让位于 CGNAT 或边缘网络后的设备 Web 面板也能被公网访问。</p>
            </div>
            <div class="usecase-card">
                <div class="usecase-icon">🐳</div>
                <h3>PaaS 平台部署</h3>
                <p>在 Fly.io、Railway、Render 等平台一键部署，享受原生云体验。</p>
            </div>
            <div class="usecase-card">
                <div class="usecase-icon">🔧</div>
                <h3>无公网 IP 环境</h3>
                <p>无需配置反向代理、防火墙或端口映射，一条命令即可解决。</p>
            </div>
        </div>
    </div>
</section>

<!-- Docs Section -->
<section class="docs" id="docs">
    <div class="container">
        <div class="section-header">
            <span class="section-tag">文档</span>
            <h2 class="section-title">了解更多</h2>
            <p class="section-desc">详细的配置指南与使用说明。</p>
        </div>
        <div class="docs-grid">
            <a href="{{ '/guide/what-is-monogate.html' | relative_url }}" class="doc-card">
                <div class="doc-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                </div>
                <h3>什么是 Monogate</h3>
                <p>项目背景、HTTP 穿透定位与核心目标。</p>
            </a>
            <a href="{{ '/guide/embedded-portal.html' | relative_url }}" class="doc-card">
                <div class="doc-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 8h10"/><path d="M7 12h6"/><path d="M7 16h8"/></svg>
                </div>
                <h3>Embedded Portal</h3>
                <p>面向访问者的节点入口页与服务说明。</p>
            </a>
            <a href="{{ '/guide/embedded-console.html' | relative_url }}" class="doc-card">
                <div class="doc-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 9h8"/><path d="M8 13h5"/><path d="M8 17h8"/></svg>
                </div>
                <h3>Embedded Console</h3>
                <p>查看 Client、路由与服务器状态。</p>
            </a>
            <a href="{{ '/guide/quick-start.html' | relative_url }}" class="doc-card">
                <div class="doc-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
                </div>
                <h3>快速开始</h3>
                <p>从零开始部署 Server 并连接本地服务。</p>
            </a>
            <a href="{{ '/guide/architecture.html' | relative_url }}" class="doc-card">
                <div class="doc-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                </div>
                <h3>架构说明</h3>
                <p>核心组件、请求转发流程与资源系统。</p>
            </a>
            <a href="{{ '/guide/environment-variables.html' | relative_url }}" class="doc-card">
                <div class="doc-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                </div>
                <h3>环境变量</h3>
                <p>Server 端所有可配置的环境变量说明。</p>
            </a>
            <a href="{{ '/guide/cloudflare-tunnel.html' | relative_url }}" class="doc-card">
                <div class="doc-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                </div>
                <h3>Cloudflare Tunnel</h3>
                <p>通过 Cloudflare Tunnel 提供额外入口点。</p>
            </a>
            <a href="{{ '/guide/path-mapping.html' | relative_url }}" class="doc-card">
                <div class="doc-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
                </div>
                <h3>路径映射</h3>
                <p>Client 如何将公网请求映射到本地服务。</p>
            </a>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="cta">
    <div class="container">
        <div class="cta-content">
            <h2>开始体验 Monogate</h2>
                <p>让内网 Web 服务发布变得简单。更低部署成本，更少运维负担，更可控的公网入口。</p>
            <div class="cta-actions">
                <a href="{{ site.docker_image }}" class="btn btn-primary btn-large" target="_blank">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.187.187 0 0 1-.186-.186V6.515a.186.186 0 0 0-.186-.186H11.49a.186.186 0 0 0-.186.186v2.119a.186.186 0 0 1-.186.186H9a.186.186 0 0 0-.186.186v1.887c0 .103.083.185.186.185h2.119a.186.186 0 0 1 .186.186v2.119a.186.186 0 0 0 .186.185h2.119a.186.186 0 0 0 .186-.185v-2.119a.186.186 0 0 1 .186-.186zM20 6h-2V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-2h2c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-4 14H4V4h12v16zm4-4h-2V8h2v8z"/></svg>
                    获取 Docker 镜像
                </a>
                <a href="#quickstart" class="btn btn-secondary btn-large">快速开始</a>
            </div>
        </div>
    </div>
</section>
