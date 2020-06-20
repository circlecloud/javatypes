declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace extent {
                    namespace worker {
                        namespace procedure {
                            /**
                             * Produces a new biome from an original biome given as its volume and
                             * coordinates.
                             */
                            // @ts-ignore
                            interface BiomeVolumeMapper {
                                /**
                                 * Produces a new biome from the original biome given as its volume and
                                 * coordinates.
                                 * @param volume The volume containing the original biome
                                 * @param x The x coordinate of the original biome
                                 * @param y The y coordinate of the original biome
                                 * @param z The z coordinate of the original biome
                                 * @return The produced biome
                                 */
                                // @ts-ignore
                                map(volume: org.spongepowered.api.world.extent.UnmodifiableBiomeVolume, x: number /*int*/, y: number /*int*/, z: number /*int*/): org.spongepowered.api.world.biome.BiomeType
                            }
                        }
                    }
                }
            }
        }
    }
}
