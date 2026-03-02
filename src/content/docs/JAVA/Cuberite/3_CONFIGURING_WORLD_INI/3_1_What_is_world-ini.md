---
title: 1 - 什么是 world.ini
---


在Cuberite中，您可以配置个别世界的许多不同方面。配置选项包括：

- 更改世界的生成点。
- 更改世界的游戏模式。
- 更改世界生成器，以改变生成的地形。
- 更改在世界中生成的植物类型。
- 更改允许生成的动物类型。

还有许多其他可以做的事情，这只是一些示例。
所有这些配置都可以通过一个文件完成。该文件称为world.ini，并可在每个世界的个别文件夹中找到。当Cuberite首次创建一个世界时，该文件将填充默认值，这些默认值与原版Minecraft相当接近。

该文件被分成许多不同的部分，每个部分都用方括号括起来的名称标识。例如，[SpawnPosition]是一个部分。每个部分包含与Cuberite的特定功能相关的配置选项。

<details><summary>`world.ini` 的内容</summary>

``` ini

[General]
Dimension=Overworld
UnusedChunkCap=1000
IsDaylightCycleEnabled=1
Gamemode=0
Weather=0
WorldAgeMS=0
TimeInTicks=0

[Broadcasting]
BroadcastDeathMessages=1
BroadcastAchievementMessages=1

[SpawnPosition]
MaxViewDistance=10
X=0.500000
Y=115.000000
Z=0.500000
PregenerateDistance=20

[Storage]
Schema=Default
CompressionFactor=6

[Plants]
MaxCactusHeight=3
MaxSugarcaneHeight=3

[Physics]
DeepSnow=1
ShouldLavaSpawnFire=1
TNTShrapnelLevel=2
WaterSimulator=Vanilla
LavaSimulator=Vanilla
SandInstantFall=0
RedstoneSimulator=Incremental

[Mechanics]
CommandBlocksEnabled=0
PVPEnabled=1
UseChatPrefixes=1
MinNetherPortalWidth=2
MaxNetherPortalWidth=21
MinNetherPortalHeight=3
MaxNetherPortalHeight=21

[Monsters]
VillagersShouldHarvestCrops=1
AnimalsOn=1
Types=bat, cavespider, chicken, cow, creeper, guardian, horse, mooshroom, ocelot, pig, rabbit, sheep, silverfish, skeleton, slime, spider, squid, wolf, zombie

[Weather]
MaxSunnyTicks=180000
MinSunnyTicks=12000
MaxRainTicks=24000
MinRainTicks=12000
MaxThunderStormTicks=15600
MinThunderStormTicks=3600

[LinkedWorlds]
NetherWorldName=world_nether
EndWorldName=world_the_end

[Generator]
BiomeGen=Grown
ShapeGen=BiomalNoise3D
CompositionGen=Biomal
Finishers=RoughRavines, WormNestCaves, WaterLakes, WaterSprings, LavaLakes, LavaSprings, OreNests, Mineshafts, Trees, Villages, SinglePieceStructures: JungleTemple|WitchHut|DesertPyramid|DesertWell, TallGrass, SprinkleFoliage, Ice, Snow, Lilypads, BottomLava, DeadBushes, NaturalPatches, PreSimulator, Animals, OverworldClumpFlowers
Generator=Composable
BiomeGenCacheSize=16
BiomeGenMultiCacheLength=128
SeaLevel=62
BiomalNoise3DFrequencyX=40.000000
BiomalNoise3DFrequencyY=40.000000
BiomalNoise3DFrequencyZ=40.000000
BiomalNoise3DBaseFrequencyX=40.000000
BiomalNoise3DBaseFrequencyZ=40.000000
BiomalNoise3DChoiceFrequencyX=40.000000
BiomalNoise3DChoiceFrequencyY=80.000000
BiomalNoise3DChoiceFrequencyZ=40.000000
BiomalNoise3DAirThreshold=0.000000
BiomalNoise3DNumChoiceOctaves=4
BiomalNoise3DNumDensityOctaves=6
BiomalNoise3DNumBaseOctaves=6
BiomalNoise3DBaseAmplitude=1.000000
CompositionGenCacheSize=64
RoughRavinesGridSize=256
RoughRavinesMaxOffset=128
RoughRavinesMaxSize=128
RoughRavinesMinSize=64
RoughRavinesMaxCenterWidth=8.000000
RoughRavinesMinCenterWidth=2.000000
RoughRavinesMaxRoughness=0.200000
RoughRavinesMinRoughness=0.050000
RoughRavinesMaxFloorHeightEdge=8.000000
RoughRavinesMinFloorHeightEdge=30.000000
RoughRavinesMaxFloorHeightCenter=20.000000
RoughRavinesMinFloorHeightCenter=6.000000
RoughRavinesMaxCeilingHeightEdge=56.000000
RoughRavinesMinCeilingHeightEdge=38.000000
RoughRavinesMaxCeilingHeightCenter=58.000000
RoughRavinesMinCeilingHeightCenter=36.000000
WormNestCavesSize=64
WormNestCavesGrid=96
WormNestMaxOffset=32
WaterLakesProbability=25
LavaLakesProbability=10
MineShaftsGridSize=512
MineShaftsMaxOffset=256
MineShaftsMaxSystemSize=160
MineShaftsChanceCorridor=600
MineShaftsChanceCrossing=200
MineShaftsChanceStaircase=200
VillageGridSize=384
VillageMaxOffset=128
VillageMaxDepth=2
VillageMaxSize=128
VillageMinDensity=50
VillageMaxDensity=80
VillagePrefabs=PlainsVillage, SandVillage
BottomLavaLevel=10
PreSimulatorFallingBlocks=1
PreSimulatorWater=1
PreSimulatorLava=1
OverworldClumpFlowers-1=Forest, -2, 2; ForestHills, -3, 2; FlowerForest = yellowflower; redflower; lilac; rosebush
OverworldClumpFlowers-2=Plains, -2, 1; SunflowerPlains = yellowflower; redflower; azurebluet; redtulip; orangetulip; whitetulip; pinktulip; oxeyedaisy
OverworldClumpFlowers-3=SunflowerPlains, 1, 2 = sunflower
OverworldClumpFlowers-4=FlowerForest, 2, 5 = allium; redtulip; orangetulip; whitetulip; pinktulip; oxeyedaisy
OverworldClumpFlowers-5=Swampland; SwamplandM = brownmushroom; redmushroom; blueorchid
OverworldClumpFlowers-6=MushroomIsland; MushroomShore; MegaTaiga; MegaTaigaHills; MegaSpruceTaiga; MegaSpruceTaigaHills = brownmushroom; redmushroom
OverworldClumpFlowers-7=RoofedForest, 1, 5; RoofedForestM, 1, 5 = rosebush; peony; lilac; grass

[WaterSimulator]
Falloff=1
TickDelay=5
NumNeighborsForSource=2

[LavaSimulator]
Falloff=2
TickDelay=30
NumNeighborsForSource=-1

[FireSimulator]
BurnStepTimeFuel=500
BurnStepTimeNonfuel=100
Flammability=50
ReplaceFuelChance=50000

[Seed]
Seed=775375601

[WaterSprings]
HeightDistribution=0, 0; 10, 10; 11, 75; 16, 83; 20, 83; 24, 78; 32, 62; 40, 40; 44, 15; 48, 7; 56, 2; 64, 1; 255, 0
Chance=24

[LavaSprings]
HeightDistribution=0, 0; 10, 5; 11, 45; 48, 2; 64, 1; 255, 0
Chance=9

[Animals]
AnimalSpawnChunkPercentage=10

[SpawnProtect]
ProtectRadius=10

[Difficulty]
WorldDifficulty=1

[WorldLimit]
LimitRadius=0
```

</details>

:::caution
此配置文件是在创建世界时自动生成的。 以下段落将按照每个条目包含在文件中的顺序进行解释。 在最后一段中，是一些有用的配置示例。 要将配置重置为默认值，只需停止服务器，删除 ini-File 并重新启动。请记住 新文件将创建一个不同的世界。
:::
