declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace extent {
                    namespace worker {
                        namespace procedure {
                            /**
                             * Produces a block for a coordinate triplet.
                             */
                            // @ts-ignore
                            interface BlockVolumeFiller {
                                /**
                                 * Produces a block for the coordinate triplet.
                                 * @param x The x coordinate
                                 * @param y The y coordinate
                                 * @param z The z coordinate
                                 * @return The produced block
                                 */
                                // @ts-ignore
                                produce(x: number /*int*/, y: number /*int*/, z: number /*int*/): org.spongepowered.api.block.BlockState
                            }
                        }
                    }
                }
            }
        }
    }
}
