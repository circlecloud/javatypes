declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace generator {
                namespace populator {
                    namespace type {
                        /**
                         * author: MagicDroidX
                         * Nukkit Project
                         */
                        // @ts-ignore
                        abstract class Populator extends java.lang.Object implements cn.nukkit.block.BlockID {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public abstract populate(level: cn.nukkit.level.ChunkManager, chunkX: number /*int*/, chunkZ: number /*int*/, random: cn.nukkit.math.NukkitRandom, chunk: cn.nukkit.level.format.FullChunk): void
                            // @ts-ignore
                            getHighestWorkableBlock(level: cn.nukkit.level.ChunkManager, x: number /*int*/, z: number /*int*/, chunk: cn.nukkit.level.format.FullChunk): number /*int*/
                        }
                    }
                }
            }
        }
    }
}
