---
title: 配置文件
---

server.properties是储存BDS所有设置的文件。

在编辑server.properties时，行之间的顺序可以打乱，但文件结构不能改变。每一行的等号之前的文本为变量名，你不应该修改这些内容。等号后面为变量的值，你可以按照规则自行编辑。以#开头的行为注释，添加、修改或移除注释行不会对游戏造成影响。

详见[服务端配置文件格式](https://zh.minecraft.wiki/w/%E6%9C%8D%E5%8A%A1%E7%AB%AF%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E6%A0%BC%E5%BC%8F)

非常感谢[Bedrock Dedicated Server 服务器配置文件 server.properties 汉化详解](https://www.minebbs.com/threads/bedrock-dedicated-server-server-properties.32021/)提供了丰富的汉化内容

```properties title="server.properties"
# 服务器的名称/Motd
server-name=Dedicated Server
# 玩家默认游戏模式 (survival, creative, adventure, spectator)
gamemode=survival
# 强制玩家游戏模式为默认游戏模式
force-gamemode=false
# 世界的游戏难度 (peaceful, easy, normal, hard)
difficulty=easy
# 是否启用作弊
allow-cheats=false
# 服务器最大玩家数
max-players=10
# 是否启用xbox账号验证
online-mode=true
# 是否开启白名单
allow-list=false
# 服务器的IPv4端口
server-port=19132
# 服务器的IPv6端口
server-portv6=19133
# 局域网是否显示服务器
enable-lan-visibility=true
# 最大可视距离（区块）
view-distance=32
# 加载区块范围 (4-12)
tick-distance=4
# 挂机多久后会被踢（分钟，0为关闭）
player-idle-timeout=30
# 服务器最大线程（0为不限制）
max-threads=8
# 服务器存档名称
level-name=Bedrock level
# 存档种子号（留空随机）
level-seed=
# 玩家默认权限等级 (visitor, member, operator)
default-player-permission-level=member
# 强制客户端使用服务端的材质包
texturepack-required=false
# 报错内容写入到日志文件
content-log-file-enabled=false
# 确定要压缩的原始网络有效负载的最小大小
compression-threshold=1
# 网络压缩算法 (zlib, snappy)
compression-algorithm=zlib
# 服务端移动鉴权 (client-auth, server-auth, server-auth-with-rewind)
server-authoritative-movement=server-auth
# 对客户端移动的容忍度
player-position-acceptance-threshold=0.5
# 玩家攻击方向和视线方向的最大差值
player-movement-action-direction-threshold=0.85
# 客户端挖掘鉴权
server-authoritative-block-breaking=false
# 服务器鉴权区块选取范围标量
server-authoritative-block-breaking-pick-range-scalar=1.5
# 聊天限制 (None, Dropped, Disabled)
chat-restriction=None
# 服务器将通知客户端忽略其他玩家
disable-player-interaction=false
# 客户端区块预加载
client-side-chunk-generation-enabled=true
# 异步发送区块数据包
block-network-ids-are-hashes=true
# 内部使用
disable-persona=false
# 禁用玩家自定义皮肤
disable-custom-skins=false
# 客户端生成区块比例 (Disabled或0.1-1.0)
server-build-radius-ratio=Disabled
# 允许脚本调试connect命令
allow-outbound-script-debugging=false
# 允许脚本调试listen命令
allow-inbound-script-debugging=false
# 调试器监听端口
force-inbound-debug-port=19144
# 脚本调试器自动附加模式 (disabled, connect, listen)
script-debugger-auto-attach=disabled
# 脚本调试器自动连接地址
script-debugger-auto-attach-connect-address=localhost:19144
# 启用脚本调试器看门狗
script-watchdog-enable=true
# 启用看门狗异常处理
script-watchdog-enable-exception-handling=true
# 异常未处理时关闭服务器
script-watchdog-enable-shutdown=true
# 挂起时抛出临界异常
script-watchdog-hang-exception=true
# 单次挂起的看门狗阈值
script-watchdog-hang-threshold=10000
# 单刻度尖峰阈值
script-watchdog-spike-threshold=100
# 多ticks慢速脚本临界值
script-watchdog-slow-threshold=10
# 内存使用警告阈值（MB）
script-watchdog-memory-warning=100
# 内存使用限制阈值（MB）
script-watchdog-memory-limit=250
```
