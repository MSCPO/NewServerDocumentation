# MSCPO开服文档

我的世界开服教程（新手向），涵盖Java版和基岩版不同服务端的搭建指南。

这个项目是从[老项目](https://github.com/MSCPO/ServerDocumentation)迁移过来的，主要是把Vitepress换成了Astro，顺便整理了一下内容结构。老项目用Netlify托管，现在我们有了自己的域名。

## 在线阅读

- https://mcs.mscpo.org/
- https://mcs.mscpo.com/

## 本地运行

> [!NOTE]
> 请先安装[Node.js](https://nodejs.org/zh-cn) 18+ 和 [pnpm](https://pnpm.io/)

1. 克隆仓库
   ```
   git clone https://github.com/MSCPO/NewServerDocumentation.git
   ```
2. 进入项目目录
   ```
   cd NewServerDocumentation
   ```
3. 安装依赖
   ```
   pnpm install
   ```
4. 启动开发服务器
   ```
   pnpm dev
   ```
5. 浏览器打开 http://localhost:4321/

## 项目结构

```
.
├── public/          # 静态资源（图片、字体等）
├── src/
│   ├── assets/      # 项目资源
│   ├── components/  # 自定义组件
│   ├── content/
│   │   └── docs/    # 文档内容（Markdown/MDX）
│   ├── styles/      # 自定义样式
│   └── content.config.ts
├── astro.config.mjs # Astro配置
├── package.json
└── tsconfig.json
```

文档主要在 `src/content/docs/` 目录下，按Java版和基岩版分类组织。

## 文档贡献者

<a href="https://github.com/MSCPO/NewServerDocumentation/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=MSCPO/NewServerDocumentation" alt="Contributors"/>
</a>

## 技术栈

- [Astro](https://astro.build/) + [Starlight](https://starlight.astro.build/)
- [pnpm](https://pnpm.io/) 包管理
- 部署在 [Cloudflare Pages](https://pages.cloudflare.com/)
