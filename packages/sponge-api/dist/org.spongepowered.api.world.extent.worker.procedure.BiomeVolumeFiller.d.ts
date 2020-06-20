declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace extent {
                    namespace worker {
                        namespace procedure {
                            /**
                             * Produces a biome for a coordinate pair.
                             */
                            // @ts-ignore
                            interface BiomeVolumeFiller {
                                /**
                                 * Produces a biome for the coordinate pair.
                                 * @param x The x coordinate
                                 * @param y The y coordinate
                                 * @param z The z coordinate
                                 * @return The produced biome
                                 */
                                // @ts-ignore
                                produce(x: number /*int*/, y: number /*int*/, z: number /*int*/): org.spongepowered.api.world.biome.BiomeType
                            }
                        }
                    }
                }
            }
        }
    }
}
