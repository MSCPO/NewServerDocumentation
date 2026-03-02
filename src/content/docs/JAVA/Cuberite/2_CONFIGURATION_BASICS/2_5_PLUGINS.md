---
title: 5 - 插件
---


插件是Cuberite的重要定制方法。有许多不同的官方和第三方插件可用。

Cuberite插件是用Lua编写的，并通过一个[足够完整的API](https://api.cuberite.org/)与服务器进行交互。它们以易于编写的Lua语言编写，适合具备基本编程经验的任何人（也许可以通过AI编插件），因此，如果现有的插件不能满足您的需求，您可以轻松地编写自己的插件。如果您想学习如何编写自己的插件，请[查阅指南](https://api.cuberite.org/Writing-a-Cuberite-plugin.html)。

Cuberite有一个插件存储库，您可以在其中公开上传您的插件，并下载其他人发布的插件。

## 激活插件

在下载插件后，您需要将其放置在`Plugins`目录中。然后，您应该编辑`settings.ini`文件的`[Plugins]`部分并在其中添加一个新的插件条目。以下是添加名为`MyNewPlugin`的插件的示例。

``` ini
[Plugins]
Core=1
ChatLog=1
MyNewPlugin=1
MyDisabledPlugin=0
```

## 编写插件

要开始编写 Cuberite 插件，请阅读[Writing a Cuberite plugin](https://api.cuberite.org/Writing-a-Cuberite-plugin.html)。Cuberite 插件是用 Lua 编程语言编写的。Cuberite 有一个便于查阅且足够完整的 [API文档](https://api.cuberite.org/)。

## 你已经准备好了！

如果您已经读到这里，您现在应该有足够的知识来操作 Cuberite 服务器。本书的其余部分将更深入地介绍更多功能和进一步的配置选项。
