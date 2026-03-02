function handleImageError() {
    const images = document.querySelectorAll('main img') as NodeListOf<HTMLImageElement>;
    
    images.forEach(img => {
        if (img.complete && img.naturalHeight === 0) {
            markAsBroken(img);
        }

        img.addEventListener('error', () => {
            markAsBroken(img);
        });
    });
}

function markAsBroken(img: HTMLImageElement) {
    if (img.getAttribute('data-broken') === 'true') return;
    
    img.setAttribute('data-broken', 'true');
    
    const placeholder = document.createElement('div');
    placeholder.className = 'broken-image-placeholder';
    placeholder.innerText = '图片无法加载，请稍后再试';
    placeholder.style.cssText = `
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--sl-color-gray-6);
        color: var(--sl-color-gray-3);
        border: 1px dashed var(--sl-color-gray-4);
        border-radius: 0.5rem;
        padding: 1rem;
        min-height: 100px;
        text-align: center;
        font-size: var(--sl-text-sm);
        width: 100%;
    `;

    if (img.parentNode) {
        img.parentNode.replaceChild(placeholder, img);
    }
}

if (document.readyState === 'complete') {
    handleImageError();
} else {
    window.addEventListener('load', handleImageError);
}

document.addEventListener('astro:page-load', handleImageError);
