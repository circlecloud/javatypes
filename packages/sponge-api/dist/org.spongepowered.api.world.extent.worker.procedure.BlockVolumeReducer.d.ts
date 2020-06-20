declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace extent {
                    namespace worker {
                        namespace procedure {
                            /**
                             * Reduces a block given as its volume and coordinates into the ongoing
                             * reduction.
                             */
                            // @ts-ignore
                            interface BlockVolumeReducer<T> {
                                /**
                                 * Reduces a block given as its volume and coordinates into the ongoing
                                 * reduction.
                                 * @param volume The volume containing the block
                                 * @param x The x coordinate of the block
                                 * @param y The y coordinate of the block
                                 * @param z The z coordinate of the block
                                 * @param reduction The ongoing reduction
                                 * @return The new reduction
                                 */
                                // @ts-ignore
                                reduce(volume: org.spongepowered.api.world.extent.UnmodifiableBlockVolume, x: number /*int*/, y: number /*int*/, z: number /*int*/, reduction: T): T
                            }
                        }
                    }
                }
            }
        }
    }
}
