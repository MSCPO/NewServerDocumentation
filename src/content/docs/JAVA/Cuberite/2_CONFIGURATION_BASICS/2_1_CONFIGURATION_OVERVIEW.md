---
title: 1 - 配置概述
---


Cuberite可以通过编辑各种文件来进行配置。以下是所有这些文件的列表：

## `SETTINGS.INI`

主配置文件，其中包含服务器基础的配置变量。

## `WEBADMIN.INI`

允许您调整Web管理界面的配置，该界面默认可通过以下地址访问：`http://localhost:8080` 或 `http://<服务器IP地址>:8080`。

## `<WORLD NAME>/WORLD.INI`

该文件配置特定世界的各个方面。您可以在这里选择游戏模式。请参阅[GameMode](/java/cuberite/3_configuring_world_ini/3_2_general/)。请注意，每个世界都有自己的`world.ini`文件，存储在`<World name>/world.ini`中。

## `MONSTERS.INI`

允许您调整怪物的行为。

## `MOTD.TXT`

欢迎信息（Message of the Day），玩家加入服务器时会显示该信息。

## `CRAFTING.TXT`、`BREWING.TXT`、`FURNACE.TXT`

这三个文件允许您调整合成、酿造和熔炉配方。

## `PLUGINS/...`

许多插件都有自己的配置文件。例如，WorldEdit的配置文件是`plugins/WorldEdit/config.cfg`。

## `FAVICON.PNG`

这是在Minecraft服务器列表中显示的图标。您可以用自己的图标替换它。图标的尺寸必须为64x64。

## `ITEMS.INI`

编辑物品ID。除非您知道自己在做什么，否则可能不应该编辑此文件。

:::tip
在所有.ini文件中，以;开头的行是注释，在所有.txt文件中，以#开头的行是注释。这意味着以`;`或`#`开头的任何行都不会被解释为配置，而是用于向文件添加注释或备注。服务器在读取配置文件时会忽略这些注释行。
:::
