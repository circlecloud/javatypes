declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace extent {
                    namespace worker {
                        namespace procedure {
                            /**
                             * Visits a biome given as its volume and coordinates.
                             */
                            // @ts-ignore
                            interface BiomeVolumeVisitor<V extends org.spongepowered.api.world.extent.BiomeVolume> {
                                /**
                                 * Visits a biome given as its volume and coordinates.
                                 * @param volume The volume containing the biome
                                 * @param x The x coordinate of the biome
                                 * @param y The y coordinate of the biome
                                 * @param z The z coordinate of the biome
                                 */
                                // @ts-ignore
                                visit(volume: V extends org.spongepowered.api.world.extent.BiomeVolume, x: number /*int*/, y: number /*int*/, z: number /*int*/): void
                            }
                        }
                    }
                }
            }
        }
    }
}
