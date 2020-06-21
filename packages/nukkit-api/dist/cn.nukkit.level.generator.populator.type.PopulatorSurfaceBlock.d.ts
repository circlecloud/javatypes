declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace generator {
                namespace populator {
                    namespace type {
                        /**
                         * @author DaPorkchop_
                         * 
                         *  A populator that populates a single block type.
                         */
                        // @ts-ignore
                        abstract class PopulatorSurfaceBlock extends cn.nukkit.level.generator.populator.type.PopulatorCount {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            populateCount(level: cn.nukkit.level.ChunkManager, chunkX: number /*int*/, chunkZ: number /*int*/, random: cn.nukkit.math.NukkitRandom, chunk: cn.nukkit.level.format.FullChunk): void
                            // @ts-ignore
                            abstract canStay(x: number /*int*/, y: number /*int*/, z: number /*int*/, chunk: cn.nukkit.level.format.FullChunk): boolean
                            // @ts-ignore
                            abstract getBlockId(x: number /*int*/, z: number /*int*/, random: cn.nukkit.math.NukkitRandom, chunk: cn.nukkit.level.format.FullChunk): number /*int*/
                            // @ts-ignore
                            getHighestWorkableBlock(level: cn.nukkit.level.ChunkManager, x: number /*int*/, z: number /*int*/, chunk: cn.nukkit.level.format.FullChunk): number /*int*/
                            // @ts-ignore
                            placeBlock(x: number /*int*/, y: number /*int*/, z: number /*int*/, id: number /*int*/, chunk: cn.nukkit.level.format.FullChunk, random: cn.nukkit.math.NukkitRandom): void
                        }
                    }
                }
            }
        }
    }
}
