// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';
import starlightImageZoom from 'starlight-image-zoom';
import starlightLinksValidator from 'starlight-links-validator';
import starlightHeadingBadges from 'starlight-heading-badges';
import starlightSidebarTopics from 'starlight-sidebar-topics';
import starlightAnnouncement from 'starlight-announcement';
import starlightBlog from 'starlight-blog';
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
				ThemeSelect: './src/components/ThemeSelect.astro',
			},
			customCss: ['./src/styles/custom.css'],
			plugins: [
				starlightImageZoom(),
				starlightLinksValidator(),
				starlightHeadingBadges(),
				starlightBlog({
					title: '番外篇',
					postsPerPage: 10,
					recentPostsCount: 10,
					navLink: 'none',
					rss: false,
				}),
				starlightAnnouncement({
					announcements: [
						{
							id: 'migration-notice',
							content: {
								'zh-CN': '⚠️ 本站正在迁移中，部分数据未对齐原站且数据可能陈旧，请谅解。',
							},
							variant: 'caution',
						},
					],
				}),
				starlightSidebarTopics([
					{
						id: 'java',
						label: 'Java篇',
						link: '/java/',
						icon: '/assets/ronglu.webp',
						badge: { text: '推荐', variant: 'success' },
						items: [
							{ label: '概览', link: '/java/' },
							{
								label: 'Vanilla(原版)',
								items: [
									{ label: '前言', link: '/java/vanilla/' },
									{ label: '快速开始', link: '/java/vanilla/quickstart/' },
									{
										label: '进阶',
										items: [
											{ label: '配置文件', link: '/java/vanilla/advanced/config/' },
										],
									},
									{ label: '常见问题', link: '/java/vanilla/faq/' },
									{ label: 'FAQ_Ask', link: '/java/vanilla/faq_ask/' },
								],
							},
							{
								label: 'Mod 服',
								items: [
									{ label: '前言', link: '/java/mod/' },
									{
										label: 'Forge / NeoForge',
										items: [
											{ label: '开服教程', link: '/java/mod/forge_neoforge/' },
											{ label: '常见问题', link: '/java/mod/forge_neoforge/faq/' },
										],
									},
									{
										label: 'Fabric / Quilt',
										items: [
											{ label: '快速开始', link: '/java/mod/farbic_quilt/quickstart/' },
											{ label: '进阶', link: '/java/mod/farbic_quilt/advanced/' },
											{ label: '常见问题', link: '/java/mod/farbic_quilt/faq/' },
											{ label: '注意事项', link: '/java/mod/farbic_quilt/note/' },
										],
									},
								],
							},
							{
								label: 'Sponge',
								items: [
									{ label: '前言', link: '/java/sponge/' },
									{ label: 'SpongeForge', link: '/java/sponge/spongeforge/' },
									{ label: 'SpongeVanilla', link: '/java/sponge/spongevanilla/' },
								],
							},
							{
								label: 'Spigot系',
								items: [
									{ label: '前言', link: '/java/spigotseries/' },
									{
										label: '开服教程',
										items: [
											{ label: '快速开始', link: '/java/spigotseries/quickstart/' },
											{ label: '进阶', link: '/java/spigotseries/advanced/' },
										],
									},
									{ label: '常见问题', link: '/java/spigotseries/faq/' },
								],
							},
							{
								label: 'Cuberite',
								items: [
									{ label: '前言', link: '/java/cuberite/' },
									{
										label: '简介',
										items: [
											{ label: '介绍', link: '/java/cuberite/0_introduction/0_1_introduction/' },
											{ label: '什么是 Cuberite', link: '/java/cuberite/0_introduction/0_2_what_is_cuberite/' },
											{ label: '历史', link: '/java/cuberite/0_introduction/0_3_history/' },
										],
									},
									{
										label: '安装',
										items: [
											{ label: '预编译版本', link: '/java/cuberite/1_installing/1_1_pre-compiled_builds/' },
											{ label: '自行编译', link: '/java/cuberite/1_installing/1_2_compiling_cuberite_yourself/' },
											{ label: '运行 Cuberite', link: '/java/cuberite/1_installing/1_3_running_cuberite/' },
										],
									},
									{
										label: '基础配置',
										items: [
											{ label: '配置概述', link: '/java/cuberite/2_configuration_basics/2_1_configuration_overview/' },
											{ label: '权限', link: '/java/cuberite/2_configuration_basics/2_2_permissions/' },
											{ label: 'WebAdmin', link: '/java/cuberite/2_configuration_basics/2_3_webadmin/' },
											{ label: '世界', link: '/java/cuberite/2_configuration_basics/2_4_worlds/' },
											{ label: '插件', link: '/java/cuberite/2_configuration_basics/2_5_plugins/' },
										],
									},
									{
										label: '配置 world.ini',
										items: [
											{ label: '什么是 world.ini', link: '/java/cuberite/3_configuring_world_ini/3_1_what_is_world-ini/' },
											{
												label: '配置详解',
												items: [
													{ label: 'General', link: '/java/cuberite/3_configuring_world_ini/3_2_general/' },
													{ label: 'Broadcasting', link: '/java/cuberite/3_configuring_world_ini/3_3_broadcasting/' },
													{ label: 'SpawnPosition', link: '/java/cuberite/3_configuring_world_ini/3_4_spawnposition/' },
													{ label: 'Storage', link: '/java/cuberite/3_configuring_world_ini/3_5_storage/' },
													{ label: 'Plants', link: '/java/cuberite/3_configuring_world_ini/3_6_plants/' },
													{ label: 'Physics', link: '/java/cuberite/3_configuring_world_ini/3_7_physics/' },
													{ label: 'Mechanics', link: '/java/cuberite/3_configuring_world_ini/3_8_mechanics/' },
													{ label: 'Monsters', link: '/java/cuberite/3_configuring_world_ini/3_9_monsters/' },
													{ label: 'Weather', link: '/java/cuberite/3_configuring_world_ini/3_10_weather/' },
													{ label: 'Generator', link: '/java/cuberite/3_configuring_world_ini/3_11_generator/' },
													{ label: 'Other', link: '/java/cuberite/3_configuring_world_ini/3_12_other/' },
													{ label: '示例配置', link: '/java/cuberite/3_configuring_world_ini/3_13_example_configurations/' },
												],
											},
										],
									},
									{ label: '多世界', link: '/java/cuberite/4_multiworlds/' },
									{ label: '常见问题', link: '/java/cuberite/faq/' },
								],
							},
						],
					},
					{
						id: 'bedrock',
						label: '基岩篇',
						link: '/bedrock/',
						icon: '/assets/jiyan.webp',
						items: [
							{ label: '概览', link: '/bedrock/' },
							{
								label: 'BDS（原版）',
								items: [
									{ label: '前言', link: '/bedrock/bds/' },
									{ label: '快速开始', link: '/bedrock/bds/quickstart/' },
									{
										label: '进阶',
										items: [
											{ label: '配置文件', link: '/bedrock/bds/advanced/config/' },
										],
									},
									{ label: '常见问题', link: '/bedrock/bds/faq/' },
								],
							},
						],
					},
					{
						id: 'extra',
						label: '番外篇',
						link: '/blog/',
						icon: '/assets/chalkboard.webp',
						items: [
							{ label: '如何贡献', link: '/contribute/' },
						],
					},
					{
						id: 'progress',
						label: '编写进度',
						icon: 'pencil',
						link: '/progress/',
						items: [
							{ label: '编写进度', link: '/progress/' },
						],
					},
				], {
					exclude: ['/'],
					topics: {
						java: ['/java', '/java/**/*'],
						bedrock: ['/bedrock', '/bedrock/**/*'],
						extra: ['/blog', '/blog/**/*', '/contribute', '/contribute/**/*'],
						progress: ['/progress', '/progress/**/*'],
					},
				}),
			],
		}),
		compress(),
		sitemap(),
	],
});
