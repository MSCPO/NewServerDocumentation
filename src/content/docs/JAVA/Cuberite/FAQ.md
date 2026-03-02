---
title: 常见问题
---


此指南将帮助您快速修复问题。

## 登录时提示：`Failed to authenticate account!`

原因：服务器可能配置为正版服/外置登陆服，而客户端使用离线模式加入。

### 解决方法

配置`settings.ini`，找到`[Authentication]`节点，将`Authenticate=1`改为`Authenticate=0`以关闭登陆验证

```ini
[Authentication]
Authenticate=1
AllowBungeeCord=0
OnlyAllowBungeeCord=0
ProxySharedSecret=
Server=sessionserver.mojang.com
Address=/session/minecraft/hasJoined?username=%USERNAME%&serverId=%SERVERID%
```

## 服务端提示：`The webadmin is enabled but has no users configured. To add new users, edit webadmin.ini`

原因：服务器可能没有为WebAdmin服务器管理网页配置账户。
>注：这并不影响服务器的正常运行，但配置后更便于维护服务器。

### 解决方法

添加一个 WebAdmin 账户，详见 [基础配置/WEBADMIN](/java/cuberite/2_configuration_basics/2_3_webadmin/)

## 服务端提示：`Cannot open file "Protocol/1.13/base.recipes.txt", no recipe book recipes will be available!`&`Cannot open file "Protocol/1.14.4/base.recipes.txt", no recipe book recipes will be available!`

原因：Cuberite对于 1.13和1.14.4 的版本支持尚不完全。
>注：这并不影响服务器的正常运行

### 解决方法

解决方法是有的，但是在解决这个报错后你会迎来更多的警告（  
如果你执意要解决这个报错的话，你可以把目录“Protocol/1.13/”和“Protocol/1.14.4”下的“base.btp.txt”改为“base.recipes.txt”  
如果你不想看到刷满屏的警告，那么只能等待更新，Cuberite 计划添加 1.13和1.14.4 版本支持，但是其实现并不完全 ~~烂尾力~~(悲)  

## 服务端提示：`Invalid biome ("BambooJungle") specified in AllowedBiomes in cubeset file Prefabs\SinglePieceStructures\JungleTemple.cubeset. Skipping the biome.`

原因：`BambooJungle`和`BambooJungleHills`是1.14版本更新加入的群落，但是Cuberite对于 1.13和1.14.4 的版本支持尚不完全，所以同上。
>注：这并不影响服务器的正常运行
