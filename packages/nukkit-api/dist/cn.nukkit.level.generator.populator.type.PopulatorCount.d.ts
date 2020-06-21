declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace generator {
                namespace populator {
                    namespace type {
                        /**
                         * @author DaPorkchop_
                         * 
                         *  A populator that generates an object a certain amount of times.
                         *  This prevents the exact same code from being repeated in nearly every single populator
                         */
                        // @ts-ignore
                        abstract class PopulatorCount extends cn.nukkit.level.generator.populator.type.Populator {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public setRandomAmount(randomAmount: number /*int*/): void
                            // @ts-ignore
                            public setBaseAmount(baseAmount: number /*int*/): void
                            // @ts-ignore
                            public populate(level: cn.nukkit.level.ChunkManager, chunkX: number /*int*/, chunkZ: number /*int*/, random: cn.nukkit.math.NukkitRandom, chunk: cn.nukkit.level.format.FullChunk): void
                            // @ts-ignore
                            abstract populateCount(level: cn.nukkit.level.ChunkManager, chunkX: number /*int*/, chunkZ: number /*int*/, random: cn.nukkit.math.NukkitRandom, chunk: cn.nukkit.level.format.FullChunk): void
                        }
                    }
                }
            }
        }
    }
}
