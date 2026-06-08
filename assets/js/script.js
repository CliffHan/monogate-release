/**
 * Monogate - Main JavaScript
 * Navigation, mobile menu, code copy, smooth scroll, scroll reveal
 */

(function () {
    'use strict';

    // ============================================
    // DOM Ready
    // ============================================
    document.addEventListener('DOMContentLoaded', init);

    function init() {
        initNavbar();
        initMobileMenu();
        initCodeCopy();
        initSmoothScroll();
        initScrollReveal();
    }

    // ============================================
    // Navbar Scroll Effect
    // ============================================
    function initNavbar() {
        var navbar = document.getElementById('navbar');
        if (!navbar) return;

        var scrollThreshold = 20;

        function handleScroll() {
            if (window.scrollY > scrollThreshold) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }

        // Run once on load in case page is already scrolled
        handleScroll();

        // Throttle scroll event for performance
        var ticking = false;
        window.addEventListener('scroll', function () {
            if (!ticking) {
                window.requestAnimationFrame(function () {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
    }

    // ============================================
    // Mobile Hamburger Menu
    // ============================================
    function initMobileMenu() {
        var toggle = document.getElementById('navToggle');
        var menu = document.getElementById('navMenu');
        if (!toggle || !menu) return;

        toggle.addEventListener('click', function () {
            toggle.classList.toggle('active');
            menu.classList.toggle('active');

            // Prevent body scroll when menu is open
            if (menu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Close menu when a nav link is clicked
        var navLinks = menu.querySelectorAll('.nav-link');
        navLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                toggle.classList.remove('active');
                menu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (e) {
            if (menu.classList.contains('active') &&
                !menu.contains(e.target) &&
                !toggle.contains(e.target)) {
                toggle.classList.remove('active');
                menu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Close menu on Escape key
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && menu.classList.contains('active')) {
                toggle.classList.remove('active');
                menu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // ============================================
    // Code Copy to Clipboard
    // ============================================
    function initCodeCopy() {
        var copyButtons = document.querySelectorAll('.copy-btn');
        if (copyButtons.length === 0) return;

        copyButtons.forEach(function (btn) {
            btn.addEventListener('click', function () {
                var clipboardText = btn.getAttribute('data-clipboard');
                if (!clipboardText) return;

                copyToClipboard(clipboardText).then(function () {
                    showCopiedFeedback(btn);
                }).catch(function () {
                    // Fallback: select the adjacent code block
                    var codeBlock = btn.closest('.code-block');
                    if (codeBlock) {
                        var code = codeBlock.querySelector('code');
                        if (code) {
                            fallbackCopy(code);
                            showCopiedFeedback(btn);
                        }
                    }
                });
            });
        });
    }

    function copyToClipboard(text) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            return navigator.clipboard.writeText(text);
        }
        return Promise.reject(new Error('Clipboard API not available'));
    }

    function fallbackCopy(element) {
        var range = document.createRange();
        range.selectNodeContents(element);
        var selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        try {
            document.execCommand('copy');
        } catch (e) {
            // Silent fail
        }
        selection.removeAllRanges();
    }

    function showCopiedFeedback(btn) {
        var originalText = btn.textContent;
        btn.textContent = '已复制';
        btn.classList.add('copied');

        setTimeout(function () {
            btn.textContent = originalText;
            btn.classList.remove('copied');
        }, 2000);
    }

    // ============================================
    // Smooth Scroll for Anchor Links
    // ============================================
    function initSmoothScroll() {
        var anchorLinks = document.querySelectorAll('a[href^="#"]');
        if (anchorLinks.length === 0) return;

        anchorLinks.forEach(function (link) {
            link.addEventListener('click', function (e) {
                var href = link.getAttribute('href');
                if (href === '#' || href === '#!') return;

                var target = document.querySelector(href);
                if (!target) return;

                e.preventDefault();

                var navbarHeight = 64;
                var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Update URL hash without jumping
                if (history.pushState) {
                    history.pushState(null, null, href);
                }
            });
        });
    }

    // ============================================
    // Scroll Reveal Animation (Intersection Observer)
    // ============================================
    function initScrollReveal() {
        // Check for IntersectionObserver support
        if (!('IntersectionObserver' in window)) {
            // Fallback: show everything immediately
            var allReveal = document.querySelectorAll('.reveal, .reveal-stagger');
            allReveal.forEach(function (el) {
                el.classList.add('revealed');
            });
            return;
        }

        // Standard reveal elements
        var revealElements = document.querySelectorAll('.reveal');
        if (revealElements.length > 0) {
            var revealObserver = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                        revealObserver.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -40px 0px'
            });

            revealElements.forEach(function (el) {
                revealObserver.observe(el);
            });
        }

        // Staggered reveal containers (e.g., grids)
        var staggerElements = document.querySelectorAll('.reveal-stagger');
        if (staggerElements.length > 0) {
            var staggerObserver = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                        staggerObserver.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.05,
                rootMargin: '0px 0px -20px 0px'
            });

            staggerElements.forEach(function (el) {
                staggerObserver.observe(el);
            });
        }
    }

})();
