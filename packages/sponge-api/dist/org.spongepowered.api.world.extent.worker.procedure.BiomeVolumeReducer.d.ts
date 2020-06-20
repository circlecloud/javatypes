declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace extent {
                    namespace worker {
                        namespace procedure {
                            /**
                             * Reduces a biome given as its volume and coordinates into the ongoing
                             * reduction.
                             */
                            // @ts-ignore
                            interface BiomeVolumeReducer<T> {
                                /**
                                 * Reduces a biome given as its volume and coordinates into the ongoing
                                 * reduction.
                                 * @param volume The volume containing the biome
                                 * @param x The x coordinate of the biome
                                 * @param y The y coordinate of the biome
                                 * @param z The z coordinate of the biome
                                 * @param reduction The ongoing reduction
                                 * @return The new reduction
                                 */
                                // @ts-ignore
                                reduce(volume: org.spongepowered.api.world.extent.UnmodifiableBiomeVolume, x: number /*int*/, y: number /*int*/, z: number /*int*/, reduction: T): T
                            }
                        }
                    }
                }
            }
        }
    }
}
