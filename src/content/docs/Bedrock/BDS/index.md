---
title: 什么是Bedrock Dedicated Server端？

---

Bedrock Dedicated Server（下文简称BDS）是 Minecraft 的官方原生服务端，由 Mojang 官方发布。 它旨在提供最原始的 Minecraft 游戏体验，原生仅支持使用行为包作为扩展加载，并未提供Java版服务器中常见的插件系统。如果需要使用插件，请考虑使用第三方注入器，例如[LeviLamina](https://github.com/LiteLDev/LeviLamina)或者[Endstone](https://github.com/EndstoneMC/Endstone)。

# 官方推荐最低硬件​

处理器：Intel Core i3-3210 | AMD A8 7600 APU 或同等配置  
运行内存：4 GB RAM  
硬盘空间：180 MB 到 1 GB 可用空间  
网络：宽带网络连接  
操作系统：Bedrock 版专属服务器的 Linux 版本需要 Ubuntu 20.04（LTS 版本）或更高版本。不支持其他发行版。  

Bedrock 版专属服务器的 Windows 版本需要满足以下任一版本：
- Windows 10 10.0.15063 版本或更高版本
- Windows 服务器 2016 版本或更高版本


ARM处理器？抱歉，官方只提供了x86 64位的服务端，如果非要在ARM处理器上运行，请考虑[box64](https://github.com/ptitSeb/box64)

# BDS的特性
- 完全支持原生 Minecraft: Bedrock Edition 的所有特性，包括资源包、行为包、世界生成等
- Mojang官方支持
- 性能好（吗？）

根据以上特性，可以看到BDS对于原生兼容性最好，但是，由于官方并未提供插件系统，所以BDS的扩展性较差，如果需要使用插件，可以考虑使用第三方注入器，例如[LeviLamina](https://github.com/LiteLDev/LeviLamina)或者[Endstone](https://github.com/EndstoneMC/Endstone)

BDS允许除了来自Nintendo Switch的玩家加入服务器。Xbox One用户只能通过LAN连接方式加入服务器。与使用TCP端口的Java版不同，BDS使用UDP端口。IPv4的默认端口为19132，IPv6的默认端口为19133。这些可以在server.properties中更改。