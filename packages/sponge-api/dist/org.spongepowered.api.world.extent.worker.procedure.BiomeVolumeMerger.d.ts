declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace extent {
                    namespace worker {
                        namespace procedure {
                            /**
                             * Produces a new biome from two original biomes given as their volume and their
                             * coordinates.
                             */
                            // @ts-ignore
                            interface BiomeVolumeMerger {
                                /**
                                 * Produces a new biome from two original biomes given as their volumes and
                                 * their coordinates.
                                 * @param firstVolume The volume for the first biome
                                 * @param xFirst The x coordinate for the first biome
                                 * @param yFirst The y coordinate for the first biome
                                 * @param zFirst The z coordinate for the first biome
                                 * @param secondVolume The volume for the second biome
                                 * @param xSecond The x coordinate for the second biome
                                 * @param ySecond The y coordinate for the second biome
                                 * @param zSecond The z coordinate for the second biome
                                 * @return The produced biome
                                 */
                                // @ts-ignore
                                merge(firstVolume: org.spongepowered.api.world.extent.UnmodifiableBiomeVolume, xFirst: number /*int*/, yFirst: number /*int*/, zFirst: number /*int*/, secondVolume: org.spongepowered.api.world.extent.UnmodifiableBiomeVolume, xSecond: number /*int*/, ySecond: number /*int*/, zSecond: number /*int*/): org.spongepowered.api.world.biome.BiomeType
                            }
                        }
                    }
                }
            }
        }
    }
}
