declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace generator {
                namespace object {
                    namespace ore {
                        /**
                         * author: MagicDroidX
                         * Nukkit Project
                         */
                        // @ts-ignore
                        class OreType extends java.lang.Object {
                            // @ts-ignore
                            constructor(material: cn.nukkit.block.Block, clusterCount: number /*int*/, clusterSize: number /*int*/, minHeight: number /*int*/, maxHeight: number /*int*/)
                            // @ts-ignore
                            constructor(material: cn.nukkit.block.Block, clusterCount: number /*int*/, clusterSize: number /*int*/, minHeight: number /*int*/, maxHeight: number /*int*/, replaceBlockId: number /*int*/)
                            // @ts-ignore
                            public readonly fullId: number /*int*/
                            // @ts-ignore
                            public readonly clusterCount: number /*int*/
                            // @ts-ignore
                            public readonly clusterSize: number /*int*/
                            // @ts-ignore
                            public readonly maxHeight: number /*int*/
                            // @ts-ignore
                            public readonly minHeight: number /*int*/
                            // @ts-ignore
                            public readonly replaceBlockId: number /*int*/
                            // @ts-ignore
                            public spawn(level: cn.nukkit.level.ChunkManager, rand: cn.nukkit.math.NukkitRandom, replaceId: number /*int*/, x: number /*int*/, y: number /*int*/, z: number /*int*/): boolean
                        }
                    }
                }
            }
        }
    }
}
