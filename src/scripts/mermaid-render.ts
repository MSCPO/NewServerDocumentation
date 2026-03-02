let mermaidPromise: Promise<any> | null = null;

async function loadMermaid() {
    if (!mermaidPromise) {
        mermaidPromise = import('mermaid').then(m => {
            const mermaid = m.default;
            mermaid.initialize({
                startOnLoad: false,
                theme: document.documentElement.dataset.theme === 'dark' ? 'dark' : 'default',
                fontFamily: 'var(--sl-font-system)',
                suppressErrorRendering: true,
            });
            return mermaid;
        });
    }
    return mermaidPromise;
}

async function renderWrapper(wrapper: HTMLElement, mermaid: any) {
    const contentEl = wrapper.querySelector('.mermaid-content') as HTMLElement;
    const loadingEl = wrapper.querySelector('.mermaid-loading') as HTMLElement;
    if (!contentEl || !loadingEl || wrapper.dataset.mermaidRendered === 'true') return;

    let content = wrapper.dataset.mermaidDecoded;
    if (!content) {
        const raw = wrapper.getAttribute('data-mermaid-code');
        if (raw) {
            content = raw.replace(/\\\\/g, '\x00').replace(/\\n/g, '\n').replace(/\x00/g, '\\');
        } else {
            content = contentEl.textContent?.trim();
        }
        if (content) {
            wrapper.dataset.mermaidDecoded = content;
        }
    }

    if (!content) return;

    wrapper.dataset.mermaidRendered = 'true';

    try {
        const id = `mermaid-${Math.random().toString(36).slice(2)}`;
        const { svg } = await mermaid.render(id, content);

        requestAnimationFrame(() => {
            contentEl.innerHTML = svg;
            contentEl.style.visibility = 'visible';
            contentEl.style.height = 'auto';
            contentEl.style.overflow = 'visible';
            loadingEl.style.display = 'none';

            wrapper.style.backgroundColor = 'transparent';
            wrapper.style.border = 'none';
            wrapper.style.padding = '0';
            wrapper.style.minHeight = '0';

            const svgElement = contentEl.querySelector('svg');
            if (svgElement) {
                const height = svgElement.getBoundingClientRect().height;
                if (height > 200) {
                    wrapper.style.position = 'relative';
                    contentEl.style.height = '200px';
                    contentEl.style.overflow = 'hidden';
                    contentEl.style.transition = 'height 0.3s ease';

                    const overlay = document.createElement('div');
                    overlay.className = 'mermaid-overlay';
                    overlay.style.position = 'absolute';
                    overlay.style.bottom = '0';
                    overlay.style.left = '0';
                    overlay.style.width = '100%';
                    overlay.style.height = '60px';
                    overlay.style.background = 'linear-gradient(to bottom, transparent, var(--sl-color-bg))';
                    overlay.style.display = 'flex';
                    overlay.style.alignItems = 'flex-end';
                    overlay.style.justifyContent = 'center';
                    overlay.style.paddingBottom = '10px';
                    overlay.style.cursor = 'pointer';
                    overlay.style.zIndex = '10';

                    const button = document.createElement('span');
                    button.textContent = '点击展开';
                    button.style.fontSize = 'var(--sl-text-xs)';
                    button.style.color = 'var(--sl-color-text-accent)';
                    button.style.backgroundColor = 'var(--sl-color-bg)';
                    button.style.padding = '4px 12px';
                    button.style.borderRadius = '1rem';
                    button.style.border = '1px solid var(--sl-color-hairline)';
                    button.style.boxShadow = 'var(--sl-shadow-sm)';

                    overlay.appendChild(button);
                    wrapper.appendChild(overlay);

                    let isExpanded = false;
                    overlay.addEventListener('click', (e) => {
                        e.stopPropagation();
                        isExpanded = !isExpanded;
                        if (isExpanded) {
                            contentEl.style.height = 'auto';
                            contentEl.style.overflow = 'visible';
                            overlay.style.background = 'transparent';
                            overlay.style.height = 'auto';
                            overlay.style.position = 'relative';
                            overlay.style.marginTop = '10px';
                            button.textContent = '点击收起';
                        } else {
                            contentEl.style.height = '200px';
                            contentEl.style.overflow = 'hidden';
                            overlay.style.background = 'linear-gradient(to bottom, transparent, var(--sl-color-bg))';
                            overlay.style.height = '60px';
                            overlay.style.position = 'absolute';
                            overlay.style.marginTop = '0';
                            button.textContent = '点击展开';
                        }
                    });
                }
            }
        });
    } catch (e) {
        loadingEl.innerHTML = `<div style="color:var(--sl-color-text-error);padding:1rem;border:1px dashed var(--sl-color-text-error);">渲染失败</div>`;
        loadingEl.style.display = 'flex';
        contentEl.style.visibility = 'hidden';
    }
}

async function transformAndRender(force = false) {
    const selector = force ? '.mermaid-wrapper' : '.mermaid-wrapper:not([data-mermaid-rendered="true"])';
    const wrappers = Array.from(document.querySelectorAll(selector)) as HTMLElement[];
    if (wrappers.length === 0) return;

    const mermaid = await loadMermaid().catch(() => null);
    if (!mermaid) return;

    if (force) {
        for (const wrapper of wrappers) {
            wrapper.dataset.mermaidRendered = 'false';
            renderWrapper(wrapper, mermaid);
        }
        return;
    }

    const renderVisible = (elements: HTMLElement[]) => {
        elements.forEach(wrapper => {
            const rect = wrapper.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight + 200 && rect.bottom > -200;
            if (isVisible) {
                renderWrapper(wrapper, mermaid);
            }
        });
    };

    renderVisible(wrappers);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const wrapper = entry.target as HTMLElement;
                renderWrapper(wrapper, mermaid);
                observer.unobserve(wrapper);
            }
        });
    }, {
        rootMargin: '200px 0px',
    });

    wrappers.forEach(wrapper => {
        if (wrapper.dataset.mermaidRendered !== 'true') {
            observer.observe(wrapper);
        }
    });

    const detailsParents = new Set<HTMLDetailsElement>();
    wrappers.forEach(w => {
        const details = w.closest('details');
        if (details) detailsParents.add(details);
    });
    detailsParents.forEach(details => {
        details.addEventListener('toggle', () => {
            if (details.open) {
                const inner = Array.from(details.querySelectorAll('.mermaid-wrapper:not([data-mermaid-rendered="true"])')) as HTMLElement[];
                renderVisible(inner);
            }
        });
    });
}

if (!document.getElementById('mermaid-styles')) {
    const style = document.createElement('style');
    style.id = 'mermaid-styles';
    style.textContent = `@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } } .mermaid svg { max-width: 100%; height: auto; }`;
    document.head.appendChild(style);
}

if (document.readyState === 'complete') {
    transformAndRender();
} else {
    window.addEventListener('load', () => transformAndRender(), { once: true });
}

document.addEventListener('astro:page-load', () => {
    if (document.querySelector('.mermaid-wrapper:not([data-mermaid-rendered="true"])')) {
        transformAndRender();
    }
});

const observer = new MutationObserver(async (mutations) => {
    if (!mermaidPromise) return;
    for (const mutation of mutations) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
            const mermaid = await loadMermaid();
            if (mermaid) {
                mermaid.initialize({
                    theme: document.documentElement.dataset.theme === 'dark' ? 'dark' : 'default',
                });
                transformAndRender(true);
            }
        }
    }
});
observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
