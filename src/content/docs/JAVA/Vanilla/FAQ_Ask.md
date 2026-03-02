---
title: FAQ_Ask
---

## 命令行提示`You need to agree to the EULA in order to run the server. Go to eula.txt for more info.`后自动退出了

原因：服务器没有同意[EULA](https://www.minecraft.net/zh-hans/eula)，将`eula=false`改为`eula=true`并保存后即可正常运行。

```txt
#By chaging the setting below to TRUE you are indicating your agreement to our EULA (https://aka.ms/MinecraftEULA).
#(开服时间)
eula=false
```

## 登录时提示：`登录失败：无效会话（请尝试重启游戏及启动器）`

原因1：服务器可能配置为正版服/外置登陆服，而客户端使用离线模式加入。

### 解决方法

如果是正版服，就请玩家登录正版账户后连接服务器。

如果是离线服，配置`server.properties`，找到`online-mode=true`，将`online-mode=true`改为`online-mode=false`以关闭登陆验证

```properties
max-players=20
online-mode=true
enable-status=true
```

原因2：服务器无法访问 Mojang 正版验证服务器。
可能是你的网络或者 Mojang 的正版验证服务器出现问题（但是你的网络出现问题的概率更大）。

### 解决方法

使用网络代理、重启服务端或者等待一会在尝试


## 服务器没有皮肤

原因：服务器为离线服务器。

### 解决方法

请更换开启正版验证或者使用 Authlib-injector（就是皮肤站啦）。