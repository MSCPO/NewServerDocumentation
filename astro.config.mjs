// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';
import starlightImageZoom from 'starlight-image-zoom';
import starlightLinksValidator from 'starlight-links-validator';
import starlightHeadingBadges from 'starlight-heading-badges';
import starlightSidebarTopics from 'starlight-sidebar-topics';
import compress from '@playform/compress';
import { remarkMermaid } from './src/plugins/remark-mermaid.mjs';

export default defineConfig({
	site: 'https://docs.mscaome.top',
	trailingSlash: 'always',
	markdown: {
		remarkPlugins: [remarkMermaid],
	},
	integrations: [
		starlight({
			title: {
				'zh-CN': 'MSCPO开服文档',
			},
			description: '由Minecraft服务器集体宣传组织维护的开服文档',
			logo: {
				src: './src/assets/favicon.png',
				replacesTitle: true,
			},
			favicon: '/favicon.png',
			lastUpdated: true,
			pagination: true,
			locales: {
				root: {
					label: '简体中文',
					lang: 'zh-CN',
				},
			},
			defaultLocale: 'root',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/MSCPO/ServerDocumentation' },
			],
			editLink: {
				baseUrl: 'https://github.com/MSCPO/ServerDocumentation/edit/main/docs/',
			},
			head: [
				{
					tag: 'meta',
					attrs: { name: 'darkreader-lock' },
				},
				{
					tag: 'style',
					content: `@media (prefers-reduced-motion: no-preference) { @view-transition { navigation: auto; } }`,
				},
			],
			components: {
				Head: './src/components/Head.astro',
				Search: './src/components/Search.astro',
				MarkdownContent: './src/components/MarkdownContent.astro',
				Sidebar: './src/components/CustomSidebar.astro',
				PageTitle: './src/components/PageTitle.astro',
				Footer: './src/components/CustomFooter.astro',
			},
			customCss: ['./src/styles/custom.css'],
			plugins: [
				starlightImageZoom(),
				starlightLinksValidator(),
				starlightHeadingBadges(),
				starlightSidebarTopics([
					{
						id: 'java',
						label: 'Java',
						link: '/JAVA/Vanilla/',
						icon: '/assets/ronglu.webp',
						badge: { text: '推荐', variant: 'success' },
						items: [
							{
								label: 'Vanilla(原版)',
								items: [
									{ label: '前言', link: '/JAVA/Vanilla/' },
									{ label: '快速开始', link: '/JAVA/Vanilla/QuickStart' },
									{
										label: '进阶',
										items: [
											{ label: '配置文件', link: '/JAVA/Vanilla/Advanced/config' },
										],
									},
									{ label: '常见问题', link: '/JAVA/Vanilla/FAQ' },
								],
							},
							{
								label: 'Mod 服',
								items: [
									{ label: '前言', link: '/JAVA/Mod/' },
									{
										label: 'Forge / NeoForge',
										items: [
											{ label: '开服教程', link: '/JAVA/Mod/Forge_NeoForge/' },
											{ label: '常见问题', link: '/JAVA/Mod/Forge_NeoForge/FAQ' },
										],
									},
									{
										label: 'Fabric / Quilt',
										items: [
											{ label: '快速开始', link: '/JAVA/Mod/Farbic_Quilt/QuickStart' },
											{ label: '进阶', link: '/JAVA/Mod/Farbic_Quilt/Advanced' },
											{ label: '常见问题', link: '/JAVA/Mod/Farbic_Quilt/FAQ' },
											{ label: '注意事项', link: '/JAVA/Mod/Farbic_Quilt/Note' },
										],
									},
								],
							},
							{
								label: 'Sponge',
								items: [
									{ label: '前言', link: '/JAVA/Sponge/' },
									{ label: 'SpongeForge', link: '/JAVA/Sponge/SpongeForge/' },
									{ label: 'SpongeVanilla', link: '/JAVA/Sponge/SpongeVanilla/' },
								],
							},
							{
								label: 'Spigot系',
								items: [
									{ label: '前言', link: '/JAVA/SpigotSeries/' },
									{
										label: '开服教程',
										items: [
											{ label: '快速开始', link: '/JAVA/SpigotSeries/QuickStart' },
											{ label: '进阶', link: '/JAVA/SpigotSeries/Advanced' },
										],
									},
									{ label: '常见问题', link: '/JAVA/SpigotSeries/FAQ' },
								],
							},
							{
								label: 'Cuberite',
								items: [
									{ label: '前言', link: '/JAVA/Cuberite/' },
									{
										label: '简介',
										items: [
											{ label: '介绍', link: '/JAVA/Cuberite/0_INTRODUCTION/0_1_Introduction' },
											{ label: '什么是 Cuberite', link: '/JAVA/Cuberite/0_INTRODUCTION/0_2_What_is_Cuberite' },
											{ label: '历史', link: '/JAVA/Cuberite/0_INTRODUCTION/0_3_History' },
										],
									},
									{
										label: '安装',
										items: [
											{ label: '预编译版本', link: '/JAVA/Cuberite/1_INSTALLING/1_1_Pre-Compiled_Builds' },
											{ label: '自行编译', link: '/JAVA/Cuberite/1_INSTALLING/1_2_Compiling_Cuberite_Yourself' },
											{ label: '运行 Cuberite', link: '/JAVA/Cuberite/1_INSTALLING/1_3_Running_Cuberite' },
										],
									},
									{
										label: '基础配置',
										items: [
											{ label: '配置概述', link: '/JAVA/Cuberite/2_CONFIGURATION_BASICS/2_1_CONFIGURATION_OVERVIEW' },
											{ label: '权限', link: '/JAVA/Cuberite/2_CONFIGURATION_BASICS/2_2_PERMISSIONS' },
											{ label: 'WebAdmin', link: '/JAVA/Cuberite/2_CONFIGURATION_BASICS/2_3_WEBADMIN' },
											{ label: '世界', link: '/JAVA/Cuberite/2_CONFIGURATION_BASICS/2_4_WORLDS' },
											{ label: '插件', link: '/JAVA/Cuberite/2_CONFIGURATION_BASICS/2_5_PLUGINS' },
										],
									},
									{
										label: '配置 world.ini',
										items: [
											{ label: '什么是 world.ini', link: '/JAVA/Cuberite/3_CONFIGURING_WORLD_INI/3_1_What_is_world-ini' },
											{
												label: '配置详解',
												items: [
													{ label: 'General', link: '/JAVA/Cuberite/3_CONFIGURING_WORLD_INI/3_2_General' },
													{ label: 'Broadcasting', link: '/JAVA/Cuberite/3_CONFIGURING_WORLD_INI/3_3_Broadcasting' },
													{ label: 'SpawnPosition', link: '/JAVA/Cuberite/3_CONFIGURING_WORLD_INI/3_4_SpawnPosition' },
													{ label: 'Storage', link: '/JAVA/Cuberite/3_CONFIGURING_WORLD_INI/3_5_Storage' },
													{ label: 'Plants', link: '/JAVA/Cuberite/3_CONFIGURING_WORLD_INI/3_6_Plants' },
													{ label: 'Physics', link: '/JAVA/Cuberite/3_CONFIGURING_WORLD_INI/3_7_Physics' },
													{ label: 'Mechanics', link: '/JAVA/Cuberite/3_CONFIGURING_WORLD_INI/3_8_Mechanics' },
													{ label: 'Monsters', link: '/JAVA/Cuberite/3_CONFIGURING_WORLD_INI/3_9_Monsters' },
													{ label: 'Weather', link: '/JAVA/Cuberite/3_CONFIGURING_WORLD_INI/3_10_Weather' },
													{ label: 'Generator', link: '/JAVA/Cuberite/3_CONFIGURING_WORLD_INI/3_11_Generator' },
													{ label: 'Other', link: '/JAVA/Cuberite/3_CONFIGURING_WORLD_INI/3_12_Other' },
													{ label: '示例配置', link: '/JAVA/Cuberite/3_CONFIGURING_WORLD_INI/3_13_Example_Configurations' },
												],
											},
										],
									},
									{ label: '多世界', link: '/JAVA/Cuberite/4_MULTIWORLDS/' },
									{ label: '常见问题', link: '/JAVA/Cuberite/FAQ' },
								],
							},
						],
					},
					{
						id: 'bedrock',
						label: '基岩',
						link: '/Bedrock/BDS/',
						icon: '/assets/jiyan.webp',
						items: [
							{
								label: 'BDS（原版）',
								items: [
									{ label: '前言', link: '/Bedrock/BDS/' },
									{ label: '快速开始', link: '/Bedrock/BDS/QuickStart' },
									{
										label: '进阶',
										items: [
											{ label: '配置文件', link: '/Bedrock/BDS/Advanced/config' },
										],
									},
									{ label: '常见问题', link: '/Bedrock/BDS/FAQ' },
								],
							},
						],
					},
					{
						id: 'extra',
						label: '番外篇',
						link: '/Extra/',
						icon: '/assets/chalkboard.webp',
						items: [
							{ label: '番外篇', link: '/Extra/' },
							{ label: '如何贡献', link: '/Contribute/' },
						],
					},
					{
						id: 'progress',
						label: '编写进度',
						icon: 'pencil',
						link: '/Progress',
						items: [
							{ label: '编写进度', link: '/Progress' },
						],
					},
				], {
					exclude: ['/'],
					topics: {
						java: ['/java', '/java/**/*'],
						bedrock: ['/bedrock', '/bedrock/**/*'],
						extra: ['/extra', '/extra/**/*', '/contribute', '/contribute/**/*'],
						progress: ['/progress', '/progress/**/*'],
					},
				}),
			],
		}),
		compress(),
		sitemap(),
	],
});
