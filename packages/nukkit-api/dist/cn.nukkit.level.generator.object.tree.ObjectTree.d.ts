declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace generator {
                namespace object {
                    namespace tree {
                        /**
                         * author: MagicDroidX
                         * Nukkit Project
                         */
                        // @ts-ignore
                        abstract class ObjectTree extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            overridable(id: number /*int*/): boolean
                            // @ts-ignore
                            public getType(): number /*int*/
                            // @ts-ignore
                            public getTrunkBlock(): number /*int*/
                            // @ts-ignore
                            public getLeafBlock(): number /*int*/
                            // @ts-ignore
                            public getTreeHeight(): number /*int*/
                            // @ts-ignore
                            public static growTree(level: cn.nukkit.level.ChunkManager, x: number /*int*/, y: number /*int*/, z: number /*int*/, random: cn.nukkit.math.NukkitRandom): void
                            // @ts-ignore
                            public static growTree(level: cn.nukkit.level.ChunkManager, x: number /*int*/, y: number /*int*/, z: number /*int*/, random: cn.nukkit.math.NukkitRandom, type: number /*int*/): void
                            // @ts-ignore
                            public canPlaceObject(level: cn.nukkit.level.ChunkManager, x: number /*int*/, y: number /*int*/, z: number /*int*/, random: cn.nukkit.math.NukkitRandom): boolean
                            // @ts-ignore
                            public placeObject(level: cn.nukkit.level.ChunkManager, x: number /*int*/, y: number /*int*/, z: number /*int*/, random: cn.nukkit.math.NukkitRandom): void
                            // @ts-ignore
                            placeTrunk(level: cn.nukkit.level.ChunkManager, x: number /*int*/, y: number /*int*/, z: number /*int*/, random: cn.nukkit.math.NukkitRandom, trunkHeight: number /*int*/): void
                        }
                    }
                }
            }
        }
    }
}
