---
title: GENERATOR
---


指定此世界的生成器设置。这是自定义世界时最强大的工具。

:::caution

在修改此设置时，请注意已生成的世界与新生成的地形不会无缝连接。此外，请记住，使用其他生成器（例如Notchian生成器）创建的世界也无法无缝连接！

:::

:::note

生成器的选择将极大地影响您之后的选择！

这一部分还没有完全完成，因为其中有一些古老的生成代码。这需要进行更多的研究 - 12xx12

:::

| 变量 | 描述 | 默认值 |
| --- | --- | --- |
| Generator | 生成器类型：<ul><li><a href="#可组合生成器composable-generator">Composable</a></li><li>Noise3D</li></ul> | Composable |

## 可组合生成器(COMPOSABLE GENERATOR)

COMPOSABLE GENERATOR（可组合生成器）是一个非常强大的工具。您可以混合和匹配不同的生成方法并对其进行自定义。
它提供了许多不同的选项供您选择：

| 变量                | 描述                                                         | 默认值     |
|-------------------|------------------------------------------------------------|------------|
| [BiomeGen](#生物群系生成器biomegen) | 这个值将决定服务器选择生物群落的方式。                       | Grown      |
| [ShapeGen](#地形生成器shapegen) | 这个值决定了世界的生成方式。                               | BiomalNoise3D |
| [CompositionGen](#compositiongen) | 这个值决定了生成器填充实体方块的方式。                         | Biomal      |
| CompositionGenCacheSize | （无描述）                                                   | 64         |
| [Finishers](#修整器finishers) | （无描述）                                                   | [Default Finishers](#修整器finishers) |

## 生物群系生成器(BIOMEGEN)

您可以在[此处（生肉警告！）](http://cuberite.xoft.cz/docs/Generator.html#biomegen)更深入地阅读有关不同方法的信息

| 名称 | 描述 |
|---|---|
| Constant | 生成单一生物群的生成器。<br>选项：<figure><table><tbody><tr><td>ConstantBiome</td><td>决定生成的生物群。查看[可用生物群列表](https://api.cuberite.org/Globals.html#EMCSBiome)（不带前缀"bi"）。</td></tr></tbody></table></figure> |
| Checkerboard | 以棋盘格布局生成生物群。可以设置方块大小和使用的生物群。<br>选项：<figure><table><tbody><tr><td>CheckerBoardBiomes</td><td>生物群列表，用","分隔。可以选择通过添加":%integer%"为任何生物群设置频率。</td></tr><tr><td>CheckerboardBiomeSize</td><td>方块的大小。</td></tr></tbody></table></figure> |
| Voronoi | 选项：<figure><table><tbody><tr><td>VoronoiCellSize</td><td></td></tr><tr><td>VoronoiJitterSize</td><td></td></tr><tr><td>VoronoiOddRowOffset</td><td></td></tr></tbody></table></figure> |
| DistortedVoronoi | 选项：<figure><table><tbody><tr><td>DistortedVoronoiCellSize</td><td></td></tr><tr><td>DistortedVoronoiBiomes</td><td></td></tr></tbody></table></figure> |
| TwoLevel | 选项：<figure><table><tbody><tr><td>TwoLevelLargeCellSize</td><td></td></tr><tr><td>TwoLevelSmallCellSize</td><td></td></tr><tr><td>TwoLevelDistortXOctave1Freq</td><td></td></tr><tr><td>TwoLevelDistortXOctave1Amp</td><td></td></tr><tr><td>TwoLevelDistortXOctave2Freq</td><td></td></tr><tr><td>TwoLevelDistortXOctave2Amp</td><td></td></tr><tr><td>TwoLevelDistortXOctave3Amp</td><td></td></tr><tr><td>TwoLevelDistortZOctave1Freq</td><td></td></tr><tr><td>TwoLevelDistortZOctave1Amp</td><td></td></tr><tr><td>TwoLevelDistortZOctave2Freq</td><td></td></tr><tr><td>TwoLevelDistortZOctave2Amp</td><td></td></tr><tr><td>TwoLevelDistortZOctave3Freq</td><td></td></tr><tr><td>TwoLevelDistortZOctave3Amp</td><td></td></tr></tbody></table></figure> |
| MultiStepMap | 选项：<figure><table><tbody><tr><td>MultiStepMapOceanCellSize</td><td></td></tr><tr><td>MultiStepMapMushroomIslandSize</td><td></td></tr><tr><td>MultiStepMapRiverCellSize</td><td></td></tr><tr><td>MultiStepMapRiverWidth</td><td></td></tr><tr><td>MultiStepMapLandBiomeSize</td><td></td></tr></tbody></table></figure> |
| GrownProt | |
| Grown | |

## 地形生成器(SHAPEGEN)

Shape generator（地形生成器）决定了世界的形状。根据您的选择，它可以创建悬崖峭壁，也就是在顶部有两个方块面对空气的情况。

| 名称 | 描述 |
|---|---|
| BiomalNoise3D | 这个生成器通过将两个三维噪声的插值与垂直线性渐变相结合来生成地形形状。<br>选项：<figure><table><tbody><tr><td>SeaLevel</td><td>生成器生成的海平面可以通过调整其参数来控制。</td></tr><tr><td>BiomalNoise3DFrequencyX</td><td></td></tr><tr><td>BiomalNoise3DFrequencyY</td><td></td></tr><tr><td>BiomalNoise3DFrequencyZ</td><td></td></tr><tr><td>BiomalNoise3DBaseFrequencyX</td><td></td></tr><tr><td>BiomalNoise3DBaseFrequencyZ</td><td></td></tr><tr><td>BiomalNoise3DChoiceFrequencyX</td><td></td></tr><tr><td>BiomalNoise3DChoiceFrequencyY</td><td></td></tr><tr><td>BiomalNoise3DChoiceFrequencyZ</td><td></td></tr><tr><td>BiomalNoise3DAirThreshold</td><td></td></tr><tr><td>BiomalNoise3DNumChoiceOctaves</td><td></td></tr><tr><td>BiomalNoise3DNumDensityOctaves</td><td></td></tr><tr><td>BiomalNoise3DNumBaseOctaves</td><td></td></tr><tr><td>BiomalNoise3DBaseAmplitude</td><td>所有这些选项都将改变世界的面貌。它们会影响随机性，所以你不能100%确定它们会做什么。</td></tr></tbody></table></figure> |
| DistortedHeightmap | 选项：<figure><table><tbody><tr><td>SeaLevel</td><td>生成器生成的海平面可以通过调整其参数来控制。</td></tr><tr><td>DistortedHeightmapFrequencyX</td><td></td></tr><tr><td>DistortedHeightmapFrequencyY</td><td></td></tr><tr><td>DistortedHeightmapFrequencyZ</td><td></td></tr></tbody></table></figure> |
| End | 用于末地的形状生成器（ShapeGenerator）可以创建特定于末地的地形形状。<br>选项：<figure><table><tbody><tr><td>EndGenMainIslandSize</td><td>坐标0,0处的岛屿大小。此值也会影响主岛屿和较小岛屿之间虚空的大小。</td></tr><tr><td>EndGenIslandThickness</td><td>岛屿的高度。</td></tr><tr><td>EndGenIslandYOffset</td><td>岛屿开始生成时的Y坐标距离Y=0的距离。</td></tr><tr><td>EndGenMainFrequencyX</td><td rowspan="2">减小此值将导致X轴上的岛屿更小。</td></tr><tr><td>EndGenSmallFrequencyX</td></tr><tr><td>EndGenMainFrequencyY</td><td rowspan="2">	减小此值将导致地形更崎岖。</td></tr><tr><td>EndGenSmallFrequencyY</td></tr><tr><td>EndGenMainFrequencyZ</td><td rowspan="2">减小此值将导致Z轴上的岛屿更小。</td></tr><tr><td>EndGenSmallFrequencyZ</td></tr><tr><td>EndGenMainMinThreshold</td><td rowspan="2">减小此值将导致岛屿更小。</td></tr><tr><td>EndGenSmallMinThreshold</td></tr></tbody></table></figure> |
| HeightMap | 这是一个古老的遗留问题。服务器以前使用HeightGenerators而不是ShapeGenerators。这种用法已经被弃用，不会产生任何悬崖或类似的地形特征。这个属性名为"HeightGen"，并启用了相应的功能。 |
| Noise3D | 选项：<figure><table><tbody><tr><td>Noise3DHeightAmplification</td><td></td></tr><tr><td>Noise3DMidPoint</td><td></td></tr><tr><td>Noise3DFrequencyX</td><td></td></tr><tr><td>Noise3DFrequencyY</td><td></td></tr><tr><td>Noise3DFrequencyZ</td><td></td></tr><tr><td>Noise3DBaseFrequencyX</td><td></td></tr><tr><td>Noise3DBaseFrequencyY</td><td></td></tr><tr><td>Noise3DBaseFrequencyZ</td><td></td></tr><tr><td>Noise3DAirThreshold</td><td></td></tr><tr><td>Noise3DNumChoiceOctaves</td><td></td></tr><tr><td>Noise3DNumDensityOctaves</td><td></td></tr><tr><td>Noise3DNumBaseOctaves</td><td></td></tr><tr><td>Noise3DBaseAmplitude</td><td></td></tr></tbody></table></figure> |
| TwoHeights | 合并两个从相同选项生成的高度图<br>选项：<figure><table><tbody><tr><td>TwoHeightsFrequencyX</td><td></td></tr><tr><td>TwoHeightsFrequencyY</td><td></td></tr><tr><td>TwoHeightsFrequencyZ</td><td></td></tr></tbody></table></figure> |

## 地图高度(HEIGHT MAP)

HeightMap形状生成器的设置决定了生成的高度地图的特征和特点。

| 生成器类型 | 生成结果 |
| --- | --- |
| Flat |  |
| Classic |  |
| MinMax |  |
| Mountains |  |
| Steppy |  |
| Biomal |  |

## COMPOSITIONGEN

| 生成器类型 | 生成结果 |
| --- | --- |
| Biomal |  |
| BiomalNoise3D |  |
| Classic |  |
| DebugBiomes |  |
| DistortedHeightmap |  |
| End |  |
| Nether |  |
| Noise3D |  |
| SameBlock | 用相同的块填充所有的东西。<br>Fills everything with the same Block. |

## 修整器(FINISHERS)

| 修整器类型 | 修整器功能 | 选项 |
| --- | --- | --- |
| RoughRavines | 创建大型山沟。 |  |
| WormNestCaves | 创建大型山沟。 |  |
| WaterLakes | 创建大型山沟。 |  |
| WaterSprings | 创建大型山沟。 |  |
| LavaLakes | 创建大型山沟。 |  |
| LavaSprings | 创建大型山沟。 |  |
| OreNests | 创建大型山沟。 |  |
| Mineshafts | 创建大型山沟。 |  |
| Trees | 创建大型山沟。 |  |
| Villages | 创建大型山沟。 |  |
| Trees | 创建大型山沟。 |  |
| Trees | 创建大型山沟。 |  |
| Trees | 创建大型山沟。 |  |

| 修整器类型 | 函数功能 | 选项 |
| --- | --- | --- |
| RoughRavines | 创建巨大的沟壑。 | <figure><table><tbody><tr><td>RoughRavinesGridSize</td></tr><tr><td>RoughRavinesMaxOffset</td></tr><tr><td>RoughRavinesMaxSize</td></tr><tr><td>RoughRavinesMinSize</td></tr><tr><td>RoughRavinesMaxCenterWidth</td></tr><tr><td>RoughRavinesMinCenterWidth</td></tr><tr><td>RoughRavinesMaxRoughness</td></tr><tr><td>RoughRavinesMinRoughness</td></tr><tr><td>RoughRavinesMaxFloorHeightEdge</td></tr><tr><td>RoughRavinesMinFloorHeightEdge</td></tr><tr><td>RoughRavinesMaxFloorHeightCenter</td></tr><tr><td>RoughRavinesMinFloorHeightCenter</td></tr><tr><td>RoughRavinesMaxCeilingHeightEdge</td></tr><tr><td>RoughRavinesMinCeilingHeightEdge</td></tr><tr><td>RoughRavinesMaxCeilingHeightCenter</td></tr><tr><td>RoughRavinesMinCeilingHeightCenter</td></tr></tbody></table></figure> |
| WormNestCaves | 创建穿过地面的小洞穴。 | <figure><table><tbody><tr><td>WormNestCavesSize</td></tr><tr><td>WormNestCavesGrid</td></tr><tr><td>WormNestMaxOffset</td></tr></tbody></table></figure> |
| WaterLakes | 用于在海平面上</br>创建水域湖泊。 |<figure><table><tbody><tr><td>WaterLakesProbability</td></tr></tbody></table></figure> |
| WaterSprings | 创建单方块的水源泉。 |  |
| LavaLakes | 创建海平面上的岩浆湖。 | <figure><table><tbody><tr><td>LavaLakesProbability</td></tr></tbody></table></figure> |
| LavaSprings | 创建单方块的岩浆泉。 |  |
| OreNests | 在地下生成矿石。 |  |
| Mineshafts | 创建矿井。 | <figure><table><tbody><tr><td>MineShaftsGridSize</td></tr><tr><td>MineShaftsMaxOffset</td></tr><tr><td>MineShaftsMaxSystemSize</td></tr><tr><td>MineShaftsChanceCorridor</td></tr><tr><td>MineShaftsChanceCrossing</td></tr><tr><td>MineShaftsChanceStaircase</td></tr></tbody></table></figure> |
| Trees | 创建树木（包括树状结构，如蘑菇）。 |  |
| Villages | 创建村庄。 | <figure><table><tbody><tr><td>VillageGridSize</td></tr><tr><td>VillageMaxOffset</td></tr><tr><td>VillageMaxDepth</td></tr><tr><td>VillageMaxSize</td></tr><tr><td>VillageMinDensity</td></tr><tr><td>VillageMaxDensity</td></tr><tr><td>VillagePrefabs</td><td>There are multiple Villages available:<ul><li>AlchemistVillage</li><li>JapaneseVillage</li><li>PlainsVillage</li><li>SandVillage</li><li>SandFlatRoofVillage</li></ul></td></tr></tbody></table></figure> |
| SinglePieceStructures | 创建由单个方块组成的结构。 | 您可以选择:<ul><li>JungleTemple</li><li>WitchHut</li><li>DesertPyramid</li><li>DesertWell</li></ul>您可以通过添加SinglePieceStructures:%YourChoices%来选择这些选项，并以“\|”分割。<br>如果你想添加自定义模型，你需要在`Prefabs/SinglePieceStructures`文件夹中添加它们，并将文件名添加到列表中，不包括文件结尾。 |
| TallGrass | 在世界中添加高草和蕨类植物。 |  |
| SprinkleFoliage | 生成小花和类似方块。 |  |
| Ice | 在世界中添加冰块。 |  |
| Snow | 在世界中添加雪。 |  |
| Lilypads | 在世界中添加睡莲叶。 |  |
| BottomLava | 在世界中添加地壳岩浆。 | <figure><table><tbody><tr><td>BottomLavaLevel</td></tr></tbody></table></figure> |
| DeadBushes |  |  |
| NaturalPatches |  |  |
| PreSimulator | 在进行点生成时，计算不同块的行为而非手动勾选，以提升性能。 | <br>PreSimulatorFallingBlocks=1<br>PreSimulatorWater=1<br>PreSimulatorLava=1 |
| Animals |  |  |
| OverworldClumpFlowers | 在末地生成花 |  |
