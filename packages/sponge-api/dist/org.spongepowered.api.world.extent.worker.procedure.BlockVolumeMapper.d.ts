declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace extent {
                    namespace worker {
                        namespace procedure {
                            /**
                             * Produces a new block from an original block given as its volume and
                             * coordinates.
                             */
                            // @ts-ignore
                            interface BlockVolumeMapper {
                                /**
                                 * Produces a new block from the original block given as its volume and
                                 * coordinates.
                                 * @param volume The volume containing the original block
                                 * @param x The x coordinate of the original block
                                 * @param y The y coordinate of the original block
                                 * @param z The z coordinate of the original block
                                 * @return The produced block
                                 */
                                // @ts-ignore
                                map(volume: org.spongepowered.api.world.extent.UnmodifiableBlockVolume, x: number /*int*/, y: number /*int*/, z: number /*int*/): org.spongepowered.api.block.BlockState
                            }
                        }
                    }
                }
            }
        }
    }
}
