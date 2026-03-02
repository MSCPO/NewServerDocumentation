---
title: PHYSICS
---


指定内部物理设置的设置。
Specifies setting for internal physics setup.

## 可选选项

| 变量 | 描述 | 默认值 |
| --- | --- | --- |
| DeepSnow | 启用/禁用下雪时雪堆叠的功能 | 1 |
| ShouldLavaSpawnFire | 启用/禁用岩浆在周围方块上生成火焰的能力 布尔值：可以是 0 或 1。 | 1 |
| TNTShrapnelLevel | 设置爆炸后应该飞出的方块。目前禁用。 0：没有方块被吹走。 1：只有受重力影响的方块。 2：任何方块都受影响。 | 2 |
| WaterSimulator | 设置模拟水流动的方式。 Vanilla:与香草端原版类似的行为。 Floody:更激进的水分布方式。 Vaporise:水会消失（主要用于下界的行为）。 null:没有水流模拟。 | Vanilla  |
| LavaSimulator | 设置岩浆流动的方式。 Vanilla:与香草端原版类似的行为。 Floody:更激进的岩浆分布方式。 Vaporise:岩浆会消失。 null:没有水流模拟。 | Vanilla |
| SandInstantFall | 启用/禁用沙子的下落动画。 布尔值：0 -> 动画，1 -> 无动画。 | 0 |
| RedstoneSimulator | 设置红石触发器。 Incremental：与Notchian类似的行为。 noop：禁用红石。 | Incremental |
