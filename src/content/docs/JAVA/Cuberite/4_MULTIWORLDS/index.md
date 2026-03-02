---
title: 1 - 多世界概述

next: false
---

Cuberite支持多个世界。每个世界都有自己的`world.ini`文件。可以通过编辑`settings.ini`文件来添加其他的世界。下面的示例中对此进行了解释。

## 添加世界

``` ini
[Worlds]
DefaultWorld=world
World=world_nether
World=world_the_end
World=myNewWorld
World=HappyLand
```

在上面的示例中，向服务器添加了2个额外的世界。请注意，这将自动创建2个额外的配置文件，即`myNewWorld/world.ini`和`HappyLand/world.ini`。

## 维度（世界类型）

要创建一个下界类型的世界，您应该将_nether后缀添加到您的世界名称中，例如"`World=myHellishWorld_nether`"。这将创建一个预配置为下界的世界和`world.ini`。对于末地世界，亦是如此，将`_the_end`后缀添加到世界名称中。一旦创建了默认`world.ini`，你可以根据自己的喜好进行调教。

当不存在world.ini时，"_nether"和"_the_end"后缀才会被使用，并指导服务器选择要创建的默认world.ini的内容。当存在world.ini时，后缀就不再重要了，维度由每个world.ini中的选项来确定。后缀的处理方式仅仅只是为了与之前的Cuberite版本兼容。

剩下的部分将涉及连接世界和在它们之间旅行的内容。

# 2 - 使用命令进行穿越

如果你有`core.portal`权限，可以使用`/world <Worldname>`命令在不同世界之间进行穿越。要列出所有可用的世界，请在拥有`core.portal`权限的前提下使用`/worlds`命令来获取世界列表。

# 3 - 在没有插件的情况下连接世界

你可以通过修改文件`world.ini`来轻松地连接到一个世界，而无需使用额外的插件。但是，这种方法具有一定的限制：每个世界最多只能与两个不同的世界进行连接。

默认情况下，主世界与两个世界进行了连接：下界和末地。正常情况下，我们可以通过任何一个下界传送门进入下界，通过任何一个末地传送门进入末地。当然，你也可以调整下界和末地传送门的行为，并使每种传送门类型传送到你选择的世界。这可以通过编辑每个世界的world.ini文件中[LinkedWorlds]部分来实现。需要注意的是，使用这种方法，你无法通过两个同一类型的不同传送门将你传送到两个不同的世界。如果你想要这样的行为，你应该使用一个插件。请参阅下一小节。

# 4 - 使用插件连接世界

将世界连接在一起的最可配置的方法是使用专用插件，比如[Portal V2](https://forum.cuberite.org/thread-2157.html)。你可以在[插件库](https://forum.cuberite.org/forum-2.html)中找到更多的插件。

# 5 - BungeeCord

Cuberite具有实验性的BungeeCord支持。
