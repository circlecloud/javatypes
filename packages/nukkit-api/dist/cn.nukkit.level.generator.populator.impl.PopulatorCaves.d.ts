declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace generator {
                namespace populator {
                    namespace impl {
                        /**
                         * author: Angelic47
                         * Nukkit Project
                         */
                        // @ts-ignore
                        class PopulatorCaves extends cn.nukkit.level.generator.populator.type.Populator {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            checkAreaSize: number /*int*/
                            // @ts-ignore
                            public static caveRarity: number /*int*/
                            // @ts-ignore
                            public static caveFrequency: number /*int*/
                            // @ts-ignore
                            public static caveMinAltitude: number /*int*/
                            // @ts-ignore
                            public static caveMaxAltitude: number /*int*/
                            // @ts-ignore
                            public static individualCaveRarity: number /*int*/
                            // @ts-ignore
                            public static caveSystemFrequency: number /*int*/
                            // @ts-ignore
                            public static caveSystemPocketChance: number /*int*/
                            // @ts-ignore
                            public static caveSystemPocketMinSize: number /*int*/
                            // @ts-ignore
                            public static caveSystemPocketMaxSize: number /*int*/
                            // @ts-ignore
                            public static evenCaveDistribution: boolean
                            // @ts-ignore
                            public worldHeightCap: number /*int*/
                            // @ts-ignore
                            public populate(level: cn.nukkit.level.ChunkManager, chunkX: number /*int*/, chunkZ: number /*int*/, random: cn.nukkit.math.NukkitRandom, chunk: cn.nukkit.level.format.FullChunk): void
                            // @ts-ignore
                            generateLargeCaveNode(seed: number /*long*/, chunk: cn.nukkit.level.format.FullChunk, x: number /*double*/, y: number /*double*/, z: number /*double*/): void
                            // @ts-ignore
                            generateCaveNode(seed: number /*long*/, chunk: cn.nukkit.level.format.FullChunk, x: number /*double*/, y: number /*double*/, z: number /*double*/, radius: number /*float*/, angelOffset: number /*float*/, angel: number /*float*/, angle: number /*int*/, maxAngle: number /*int*/, scale: number /*double*/): void
                            // @ts-ignore
                            generateChunk(chunkX: number /*int*/, chunkZ: number /*int*/, generatingChunkBuffer: cn.nukkit.level.format.FullChunk): void
                            // @ts-ignore
                            public static numberInRange(random: java.util.Random, min: number /*int*/, max: number /*int*/): number /*int*/
                        }
                    }
                }
            }
        }
    }
}
