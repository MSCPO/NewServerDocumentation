---
title: 配置示例
---


## 超平坦世界

要生成一个超平坦世界，请将`[Generator]`部分字段的数值更改，方法如下：

``` ini
BiomeGen=Constant
ConstantBiome=Plains
HeightGen=Flat
FlatHeight=3
ShapeGen=HeightMap
SeaLevel=0
Finishers=Villages
```

## 空气世界

要生成一个只包含空气的世界，请将`[Generator]`部分字段的数值更改，方法如下：

``` ini
BiomeGen=Constant
ShapeGen=HeightMap
HeightGen=Flat
FlatHeight=0
CompositionGen=SameBlock
SameBlockType=air
SameBlockBedrocked=0
Finishers=
```
