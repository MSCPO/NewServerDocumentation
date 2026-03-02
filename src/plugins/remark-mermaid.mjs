import { visit } from 'unist-util-visit';

export function remarkMermaid() {
  return (tree) => {
    visit(tree, 'code', (node) => {
      if (node.lang === 'mermaid') {
        const code = node.value.replace(/\\/g, '\\\\').replace(/"/g, '&quot;').replace(/\n/g, '\\n');
        node.type = 'html';
        node.value = `
<div class="mermaid-wrapper" style="display:block;min-height:100px;background-color:var(--sl-color-gray-6);border-radius:0.5rem;margin:1rem 0;padding:1rem;border:1px solid var(--sl-color-gray-5);overflow:hidden;position:relative;contain-intrinsic-size: 100px;content-visibility: auto;" data-mermaid-code="${code}">
   <div class="mermaid-loading" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;color:var(--sl-color-gray-3);font-size:var(--sl-text-sm);height:80px;">
     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mermaid-spinner" style="animation:spin 1s linear infinite">
       <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
     </svg>
     <span>拼命加载中...</span>
   </div>
   <div class="mermaid-content" style="visibility:hidden;height:0;overflow:hidden;"></div>
 </div>`;
      }
    });
  };
}
